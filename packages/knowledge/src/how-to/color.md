---
title: How to color something
description: Recipes for applying color with <color-mode>.
---

Color lives on a wrapper, not on components. Point a `<color-mode>` at a `palette`, and everything inside follows — you never name a color. Two knobs do the work: `palette` sets the hue, `inverted` flips to the other end of it.

For the reasoning behind any of it, see [Color modes](/docs/explanation/color-modes).

## Color a section

Wrap it. Headings, body text, links, buttons and form fields all follow.

```html
<color-mode palette="periwinkle" class="d-block surface-tinted p-xl br-l">
  <h1 class="fs-3xl fw-bold">Velkommen til Variantdag</h1>
  <p class="ink-subtle">Programmet for dagen</p>
  <button class="v-button">Meld deg på</button>
</color-mode>
```

Two details make it work:

- `d-block` gives the mode a box. Without it there's nothing to paint the background on.
- `surface-tinted` is the background. You wrote "periwinkle" only in the `palette` attribute — the text, link and button pick it up.

Swap `periwinkle` for `green`, `blue`, `coral` or `teal`. Same markup, same contrast; only the hue moves.

## Let a button inherit

Don't color the button. Color its container.

```html
<color-mode palette="periwinkle" class="d-block surface-tinted p-m br-l">
  <button class="v-button">Meld deg på</button>
</color-mode>
```

The button is periwinkle because its container is. There's nothing to add: Varde has no classes named after a color, and no button variant per palette.

## Make a badge

One set of classes, many meanings. Only the `palette` changes.

```html
<color-mode
  palette="green"
  class="d-inline-block surface-dyed px-xs py-3xs br-pill fs-s fw-medium"
>
  Paid
</color-mode>
```

`surface-dyed` is the strongest background, so a badge reads as filled. Add `inverted` to flip it to the other end of the same hue:

```html
<color-mode
  inverted
  palette="green"
  class="d-inline-block surface-dyed px-xs py-3xs br-pill fs-s fw-medium"
>
  Paid
</color-mode>
```

Map status to palette in your own code — `green` for paid, `orange` for pending, `coral` for cancelled. Varde ships no `.badge-success`.

## Feature one card in a set

Make one card stand out by inverting its mode. Same card, different lighting:

```html
<color-mode>
  <div class="surface-base b-all bc-subtle br-xl p-m">
    <h3 class="fs-l fw-bold">Free</h3>
    <p class="ink-subtle">For personal projects.</p>
    <button class="v-button" data-variant="outlined">Start free</button>
  </div>
</color-mode>

<color-mode inverted palette="periwinkle">
  <div class="surface-dyed b-all bc-subtle br-xl p-m shadow-high">
    <h3 class="fs-l fw-bold">Pro</h3>
    <p class="ink-subtle">For growing teams.</p>
    <button class="v-button">Start free trial</button>
  </div>
</color-mode>
```

`inverted` flips the palette's light and dark ends — a per-block choice, not dark mode. The featured card adds `surface-dyed` and a shadow to finish the lift.

## Tie color to state

Selected and unselected are the same markup, lit differently. Change one attribute.

```html
<div class="stack-h gap-xs" data-palette-group>
  <color-mode palette="blue" class="d-block flex-1 br-m surface-dyed">
    <label
      class="stack-h gap-m p-xs bg-wash:hover b-all bc-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="fw-medium fs-m">Pro trial</h5>
        <p class="ink-subtle">Free for two weeks</p>
      </div>
      <input type="radio" class="v-radio" name="trial" checked />
    </label>
  </color-mode>

  <color-mode palette="grey" class="d-block flex-1 br-m surface-dyed">
    <label
      class="stack-h gap-m p-xs bg-wash:hover b-all bc-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="fw-medium fs-m">Team trial</h5>
        <p class="ink-subtle">Free for two weeks</p>
      </div>
      <input type="radio" class="v-radio" name="trial" />
    </label>
  </color-mode>
</div>

<script>
  document.querySelectorAll("[data-palette-group]").forEach((group) => {
    group.addEventListener("change", () => {
      group.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio
          .closest("color-mode")
          .setAttribute("palette", radio.checked ? "blue" : "grey");
      });
    });
  });
</script>
```

```js

```

Toggling is your job. Varde only reacts to the attribute.

## Where next

- [Build a card](/docs/tutorial/build-a-card) — your first `<color-mode>`, from wrapper to finished card.
- [Color modes](/docs/explanation/color-modes) — why color lives on containers, and why `inverted` isn't dark mode.
- [Color reference](/docs/reference/color) — the troubleshooting table and cheat sheet.
