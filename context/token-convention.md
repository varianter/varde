# Color Token Conventions

Core idea: **every token has a _nature_, and the nature dictates its name, its steps, and its rules.** When a question comes up, return to the nature — the answer usually falls out.

---

## 1. The axis: Neutral ↔ Intent

Every color sits on an axis of semantic charge.

- **Neutral** — load-bearing structure. Means nothing on its own. Carries **hierarchy**.
- **Intent** — `danger`, `success`, `warning`. Means something. Carries **meaning**, not hierarchy (no "more success").

They're named for charge, not color, because they're opposite ends of one axis.

**Accent/Brand isn't a third category** — it's Neutral's skeleton with the palette swapped (§6).

---

## 2. The three slots

Both natures use the same slots: **background, ink, border**. Not every slot fills on every state (e.g. `placeholder` is ink-only), but the set is shared.

---

## 3. Ambient vs. marked (surfaces ≠ backgrounds)

A neutral background is **ambient** (always present). An intent background is **marked** (only when you're flagging something). This decides which slots get a `default`:

|                          | `default`? | Why                                               |
| ------------------------ | ---------- | ------------------------------------------------- |
| **Surface** (neutral bg) | Yes        | The ground is always there.                       |
| **Intent bg**            | No         | Intent is opt-in. No "default amount of success." |
| **Neutral ink**          | Yes        | Text always has a color.                          |
| **Intent ink**           | Yes        | There's always a canonical intent text color.     |

Consequences:

- **Intents never get a surface** (marked can't be ambient ground). They get backgrounds that **sit on top of a surface, never under one**.
- "Surface" = ambient ground; "background" = marked overlay. The word carries the layering rule.

```html
<div class="surface-base">
  <div class="bg-success-medium"><!-- overlay, sits ON the surface --></div>
</div>
```

---

## 4. Each slot speaks its own axis

Step names aren't a house style. Each slot has a physical axis that picks the words.

**Neutral:**

| Slot    | Axis            | Steps                                   |
| ------- | --------------- | --------------------------------------- |
| surface | depth           | `surface-{base / tinted / dyed}`        |
| ink     | prominence      | `ink-{subtle / default / prominent}`    |
| border  | edge visibility | `border-{subtle / default / prominent}` |

- `default` is the shared center for ink and border; `subtle` and `prominent` flank it.
- Surface keeps its own depth words — `base / tinted / dyed` — because depth names depth, not lightness, so they survive the dark-mode flip. `base` is the main canvas, `tinted` adds subtle distinction, `dyed` floats above.
- Border _width_ (`hairline / default / heavy`) is a separate token family — don't let it bleed into color.

**Intent — one scale across all three slots:**

```
bg-{intent}-{subtle / medium / strong}     ← no default
ink-{intent}-{subtle / medium / strong}
border-{intent}-{subtle / medium / strong}
```

Intents ramp on **salience** (how loud), and the block stays uniform — once inside an intent, don't reach for non-intent colors.

**The tell:** neutral ink and border share `subtle / default / prominent`; surfaces use `base / tinted / dyed`; intents use `subtle / medium / strong`. The vocabulary tells you which world you're in.

---

## 5. Two litmus tests

1. **`medium/strong` ⇒ Intent.** Neutrals never use that scale — neutral ink and border top out at `prominent`, surfaces at `dyed`.
2. **Contained region taking a charge ⇒ Intent. Single slot swapping hue by state ⇒ recolor** (§7).

---

## 6. Accent is a parameter, not a category

A token is a **(slot, step)** pair, and the **palette is a swappable parameter** on it. Neutral is just that parameter's default value; Accent is the same skeleton with the palette swapped. So accent inherits Neutral's words (`border-accent` = subtle/default/prominent) — you invent nothing for it.

---

## 7. `danger` the Intent vs. `red` the palette

Same red, two uses — keep them apart:

- **`danger` (Intent)** — a contained, uniform block. Ramps on salience.
- **`red` (palette)** — fed into a neutral structural slot as a **state**. Step held, hue swapped.

A form error is the **second**: the error border is structurally the same border, just red. Using `bg-danger-*` on a field is the bug.

---

## 8. Step → palette mapping

- Named steps map to numeric palette steps (e.g. `strong` border → `500`).
- Intents map to their own palette at the equivalent step.
- **Never reach into the raw palette** (`accent-600`) from a component — always go through shared tokens, or dark mode breaks.

_Open: if `prominent` = 500 but a resting input border wants 600, decide whether controls select by step **name** or pin **raw steps** locally._

---

## 9. The control layer

Shared across **checkbox, radio, input, select**. A control is **structure × state × layer**:

```
control-{slot}-{state}  →  {family(state)}-{named step}
```

- **family** ∈ neutral, accent, danger — the palette the state points to
- **step** = a named neutral step (never raw), so dark mode is inherited

**Family assignment — neutral → brand → danger, increasing weight:**

| States                            | Family                                    |
| --------------------------------- | ----------------------------------------- |
| `default`, `hover`, `placeholder` | Neutral (inert chrome)                    |
| `active`, `focused`, `selected`   | Accent (asserts identity)                 |
| `error`                           | Danger — recolors all three slots at once |

- `error` overrides everything because it recolors all three slots — using the red **palette** at the control's own steps, not the Intent block (§7).
- `placeholder` is ink-only; `selection` is a bg/ink pair (distinct from `selected`).

**Open knob:** does a state only swap _family_ (one knob), or also move the _step_ (`selected` = accent **and** louder)? This is the layer where purity gives way to "what looks right" — treat it as per-control tuning, but keep outputs as `{family}-{named step}` so they stay theme-safe.

---

## 10. Naming format

- **The prefix carries the namespace** (`surface-`, `ink-`, `border-`) — the suffix never disambiguates. You'd never write `ink-sunken`.
- The family name sits in the middle: `border-subtle` (neutral) vs. `border-danger-subtle` (intent).

---

## Quick reference

```
NEUTRAL (ambient · hierarchy · metaphor per slot)
  surface-{base | tinted | dyed}
  ink-{subtle | default | prominent}
  border-{subtle | default | prominent}

ACCENT (neutral skeleton, palette swapped — same words)
  ink-accent-…  border-accent-…  bg-accent-…

INTENT (marked · salience · one scale)
  bg-{intent}-{subtle | medium | strong}    ← no default
  ink-{intent}-{subtle | medium | strong}
  border-{intent}-{subtle | medium | strong}

CONTROL (shared · the tuning layer)
  control-{slot}-{state} → {family(state)}-{named step}
  resting→neutral · engaged→accent · error→danger
```
