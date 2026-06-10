import type { Child } from "hono/jsx";

export function DocsPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: Child;
}) {
  return (
    <article class="stack gap-2xl mx-auto py-xl px-xl" style="max-width: 1200px;">
      <header class="pt-2xl pb-2xl">
        <div class="stack gap-xs">
          <h2 class="fs-3xl t-bold">{title}</h2>
          <p class="fs-l fg-muted mw-7">{description}</p>
        </div>
      </header>

      {children}
    </article>
  );
}

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: Child;
}) {
  return (
    <section class="stack gap-m py-xl">
      <div>
        <h3 class="fs-xl t-bold">{title}</h3>
        {description && <p class="fg-muted fs-s">{description}</p>}
      </div>
      <div class="mt-l">{children}</div>
    </section>
  );
}

export function ExamplePanel({ children, resize = false }: { children: Child; resize?: boolean }) {
  return (
    <div
      class="stack gap-s bg-surface-raised p-l br-m of-scroll"
      style={resize ? "resize: horizontal;" : undefined}
    >
      {children}
    </div>
  );
}

export function Example({
  label,
  description,
  resize = false,
  children,
}: {
  label: string;
  description?: string;
  resize?: boolean;
  children: Child;
}) {
  return (
    <div class="stack gap-2xs">
      <div class="fs-xs fg-muted">
        <code>{label}</code>
        {description && <span> — {description}</span>}
      </div>
      <ExamplePanel resize={resize}>{children}</ExamplePanel>
    </div>
  );
}

export function ExampleGroup({ children }: { children: Child }) {
  return <div class="stack gap-m">{children}</div>;
}

export function DemoBox({ children, label }: { children?: Child; label?: string }) {
  return (
    <div class="fs-s t-medium p-s br-m demo-box">
      <span class="fg-default">{children || label || "Item"}</span>
    </div>
  );
}
