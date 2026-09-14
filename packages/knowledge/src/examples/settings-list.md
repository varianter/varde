---
title: Settings list
description: Rows separated by faint bottom borders, each with an icon, a label, and a trailing control.
group: Data display
---

```html
<div class="surface-base b-all bc-subtle br-l of-clip w-max-7">
  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="v-icon ink-subtle fs-xs" data-v-icon="pencil"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Display name</p>
      <p class="fs-s ink-subtle">How you appear to others</p>
    </div>
    <button class="v-button" data-size="small" data-variant="outlined">
      Edit
    </button>
  </div>

  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="v-icon ink-subtle fs-xs" data-v-icon="plus"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Language</p>
      <p class="fs-s ink-subtle">Used across the app</p>
    </div>
    <select class="v-select" data-size="small">
      <option>English</option>
      <option>Norsk</option>
      <option>Svenska</option>
    </select>
  </div>

  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="v-icon ink-subtle fs-xs" data-v-icon="pencil"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Email notifications</p>
      <p class="fs-s ink-subtle">Receive updates by email</p>
    </div>
    <input class="v-checkbox" type="checkbox" checked />
  </div>
</div>
```
