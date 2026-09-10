export const path = "/";

export default function HomePage() {
  return (
    <article class="stack-v gap-2xl mx-auto py-3xl px-xl" style="max-width: 1200px;">
      <header>
        <div class="stack-v gap-l">
          <div class="stack-v gap-m">
            <h1 class="fs-4xl fw-bold lh-tight">Varde</h1>
            <p class="fs-xl ink-subtle" style="max-width: 640px;">
              A shared vocabulary for the UI fundamentals every product team rebuilds — spacing,
              layout, color, type, and a few components. One stylesheet, no build step.
            </p>
          </div>
        </div>
      </header>

      <section class="stack-v gap-xl b-t bc-subtle pt-3xl">
        <div class="stack-v gap-l" style="max-width: 720px;">
          <div class="stack-v gap-s">
            <h2 class="fs-l fw-bold">Why it exists</h2>
            <p class="ink-subtle">
              Spacing, layout, color, typography, buttons, form fields — every product team rebuilds
              these same fundamentals. When they share one vocabulary for them, the UI stays
              cohesive without anyone thinking twice.
            </p>
            <p class="ink-subtle">
              Varde is that vocabulary. Named scales for space, semantic color that lives on
              containers, and a small set of components — so the team always picks from the same
              menu.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
