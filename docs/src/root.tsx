import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

const rootApp = new Hono();

rootApp.use(
  jsxRenderer(({ children }) => (
    <html lang="en" class="fg-default bg-surface-default">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Varde — Variant Design System</title>
        <meta name="description" content="A utility-first CSS framework and design token system by Variant." />
        <link rel="icon" type="image/svg+xml" href="/static/logos/variant-favicon.svg" />
        <link rel="stylesheet" href="/v/latest/themes.css" />
        <link rel="stylesheet" href="/v/latest/styles.css" />
      </head>
      <body class="fs-m">{children}</body>
    </html>
  ), { docType: true }),
);

rootApp.get("/", (c) =>
  c.render(
    <main class="stack gap-4xl mx-auto py-4xl px-xl" style="max-width: 800px;">

      <header class="stack gap-m pt-4xl">
        <div class="stack-horizontal gap-s" style="align-items: center;">
          <img src="/static/logos/variant-circle-filled.svg" alt="" width="32" height="32" />
          <h1 class="fs-3xl t-bold lh-tight">Varde</h1>
        </div>
        <p class="fs-l fg-muted" style="max-width: 560px;">
          A utility-first CSS framework and design token system by{" "}
          <a class="fg-default" href="https://variant.no">Variant</a>.
        </p>
        <div class="stack-horizontal gap-m">
          <a href="/docs/" class="t-bold fg-default">Documentation →</a>
          <a href="https://github.com/varianter/varde" class="fg-muted" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section class="stack gap-l b-t b-faint pt-4xl">
        <h2 class="fs-l t-bold">Usage</h2>
        <p class="fg-muted">Add both stylesheets to your HTML. Use <code class="fs-s">/v/latest/</code> to always get the newest release, or pin to a specific version.</p>
        <pre class="fs-s" style="background: var(--surface-raised); padding: var(--space-m); border-radius: 4px; overflow-x: auto;"><code>{`<link rel="stylesheet" href="https://varde.variant.dev/v/latest/themes.css" />
<link rel="stylesheet" href="https://varde.variant.dev/v/latest/styles.css" />`}</code></pre>
      </section>

      <section class="stack gap-l b-t b-faint pt-4xl">
        <h2 class="fs-l t-bold">Versions</h2>
        <ul class="stack gap-xs" id="versions">
          <li>
            <a href="/v/latest/" class="fg-default">
              <strong>latest</strong>
              <span class="fg-muted fs-s"> — /v/latest/styles.css, /v/latest/themes.css</span>
            </a>
          </li>
        </ul>
        <noscript>
          <p class="fg-muted fs-s">Enable JavaScript to see all pinned versions, or see <a href="/v/index.json">/v/index.json</a>.</p>
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: `
          fetch('/v/index.json')
            .then(function(r) { return r.json(); })
            .then(function(versions) {
              var ul = document.getElementById('versions');
              versions.forEach(function(v) {
                var li = document.createElement('li');
                li.innerHTML = '<a href="/v/' + v + '/" class="fg-default">' + v + '<span class="fg-muted fs-s"> — /v/' + v + '/styles.css, /v/' + v + '/themes.css</span></a>';
                ul.appendChild(li);
              });
            })
            .catch(function() {});
        `}} />
      </section>

      <section class="stack gap-l b-t b-faint pt-4xl">
        <h2 class="fs-l t-bold">Static assets</h2>
        <p class="fg-muted">Fonts and logos served at <code class="fs-s">/static/</code>:</p>
        <ul class="stack gap-xs">
          <li><a class="fg-default" href="/static/font/varde-bs-variable.ttf">/static/font/varde-bs-variable.ttf</a></li>
          <li><a class="fg-default" href="/static/logos/variant-circle-filled.svg">/static/logos/variant-circle-filled.svg</a></li>
          <li><a class="fg-default" href="/static/logos/variant-favicon.svg">/static/logos/variant-favicon.svg</a></li>
        </ul>
      </section>

    </main>
  )
);

export { rootApp };
