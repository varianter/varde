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
    <article class="content-grid gap-row-2xl pb-3xl">
      <header class="content-grid-pass surface-tinted pt-2xl pb-2xl" data-bleed="full">
        <div class="v-typeset">
          <h2 class="fs-3xl fw-bold">{title}</h2>
          <p class="fs-l ink-subtle">{description}</p>
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
    <section data-component="Section" class="stack-v gap-m py-xl">
      <div>
        <h3 class="fs-xl fw-bold">{title}</h3>
        {description && <p class="ink-subtle fs-s">{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

export function ExamplePanel({ children, resize = false }: { children: Child; resize?: boolean }) {
  return (
    <color-mode
      palette="inherit"
      data-component="ExamplePanel"
      class="stack-v gap-s surface-tinted p-l br-m of-scroll"
      style={resize ? "resize: horizontal;" : undefined}
    >
      {children}
    </color-mode>
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
    <div data-component="Example" class="stack-v gap-2xs">
      <div class="fs-xs ink-subtle">
        <code>{label}</code>
        {description && <span> — {description}</span>}
      </div>
      <ExamplePanel resize={resize}>{children}</ExamplePanel>
    </div>
  );
}

export function DemoBox({ children, label }: { children?: Child; label?: string }) {
  return (
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
      <span class="ink-default fw-bold">{children || label || "Item"}</span>
    </div>
  );
}
