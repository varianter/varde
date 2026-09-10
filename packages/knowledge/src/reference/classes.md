---
title: Classes
description: Quick reference for Varde's utility and component classes.
---

The full class list, at a glance. For worked examples and the reasoning behind a topic, see the dedicated pages: [Spacing](/docs/reference/spacing), [Layout](/docs/reference/layout), [Typography](/docs/reference/typography), [Color](/docs/reference/color), [Widths](/docs/reference/widths), [Shadow](/docs/reference/shadow), [Buttons](/docs/reference/buttons), [Forms](/docs/reference/forms), and [Tables](/docs/reference/tables).

## Spacing scale

Every spacing utility shares one fluid scale. Each step maps to `var(--spacing-*)`. Smallest applies at narrow widths, largest at wide widths.

| Step  | Smallest | Largest |
| ----- | -------- | ------- |
| `4xs` | 2px      | 3px     |
| `3xs` | 4px      | 5px     |
| `2xs` | 8px      | 10px    |
| `xs`  | 12px     | 15px    |
| `s`   | 16px     | 20px    |
| `m`   | 24px     | 30px    |
| `l`   | 32px     | 40px    |
| `xl`  | 48px     | 60px    |
| `2xl` | 64px     | 80px    |
| `3xl` | 96px     | 120px   |

Margin and padding also accept one-up pairs (`4xs-3xs` … `2xl-3xl`) that ramp between adjacent steps in a single value.

## Spacing utilities

| Purpose | Prefix | Directions              | Example              |
| ------- | ------ | ----------------------- | -------------------- |
| Padding | `p`    | `x` `y` `l` `r` `t` `b` | `px-l`, `pt-xs`      |
| Margin  | `m`    | `x` `y` `l` `r` `t` `b` | `mt-xl`, `mx-auto`   |
| Gap     | `gap`  | `row` `column`          | `gap-m`, `gap-row-s` |

```html
<div class="p-m px-l pt-xs"></div>
<div class="mt-xl mx-auto ml-auto"></div>
<div class="stack-v gap-m"></div>
```

- `0` zeroes spacing: `p-0`, `m-0`, `gap-none`, `gap-column-0`.
- `auto` is margin-only: `m-auto`, `mx-auto`, `ml-auto`, `mt-auto`, `mb-auto`.
- Negative margins prefix `-`: `-mt-s`, `-ml-m`.
- When they overlap, the more specific utility wins regardless of class order: single side (`pt-`) beats axis (`px-`), which beats all sides (`p-`).

## Layout

**Stacks:**

| Class      | Description                           |
| ---------- | ------------------------------------- |
| `.stack-v` | Vertical column, top-aligned          |
| `.stack-h` | Horizontal row, vertically centered   |
| `.pile`    | Every child in one grid cell, stacked |

**Flex modifiers:**

| Class     | CSS                 |
| --------- | ------------------- |
| `.grow`   | `flex-grow: 1`      |
| `.shrink` | `flex-shrink: 1`    |
| `.flex-1` | `flex: 1`           |
| `.nowrap` | `flex-wrap: nowrap` |

**Alignment:**

| Axis               | On the container                                                 | On a single child                                                                    |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Cross (`align-*`)  | `items-start` `items-end` `items-center` `items-stretch`         | `self-start` `self-end` `self-center` `self-stretch`                                 |
| Main (`justify-*`) | `justify-start` `justify-end` `justify-center` `justify-between` | `justify-self-start` `justify-self-end` `justify-self-center` `justify-self-stretch` |

`justify-self-*` only works in grid. In flex, distribute main-axis space with `justify-*` on the container, `.grow`, or auto margins.

**Display:**

