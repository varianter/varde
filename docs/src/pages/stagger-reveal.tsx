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
      description="Add stagger-reveal to any container and its direct children fade and lift into place one after another. Where sibling-index() isn't supported they all reveal together, with no delay."
    >
      <Section
        title="How it works"
        description="Each child transitions from an @starting-style, with a transition-delay of --reveal-step per sibling-index(), capped at --reveal-max-delay so long lists don't trail on forever. Children reveal the first time they render, so a child added later reveals on arrival and children already on screen stay put when the list reorders."
      >
        <Example
          label="<div stagger-reveal>"
          description="default speed — 0.2s duration, 40ms per child, capped at 0.25s"
        >
          <StaggerDemo />
        </Example>
      </Section>

      <Section
        title="Speed presets"
        description="Use stagger-reveal='slow' for gentle entrances, stagger-reveal='fast' for quick ones. Both still defer to the public --reveal-* custom properties if set."
      >
        <ExampleGroup>
          <Example
            label='stagger-reveal="slow"'
            description="0.3s duration, 65ms per child, capped at 0.4s"
          >
            <StaggerDemo speed="slow" />
          </Example>

          <Example
            label='stagger-reveal="fast"'
            description="0.15s duration, 30ms per child, capped at 0.18s"
          >
            <StaggerDemo speed="fast" />
          </Example>
        </ExampleGroup>
      </Section>

      <Section
        title="Custom timing"
        description="Override any preset by setting the --reveal-* custom properties on the container: --reveal-step (spacing between children), --reveal-max-delay (the cap), --reveal-duration, --reveal-distance, --reveal-initial-delay and --reveal-timing-function."
      >
        <ExampleGroup>
          <Example label="--reveal-step: 0.12s" description="wider spacing between children">
            <div
              class="stack gap-xs"
              data-stagger-demo
              stagger-reveal
              style="--reveal-step: 0.12s;"
            >
              {items.map((n) => (
                <DemoBox key={n} label={`Item ${n}`} />
              ))}
            </div>
          </Example>

          <Example
            label="--reveal-max-delay: 0.15s"
            description="slow preset, capped early — the first children stagger, the tail lands together"
          >
            <div
              class="stack gap-xs"
              data-stagger-demo
              stagger-reveal="slow"
              style="--reveal-max-delay: 0.15s;"
            >
              {items.map((n) => (
                <DemoBox key={n} label={`Item ${n}`} />
              ))}
            </div>
          </Example>
        </ExampleGroup>
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
