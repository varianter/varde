import { defineMdastPlugin, markdownToHtml } from "satteri";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Build a live code example: a rendered preview (HTML only) plus an editable,
 * client-highlighted editor. The client mounts it via `<code-example>`. */
function codeExample(lang: string, code: string, meta: string | null | undefined): string {
  const open = meta?.split(/\s+/).includes("open") ? " open" : "";
  const preview =
    lang === "html"
      ? `<color-mode palette="inherit" class="d-block code-example__preview p-s surface-base v-untypeset">${code}</color-mode>`
      : "";

  return [
    `<code-example class="b-all bc-subtle br-m mt-m mb-xl of-clip d-block">`,
    preview,
    `<details class="b-t bc-subtle surface-tinted"${open}>`,
    `<summary class="px-s py-2xs my-xs mx-xs v-button" data-size="small" data-variant="outlined"><div>Show editor</div></summary>`,
    `<div class="px-s">`,
    `<pre class="microjar px-m py-m -mx-s"><code data-language="${lang}">${escapeHtml(code)}</code></pre>`,
    `</div>`,
    `</details>`,
    `</code-example>`,
  ].join("");
}

function highlightCodePlugin() {
  return defineMdastPlugin({
    name: "highlight-code",
    code(node, ctx) {
      if (!node.value.trim()) return;
      ctx.replaceNode(node, {
        type: "html",
        value: codeExample(node.lang || "text", node.value, node.meta),
      });
    },
  });
}

export async function processMarkdown(content: string): Promise<string> {
  const result = await markdownToHtml(content, {
    features: { gfm: true, frontmatter: true },
    mdastPlugins: [highlightCodePlugin()],
  });

  return result.html;
}

export function Markdown({ html }: { html: string }) {
  return (
    <div
      class="v-typeset"
      style={{ maxWidth: "100%" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
