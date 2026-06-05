import { cp } from "node:fs/promises";
import { join } from "node:path";
import { toSSG } from "hono/bun";
import { app } from "./index";

const STATIC_SRC = join(import.meta.dir, "../../packages/static");
// IMPORTANT: Fonts are copied into `varde/static` (not just `static`) because the
// GitHub Actions workflow uploads `docs/dist/varde` as the Pages artifact root —
// meaning GitHub Pages serves that directory at `/`. So `/static/fonts/...` in the
// CSS resolves to `dist/varde/static/fonts/...` here.
// If you change the artifact upload path in .github/workflows/github-pages.yml,
// you must update this destination path to match.
const STATIC_DEST = join("./dist", "varde", "static");

// Generate static files
const _result = await toSSG(app, {
  dir: "./dist",
});

// toSSG writes the basePath root as `varde.html` instead of `varde/index.html`.
// Copy it so GitHub Pages can serve it at `/varde/`. The cp is wrapped in .catch
// because toSSG may not always generate the file (e.g. if the route isn't registered).
const src = join("./dist", "varde.html");
const dest = join("./dist", "varde", "index.html");

await cp(src, dest).catch(() => {
  // If the file doesn't exist, that's fine – nothing to copy.
});

// Copy static assets (fonts, etc.) into dist so they're available when served statically.
await cp(STATIC_SRC, STATIC_DEST, { recursive: true });
