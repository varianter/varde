/*
 * MicroLighter highlights by registering ranges in `CSS.highlights`, never by
 * rewriting the markup. Two constraints follow: the `<code>` must hold a single
 * text node, and every scan must cover the whole document (`highlightAll()`
 * clears all categories).
 *
 * Served as source, not bundled: MicroLighter's dynamic grammar imports break
 * in bundlers.
 */

import { highlightAll } from "microlighter";

/**
 * @typedef {object} Autoclose
 * @property {string} open Characters that open a pair.
 * @property {string} close Their partners, in the same order.
 */

/**
 * @typedef {object} MicrojarOptions
 * @property {string} [tab="  "] Inserted by Tab, and by auto-indent.
 * @property {RegExp} [indentOn] Tested against the text before the caret; a
 *   match indents the new line. Must not carry the `g` flag.
 * @property {RegExp} [moveToNewLine] Tested against the text after the caret; a
 *   match gets a line of its own.
 * @property {Autoclose | false} [autoclose] Paired characters typed as a unit.
 * @property {number} [debounce=120] Milliseconds of quiet before re-highlighting.
 */

/**
 * @typedef {object} Microjar
 * @property {(code: string, notify?: boolean) => void} updateCode Replace the
 *   contents.
 * @property {(callback: (code: string) => void) => void} onUpdate
 * @property {() => string} toString
 * @property {() => Promise<void>} refresh Re-highlight now, skipping the debounce.
 * @property {() => void} destroy
 */

/** @type {Autoclose} */
const DEFAULT_AUTOCLOSE = { open: "([{'\"`", close: ")]}'\"`" };

/**
 * Leading spaces and tabs of a single line.
 * @param {string} line
 * @returns {string}
 */
function leadingSpace(line) {
  let end = 0;
  while (end < line.length && (line[end] === " " || line[end] === "\t")) end++;
  return line.slice(0, end);
}

/**
 * Turn a `<code>` element into a small code editor.
 * @param {HTMLElement} element The `<code>`. MicroLighter looks for `pre > code`,
 *   so it needs a `<pre>` parent.
 * @param {MicrojarOptions} [options]
 * @returns {Microjar}
 */
