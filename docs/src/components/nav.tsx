import { path as examplesPath } from "../pages/examples";
import { buildSections } from "../sections";
import { withTrailingSlash } from "../url";

const base = "/docs";

export function NavLinks({ currentPath }: { currentPath: string }) {
  const sections = buildSections();

  return (
    <div class="py-m stack-v gap-m">
      {sections.map((section) => (
        <div key={section.label}>
          <h5 class="fs-xs ink-subtle fw-bold mb-2xs tt-uppercase">{section.label}</h5>
          <ul class="stack-v">
            {(section.category === "examples"
              ? [{ label: "All examples", path: examplesPath }]
              : section.items
            ).map((item) => {
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
