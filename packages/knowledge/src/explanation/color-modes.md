---
title: Color modes
description: Why color lives on containers instead of components.
---

Color modes put color on a container and everything inside it, for anyone who wants to change a palette in one place.

Varde has no classes named after a color. Color comes from `<color-mode>`, and everything inside it follows.

This page explains why. For recipes, see [How to color something](/docs/how-to/color).

## Naming colors

Most systems name a color after the color it is. Varde names it after the job it does.

| Class                                       | Job                                   |
| ------------------------------------------- | ------------------------------------- |
| `surface-base`                              | Plainest background                   |
| `surface-tinted`                            | Background with more presence         |
| `surface-dyed`                              | Background with the most presence     |
| `ink-subtle`                                | Quieter text                          |
| `ink-default`                               | Normal text                           |
| `ink-prominent`                             | Louder text                           |
| `bc-subtle` / `bc-default` / `bc-prominent` | Borders, from barely-there to obvious |

None of these names a color. Each one names a job, and `<color-mode>` decides what color that job gets.

## Palettes

A `<color-mode>` lights everything inside it in one hue — backgrounds, text, borders, buttons. The relationships between them are fixed, so contrast holds wherever you put it. Only the hue moves.

Nine palettes: `grey` `blue` `green` `yellow` `orange` `coral` `purple` `teal` `periwinkle`.

## Surfaces and ink

Each `surface-*` sets its own background. `surface-base` is the page itself, furthest back; `tinted` and `dyed` add pigment in steps, pulling the surface closer to the ink.

```html
<main class="surface-base p-xs b-all">
  This is base
  <section class="surface-tinted p-xs br-l">
    This is tinted
    <div class="surface-dyed p-xs br-m">This is dyed</div>
  </section>
</main>
```

Ink is inherited. You start at `ink-default` and move from there, toward `ink-subtle` or `ink-prominent`. Borders work the same way with `bc-*`.

This is why nesting the same palette twice has no visible effect — the hue doesn't change. To create a step, change the surface instead: `surface-tinted` to `surface-dyed`.

## Nesting modes

A green card can hold an orange row that holds a blue chip. Each level reads from the same set of jobs, so all three stay legible. Depth is not a problem.

A `<color-mode>` with no `palette` inherits the one above it. That is how `inverted` on its own works.

## Where color lives

A button inside a periwinkle mode is periwinkle. Nobody told it to be.

This is what keeps the system small: variants never multiply by palettes. Nine palettes and four button variants stay four button variants.

It also moves a product decision into your own markup. "Paid is green" is a choice your application makes, visible where you write it, changeable by whoever owns it. Varde has no opinion about your statuses, and there's no request to file to add one.

## What stays fixed

A few things stay fixed, on purpose:

- Focus rings
- Text selection
- Error and `aria-invalid` states, which stay red

The contrast of a focus ring is set once, in the system, so there's nothing to reason about.

## Flipping a block

`inverted` flips the light and dark ends of the current palette.

`inverted` is not dark mode. Dark mode follows the user's preference; `inverted` is a choice you make per block — a hero, a highlighted card, a selected chip.

```html
<color-mode inverted>
  <main class="surface-base p-xs b-all">
    This is base
    <section class="surface-tinted p-xs br-l">
      This is tinted
      <div class="surface-dyed p-xs br-m">This is dyed</div>
    </section>
  </main>
</color-mode>
```

Dark mode lives at the root, in `data-color-scheme` — see [Dark mode](/docs/how-to/dark-mode). The two are unrelated, and inverting does not opt a block out of dark mode.

## The trade-off

Color lives on the wrapper, so you need a wrapper. That is one extra element around a badge, and a `d-block` on it if you want the background to show. In return, there are no color names to maintain, and dark mode comes with it.

We think that's a good trade. If you find a case where it isn't, tell us.
