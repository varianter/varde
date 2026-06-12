import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/utilities/colors";

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
        description="Three elevation levels for layering content. Sunken sits behind, default is the main canvas, and raised floats above."
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-m">
            {[
              { cls: "bg-surface-sunken", label: "bg-surface-sunken" },
              { cls: "bg-surface-default", label: "bg-surface-default" },
              { cls: "bg-surface-raised", label: "bg-surface-raised" },
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
              <BorderSwatch cls="b-faint" label="b-faint" />
              <BorderSwatch cls="b-default" label="b-default" />
              <BorderSwatch cls="b-prominent" label="b-prominent" />
            </div>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}
