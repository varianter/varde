---
title: Tabs
description: "A tab strip built three ways: with button variants, inverted color-modes, or plain links."
group: Navigation
---

Using several `.v-button`, you can use different variants to toggle which one looks active. This would require JS, because you'd need to toggle from `data-variant="outlined` to `data-variant="filled`

```html
<button
  role="tab"
  class="v-button br-pill"
  data-size="small"
  data-variant="outlined"
>
  Not active
</button>
<button
  role="tab"
  class="v-button br-pill"
  data-size="small"
  data-variant="outlined"
>
  Not active
</button>
<button
  role="tab"
  aria-selected="true"
  class="v-button br-pill"
  data-size="small"
  data-variant="filled"
>
  Active
</button>
```

Or, we might do `<color-mode>` to inverted and the button from `data-variant="plain` to `data-variant="tinted`:

```html
<div class="stack-h of-clip br-pill b-all" style="width: max-content;">
  <color-mode class="">
    <div class="v-button br-none" data-size="small" data-variant="plain">
      Not selected
    </div>
  </color-mode>
  <color-mode inverted>
    <div class="v-button  br-none" data-size="small" data-variant="tinted">
      Selected
    </div>
  </color-mode>
  <color-mode class="">
    <div class="v-button  br-none" data-size="small" data-variant="plain">
      Not selected
    </div>
  </color-mode>
</div>
```

Without buttons, only `color-mode`:

```html
<color-mode
  class="stack-h br-pill of-clip b-all  mt-xl"
  style="width: max-content;"
>
  <color-mode class="surface-dyed b-r bc-subtle b-none:last-child d-block ">
    <a href="#" class="d-block py-2xs px-s bg-wash:hover fw-medium fs-s"
      >Not selected</a
    >
  </color-mode>
  <color-mode
    inverted
    class="surface-dyed b-r bc-subtle b-none:last-child d-block "
  >
    <a href="#" class="d-block py-2xs px-s bg-wash:hover fw-medium fs-s">
      Selected</a
    >
  </color-mode>
  <color-mode class="surface-dyed b-r bc-subtle b-none:last-child d-block ">
    <a href="#" class="d-block py-2xs px-s bg-wash:hover fw-medium fs-s"
      >Not selected</a
    >
  </color-mode>
  <color-mode class="surface-dyed b-r bc-subtle b-none:last-child d-block ">
    <a href="#" class="d-block py-2xs px-s bg-wash:hover fw-medium fs-s"
      >Not selected</a
    >
  </color-mode>
</color-mode>
```
