import { cp, readdir, mkdir, rename } from "node:fs/promises";
import { join } from "node:path";
import { toSSG } from "hono/bun";
import { app } from "./index";

const STATIC_SRC = join(import.meta.dir, "../../packages/static");
const STATIC_DEST = join("./dist", "static");

const _result = await toSSG(app, {
  dir: "./dist",
});

// Azure Blob Storage static websites serve /foo/index.html for requests to /foo/.
// toSSG generates foo.html by default, so we convert to directory/index.html style.
async function toDirectoryStyle(dir: string): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await toDirectoryStyle(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html") && entry.name !== "index.html") {
      const slug = entry.name.slice(0, -5);
      const subdir = join(dir, slug);
      await mkdir(subdir, { recursive: true });
      await rename(fullPath, join(subdir, "index.html"));
    }
  }
}

await toDirectoryStyle("./dist");

await cp(STATIC_SRC, STATIC_DEST, { recursive: true });
