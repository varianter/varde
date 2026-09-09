---
title: Typography
description: Utility classes for font size, font weight, and text alignment.
---

## Font size

Use `fs-*` classes to set font size. The scale goes from `xs` to `4xl`.

```html
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-xs</code>
  <span class="fs-xs">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-s</code>
  <span class="fs-s">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-m</code>
  <span class="fs-m">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-l</code>
  <span class="fs-l">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-xl</code>
  <span class="fs-xl">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-2xl</code>
  <span class="fs-2xl">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-3xl</code>
  <span class="fs-3xl">The quick brown fox</span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fs-4xl</code>
  <span class="fs-4xl">The quick brown fox</span>
</div>
```

## Font weight

Use `fw-regular`, `fw-medium`, and `fw-bold` to control font weight.

```html
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fw-regular</code>
  <span class="fs-l fw-regular">The quick brown fox <span class="fs-xs ink-subtle fw-regular">(400)</span></span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fw-medium</code>
  <span class="fs-l fw-medium">The quick brown fox <span class="fs-xs ink-subtle fw-regular">(500)</span></span>
</div>
<div class="stack-h gap-m">
  <code class="fs-xs ink-subtle" style="min-width: 80px; flex-shrink: 0;">.fw-bold</code>
  <span class="fs-l fw-bold">The quick brown fox <span class="fs-xs ink-subtle fw-regular">(600)</span></span>
</div>
```

## Text alignment

Use `ta-left`, `ta-center`, and `ta-right` to control text alignment.

```html
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-left</code>
  <div class="ta-left p-s b-all bc-default br-m">The quick brown fox jumps over the lazy dog</div>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-center</code>
  <div class="ta-center p-s b-all bc-default br-m">The quick brown fox jumps over the lazy dog</div>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-right</code>
  <div class="ta-right p-s b-all bc-default br-m">The quick brown fox jumps over the lazy dog</div>
</div>
```

## Combining classes

Typography utilities compose naturally. Combine size, weight, and alignment as needed.

```html
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.fs-3xl .fw-bold .ta-center</code>
  <p class="fs-3xl fw-bold ta-center">Page Title</p>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.fs-s .fw-medium .ink-subtle</code>
  <p class="fs-s fw-medium ink-subtle">A subtle label or caption</p>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.fs-xl .fw-bold .ta-right</code>
  <p class="fs-xl fw-bold ta-right">Right-aligned heading</p>
</div>
```
