---
title: Modal
description: A token creation dialog with copy and an action footer.
group: overlays
---

```html
<div
  class="surface-base w-max-7 b-all b-fait br-xl shadow-mid p-s stack-v gap-s of-clip"
>
  <div class="v-typeset">
    <h4 class="fw-bold fs-xs tt-uppercase">Create token</h4>
    <p>
      Enter a unique name for your token to differentiate it from other tokens
      and then select the scope.
    </p>
    <p>Some content contained within the modal.</p>
  </div>
  <div class="-mx-s -mb-s px-s py-2xs b-t bc-subtle surface-tinted stack-h">
    <button class="v-button mr-auto" data-variant="outlined" data-size="small">
      Cancel
    </button>
    <button class="v-button px-l" data-variant="filled" data-size="small">
      Submit
    </button>
  </div>
</div>
```
