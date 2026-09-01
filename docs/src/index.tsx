/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative icons do not need titles */

import stylesCSS from "@varde/css" with { type: "text" };
import { Hono } from "hono";
import { css, Style } from "hono/css";
import { html } from "hono/html";
import type { FC } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { DocsPage } from "./components/docs";
import { Markdown, processMarkdown } from "./components/markdown";
import { NavLinks } from "./components/nav";
import { knowledgeDocs } from "./knowledge";
import { staticApp } from "./static";

const app = new Hono({ strict: false }).basePath("/docs");

app.get("/styles.css", (c) => {
  c.header("Content-Type", "text/css");
  return c.body(stylesCSS);
});

app.use(
  "*",
  jsxRenderer(
    ({ children }) => {
      return (
        <html lang="en" class="fg-default bg-surface-base">
          <head>
            {html`<script>
              (function(){var m=document.cookie.match(/(?:^|;\\s*)theme=([^;]+)/);if(m)document.documentElement.setAttribute("data-color-scheme",m[1])})();
            </script>`}
            <Style>
              {css`
                @view-transition {
                  navigation: auto;
                }

                .demo-box {
                  min-height: 2.5rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: repeating-linear-gradient(
                    125deg,
                    var(--border-faint) 0 1px,
                    transparent 0px 7px
                  );
                  border: 1px solid var(--border-default);
                  text-shadow:
                    0px 0px 3px var(--surface-base),
                    0px 0px 6px var(--surface-base);
                }

                body {
                  --header-height: 4rem;
                  display: grid;
                  min-height: 100svh;
                  grid-template-rows: var(--header-height) 1fr;
                  grid-template-areas:
                    "header"
                    "main";
                  @media (min-width: 768px) {
                    grid-template-rows: var(--header-height) max-content;
                    grid-template-columns: 240px 1fr;
                    grid-template-areas:
                      "header header"
                      "nav    main";
                  }
                }

                .site-header {
                  grid-area: header;
                  display: grid;
                  align-items: center;
                  grid-template-columns: auto 1fr;
                  @media (min-width: 768px) {
                    grid-template-columns: subgrid;
                    grid-template-rows: subgrid;
                  }
                }

                .site-nav {
                  @media (min-width: 768px) {
                    border-right: 1px solid var(--border-faint);
                    display: grid;
                    grid-template-rows: subgrid;
                    grid-area: nav;
                  }
                }

                .site-main {
                  grid-area: main;
                }


                @media (max-width: 767px) {
                  .site-nav-list {
                    max-height: 100svh;
                    overflow-y: scroll;
                  }
                }

                @media (min-width: 768px) {
                  .site-nav-list {
                    grid-row: nav;
                  }

                  .site-logo {
                    border-right: 1px solid var(--border-faint);
                  }

                  .menu-toggle {
                    display: none;
                  }

                  #nav-popover {
                    display: contents;
                  }
                }

                /* ── Shiki syntax theme — colors resolved from design tokens ── */
                :root {
                  --shiki-foreground: var(--foreground-default);
                  --shiki-background: var(--surface-dyed);
                  --shiki-token-comment: var(--foreground-muted);
                  --shiki-token-punctuation: var(--foreground-muted);
                  --shiki-token-keyword: light-dark(var(--palette-purple-650), var(--palette-purple-300));
                  --shiki-token-string: light-dark(var(--palette-green-650), var(--palette-green-350));
                  --shiki-token-string-expression: light-dark(var(--palette-teal-650), var(--palette-teal-350));
                  --shiki-token-constant: light-dark(var(--palette-orange-650), var(--palette-orange-350));
                  --shiki-token-function: light-dark(var(--palette-blue-650), var(--palette-blue-300));
                  --shiki-token-parameter: light-dark(var(--palette-coral-600), var(--palette-coral-300));
                  --shiki-token-link: light-dark(var(--palette-periwinkle-650), var(--palette-periwinkle-300));
                  --shiki-token-inserted: light-dark(var(--palette-green-650), var(--palette-green-350));
                  --shiki-token-deleted: light-dark(var(--palette-coral-650), var(--palette-coral-350));
                  --shiki-token-changed: light-dark(var(--palette-yellow-650), var(--palette-yellow-350));
                }
              `}
            </Style>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              rel="icon"
              type="image/svg+xml"
              href="https://varde.variant.dev/static/logos/variant-favicon.svg"
            />
            <title>Varde – Variant design system documentation</title>
            <link rel="stylesheet" href="/docs/styles.css" />
            {html`<script type="module">
              import cssVarBind from 'https://cdn.jsdelivr.net/npm/css-var-bind@0.0.1/+esm'
            </script>`}
            <script type="module"></script>
          </head>
          <body class="fs-m">
            <header class="site-header stack b-b b-faint px-s-m ">
              <a
                href="/docs"
                class="site-logo py-xs t-bold gap-xs stack-horizontal inline-flex self-stretch"
              >
                <img
                  src="https://varde.variant.dev/static/logos/variant-circle-filled.svg"
                  alt="Varde"
                  width="24"
                  height="24"
                />{" "}
                <span class="fg-default lh-tight">Varde</span>
              </a>
              <div class="w-full stack-horizontal gap-xs">
                <div class="ml-auto gap-2xs stack-horizontal">
                  <button
                    id="theme-toggle"
                    type="button"
                    class="button"
                    data-variant="tinted"
                    data-size="small"
                    aria-label="Toggle color scheme"
                  >
                    Theme
                  </button>
                  <button
                    type="button"
                    data-size="small"
                    popovertarget="nav-popover"
                    class="button menu-toggle"
                    aria-label="Toggle navigation menu"
                  >
                    <span aria-hidden="true">☰</span> Menu
                  </button>
                </div>
              </div>
            </header>
            <nav class="site-nav">
              <div
                id="nav-popover"
                data-type="drawer"
                data-position="left"
                popover="auto"
                class="popover"
              >
                <div class="px-s-m bg-surface-base site-nav-list">
                  <NavLinks />

                  <div class="site-external-links py-s">
                    <a
                      href="https://github.com/varianter/varde"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stack-horizontal gap-2xs fg-muted fs-s"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <main class="site-main block">{children}</main>
            {html`<script>
              (function(){function e(){var t=document.documentElement.getAttribute("data-color-scheme");if(t==="dark"||t==="light")return t;return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function n(t){document.documentElement.setAttribute("data-color-scheme",t);document.cookie="theme="+t+";max-age=31536000;path=/;SameSite=Lax"}document.getElementById("theme-toggle").addEventListener("click",function(){var t=e();n(t==="dark"?"light":"dark")})})();
            </script>`}
          </body>
        </html>
      );
    },
    { docType: true },
  ),
);

// Auto-register pages from packages/knowledge/src/*.md

const pages = await Promise.all(
  knowledgeDocs.map(async (doc) => {
    const content = await processMarkdown(doc.content);
    return { ...doc, content };
  }),
);

for (const { slug, title, description, content } of pages) {
  app.get(`/reference/${slug}`, (c) => {
    return c.render(
      <DocsPage title={title} description={description}>
        <Markdown html={content} />
      </DocsPage>,
    );
  });
}

// Glob-import all page files under pages/
const glob = new Bun.Glob("pages/**/*.tsx");
const pagesDir = `${import.meta.dir}`;

const files = await Array.fromAsync(glob.scan(pagesDir));

const modules = await Promise.all(
  files.map(async (file) => {
    const module = await import(`${pagesDir}/${file}`);
    return module as { path: string; default: FC };
  }),
);

for (const mod of modules) {
  if (mod.default && mod.path) {
    const Page = mod.default;
    app.get(mod.path, (c) => {
      return c.render(<Page />);
    });
  }
}

const root = new Hono();
root.route("/", app);
root.route("/", staticApp);

export { app };

export default {
  port: 1234,
  fetch: root.fetch,
};
