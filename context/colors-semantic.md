# Color naming

Every color name is built from pieces. Read it left to right.

## Two kinds of color

**Neutral** — the greys that build the page. They carry no meaning, just structure.
**Intent** — colors that mean something: `danger`, `success`, `warning`.

## The three parts

`surface` (the fill) · `ink` (text/icons) · `border` (the edge)

## Neutral names

Each part has its own three words, low to high:

| Part      | Names                              |
| --------- | ---------------------------------- |
| `surface` | `base` · `tinted` · `dyed`         |
| `ink`     | `subtle` · `default` · `prominent` |
| `border`  | `subtle` · `default` · `prominent` |

`default` is the everyday one. Examples: `surface-base`, `ink-subtle`, `border-prominent`.

## Intent names

Always the intent in the middle, then how loud: `subtle` · `medium` · `strong`.

`bg-danger-subtle` · `ink-success-strong` · `border-warning-medium`

There's no "default" intent — you only add one when you mean to.

## Two rules

- **`medium` / `strong` always means it's an intent.** `subtle` is the shared quiet end — neutral ink and borders use `subtle / default / prominent`, intents use `subtle / medium / strong`.
- **A surface is the ground; a background sits on top of it.** Never the other way around.

## Accent (the brand color)

Same words as neutral, just brand-colored: `ink-accent`, `border-accent`.
