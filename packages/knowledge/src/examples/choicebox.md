---
title: Choicebox
description: A selectable card pair that swaps its palette on selection.
---

Inspiration:
https://vercel.com/geist/choicebox

This is where JS would come in hand to switch between `palette="blue|grey"` when the radio is selected.

```html
<div class="stack-h gap-s">
  <color-mode palette="blue" class="d-block flex-1  br-m  surface-dyed">
    <label
      class="stack-h gap-m p-xs bg-wash:hover bc-prominent b-all   br-inherit"
    >
      <div class="mr-auto">
        <h5 class="ink-subtle fw-medium fs-m">Pro trial</h5>
        <p class="ink-subtle">Free for two weeks</p>
      </div>
      <input type="radio" class="v-radio" name="trial" checked />
    </label>
  </color-mode>

  <color-mode
    palette="grey"
    class="d-block flex-1 b-all bc-prominent br-m  surface-dyed "
  >
    <label class="stack-h gap-m p-xs bg-wash:hover">
      <div class="mr-auto">
        <h5 class="ink-subtle fw-medium fs-m">Pro trial</h5>
        <p class="ink-subtle">Free for two weeks</p>
      </div>
      <input type="radio" class="v-radio" name="trial" />
    </label>
  </color-mode>
</div>
```
