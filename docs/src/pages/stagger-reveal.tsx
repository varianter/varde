import { DemoBox, DocsPage, Example, ExampleGroup, Section } from "../components/docs";

export const path = "/utilities/stagger-reveal";

const items = Array.from({ length: 6 }, (_, i) => i + 1);

function StaggerDemo({ speed = "default" }: { speed?: "default" | "slow" | "fast" }) {
  return (
    <div class="stack gap-xs" data-stagger-demo stagger-reveal={speed}>
      {items.map((n) => (
        <DemoBox key={n} label={`Item ${n}`} />
      ))}
    </div>
  );
}

export function StaggerRevealPage() {
  return (
    <DocsPage
      title="Stagger Reveal"
      description="Add stagger-reveal to any container and its direct children fade and lift into place one after another. Falls back to a single uniform fade-in where sibling-index() isn't supported."
    >
      <Section
        title="How it works"
        description="The helper reads each child's sibling-index() to compute a per-child animation-delay. Browsers without sibling-index() support skip the stagger and get a plain fade-in."
      >
        <Example
          label="<div stagger-reveal>"
          description="default speed — 0.2s duration, max 0.25s delay"
        >
          <StaggerDemo />
        </Example>
      </Section>

      <Section
        title="Speed presets"
        description="Use stagger-reveal='slow' for gentle entrances, stagger-reveal='fast' for quick ones. Both still defer to the public --reveal-* custom properties if set."
      >
        <ExampleGroup>
          <Example label='stagger-reveal="slow"' description="0.3s duration, max 0.4s delay">
            <StaggerDemo speed="slow" />
          </Example>

          <Example label='stagger-reveal="fast"' description="0.15s duration, max 0.15s delay">
            <StaggerDemo speed="fast" />
          </Example>
        </ExampleGroup>
      </Section>

      <Section
        title="Custom timing"
        description="Override any preset by setting one of the --reveal-* custom properties on the container. Here the same slow preset gets a longer max-delay."
      >
        <Example
          label="--reveal-max-delay: 0.6s"
          description="overrides the slow preset's max delay"
        >
          <div class="stack gap-xs" stagger-reveal="slow" style="--reveal-max-delay: 0.6s;">
            {items.map((n) => (
              <DemoBox key={n} label={`Item ${n}`} />
            ))}
          </div>
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
      <div class="stack-horizontal gap-xs justify-center pt-l">
        <button type="button" data-replay class="button" data-variant="outlined" data-size="small">
          Replay
        </button>
      </div>
    </DocsPage>
  );
}

export default StaggerRevealPage;
