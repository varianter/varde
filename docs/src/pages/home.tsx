export const path = "/";

export default function HomePage() {
  return (
    <article class="stack gap-4xl mx-auto py-4xl px-xl" style="max-width: 1200px;">
      <header>
        <div class="stack gap-l">
          <div class="stack gap-m">
            <h1 class="fs-4xl t-bold lh-tight">Varde</h1>
            <p class="fs-xl fg-muted" style="max-width: 640px;">
              A utility-first CSS framework and design token system. Semantic classes for layout,
              spacing, color, typography, and components — no build step.
            </p>
          </div>
        </div>
      </header>

      <section class="stack gap-xl b-t b-faint pt-4xl">
        <div class="stack gap-l" style="max-width: 720px;">
          <div class="stack gap-s">
            <h2 class="fs-l t-bold">Why it exists</h2>
            <p class="fg-muted">
              Spacing, layout, color, typography, buttons, form fields — every product team handles
              these same fundamentals. When we all share a common vocabulary for them, the UI stays
              cohesive without anyone needing to think twice.
            </p>
            <p class="fg-muted">
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
