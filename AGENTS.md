# Varde - Variant Designsystem

This is a CSS framework some docs. It's mainly utilities with some opininated ways of doing things.

## The imporant things.

- `packages/css/src` — this hold all the CSS.
- `docs` — generates the docs and test pages
- `package/knowledge` — markdown files with docs
-  The whole CSS framework is available if you do `cat packages/css/dist/styles.css`.

We're using Bun, not npm/node/deno.

## Intro

Keep it short. We're ambitious, but without the need to be clever. Simple is always better than smart.

Avoid the urge to go for the path of least resistance. Taking a few steps back often results in a more thought through end result.

## Scripts

Type checking

```bash
bun run tsc
```

Run biome to lint/check/format

```bash
bun run check
```

Dev server: run `bun run dev:agent`, not `bun run dev` — `dev` blocks in the foreground and will hang a tool call. `dev:agent` starts the docs server (port 1234) and the css watcher detached, and reuses them if already running. Stop both with `bun run dev:stop`. Logs land in `.dev/`.

# Comments

If you're gonna write comments, here's a few rules:

- Comments do not age well. Keep references to code to a minium.
- Explain the code, not the why things were implemented.
- Comments explain the code. Don't argue for it, name other code, or quote numbers — the code already owns those.

# CSS

- No need to point out browser support unless explicitly asked
-
