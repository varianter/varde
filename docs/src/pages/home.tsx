export const path = "/";

export default function HomePage() {
  return (
    <article class="stack-v gap-2xl mx-auto py-3xl px-xl" style="max-width: 1200px;">
      <header>
        <div class="stack-v gap-l">
          <div class="stack-v gap-m">
            <h1 class="fs-4xl fw-bold lh-tight">Varde</h1>
            <p class="fs-xl ink-subtle" style="max-width: 640px;">
              A utility-first CSS framework and design token system. Semantic classes for layout,
              spacing, color, typography, and components — no build step.
            </p>
          </div>
        </div>
      </header>

      <section class="stack-v gap-xl b-t bc-subtle pt-3xl">
        <div class="stack-v gap-l" style="max-width: 720px;">
          <div class="stack-v gap-s">
            <h2 class="fs-l fw-bold">Why it exists</h2>
            <p class="ink-subtle">
              Spacing, layout, color, typography, buttons, form fields — every product team handles
              these same fundamentals. When we all share a common vocabulary for them, the UI stays
              cohesive without anyone needing to think twice.
            </p>
            <p class="ink-subtle">
              Varde is that shared language. A friendly set of building blocks — named scales,
              semantic color, and a handful of components — so the team always picks from the same
              menu and things just feel consistent.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
