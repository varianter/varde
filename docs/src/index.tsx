/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative icons do not need titles */

import { join } from "node:path";
import stylesCSS from "@varde/css" with { type: "text" };
import { Hono } from "hono";
import { css, Style } from "hono/css";
import { html } from "hono/html";
import type { FC } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { DocsPage } from "./components/docs";
import { Header } from "./components/header";
import { Markdown, processMarkdown } from "./components/markdown";
import { NavLinks } from "./components/nav";
import { SearchDialog } from "./components/search";
import { getKnowledgeDocs } from "./knowledge";
import { rootApp } from "./root";
import { staticApp } from "./static";
import { SITE_ORIGIN, withTrailingSlash } from "./url";

const app = new Hono({ strict: false }).basePath("/docs");

app.get("/styles.css", (c) => {
  c.header("Content-Type", "text/css");
  return c.body(stylesCSS);
});

const clientsideDir = join(import.meta.dir, "clientside");

app.get("/clientside/:file", async (c) => {
  const rel = c.req.param("file");
  if (!rel) {
    return c.notFound();
  }
  const file = Bun.file(join(clientsideDir, rel));
  if (!(await file.exists())) {
    return c.notFound();
  }
  return new Response(file, { headers: { "Content-Type": "text/javascript" } });
});

// In dev, serve pagefind's build output straight off disk so search also
// works locally after `bun run build` — matching the deployed `/docs/pagefind/*`
// shape without needing a rebuild-and-restart cycle. 404s (search no-ops) until
// that first build has run.
const pagefindDir = join(import.meta.dir, "../dist/docs/pagefind");

app.get("/pagefind/:path{.*}", async (c) => {
  const file = Bun.file(join(pagefindDir, c.req.param("path")));
  if (!(await file.exists())) {
    return c.notFound();
  }
  return new Response(file);
});

const DEFAULT_TITLE = "Varde – Variant design system documentation";

