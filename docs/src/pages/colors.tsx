import { DocsPage, Section } from "../components/docs";

export const path = "/utilities/colors";

const PALETTES = [
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

const SURFACES = [
  { cls: "surface-base", label: "base" },
  { cls: "surface-tinted", label: "tinted" },
  { cls: "surface-dyed", label: "dyed" },
] as const;

const BORDERS = [
  { cls: "bc-subtle", label: "subtle" },
  { cls: "bc-default", label: "default" },
  { cls: "bc-prominent", label: "prominent" },
] as const;

export default function ColorsPage() {
  return (
    <DocsPage
      title="Colors"
      description="Semantic color utilities for backgrounds, text, and borders. Structural tokens come first — they're the everyday workhorses. Intent tokens communicate meaning."
    >
      <Section
        title="Palette overview"
        description="Border alpha derives from a single --border-base token — the same ratio works across every palette, surface, and mode. Surface lift derives from the per-mode --surface-tint-target token. Hover any box to see both augmentations."
      >
        <div class="stack-v">
          {["false", "true"].map((mode) =>
            PALETTES.map((palette) => (
              <color-mode inverted={mode} palette={palette}>
                <div class="stack-v ">
                  <div class="stack-h " style="overflow-x: auto;">
                    {SURFACES.map((surface) => (
                      <div
                        class={`${surface.cls}  p-xs  stack-v gap-3xs  flex-1`}
                        style="min-width: 160px;"
                      >
                        <span class="fs-xs ink-subtle">surface: {surface.label}</span>
                        <div class="stack-h gap-3xs fs-xs">
                          <div class="ink-prominent">ink-prominent</div>
                          <div class="ink-default">ink-default</div>
                          <div class="ink-subtle">ink-subtle</div>
                        </div>
                        <div class="stack-h gap-3xs">
                          {BORDERS.map((border) => (
                            <div
                              class={`b-all ${border.cls} b:hover br-s p-3xs`}
                              style="width: 5rem; height: max-content; "
                            >
                              <div class="fs-xs">{border.label}</div>
                            </div>
                          ))}
                        </div>

                        <div class="bg-wash:hover ink-subtle fs-s py-3xs px-2xs br-m lh-tight">
                          bg-wash:hover
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </color-mode>
            )),
          )}
          {}
        </div>
      </Section>
    </DocsPage>
  );
}
