import { path as buttonsPath } from "../pages/buttons";
import { path as colorModesPath } from "../pages/color-modes";
import { path as colorsPath } from "../pages/colors";
import { path as formControlsPath } from "../pages/form-controls";
import { path as layoutPath } from "../pages/layout";
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
      { label: "Tables", path: tablesPath },
    ],
  },
  {
    label: "Tokens",
    items: [
      { label: "Palette", path: "/tokens/palette" },
      { label: "Color Modes", path: colorModesPath },
    ],
  },
];

export function NavLinks() {
  return (
    <div class="py-m stack gap-xl">
      {sections.map((section) => (
        <div class={`stack gap-xs`} key={section.label}>
          <span class="fs-xs fg-muted t-bold">{section.label}</span>
          {section.items.map((item) => (
            <a class="fg-default" href={`${base}${item.path}/`} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
