---
title: Classes
description: Reference for Varde's utility and component classes.
---

## Spacing scale

`3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl`
From smallest to largest. `m` equals `1rem`.

---

## Layout

**Stack (flexbox):**

```html
<!-- column, top-aligned -->
<div class="stack-v gap-m"></div>

<!-- row, vertically centered -->
<div class="stack-h gap-s"></div>

<!-- row, aligned to top -->
<div class="stack-h items-start gap-s"></div>

<!-- row, aligned to bottom -->
<div class="stack-h items-end gap-s"></div>

<!-- row, children stretch full height -->
<div class="stack-h items-stretch"></div>
```

Flex modifiers: `.grow` `.shrink` `.flex-1` `.nowrap` `.d-inline-flex`

Alignment: `.items-start`, `.items-end`, `.items-center`, and `.items-stretch` on the container. For the main axis: `.justify-start`, `.justify-end`, `.justify-center`, and `.justify-between`. On a single child: `.self-start`, `.self-end`, `.self-center`, and `.self-stretch`. In grid layouts, `.justify-self-start`, `.justify-self-end`, `.justify-self-center`, and `.justify-self-stretch` position one child on the main axis (no effect in flex).

---

## Spacing utilities

**Padding.** Prefix `p`, direction optional (`x` `y` `l` `r` `t` `b`):

```html
<div class="p-m px-l pt-xs"></div>
```

**Margin.** Prefix `m`, direction optional (`x` `y` `l` `r` `t` `b`):

```html
<div class="mt-xl mx-auto ml-auto"></div>
```

Negative margins use the same scale, e.g. `-mt-s`, `-ml-m`.

When they overlap, the more specific utility always wins, regardless of class order: single side (`pt-`) beats axis (`px-`), which beats all sides (`p-`).

**Gap.** For flex/grid containers:

```html
<div class="gap-m">
  <div class="gap-row-s gap-column-xl"></div>
</div>
```

---

## Typography

```html
<div class="stack-v gap-xs">
  <span class="fs-xs">fs-xs</span>
  <span class="fs-s">fs-s</span>

  <!-- the default, set on the html element -->
  <span class="fs-m">fs-m</span>
  <span class="fs-l">fs-l</span>
  <span class="fs-xl">fs-xl</span>
  <span class="fs-2xl">fs-2xl</span>
  <span class="fs-3xl">fs-3xl</span>
  <span class="fs-4xl">fs-4xl</span>

  <!-- font-weight: 400 -->
  <span class="fw-regular">fw-regular</span>

  <!-- font-weight: 500 -->
  <span class="fw-medium">fw-medium</span>

  <!-- font-weight: 600 -->
  <span class="fw-bold">fw-bold</span>

  <span class="ta-left">ta-left</span>
  <span class="ta-center">ta-center</span>
  <span class="ta-right">ta-right</span>
  <span class="tt-uppercase">tt-uppercase</span>

  <span class="lh-extra-tight">lh-extra-tight</span>
  <span class="lh-tight">lh-tight</span>
  <span class="lh-snug">lh-snug</span>
  <span class="lh-normal">lh-normal</span>
  <span class="lh-relaxed">lh-relaxed</span>
</div>
```

---

## Colors

Never hardcode colors. Never use `--palette-*` variables directly. Always use semantic classes.

**Intensities:** `subtle` `medium` `strong`

**Background:**

```html
<!-- Surfaces -->
<div class="surface-base"></div>
<div class="surface-tinted"></div>
<div class="surface-dyed"></div>
```

**Text (ink):**

```html
<p class="ink-default"></p>
<!-- body text -->
<p class="ink-subtle"></p>
<!-- secondary/helper text -->
<p class="ink-prominent"></p>
```

**Border color:**

```html
<!-- decorative lines, not structural -->
<div class="bc-subtle b-all p-xs mb-xs">.bc-subtle</div>

<!-- everyday borders -->
<div class="bc-default b-all p-xs mb-xs">.bc-default</div>

<!-- prominent structural lines: rarely used -->
<div class="bc-prominent b-all p-xs mb-xs">.bc-prominent</div>
```

---

## Borders

**Border sides:**

```html
<div class="b-all"></div>
<!-- all sides, 1px solid -->
<div class="b-t"></div>
<!-- top only -->
<div class="b-r"></div>
<!-- right only -->
<div class="b-b"></div>
<!-- bottom only -->
<div class="b-l"></div>
<!-- left only -->
<div class="b-none:last-child"></div>
<!-- removes border from :last-child -->
<div class="b-none:first-child"></div>
<!-- removes border from :first-child -->
```

Always pair a border side class with a border color class:

```html
<li class="b-b bc-default"></li>
```

**Border radius:**

```html
<!-- removes border-radius -->
<div class="br-none"></div>

<!-- inherits border-radius from parent, useful for when clipping occurs -->
<div class="br-inherit"></div>

<!-- 2px -->
<div class="br-xs"></div>

<!-- 4px -->
<div class="br-s"></div>

<!-- 8px -->
<div class="br-m"></div>

<!-- 12px -->
<div class="br-l"></div>

<!-- 16px -->
<div class="br-xl"></div>

<!-- 24px -->
<div class="br-2xl"></div>

<!-- 9999px -->
<div class="br-pill"></div>

<!-- 50% -->
<div class="br-circle"></div>
```

---

## Components

### Button

Apply `.v-button` to `<button>` or `<a>`. Variant and size are independent; combine them freely. Color comes from the surrounding `<color-mode>`.

```html
<!-- Variant (default: filled) -->
<button class="v-button" data-variant="tinted">Tinted</button>
<button class="v-button" data-variant="outlined">Outlined</button>
<button class="v-button" data-variant="plain">Plain</button>

<!-- Size (default: medium) -->
<button class="v-button" data-size="small">Small</button>
<button class="v-button" data-size="large">Large</button>

<!-- or combined -->
<button class="v-button" data-size="small" data-variant="plain">Delete</button>
```

### Form controls

```html
<input class="v-input" type="text" />
<input class="v-input" data-size="small" type="text" />
<input class="v-input" data-size="large" type="text" />

<textarea class="v-textarea"></textarea>
<select class="v-select"></select>

<input class="v-checkbox" type="checkbox" />
<input class="v-radio" type="radio" />
```

For invalid state, use the attribute rather than a custom error class:

```html
<input class="v-input" aria-invalid="true" />
```

### Table

```html
<table class="v-table"></table>

<!-- or if you need more or less spacing in the table -->
<table class="v-table" data-density="compact"></table>
<table class="v-table" data-density="relaxed"></table>
```

### Spinner

```html
<span class="v-spinner"></span>
```

Customizable via CSS custom properties on the element:

- `--spinner-size` (default: `1.25lh`)
- `--spinner-color` (default: `currentColor`)
- `--spinner-speed` (default: `1s`)

### Icon

```html
<span class="v-icon" data-v-icon="plus"></span>
<span class="v-icon" data-v-icon="pencil"></span>
<span class="v-icon" data-v-icon="cage"></span>
```

Icons inherit color from their parent. For custom icons, set `--icon-src` to an SVG data URI.

---

## Misc

```html
<!-- overflow: hidden -->
<div class="of-hidden"></div>

<!-- overflow: clip -->
<div class="of-clip"></div>

<!-- overflow: scroll -->
<div class="of-scroll"></div>

<!-- aspect-ratio: 1 / 1 -->
<div class="aspect-square"></div>
```
