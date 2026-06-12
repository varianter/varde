export const path = "/tokens/color-modes";

const modes = [
  "grey",
  "coral",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "teal",
  "periwinkle",
] as const;

const lol = [
  { surface: "sunken", inverted: false },
  { surface: "sunken", inverted: true },
  { surface: "default", inverted: false },
  { surface: "default", inverted: true },
];
function DemoCard({ surface, inverted }: (typeof lol)[number]) {
  return (
    <div
      class={`bg-surface-${surface} br-m  p-l stack justify-end typset`}
      data-mode-inverted={inverted}
    >
      {surface} - inverted: {inverted.toString()}
      <h2 class="mt-3xl">Lønnskalkulator</h2>
      <p class="fs-m fg-muted">
        Vi mener lønn bør være enkelt, åpent og forutsigbart. Derfor designet vi en transparent
        lønnsmodell som likestiller alle ansatte.
      </p>
      <div className="stack-horizontal gap-s mt-xl">
        <input type="text" class="input flex-1" />
        <button type="button" data-color="inherit" class="button" style="width: max-content;">
          Knapp
        </button>
      </div>
      <div class="stack-horizontal gap-s mt-s">
        <button
          type="button"
          data-color="inherit"
          data-variant="outline"
          class="button"
          style="width: 20ch;"
        >
          Outline
        </button>
        <button
          type="button"
          data-color="inherit"
          data-variant="plain"
          class="button"
          style="width: max-content;"
        >
          Plain
        </button>
        <div class="stack-horizontal gap-s">
          <input type="checkbox" class="checkbox" />
          <input type="radio" name="radio" value="one" class="radio" checked />
          <input type="radio" name="radio" value="two" class="radio" />
        </div>
      </div>
    </div>
  );
}

function ColorModeDemo({ mode }: { mode: string }) {
  return (
    <div data-mode={mode} class="stack gap-m p-m br-m  b-default bg-surface-raised">
      <h3 class="fs-l t-bold fg-emphasis" style="text-transform: capitalize;">
        {mode}
      </h3>
      <div class="gap-m" style="display: grid; grid-auto-flow: column;">
        <div class="gap-m" style="display: grid; grid-template-columns: 1fr 1fr;">
          {lol.map((item) => (
            <DemoCard {...item} />
          ))}
        </div>

        <div class="p-m stack" style=" width: 40ch;" hidden>
          <form class="stack gap-m">
            <div class="stack gap-xs">
              <label class="fs-s fg-muted" for="demo-email">
                Email
              </label>
              <input
                class="input"
                type="email"
                id="demo-email"
                value="not-an-email"
                aria-invalid="true"
              />
              <p class="fs-s fg-danger-medium">Please enter a valid email address</p>
            </div>
            <div class="stack gap-xs">
              <label class="fs-s fg-muted" for="demo-country">
                Country
              </label>
              <select class="select" id="demo-country">
                <option value="">Choose…</option>
                <option value="no">Norway</option>
                <option value="se">Sweden</option>
                <option value="dk">Denmark</option>
              </select>
            </div>
            <div class="stack gap-xs">
              <label class="fs-s fg-muted" for="demo-message">
                Message
              </label>
              <textarea
                class="textarea"
                id="demo-message"
                rows={3}
                placeholder="Write something…"
              ></textarea>
            </div>
            <div class="stack-horizontal items-start gap-s">
              <input class="checkbox" type="checkbox" id="demo-terms" />
              <label class="fs-s" for="demo-terms">
                I accept the terms and conditions
              </label>
            </div>
            <button class="button ml-auto px-xl" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ColorModesPage() {
  return (
    <article class="stack gap-xl mx-auto py-xl px-xl" style="max-width: 1400px;">
      <header class="pt-2xl pb-xl">
        <h2 class="fs-4xl t-bold">Color Modes</h2>
        <p class="fs-l fg-muted mw-7">
          Every palette shown simultaneously. Each block is scoped with <code>data-mode</code> so
          semantic tokens resolve against that mode's <code>--color-N</code> variables.
        </p>
      </header>

      <div class="stack gap-l">
        {modes.map((mode) => (
          <ColorModeDemo mode={mode} />
        ))}
      </div>
    </article>
  );
}
