---
title: Buttons
description: Turn a button or link into a styled button with variants and sizes.
---

Add `.button` to a `<button>` or `<a>` element to turn it into a styled button. You can change its look with two optional settings:

- `data-variant` — changes how color is applied
- `data-size` — changes how big the button is

Both are optional. If you leave them off, you get a medium-sized filled button. Color comes from the surrounding `<color-mode palette="...">`. Buttons placed outside a `<color-mode>` use the default grey palette.

## Variants and sizes

Use `data-variant` to pick a visual style and `data-size` to pick a size. You can combine any variant with any size.

| Attribute      | Values                                          |
| -------------- | ----------------------------------------------- |
| `data-variant` | `"filled"`, `"tinted"`, `"outlined"`, `"plain"` |
| `data-size`    | `"small"`, `"medium"`, `"large"`                |

### Button Variants

```html
<div class="stack-horizontal gap-m">
  <button class="button" data-variant="filled">Filled</button>
  <button class="button" data-variant="tinted">Tinted</button>
  <button class="button" data-variant="outlined">Outlined</button>
  <button class="button" data-variant="plain">Plain</button>
</div>
```

### Button Sizes

```html
<div class="stack-horizontal gap-m">
  <button class="button" data-size="small">Small</button>
  <button class="button">Medium</button>
  <button class="button" data-size="large">Large</button>
</div>
```

## Color

Buttons get their color from the `<color-mode palette="...">` they sit inside. Wrap your buttons in a `<color-mode>` and they pick up the palette automatically — you don't need to set a color on each button.

```html
<div class="stack gap-xs">
  <div class="stack-horizontal gap-xs">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </div>

  <color-mode class="stack-horizontal gap-xs" palette="periwinkle">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode class="stack-horizontal gap-xs" palette="coral">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>
  <color-mode class="stack-horizontal gap-xs" palette="purple">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button> </color-mode
  ><color-mode class="stack-horizontal gap-xs" palette="green">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button> </color-mode
  ><color-mode class="stack-horizontal gap-xs" palette="yellow">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>
</div>
```

For inverted palettes, add `inverted` to `<color-mode>` and place the buttons on a dark surface such as `bg-surface-dyed`:

```html
<color-mode
  inverted
  class="bg-surface-dyed stack-horizontal gap-xs p-xs"
  palette="periwinkle"
>
  <button class="button">Filled</button>
  <button class="button" data-variant="tinted">Tinted</button>
  <button class="button" data-variant="outlined">Outlined</button>
  <button class="button" data-variant="plain">Plain</button>
</color-mode>
```

### Loading states

To show that an action is loading or processing, put a `.spinner` inside the button. The spinner picks up the button's color and size on its own. Use a spinner to show progress rather than disabling the button.

```html
<div class="stack-horizontal gap-xs mb-xs">
  <button class="button">
    <span class="spinner"></span>
    Saving…
  </button>
  <button class="button" data-variant="outlined">
    <span class="spinner"></span>
    Saving…
  </button>
  <button class="button" data-variant="tinted">
    <span class="spinner"></span>
    Saving…
  </button>
</div>
<color-mode palette="periwinkle" class="stack-horizontal gap-xs">
  <button class="button">
    <span class="spinner"></span>
    Saving…
  </button>
  <button class="button" data-variant="outlined">
    <span class="spinner"></span>
    Saving…
  </button>
  <button class="button" data-variant="tinted">
    <span class="spinner"></span>
    Saving…
  </button>
</color-mode>
```

## Combining with other classes

You can add utility classes to a button to tweak its shape, padding, and other details.

A circular icon-only button:

```html
<button class="button br-circle p-0 aspect-ratio-1-1" aria-label="Add">
  <span class="icon" data-icon="plus" />
</button>
```

A pill shape:

```html
<button class="button br-pill" data-variant="outlined">Filter</button>
<button class="button br-pill" data-size="small" data-variant="outlined">
  Smaller pill
</button>
<button class="button br-pill" data-size="small" data-variant="filled">
  Smaller pill
</button>
```

Make one button stand out as the primary action with **wider padding** and a `color-mode`, while keeping other buttons subdued:

```html
<div class="stack-horizontal gap-xs">
  <color-mode palette="periwinkle">
    <button class="button px-l">Save changes</button>
  </color-mode>
  <button class="button" data-variant="tinted">Cancel</button>
</div>
```

`.button` also works on `<a>` elements, with the same attributes:

```html
<a href="/settings" class="button" data-variant="outlined">Settings</a>
```
