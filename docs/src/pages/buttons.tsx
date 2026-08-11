import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/components/buttons";

export function ButtonsPage() {
  return (
    <DocsPage
      title="Buttons"
      description='Use .button on <button> or <a> elements. Wrap in <color-mode palette="..."> to set the color, configure variant with data-variant, and size with data-size.'
    >
      {/* Colors & Variants */}
      <Section
        title="Colors & Variants"
        description='Wrap buttons in <color-mode palette="..."> to control the color. Combine with data-variant ("filled", "outlined", "tinted", "plain"). Unwrapped buttons get the default grey palette.'
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Default (primary / grey)</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Filled
                </button>
                <button type="button" class="button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-variant="plain">
                  Plain
                </button>
              </div>
            </div>
            <color-mode palette="coral" class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Danger (coral)</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Filled
                </button>
                <button type="button" class="button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="button" data-variant="plain">
                  Plain
                </button>
              </div>
            </color-mode>

            <color-mode palette="blue" class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Blue</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Filled
                </button>
                <button type="button" class="button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-variant="plain">
                  Plain
                </button>
              </div>
            </color-mode>

            <color-mode palette="periwinkle" class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Periwinkle</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Filled
                </button>
                <button type="button" class="button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-variant="plain">
                  Plain
                </button>
              </div>
            </color-mode>
          </div>
        </ExamplePanel>
      </Section>

      {/* Sizing */}
      <Section
        title="Sizing"
        description='Set data-size to "small" or "large". Medium is the default.'
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-m">
            <button type="button" class="button" data-size="small">
              Small
            </button>
            <button type="button" class="button">
              Medium
            </button>
            <button type="button" class="button" data-size="large">
              Large
            </button>
          </div>
        </ExamplePanel>
      </Section>

      {/* With Icons */}
      <Section
        title="With Icons"
        description="Place a .icon span with a data-icon attribute inside the button. The icon inherits color from the button and scales with font size."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Icon before text</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  <span class="icon" data-icon="plus" /> Add item
                </button>
                <button type="button" class="button" data-variant="outlined">
                  <span class="icon" data-icon="pencil" /> Edit
                </button>
                <button type="button" class="button" data-variant="plain">
                  <span class="icon" data-icon="pencil" /> Edit
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Icon after text</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Continue <span class="icon" data-icon="plus" />
                </button>
                <button type="button" class="button">
                  Settings <span class="icon" data-icon="pencil" />
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Icon only</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button" aria-label="Add">
                  <span class="icon" data-icon="plus" />
                </button>
                <button type="button" class="button" data-variant="outlined" aria-label="Edit">
                  <span class="icon" data-icon="pencil" />
                </button>
                <button type="button" class="button" data-variant="plain" aria-label="Pencil">
                  <span class="icon" data-icon="plus" />
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Sizes with icons</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button" data-size="small">
                  <span class="icon" data-icon="plus" /> Small
                </button>
                <button type="button" class="button">
                  <span class="icon" data-icon="plus" /> Medium
                </button>
                <button type="button" class="button" data-size="large">
                  <span class="icon" data-icon="plus" /> Large
                </button>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* With Spinner */}
      <Section
        title="With Spinner"
        description="Place a .spinner inside the button. It inherits color from the button and scales to the font size automatically."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack-horizontal gap-m">
              <button type="button" class="button">
                <span class="spinner" /> Saving…
              </button>
              <button type="button" class="button" data-variant="outlined">
                <span class="spinner" /> Saving…
              </button>
              <button type="button" class="button" data-variant="plain">
                <span class="spinner" /> Saving…
              </button>
            </div>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default ButtonsPage;
