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
  { cls: "bg-surface-base", label: "base" },
  { cls: "bg-surface-tinted", label: "tinted" },
  { cls: "bg-surface-dyed", label: "dyed" },
] as const;

const BORDERS = [
  { cls: "b-faint", label: "faint" },
  { cls: "b-default", label: "default" },
  { cls: "b-prominent", label: "prominent" },
] as const;

function BorderSwatch({ cls, label }: { cls: string; label: string }) {
  return (
    <div class="stack gap-2xs grow" style="min-width: 100px;">
      <div class={`b-all ${cls} br-m`} style="height: 3rem; min-width: 100px;" />
      <code class="fs-xs fg-muted">.{label}</code>
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
              { cls: "bg-surface-base", label: "bg-surface-base" },
              { cls: "bg-surface-tinted", label: "bg-surface-tinted" },
              { cls: "bg-surface-dyed", label: "bg-surface-dyed" },
            ].map(({ cls, label }) => (
              <div class="stack gap-2xs grow" style="min-width: 100px;">
                <div
                  class={`${cls} br-m b-all b-default`}
                  style="height: 4rem; min-width: 140px;"
                />
                <code class="fs-xs fg-muted">.{label}</code>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Text ── */}
      <Section
        title="Text: Structural"
        description="Most text doesn't communicate status — it just needs the right visual weight. .fg-default for body text, .fg-muted for secondary content, .fg-emphasis for headings and labels."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-xs">
              <div class="stack gap-2xs">
                <span class="fg-emphasis fs-l t-bold">.fg-emphasis — Page heading</span>
                <code class="fs-xs fg-muted">.fg-emphasis</code>
              </div>
              <div class="stack gap-2xs">
                <span class="fg-default fs-m">
                  .fg-default — Body text that makes up the bulk of your content. This is the color
                  you use without thinking.
                </span>
                <code class="fs-xs fg-muted">.fg-default</code>
              </div>
              <div class="stack gap-2xs">
                <span class="fg-muted fs-s">
                  .fg-muted — Secondary text, helper text, timestamps, captions
                </span>
                <code class="fs-xs fg-muted">.fg-muted</code>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Borders ── */}
      <Section
        title="Borders: Structural"
        description="Most borders don't communicate meaning — they just separate or outline things. Reach for these first. .b-default is the workhorse; .b-faint for quieter lines, .b-prominent when the line needs to be clearly visible."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack-horizontal gap-m">
              <BorderSwatch cls="b-faint b:hover" label="b-faint" />
              <BorderSwatch cls="b-default b:hover" label="b-default" />
              <BorderSwatch cls="b-prominent b:hover" label="b-prominent" />
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ════════════════════════════════════════════
          PALETTE OVERVIEW
          ════════════════════════════════════════════ */}

      <Section
        title="Palette overview"
        description="Border alpha derives from a single --border-base token — the same ratio works across every palette, surface, and mode. Surface lift derives from the per-mode --surface-tint-blend token. Hover any box to see both augmentations."
      >
        <div class="stack gap-l">
          {PALETTES.map((palette) => (
            <color-mode palette={palette}>
              <div class="stack gap-2xs">
                {/* <h4 class="fs-m t-bold fg-emphasis" style="text-transform: capitalize;">
                  {palette}
                </h4> */}
                <div class="stack-horizontal gap-2xs" style="overflow-x: auto;">
                  {SURFACES.map((surface) => (
                    <div
                      class={`${surface.cls}  p-xs br-m stack gap-3xs b-all b-faint b:hover flex-1`}
                      style="min-width: 160px;"
                    >
                      <span class="fs-xs fg-muted">surface: {surface.label}</span>
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

                      <div class="bg-wash:hover fg-muted py-3xs px-2xs br-m lh-tight">
                        bg-wash:hover
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </color-mode>
          ))}
        </div>
      </Section>
    </DocsPage>
  );
}
