import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/utilities/colors";

const intents = ["brand", "danger", "warning", "success", "info"] as const;
const intensities = ["subtle", "medium", "strong"] as const;

function Swatch({ cls, label }: { cls: string; label: string }) {
  return (
    <div class="stack gap-2xs grow" style="min-width: 100px;">
      <div class={`${cls} br-m`} style="height: 3rem; min-width: 100px;" />
      <code class="fs-xs fg-muted">.{label}</code>
    </div>
  );
}

function BorderSwatch({ cls, label }: { cls: string; label: string }) {
  return (
    <div class="stack gap-2xs grow" style="min-width: 100px;">
      <div class={`b-all ${cls} br-m`} style="height: 3rem; min-width: 100px;" />
      <code class="fs-xs fg-muted">.{label}</code>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <DocsPage
      title="Colors"
      description="Semantic color utilities for backgrounds, text, and borders. Structural tokens come first — they're the everyday workhorses. Intent tokens communicate meaning."
    >
      {/* ════════════════════════════════════════════
          STRUCTURAL TOKENS
          ════════════════════════════════════════════ */}

      {/* ── Surfaces ── */}
      <Section
        title="Surfaces"
        description="Three elevation levels for layering content. Sunken sits behind, default is the main canvas, and raised floats above."
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-m">
            {[
              { cls: "bg-surface-sunken", label: "bg-surface-sunken" },
              { cls: "bg-surface-default", label: "bg-surface-default" },
              { cls: "bg-surface-raised", label: "bg-surface-raised" },
            ].map(({ cls, label }) => (
              <div class="stack gap-2xs grow" style="min-width: 100px;">
                <div
                  class={`${cls} br-m b-all b-default`}
                  style="height: 4rem; min-width: 140px;"
                />
                <code class="fs-xs fg-muted">.{label}</code>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Text ── */}
      <Section
        title="Text: Structural"
        description="Most text doesn't communicate status — it just needs the right visual weight. .fg-default for body text, .fg-muted for secondary content, .fg-emphasis for headings and labels."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack gap-xs">
              <div class="stack gap-2xs">
                <span class="fg-emphasis fs-l t-bold">.fg-emphasis — Page heading</span>
                <code class="fs-xs fg-muted">.fg-emphasis</code>
              </div>
              <div class="stack gap-2xs">
                <span class="fg-default fs-m">
                  .fg-default — Body text that makes up the bulk of your content. This is the color
                  you use without thinking.
                </span>
                <code class="fs-xs fg-muted">.fg-default</code>
              </div>
              <div class="stack gap-2xs">
                <span class="fg-muted fs-s">
                  .fg-muted — Secondary text, helper text, timestamps, captions
                </span>
                <code class="fs-xs fg-muted">.fg-muted</code>
              </div>
              <div class="stack gap-2xs">
                <span
                  class="fg-inverted fs-s bg-surface-sunken p-xs br-m"
                  style="align-self: flex-start;"
                >
                  .fg-inverted — Text on dark backgrounds
                </span>
                <code class="fs-xs fg-muted">.fg-inverted</code>
              </div>
            </div>

            <div class="b-b b-faint" />

            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Typical usage: card with hierarchy</span>
              <div class="b-all b-default br-m p-m stack gap-xs" style="max-width: 320px;">
                <span class="fg-emphasis t-bold">Project update</span>
                <span class="fg-default fs-s">
                  The deployment completed successfully and all services are running.
                </span>
                <span class="fg-muted fs-xs">2 minutes ago</span>
              </div>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Structural Borders ── */}
      <Section
        title="Borders: Structural"
        description="Most borders don't communicate meaning — they just separate or outline things. Reach for these first. .b-default is the workhorse; .b-faint for quieter lines, .b-prominent when the line needs to be clearly visible."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <div class="stack-horizontal gap-m">
              <BorderSwatch cls="b-faint" label="b-faint" />
              <BorderSwatch cls="b-default" label="b-default" />
              <BorderSwatch cls="b-prominent" label="b-prominent" />
            </div>

            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Typical usage: list with dividers</span>
              <div class="stack br-m b-all b-default">
                {["Inbox", "Drafts", "Sent", "Archive"].map((item, i, arr) => (
                  <div class={`p-s ${i < arr.length - 1 ? "b-b b-default" : ""}`}>{item}</div>
                ))}
              </div>
            </div>

            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Card outline</span>
              <div class="b-all b-default br-m p-m stack gap-xs" style="max-width: 280px;">
                <span class="fg-emphasis t-bold">Card title</span>
                <span class="fg-muted fs-s">
                  A simple card with a structural border. No intent, just separation.
                </span>
              </div>
            </div>

            <div class="stack gap-2xs">
              <span class="fs-xs fg-muted t-medium">Quiet separator</span>
              <div class="b-b b-faint py-s">
                <span class="fg-muted fs-s">A muted divider below this text</span>
              </div>
              <span class="fg-muted fs-s">Content continues here</span>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* ════════════════════════════════════════════
          INTENT TOKENS
          ════════════════════════════════════════════ */}

      {/* ── Intent Backgrounds ── */}
      <Section
        title="Backgrounds: Intent"
        description="Use .bg-{intent}-{intensity} when the background communicates meaning. Each intent has three intensities: subtle, medium, and strong."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            {intents.map((intent) => (
              <div class="stack gap-2xs">
                <span class="fs-xs fg-muted t-medium">{intent}</span>
                <div class="stack-horizontal gap-m grow">
                  {intensities.map((intensity) => (
                    <Swatch cls={`bg-${intent}-${intensity}`} label={`bg-${intent}-${intensity}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Intent Text ── */}
      <Section
        title="Text: Intent"
        description="Use .fg-{intent}-{intensity} only when text communicates status or meaning — error messages, success confirmations, warnings. For everyday text hierarchy, use the structural tokens above."
      >
        <ExamplePanel>
          <div class="stack gap-s">
            {intents.map((intent) => (
              <div class="stack gap-2xs">
                <span class="fs-xs fg-muted t-medium">{intent}</span>
                <div class="stack-horizontal gap-l">
                  {intensities.map((intensity) => (
                    <span class={`fg-${intent}-${intensity} fs-m t-medium`}>
                      .fg-{intent}-{intensity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ── Intent Borders ── */}
      <Section
        title="Borders: Intent"
        description="Only use intent borders when the border itself communicates status or meaning — validation errors, success states, selected items. If you just need a line, use a structural border instead."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            {intents.map((intent) => (
              <div class="stack gap-2xs">
                <span class="fs-xs fg-muted t-medium">{intent}</span>
                <div class="stack-horizontal gap-m">
                  {intensities.map((intensity) => (
                    <BorderSwatch
                      cls={`b-${intent}-${intensity}`}
                      label={`b-${intent}-${intensity}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>

      {/* ════════════════════════════════════════════
          COMPOSITION & GUIDANCE
          ════════════════════════════════════════════ */}

      {/* ── Composing: Status Banners ── */}
      <Section
        title="Composing: Status Banners"
        description="Combine bg, fg, and border classes from the same intent to build cohesive UI patterns like alerts or status messages. This is when intent tokens shine — every layer reinforces the same meaning."
      >
        <ExamplePanel>
          <div class="stack gap-m">
            <span class="fs-xs fg-muted t-medium">Medium intensity</span>
            {[
              {
                intent: "info",
                title: "Information",
                message: "Your session will expire in 5 minutes.",
              },
              { intent: "success", title: "Success", message: "Your changes have been saved." },
              {
                intent: "warning",
                title: "Warning",
                message: "This action cannot be undone easily.",
              },
              {
                intent: "danger",
                title: "Error",
                message: "Something went wrong. Please try again.",
              },
            ].map(({ intent, title, message }) => (
              <div class={`stack gap-2xs bg-${intent}-medium b-all b-${intent}-medium br-m p-m`}>
                <span class={`fg-${intent}-strong t-bold fs-s`}>{title}</span>
                <span class={`fg-${intent}-medium fs-s`}>{message}</span>
              </div>
            ))}
          </div>

          <div class="stack gap-m">
            <span class="fs-xs fg-muted t-medium">Subtle intensity</span>
            {[
              {
                intent: "info",
                title: "Information",
                message: "Your session will expire in 5 minutes.",
              },
              { intent: "success", title: "Success", message: "Your changes have been saved." },
              {
                intent: "warning",
                title: "Warning",
                message: "This action cannot be undone easily.",
              },
              {
                intent: "danger",
                title: "Error",
                message: "Something went wrong. Please try again.",
              },
            ].map(({ intent, title, message }) => (
              <div class={`stack gap-2xs bg-${intent}-subtle b-all b-${intent}-subtle br-m p-m`}>
                <span class={`fg-${intent}-strong t-bold fs-s`}>{title}</span>
                <span class={`fg-${intent}-medium fs-s`}>{message}</span>
              </div>
            ))}
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}