export function microjar(element, options = {}) {
  const tab = options.tab ?? "  ";
  const indentOn = options.indentOn ?? /[([{]$/;
  const moveToNewLine = options.moveToNewLine ?? /^[)\]}]/;
  const autoclose = options.autoclose ?? DEFAULT_AUTOCLOSE;
  const wait = options.debounce ?? 120;

  const doc = element.ownerDocument;

  /** @type {(code: string) => void} */
  let update = () => {};
  let composing = false;
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;
  /** @type {Promise<unknown>} */
  let queue = Promise.resolve();

  element.setAttribute("contenteditable", "plaintext-only");
  element.setAttribute("role", "textbox");
  element.setAttribute("aria-multiline", "true");
  element.spellcheck = false;

  // A floor, so the element is editable even without editor styles loaded.
  element.style.whiteSpace = "pre-wrap";
  element.style.outline = "none";

  const text = () => element.textContent ?? "";
  const notify = () => update(text());

  /**
   * @param {number} value
   * @param {number} limit
   * @returns {number}
   */
  const clamp = (value, limit) => Math.max(0, Math.min(value, limit));

  /**
   * Character offset of a DOM position, measured from the start of the editor.
   * @param {Node} node
   * @param {number} offset
   * @returns {number}
   */
  function offsetOf(node, offset) {
    const range = doc.createRange();
    range.selectNodeContents(element);
    range.setEnd(node, offset);
    return range.toString().length;
  }

  /**
   * The caret as two character offsets. Anchor and focus, so direction is
   * implied.
   * @returns {{anchor: number, focus: number}}
   */
  function caret() {
    const selection = doc.getSelection();
    const anchorNode = selection?.anchorNode;
    if (!selection || !anchorNode || !element.contains(anchorNode)) {
      return { anchor: 0, focus: 0 };
    }
    const anchor = offsetOf(anchorNode, selection.anchorOffset);
    const focusNode = selection.focusNode;
    return {
      anchor,
      focus:
        focusNode && element.contains(focusNode)
          ? offsetOf(focusNode, selection.focusOffset)
          : anchor,
    };
  }

  /**
   * Put the caret, or a selection, at the given character offsets.
   *
   * Offsets index the editor's whole text, so merge split nodes first.
   * @param {number} anchor
   * @param {number} [focus=anchor]
   */
  function place(anchor, focus = anchor) {
    element.normalize();
    const node = element.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const limit = node.nodeValue?.length ?? 0;
    doc.getSelection()?.setBaseAndExtent(node, clamp(anchor, limit), node, clamp(focus, limit));
  }

  /**
   * The text on either side of the selection, plus its bounds.
   * @returns {{before: string, after: string, from: number, to: number}}
   */
  function around() {
    const { anchor, focus } = caret();
    const from = Math.min(anchor, focus);
    const to = Math.max(anchor, focus);
    const all = text();
    return { before: all.slice(0, from), after: all.slice(to), from, to };
  }

  /**
   * Collapse the element back to a single Text node.
   *
   * Reads `innerText`, not `textContent` — a `<br>` stands in for a newline
   * that `textContent` drops.
   */
  function flatten() {
    if (composing) return;

    if (!element.firstChild) {
      element.append(doc.createTextNode(""));
      return;
    }

    element.normalize();
    const first = element.firstChild;
    if (first && first.nodeType === Node.TEXT_NODE && !first.nextSibling) return;

    const { anchor, focus } = caret();
    element.textContent = element.innerText.replace(/\r\n?/g, "\n");
    if (!element.firstChild) element.append(doc.createTextNode(""));
    place(anchor, focus);
  }

  /**
   * Deprecated, but the only way to mutate without losing the native undo
   * stack.
   * @param {string} value
   */
  function insert(value) {
    doc.execCommand("insertText", false, value);
  }

  /**
   * `highlightAll()` clears all categories, so serialise scans.
   * @returns {Promise<void>}
   */
  function rescan() {
    queue = queue
      .then(async () => {
        flatten();
        await highlightAll({ root: doc });
      })
      // Keep a failed scan from wedging the queue, but make it visible.
      .catch((error) => console.error("microjar: highlighting failed", error));
    return /** @type {Promise<void>} */ (queue);
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(rescan, wait);
  }

  /** @param {KeyboardEvent} event */
  function handleEnter(event) {
    const { before, after } = around();
    const indent = leadingSpace(before.slice(before.lastIndexOf("\n") + 1));
    const deeper = indentOn.test(before) ? indent + tab : indent;

    event.preventDefault();
    insert(`\n${deeper}`);

    // `{|}` becomes `{`, an indented blank line, then `}` on a line of its own.
    if (deeper !== indent && moveToNewLine.test(after)) {
      const at = caret();
      insert(`\n${indent}`);
      place(at.anchor, at.focus);
    }
  }

  /** @param {KeyboardEvent} event */
  function handleTab(event) {
    event.preventDefault();

    if (!event.shiftKey) {
      insert(tab);
      return;
    }

    const { before } = around();
    const lineStart = before.lastIndexOf("\n") + 1;
    const indent = leadingSpace(before.slice(lineStart));
    if (!indent) return;

    const removed = Math.min(tab.length, indent.length);
    const at = caret();
    place(lineStart, lineStart + removed);
    doc.execCommand("delete");
    place(at.anchor - removed, at.focus - removed);
  }

  /** @param {KeyboardEvent} event */
  function handleAutoclose(event) {
    if (!autoclose || event.key.length !== 1) return;

    const { after, from, to } = around();

    // A closing character that is already there is stepped over, so `(x)` never
    // becomes `(x))`. Checked before opening, so a quote closes an open string.
    if (from === to && autoclose.close.includes(event.key) && after.startsWith(event.key)) {
      event.preventDefault();
      place(from + 1);
      return;
    }

    const index = autoclose.open.indexOf(event.key);
    if (index < 0) return;

    const wrapped = text().slice(from, to);

    event.preventDefault();
    insert(event.key + wrapped + (autoclose.close[index] ?? ""));
    // Land inside the pair, keeping any wrapped text selected.
    place(from + 1, from + 1 + wrapped.length);
  }

  /** @param {KeyboardEvent} event */
  function onKeyDown(event) {
    if (event.defaultPrevented || event.isComposing) return;
    // Leave shortcuts alone — Ctrl+[ should not auto-close a bracket.
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    if (event.key === "Enter") handleEnter(event);
    else if (event.key === "Tab") handleTab(event);
    else handleAutoclose(event);
  }

  /** @param {ClipboardEvent} event */
  function onPaste(event) {
    const value = event.clipboardData?.getData("text/plain");
    if (value === undefined) return;
    event.preventDefault();
    // `plaintext-only` already strips markup. This is for CRLF, and to put the
    // insertion on the same undo stack as everything else.
    insert(value.replace(/\r\n?/g, "\n"));
  }

  // "input" also catches IME commits and the browser's own undo.
  function onInput() {
    notify();
    schedule();
  }

  /** @type {(() => void)[]} */
  const unbind = [];

  /**
   * @template {keyof HTMLElementEventMap} K
   * @param {K} type
   * @param {(event: HTMLElementEventMap[K]) => void} listener
   */
  function on(type, listener) {
    element.addEventListener(type, listener);
    unbind.push(() => element.removeEventListener(type, listener));
  }

  on("keydown", onKeyDown);
  on("input", onInput);
  on("paste", onPaste);
  on("compositionstart", () => {
    composing = true;
  });
  on("compositionend", () => {
    composing = false;
    schedule();
  });

  // Warms the grammar cache and highlights whatever the markup already holds.
  void rescan();

  return {
    updateCode(code, shouldNotify = true) {
      // textContent bypasses execCommand, clearing the undo stack — setup only.
      element.textContent = code;
      if (!element.firstChild) element.append(doc.createTextNode(""));
      void rescan();
      if (shouldNotify) notify();
    },

    onUpdate(callback) {
      update = callback;
    },

    toString: text,
    refresh: rescan,

    destroy() {
      clearTimeout(timer);
      for (const remove of unbind) remove();
      element.removeAttribute("contenteditable");
      element.removeAttribute("role");
      element.removeAttribute("aria-multiline");
    },
  };
}

/**
 * A live code example: an editor and, when the markup has one, a preview that
 * re-renders from the editor's contents on every update.
 */
class CodeExample extends HTMLElement {
  /** @type {Microjar | undefined} */
  _jar;

  connectedCallback() {
    if (this._jar) return;
    const code = this.querySelector("pre > code");
    if (!code) return;

    this._jar = microjar(code, { tab: "  " });

    const preview = this.querySelector(":scope > color-mode");
    if (preview) {
      const render = () => {
        preview.innerHTML = this._jar.toString();
      };
      this._jar.onUpdate(render);
      render();
    }
  }

  disconnectedCallback() {
    this._jar?.destroy();
    this._jar = undefined;
  }
}

if (!("highlights" in CSS)) {
  console.error("No CSS Custom Highlight API: every code block will be unhighlighted.");
}

customElements.define("code-example", CodeExample);

// Plain code blocks (`no-preview`) have no editor to trigger a scan, so make
// sure the document is highlighted once on load.
void highlightAll({ root: document }).catch((error) =>
  console.error("microjar: highlighting failed", error),
);
