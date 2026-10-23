# @varde/docs

The documentation site for Varde. Built as a static site with [Hono](https://hono.dev) and Bun.

Live at: **https://varde.variant.dev/docs**

## Stack

- **[Hono](https://hono.dev)** — routing and JSX rendering
- **Bun** — dev server, build runner, and static site generator
- **[`hono/bun` `toSSG`](https://hono.dev/docs/helpers/ssg)** — generates static HTML at build time

## Commands

```sh
bun dev        # Dev server with hot reload at http://localhost:1234/docs/
bun run build  # Build static site to dist/
bun preview    # Build and serve locally at http://localhost:1337/docs/
```

## Adding a page

Pages are glob-discovered from `src/pages/**/*.tsx`. Each file exports:

- `path` — the route, relative to `/docs/`
- A default component that renders the page content

```tsx
export const path = "/utilities/example";

export default function ExamplePage() {
  return <main>...</main>;
}
```

The shell (header, nav, `<html>`) lives in `src/index.tsx` and is applied via Hono's `jsxRenderer` — pages only render their own content.

## Deployment

Handled automatically by the `deploy-docs.yml` workflow on every push to `main`.
