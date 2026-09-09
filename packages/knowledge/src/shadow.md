---
title: Shadow
description: The three elevation utilities.
---

Three elevations: `.shadow-low`, `.shadow-mid`, `.shadow-high`. Each is a multi-layer `box-shadow` with alpha falloff per layer, color inherited from the `--shadow` custom property (falls back to `--palette-grey-800`).

## Usage

```html
<div class="stack gap-xl py-xl">
  <div class="shadow-low surface-base br-m p-m">Low</div>
  <div class="shadow-mid surface-base br-m p-m">Medium</div>
  <div class="shadow-high surface-base br-m p-m">High</div>
</div>
```
