---
title: Split buttons
description: A button with a dropdown trigger, in three variants.
group: Forms & inputs
---

Not sure if it is possible, but here we go!
https://vercel.com/geist/split-button

Edit: turns out it's somewhat possible. We're using two buttons in a `stack-h nowrap`, when using a

```html
<div class="stack-h nowrap">
  <button class="v-button br-tr-none br-br-none px-l">Save</button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    class="aspect-square br-bl-none br-tl-none v-button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>

<div class="stack-h nowrap">
  <button data-variant="tinted" class="v-button br-tr-none br-br-none px-l">
    Save
  </button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    data-variant="tinted"
    class="aspect-square br-bl-none br-tl-none v-button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>

<div class="stack-h nowrap">
  <button data-variant="outlined" class="v-button br-tr-none br-br-none px-l">
    Save
  </button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    data-variant="outlined"
    class="aspect-square br-bl-none br-tl-none v-button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>
<div
  id="split-button-popover"
  class="v-popover"
  popover="auto"
  data-type="tooltip"
  data-position="bottom"
>
  <div
    class="p-3xs b-all surface-base stack-v br-l w-max-4 fs-s m-2xs"
    stagger-items="from-above"
  >
    <div class="p-3xs bg-wash:hover br-m stack-v gap-3xs" href="#">
      <h4>Save</h4>
      <p class="ink-subtle">Save charges</p>
    </div>
    <div class="p-3xs bg-wash:hover br-m stack-v gap-3xs" href="#">
      <h4>Save + Redeploy</h4>
      <p class="ink-subtle">
        Save changes and create a new production deployment
      </p>
    </div>
  </div>
</div>
```
