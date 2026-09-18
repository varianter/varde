import { DocsPage } from "../components/docs";
import { type Group, groups, knowledgeDocs } from "../knowledge";
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
  tags: string[];
};

const pageExamples: ExampleLink[] = [
  {
    title: colorsTitle,
    description: colorsDescription,
    path: colorsPath,
    group: "foundations",
    tags: [],
  },
  {
    title: colorModesTitle,
    description: colorModesDescription,
    path: colorModesPath,
    group: "foundations",
    tags: [],
  },
  {
    title: staggerRevealTitle,
    description: staggerRevealDescription,
    path: staggerRevealPath,
    group: "motion",
    tags: [],
  },
];

const UNGROUPED = "More";

const groupRank = (group: string) =>
  group in groups ? groups[group as Group].order : Number.MAX_SAFE_INTEGER;

const groupLabel = (group: string) => (group in groups ? groups[group as Group].label : group);

const examples: ExampleLink[] = [
  ...knowledgeDocs
    .filter((doc) => doc.category === "examples")
    .map((doc) => ({
      title: doc.title,
      description: doc.description,
      path: `/${doc.category}/${doc.slug}`,
      order: doc.order,
      group: doc.group ?? UNGROUPED,
      tags: doc.tags,
    })),
  ...pageExamples,
].sort((a, b) => {
  if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
  if (a.order !== undefined) return -1;
  if (b.order !== undefined) return 1;
  return a.title.localeCompare(b.title);
});

const groupsList: { label: string; items: ExampleLink[] }[] = [
  ...new Set(examples.map((e) => e.group)),
]
  .sort((a, b) => groupRank(a) - groupRank(b) || a.localeCompare(b))
  .map((group) => ({
    label: groupLabel(group),
    items: examples.filter((e) => e.group === group),
  }));

export default function ExamplesPage() {
  return (
    <DocsPage
      title="Examples"
      description="Realistic compositions built from Varde utilities and components — from pricing tables to court booking. Open one to see the markup behind it."
    >
      <div class="stack-v gap-l" data-transition="content">
        {groupsList.map((group) => (
          <div key={group.label}>
            <h2 class="fs-l fw-bold mb-s">{group.label}</h2>
            <div class="stack-v gap-s">
              {group.items.map((example) => (
                <a
                  class="surface-tinted br-m p-m stack-h gap-3xs bg-wash:hover"
                  href={withTrailingSlash(`/docs${example.path}`)}
                  key={example.path}
                >
                  <div class="stack-v gap-2xs">
                    <span class="fw-bold lh-tight">{example.title}</span>
                    <span class="ink-subtle fs-s lh-snug">{example.description}</span>
                  </div>
                  {example.tags.length > 0 && (
                    <span class="pt-xs stack-h ml-auto gap-2xs fs-xs ink-subtle">
                      {example.tags.map((tag) => (
                        <span
                          class="br-pill bg-wash px-2xs py-3xs surface-dyed"
                          style="text-transform: capitalize;"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocsPage>
  );
}
