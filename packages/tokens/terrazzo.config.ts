import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";

export default defineConfig({
  tokens: "./varde.resolver.json",
  outDir: "./dist/",
  plugins: [
    css({
      filename: "themes.css",
      permutations: [
        {
          input: { theme: "dark" },
          prepare: (css) =>
            `@media (prefers-color-scheme: dark) {\n  :root {\n    color-scheme: dark;\n    ${css}\n  }\n}`,
        },
        {
          input: { theme: "light" },
          prepare: (css) =>
            `@media (prefers-color-scheme: light) {\n  :root {\n    color-scheme: light;\n    ${css}\n  }\n}`,
        },
      ],
    }),
  ],
});
