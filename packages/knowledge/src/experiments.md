---
title: Experiments
description: Work-in-progress compositions built only from existing Varde utilities and components.
---

## Pagination

A row of outlined page buttons with one active, plus prev/next.

```html
<div class="stack-h gap-xs">
  <button
    class="button"
    data-size="small"
    data-variant="outlined"
    aria-label="Previous"
  >
    ‹
  </button>
  <button class="button" data-size="small" data-variant="outlined">1</button>
  <button class="button" data-size="small" data-variant="filled">2</button>
  <button class="button" data-size="small" data-variant="outlined">3</button>
  <button class="button" data-size="small" data-variant="outlined">4</button>
  <span class="fs-s ink-subtle px-2xs">…</span>
  <button class="button" data-size="small" data-variant="outlined">12</button>
  <button
    class="button"
    data-size="small"
    data-variant="outlined"
    aria-label="Next"
  >
    ›
  </button>
</div>
```

## Settings list

Rows separated by faint bottom borders, each with an icon, a label, and a trailing control.

```html
<div class="surface-base b-all bc-subtle br-l of-clip mw-7">
  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="icon ink-subtle fs-xs" data-icon="pencil"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Display name</p>
      <p class="fs-s ink-subtle">How you appear to others</p>
    </div>
    <button class="button" data-size="small" data-variant="outlined">
      Edit
    </button>
  </div>

  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="icon ink-subtle fs-xs" data-icon="plus"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Language</p>
      <p class="fs-s ink-subtle">Used across the app</p>
    </div>
    <select class="select" data-size="small">
      <option>English</option>
      <option>Norsk</option>
      <option>Svenska</option>
    </select>
  </div>

  <div class="stack-h gap-s px-s py-s b-b bc-subtle b-none:last-child">
    <span class="icon ink-subtle fs-xs" data-icon="pencil"></span>
    <div class="stack-v grow">
      <p class="fw-medium">Email notifications</p>
      <p class="fs-s ink-subtle">Receive updates by email</p>
    </div>
    <input class="checkbox" type="checkbox" checked />
  </div>
</div>
```

## Empty state

A centered card that pairs an icon, a heading, and a single primary action.

```html
<div class="surface-base b-all bc-subtle br-xl p-xl stack-v items-center mw-7">
  <span class="icon fs-2xl ink-subtle" data-icon="plus"></span>
  <h3 class="fs-l fw-bold mt-m">No projects yet</h3>
  <p class="fs-s ink-subtle ta-center mt-2xs">
    Create your first project to get started.
  </p>
  <button class="button mt-m" data-size="small">Create project</button>
</div>
```

## Pricing

Three tiers, with the middle one featured by inverting its `color-mode`.

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
      <button class="button mt-auto" data-variant="outlined">Start free</button>
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
      <button class="button mt-auto">Start free trial</button>
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
      <button class="button mt-auto" data-variant="outlined">
        Contact sales
      </button>
    </div>
  </color-mode>
</div>
```

## Activity feed

A vertical timeline: a faint rail down the left with an inverted `color-mode` dot marking each event.

```html
<div class="stack-v">
  <div class="stack-h items-start gap-m">
    <div class="stack-v items-center self-stretch" aria-hidden="true">
      <color-mode palette="coral">
        <span
          class="bg-currentcolor br-circle ink-subtle mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l bc-subtle flex-1"></span>
    </div>
    <div class="stack-v pb-m">
      <p class="fs-xs ink-subtle mb-2xs">08:01</p>
      <h3 class="fs-m fw-bold ">Build failed</h3>
      <p class="fs-s ink-subtle">A test step errored out in the pipeline.</p>
    </div>
  </div>

  <div class="stack-h items-start gap-m">
    <div class="stack-v items-center self-stretch" aria-hidden="true">
      <color-mode palette="blue">
        <span
          class="bg-currentcolor br-circle ink-subtle mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l bc-subtle flex-1"></span>
    </div>
    <div class="stack-v pb-m">
      <p class="fs-xs ink-subtle mb-2xs">09:12</p>
      <h3 class="fs-m fw-bold ">Pull request merged</h3>
      <p class="fs-s ink-subtle">#482 landed on main.</p>
    </div>
  </div>

  <div class="stack-h items-start gap-m">
    <div class="stack-v items-center self-stretch" aria-hidden="true">
      <color-mode palette="green">
        <span
          class="bg-currentcolor br-circle ink-subtle mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l bc-subtle flex-1"></span>
    </div>
    <div class="stack-v pb-m">
      <p class="fs-xs ink-subtle mb-2xs">09:24</p>
      <h3 class="fs-m fw-bold ">Deployment finished</h3>
      <p class="fs-s ink-subtle">Production is now running build #482.</p>
    </div>
  </div>

  <div class="stack-h items-start gap-m">
    <div class="stack-v items-center" aria-hidden="true">
      <color-mode palette="periwinkle">
        <span
          class="bg-currentcolor br-circle ink-subtle mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
    </div>
    <div class="stack-v">
      <p class="fs-xs ink-subtle mb-2xs">10:05</p>
      <h3 class="fs-m fw-bold ">Comment added</h3>
      <p class="fs-s ink-subtle">Ola reviewed the deploy config.</p>
    </div>
  </div>
</div>
```
