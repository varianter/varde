import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/utilities/typography";

export function TypographyPage() {
  return (
    <DocsPage
      title="Typography"
      description="Utility classes for font size, font weight, and text alignment."
    >
      {/* Font Sizes */}
      <Section
        title="Font Size"
        description="Use fs-* classes to set font size. The scale goes from xs to 4xl."
      >
        <ExamplePanel>
          {[
            { cls: "fs-xs", label: "fs-xs" },
            { cls: "fs-s", label: "fs-s" },
            { cls: "fs-m", label: "fs-m" },
            { cls: "fs-l", label: "fs-l" },
            { cls: "fs-xl", label: "fs-xl" },
            { cls: "fs-2xl", label: "fs-2xl" },
            { cls: "fs-3xl", label: "fs-3xl" },
            { cls: "fs-4xl", label: "fs-4xl" },
          ].map(({ cls, label }) => (
            <div class="stack-horizontal gap-m">
              <code class="fs-xs fg-muted" style="min-width: 80px; flex-shrink: 0;">
                .{label}
              </code>
              <span class={cls}>The quick brown fox</span>
            </div>
          ))}
        </ExamplePanel>
      </Section>

      {/* Font Weight */}
      <Section
        title="Font Weight"
        description="Use t-regular, t-medium, and t-bold to control font weight."
      >
        <ExamplePanel>
          {[
            { cls: "t-regular", label: "t-regular", weight: "400" },
            { cls: "t-medium", label: "t-medium", weight: "500" },
            { cls: "t-bold", label: "t-bold", weight: "600" },
          ].map(({ cls, label, weight }) => (
            <div class="stack-horizontal gap-m">
              <code class="fs-xs fg-muted" style="min-width: 80px; flex-shrink: 0;">
                .{label}
              </code>
              <span class={`fs-l ${cls}`}>
                The quick brown fox{" "}
                <span class="fs-xs fg-muted t-regular">({weight})</span>
              </span>
            </div>
          ))}
        </ExamplePanel>
      </Section>

      {/* Text Alignment */}
      <Section
        title="Text Alignment"
        description="Use t-left, t-center, and t-right to control text alignment."
      >
        <ExamplePanel>
          {[
            { cls: "t-left", label: "t-left" },
            { cls: "t-center", label: "t-center" },
            { cls: "t-right", label: "t-right" },
          ].map(({ cls, label }) => (
            <div class="stack gap-2xs">
              <code class="fs-xs fg-muted">.{label}</code>
              <div class={`${cls} p-s b-all b-default br-m`}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </ExamplePanel>
      </Section>

      {/* Combining Classes */}
      <Section
        title="Combining Classes"
        description="Typography utilities compose naturally. Combine size, weight, and alignment as needed."
      >
        <ExamplePanel>
          <div class="stack gap-2xs">
            <code class="fs-xs fg-muted">.fs-3xl .t-bold .t-center</code>
            <p class="fs-3xl t-bold t-center">Page Title</p>
          </div>

          <div class="stack gap-2xs">
            <code class="fs-xs fg-muted">.fs-s .t-medium .fg-muted</code>
            <p class="fs-s t-medium fg-muted">A subtle label or caption</p>
          </div>

          <div class="stack gap-2xs">
            <code class="fs-xs fg-muted">.fs-xl .t-bold .t-right</code>
            <p class="fs-xl t-bold t-right">Right-aligned heading</p>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default TypographyPage;
