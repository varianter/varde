import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/components/buttons";

export function ButtonsPage() {
  return (
    <DocsPage
      title="Buttons"
      description='Use .v-button on <button> or <a> elements. Wrap in <color-mode palette="..."> to set the color, configure variant with data-variant, and size with data-size.'
    >
      {/* Colors & Variants */}
      <Section
        title="Colors & Variants"
        description='Wrap buttons in <color-mode palette="..."> to control the color. Combine with data-variant ("filled", "outlined", "tinted", "plain"). Unwrapped buttons get the default grey palette.'
      >
        <ExamplePanel>
          <div class="stack-v gap-m">
            <div class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Default (primary / grey)</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  Filled
                </button>
                <button type="button" class="v-button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="v-button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="v-button" data-variant="plain">
                  Plain
                </button>
              </div>
            </div>
            <color-mode palette="coral" class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Danger (coral)</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  Filled
                </button>
                <button type="button" class="v-button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="v-button" data-variant="plain">
                  Plain
                </button>
              </div>
            </color-mode>

            <color-mode palette="blue" class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Blue</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  Filled
                </button>
                <button type="button" class="v-button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="v-button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="v-button" data-variant="plain">
                  Plain
                </button>
              </div>
            </color-mode>

            <color-mode palette="periwinkle" class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Periwinkle</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  Filled
                </button>
                <button type="button" class="v-button" data-variant="outlined">
                  Outlined
                </button>
                <button type="button" class="v-button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="v-button" data-variant="plain">
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
          <div class="stack-h gap-m">
            <button type="button" class="v-button" data-size="small">
              Small
            </button>
            <button type="button" class="v-button">
              Medium
            </button>
            <button type="button" class="v-button" data-size="large">
              Large
            </button>
          </div>
        </ExamplePanel>
      </Section>

      {/* With Icons */}
      <Section
        title="With Icons"
        description="Place a .v-icon span with a data-v-icon attribute inside the button. The icon inherits color from the button and scales with font size."
      >
        <ExamplePanel>
          <div class="stack-v gap-m">
            <div class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Icon before text</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  <span class="v-icon" data-v-icon="plus" /> Add item
                </button>
                <button type="button" class="v-button" data-variant="outlined">
                  <span class="v-icon" data-v-icon="pencil" /> Edit
                </button>
                <button type="button" class="v-button" data-variant="plain">
                  <span class="v-icon" data-v-icon="pencil" /> Edit
                </button>
              </div>
            </div>
            <div class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Icon after text</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button">
                  Continue <span class="v-icon" data-v-icon="plus" />
                </button>
                <button type="button" class="v-button">
                  Settings <span class="v-icon" data-v-icon="pencil" />
                </button>
              </div>
            </div>
            <div class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Icon only</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button" aria-label="Add">
                  <span class="v-icon" data-v-icon="plus" />
                </button>
                <button type="button" class="v-button" data-variant="outlined" aria-label="Edit">
                  <span class="v-icon" data-v-icon="pencil" />
                </button>
                <button type="button" class="v-button" data-variant="plain" aria-label="Pencil">
                  <span class="v-icon" data-v-icon="plus" />
                </button>
              </div>
            </div>
            <div class="stack-v gap-2xs">
              <span class="fs-xs ink-subtle fw-medium">Sizes with icons</span>
              <div class="stack-h gap-m">
                <button type="button" class="v-button" data-size="small">
                  <span class="v-icon" data-v-icon="plus" /> Small
                </button>
                <button type="button" class="v-button">
                  <span class="v-icon" data-v-icon="plus" /> Medium
                </button>
                <button type="button" class="v-button" data-size="large">
                  <span class="v-icon" data-v-icon="plus" /> Large
                </button>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* With Spinner */}
      <Section
        title="With Spinner"
        description="Place a .v-spinner inside the button. It inherits color from the button and scales to the font size automatically."
      >
        <ExamplePanel>
          <div class="stack-v gap-m">
            <div class="stack-h gap-m">
              <button type="button" class="v-button">
                <span class="v-spinner" /> Saving…
              </button>
              <button type="button" class="v-button" data-variant="outlined">
                <span class="v-spinner" /> Saving…
              </button>
              <button type="button" class="v-button" data-variant="plain">
                <span class="v-spinner" /> Saving…
              </button>
            </div>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default ButtonsPage;
