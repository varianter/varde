---
title: Color modes
description: Why color lives on containers instead of components.
---

Color modes put color on a container and everything inside it, for anyone who wants to change a palette in one place.

Varde names no class after a color. `<color-mode>` sets the color for everything inside it.

This page explains why. For steps, see [How to color something](/docs/how-to/color).

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

A `<color-mode>` colors everything inside it in one hue — backgrounds, text, borders, buttons. The relationships stay fixed, so contrast holds wherever you put it. Only the hue moves.

Nine palettes: `grey` `blue` `green` `yellow` `orange` `coral` `purple` `teal` `periwinkle`.

## Surfaces and ink

Each `surface-*` sets its own background. `surface-base` is the page itself, furthest back; `tinted` and `dyed` add color in steps, moving the surface toward the ink.

```html
<main class="surface-base p-xs b-all">
  This is base
  <section class="surface-tinted p-xs br-l">
    This is tinted
    <div class="surface-dyed p-xs br-m">This is dyed</div>
  </section>
</main>
```

`ink-default` sets the text color for everything inside it. Move toward `ink-subtle` or `ink-prominent` from there. Borders work the same way with `bc-*`.

Nesting the same palette twice changes nothing — the hue stays the same. To create a step, change the surface instead: `surface-tinted` to `surface-dyed`.

## Nesting modes

A green card can contain an orange row that contains a blue chip. Each level uses the same set of jobs, so all three stay legible.

A `<color-mode>` with no `palette` uses the one above it. `inverted` on its own works this way.

## Where color lives

A button inside a periwinkle mode renders periwinkle on its own.

This keeps the system small: variants never multiply by palettes. Nine palettes and four button variants stay four button variants.

It also moves a product decision into your own markup. "Paid is green" is a choice your application makes, visible where you write it, changeable by whoever owns it. Varde does not define your statuses, and you don't ask it to add one.

## What stays fixed

A few things stay fixed, on purpose:

- Focus rings
- Text selection
- Error and `aria-invalid` states, which stay red

The system sets focus-ring contrast once, so you don't reason about it.

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

`data-color-scheme` at the root sets dark mode — see [Dark mode](/docs/how-to/dark-mode). The two are unrelated, and inverting does not opt a block out of dark mode.

## The trade-off

Color lives on the wrapper, so you need a wrapper. You add one extra element around a badge, and a `d-block` on it if you want the background to show. In return, you maintain no color names, and dark mode comes with it.

The trade is worth it. If you find a case where it isn't, tell us.