| Class               | CSS                              |
| ------------------- | -------------------------------- |
| `.d-block`          | `display: block`                 |
| `.d-inline`         | `display: inline`                |
| `.d-inline-block`   | `display: inline-block`          |
| `.d-inline-flex`    | `display: inline-flex`           |
| `.d-grid`           | `display: grid`                  |
| `.d-contents`       | `display: contents`              |
| `.grid-subgrid`     | `grid-template-columns: subgrid` |
| `.grid-all-columns` | `grid-column: 1 / -1`            |

**Position:**

| Class                                     | CSS                     |
| ----------------------------------------- | ----------------------- |
| `.pos-sticky`                             | `position: sticky`      |
| `.pos-absolute`                           | `position: absolute`    |
| `.pos-fixed`                              | `position: fixed`       |
| `.top-0` `.bottom-0` `.left-0` `.right-0` | `0` offset on that edge |

## Typography

**Font size** — a fluid scale, each step up roughly ×1.2–1.25:

| Class     | Step     |
| --------- | -------- |
| `.fs-xs`  | −2       |
| `.fs-s`   | −1       |
| `.fs-m`   | 0 (base) |
| `.fs-l`   | +1       |
| `.fs-xl`  | +2       |
| `.fs-2xl` | +3       |
| `.fs-3xl` | +4       |
| `.fs-4xl` | +5       |

**Weight, alignment, and transform:**

| Class           | Value                                |
| --------------- | ------------------------------------ |
| `.fw-regular`   | `font-weight: 400`                   |
| `.fw-medium`    | `font-weight: 525`                   |
| `.fw-bold`      | `font-weight: 650`                   |
| `.ta-left`      | `text-align: left`                   |
| `.ta-center`    | `text-align: center`                 |
| `.ta-right`     | `text-align: right`                  |
| `.tt-uppercase` | `text-transform: uppercase`          |
| `.t-tabular`    | `font-variant-numeric: tabular-nums` |

**Line height:**

| Class             | Value |
| ----------------- | ----- |
| `.lh-extra-tight` | 0.9   |
| `.lh-tight`       | 1     |
| `.lh-snug`        | 1.2   |
| `.lh-normal`      | 1.5   |
| `.lh-relaxed`     | 1.6   |

## Colors

Never hardcode colors. Never use `--palette-*` variables directly. Always use semantic classes, and color the container with `<color-mode>` rather than the element itself.

**Surfaces:**

| Class             | Use                  |
| ----------------- | -------------------- |
| `.surface-base`   | Default page surface |
| `.surface-tinted` | One step above base  |
| `.surface-dyed`   | Strongest surface    |

**Text (ink):**

| Class            | Use                   |
| ---------------- | --------------------- |
| `.ink-default`   | Body text             |
| `.ink-subtle`    | Secondary/helper text |
| `.ink-prominent` | Emphasized text       |

**Border color:**

| Class           | Use                     |
| --------------- | ----------------------- |
| `.bc-subtle`    | Decorative lines        |
| `.bc-default`   | Everyday borders        |
| `.bc-prominent` | Structural lines (rare) |

Escapes: `.bg-currentcolor` sets a background to `currentColor` (use sparingly), and `.bg-wash:hover` adds a hover wash that mixes in the mode's tint target.

## Borders

**Sides** (each is `1px solid`, set the color separately):

| Class    | Side   |
| -------- | ------ |
| `.b-all` | All    |
| `.b-t`   | Top    |
| `.b-r`   | Right  |
| `.b-b`   | Bottom |
| `.b-l`   | Left   |

**Width:**

| Class          | Width |
| -------------- | ----- |
| `.bw-hairline` | 0.5px |
| `.bw-thick`    | 2px   |

**Removal:**

| Class                                           | Removes                    |
| ----------------------------------------------- | -------------------------- |
| `.b-none`                                       | Border on all sides        |
| `.b-t-none` `.b-r-none` `.b-b-none` `.b-l-none` | Border on one side         |
| `.b-none:first-child`                           | Border from `:first-child` |
| `.b-none:last-child`                            | Border from `:last-child`  |

Always pair a border side class with a border color class:

