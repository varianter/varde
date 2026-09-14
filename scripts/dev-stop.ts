// Stops what scripts/dev-agent.ts started.
import { exists, rm } from "node:fs/promises";

const DOCS_PORT = 1234;
const DEV_DIR = `${import.meta.dir}/../.dev`;
const CSS_PID = `${DEV_DIR}/css-watch.pid`;

await Bun.$`lsof -ti:${DOCS_PORT} | xargs -r kill`.nothrow();
console.log(`Stopped docs (port ${DOCS_PORT})`);

if (await exists(CSS_PID)) {
  const pid = Number((await Bun.file(CSS_PID).text()).trim());
  if (pid) {
    try {
      process.kill(pid);
      console.log(`Stopped css watcher (pid ${pid})`);
    } catch {
      console.log("css watcher was not running");
    }
  }
  await rm(CSS_PID);
}
