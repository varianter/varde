---
title: Buttons
description: Style buttons and links with variants and sizes.
---

## Variants and sizes

`data-variant` picks the visual style, `data-size` the size. Any variant combines with any size.

| Attribute      | Values                                                    |
| -------------- | --------------------------------------------------------- |
| `data-variant` | `"filled"` (default), `"tinted"`, `"outlined"`, `"plain"` |
| `data-size`    | `"small"`, `"medium"` (default), `"large"`                |

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

In Varde, buttons get their color from a `<color-mode palette="...">`. Because color is inherited, there's no special attribute for coloring buttons.

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

## Shapes

Utility classes combine with `.v-button` to adjust shape, padding, and other details.

And remember, friends don't let friends make icon buttons without `aria-label`.

```html
<div class="stack-h items-start gap-xs">
  <button class="v-button p-0 aspect-square" data-size="small" aria-label="Add">
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button class="v-button p-0 aspect-square" aria-label="Add">
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button class="v-button p-0 aspect-square" data-size="large" aria-label="Add">
    <span class="v-icon" data-v-icon="plus"></span>
  </button>

  <button
    class="v-button p-0 aspect-square br-circle"
    data-size="small"
    aria-label="Add"
  >
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button class="v-button p-0 aspect-square br-circle" aria-label="Add">
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
  <button
    class="v-button p-0 aspect-square br-circle"
    data-size="large"
    aria-label="Add"
  >
    <span class="v-icon" data-v-icon="plus"></span>
  </button>
</div>
```

## Icons first or last

```html
<div class="stack-h gap-xs">
  <button class="v-button" data-variant="outlined">
    <span class="v-icon" data-v-icon="chevron-left"></span> Filter
  </button>
  <button class="v-button" data-variant="outlined">
    Filter <span class="v-icon" data-v-icon="chevron-down"></span>
  </button>
  <button class="v-button" data-variant="outlined">
    <span class="v-icon" data-v-icon="chevron-left"></span> Filter
    <span class="v-icon" data-v-icon="chevron-right"></span>
  </button>
</div>
```

**Do note**: Icons inside buttons _MUST_ inherits color. If you're using inline SVGS, then use `currentColor`.

## Pill shaped button

Just add `br-pill` to `v-button` and you're done.

```html
<button class="v-button br-pill" data-variant="filled">Smaller pill</button>
<button class="v-button br-pill" data-variant="tinted">Smaller pill</button>
<button class="v-button br-pill" data-variant="outlined">Smaller pill</button>
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

## Niceness

To get some more visual hierarachy, make the primary action mroe prominent by add some padding and a `color-mode`.

```html
<div class="stack-h gap-xs">
  <color-mode palette="periwinkle">
    <button class="v-button px-l">Save changes</button>
  </color-mode>
  <button class="v-button" data-variant="tinted">Cancel</button>
</div>
```
