import { Hono } from "hono";
import { css, Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";

const rootApp = new Hono();

rootApp.use(
  jsxRenderer(
    ({ children }) => (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Varde — Variant Design System</title>
          <meta
            name="description"
            content="A utility-first CSS framework and design token system by Variant."
          />
          <link rel="icon" type="image/svg+xml" href="/static/logos/variant-favicon.svg" />
          <link rel="stylesheet" href="/docs/styles.css" />
        </head>
        <Style>
          {css`
            main{
              display: grid;
              grid-template-columns: var(--spacing-m) repeat(7, 2fr) var(--spacing-m);
              grid-template-rows: var(--spacing-m) repeat(7, 2fr) var(--spacing-m);
              min-height: 100svh;
              height: 100svh;
              max-width: 100vw;
              overflow: hidden;

            }

            .header {
                grid-column: 3 / span 3;
                grid-row: 4 / span 2;
                z-index: 1;
                @media (orientation: portrait) {
                  grid-column: 3 / span 5;
                  grid-row: 3 / span 4;
                }
                animation: appear 0.7s ease-out forwards;
                opacity: 0;
                animation-delay: 1000ms;
            }

            .varde-container{
              grid-column: 5 / -2;
              grid-row: 1 / -1;
              height: 100%;
              max-height: 100svh;
              width: 100%;
              position: relative;
              align-items: center;
              justify-content: end;
              display: grid;
              margin: auto;
              @media (orientation: portrait) {
                grid-column: 2 / -1;
                justify-content: start;
              }

            }
            .varde{
              aspect-ratio: 1;
              container-type: inline-size;
              z-index: -1;
              height: calc(100vmin - (var(--spacing-m) * 2));
              @media (orientation: portrait) {
                height: calc(100vmax - (var(--spacing-m) * 2));
              }
            }


            @property --vx {
                syntax: "<number>";
                inherits: true;
                initial-value: 0.28;
            }

            @property  --vd {
                syntax: "<number>";
                inherits: true;
                initial-value: 0.23;
            }


            @property --vy {
                syntax: "<number>";
                inherits: true;
                initial-value: 0.55;
            }

            @keyframes varde-drift {
              0% {
                  --vx: 0.25;
                  --vy: 1;
                  --vd: 0.2;
              }
              100% {
                --vx: 0.25;
                --vy: 0.66;
                --vd: 0.2;
              }
            }
            @keyframes appear{
              from{
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .varde__grid {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);

              --vx: 0.28;
              --vy: 0.55;
              --vd: 0.23;
              --gap: 0.6cqw;

              --x: clamp(calc(var(--vd) / 2), var(--vx), calc(1 - var(--vd) / 2));
              --y: clamp(calc(var(--vd) / 2), var(--vy), calc(1 - var(--vd) / 2));
              --span: calc(100cqw - 2 * var(--gap));
              --c1: max(0px, calc(var(--span) * (var(--x) - var(--vd) / 2)));
              --c2: calc(var(--span) * var(--vd));
              --c3: max(0px, calc(var(--span) * (1 - var(--x) - var(--vd) / 2)));
              --r1: max(0px, calc(var(--span) * (var(--y) - var(--vd) / 2)));
              --r2: var(--c2);
              --r3: max(0px, calc(var(--span) * (1 - var(--y) - var(--vd) / 2)));

              display: grid;
              grid-template-columns: var(--c1) var(--c2) var(--c3);
              grid-template-rows: var(--r1) var(--r2) var(--r3);
              border-radius: 3cqmin 3cqmin 3cqmin 20cqmin;
              overflow: clip;
              grid-template-areas: "cap  cap  face"
              "chip mark face"
              "base base base";
              gap: var(--gap);

                /* animation: varde-drift 12s cubic-bezier(0, 0, 0.03, 0.96) forwards; */
            }
            .varde__grid > * {
                background: var(--surface-dyed);
                animation: appear 0.5s ease-out forwards;
                opacity: 0;
                animation-delay: calc(200ms + (sibling-index()*100ms) );
            }
            .varde__face {
                grid-area: face;

                border-bottom-left-radius: 5cqmin;
            }
            .varde__chip {
                grid-area: chip;
                border-radius: 1cqmin;
            }
            .varde__base {
                grid-area: base;
            }
            .varde__cap {
                grid-area: cap;
                border-bottom-right-radius: min(var(--radius), var(--r1));
            }
            .varde__mark {
                grid-area: mark;
                background: none;
                display: block;
                width: 100%;
                aspect-ratio: 1;
                place-self: center;
                fill: var(--ink-subtle);
            }
            `}
        </Style>
        <body class="fs-m">{children}</body>
      </html>
    ),
    { docType: true },
  ),
);

rootApp.get("/", (c) =>
  c.render(
    <main class="  ">
      <header class="header typeset">
        <h1 class="fs-3xl fw-bold lh-tight mb-2xs">Varde</h1>
        <p class="fs-l ink-subtle">
          A utility-first CSS framework and design token system by{" "}
          <a class="v-link" href="https://variant.no">
            Variant
          </a>
          .
        </p>
        <div class="stack-h gap-s mt-l">
          <a href="/docs/" class="v-button">
            Read documentation
          </a>
          <a
            href="https://github.com/varianter/varde"
            target="_blank"
            rel="noopener noreferrer"
            class="v-button"
            data-variant="tinted"
          >
            <svg
              role="presentation"
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
      </header>

      <div class="varde-container ink-subtle">
        <color-mode palette="grey" class="varde d-block pos-relative">
          <div class="varde__grid">
            <div class="varde__face"></div>
            <div class="varde__cap"></div>
            <div class="varde__chip"></div>
            <div class="varde__base"></div>
            <svg
              class="varde__mark"
              role="presentation"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="logo-path"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.8 89.6C69.5424 89.6 89.6 69.5424 89.6 44.8C89.6 20.0576 69.5424 0 44.8 0C20.0576 0 0 20.0576 0 44.8C0 69.5424 20.0576 89.6 44.8 89.6ZM21.0811 22.9998L37.9707 68.6145H37.9732C38.9838 71.3455 41.5991 73.1612 44.5225 73.1612C47.4409 73.1612 50.0513 71.3553 51.0668 68.6317L68.092 22.9998H58.0278L44.5496 61.0276L31.0024 22.9998H21.0811Z"
              />
            </svg>
          </div>
        </color-mode>
      </div>

      {/* <section class="stack-v gap-l b-t bc-subtle pt-2xl">
        <h2 class="fs-l fw-bold">Usage</h2>
        <p class="ink-subtle">
          Add the stylesheet to your HTML. Use <code class="fs-s">/v/latest/</code> to always get
          the newest release, or pin to a specific version.
        </p>
        <pre
          class="fs-s"
          style="background: var(--surface-dyed); padding: var(--space-m); border-radius: 4px; overflow-x: auto;"
        >
          <code>{`<link rel="stylesheet" href="https://varde.variant.dev/v/latest/styles.css" />`}</code>
        </pre>
      </section> */}

      {/* <section class="stack-v gap-l b-t bc-subtle pt-2xl">
        <h2 class="fs-l fw-bold">Versions</h2>
        <ul class="stack-v gap-xs" id="versions">
          <li>
            <strong>latest</strong>
            <span class="ink-subtle fs-s">
              {" "}
              —{" "}
              <a class="ink-default" href="/v/latest/styles.css">
                /v/latest/styles.css
              </a>
            </span>
          </li>
        </ul>
        <noscript>
          <p class="ink-subtle fs-s">
            Enable JavaScript to see all pinned versions, or see{" "}
            <a href="/v/index.json">/v/index.json</a>.
          </p>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          fetch('/v/index.json')
            .then(function(r) { return r.json(); })
            .then(function(versions) {
              var ul = document.getElementById('versions');
              versions.forEach(function(v) {
                var li = document.createElement('li');
                li.innerHTML = '<span class="ink-default">' + v + '</span><span class="ink-subtle fs-s"> — <a class="ink-default" href="/v/' + v + '/styles.css">/v/' + v + '/styles.css</a></span>';
                ul.appendChild(li);
              });
            })
            .catch(function() {});
        `,
          }}
        />
      </section>

      <section class="stack-v gap-l b-t bc-subtle pt-2xl">
        <h2 class="fs-l fw-bold">Static assets</h2>
        <p class="ink-subtle">
          Fonts and logos served at <code class="fs-s">/static/</code>:
        </p>
        <ul class="stack-v gap-xs">
          <li>
            <a class="ink-default" href="/static/font/varde-bs-variable.ttf">
              /static/font/varde-bs-variable.ttf
            </a>
          </li>
          <li>
            <a class="ink-default" href="/static/logos/variant-circle-filled.svg">
              /static/logos/variant-circle-filled.svg
            </a>
          </li>
          <li>
            <a class="ink-default" href="/static/logos/variant-favicon.svg">
              /static/logos/variant-favicon.svg
            </a>
          </li>
        </ul>
      </section> */}
    </main>,
  ),
);

export { rootApp };
