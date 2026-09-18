import { getKnowledgeDocs, slugToTitle } from "../knowledge";
import { path as examplesPath } from "../pages/examples";
import { withTrailingSlash } from "../url";

const base = "/docs";

type NavSection = {
  label: string;
  items: { label: string; path: string }[];
};

const categoryOrder = ["tutorial", "how-to", "explanation", "reference", "examples"];

function buildSections(): NavSection[] {
  const knowledgeDocs = getKnowledgeDocs();

  return [...new Set(knowledgeDocs.map((doc) => doc.category))]
    .sort((a, b) => {
      const ia = categoryOrder.indexOf(a);
      const ib = categoryOrder.indexOf(b);
      const rank = (i: number) => (i === -1 ? categoryOrder.length : i);
      return rank(ia) - rank(ib) || a.localeCompare(b);
    })
    .map((category) => ({
      label: slugToTitle(category),
      items:
        category === "examples"
          ? [{ label: "All examples", path: examplesPath }]
          : knowledgeDocs
              .filter((doc) => doc.category === category)
              .map((doc) => ({ label: doc.title, path: `/${doc.category}/${doc.slug}` })),
    }));
}

export function NavLinks({ currentPath }: { currentPath: string }) {
  const sections = buildSections();

  return (
    <div class="py-m stack-v gap-m">
      {sections.map((section) => (
        <div key={section.label}>
          <h5 class="fs-xs ink-subtle fw-bold mb-2xs tt-uppercase">{section.label}</h5>
          <ul class="stack-v">
            {section.items.map((item) => {
              const href = withTrailingSlash(`${base}${item.path}`);
              const isCurrent = href === withTrailingSlash(currentPath);
              return (
                <a
                  aria-current={isCurrent ? "page" : undefined}
                  class="ink-default pl-xs -ml-xs br-m bg-wash:hover lh-tight py-2xs"
                  href={href}
                  key={item.label}
                >
                  {item.label}
                </a>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
