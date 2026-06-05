import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { router } from "./demo";

const app = new Hono();

// Handle TypeScript files with Bun's transpiler

app.use("/css/*", serveStatic({ root: "./" }));
app.route("/", router);

export default {
  port: 1773,
  fetch: app.fetch,
};
