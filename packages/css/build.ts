import { watch } from "node:fs";
import { exists, mkdir } from "node:fs/promises";
import { basename } from "node:path";
import { bundleAsync } from "lightningcss";
import type { GeneratedConfig } from "./generated";

const ENTRY = `${import.meta.dir}/styles.css`;
const OUT = "./dist/styles.css";
const isWatch = process.argv.includes("--watch");

const CONFIGS = ["./helpers/color-mode.config.ts", "./utilities/spacing.config.ts"];

async function ensureDir(path: string) {
  if (!(await exists(path))) {
    await mkdir(path, { recursive: true });
  }
}

async function generateFile(configPath: string) {
  // Dynamic import with cache bust to pick up config changes in watch mode.
  const { default: config } = (await import(`${configPath}?t=${Date.now()}`)) as {
    default: GeneratedConfig;
  };

  await Bun.write(config.output, config.generate());
  await Bun.spawn(["bunx", "biome", "format", "--write", config.output]);
  console.log(`Generated ${basename(config.output)}`);
}

async function build() {
  const start = performance.now();

  for (const configPath of CONFIGS) {
    await generateFile(configPath);
  }

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
    if (!filename) return;

    const isCss =
      filename.endsWith(".css") &&
      !filename.startsWith("dist/") &&
      !filename.endsWith(".generated.css");
    const isTs = filename.endsWith(".ts");

    if (isCss || isTs) {
      build().catch(console.error);
    }
  });

  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
}
