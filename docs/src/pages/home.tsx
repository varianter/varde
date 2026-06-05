export const path = "/";

const sections = [
  {
    title: "Utilities",
    description: "Low-level CSS utility classes for layout, spacing, colors, and typography.",
    links: [
      {
        href: "/varde/utilities/layout",
        title: "Layout",
        description: "Stacks, flex, and alignment utilities",
      },
      {
        href: "/varde/utilities/spacing",
        title: "Spacing",
        description: "Padding, margin, and gap classes",
      },
      {
        href: "/varde/utilities/colors",
        title: "Colors",
        description: "Semantic background, text, and border colors",
      },
      {
        href: "/varde/utilities/typography",
        title: "Typography",
        description: "Font size, weight, and text alignment",
      },
    ],
  },
  {
    title: "Components",
    description: "Styled classes for common UI elements like buttons, inputs, and tables.",
    links: [
      {
        href: "/varde/components/buttons",
        title: "Buttons",
        description: "Button styles, colors, variants, and sizes",
      },
      {
        href: "/varde/components/form-controls",
        title: "Form Controls",
        description: "Inputs, selects, textareas, checkboxes, and radios",
      },
      {
        href: "/varde/components/tables",
        title: "Tables",
        description: "Table styling and density options",
      },
    ],
  },
  {
    title: "Tokens",
    description: "The design token foundation that powers the entire system.",
    links: [
      {
        href: "/varde/tokens/palette",
        title: "Palette",
        description: "Raw color scales and swatches",
      },
    ],
  },
  {
    title: "Patterns",
    description: "Real-world examples and compositions showing the system in action.",
    links: [
      {
        href: "/varde/patterns/examples",
        title: "Examples",
        description: "Cards, layouts, and composed UI patterns",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <article class="stack gap-4xl mx-auto py-4xl px-xl" style="max-width: 1200px;">
      <header class="pt-4xl pb-xl">
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
            <h2 class="fs-l t-bold">The problem it solves</h2>
            <p class="fg-muted">
              Every product team solves the same small set of problems repeatedly: spacing, layout,
              color, typography, buttons, form fields. Without shared constraints, every developer
              makes slightly different calls and the UI slowly drifts.
            </p>
            <p class="fg-muted">
              Varde is that contract. A finite vocabulary — named scales, semantic color, a handful
              of components — so everyone chooses from the same menu.
            </p>
          </div>

          <ul class="stack gap-s" style="list-style: none; padding: 0; margin: 0;">
            <li class="stack gap-3xs bg-surface-raised br-m p-l">
              <span class="t-bold">Semantic color, not hex values.</span>
              <span class="fg-muted">
                Declare intent (<code>bg-danger-subtle</code>, <code>fg-muted</code>), not
                appearance. Dark mode or a rebrand is a variable swap at the token layer, not a
                hunt-and-replace. The class a designer specifies is the class a developer writes —
                no translation layer.
              </span>
            </li>
            <li class="stack gap-3xs bg-surface-raised br-m p-l">
              <span class="t-bold">A defined spacing scale.</span>
              <span class="fg-muted">
                No <code>margin: 13px</code>. There's <code>gap-xs</code>, <code>gap-m</code>,{" "}
                <code>gap-xl</code>. Spacing decisions are predictable and auditable across the
                whole team.
              </span>
            </li>
            <li class="stack gap-3xs bg-surface-raised br-m p-l">
              <span class="t-bold">Composable components.</span>
              <span class="fg-muted">
                Buttons, inputs, tables — configured via <code>data-*</code> attributes. Styles use{" "}
                <code>:where()</code> (zero specificity), so utilities always win without fighting
                the cascade.
              </span>
            </li>
            <li class="stack gap-3xs bg-surface-raised br-m p-l">
              <span class="t-bold">Just CSS. No framework required.</span>
              <span class="fg-muted">
                One stylesheet. No build step, no config, no JS runtime. Works identically in React,
                Svelte, Vue, Astro, or server-rendered HTML. Migrate frameworks — the styling layer
                survives unchanged.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div class="stack gap-3xl">
        {sections.map((section) => (
          <section class="stack gap-m">
            <div class="stack gap-2xs">
              <h2 class="fs-l t-bold">{section.title}</h2>
              <p class="fg-muted">{section.description}</p>
            </div>
            <div class="stack-horizontal items-stretch gap-m">
              {section.links.map((link) => (
                <a
                  href={link.href}
                  class="stack gap-xs bg-surface-raised p-l br-l grow"
                  style="text-decoration: none; min-width: 200px; flex-basis: 0;"
                >
                  <span class="fs-l t-bold fg-brand-medium">{link.title}</span>
                  <span class="fs-s fg-muted">{link.description}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
