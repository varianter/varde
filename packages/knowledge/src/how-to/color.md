---
title: How to colour something
description: Recipes for applying colour with <color-mode>.
---

Task-first. For the reasoning behind any of it, see [Colour modes](/docs/foundations/color-modes).

## Before you start

`<color-mode>` is invisible. It creates no box — it only passes colour down. If you want it to have a background, give it a display class:

```html
<color-mode palette="green" class="d-block surface-tinted p-m br-l"
  >…</color-mode
>
```

Use `d-block`, `d-inline-block`, `stack-v` or `stack-h`. Missing background? This is why, almost every time.

## Colour a page section

Wrap it. Headings, body text, links, buttons and form fields all follow.

```html
<color-mode palette="periwinkle" class="d-block surface-tinted p-xl">
  <h1 class="fs-3xl fw-bold">Velkommen til Variantdag</h1>
  <p class="ink-subtle">Programmet for dagen</p>
  <button class="v-button">Meld deg på</button>
</color-mode>
```

The button is periwinkle. Don't add a class to it.

## Colour a single word

The same tool works on a leaf node.

```html
<span class="fs-s ink-subtle">MRR</span>

<color-mode
  palette="green"
  class="d-inline-block surface-dyed px-xs py-4xs br-pill fs-xs"
>
  +3.2%
</color-mode>
```

## Build a status column

Six meanings, one set of classes. Only the palette changes.

```html
<color-mode
  inverted
  palette="green"
  class="d-inline-block surface-dyed fw-medium ink-subtle px-2xs py-3xs br-pill fs-xs"
  >Paid</color-mode
>

<color-mode
  inverted
  palette="orange"
  class="d-inline-block surface-dyed fw-medium ink-subtle px-2xs py-3xs br-pill fs-xs"
  >Unfulfilled</color-mode
>

<color-mode
  inverted
  palette="coral"
  class="d-inline-block surface-dyed fw-medium ink-subtle px-2xs py-3xs br-pill fs-xs"
  >Cancelled</color-mode
>

<color-mode
  inverted
  palette="grey"
  class="d-inline-block surface-dyed fw-medium ink-subtle px-2xs py-3xs br-pill fs-xs"
  >Refunded</color-mode
>
```

Map status to palette in your own code. Varde ships no `.badge-success`.

## Make a block pop

Add `inverted`. Use it for heroes, featured cards and selected states.

```html
<color-mode palette="periwinkle" class="d-block surface-tinted p-m b-all">
  <p class="p-s">Normal.</p>

  <color-mode inverted class="d-block surface-dyed br-l px-s py-xs">
    <p class="lh-tight">Velkommen til</p>
    <h1 class="fs-4xl fw-bold">Variantdag</h1>
  </color-mode>
</color-mode>
```

The inner mode has no `palette`, so it inherits periwinkle and only flips.

## Tie colour to state

Selected and unselected are the same markup, lit differently. Change one attribute.

```html
<div class="stack-h gap-xs" data-palette-group>
  <!-- selected -->
  <color-mode palette="blue" class="d-block flex-1 br-m surface-tinted">
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

  <!-- not selected — identical classes -->
  <color-mode palette="grey" class="d-block flex-1 br-m surface-tinted">
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
```

```js
document.querySelectorAll("[data-palette-group]").forEach((group) => {
  group.addEventListener("change", () => {
    group.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio
        .closest("color-mode")
        .setAttribute("palette", radio.checked ? "blue" : "grey");
    });
  });
});
```

Toggling is your job. Varde only reacts to the attribute.

## Restyle without touching markup

Change `palette` on the outermost mode. Everything below re-lights: hue moves, layout doesn't.

## Troubleshooting

| Symptom                           | Cause                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| Background isn't showing          | Missing display class. Add `d-block` or `d-inline-block`.                                   |
| Nesting a palette changed nothing | Same palette twice is a no-op. Step the surface instead: `surface-tinted` → `surface-dyed`. |
| `inverted` stopped part-way down  | Setting `palette` on a child resets direction. Repeat `inverted` on the child.              |
| A button is the wrong colour      | Don't colour the button. Colour its container.                                              |
| Focus ring didn't change          | Correct. Focus rings, text selection and error states never follow the palette.             |

## Quick reference

| Want to             | Do this                                   |
| ------------------- | ----------------------------------------- |
| Colour anything     | Wrap it in `<color-mode palette="…">`     |
| Make it visible     | Add `d-block` or `d-inline-block`         |
| Add contrast        | Add `inverted`                            |
| Go a shade stronger | `surface-tinted` → `surface-dyed`         |
| Colour a button     | Nothing — colour its container            |
| Support dark mode   | Nothing — set `data-color-scheme` at root |
