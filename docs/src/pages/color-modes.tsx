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

const navItems = [
  { label: "Members", meta: "12", icon: "plus" },
  { label: "Billing", meta: "Invoices", icon: "plus" },
  { label: "Integrations", meta: "3 active", icon: "plus" },
] as const;

/*
 * One realistic panel, reused for every palette. The enclosing <color-mode
 * palette="..."> remaps --palette-inherit-* so every token below resolves
 * against that hue — surfaces, text tiers, borders, control states, and the
 * button tint/outline all shift together.
 */
function WorkspacePanel({ mode }: { mode: string }) {
  return (
    <section class="bg-surface-base b-all b-faint br-l stack">
      <header class="stack px-xs pt-xs pb-xs pt-m">
        <div class="stack gap-xs">
          <h3 class="fs-xl t-bold lh-tight" style="text-transform: capitalize;">
            {mode}
          </h3>
        </div>
        <p class="fs-s fg-muted">Workspace settings — every token below inherits this palette.</p>
      </header>

      <div class="d-grid gap-2xs">
        <nav class="b-all b-faint b-r br-m m-2xs of-clip stack">
          {navItems.map((item, i) => {
            const selected = i === 0;
            return (
              <a
                href={`#${mode}-${item.label}`}
                class={
                  "stack-horizontal items-center gap-s pl-s pr-xs py-xs b-b b-faint b-last-none bg-wash:hover fg-muted" +
                  (selected ? "" : "")
                }
              >
                <span class="icon fs-xs " data-icon={item.icon} />
                <span class="flex-1 fs-s t-medium">{item.label}</span>
                <span class="fs-s t-tabular">{item.meta}</span>
              </a>
            );
          })}
        </nav>

        <form class="stack gap-m px-xs pb-s pt-m bg-surface-tinted br-l">
          <div class="stack gap-4xs">
            <label class="fs-s fg-muted" for={`name-${mode}`}>
              Workspace name
            </label>
            <input class="input" type="text" id={`name-${mode}`} value="Variant" />
          </div>

          <div class="stack gap-4xs">
            <label class="fs-s fg-muted" for={`access-${mode}`}>
              Default access
            </label>
            <select class="select" id={`access-${mode}`}>
              <option value="members">Members only</option>
              <option value="org">Whole organization</option>
              <option value="public">Public</option>
            </select>
          </div>

          <label class="stack-horizontal items-center gap-2xs fs-s bg-surface-dyed p-3xs b-all b-faint br-m">
            <input class="checkbox" type="checkbox" checked />
            Allow guests to join
          </label>

          <div class="stack-horizontal gap-2xs justify-end  mx--xs mb--s p-2xs b-t b-faint">
            <button type="button" class="button" data-variant="plain">
              Cancel
            </button>
            <button type="button" class="button" data-variant="tinted">
              Preview
            </button>
            <button type="submit" class="button px-l flex-1">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ColorModesPage() {
  return (
    <article class="stack gap-xl mx-auto py-xl px-xl" style="max-width: 1400px;">
      <header class="pt-2xl pb-xl">
        <h2 class="fs-3xl t-bold">Color Modes</h2>
        <p class="fs-l fg-muted mw-7">
          Every palette shown simultaneously. Each panel is scoped with{" "}
          <code>&lt;color-mode&gt;</code> so semantic tokens — surfaces, foregrounds, borders, and
          control states — resolve against that mode's <code>--color-N</code> variables.
        </p>
      </header>

      <div
        class="gap-l d-grid"
        style="grid-template-columns: repeat(auto-fill, minmax(660px, 1fr)); grid-auto-rows: max-content;"
      >
        {modes.map((mode) => (
          <div class="stack-horizontal gap-m">
            <color-mode class="block" palette={mode}>
              <WorkspacePanel mode={mode} />
            </color-mode>
            <color-mode inverted class="block" palette={mode}>
              <WorkspacePanel mode={mode} />
            </color-mode>
          </div>
        ))}
      </div>
    </article>
  );
}
