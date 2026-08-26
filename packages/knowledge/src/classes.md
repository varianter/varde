# Varde CSS — Classes Reference

## Spacing scale

`3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl`
From smallest to largest. `m` equals `1rem`.

---

## Layout

**Stack (flexbox):**

```html
<!-- column, top-aligned -->
<div class="stack gap-m"></div>

<!-- row, vertically centered -->
<div class="stack-horizontal gap-s"></div>

<!-- row, aligned to top -->
<div class="stack-horizontal items-start gap-s"></div>

<!-- row, aligned to bottom -->
<div class="stack-horizontal items-end gap-s"></div>

<!-- row, children stretch full height -->
<div class="stack-horizontal items-stretch"></div>
```

Flex modifiers: `.grow` `.shrink` `.flex-1` `.nowrap` `.inline-flex`

Alignment: `.items-start|end|center|stretch` and `.justify-start|end|center|between` on the container; `.self-start|end|center|stretch` on a single child. `.justify-self-start|end|center|stretch` positions one child on the main axis in grid layouts (no effect in flex).

---

## Spacing utilities

**Padding** — prefix `p`, direction optional (`x` `y` `l` `r` `t` `b`):

```html
<div class="p-m px-l pt-xs"></div>
```

**Margin** — prefix `m`, direction optional (`x` `y` `l` `r` `t` `b`):

```html
<div class="mt-xl mx-auto ml-auto"></div>
```

Negative margins: `mt--s` `ml--m` etc.

When they overlap, the more specific utility always wins, regardless of class order: single side (`pt-`) beats axis (`px-`), which beats all sides (`p-`).

**Gap** — for flex/grid containers:

```html
<div class="gap-m">
  <div class="gap-row-s gap-column-xl"></div>
</div>
```

---

## Typography

```html
<div class="stack gap-xs">
  <span class="fs-xs">fs-xs</span>
  <span class="fs-s">fs-s</span>

  <!-- this is default and is set at html element. -->
  <span class="fs-m">fs-m</span>
  <span class="fs-l">fs-l</span>
  <span class="fs-xl">fs-xl</span>
  <span class="fs-2xl">fs-2xl</span>
  <span class="fs-3xl">fs-3xl</span>
  <span class="fs-4xl">fs-4xl</span>

  <!-- font-weight: 400 -->
  <span class="t-regular">t-regular</span>

  <!-- font-weight: 500 -->
  <span class="t-medium">t-medium</span>

  <!-- font-weight: 600 -->
  <span class="t-bold">t-bold</span>

  <span class="t-left">t-left</span>
  <span class="t-center">t-center</span>
  <span class="t-right">t-right</span>
  <span class="t-uppercase">t-uppercase</span>

  <span class="lh-tight">lh-tight</span>
  <span class="lh-normal">lh-normal</span>
  <span class="lh-relaxed">lh-relaxed</span>
</div>
```

---

## Colors

Never hardcode colors. Never use `--palette-*` variables directly. Always use semantic classes.

**Intents:** `neutral` `brand` `danger` `warning` `success` `info`
**Intensities:** `subtle` `medium` `strong`

**Background:**

```html
<!-- Surfaces -->
<div class="bg-surface-base"></div>
<div class="bg-surface-tinted"></div>
<div class="bg-surface-dyed"></div>
```

**Text (foreground):**

```html
<p class="fg-default" />
<!-- body text -->
<p class="fg-muted" />
<!-- secondary/helper text -->
<p class="fg-emphasis" />
<!-- headings, labels -->
<p class="fg-inverted" />
<!-- text on dark backgrounds -->

<!-- Intent text -->
<p class="fg-danger-strong" />
<p class="fg-success-medium" />
```

**Border color:**

```html
<!-- everyday borders -->
<div class="b-default" />

<!-- quieter lines: often for niceness rather than structural integrity -->
<div class="b-muted" />

<!-- prominent structural lines: rarely used -->
<div class="b-emphasis" />

<!-- Intent borders — only when border communicates status -->
<div class="b-danger-strong" />
```

---

## Borders

**Border sides:**

```html
<div class="b-all" />
<!-- all sides, 1px solid -->
<div class="b-t" />
<!-- top only -->
<div class="b-r" />
<!-- right only -->
<div class="b-b" />
<!-- bottom only -->
<div class="b-l" />
<!-- left only -->
<div class="b-last-none" />
<!-- removes border from :last-child -->
<div class="b-first-none" />
<!-- removes border from :first-child -->
```

Always pair a border side class with a border color class:

```html
<li class="b-b b-default" />
```

**Border radius:**

```html
<!-- removes border-radius -->
<div class="br-none" />

<!-- inherits border-radius from parent, useful for when clipping occurs -->
<div class="br-inherit" />

<!-- 2px -->
<div class="br-xs" />

<!-- 4px -->
<div class="br-s" />

<!-- 8px -->
<div class="br-m" />

<!-- 12px -->
<div class="br-l" />

<!-- 16px -->
<div class="br-xl" />

<!-- 24px -->
<div class="br-2xl" />

<!-- 9999px -->
<div class="br-pill" />

<!-- 50% -->
<div class="br-circle" />
```

---

## Components

### Button

Apply `.button` to `<button>` or `<a>`. Axes are independent and combinable.

```html
<!-- Color (default: primary) -->
<button class="button">Primary</button>
<button class="button" data-color="secondary">Secondary</button>
<button class="button" data-color="danger">Danger</button>

<!-- Variant (default: filled) -->
<button class="button" data-variant="tinted">Tinted</button>
<button class="button" data-variant="plain">Plain</button>

<!-- Size (default: medium) -->
<button class="button" data-size="small">Small</button>
<button class="button" data-size="large">Large</button>

<!-- or combined together -->
<button
  class="button"
  data-size="small"
  data-variant="plain"
  data-color="danger"
>
  Delete
</button>
```

### Form controls

```html
<input class="input" type="text" />
<input class="input" data-size="small" type="text" />
<input class="input" data-size="large" type="text" />

<textarea class="textarea"></textarea>
<select class="select"></select>

<input class="checkbox" type="checkbox" />
<input class="radio" type="radio" />
```

Invalid state (don't add custom error classes — use the attribute):

```html
<input class="input" aria-invalid="true" />
```

### Table

```html
<table class="table" />

<!-- or if you need more or less spacing in the table -->
<table class="table" data-density="compact" />
<table class="table" data-density="relaxed" />
```

### Spinner

```html
<span class="spinner"></span>
```

Customizable via CSS custom properties on the element:

- `--spinner-size` (default: `1.25lh`)
- `--spinner-color` (default: `currentColor`)
- `--spinner-speed` (default: `1s`)

### Icon

```html
<span class="icon" data-icon="plus"></span>
<span class="icon" data-icon="pencil"></span>
<span class="icon" data-icon="cage"></span>
```

Icons inherit color from their parent. For custom icons, set `--icon-src` to an SVG data URI.

---

## Misc

```html
<!-- overflow: hidden -->
<div class="of-hidden" />

<!-- overflow: clip -->
<div class="of-clip" />

<!-- overflow: scroll -->
<div class="of-scroll" />

<!-- aspect-ratio: 1 / 1 -->
<div class="aspect-ratio-1-1" />
```
