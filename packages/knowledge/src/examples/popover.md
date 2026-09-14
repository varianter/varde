---
title: Popover
description: A large popover that combines a form and a details list.
group: Overlays
---

This one leverages a popover, a details list, and a form

```html
<button type="button" class="v-button" popovertarget="demo-default">
  Open popover
</button>

<div
  id="demo-default"
  class="v-popover w-full"
  data-backdrop
  popover="auto"
  style="max-width: 68rem;"
>
  <div
    class="d-block p-l stack-v surface-tinted br-xl shadow-high"
    stagger-items="soft"
  >
    <div class="stack-h gap-m items-start">
      <div class="w-max-4">
        <h1 class="lh-tight">Get started with Varde</h1>
        <p class="ink-subtle mt-xs">It's really simple – anyone could do it!</p>
      </div>

      <div class="shadow-mid flex-1 surface-base br-l of-clip">
        <div class="px-l-xl py-m b-b bc-subtle stack-v">
          <label class="fw-medium mb-3xs">Where is your endpoint?</label>
          <input
            value="https://varde.variant.dev/api"
            type="text"
            class="v-input"
          />
        </div>

        <div class="px-l-xl py-m b-b bc-subtle stack-v">
          <label class="fw-medium mb-3xs">Your repo</label>
          <input
            value="https://varde.variant.dev/api"
            type="text"
            class="v-input"
          />
        </div>

        <color-mode
          palette="periwinkle"
          class="d-block px-l-xl py-m surface-dyed"
        >
          <details>
            <summary class="fw-medium stack-h">
              <p class="mr-auto">Not yet ready to implement?</p>
              <div
                type="button"
                data-variant="tinted"
                data-size="small"
                class="v-button"
              >
                Tell me more
              </div>
            </summary>
            <div class="v-typeset py-s">
              <p class="fw-medium">
                Get started and try Varde by following these steps
              </p>
              <ol>
                <li>Link to</li>
                <li>Run prompt <code>???</code></li>
                <li>Profit</li>
              </ol>
              <p>
                For more details see
                <a href="https://varde.variant.dev/docs">Varde docs</a>
              </p>
            </div>
          </details>
        </color-mode>
      </div>
    </div>
    <div class="stack-h mt-l">
      <button
        type="button"
        class="v-button mr-auto"
        data-variant="tinted"
        popovertargetaction="hide"
        popovertarget="demo-default"
      >
        Cancel
      </button>
      <button type="button" class="v-button">Go, go, go!</button>
    </div>
  </div>
</div>
```
