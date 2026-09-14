import { DocsPage } from "../components/docs";
import { knowledgeDocs } from "../knowledge";
import { withTrailingSlash } from "../url";
import {
  description as colorModesDescription,
  path as colorModesPath,
  title as colorModesTitle,
} from "./color-modes";
import {
  description as colorsDescription,
  path as colorsPath,
  title as colorsTitle,
} from "./colors";
import {
  description as staggerRevealDescription,
  path as staggerRevealPath,
  title as staggerRevealTitle,
} from "./stagger-reveal";

export const path = "/examples";

type ExampleLink = {
  title: string;
  description: string;
  path: string;
  order?: number;
  group: string;
};

const pageExamples: ExampleLink[] = [
  {
    title: colorsTitle,
    description: colorsDescription,
    path: colorsPath,
    group: "Foundations",
  },
  {
    title: colorModesTitle,
    description: colorModesDescription,
    path: colorModesPath,
    group: "Foundations",
  },
  {
    title: staggerRevealTitle,
    description: staggerRevealDescription,
    path: staggerRevealPath,
    group: "Motion",
  },
];

const UNGROUPED = "More";

// Groups appear in this order; any group not listed here is sorted alphabetically after it.
const groupOrder = [
  "Foundations",
  "Motion",
  "Data display",
  "Navigation",
  "Forms & inputs",
  "Overlays",
  "Feedback & status",
  "Scheduling & booking",
  "Commerce",
];

const examples: ExampleLink[] = [
  ...knowledgeDocs
    .filter((doc) => doc.category === "examples")
    .map((doc) => ({
      title: doc.title,
      description: doc.description,
      path: `/${doc.category}/${doc.slug}`,
      order: doc.order,
      group: doc.group ?? UNGROUPED,
    })),
  ...pageExamples,
].sort((a, b) => {
  if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
  if (a.order !== undefined) return -1;
  if (b.order !== undefined) return 1;
  return a.title.localeCompare(b.title);
});

const groups: { label: string; items: ExampleLink[] }[] = [...new Set(examples.map((e) => e.group))]
  .sort((a, b) => {
    const ia = groupOrder.indexOf(a);
    const ib = groupOrder.indexOf(b);
    const rank = (i: number) => (i === -1 ? groupOrder.length : i);
    return rank(ia) - rank(ib) || a.localeCompare(b);
  })
  .map((group) => ({
    label: group,
    items: examples.filter((e) => e.group === group),
  }));

export default function ExamplesPage() {
  return (
    <DocsPage
      title="Examples"
      description="Realistic compositions built from Varde utilities and components — from pricing tables to court booking. Open one to see the markup behind it."
    >
      <div class="stack-v gap-l">
        {groups.map((group) => (
          <div key={group.label}>
            <h2 class="fs-l fw-bold mb-s">{group.label}</h2>
            <div class="stack-v gap-s">
              {group.items.map((example) => (
                <a
                  class="surface-tinted br-m p-m stack-v gap-3xs bg-wash:hover"
                  href={withTrailingSlash(`/docs${example.path}`)}
                  key={example.path}
                >
                  <span class="fw-bold lh-tight">{example.title}</span>
                  <span class="ink-subtle fs-s lh-snug">{example.description}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocsPage>
  );
}
