# @varde/docs

The documentation site for Varde. Built as a static site with [Hono](https://hono.dev) and Bun, deployed to GitHub Pages.

Live at: **https://varianter.github.io/varde/**

## Stack

- **[Hono](https://hono.dev)** — routing and JSX rendering
- **Bun** — dev server, build runner, and static site generator
- **[`hono/bun` `toSSG`](https://hono.dev/docs/helpers/ssg)** — generates static HTML at build time

## Commands

```sh
bun dev        # Dev server with hot reload at http://localhost:1234/varde/
bun run build  # Build static site to dist/
bun preview    # Build and serve locally at http://localhost:1337/varde/
```

## Adding a page

Pages are glob-discovered from `src/pages/**/*.tsx`. Each file must export:

- `path` — the route string (e.g. `"/utilities/spacing"`)
- A default component that renders the page content

```ts
// src/pages/utilities/spacing.tsx
export const path = "/utilities/spacing";

export default function SpacingPage() {
  return <main>...</main>;
}
```

The shell layout (header, nav, `<html>`) lives in `src/index.tsx` and is applied automatically via Hono's `jsxRenderer` middleware — pages only need to render their own content.

## Build output

`bun run build` generates static HTML into `dist/` via `toSSG`, then:

1. Copies `dist/varde.html` → `dist/varde/index.html` so GitHub Pages serves it at `/varde/`
2. Copies fonts from `packages/static/` into `dist/varde/static/`

> **Important:** The GitHub Pages workflow (`github-pages.yml`) uploads `docs/dist/varde` — not `docs/dist` — as the artifact root. This means GitHub Pages serves that directory at `/`, so `/static/fonts/...` in the CSS resolves to `dist/varde/static/fonts/...` on disk. If you ever change the upload path in the workflow, update `STATIC_DEST` in `src/build.tsx` to match.

## Deployment

Handled automatically by the `github-pages.yml` workflow on every push to `main`. Can also be triggered manually from the Actions tab.
