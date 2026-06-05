import { join } from "node:path";
import { Hono } from "hono";

// Serves files from packages/static at /static/* during local dev.
// by build.tsx so they're available when served statically (e.g. GitHub Pages).
//
// IMPORTANT: The path below is relative to import.meta.dir (docs/src/),
// not the process working directory. Don't change it to a relative string
// literal — it will break depending on where `bun` is invoked from.
const staticApp = new Hono();

const STATIC_DIR = join(import.meta.dir, "../../packages/static");

staticApp.get("/static/*", async (c) => {
  const filePath = c.req.path.replace(/^\/static\//, "");
  const fullPath = join(STATIC_DIR, filePath);

  const file = Bun.file(fullPath);
  const exists = await file.exists();

  if (!exists) {
    return c.notFound();
  }

  return new Response(file);
});

export { staticApp };
