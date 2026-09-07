import { DocsPage, ExamplePanel, Section } from "../components/docs";

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

function BorderSwatch({ cls, label }: { cls: string; label: string }) {
  return (
    <div class="stack gap-2xs grow" style="min-width: 100px;">
      <div class={`b-all ${cls} br-m`} style="height: 3rem; min-width: 100px;" />
      <code class="fs-xs ink-subtle">.{label}</code>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <DocsPage
      title="Colors"
      description="Semantic color utilities for backgrounds, text, and borders. Structural tokens come first — they're the everyday workhorses. Intent tokens communicate meaning."
    >
      {/* ════════════════════════════════════════════
          STRUCTURAL TOKENS
          ════════════════════════════════════════════ */}

      {/* ── Surfaces ── */}
      <Section
        title="Surfaces"
        description="Surface tokens for layering content. Base is the main canvas, tinted adds subtle distinction, dyed floats above."
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-m">
            {[
              { cls: "surface-base", label: "surface-base" },
              { cls: "surface-tinted", label: "surface-tinted" },
              { cls: "surface-dyed", label: "surface-dyed" },
            ].map(({ cls, label }) => (
              <div class="stack gap-2xs grow" style="min-width: 100px;">
                <div
                  class={`${cls} br-m b-all bc-default`}
                  style="height: 4rem; min-width: 140px;"
                />
                <code class="fs-xs ink-subtle">.{label}</code>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Text ── */}
      <Section
        title="Text: Structural"
        description="Most text doesn't communicate status — it just needs the right visual weight. .ink-default for body text, .ink-subtle for secondary content, .ink-prominent for headings and labels."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-xs">
              <div class="stack gap-2xs">
                <span class="ink-prominent fs-l fw-bold">.ink-prominent — Page heading</span>
                <code class="fs-xs ink-subtle">.ink-prominent</code>
              </div>
              <div class="stack gap-2xs">
                <span class="ink-default fs-m">
                  .ink-default — Body text that makes up the bulk of your content. This is the color
                  you use without thinking.
                </span>
                <code class="fs-xs ink-subtle">.ink-default</code>
              </div>
              <div class="stack gap-2xs">
                <span class="ink-subtle fs-s">
                  .ink-subtle — Secondary text, helper text, timestamps, captions
                </span>
                <code class="fs-xs ink-subtle">.ink-subtle</code>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Borders ── */}
      <Section
        title="Borders: Structural"
        description="Most borders don't communicate meaning — they just separate or outline things. Reach for these first. .bc-default is the workhorse; .bc-subtle for quieter lines, .bc-prominent when the line needs to be clearly visible."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack-horizontal gap-m">
              <BorderSwatch cls="bc-subtle b:hover" label="bc-subtle" />
              <BorderSwatch cls="bc-default b:hover" label="bc-default" />
              <BorderSwatch cls="bc-prominent b:hover" label="bc-prominent" />
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ════════════════════════════════════════════
          PALETTE OVERVIEW
          ════════════════════════════════════════════ */}

      <Section
        title="Palette overview"
        description="Border alpha derives from a single --border-base token — the same ratio works across every palette, surface, and mode. Surface lift derives from the per-mode --surface-tint-target token. Hover any box to see both augmentations."
      >
        <div class="stack">
          {["false", "true"].map((mode) =>
            PALETTES.map((palette) => (
              <color-mode inverted={mode} palette={palette}>
                <div class="stack ">
                  {/* <h4 class="fs-m fw-bold ink-prominent" style="text-transform: capitalize;">
                  {palette}
                </h4> */}
                  <div class="stack-horizontal " style="overflow-x: auto;">
                    {SURFACES.map((surface) => (
                      <div
                        class={`${surface.cls}  p-xs  stack gap-3xs  flex-1`}
                        style="min-width: 160px;"
                      >
                        <span class="fs-xs ink-subtle">surface: {surface.label}</span>
                        <div class="stack-horizontal gap-3xs fs-xs">
                          <div class="ink-prominent">ink-prominent</div>
                          <div class="ink-default">ink-default</div>
                          <div class="ink-subtle">ink-subtle</div>
                        </div>
                        <div class="stack-horizontal gap-3xs">
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
