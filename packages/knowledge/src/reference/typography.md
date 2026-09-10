---
title: Typography
description: Utility classes for font size, font weight, and text alignment.
---

## Font size

Use `fs-*` classes to set font size. The scale goes from `xs` to `4xl`.

```html
<table class="v-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.fs-xs</code></td>
      <td class="fs-xs">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-s</code></td>
      <td class="fs-s">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-m</code></td>
      <td class="fs-m">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-l</code></td>
      <td class="fs-l">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-xl</code></td>
      <td class="fs-xl">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-2xl</code></td>
      <td class="fs-2xl">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-3xl</code></td>
      <td class="fs-3xl">The quick brown fox</td>
    </tr>
    <tr>
      <td><code>.fs-4xl</code></td>
      <td class="fs-4xl">The quick brown fox</td>
    </tr>
  </tbody>
</table>
```

## Font weight

Use `fw-regular`, `fw-medium`, and `fw-bold` to control font weight.

```html
<table class="v-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.fw-regular</code></td>
      <td class="fs-l fw-regular">
        The quick brown fox
        <span class="fs-xs ink-subtle fw-regular">(400)</span>
      </td>
    </tr>
    <tr>
      <td><code>.fw-medium</code></td>
      <td class="fs-l fw-medium">
        The quick brown fox
        <span class="fs-xs ink-subtle fw-regular">(500)</span>
      </td>
    </tr>
    <tr>
      <td><code>.fw-bold</code></td>
      <td class="fs-l fw-bold">
        The quick brown fox
        <span class="fs-xs ink-subtle fw-regular">(600)</span>
      </td>
    </tr>
  </tbody>
</table>
```

## Text alignment

Use `ta-left`, `ta-center`, and `ta-right` to control text alignment.

```html
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-left</code>
  <div class="ta-left p-s b-all bc-default br-m">
    The quick brown fox jumps over the lazy dog
  </div>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-center</code>
  <div class="ta-center p-s b-all bc-default br-m">
    The quick brown fox jumps over the lazy dog
  </div>
</div>
<div class="stack-v gap-2xs">
  <code class="fs-xs ink-subtle">.ta-right</code>
  <div class="ta-right p-s b-all bc-default br-m">
    The quick brown fox jumps over the lazy dog
  </div>
</div>
```
