import { defineMdastPlugin, markdownToHtml } from "satteri";
import { createHighlighter, type Highlighter } from "shiki";

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

/** Build the HTML string for a code-example wrapper (preview + details toggle). */
function wrapCodeExample(rawHtml: string, highlightedPre: string): string {
  return [
    `<div class="b-all b-faint br-m mt-m mb-xl">`,
    `<div class="code-example__preview p-s bg-surface-tinted">${rawHtml}</div>`,
    `<details class="b-t b-faint">`,
    `<summary class="px-s py-2xs my-xs mx-xs button" data-size='small' data-variant='outlined'><div class="">Show code</div></summary>`,
    `<div class="px-s">`,
    highlightedPre,
    `</div>`,
    `</details>`,
    `</div>`,
  ].join("");
}

function highlightCodePlugin(hl: Highlighter) {
  return defineMdastPlugin({
    name: "highlight-code",
    async code(node, ctx) {
      const lang = node.lang || "text";
      const text = node.value;

      const highlighted = await hl.codeToHtml(text, {
        lang,
        theme: "github-dark",
      });

      if (lang === "html" && text.trim().length > 0) {
        const wrapperHtml = wrapCodeExample(text, highlighted);
        ctx.replaceNode(node, { type: "html", value: wrapperHtml });
      } else {
        ctx.replaceNode(node, { type: "html", value: highlighted });
      }
    },
  });
}

export async function processMarkdown(content: string): Promise<string> {
  const hl = await getHighlighter();

  const result = await markdownToHtml(content, {
    features: { gfm: true },
    mdastPlugins: [highlightCodePlugin(hl)],
  });

  return result.html;
}

export function Markdown({ html }: { html: string }) {
  return (
    <div class="typeset" style={{ maxWidth: "100%" }} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
