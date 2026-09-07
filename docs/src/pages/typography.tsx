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
        description="Use fw-regular, fw-medium, and fw-bold to control font weight."
      >
        <ExamplePanel>
          {[
            { cls: "fw-regular", label: "fw-regular", weight: "400" },
            { cls: "fw-medium", label: "fw-medium", weight: "500" },
            { cls: "fw-bold", label: "fw-bold", weight: "600" },
          ].map(({ cls, label, weight }) => (
            <div class="stack-horizontal gap-m">
              <code class="fs-xs fg-muted" style="min-width: 80px; flex-shrink: 0;">
                .{label}
              </code>
              <span class={`fs-l ${cls}`}>
                The quick brown fox <span class="fs-xs fg-muted fw-regular">({weight})</span>
              </span>
            </div>
          ))}
        </ExamplePanel>
      </Section>

      {/* Text Alignment */}
      <Section
        title="Text Alignment"
        description="Use ta-left, ta-center, and ta-right to control text alignment."
      >
        <ExamplePanel>
          {[
            { cls: "ta-left", label: "ta-left" },
            { cls: "ta-center", label: "ta-center" },
            { cls: "ta-right", label: "ta-right" },
          ].map(({ cls, label }) => (
            <div class="stack gap-2xs">
              <code class="fs-xs fg-muted">.{label}</code>
              <div class={`${cls} p-s b-all bc-default br-m`}>
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
            <code class="fs-xs fg-muted">.fs-3xl .fw-bold .ta-center</code>
            <p class="fs-3xl fw-bold ta-center">Page Title</p>
          </div>

          <div class="stack gap-2xs">
            <code class="fs-xs fg-muted">.fs-s .fw-medium .fg-muted</code>
            <p class="fs-s fw-medium fg-muted">A subtle label or caption</p>
          </div>

          <div class="stack gap-2xs">
            <code class="fs-xs fg-muted">.fs-xl .fw-bold .ta-right</code>
            <p class="fs-xl fw-bold ta-right">Right-aligned heading</p>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default TypographyPage;
