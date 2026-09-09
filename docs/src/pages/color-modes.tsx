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
    <section class="surface-base b-all bc-subtle br-l stack-v">
      <header class="stack-v px-xs pt-xs pb-xs pt-m">
        <div class="stack-v gap-xs">
          <h3 class="fs-xl fw-bold lh-tight" style="text-transform: capitalize;">
            {mode}
          </h3>
        </div>
        <p class="fs-s ink-subtle">Workspace settings — every token below inherits this palette.</p>
      </header>

      <div class="d-grid gap-2xs">
        <nav class="b-all bc-subtle b-r br-m m-2xs of-clip stack-v">
          {navItems.map((item, i) => {
            const selected = i === 0;
            return (
              <a
                href={`#${mode}-${item.label}`}
                class={
                  "stack-h items-center gap-s pl-s pr-xs py-xs b-b bc-subtle b-none:last-child bg-wash:hover ink-subtle" +
                  (selected ? "" : "")
                }
              >
                <span class="v-icon fs-xs " data-v-icon={item.icon} />
                <span class="flex-1 fs-s fw-medium">{item.label}</span>
                <span class="fs-s t-tabular">{item.meta}</span>
              </a>
            );
          })}
        </nav>

        <form class="stack-v gap-m px-xs pb-s pt-m surface-tinted br-l">
          <div class="stack-v gap-4xs">
            <label class="fs-s ink-subtle" for={`name-${mode}`}>
              Workspace name
            </label>
            <input class="v-input" type="text" id={`name-${mode}`} value="Variant" />
          </div>

          <div class="stack-v gap-4xs">
            <label class="fs-s ink-subtle" for={`access-${mode}`}>
              Default access
            </label>
            <select class="v-select" id={`access-${mode}`}>
              <option value="members">Members only</option>
              <option value="org">Whole organization</option>
              <option value="public">Public</option>
            </select>
          </div>

          <label class="stack-h items-center gap-2xs fs-s surface-dyed p-3xs b-all bc-subtle br-m">
            <input class="v-checkbox" type="checkbox" checked />
            Allow guests to join
          </label>

          <div class="stack-h gap-2xs justify-end  -mx-xs -mb-s p-2xs b-t bc-subtle">
            <button type="button" class="v-button" data-variant="plain">
              Cancel
            </button>
            <button type="button" class="v-button" data-variant="tinted">
              Preview
            </button>
            <button type="submit" class="v-button px-l flex-1">
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
    <article class="stack-v gap-xl mx-auto py-xl px-xl" style="max-width: 1400px;">
      <header class="pt-2xl pb-xl">
        <h2 class="fs-3xl fw-bold">Color Modes</h2>
        <p class="fs-l ink-subtle mw-7">
          Every palette shown simultaneously. Each panel is scoped with{" "}
          <code>&lt;color-mode&gt;</code> so semantic tokens — surfaces, ink, borders, and control
          states — resolve against that mode's <code>--color-N</code> variables.
        </p>
      </header>

      <div
        class="gap-l d-grid"
        style="grid-template-columns: repeat(auto-fill, minmax(660px, 1fr)); grid-auto-rows: max-content;"
      >
        {modes.map((mode) => (
          <div class="stack-h gap-m">
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
