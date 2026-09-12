---
title: Pricing
description: Three tiers, with the middle one featured by inverting its `color-mode`.
---

```html
<div class="stack-h items-stretch gap-m">
  <color-mode>
    <div class="flex-1 surface-base b-all bc-subtle br-xl p-m stack-v">
      <div class="stack-v">
        <h3 class="fs-l fw-bold">Free</h3>
        <p class="fs-s ink-subtle mt-2xs">For personal projects.</p>
      </div>
      <div class="stack-h items-end gap-xs mt-m">
        <span class="fs-2xl fw-bold">$0</span>
        <span class="fs-s ink-subtle pb-2xs">/ month</span>
      </div>
      <ul class="list stack-v gap-2xs fs-s mt-s mb-m">
        <li>Up to 3 projects</li>
        <li>Community support</li>
        <li>1 GB storage</li>
      </ul>
      <button class="v-button mt-auto" data-variant="outlined">
        Start free
      </button>
    </div>
  </color-mode>

  <color-mode inverted palette="periwinkle">
    <div
      class="flex-1 surface-dyed b-all bc-subtle br-xl p-m stack-v shadow-high"
    >
      <div class="stack-v">
        <h3 class="fs-l fw-bold">Pro</h3>
        <p class="fs-s ink-subtle mt-2xs">For growing teams.</p>
      </div>
      <div class="stack-h items-end gap-xs mt-m">
        <span class="fs-2xl fw-bold">$20</span>
        <span class="fs-s ink-subtle pb-2xs">/ month</span>
      </div>
      <ul class="list stack-v gap-2xs fs-s mt-s mb-m">
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>100 GB storage</li>
      </ul>
      <button class="v-button mt-auto">Start free trial</button>
    </div>
  </color-mode>

  <color-mode>
    <div class="flex-1 surface-base b-all bc-subtle br-xl p-m stack-v">
      <div class="stack-v">
        <h3 class="fs-l fw-bold">Enterprise</h3>
        <p class="fs-s ink-subtle mt-2xs">For large organizations.</p>
      </div>
      <div class="stack-h items-end gap-xs mt-m">
        <span class="fs-2xl fw-bold">Custom</span>
      </div>
      <ul class="list stack-v gap-2xs fs-s mt-s mb-m">
        <li>SSO and audit logs</li>
        <li>Dedicated support</li>
        <li>Unlimited storage</li>
      </ul>
      <button class="v-button mt-auto" data-variant="outlined">
        Contact sales
      </button>
    </div>
  </color-mode>
</div>
```
