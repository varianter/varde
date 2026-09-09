import { knowledgeDocs, slugToTitle } from "../knowledge";
import { path as colorModesPath } from "../pages/color-modes";
import { path as colorsPath } from "../pages/colors";
import { path as staggerRevealPath } from "../pages/stagger-reveal";

const base = "/docs";

type NavSection = {
  label: string;
  items: { label: string; path: string }[];
};

const categoryOrder = ["getting-started", "how-to", "foundations", "reference", "examples"];

const knowledgeSections: NavSection[] = [...new Set(knowledgeDocs.map((doc) => doc.category))]
  .filter((category) => category !== "utilities")
  .sort((a, b) => {
    const ia = categoryOrder.indexOf(a);
    const ib = categoryOrder.indexOf(b);
    const rank = (i: number) => (i === -1 ? categoryOrder.length : i);
    return rank(ia) - rank(ib) || a.localeCompare(b);
  })
  .map((category) => ({
    label: slugToTitle(category),
    items: knowledgeDocs
      .filter((doc) => doc.category === category)
      .map((doc) => ({ label: doc.title, path: `/${doc.category}/${doc.slug}` })),
  }));

const utilityDocs = knowledgeDocs.filter((doc) => doc.category === "utilities");

const sections: NavSection[] = [
  {
    label: "Utilities",
    items: [
      { label: "Colors", path: colorsPath },
      ...utilityDocs.map((doc) => ({ label: doc.title, path: `/${doc.category}/${doc.slug}` })),
      { label: "Stagger items", path: staggerRevealPath },
    ],
  },
  {
    label: "Color Modes",
    items: [{ label: "Demo", path: colorModesPath }],
  },
  ...knowledgeSections,
];

export function NavLinks() {
  return (
    <div class="py-m stack-v gap-m">
      {sections.map((section) => (
        <div key={section.label}>
          <h5 class="fs-xs ink-subtle fw-medium mb-2xs tt-uppercase">{section.label}</h5>
          <ul class="stack-v gap-4xs">
            {section.items.map((item) => (
              <a
                class="ink-default pl-xs -ml-xs br-m bg-wash:hover lh-tight py-3xs"
                href={`${base}${item.path}`}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
