import { readFileSync } from "node:fs";
import { withTrailingSlash } from "../url";
import { path as changelogPath } from "./changelog";
import { path as examplesPath } from "./examples";

export const path = "/";

const packageJsonPath = `${import.meta.dir}/../../../package.json`;
const currentVersion: string = JSON.parse(readFileSync(packageJsonPath, "utf-8")).version;

export default function HomePage() {
  return (
    <div class="content-grid">
      <article class="v-typeset content-grid-pass pt-3xl pb-xl" data-bleed="full">
        <header class="pb-xl">
          <div class="stack-v gap-l">
            <div class="stack-v gap-m">
              <div class="stack-h items-center gap-s">
                <h1 class="fs-4xl fw-bold lh-tight">Varde</h1>
                <a
                  class="surface-tinted br-m px-xs py-3xs ink-subtle fs-s fw-medium bg-wash:hover"
                  href={withTrailingSlash(`/docs${changelogPath}`)}
                >
                  v{currentVersion}
                </a>
              </div>
              <p class="fs-l ink-subtle">
                The idea is simple: Varde is stylesheet. It contains 96.21% (not scientifically
                tested) of you need to build web things.
              </p>
            </div>
          </div>
        </header>

        <h2 class="fs-l">tl;dr</h2>
        <pre class="microjar fs-s px-m py-m v-untypeset mt-xs" data-pagefind-ignore>
          <code data-language="html">
            {`<link rel="stylesheet" href="https://varde.variant.dev/v/${currentVersion}/styles.css" />`}
          </code>
        </pre>
        <p class="ink-subtle">Add the stylesheet to your HTML and you're good to go.</p>

        <p>
          Varde ain't shipping via registry. It's designed to be referenced as a link in HTML. And
          as such, you get an absolute truckload of value:
        </p>
        <ul>
          <li>Fonts are included and loaded.</li>
          <li>Dark/light mode, built in.</li>
          <li>Native elements — buttons, inputs, tables, spinners — styled, not just reset.</li>
          <li>Utilities for spacing, layout, typography, and color.</li>
          <li>Popovers and a handful of other helpers, so you're not reaching for JS.</li>
        </ul>
        <p>It's all in the one file you already linked. No config, no separate installs.</p>
        <p>And let's be honest about what it's not:</p>
        <ul>
          <li>
            There's no shipped JS in here and there's no framework components. You build those.
          </li>
          <li>No npm package to manage, either — it's a link tag, not a dependency.</li>
        </ul>

        <p>
          Ready to use it? Start with{" "}
          <a href={withTrailingSlash("/docs/how-to/set-up")}>setting it up</a>, or see it in action
          in the <a href={withTrailingSlash(`/docs${examplesPath}`)}>examples</a>.
        </p>
      </article>
    </div>
  );
}
