import type { Element, Root } from "hast";
import { fromHtml } from "hast-util-from-html";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { createHighlighter, type Highlighter } from "shiki";
import { unified } from "unified";
import { visit } from "unist-util-visit";

let highlighter: Highlighter | null = null;

async function getHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["html", "css", "bash", "js", "ts", "tsx", "json", "text", "shell"],
    });
  }
  return highlighter;
}

function getLanguage(codeEl: Element): string {
  const className = codeEl.properties?.className;
  if (!Array.isArray(className)) return "text";
  const langClass = className.find(
    (c): c is string => typeof c === "string" && c.startsWith("language-"),
  );
  return langClass ? langClass.slice(9) : "text";
}

function getTextContent(node: Element): string {
  const parts: string[] = [];
  function collect(n: { type: string; value?: string; children?: unknown[] }) {
    if (n.type === "text" && n.value) parts.push(n.value);
    if (n.children) for (const child of n.children) collect(child as typeof n);
  }
  collect(node);
  return parts.join("");
}

/** Build the HTML string for a code-example wrapper (preview + details toggle). */
function wrapCodeExample(rawHtml: string, highlightedPre: string): string {
  return [
    `<div class="b-all b-faint br-m mt-m mb-xl untypeset">`,
    `<div class="code-example__preview  p-s bg-surface-tinted">${rawHtml}</div>`,
    `<details class="b-t b-faint">`,
    `<summary class="px-s py-2xs my-xs mx-xs button" data-size='small' data-variant='outlined'><div class="">Show code</div></summary>`,
    `<div class="px-s">`,
    highlightedPre,
    `</div>`,
    `</details>`,
    `</div>`,
  ].join("");
}

function rehypeHighlight(hl: Highlighter) {
  return async (tree: Root) => {
    const replacements: {
      parent: Element | Root;
      index: number;
      lang: string;
      text: string;
    }[] = [];

    visit(tree, "element", (node, index, parent) => {
      if (index === undefined || !parent) return;

      const el = node as Element;
      if (el.tagName !== "pre") return;
      if (!el.children || el.children.length !== 1) return;

      const first = el.children[0];
      if (!first || first.type !== "element") return;
      if ((first as Element).tagName !== "code") return;

      replacements.push({
        parent: parent as Element | Root,
        index,
        lang: getLanguage(first as Element),
        text: getTextContent(first as Element),
      });
    });

    for (const { parent, index, lang, text } of replacements) {
      const highlighted = await hl.codeToHtml(text, {
        lang,
        theme: "github-dark",
      });

      if (lang === "html" && text.trim().length > 0) {
        const wrapperHtml = wrapCodeExample(text, highlighted);
        const fragment = fromHtml(wrapperHtml, { fragment: true });
        const wrapper = fragment.children[0];
        if (wrapper) {
          parent.children[index] = wrapper as Element;
        }
      } else {
        const fragment = fromHtml(highlighted, { fragment: true });
        const preElement = fragment.children[0];
        if (preElement) {
          parent.children[index] = preElement as Element;
        }
      }
    }
  };
}

export async function processMarkdown(content: string): Promise<string> {
  const hl = await getHighlighter();

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, hl)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return String(result);
}

export function Markdown({ html }: { html: string }) {
  return (
    <div class="typeset" style={{ maxWidth: "100%" }} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