```html
<li class="b-b bc-default"></li>
```

**Radius:**

| Class         | Value   |
| ------------- | ------- |
| `.br-none`    | 0       |
| `.br-inherit` | inherit |
| `.br-xs`      | 2px     |
| `.br-s`       | 4px     |
| `.br-m`       | 8px     |
| `.br-l`       | 12px    |
| `.br-xl`      | 16px    |
| `.br-2xl`     | 24px    |
| `.br-pill`    | 9999px  |
| `.br-circle`  | 50%     |

Reset a single corner with `.br-tl-none`, `.br-tr-none`, `.br-bl-none`, or `.br-br-none`.

## Shadows

| Class          | Elevation |
| -------------- | --------- |
| `.shadow-low`  | Low       |
| `.shadow-mid`  | Medium    |
| `.shadow-high` | High      |

## Widths

| Class                  | Value                               |
| ---------------------- | ----------------------------------- |
| `.w-full`              | `width: 100%`                       |
| `.w-auto`              | `width: auto`                       |
| `.w-fit`               | `width: fit-content`                |
| `.w-min-content`       | `width: min-content`                |
| `.w-max-content`       | `width: max-content`                |
| `.w-min-0`             | `min-width: 0`                      |
| `.w-max-0`–`.w-max-10` | `max-width` against the width scale |

## Components

### Button

Apply `.v-button` to `<button>` or `<a>`. Variant and size are independent; color comes from the surrounding `<color-mode>`.

| Attribute      | Values                                          |
| -------------- | ----------------------------------------------- |
| `data-variant` | `"filled"`, `"tinted"`, `"outlined"`, `"plain"` |
| `data-size`    | `"small"`, `"medium"`, `"large"`                |

```html
<button class="v-button" data-variant="outlined" data-size="small">
  Delete
</button>
```

### Form controls

| Class           | Element                   |
| --------------- | ------------------------- |
| `.v-input`      | `<input>`                 |
| `.v-textarea`   | `<textarea>`              |
| `.v-select`     | `<select>`                |
| `.v-checkbox`   | `<input type="checkbox">` |
| `.v-radio`      | `<input type="radio">`    |
| `.v-range`      | `<input type="range">`    |
| `.v-form-label` | `<label>`                 |

`data-size` scales controls; `aria-invalid="true"` marks an error without a custom class. For `.v-range`, keep `--range-progress` in sync with the input's value.

```html
<input class="v-input" type="text" />
<select class="v-select"></select>
<input class="v-range" type="range" />
```

### Table

| Attribute      | Values                                |
| -------------- | ------------------------------------- |
| `data-density` | `"default"`, `"compact"`, `"relaxed"` |

```html
<table class="v-table"></table>
```

### Spinner

```html
<span class="v-spinner"></span>
```

Customizable via CSS custom properties on the element:

| Property                 | Default          |
| ------------------------ | ---------------- |
| `--spinner-size`         | `1.25lh`         |
| `--spinner-color`        | `currentColor`   |
| `--spinner-speed`        | `1s`             |
| `--spinner-border-width` | `calc(size / 8)` |

### Icon

```html
<span class="v-icon" data-v-icon="plus"></span>
<span class="v-icon" data-v-icon="pencil"></span>
```

Built-in icons: `plus`, `pencil`. Icons inherit color from their parent. For a custom icon, set `--icon-src` to an SVG data URI.

### Link

`.v-link` styles a standalone `<a>`; inside `.v-typeset`, plain `<a>` tags are styled automatically.

## Misc

| Class            | Value                                              |
| ---------------- | -------------------------------------------------- |
| `.of-hidden`     | `overflow: hidden`                                 |
| `.of-clip`       | `overflow: clip`                                   |
| `.of-scroll`     | `overflow: scroll`                                 |
| `.aspect-square` | `aspect-ratio: 1 / 1`                              |
| `.list`          | `list-style-position: inside`, square `ul` bullets |
