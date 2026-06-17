import {
  DemoBox,
  DocsPage,
  Example,
  ExampleGroup,
  ExamplePanel,
  Section,
} from "../components/docs";

export const path = "/utilities/spacing";

export function SpacingPage() {
  return (
    <DocsPage
      title="Spacing"
      description="Padding, margin, and gap utilities for controlling space inside and between elements. Use the spacing scale (3xs → 4xl) with directional variants. Prefer gap for flex containers, padding for inner space, and margin sparingly for outer space."
    >
      {/* The Scale */}
      <Section
        title="The Spacing Scale"
        description="All spacing utilities use the same scale: 3xs → 2xs → xs → s → m → l → xl → 2xl → 3xl → 4xl. Think of m as your baseline (typically 1rem), then step up or down as needed."
      >
        <ExamplePanel>
          <div class="stack gap-xs">
            {[
              { size: "3xs", label: "Tightest — inline text spacing, tight components" },
              { size: "2xs", label: "Very tight — compact lists, dense layouts" },
              { size: "xs", label: "Tight — form field groups, related items" },
              { size: "s", label: "Compact — card content, button groups" },
              { size: "m", label: "Default — general purpose spacing" },
              { size: "l", label: "Comfortable — section padding, breathing room" },
              { size: "xl", label: "Spacious — major sections, emphasis" },
              { size: "2xl", label: "Very spacious — page sections, hero spacing" },
              { size: "3xl", label: "Generous — page-level spacing" },
              { size: "4xl", label: "Maximum — rare, for dramatic separation" },
            ].map(({ size, label }) => (
              <div class="stack-horizontal items-start gap-s">
                <div class="stack-horizontal gap-2xs" style="min-width: 140px;">
                  <code class="fs-xs t-medium" style="min-width: 3ch;">
                    {size}
                  </code>
                  <div
                    class={`bg-currentcolor fg-muted`}
                    style={`width: var(--spacing-${size}); height: 1.5rem;`}
                  />
                </div>
                <span class="fg-muted fs-xs">{label}</span>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* Decision Guide */}
      <Section
        title="Which Spacing Utility?"
        description="A quick guide to choosing the right tool for the job."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-xs">
              <span class="fg-emphasis t-bold fs-s">Use gap when...</span>
              <ul class="list stack gap-2xs fs-s fg-muted">
                <li>You're spacing children in a flex container (.stack or .stack-horizontal)</li>
                <li>You want consistent spacing between multiple items</li>
                <li>You want spacing that adapts when items wrap</li>
                <li>This should be your first choice 90% of the time</li>
              </ul>
            </div>

            <div class="b-b b-faint" />

            <div class="stack gap-xs">
              <span class="fg-emphasis t-bold fs-s">Use padding when...</span>
              <ul class="list stack gap-2xs fs-s fg-muted">
                <li>You need inner space inside an element (cards, buttons, containers)</li>
                <li>You're creating breathing room around content</li>
                <li>You need different spacing on different sides of a container</li>
              </ul>
            </div>

            <div class="b-b b-faint" />

            <div class="stack gap-xs">
              <span class="fg-emphasis t-bold fs-s">Use margin when...</span>
              <ul class="list stack gap-2xs fs-s fg-muted">
                <li>You can't use gap (not in a flex container)</li>
                <li>You need to push a single element away from others</li>
                <li>You need auto-centering (.mx-auto, .ml-auto, etc.)</li>
                <li>You need negative spacing to overlap or pull elements</li>
              </ul>
            </div>

            <div class="b-b b-faint" />

            <div class="stack gap-xs">
              <span class="fg-emphasis t-bold fs-s">Prefer gap over margin because...</span>
              <ul class="list stack gap-2xs fs-s fg-muted">
                <li>Gap doesn't collapse or interact with neighboring margins</li>
                <li>
                  Gap only affects the space <em>between</em> items, not before the first or after
                  the last
                </li>
                <li>Gap is easier to reason about and maintain</li>
              </ul>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* Gap (preferred) */}
      <Section
        title="Gap — Space Between Items"
        description="Use gap-* on flex containers (.stack or .stack-horizontal) to space children. This is the cleanest way to add space — no margin math needed."
      >
        <ExampleGroup>
          <Example label=".gap-xs" description="tight spacing for related items">
            <div class="stack gap-xs">
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </div>
          </Example>

          <Example label=".gap-m" description="default spacing, good for most cases">
            <div class="stack gap-m">
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </div>
          </Example>

          <Example label=".gap-l" description="comfortable spacing with breathing room">
            <div class="stack gap-l">
              <DemoBox label="Item 1" />
              <DemoBox label="Item 2" />
              <DemoBox label="Item 3" />
            </div>
          </Example>
        </ExampleGroup>

        <ExampleGroup>
          <Example label=".gap-row-*" description="control only vertical spacing">
            <div class="stack-horizontal gap-row-l gap-column-2xs">
              <DemoBox label="A" />
              <DemoBox label="B" />
              <DemoBox label="C" />
              <DemoBox label="D" />
              <DemoBox label="E" />
              <DemoBox label="F" />
            </div>
          </Example>

          <Example label=".gap-column-*" description="control only horizontal spacing">
            <div class="stack-horizontal gap-row-2xs gap-column-l">
              <DemoBox label="A" />
              <DemoBox label="B" />
              <DemoBox label="C" />
              <DemoBox label="D" />
              <DemoBox label="E" />
              <DemoBox label="F" />
            </div>
          </Example>
        </ExampleGroup>
      </Section>

      {/* Negative Margin */}
      <Section
        title="Negative Margin — Overlap & Pull"
        description="Use m--* to pull elements closer or create overlapping layouts. Useful for offsetting elements, breaking out of containers, or creating visual hierarchy."
      >
        <ExampleGroup>
          <Example label=".mx--m" description="break out of parent's horizontal padding">
            <div class="b-all b-default br-m px-m py-l bg-surface-raised">
              <div class="mb-s">
                <DemoBox label="Normal content" />
              </div>
              <div class="mx--m">
                <div class="bg-brand-subtle p-s">
                  <span class="fs-s">Full-width section with .mx--m</span>
                </div>
              </div>
              <div class="mt-s">
                <DemoBox label="Normal content" />
              </div>
            </div>
          </Example>
        </ExampleGroup>
      </Section>
    </DocsPage>
  );
}

export default SpacingPage;
