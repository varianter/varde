// ── Types ──────────────────────────────────────────────

type Palette = "inherit" | "periwinkle" | "grey" | "coral";

interface StepValue {
  palette: Palette;
  default: number;
  inverted: number;
}

type TokenNode = StepValue | { [key: string]: TokenNode };

function buttonStepValues(palette: Palette) {
  return {
    light: {
      base: { palette: palette, default: 600, inverted: 300 },
      "on-base": { palette: palette, default: 50, inverted: 950 },
      subtle: { palette: palette, default: 100, inverted: 600 },
      "on-subtle": { palette: palette, default: 800, inverted: 100 },
      "on-surface": { palette: palette, default: 600, inverted: 200 },
    },
    dark: {
      base: { palette: palette, default: 250, inverted: 600 },
      "on-base": { palette: palette, default: 850, inverted: 50 },
      subtle: { palette: palette, default: 700, inverted: 350 },
      "on-subtle": { palette: palette, default: 50, inverted: 750 },
      "on-surface": { palette: palette, default: 200, inverted: 600 },
    },
  };
}

// ── Light mode tokens ─────────────────────────────────

const light = {
  surface: {
    raised: { palette: "inherit", default: 0, inverted: 950 },
    default: { palette: "inherit", default: 50, inverted: 900 },
    sunken: { palette: "inherit", default: 100, inverted: 800 },
  },
  foreground: {
    default: { palette: "inherit", default: 650, inverted: 150 },
    emphasis: { palette: "inherit", default: 750, inverted: 100 },
    muted: { palette: "inherit", default: 550, inverted: 250 },
    marker: { palette: "inherit", default: 600, inverted: 200 },
    link: {
      default: { palette: "periwinkle", default: 600, inverted: 600 },
      hover: { palette: "periwinkle", default: 700, inverted: 700 },
      decoration: { palette: "periwinkle", default: 450, inverted: 450 },
    },
    control: {
      default: { palette: "inherit", default: 800, inverted: 800 },
      hover: { palette: "inherit", default: 800, inverted: 800 },
      placeholder: { palette: "inherit", default: 400, inverted: 500 },
      active: { palette: "inherit", default: 900, inverted: 900 },
      selected: { palette: "inherit", default: 600, inverted: 400 },
      selection: { palette: "periwinkle", default: 700, inverted: 700 },
      error: { palette: "coral", default: 650, inverted: 150 },
    },
  },
  background: {
    control: {
      default: { palette: "inherit", default: 50, inverted: 750 },
      hover: { palette: "inherit", default: 50, inverted: 700 },
      active: { palette: "periwinkle", default: 100, inverted: 700 },
      selection: { palette: "periwinkle", default: 250, inverted: 250 },
      error: { palette: "coral", default: 100, inverted: 100 },
    },
  },
  border: {
    default: { palette: "inherit", default: 250, inverted: 700 },
    faint: { palette: "inherit", default: 150, inverted: 750 },
    prominent: { palette: "inherit", default: 350, inverted: 550 },
    control: {
      default: { palette: "inherit", default: 300, inverted: 500 },
      focused: { palette: "periwinkle", default: 400, inverted: 400 },
      hover: { palette: "inherit", default: 400, inverted: 500 },
      active: { palette: "periwinkle", default: 700, inverted: 600 },
      selected: { palette: "periwinkle", default: 600, inverted: 600 },
      error: { palette: "coral", default: 400, inverted: 450 },
    },
  },
  shadow: { palette: "inherit", default: 400, inverted: 400 },
  backdrop: { palette: "inherit", default: 300, inverted: 300 },
  button: {
    primary: buttonStepValues("periwinkle").light,
    secondary: buttonStepValues("grey").light,
    danger: buttonStepValues("coral").light,
    inherit: buttonStepValues("inherit").light,
  },
} as const satisfies { [key: string]: TokenNode };

// ── Dark mode tokens ──────────────────────────────────