app.use(
  "*",
  jsxRenderer(
    ({ children, title }, c) => {
      return (
        <html lang="en">
          <head>
            {html`<script>
              const MQL = matchMedia("(prefers-color-scheme: dark)");

              const theme = {
                cookie: "theme",
                pattern: /(?:^|;\\s*)theme=(dark|light)\\b/,
                maxAge: 31536000,

                normalize: (v) => (v === "dark" || v === "light" ? v : undefined),

                resolve: (saved, system) => theme.normalize(saved) ?? system,

                parse: (cookies) => cookies.match(theme.pattern)?.[1],

                // Shell
                get saved()   { return theme.parse(document.cookie); },
                get system()  { return MQL.matches ? "dark" : "light"; },
                get current() { return theme.resolve(theme.saved, theme.system); },

                apply(value) {
                  document.documentElement.dataset.colorScheme = value;
                  cookieStore
                    .set({ name: theme.cookie, value, maxAge: theme.maxAge, sameSite: "lax" })
                    .catch(() => {});
                },

                toggle() {
                  theme.apply(theme.current === "dark" ? "light" : "dark");
                },

                init() {
                  document.documentElement.dataset.colorScheme = theme.current;

                  cookieStore?.addEventListener?.("change", (e) => {
                    const found = e.changed.find((c) => c.name === theme.cookie);
                    if (found) document.documentElement.dataset.colorScheme = found.value;
                  });
                },
              };

              theme.init();
              globalThis.theme = theme;

              document.addEventListener("click", (event) => {
                if (event.target instanceof Element && event.target.closest("#theme-toggle")) {
                  theme.toggle();
                }
              });
            </script>`}
            <link
              rel="preload"
              as="font"
              crossorigin="anonymous"
              type="font/ttf"
              href="https://varde.variant.dev/static/font/varde-bs-variable.ttf"
            />
            <link rel="preload" href="/docs/styles.css" as="style" />
            <link rel="stylesheet" href="/docs/styles.css" />
            <Style>
              {css`
                @view-transition {
                  navigation: auto;
                }


                [data-transition="content"]{
                  view-transition-name: article-content;
                }

                ::view-transition-old(root),
                ::view-transition-new(root) {
                  animation: none;
                  mix-blend-mode: normal;
                }

                ::view-transition-old(article-content) {
                  animation: none;
                  opacity: 0;
                }

                ::view-transition-group(article-content) {
                  animation-duration: 0s;
                }

                ::view-transition-new(article-content) {
                  animation: article-content-enter 0.6s cubic-bezier(.32, .58, .2, 1) both;
                  mix-blend-mode: normal;
                }

                @keyframes article-content-enter {
                  from {
                    opacity: 0;
                    translate: 0 40px;
                  }
                }

                @media (prefers-reduced-motion: reduce) {
                  ::view-transition-new(main) {
                    animation: none;
                  }
                }

                .demo-box {
                  min-height: 2.5rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: repeating-linear-gradient(
                    125deg,
                    var(--border-subtle) 0 1px,
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
                  @media (min-width: 1600px) {
                    max-width: 1600px;
                    margin-inline: auto;
                    border-inline: 1px solid var(--border-subtle);
                  }
                }

                .site-header {
                  grid-area: header;
                  display: grid;
                  align-items: center;
                  grid-template-columns: auto 1fr;
                  z-index: 999;
                  @media (min-width: 768px) {
                    grid-template-columns: subgrid;
                    grid-template-rows: subgrid;
                  }
                }

                .site-nav {
                  @media (min-width: 768px) {
                    border-right: 1px solid var(--border-subtle);
                    display: grid;
                    grid-template-rows: subgrid;
                    grid-area: nav;
                  }
                }

                .site-main {
                  isolation: isolate;
                  grid-area: main;
                  max-width: 100vw;
                  min-width: 0;
                }

                .content-grid,
                .content-grid-pass {
                  display: grid;
                  grid-template-columns: subgrid;
                  column-gap: 0;
                }

                .content-grid {
                  --content-gutter: var(--spacing-s);
                  --content-max-width: 1400px;
                  grid-template-columns:
                    [full-start] minmax(var(--content-gutter), 1fr)
                    [content-start] min(100% - var(--content-gutter) * 2, var(--content-max-width))
                    [content-end] minmax(var(--content-gutter), 1fr)
                    [full-end];

                  @media (min-width: 768px) {
                    --content-gutter: var(--spacing-m-3xl);
                  }
                }

                :is(.content-grid, .content-grid-pass) > * {
                  grid-column: content;
                }

                :is(.content-grid, .content-grid-pass) > [data-bleed="full"] {
                  grid-column: full;
                }


                @media (max-width: 767px) {
                  .site-nav-list {
                    max-height: 100svh;
                    height: 100%;
                    overflow-y: scroll;
                  }
                }

                @media (min-width: 768px) {
                  .site-nav-list {
                    grid-row: nav;
                    position: sticky;
                    top: var(--header-height);
                    align-self: start;
                    max-height: calc(100svh - var(--header-height));
                    overflow-y: auto;
                  }

                  .site-logo {
                    border-right: 1px solid var(--border-subtle);
                  }

                  .menu-toggle {
                    display: none;
                  }

                  #nav-popover {
                    display: contents;
                  }
                }

                /* ── Syntax theme — colors resolved from design tokens ── */
                :root {
                  --syntax-bg: light-dark(var(--palette-grey-100), var(--palette-grey-850));
                  --syntax-ink: light-dark(var(--palette-grey-800), var(--palette-grey-150));
                  --syntax-rule: light-dark(var(--palette-orange-300), var(--palette-orange-650));
                  --syntax-caret: light-dark(var(--palette-purple-500), var(--palette-purple-400));
                  --syntax-select: light-dark(var(--palette-grey-250), var(--palette-grey-700));
                  --syntax-comment: light-dark(var(--palette-grey-550), var(--palette-grey-450));
                  --syntax-keyword: light-dark(
                    var(--palette-purple-550),
                    var(--palette-purple-450)
                  );
                  --syntax-string: light-dark(var(--palette-green-500), var(--palette-green-250));
                  --syntax-number: light-dark(var(--palette-orange-600), var(--palette-orange-350));
                  --syntax-entity: light-dark(var(--palette-blue-500), var(--palette-blue-400));
                  --syntax-binding: light-dark(var(--palette-teal-700), var(--palette-teal-450));
                  --syntax-mark: light-dark(var(--palette-grey-650), var(--palette-grey-350));
                  --syntax-regexp: light-dark(var(--palette-coral-500), var(--palette-coral-450));
                  --syntax-support: light-dark(
                    var(--palette-purple-650),
                    var(--palette-purple-350)
                  );
                  --syntax-added-bg: light-dark(var(--palette-green-200), var(--palette-green-750));
                  --syntax-removed-bg: light-dark(
                    var(--palette-coral-200),
                    var(--palette-coral-750)
                  );
                }

                pre:has(code) {
                  background-color: var(--syntax-bg);
                  color: var(--syntax-ink);
                  overflow-x: auto;
                  max-width: 100%;
                }

                ::highlight(comment) {
                  color: var(--syntax-comment);
                }
                ::highlight(quote) {
                  color: var(--syntax-comment);
                }

                ::highlight(keyword) {
                  color: var(--syntax-keyword);
                }
                ::highlight(storage) {
                  color: var(--syntax-keyword);
                }
                ::highlight(at-rule) {
                  color: var(--syntax-keyword);
                }
                ::highlight(doctype) {
                  color: var(--syntax-keyword);
                }

                ::highlight(string) {
                  color: var(--syntax-string);
                }
                ::highlight(attribute-value) {
                  color: var(--syntax-string);
                }
                ::highlight(raw) {
                  color: var(--syntax-string);
                }

                ::highlight(numeric) {
                  color: var(--syntax-number);
                }
                ::highlight(boolean) {
                  color: var(--syntax-number);
                }
                ::highlight(constant) {
                  color: var(--syntax-number);
                }
                ::highlight(symbol) {
                  color: var(--syntax-number);
                }
                ::highlight(character-entity) {
                  color: var(--syntax-number);
                }

                ::highlight(entity) {
                  color: var(--syntax-entity);
                }
                ::highlight(function) {
                  color: var(--syntax-entity);
                }
                ::highlight(class) {
                  color: var(--syntax-entity);
                }
                ::highlight(type) {
                  color: var(--syntax-entity);
                }
                ::highlight(tag) {
                  color: var(--syntax-entity);
                }
                ::highlight(section) {
                  color: var(--syntax-entity);
                }

                ::highlight(variable) {
                  color: var(--syntax-binding);
                }
                ::highlight(property) {
                  color: var(--syntax-binding);
                }
                ::highlight(attribute-name) {
                  color: var(--syntax-binding);
                }

                ::highlight(punctuation) {
                  color: var(--syntax-mark);
                }
                ::highlight(operator) {
                  color: var(--syntax-mark);
                }

                ::highlight(regexp) {
                  color: var(--syntax-regexp);
                }
                ::highlight(support) {
                  color: var(--syntax-support);
                }

                ::highlight(link) {
                  color: var(--syntax-entity);
                  text-decoration: underline;
                  text-underline-offset: 2px;
                }

                ::highlight(important) {
                  color: var(--syntax-keyword);
                  text-decoration: underline;
                  text-decoration-style: wavy;
                  text-underline-offset: 3px;
                }

                ::highlight(inserted) {
                  background-color: var(--syntax-added-bg);
                }
                ::highlight(deleted) {
                  background-color: var(--syntax-removed-bg);
                }

                #theme-toggle svg {
                  transition:
                    opacity var(--interaction-transition-duration-enter)
                    var(--interaction-transition-easing-entrance),
                    rotate var(--interaction-transition-duration-enter)
                    var(--interaction-transition-easing-entrance),
                    scale var(--interaction-transition-duration-enter)
                    var(--interaction-transition-easing-entrance);
                }

                [data-color-scheme="light"] #theme-toggle .lucide-sun,
                [data-color-scheme="dark"] #theme-toggle .lucide-moon {
                  opacity: 0;
                  scale: 0.5;
                  rotate: -90deg;
                  pointer-events: none;
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
            <title>{title ? `${title}` : DEFAULT_TITLE}</title>
            <link rel="canonical" href={`${SITE_ORIGIN}${withTrailingSlash(c.req.path)}`} />

            {html`<script type="module">
              import cssVarBind from 'https://cdn.jsdelivr.net/npm/css-var-bind@0.0.1/+esm'
            </script>`}

            <script
              type="importmap"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  imports: {
                    microlighter: "https://cdn.jsdelivr.net/npm/microlighter@2.2.0/dist/index.js",
                  },
                }),
              }}
            />
            <script type="module" src="/docs/clientside/code-editor.js"></script>
            <script type="module" src="/docs/clientside/search.js"></script>
            <script type="module" src="/docs/clientside/color-mode-interact.js"></script>
          </head>
          <body>
            <Header />
            <nav class="site-nav">
              <div
                id="nav-popover"
                data-type="drawer"
                data-position="left"
                popover="auto"
                class="v-popover"
              >
                <div class="px-s-m surface-base site-nav-list">
                  <NavLinks currentPath={c.req.path} />

                  <div class="site-external-links py-s stack-v gap-4xs">
                    <a
                      class="ink-default pl-xs -ml-xs br-m bg-wash:hover lh-tight py-2xs"
                      href="/docs/changelog/"
                    >
                      Changelog
                    </a>
                    <a
                      href="https://github.com/varianter/varde"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stack-h gap-2xs ink-subtle fs-s"
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
            <main class="site-main d-block" data-pagefind-body>
              {children}
            </main>
            <SearchDialog />
          </body>
        </html>
      );
    },
    { docType: true },
  ),
);

// Auto-register pages from packages/knowledge/src/**/*.md.
// The set of routes is fixed at startup (a brand-new file still needs a
// restart), but each handler re-reads its doc and re-renders the markdown
// per request, so editing an existing file's content doesn't.

for (const { category, slug } of getKnowledgeDocs()) {
  app.get(`/${category}/${slug}`, async (c) => {
    const doc = getKnowledgeDocs().find((d) => d.category === category && d.slug === slug);
    if (!doc) {
      return c.notFound();
    }
    const content = await processMarkdown(doc.content);
    return c.render(
      <DocsPage title={doc.title} description={doc.description} tags={doc.tags}>
        <Markdown html={content} />
      </DocsPage>,
      { title: doc.title },
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
    return module as { path: string; title?: string; default: FC };
  }),
);

for (const mod of modules) {
  if (mod.default && mod.path) {
    const Page = mod.default;
    app.get(mod.path, (c) => {
      return c.render(<Page />, { title: mod.title ?? DEFAULT_TITLE });
    });
  }
}

const root = new Hono({ strict: false });
root.route("/", rootApp);
root.route("/", app);
root.route("/", staticApp);

export { app };

export default {
  port: 1234,
  fetch: root.fetch,
};
