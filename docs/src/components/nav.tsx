import { path as buttonsPath } from "../pages/buttons";
import { path as colorModesPath } from "../pages/color-modes";
import { path as colorsPath } from "../pages/colors";
import { path as formControlsPath } from "../pages/form-controls";
import { path as layoutPath } from "../pages/layout";
import { path as popoverPath } from "../pages/popover";
import { path as spacingPath } from "../pages/spacing";
import { path as tablesPath } from "../pages/tables";
import { path as typesetPath } from "../pages/typeset";
import { path as typographyPath } from "../pages/typography";

const base = "/docs";

type NavSection = {
  label: string;
  items: { label: string; path: string }[];
};

const sections: NavSection[] = [
  {
    label: "Utilities",
    items: [
      { label: "Spacing", path: spacingPath },
      { label: "Colors", path: colorsPath },
      { label: "Layout", path: layoutPath },
      { label: "Typography", path: typographyPath },
      { label: "Typeset", path: typesetPath },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Buttons", path: buttonsPath },
      { label: "Form Controls", path: formControlsPath },
      { label: "Popover", path: popoverPath },
      { label: "Tables", path: tablesPath },
    ],
  },
  {
    label: "Tokens",
    items: [{ label: "Color Modes", path: colorModesPath }],
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
              <a class="fg-default" href={`${base}${item.path}`} key={item.label}>
                {item.label}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