const dark = {
  surface: {
    raised: { palette: "inherit", default: 800, inverted: 0 },
    default: { palette: "inherit", default: 850, inverted: 50 },
    sunken: { palette: "inherit", default: 900, inverted: 150 },
  },
  foreground: {
    default: { palette: "inherit", default: 150, inverted: 650 },
    emphasis: { palette: "inherit", default: 100, inverted: 750 },
    muted: { palette: "inherit", default: 250, inverted: 550 },
    marker: { palette: "inherit", default: 200, inverted: 600 },
    link: {
      default: { palette: "periwinkle", default: 350, inverted: 350 },
      hover: { palette: "periwinkle", default: 300, inverted: 300 },
      decoration: { palette: "periwinkle", default: 450, inverted: 450 },
    },
    control: {
      default: { palette: "inherit", default: 800, inverted: 800 },
      hover: { palette: "inherit", default: 800, inverted: 800 },
      placeholder: { palette: "inherit", default: 500, inverted: 400 },
      active: { palette: "inherit", default: 900, inverted: 900 },
      selected: { palette: "inherit", default: 400, inverted: 600 },
      selection: { palette: "periwinkle", default: 150, inverted: 150 },
      error: { palette: "coral", default: 150, inverted: 650 },
    },
  },
  background: {
    control: {
      default: { palette: "inherit", default: 750, inverted: 150 },
      hover: { palette: "inherit", default: 700, inverted: 200 },
      active: { palette: "periwinkle", default: 700, inverted: 150 },
      selection: { palette: "periwinkle", default: 500, inverted: 500 },
      error: { palette: "coral", default: 100, inverted: 100 },
    },
  },
  border: {
    default: { palette: "inherit", default: 700, inverted: 250 },
    faint: { palette: "inherit", default: 750, inverted: 200 },
    prominent: { palette: "inherit", default: 550, inverted: 400 },
    control: {
      default: { palette: "inherit", default: 550, inverted: 400 },
      focused: { palette: "periwinkle", default: 400, inverted: 400 },
      hover: { palette: "inherit", default: 550, inverted: 450 },
      active: { palette: "periwinkle", default: 600, inverted: 700 },
      selected: { palette: "periwinkle", default: 600, inverted: 600 },
      error: { palette: "coral", default: 450, inverted: 400 },
    },
  },
  // Note: Shadows are not used in dark mode, this is only to please the system.
  // See shadow.css
  shadow: { palette: "inherit", default: 300, inverted: 300 },
  backdrop: { palette: "inherit", default: 900, inverted: 900 },
  button: {
    primary: buttonStepValues("periwinkle").dark,
    secondary: buttonStepValues("grey").dark,
    danger: buttonStepValues("coral").dark,
    inherit: buttonStepValues("inherit").dark,
  },
} as const satisfies { [key: string]: TokenNode };

// ── Helpers ────────────────────────────────────────────

function isStepValue(node: TokenNode): node is StepValue {
  return (
    typeof node === "object" &&
    node !== null &&
    "palette" in node &&
    "default" in node &&
    "inverted" in node
  );
}

function cssVarName(keyPath: string[]): string {
  return `--${keyPath.join("-")}`;
}

function cssValue(sv: StepValue, mode: "default" | "inverted"): string {
  const step = sv[mode];
  return `var(--palette-${sv.palette}-${step})`;
}

// ── CSS generator ──────────────────────────────────────

/**
 * Walks the token tree and returns CSS custom property declarations.
 * Returns plain declarations (no selector wrapping, no @media).
 */
export function generateBlock(
  tokens: { [key: string]: TokenNode },
  mode: "default" | "inverted",
): string {
  const lines: string[] = [];

  function walk(node: TokenNode, path: string[]) {
    if (isStepValue(node)) {
      const name = cssVarName(path);
      const value = cssValue(node, mode);
      lines.push(`${name}: ${value};`);
    } else {
      for (const [key, child] of Object.entries(node)) {
        walk(child as TokenNode, [...path, key]);
      }
    }
  }

  walk(tokens, []);
  return lines.join("\n");
}

// ── Validation ─────────────────────────────────────────

/** Checks that `palette` values are consistent between light and dark for the same key path. */
export function validatePaletteConsistency(): string[] {
  const errors: string[] = [];

  function walk(a: TokenNode, b: TokenNode, path: string[]) {
    if (isStepValue(a) && isStepValue(b)) {
      if (a.palette !== b.palette) {
        errors.push(
          `palette mismatch at ${path.join(".")}: light="${a.palette}" dark="${b.palette}"`,
        );
      }
    } else if (!isStepValue(a) && !isStepValue(b)) {
      const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
      for (const key of keys) {
        if (!(key in a)) {
          errors.push(`key "${path.concat(key).join(".")}" exists in dark but not light`);
        } else if (!(key in b)) {
          errors.push(`key "${path.concat(key).join(".")}" exists in light but not dark`);
        } else {
          walk(a[key] as TokenNode, b[key] as TokenNode, [...path, key]);
        }
      }
    } else {
      errors.push(`type mismatch at ${path.join(".")}: one is StepValue, the other is not`);
    }
  }

  walk(light, dark, []);
  return errors;
}

// ── Exports ────────────────────────────────────────────

export { light, dark };
export type { Palette, StepValue, TokenNode };
