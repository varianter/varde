import { getKnowledgeDocs, slugToTitle } from "./knowledge";
import {
  description as colorModesDescription,
  path as colorModesPath,
  title as colorModesTitle,
} from "./pages/color-modes";
import {
  description as colorsDescription,
  path as colorsPath,
  title as colorsTitle,
} from "./pages/colors";
import {
  description as staggerRevealDescription,
  path as staggerRevealPath,
  title as staggerRevealTitle,
} from "./pages/stagger-reveal";

export type NavItem = {
  label: string;
  path: string;
  description?: string;
};

export type NavSection = {
  label: string;
  category?: string;
  items: NavItem[];
};

const categoryOrder = ["tutorial", "how-to", "explanation", "reference", "examples"];

const categoryLabels: Record<string, string> = {
  tutorial: "Tutorial",
  "how-to": "Guides",
  explanation: "Explanation",
  reference: "Reference",
  examples: "Examples",
};

// Interactive sandboxes, kept apart from the composed examples.
const workbenches: NavItem[] = [
  { label: colorsTitle, path: colorsPath, description: colorsDescription },
  { label: colorModesTitle, path: colorModesPath, description: colorModesDescription },
  { label: staggerRevealTitle, path: staggerRevealPath, description: staggerRevealDescription },
];

export function buildSections(): NavSection[] {
  const docs = getKnowledgeDocs();

  const knowledgeSections = [...new Set(docs.map((doc) => doc.category))]
    .sort((a, b) => {
      const rank = (category: string) => {
        const i = categoryOrder.indexOf(category);
        return i === -1 ? categoryOrder.length : i;
      };
      return rank(a) - rank(b) || a.localeCompare(b);
    })
    .map((category) => ({
      label: categoryLabels[category] ?? slugToTitle(category),
      category,
      items: docs
        .filter((doc) => doc.category === category)
        .map((doc) => ({
          label: doc.title,
          path: `/${doc.category}/${doc.slug}`,
          description: doc.description,
        })),
    }));

  return [...knowledgeSections, { label: "Workbench", items: workbenches }];
}
