/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative icons do not need titles */

import stylesCSS from "@varde/css" with { type: "text" };
import { Hono } from "hono";
import { css, Style } from "hono/css";
import type { FC } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { NavLinks } from "./components/nav";
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
        <html lang="en" class="fg-default bg-surface-default">
          <head>
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
                    var(--border-default) 0 1px,
                    transparent 0px 7px
                  );
                  border: 1px solid var(--border-default);
                  text-shadow:
                    0px 0px 3px var(--surface-default),
                    0px 0px 6px var(--surface-default);
                }

                body {
                  display: grid;
                  min-height: 100vh;
                  background: oklch(from var(--surface-raised) l c h / 0.5);
                  grid-template-columns: 1fr;
                  grid-auto-rows: max-content;
                  grid-template-areas:
                    "header"
                    "nav"
                    "main";
                }

                .site-header {
                  grid-area: header;
                  grid-template-columns: subgrid;
                  display: grid;
                }

                .site-nav {
                  grid-area: nav;
                  border-bottom: 1px solid var(--border-faint);
                }

                .site-main {
                  grid-area: main;
                }

                #nav-popover:popover-open {
                  inset: auto;
                  top: anchor(bottom);
                  left: 0;
                  margin: var(--spacing-l);
                  width: calc(100% - (var(--spacing-l) * 2));
                  border: none;
                  max-height: calc(100dvh - 4rem);
                  overflow-y: auto;
                  background: var(--surface-raised);
                }

                @media (min-width: 768px) {
                  body {
                    grid-template-columns: 240px 1fr;
                    grid-template-rows: max-content auto;
                    grid-template-areas:
                      "header header"
                      "nav main";
                  }

                  .site-nav {
                    border-bottom: none;
                    border-right: 1px solid var(--border-faint);
                  }

                  .site-link {
                    border-right: 1px solid var(--border-faint);
                  }

                  .menu-toggle {
                    display: none;
                  }

                  #nav-popover {
                    display: contents;
                  }
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
          </head>
          <body class="fs-m">
            <header class="site-header stack b-b b-faint px-l ">
              <a
                href="/docs"
                class="site-link py-m t-bold gap-xs stack-horizontal inline-flex self-stretch"
              >
                <img
                  src="https://varde.variant.dev/static/logos/variant-circle-filled.svg"
                  alt="Varde"
                  width="24"
                  height="24"
                />{" "}
                <span class="fg-default lh-tight">Varde</span>
              </a>
            </header>
            <nav class="site-nav">
              <div class="stack justify-center">
                <button
                  type="button"
                  popovertarget="nav-popover"
                  data-size="small"
                  class="button menu-toggle mx-xl my-xs"
                  aria-label="Toggle navigation menu"
                >
                  <span aria-hidden="true">☰</span> Menu
                </button>
              </div>
              <div id="nav-popover" popover>
                <div class="px-l">
                  <NavLinks />

                  <div class="site-external-links py-l">
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
            <main class="site-main">{children}</main>
          </body>
        </html>
      );
    },
    { docType: true },
  ),
);

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
