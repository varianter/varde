import { DocsPage, Example, ExampleGroup, ExamplePanel, Section } from "../components/docs";

export const path = "/components/form-controls";

export function FormControlsPage() {
  return (
    <DocsPage
      title="Form Controls"
      description="Semantic classes for native form elements. Apply .input, .select, .textarea, .checkbox, or .radio to their respective HTML elements. Size them with data-size and mark errors with aria-invalid."
    >
      <div style="max-width: 800px;">
        {/* Text Input */}
        <Section
          title="Text Input"
          description="Use .input on any text-like input element. Includes built-in focus ring and placeholder styling."
        >
          <ExamplePanel>
            <div class="stack gap-2xs">
              <label class="form-label" for="demo-text">
                Full name
              </label>
              <input class="input" type="text" id="demo-text" placeholder="e.g. Ola Nordmann" />
            </div>
          </ExamplePanel>
        </Section>

        {/* Textarea */}
        <Section title="Textarea" description="Use .textarea on a native textarea element.">
          <ExamplePanel>
            <div class="stack gap-2xs">
              <label class="form-label" for="demo-textarea">
                Description
              </label>
              <textarea
                class="textarea"
                id="demo-textarea"
                rows={3}
                placeholder="Write something…"
              />
            </div>
          </ExamplePanel>
        </Section>

        {/* Select */}
        <Section
          title="Select"
          description="Use .select on a native select element. A custom chevron is provided via background-image."
        >
          <ExamplePanel>
            <div class="stack gap-2xs">
              <label class="form-label" for="demo-select">
                Country
              </label>
              <select class="select" id="demo-select">
                <option value="">Choose…</option>
                <option value="no">Norway</option>
                <option value="se">Sweden</option>
                <option value="dk" disabled>
                  Denmark
                </option>
              </select>

              <select class="select" name="foods" id="hr-select">
                <option value="">Choose a food</option>
                <hr />
                <optgroup label="Fruit">
                  <option value="apple">Apples</option>
                  <option value="banana">Bananas</option>
                  <option value="cherry">Cherries</option>
                  <option value="damson">Damsons</option>
                </optgroup>
                <hr />
                <optgroup label="Vegetables">
                  <option value="artichoke">Artichokes</option>
                  <option value="broccoli">Broccoli</option>
                  <option value="cabbage">Cabbages</option>
                </optgroup>
                <hr />
                <optgroup label="Meat">
                  <option value="beef">Beef</option>
                  <option value="chicken">Chicken</option>
                  <option value="pork">Pork</option>
                </optgroup>
                <hr />
                <optgroup label="Fish">
                  <option value="cod">Cod</option>
                  <option value="haddock">Haddock</option>
                  <option value="salmon">Salmon</option>
                  <option value="turbot">Turbot</option>
                </optgroup>
              </select>
            </div>
          </ExamplePanel>
        </Section>

        {/* Checkbox & Radio */}
        <Section
          title="Checkbox & Radio"
          description="Use .checkbox and .radio on native input elements. They replace the default appearance with a styled version that includes check and dot marks."
        >
          <ExampleGroup>
            <Example label=".checkbox">
              <div class="stack gap-s">
                <div class="stack-horizontal  gap-s">
                  <input class="checkbox" type="checkbox" id="demo-cb1" checked />
                  <label class="fs-s" for="demo-cb1">
                    Checked
                  </label>
                </div>
                <div class="stack-horizontal  gap-s">
                  <input class="checkbox" type="checkbox" id="demo-cb2" />
                  <label class="fs-s" for="demo-cb2">
                    Unchecked
                  </label>
                </div>
              </div>
            </Example>

            <Example label=".radio">
              <div class="stack gap-s">
                <div class="stack-horizontal gap-s">
                  <input class="radio" type="radio" name="demo-radio" id="demo-r1" checked />
                  <label class="fs-s" for="demo-r1">
                    Option A
                  </label>
                </div>
                <div class="stack-horizontal gap-s">
                  <input class="radio" type="radio" name="demo-radio" id="demo-r2" />
                  <label class="fs-s" for="demo-r2">
                    Option B
                  </label>
                </div>
              </div>
            </Example>
          </ExampleGroup>
        </Section>

        {/* Sizing */}
        <Section
          title="Sizing"
          description='All controls support data-size="small" and data-size="large". Medium is the default.'
        >
          <ExamplePanel>
            <div class="stack gap-s">
              <div class="stack-horizontal gap-s">
                <input class="input grow" type="text" data-size="small" placeholder="Small" />
                <button type="button" class="button" data-size="small">
                  Small button
                </button>
              </div>
              <div class="stack-horizontal gap-s">
                <input class="input grow" type="text" data-size="medium" placeholder="medium" />
                <button type="button" class="button" data-size="medium">
                  medium button
                </button>
              </div>
              <div class="stack-horizontal gap-s">
                <input class="input grow" type="text" data-size="large" placeholder="large" />
                <button type="button" class="button" data-size="large">
                  large button
                </button>
              </div>
            </div>
          </ExamplePanel>
        </Section>

        {/* Error State */}
        <Section
          title="Error State"
          description={
            'Set aria-invalid="true" on the control to trigger the error style. Don\'t add custom error classes or inline colors — the styling is handled automatically.'
          }
        >
          <ExamplePanel>
            <div class="stack gap-2xs">
              <label class="form-label" for="demo-error">
                Organization number
              </label>
              <input class="input" type="text" id="demo-error" value="asdf" aria-invalid="true" />
              <color-mode palette="coral">
                <p class="fs-s t-medium">– You may only enter numbers</p>
              </color-mode>
            </div>
          </ExamplePanel>
        </Section>

        {/* Example Form */}
        <Section
          title="Example Form"
          description="A realistic form combining labels, layout, validation, and multiple control types."
        >
          <ExamplePanel>
            <form class="stack gap-m">
              <div class="stack-horizontal items-start gap-m">
                <div class="stack gap-2xs grow">
                  <label class="form-label" for="demo-first">
                    First name
                  </label>
                  <input class="input" type="text" id="demo-first" placeholder="Ola" />
                </div>
                <div class="stack gap-2xs grow">
                  <label class="form-label" for="demo-last">
                    Last name
                  </label>
                  <input class="input" type="text" id="demo-last" placeholder="Nordmann" />
                </div>
              </div>

              <div class="stack">
                <label class="form-label mb-3xs" for="demo-email">
                  Email
                </label>
                <input
                  class="input"
                  type="email"
                  id="demo-email"
                  value="not-an-email"
                  aria-invalid="true"
                />
                <color-mode palette="coral">
                  <p class="fs-xs t-medium mt-2xs">Please enter a valid email address</p>
                </color-mode>
              </div>

              <div class="stack gap-2xs">
                <label class="form-label" for="demo-country">
                  Country
                </label>
                <select class="select" id="demo-country">
                  <option value="">Choose…</option>
                  <option value="no">Norway</option>
                  <option value="se">Sweden</option>
                  <option value="dk">Denmark</option>
                </select>
              </div>

              <div class="stack gap-2xs">
                <label class="form-label" for="demo-message">
                  Message
                </label>
                <textarea
                  class="textarea"
                  id="demo-message"
                  rows={3}
                  placeholder="Write something…"
                />
              </div>

              <div class="stack-horizontal gap-s">
                <input class="checkbox" type="checkbox" id="demo-terms" />
                <label class="fs-s" for="demo-terms">
                  I accept the terms and conditions
                </label>
              </div>

              <button class="button ml-auto px-xl" type="submit">
                Submit
              </button>
            </form>
          </ExamplePanel>
        </Section>

        <Section
          title="Example Form"
          description="A realistic form combining labels, layout, validation, and multiple control types."
        >
          <ExamplePanel>
            <div class="input stack-horizontal stack-nowrap">
              <input type="text" class="flex-1" />
              <span class="ml-auto">boop</span>
            </div>
          </ExamplePanel>
        </Section>
      </div>
    </DocsPage>
  );
}

export default FormControlsPage;
