import { watch } from "node:fs";
import { exists, mkdir } from "node:fs/promises";
import { bundleAsync } from "lightningcss";

const ENTRY = `${import.meta.dir}/styles.css`;
const OUT = "./dist/styles.css";
const isWatch = process.argv.includes("--watch");

async function ensureDir(path: string) {
  if (!(await exists(path))) {
    await mkdir(path, { recursive: true });
  }
}

async function build() {
  const start = performance.now();
  const { code, warnings } = await bundleAsync({
    filename: ENTRY,
    errorRecovery: false,
  });

  for (const warning of warnings) {
    console.warn(
      `⚠ ${warning.message} (${warning.loc?.filename}:${warning.loc?.line}:${warning.loc?.column})`,
    );
  }

  await ensureDir("./dist");
  await Bun.write(OUT, code);
  console.log(`Built styles.css in ${Math.round(performance.now() - start)}ms`);
}

// Initial build
await build();

if (isWatch) {
  console.log("Watching for changes...");

  const watcher = watch(`${import.meta.dir}`, { recursive: true }, (_event, filename) => {
    if (filename?.endsWith(".css") && !filename.startsWith("dist/")) {
      build().catch(console.error);
    }
  });

  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
}
