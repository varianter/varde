# Color naming

Every color name is built from pieces. Read it left to right.

## Two kinds of color

**Neutral** — the greys that build the page. They carry no meaning, just structure.
**Intent** — colors that mean something: `danger`, `success`, `warning`.

## The three parts

`background` (the fill) · `foreground` (text/icons) · `border` (the edge)

## Neutral names

Each part has its own three words, low to high:

| Part                   | Names                             |
| ---------------------- | --------------------------------- |
| `surface` (background) | `sunken` · `default` · `raised`   |
| `foreground`           | `muted` · `default` · `emphasis`  |
| `border`               | `faint` · `default` · `prominent` |

`default` is the everyday one. Examples: `surface-default`, `foreground-muted`, `border-prominent`.

## Intent names

Always the intent in the middle, then how loud: `subtle` · `medium` · `strong`.

`background-danger-subtle` · `foreground-success-strong` · `border-warning-medium`

There's no "default" intent — you only add one when you mean to.

## Two rules

- **`subtle / medium / strong` always means it's an intent.** Neutrals never use those words.
- **A surface is the ground; a background sits on top of it.** Never the other way around.

## Accent (the brand color)

Same words as neutral, just brand-colored: `foreground-accent`, `border-accent`.
