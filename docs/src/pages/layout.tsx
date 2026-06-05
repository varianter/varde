import {
  DemoBox,
  DocsPage,
  Example,
  ExampleGroup,
  ExamplePanel,
  Section,
} from "../components/docs";

export const path = "/utilities/layout";

const tallBox = (
  <DemoBox>
    <div style="height: 4rem; display: flex; align-items: center;">Tall</div>
  </DemoBox>
);

const wrappingItems = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"];

export default function LayoutPage() {
  return (
    <DocsPage
      title="Layout"
      description="Flex-based layout primitives. Stack things vertically or horizontally, control sizing, and distribute space. All stacks use flex-wrap by default — no media queries needed. Items wrap naturally when space runs out, adapting to zoom, font size changes, and container resizing."
    >
      {/* Vertical Stack */}
      <Section
        title="Vertical Stack"
        description="The default .stack is a vertical flex column. Use it for any top-to-bottom flow."
      >
        <ExamplePanel>
          <div class="stack gap-s">
            <DemoBox label="First" />
            <DemoBox label="Second" />
            <DemoBox label="Third" />
          </div>
        </ExamplePanel>
      </Section>

      {/* Horizontal Stacks */}
      <Section
        title="Horizontal Stacks"
        description="Three horizontal variants control cross-axis alignment. All wrap by default — use .nowrap only when you're certain items should never wrap."
      >
        <ExampleGroup>
          <Example label=".stack-horizontal" description="centered (default)" resize>
            <div class="stack-horizontal gap-s">
              <DemoBox label="A" />
              {tallBox}
              <DemoBox label="C" />
            </div>
          </Example>

          <Example label=".stack-horizontal items-start" description="top-aligned" resize>
            <div class="stack-horizontal items-start gap-s">
              <DemoBox label="A" />
              {tallBox}
              <DemoBox label="C" />
            </div>
          </Example>

          <Example label=".stack-horizontal items-end" description="bottom-aligned" resize>
            <div class="stack-horizontal items-end gap-s">
              <DemoBox label="A" />
              {tallBox}
              <DemoBox label="C" />
            </div>
          </Example>
        </ExampleGroup>

        <ExampleGroup>
          <Example label=".stack-horizontal" description="items wrap when space runs out" resize>
            <div class="stack-horizontal gap-s">
              {wrappingItems.map((item) => (
                <DemoBox label={item} />
              ))}
            </div>
          </Example>

          <Example label=".nowrap" description="forced single line (use sparingly)" resize>
            <div class="stack-horizontal nowrap gap-s of-scroll">
              {wrappingItems.map((item) => (
                <DemoBox label={item} />
              ))}
            </div>
          </Example>
        </ExampleGroup>
      </Section>

      {/* Flex Sizing */}
      <Section title="Flex Sizing" description="Control how items grow and shrink within a stack.">
        <ExampleGroup>
          <Example label=".grow" description="flex-grow: 1" resize>
            <div class="stack-horizontal gap-s">
              <DemoBox label="Fixed" />
              <div class="grow">
                <DemoBox label=".grow (fills remaining space)" />
              </div>
            </div>
          </Example>

          <Example label=".flex-1" description="flex: 1 (equal sizing)" resize>
            <div class="stack-horizontal gap-s">
              <div class="flex-1">
                <DemoBox label=".flex-1" />
              </div>
              <div class="flex-1">
                <DemoBox label=".flex-1" />
              </div>
              <div class="flex-1">
                <DemoBox label=".flex-1" />
              </div>
            </div>
          </Example>

          <Example label=".shrink" description="flex-shrink: 1" resize>
            <div class="stack-horizontal nowrap gap-s">
              <div class="grow">
                <DemoBox label=".grow" />
              </div>
              <div class="shrink">
                <DemoBox label=".shrink (can compress)" />
              </div>
            </div>
          </Example>
        </ExampleGroup>
      </Section>

      {/* Distribution with margin auto */}
      <Section
        title="Distributing Space"
        description="Instead of justify-content, use margin auto on child elements. This gives you precise control over which item pushes away from the others."
      >
        <ExampleGroup>
          <Example label=".ml-auto" description="push last item right" resize>
            <div class="stack-horizontal gap-s b-all b-default p-s br-m">
              <DemoBox label="Logo" />
              <DemoBox label="Nav" />
              <div class="ml-auto">
                <DemoBox label="Sign In" />
              </div>
            </div>
          </Example>

          <Example label=".mx-auto" description="center an item" resize>
            <div class="stack-horizontal gap-s b-all b-default p-s br-m">
              <DemoBox label="Left" />
              <div class="mx-auto">
                <DemoBox label="Centered" />
              </div>
              <DemoBox label="Right" />
            </div>
          </Example>

          <Example
            label=".mr-auto"
            description="push remaining items right (resize to see wrap behavior)"
            resize
          >
            <div class="stack-horizontal gap-s b-all b-default p-s br-m">
              <div class="mr-auto">
                <DemoBox label="Logo" />
              </div>
              <DemoBox label="Sign In" />
            </div>
          </Example>

          <Example label=".mt-auto" description="push item to bottom">
            <div class="stack gap-s b-all b-default p-s br-m" style="height: 18rem;">
              <DemoBox label="Title" />
              <DemoBox label="Description" />
              <div class="mt-auto">
                <DemoBox label="Action button" />
              </div>
            </div>
          </Example>
        </ExampleGroup>
      </Section>
    </DocsPage>
  );
}
