import { DemoBox, DocsPage, Example, Section } from "../components/docs";

export const path = "/utilities/stagger-reveal";

const items = Array.from({ length: 9 }, (_, i) => i + 1);

function StaggerDemo({
  origin = "default",
}: {
  origin?: "default" | "outside-in" | "reverse" | "inside-out";
}) {
  return (
    <div
      class="d-grid gap-xs"
      style="
      grid-auto-flow: column;
      grid-auto-columns: 1fr;"
    >
      <div class="stack gap-3xs" stagger-items={`${origin} from-below soft`} data-stagger-demo>
        <div>Soft</div>
        {items.map((n) => (
          <DemoBox key={n} label={`Item ${n}`} />
        ))}
      </div>
      <div class="stack gap-3xs" stagger-items={`${origin} from-below soft`} data-stagger-demo>
        <div>Hard</div>
        {items.map((n) => (
          <DemoBox key={n} label={`Item ${n}`} />
        ))}
      </div>
    </div>
  );
}

export function StaggerRevealPage() {
  return (
    <DocsPage
      title="Stagger Reveal"
      description="Add stagger-reveal to any container and its direct children fade and lift into place one after another. Where sibling-index() isn't supported they all reveal together, with no delay."
    >
      <Section title="How it works" description="">
        <Example label="<div stagger-reveal>" description="">
          {/* <css-var-bind variable="--scale" unit="px" target=":root" strategy="global">
            <input class="range" type="range" min="0" max="100" value="50" />
            <input type="number" min="0" max="100" value="50" />
          </css-var-bind> */}
          <StaggerDemo />
        </Example>

        <Example label="<div stagger-reveal>" description="">
          <StaggerDemo origin="outside-in" />
        </Example>
        <Example label="<div stagger-reveal>" description="">
          <StaggerDemo origin="reverse" />
        </Example>

        <Example label="<div stagger-reveal>" description="">
          <StaggerDemo origin="inside-out" />
        </Example>
      </Section>

      {/* Replay button so the demos above can be re-watched without refreshing. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-replay]');
          if (!btn) return;
          document.querySelectorAll('[data-stagger-demo]').forEach((el) => {
            const clone = el.cloneNode(true);
            el.replaceWith(clone);
          });
        });
      `,
        }}
      ></script>
      <div class="stack-horizontal gap-xs justify-center pt-l" style={{ position: "fixed" }}>
        <button type="button" data-replay class="button" data-variant="outlined" data-size="small">
          Replay
        </button>
      </div>
    </DocsPage>
  );
}

export default StaggerRevealPage;
