---
title: Spacing
description: Padding, margin, and gap utilities for controlling space inside and between elements. Prefer gap for flex containers, padding for inner space, and margin sparingly for outer space.
---

## The spacing scale

All spacing utilities use the same scale: `3xs` → `2xs` → `xs` → `s` → `m` → `l` → `xl` → `2xl` → `3xl` → `4xl`. Think of `m` as your baseline (typically `1rem`), then step up or down as needed.

```html
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">3xs</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-3xs); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Tightest — inline text spacing, tight components</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">2xs</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-2xs); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Very tight — compact lists, dense layouts</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">xs</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-xs); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Tight — form field groups, related items</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">s</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-s); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Compact — card content, button groups</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">m</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-m); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Default — general purpose spacing</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">l</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-l); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Comfortable — section padding, breathing room</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">xl</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-xl); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Spacious — major sections, emphasis</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">2xl</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-2xl); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Very spacious — page sections, hero spacing</span>
</div>
<div class="stack-h items-start gap-s">
  <div class="stack-h gap-2xs" style="min-width: 140px;">
    <code class="fs-xs fw-medium" style="min-width: 3ch;">3xl</code>
    <div class="bg-currentcolor ink-subtle" style="width: var(--spacing-3xl); height: 1.5rem;"></div>
  </div>
  <span class="ink-subtle fs-xs">Generous — page-level spacing</span>
</div>
```

## Which spacing utility

**Use gap when…**

- Spacing children in a flex container (`.stack-v` or `.stack-h`)
- You want consistent spacing between multiple items
- You want spacing that adapts when items wrap
- This should be your first choice 90% of the time

**Use padding when…**

- You need inner space inside an element (cards, buttons, containers)
- You're creating breathing room around content
- You need different spacing on different sides of a container

**Use margin when…**

- You can't use gap (not in a flex container)
- You need to push a single element away from others
- You need auto-centering (`.mx-auto`, `.ml-auto`, etc.)
- You need negative spacing to overlap or pull elements

**Prefer gap over margin because…**

- Gap doesn't collapse or interact with neighboring margins
- Gap only affects the space *between* items, not before the first or after the last
- Gap is easier to reason about and maintain

## Gap

Use `gap-*` on flex containers (`.stack-v` or `.stack-h`) to space children. This is the cleanest way to add space — no margin math needed.

```html
<div class="stack-v gap-xs">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 1</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 2</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 3</span></div>
</div>
```

```html
<div class="stack-v gap-m">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 1</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 2</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 3</span></div>
</div>
```

```html
<div class="stack-v gap-l">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 1</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 2</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Item 3</span></div>
</div>
```

Control only vertical spacing with `gap-row-*`, or only horizontal spacing with `gap-column-*`.

```html
<div class="stack-h gap-row-l gap-column-2xs">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">A</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">B</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">C</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">D</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">E</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">F</span></div>
</div>
```

```html
<div class="stack-h gap-row-2xs gap-column-l">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">A</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">B</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">C</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">D</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">E</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">F</span></div>
</div>
```

## Negative margin

Use `-m-*` to pull elements closer or create overlapping layouts. Useful for offsetting elements, breaking out of containers, or creating visual hierarchy.

```html
<div class="b-all bc-default br-m px-m py-l surface-dyed">
  <div class="mb-s">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Normal content</span></div>
  </div>
  <div class="-mx-m">
    <div class="bg-brand-subtle p-s">
      <span class="fs-s">Full-width section with .-mx-m</span>
    </div>
  </div>
  <div class="mt-s">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Normal content</span></div>
  </div>
</div>
```
