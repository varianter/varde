---
title: Spacing
description: Padding, margin, and gap utilities for setting space inside and between elements. Prefer gap for flex containers, padding for inner space, and margin for outer space.
---

## The spacing scale

All spacing utilities share one scale: `3xs` → `2xs` → `xs` → `s` → `m` → `l` → `xl` → `2xl` → `3xl` → `4xl`. Treat `m` as the baseline (usually `1rem`), then step up or down.

```html
<table class="v-table">
  <thead>
    <tr>
      <th>Token</th>
      <th>Size</th>
      <th>Use for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>4xs</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-4xs); height: 1.5rem;"
        ></div>
      </td>
      <td>Tightest — inline text spacing, tight components</td>
    </tr>
    <tr>
      <td><code>3xs</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-3xs); height: 1.5rem;"
        ></div>
      </td>
      <td>Tightest — inline text spacing, tight components</td>
    </tr>
    <tr>
      <td><code>2xs</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-2xs); height: 1.5rem;"
        ></div>
      </td>
      <td>Very tight — compact lists, dense layouts</td>
    </tr>
    <tr>
      <td><code>xs</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-xs); height: 1.5rem;"
        ></div>
      </td>
      <td>Tight — form field groups, related items</td>
    </tr>
    <tr>
      <td><code>s</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-s); height: 1.5rem;"
        ></div>
      </td>
      <td>Compact — card content, button groups</td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-m); height: 1.5rem;"
        ></div>
      </td>
      <td>Default — general purpose spacing</td>
    </tr>
    <tr>
      <td><code>l</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-l); height: 1.5rem;"
        ></div>
      </td>
      <td>Comfortable — section padding, breathing room</td>
    </tr>
    <tr>
      <td><code>xl</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-xl); height: 1.5rem;"
        ></div>
      </td>
      <td>Spacious — major sections, emphasis</td>
    </tr>
    <tr>
      <td><code>2xl</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-2xl); height: 1.5rem;"
        ></div>
      </td>
      <td>Very spacious — page sections, hero spacing</td>
    </tr>
    <tr>
      <td><code>3xl</code></td>
      <td>
        <div
          class="bg-currentcolor ink-subtle demo-box"
          style="width: var(--spacing-3xl); height: 1.5rem;"
        ></div>
      </td>
      <td>Generous — page-level spacing</td>
    </tr>
  </tbody>
</table>
```

**Use gap when…**

- Spacing children in a flex container (`.stack-v` or `.stack-h`)
- Consistent spacing between many items
- Spacing that adapts when items wrap
- The default

**Use padding when…**

- Inner space inside an element (cards, buttons, containers)
- Breathing room around content
- Different spacing per side

**Use margin when…**

- No flex container for a gap
- Pushing one element away from others
- Auto-centering (`.mx-auto`, `.ml-auto`, etc.)
- Negative spacing to overlap or pull elements

**Prefer gap over margin because…**

- Gap doesn't collapse or interact with neighboring margins
- Gap only adds space between items, not at the edges
- Gap is easier to reason abouttain

## Gap

Use `gap-*` on flex containers (`.stack-v` or `.stack-h`) to space children. No margin math.

```html
<div class="stack-v gap-xs">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 1</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 2</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 3</span>
  </div>
</div>
```

```html
<div class="stack-v gap-m">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 1</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 2</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 3</span>
  </div>
</div>
```

```html
<div class="stack-v gap-l">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 1</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 2</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">Item 3</span>
  </div>
</div>
```

Set vertical spacing with `gap-row-*`, horizontal with `gap-column-*`.

```html
<div class="stack-h gap-row-l gap-column-2xs">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">A</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">B</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">C</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">D</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">E</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">F</span>
  </div>
</div>
```

```html
<div class="stack-h gap-row-2xs gap-column-l">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">A</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">B</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">C</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">D</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">E</span>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
    <span class="ink-default fw-bold">F</span>
  </div>
</div>
```

## Negative margin

Use `-m-*` to pull elements closer or overlap them — for offsetting elements, breaking out of containers, or visual hierarchy.

```html
<div class="b-all bc-default br-m px-m py-l surface-dyed">
  <div class="mb-s">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
      <span class="ink-default fw-bold">Normal content</span>
    </div>
  </div>
  <div class="-mx-m">
    <div class="bg-brand-subtle p-s">
      <span class="fs-s">Full-width section with .-mx-m</span>
    </div>
  </div>
  <div class="mt-s">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed">
      <span class="ink-default fw-bold">Normal content</span>
    </div>
  </div>
</div>
```
