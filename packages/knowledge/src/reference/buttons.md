---
title: Buttons
description: Style buttons and links with variants and sizes.
---

`.v-button` styles a `<button>` or `<a>`. Two attributes change the look:

- `data-variant` changes how color is applied
- `data-size` changes how big the button is

Without them you get a medium filled button. Color comes from the surrounding `<color-mode palette="...">`. Buttons outside a `<color-mode>` use the default grey palette.

## Variants and sizes

`data-variant` picks the visual style, `data-size` the size. Any variant combines with any size.

| Attribute      | Values                                          |
| -------------- | ----------------------------------------------- |
| `data-variant` | `"filled"`, `"tinted"`, `"outlined"`, `"plain"` |
| `data-size`    | `"small"`, `"medium"`, `"large"`                |

### Button variants

```html
<div class="stack-h gap-m">
  <button class="v-button" data-variant="filled">Filled</button>
  <button class="v-button" data-variant="tinted">Tinted</button>
  <button class="v-button" data-variant="outlined">Outlined</button>
  <button class="v-button" data-variant="plain">Plain</button>
</div>
```

### Button sizes

```html
<div class="stack-h gap-m">
  <button class="v-button" data-size="small">Small</button>
  <button class="v-button">Medium</button>
  <button class="v-button" data-size="large">Large</button>
</div>
```

## Color

Buttons get their color from the surrounding `<color-mode palette="...">`. Color is inherited — no class is set on the button itself.

```html
<div class="stack-v gap-xs">
  <div class="stack-h gap-xs">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </div>

  <color-mode class="stack-h gap-xs" palette="periwinkle">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode class="stack-h gap-xs" palette="coral">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </color-mode>
  <color-mode class="stack-h gap-xs" palette="purple">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode class="stack-h gap-xs" palette="green">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode class="stack-h gap-xs" palette="yellow">
    <button class="v-button">Filled</button>
    <button class="v-button" data-variant="tinted">Tinted</button>
    <button class="v-button" data-variant="outlined">Outlined</button>
    <button class="v-button" data-variant="plain">Plain</button>
  </color-mode>
</div>
```

For inverted palettes, add `inverted` to `<color-mode>` and place the buttons on a dark surface such as `surface-dyed`:

```html
<color-mode
  inverted
  class="surface-dyed stack-h gap-xs p-xs"
  palette="periwinkle"
>
  <button class="v-button">Filled</button>
  <button class="v-button" data-variant="tinted">Tinted</button>
  <button class="v-button" data-variant="outlined">Outlined</button>
  <button class="v-button" data-variant="plain">Plain</button>
</color-mode>
```

### Loading states

A `.v-spinner` inside a button renders a loading state. It inherits the button's color and size.

```html
<div class="stack-h gap-xs mb-xs">
  <button class="v-button">
    <span class="v-spinner"></span>
    Saving…
  </button>
  <button class="v-button" data-variant="outlined">
    <span class="v-spinner"></span>
    Saving…
  </button>
  <button class="v-button" data-variant="tinted">
    <span class="v-spinner"></span>
    Saving…
  </button>
</div>
<color-mode palette="periwinkle" class="stack-h gap-xs">
  <button class="v-button">
    <span class="v-spinner"></span>
    Saving…
  </button>
  <button class="v-button" data-variant="outlined">
    <span class="v-spinner"></span>
    Saving…
  </button>
  <button class="v-button" data-variant="tinted">
    <span class="v-spinner"></span>
    Saving…
  </button>
</color-mode>
```

## Icons

A `.v-icon` inside a button inherits the button's color and scales with the font size.

```html
<div class="stack-h gap-m">
  <button class="v-button">
    <span class="v-icon" data-v-icon="plus"></span> Add item
  </button>
  <button class="v-button" data-variant="outlined">
    <span class="v-icon" data-v-icon="pencil"></span> Edit
  </button>
</div>
```

Trailing icons work the same way:

```html
<div class="stack-h gap-m">
  <button class="v-button">
    Continue <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button class="v-button">
    Settings <span class="v-icon" data-v-icon="pencil"></span>
  </button>
</div>
```

An icon-only button requires an `aria-label` because it has no visible text:

```html
<div class="stack-h gap-m">
  <button class="v-button" aria-label="Add">
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button class="v-button" data-variant="outlined" aria-label="Edit">
    <span class="v-icon" data-v-icon="pencil"></span>
  </button>
</div>
```

## Combining with other classes

Utility classes combine with `.v-button` to adjust shape, padding, and other details.

A circular icon-only button:

```html
<button class="v-button br-circle p-0 aspect-square" aria-label="Add">
  <span class="v-icon" data-v-icon="plus" />
</button>
```

A pill shape:

```html
<button class="v-button br-pill" data-variant="outlined">Filter</button>
<button class="v-button br-pill" data-size="small" data-variant="outlined">
  Smaller pill
</button>
<button class="v-button br-pill" data-size="small" data-variant="filled">
  Smaller pill
</button>
```

Wider padding and a `color-mode` wrapper mark a primary action. The others stay subdued:

```html
<div class="stack-h gap-xs">
  <color-mode palette="periwinkle">
    <button class="v-button px-l">Save changes</button>
  </color-mode>
  <button class="v-button" data-variant="tinted">Cancel</button>
</div>
```

`.v-button` also works on `<a>` elements, with the same attributes:

```html
<a href="/settings" class="v-button" data-variant="outlined">Settings</a>
```
