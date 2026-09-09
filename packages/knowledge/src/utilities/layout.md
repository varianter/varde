---
title: Layout
description: Flex-based layout primitives. Stack things vertically or horizontally, control sizing, and distribute space. All stacks use flex-wrap by default — no media queries needed. Items wrap naturally when space runs out, adapting to zoom, font size changes, and container resizing.
---

## Vertical Stack

The default `.stack-v` is a vertical flex column. Use it for any top-to-bottom flow.

```html
<div class="stack-v gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">First</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Second</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Third</span></div>
</div>
```

## Horizontal Stacks

Three horizontal variants control cross-axis alignment. All wrap by default — use `.nowrap` only when you're certain items should never wrap.

`.stack-h` — centered (default)

```html resize
<div class="stack-h gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">A</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold"><div style="height: 4rem; display: flex; align-items: center;">Tall</div></span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">C</span></div>
</div>
```

`.stack-h items-start` — top-aligned

```html resize
<div class="stack-h items-start gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">A</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold"><div style="height: 4rem; display: flex; align-items: center;">Tall</div></span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">C</span></div>
</div>
```

`.stack-h items-end` — bottom-aligned

```html resize
<div class="stack-h items-end gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">A</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold"><div style="height: 4rem; display: flex; align-items: center;">Tall</div></span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">C</span></div>
</div>
```

`.stack-h` — items wrap when space runs out

```html resize
<div class="stack-h gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Alpha</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Bravo</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Charlie</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Delta</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Echo</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Foxtrot</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Golf</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Hotel</span></div>
</div>
```

`.nowrap` — forced single line (use sparingly)

```html resize
<div class="stack-h nowrap gap-s of-scroll">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Alpha</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Bravo</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Charlie</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Delta</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Echo</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Foxtrot</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Golf</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Hotel</span></div>
</div>
```

## Flex Sizing

Control how items grow and shrink within a stack.

`.grow` — flex-grow: 1

```html resize
<div class="stack-h gap-s">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Fixed</span></div>
  <div class="grow">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.grow (fills remaining space)</span></div>
  </div>
</div>
```

`.flex-1` — flex: 1 (equal sizing)

```html resize
<div class="stack-h gap-s">
  <div class="flex-1">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.flex-1</span></div>
  </div>
  <div class="flex-1">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.flex-1</span></div>
  </div>
  <div class="flex-1">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.flex-1</span></div>
  </div>
</div>
```

`.shrink` — flex-shrink: 1

```html resize
<div class="stack-h nowrap gap-s">
  <div class="grow">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.grow</span></div>
  </div>
  <div class="shrink">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">.shrink (can compress)</span></div>
  </div>
</div>
```

## Distributing Space

Instead of justify-content, use margin auto on child elements. This gives you precise control over which item pushes away from the others.

`.ml-auto` — push last item right

```html resize
<div class="stack-h gap-s b-all bc-default p-s br-m">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Logo</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Nav</span></div>
  <div class="ml-auto">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Sign In</span></div>
  </div>
</div>
```

`.mx-auto` — center an item

```html resize
<div class="stack-h gap-s b-all bc-default p-s br-m">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Left</span></div>
  <div class="mx-auto">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Centered</span></div>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Right</span></div>
</div>
```

`.mr-auto` — push remaining items right (resize to see wrap behavior)

```html resize
<div class="stack-h gap-s b-all bc-default p-s br-m">
  <div class="mr-auto">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Logo</span></div>
  </div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Sign In</span></div>
</div>
```

`.mt-auto` — push item to bottom

```html
<div class="stack-v gap-s b-all bc-default p-s br-m" style="height: 18rem;">
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Title</span></div>
  <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Description</span></div>
  <div class="mt-auto">
    <div class="fs-s fw-medium px-xs py-2xs br-m demo-box surface-dyed"><span class="ink-default fw-bold">Action button</span></div>
  </div>
</div>
```
