---
title: Choicebox
description: A selectable card pair that swaps its palette on selection.
group: forms
---

Inspiration:
https://vercel.com/geist/choicebox

This is where JS would come in hand to switch between `palette="blue|grey"` when the radio is selected.

```html
<div class="stack-h gap-xs" data-palette-group>
  <color-mode palette="blue" class="d-block flex-1 br-m surface-tinted">
    <label
      class="stack-h gap-m p-xs bg-wash:hover b-all bc-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">Utvikler</h5>
        <p class="ink-subtle">Jepp, utvikler, ja!</p>
      </div>
      <input type="radio" class="v-radio" name="trial" checked />
    </label>
  </color-mode>

  <!-- not selected — note the classes are identical -->
  <color-mode palette="grey" class="d-block flex-1 br-m surface-tinted">
    <label
      class="stack-h gap-m p-xs bg-wash:hover b-all bc-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">Designer</h5>
        <p class="ink-subtle">Nice. Very nice.</p>
      </div>
      <input type="radio" class="v-radio" name="trial" />
    </label>
  </color-mode>

  <color-mode palette="grey" class="d-block flex-1 br-m surface-tinted">
    <label
      class="stack-h gap-m p-xs bg-wash:hover b-all bc-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">No thanks</h5>
        <p class="ink-subtle">I'm good</p>
      </div>
      <input type="radio" class="v-radio" name="trial" />
    </label>
  </color-mode>
</div>
```
