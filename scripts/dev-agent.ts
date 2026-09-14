// Agent-friendly dev runner: starts the docs server and the css watcher
// detached from this process, reuses them if already running, and returns
// instead of blocking. Human `bun run dev` stays foreground; this is for
// tool calls that would otherwise hang until timeout.
import { exists, mkdir } from "node:fs/promises";

const DOCS_PORT = 1234;
const DEV_DIR = `${import.meta.dir}/../.dev`;
const CSS_PID = `${DEV_DIR}/css-watch.pid`;
const CSS_LOG = `${DEV_DIR}/css-watch.log`;
const DOCS_LOG = `${DEV_DIR}/docs.log`;

async function docsAlive(ms = 500): Promise<boolean> {
  try {
    await fetch(`http://localhost:${DOCS_PORT}`, { signal: AbortSignal.timeout(ms) });
    return true;
  } catch {
    return false;
  }
}

async function pidAlive(pidFile: string): Promise<boolean> {
  if (!(await exists(pidFile))) return false;
  const pid = Number((await Bun.file(pidFile).text()).trim());
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(DEV_DIR))) {
  await mkdir(DEV_DIR, { recursive: true });
}

if (await docsAlive()) {
  console.log(`docs already running on http://localhost:${DOCS_PORT}`);
} else {
  const proc = Bun.spawn(["bun", "run", "--cwd", "docs", "--hot", "src/index.tsx"], {
    stdout: Bun.file(DOCS_LOG),
    stderr: Bun.file(DOCS_LOG),
  });
  proc.unref();

  let up = false;
  for (let i = 0; i < 30; i++) {
    if (await docsAlive()) {
      up = true;
      break;
    }
    await Bun.sleep(1000);
  }

  if (up) {
    console.log(`docs up on http://localhost:${DOCS_PORT} (pid ${proc.pid}). Log: ${DOCS_LOG}`);
  } else {
    console.error(`docs timed out starting. Log: ${DOCS_LOG}`);
    process.exit(1);
  }
}

if (await pidAlive(CSS_PID)) {
  console.log("css watcher already running");
} else {
  const proc = Bun.spawn(["bun", "run", "--cwd", "packages/css", "dev"], {
    stdout: Bun.file(CSS_LOG),
    stderr: Bun.file(CSS_LOG),
  });
  proc.unref();
  await Bun.write(CSS_PID, String(proc.pid));
  console.log(`css watcher up (pid ${proc.pid}). Log: ${CSS_LOG}`);
}
