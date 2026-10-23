---
title: Popover
description: An opt-in helper for the native Popover API. Layer on data-type, data-side, data-align, and data-backdrop to control positioning and transitions.
---

`.v-popover` is an opt-in helper for the native Popover API. Start with a bare `.v-popover` and add only what you need with `data-type`, `data-side`, `data-align`, and `data-backdrop`.

It is _very_ important to **NOT** set any `display` properties (like `stack-v/stack-h` or `d-block/d-grid`) on `v-popover`. This is because the popover relies on User Agent styling to do its thing. Much better to let child element carry background, borders or shadows.

## Default

A `.v-popover` with no attributes defaults to a centered dialog-like popover.

```html
<button type="button" class="v-button" popovertarget="demo-default">
  Open popover
</button>
<div id="demo-default" class="v-popover p-m" popover="auto">
  <div class="p-l stack-v surface-dyed br-m shadow-mid" stagger-items>
    <a
      class="stack-v fs-xs px-3xs py-3xs"
      href="/fundamentet/formaal-og-verdier"
    >
      <span class="fw-bold ink-default">Formål og verdier</span>
      <span class="subnav-description ink-subtle"
        >Hvorfor vi finnes, og verdiene som styrer valgene våre</span
      >
    </a>
    <a
      class="stack-v fs-xs px-3xs py-3xs"
      href="/fundamentet/formaal-og-verdier"
    >
      <span class="fw-bold ink-default">Formål og verdier</span>
      <span class="subnav-description ink-subtle"
        >Hvorfor vi finnes, og verdiene som styrer valgene våre</span
      >
    </a>
    <a
      class="stack-v fs-xs px-3xs py-3xs"
      href="/fundamentet/formaal-og-verdier"
    >
      <span class="fw-bold ink-default">Formål og verdier</span>
      <span class="subnav-description ink-subtle"
        >Hvorfor vi finnes, og verdiene som styrer valgene våre</span
      >
    </a>
  </div>
</div>
```

## Dialog

`data-type="dialog"` adds a scale+fade transition. Add `data-backdrop` for a visible overlay behind it.

```html
<button type="button" class="v-button" popovertarget="demo-dialog">
  Open dialog
</button>
<div
  id="demo-dialog"
  class="v-popover"
  popover="auto"
  data-type="dialog"
  data-backdrop
>
  <div class="stack-v of-clip br-m shadow-high">
    <color-mode palette="grey" class="d-block surface-tinted">
      <div
        class="px-l-xl pt-l-xl pb-s stack-v"
        style="max-width: 560px;"
        stagger-items
      >
        <h2 class="fs-xl fw-bold">Er du en Variant?</h2>
        <p class="mt-s">
          A centered dialog with a backdrop overlay. Click outside or press
          Escape to dismiss.
        </p>
        <div class="stack-v gap-2xs mt-xl">
          <color-mode class="contents" palette="blue">
            <button
              type="button"
              class="v-button"
              popovertarget="demo-dialog"
              popovertargetaction="hide"
            >
              Kom igang
            </button>
          </color-mode>
          <button
            type="button"
            class="v-button"
            data-variant="tinted"
            popovertarget="demo-dialog"
            popovertargetaction="hide"
          >
            Jeg er allrede en Variant
          </button>
        </div>
      </div>
    </color-mode>
  </div>
</div>
```

## Drawer

`data-type="drawer"` attaches to an edge and slides in. Defaults to the right edge. Use `data-side` to pick an edge.

```html
<div class="stack-h gap-xs">
  <button
    type="button"
    class="v-button"
    data-variant="tinted"
    popovertarget="demo-drawer-right"
  >
    Right
  </button>
  <button
    type="button"
    class="v-button"
    data-variant="tinted"
    popovertarget="demo-drawer-left"
  >
    Left
  </button>
  <button
    type="button"
    class="v-button"
    data-variant="tinted"
    popovertarget="demo-drawer-bottom"
  >
    Bottom
  </button>
</div>

<div
  id="demo-drawer-right"
  class="v-popover"
  popover="auto"
  data-type="drawer"
  data-backdrop="true"
  style="width: 320px;"
>
  <div class="p-l stack-v gap-m surface-base shadow-high" style="height: 100%;">
    <h2 class="fs-l fw-bold">Right drawer</h2>
    <p>Slides in from the right edge. Width is up to you.</p>
  </div>
</div>

<div
  id="demo-drawer-left"
  class="v-popover"
  popover="auto"
  data-type="drawer"
  data-side="left"
  data-backdrop="true"
  style="width: 320px;"
>
  <div class="p-l stack-v gap-m surface-base shadow-high" style="height: 100%;">
    <h2 class="fs-l fw-bold">Left drawer</h2>
    <p>Slides in from the left edge.</p>
  </div>
</div>

<div
  id="demo-drawer-bottom"
  class="v-popover"
  popover="auto"
  data-type="drawer"
  data-side="bottom"
  data-backdrop="true"
  style="max-height: 40vh;"
>
  <div
    class="p-l stack-v gap-m surface-base shadow-high"
    style="height: 100%;"
    stagger-items
  >
    <h2 class="fs-l fw-bold">Bottom drawer</h2>
    <p>Slides up from the bottom edge.</p>
  </div>
</div>
```

## Tooltip

`data-type="tooltip"` uses the popover's implicit anchor of the triggering element. No `anchor-name` setup is needed. `data-side` picks top or bottom (defaults to top); `data-align` picks which edges line up — `left`, `center`, or `right` (defaults to `center`). It flips automatically to stay in view.

```html
<div class="stack-v gap-l py-3xl">
  <div class="stack-h gap-xs justify-center">
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-top-left"
    >
      Top left
    </button>
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-top"
    >
      Top
    </button>
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-top-right"
    >
      Top right
    </button>
  </div>

  <div class="stack-h gap-xs justify-center">
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-bottom-left"
    >
      Bottom left
    </button>
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-bottom"
    >
      Bottom
    </button>
    <button
      type="button"
      class="v-button"
      data-variant="tinted"
      popovertarget="demo-tooltip-bottom-right"
    >
      Bottom right
    </button>
  </div>
</div>

<div
  id="demo-tooltip-top-left"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
  data-side="top"
  data-align="left"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Above · left edges line up
  </div>
</div>

<div
  id="demo-tooltip-top"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Above · centred
  </div>
</div>

<div
  id="demo-tooltip-top-right"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
  data-side="top"
  data-align="right"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Above · right edges line up
  </div>
</div>

<div
  id="demo-tooltip-bottom-left"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
  data-side="bottom"
  data-align="left"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Below · left edges line up
  </div>
</div>

<div
  id="demo-tooltip-bottom"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
  data-side="bottom"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Below · centred
  </div>
</div>

<div
  id="demo-tooltip-bottom-right"
  class="v-popover my-2xs"
  popover="auto"
  data-type="tooltip"
  data-side="bottom"
  data-align="right"
>
  <div class="surface-base b-all bc-subtle br-m shadow-mid px-s py-2xs fs-s">
    Below · right edges line up
  </div>
</div>
```
