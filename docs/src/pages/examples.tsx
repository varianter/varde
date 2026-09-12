import { DocsPage } from "../components/docs";
import { knowledgeDocs } from "../knowledge";
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
};

const pageExamples: ExampleLink[] = [
  { title: colorsTitle, description: colorsDescription, path: colorsPath },
  { title: staggerRevealTitle, description: staggerRevealDescription, path: staggerRevealPath },
  { title: colorModesTitle, description: colorModesDescription, path: colorModesPath },
];

const examples: ExampleLink[] = [
  ...knowledgeDocs
    .filter((doc) => doc.category === "examples")
    .map((doc) => ({
      title: doc.title,
      description: doc.description,
      path: `/${doc.category}/${doc.slug}`,
    })),
  ...pageExamples,
].sort((a, b) => a.title.localeCompare(b.title));

export default function ExamplesPage() {
  return (
    <DocsPage
      title="Examples"
      description="Realistic compositions built from Varde utilities and components — from pricing tables to court booking. Open one to see the markup behind it."
    >
      <div
        class="d-grid gap-s"
        style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); grid-auto-rows: max-content;"
      >
        {examples.map((example) => (
          <a
            class="surface-tinted br-m p-m stack-v gap-3xs bg-wash:hover"
            href={`/docs${example.path}`}
            key={example.path}
          >
            <span class="fw-bold lh-tight">{example.title}</span>
            <span class="ink-subtle fs-s lh-tight">{example.description}</span>
          </a>
        ))}
      </div>
    </DocsPage>
  );
}
