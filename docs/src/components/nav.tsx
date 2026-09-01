import { knowledgeDocs } from "../knowledge";
import { path as colorModesPath } from "../pages/color-modes";
import { path as colorsPath } from "../pages/colors";
import { path as colorModesExamplesPath } from "../pages/examples";
import { path as layoutPath } from "../pages/layout";
import { path as popoverPath } from "../pages/popover";
import { path as spacingPath } from "../pages/spacing";
import { path as staggerRevealPath } from "../pages/stagger-reveal";
import { path as tablesPath } from "../pages/tables";
import { path as typesetPath } from "../pages/typeset";
import { path as typographyPath } from "../pages/typography";

const base = "/docs";

type NavSection = {
  label: string;
  items: { label: string; path: string }[];
};

const knowledgeItems = knowledgeDocs.map((doc) => ({
  label: doc.title,
  path: `/reference/${doc.slug}`,
}));

const sections: NavSection[] = [
  {
    label: "Utilities",
    items: [
      { label: "Spacing", path: spacingPath },
      { label: "Stagger Reveal", path: staggerRevealPath },
      { label: "Colors", path: colorsPath },
      { label: "Layout", path: layoutPath },
      { label: "Typography", path: typographyPath },
      { label: "Typeset", path: typesetPath },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Popover", path: popoverPath },
      { label: "Tables", path: tablesPath },
    ],
  },
  {
    label: "Color Modes",
    items: [
      { label: "Demo", path: colorModesPath },
      { label: "Examples", path: colorModesExamplesPath },
    ],
  },
  {
    label: "Reference",
    items: knowledgeItems,
  },
];

export function NavLinks() {
  return (
    <div class="py-m stack gap-m">
      {sections.map((section) => (
        <div key={section.label}>
          <h5 class="fs-xs fg-muted t-bold mb-2xs">{section.label}</h5>
          <ul class="stack gap-3xs">
            {section.items.map((item) => (
              <a
                class="fg-default fg:hover pl-xs ml--xs br-m bg-wash:hover "
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
