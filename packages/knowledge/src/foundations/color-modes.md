---
title: Colour modes
description: Why colour lives on containers instead of components.
---

# Colour modes

Varde has no colour classes. There is no `.badge-success`, no `--green-500`, no `.button-periwinkle`. Colour comes from `<color-mode>`, and everything inside it takes the hint.

This page explains why. For recipes, see [How to colour something](/docs/how-to/color).

## Names describe jobs, not colours

Most systems name a colour after the colour: `--green-500`, `--color-success-background`. Varde names it after the job it does.

| Class                                       | Job                                   |
| ------------------------------------------- | ------------------------------------- |
| `surface-base`                              | Plainest background                   |
| `surface-tinted`                            | Background with more presence         |
| `surface-dyed`                              | Background with the most presence     |
| `ink-subtle`                                | Quieter text                          |
| `ink-default`                               | Normal text                           |
| `ink-prominent`                             | Louder text                           |
| `bc-subtle` / `bc-default` / `bc-prominent` | Borders, from barely-there to obvious |

None of them say what colour they are. They are slots. `<color-mode>` fills them.

This badge has no colour opinion at all:

```html
<span class="surface-tinted ink-subtle px-2xs py-3xs br-pill fs-xs">Paid</span>
```

## Coloured lighting

A `<color-mode>` lights everything inside it in one hue — backgrounds, text, borders, buttons. The relationships between them are fixed, so contrast holds wherever you put it. Only the hue moves.

Nine palettes: `grey` `blue` `green` `yellow` `orange` `coral` `purple` `teal` `periwinkle`.

## Backgrounds don't inherit, text does

Each `surface-*` is a complete statement. `surface-base` is the page itself, furthest back; `tinted` and `dyed` add pigment in steps, pulling the surface closer to the ink.

Ink inherits. You start at `ink-default` and nudge from there. Borders work the same way with `bc-*`.

This is why nesting the same palette twice does nothing — same hue, same slots. To create a visual step, change the surface instead: `surface-tinted` to `surface-dyed`.

## Modes nest, and the nearest one wins

A green card can hold an orange row that holds a blue chip. Each level reads from the same set of jobs, so all three stay legible. Depth is not a problem.

A `<color-mode>` with no `palette` inherits the one above it. That is how `inverted` on its own works.

## Contexts carry colour, components don't

A button inside a periwinkle mode is periwinkle. Nobody told it to be.

This is what keeps the system small: variants never multiply by palettes. Nine palettes and four button variants stay four button variants.

It also moves a product decision back where it belongs. "Paid is green" is a choice your application makes, visible in your own markup, changeable by whoever owns it. Varde has no opinion about your statuses and you don't file a request to add one.

## Three things ignore the palette

On purpose:

- Focus rings
- Text selection
- Error and `aria-invalid` states, which stay red

Nobody should have to reason about the contrast of a focus ring. It is encoded once, in the system.

## Inverted is not dark mode

`inverted` flips the light and dark ends of the current palette. It is a design decision you make per block — a hero, a highlighted card, a selected chip.

Dark mode is the user's preference, handled once at the root with `data-color-scheme`. The two are unrelated, and inverting does not opt a block out of dark mode.

## The trade-off

Colour lives on the wrapper, so you have to have a wrapper. That is one extra element around a badge, and a `d-block` on it if you want the background to show. In return you get no colour classes to maintain, no `--color-status-cancelled`, and dark mode for free.

We think that's a good trade. If you find a case where it isn't, tell us.
