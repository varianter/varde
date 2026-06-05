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

Both natures use the same slots: **background, foreground, border**. Not every slot fills on every state (e.g. `placeholder` is foreground-only), but the set is shared.

---

## 3. Ambient vs. marked (surfaces ≠ backgrounds)

A neutral background is **ambient** (always present). An intent background is **marked** (only when you're flagging something). This decides which slots get a `default`:

|                          | `default`? | Why                                               |
| ------------------------ | ---------- | ------------------------------------------------- |
| **Surface** (neutral bg) | Yes        | The ground is always there.                       |
| **Intent bg**            | No         | Intent is opt-in. No "default amount of success." |
| **Neutral fg**           | Yes        | Text always has a color.                          |
| **Intent fg**            | Yes        | There's always a canonical intent text color.     |

Consequences:

- **Intents never get a surface** (marked can't be ambient ground). They get backgrounds that **sit on top of a surface, never under one**.
- "Surface" = ambient ground; "background" = marked overlay. The word carries the layering rule.

```html
<div class="surface-default">
  <div class="bg-success-medium"><!-- overlay, sits ON the surface --></div>
</div>
```

---

## 4. Each slot speaks its own axis

Step names aren't a house style. Each slot has a physical axis that picks the words — which is why the neutral slots deliberately don't rhyme.

**Neutral — a different metaphor per slot:**

| Slot       | Axis            | Steps                                  |
| ---------- | --------------- | -------------------------------------- |
| surface    | depth           | `surface-{sunken / default / raised}`  |
| foreground | ink             | `fg-{muted / default / emphasis}`      |
| border     | edge visibility | `border-{faint / default / prominent}` |

- `default` is the shared center.
- Border's words are its own — not `subtle/strong` (that's Intent) and not `muted/emphasis` (that's text). Alt for `prominent`: `defined`.
- Don't invent vivid border words just for symmetry. A slot is allowed to be plain.
- Border _width_ (`hairline / default / heavy`) is a separate token family — don't let it bleed into color.
- Depth words name depth, not lightness, so they survive the dark-mode flip.

**Intent — one scale across all three slots:**

```
bg-{intent}-{subtle / medium / strong}     ← no default
fg-{intent}-{subtle / medium / strong}
border-{intent}-{subtle / medium / strong}
```

Intents ramp on **salience** (how loud), and the block stays uniform — once inside an intent, don't reach for non-intent colors.

**Why they don't rhyme:** metaphor-per-slot = you're in Neutral; one intensity scale = you're in an Intent. The vocabulary tells you which world you're in.

---

## 5. Two litmus tests

1. **`subtle/medium/strong` ⇒ Intent.** Neutrals never use that scale.
2. **Contained region taking a charge ⇒ Intent. Single slot swapping hue by state ⇒ recolor** (§7).

---

## 6. Accent is a parameter, not a category

A token is a **(slot, step)** pair, and the **palette is a swappable parameter** on it. Neutral is just that parameter's default value; Accent is the same skeleton with the palette swapped. So accent inherits Neutral's words (`border-accent` = faint/default/prominent) — you invent nothing for it.

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
- `placeholder` is foreground-only; `selection` is a bg/fg pair (distinct from `selected`).

**Open knob:** does a state only swap _family_ (one knob), or also move the _step_ (`selected` = accent **and** louder)? This is the layer where purity gives way to "what looks right" — treat it as per-control tuning, but keep outputs as `{family}-{named step}` so they stay theme-safe.

---

## 10. Naming format

- **The prefix carries the namespace** (`surface-`, `fg-`, `border-`) — the suffix never disambiguates. You'd never write `fg-sunken`.
- The family name sits in the middle: `border-subtle` (neutral) vs. `border-danger-subtle` (intent).

---

## Quick reference

```
NEUTRAL (ambient · hierarchy · metaphor per slot)
  surface-{sunken | default | raised}
  fg-{muted | default | emphasis}
  border-{faint | default | prominent}

ACCENT (neutral skeleton, palette swapped — same words)
  fg-accent-…  border-accent-…  bg-accent-…

INTENT (marked · salience · one scale)
  bg-{intent}-{subtle | medium | strong}    ← no default
  fg-{intent}-{subtle | medium | strong}
  border-{intent}-{subtle | medium | strong}

CONTROL (shared · the tuning layer)
  control-{slot}-{state} → {family(state)}-{named step}
  resting→neutral · engaged→accent · error→danger
```
