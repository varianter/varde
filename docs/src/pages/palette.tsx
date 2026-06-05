import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/tokens/palette";

const scales = ["neutral", "brand", "danger", "success", "warning", "info"] as const;
const steps = [
  0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950,
] as const;

function PaletteSwatch({ scale, step }: { scale: string; step: number }) {
  const varName = `--palette-${scale}-${step}`;
  const needsLightText = step >= 500;

  return (
    <div class="stack gap-3xs" style="min-width: 0; flex: 1 1 0%;">
      <div class="br-s" style={`background: var(${varName}); height: 3rem;`} />
      <div class="stack gap-3xs">
        <code class={`fs-xs ${needsLightText ? "fg-muted" : "fg-muted"}`}>{step}</code>
      </div>
    </div>
  );
}

function PaletteScale({ scale }: { scale: string }) {
  return (
    <Section title={scale.charAt(0).toUpperCase() + scale.slice(1)}>
      <ExamplePanel>
        <div class="stack gap-s">
          <div class="stack-horizontal gap-3xs" style="overflow-x: auto;">
            {steps.map((step) => (
              <PaletteSwatch scale={scale} step={step} />
            ))}
          </div>
          <div class="stack gap-3xs">
            <code class="fs-xs fg-muted">--palette-{scale}-[0–950]</code>
          </div>
        </div>
      </ExamplePanel>
    </Section>
  );
}

export default function PalettePage() {
  return (
    <DocsPage
      title="Palette"
      description="The raw color palette tokens. These are the foundation — each scale runs from 0 (lightest) to 950 (darkest) in oklch. Semantic tokens reference these, so you should rarely use palette variables directly."
    >
      {scales.map((scale) => (
        <PaletteScale scale={scale} />
      ))}

      <Section
        title="Usage note"
        description="These palette tokens exist as CSS custom properties (e.g. --palette-brand-400) and are used internally by the semantic color system. Prefer semantic classes like .bg-surface-default, .fg-danger-strong, or .b-brand-medium over reaching for palette variables directly."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-xs">
              <span class="fg-emphasis t-bold fs-s">How palette maps to semantic tokens</span>
              <div class="stack gap-2xs fs-s fg-muted">
                <span>
                  • <strong class="fg-default">Backgrounds</strong> use steps <code>100–300</code>{" "}
                  (subtle → strong)
                </span>
                <span>
                  • <strong class="fg-default">Borders</strong> use steps <code>200–400</code>{" "}
                  (subtle → strong)
                </span>
                <span>
                  • <strong class="fg-default">Foreground / text</strong> uses steps{" "}
                  <code>500–800</code> (subtle → strong)
                </span>
                <span>
                  • <strong class="fg-default">Surfaces</strong> use the lightest neutral steps (
                  <code>50–150</code>)
                </span>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}
