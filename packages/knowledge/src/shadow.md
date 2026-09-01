---
title: Shadow
description: The three elevation utilities.
---

Three elevations: `.shadow-low`, `.shadow-medium`, `.shadow-high`. Each is a multi-layer `box-shadow` with alpha falloff per layer, color inherited from the `--shadow` custom property (falls back to `--palette-grey-800`).

## Usage

```html
<div class="stack gap-xl py-xl">
  <div class="shadow-low bg-surface-base br-m p-m">Low</div>
  <div class="shadow-medium bg-surface-base br-m p-m">Medium</div>
  <div class="shadow-high bg-surface-base br-m p-m">High</div>
</div>
```
