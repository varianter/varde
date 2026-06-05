import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/components/buttons";

export function ButtonsPage() {
  return (
    <DocsPage
      title="Buttons"
      description="Use .button on <button> or <a> elements. Configure color with data-color, variant with data-variant, and size with data-size."
    >
      {/* Colors & Variants */}
      <Section
        title="Colors & Variants"
        description='Combine data-color ("primary", "secondary", "danger") with data-variant ("filled", "tinted", "plain"). Primary filled is the default.'
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Primary</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Filled
                </button>
                <button type="button" class="button" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-variant="plain">
                  Plain
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Secondary</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button" data-color="secondary">
                  Filled
                </button>
                <button type="button" class="button" data-color="secondary" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-color="secondary" data-variant="plain">
                  Plain
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Danger</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button" data-color="danger">
                  Filled
                </button>
                <button type="button" class="button" data-color="danger" data-variant="tinted">
                  Tinted
                </button>
                <button type="button" class="button" data-color="danger" data-variant="plain">
                  Plain
                </button>
              </div>
            </div>
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
                <button type="button" class="button" data-variant="tinted">
                  <span class="icon" data-icon="pencil" /> Edit
                </button>
                <button type="button" class="button" data-variant="plain">
                  <span class="icon" data-icon="cage" /> Cages
                </button>
              </div>
            </div>
            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Icon after text</span>
              <div class="stack-horizontal gap-m">
                <button type="button" class="button">
                  Continue <span class="icon" data-icon="plus" />
                </button>
                <button type="button" class="button" data-color="secondary">
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
                <button type="button" class="button" data-variant="tinted" aria-label="Edit">
                  <span class="icon" data-icon="pencil" />
                </button>
                <button
                  type="button"
                  class="button"
                  data-color="danger"
                  data-variant="plain"
                  aria-label="Cages"
                >
                  <span class="icon" data-icon="cage" />
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
              <button type="button" class="button" data-variant="tinted">
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
