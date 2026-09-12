---
title: Chips
description: Filter chips from pill buttons and an inverted color-mode.
---

This one utilizes an escape hatch

```html
<div class="stack-h gap-xs">
  <button
    type="button"
    class="v-button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Trondheim
  </button>
  <button
    type="button"
    class="v-button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Oslo
  </button>
  <color-mode inverted>
    <button
      type="button"
      class="v-button br-pill"
      data-size="small"
      data-variant="tinted"
    >
      Bergen
    </button>
  </color-mode>
  <button
    type="button"
    class="v-button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Stavanger
  </button>
</div>
```
