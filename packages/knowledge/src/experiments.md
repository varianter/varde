---
title: Experiments
description: Work-in-progress compositions built only from existing Varde utilities and components.
---

## Pagination

A row of outlined page buttons with one active, plus prev/next.

```html
<div class="stack-horizontal gap-xs">
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
  <span class="fs-s fg-muted px-2xs">…</span>
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
<div class="bg-surface-base b-all b-faint br-l of-clip mw-7">
  <div class="stack-horizontal gap-s px-s py-s b-b b-faint b-last-none">
    <span class="icon fg-muted fs-xs" data-icon="pencil"></span>
    <div class="stack grow">
      <p class="t-medium">Display name</p>
      <p class="fs-s fg-muted">How you appear to others</p>
    </div>
    <button class="button" data-size="small" data-variant="outlined">
      Edit
    </button>
  </div>

  <div class="stack-horizontal gap-s px-s py-s b-b b-faint b-last-none">
    <span class="icon fg-muted fs-xs" data-icon="plus"></span>
    <div class="stack grow">
      <p class="t-medium">Language</p>
      <p class="fs-s fg-muted">Used across the app</p>
    </div>
    <select class="select" data-size="small">
      <option>English</option>
      <option>Norsk</option>
      <option>Svenska</option>
    </select>
  </div>

  <div class="stack-horizontal gap-s px-s py-s b-b b-faint b-last-none">
    <span class="icon fg-muted fs-xs" data-icon="pencil"></span>
    <div class="stack grow">
      <p class="t-medium">Email notifications</p>
      <p class="fs-s fg-muted">Receive updates by email</p>
    </div>
    <input class="checkbox" type="checkbox" checked />
  </div>
</div>
```

## Empty state

A centered card that pairs an icon, a heading, and a single primary action.

```html
<div class="bg-surface-base b-all b-faint br-xl p-xl stack items-center mw-7">
  <span class="icon fs-2xl fg-muted" data-icon="plus"></span>
  <h3 class="fs-l t-bold mt-m">No projects yet</h3>
  <p class="fs-s fg-muted t-center mt-2xs">
    Create your first project to get started.
  </p>
  <button class="button mt-m" data-size="small">Create project</button>
</div>
```

## Pricing

Three tiers, with the middle one featured by inverting its `color-mode`.

```html
<div class="stack-horizontal items-stretch gap-m">
  <color-mode>
    <div class="flex-1 bg-surface-base b-all b-faint br-xl p-m stack">
      <div class="stack">
        <h3 class="fs-l t-bold">Free</h3>
        <p class="fs-s fg-muted mt-2xs">For personal projects.</p>
      </div>
      <div class="stack-horizontal items-end gap-xs mt-m">
        <span class="fs-2xl t-bold">$0</span>
        <span class="fs-s fg-muted pb-2xs">/ month</span>
      </div>
      <ul class="list stack gap-2xs fs-s mt-s mb-m">
        <li>Up to 3 projects</li>
        <li>Community support</li>
        <li>1 GB storage</li>
      </ul>
      <button class="button mt-auto" data-variant="outlined">Start free</button>
    </div>
  </color-mode>

  <color-mode inverted palette="periwinkle">
    <div
      class="flex-1 bg-surface-dyed b-all b-faint br-xl p-m stack shadow-high"
    >
      <div class="stack">
        <h3 class="fs-l t-bold">Pro</h3>
        <p class="fs-s fg-muted mt-2xs">For growing teams.</p>
      </div>
      <div class="stack-horizontal items-end gap-xs mt-m">
        <span class="fs-2xl t-bold">$20</span>
        <span class="fs-s fg-muted pb-2xs">/ month</span>
      </div>
      <ul class="list stack gap-2xs fs-s mt-s mb-m">
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>100 GB storage</li>
      </ul>
      <button class="button mt-auto">Start free trial</button>
    </div>
  </color-mode>

  <color-mode>
    <div class="flex-1 bg-surface-base b-all b-faint br-xl p-m stack">
      <div class="stack">
        <h3 class="fs-l t-bold">Enterprise</h3>
        <p class="fs-s fg-muted mt-2xs">For large organizations.</p>
      </div>
      <div class="stack-horizontal items-end gap-xs mt-m">
        <span class="fs-2xl t-bold">Custom</span>
      </div>
      <ul class="list stack gap-2xs fs-s mt-s mb-m">
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
<div class="stack">
  <div class="stack-horizontal items-start gap-m">
    <div class="stack items-center self-stretch" aria-hidden="true">
      <color-mode palette="coral">
        <span
          class="bg-currentcolor br-circle fg-muted mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l b-faint flex-1"></span>
    </div>
    <div class="stack pb-m">
      <p class="fs-xs fg-muted mb-2xs">08:01</p>
      <h3 class="fs-m t-bold ">Build failed</h3>
      <p class="fs-s fg-muted">A test step errored out in the pipeline.</p>
    </div>
  </div>

  <div class="stack-horizontal items-start gap-m">
    <div class="stack items-center self-stretch" aria-hidden="true">
      <color-mode palette="blue">
        <span
          class="bg-currentcolor br-circle fg-muted mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l b-faint flex-1"></span>
    </div>
    <div class="stack pb-m">
      <p class="fs-xs fg-muted mb-2xs">09:12</p>
      <h3 class="fs-m t-bold ">Pull request merged</h3>
      <p class="fs-s fg-muted">#482 landed on main.</p>
    </div>
  </div>

  <div class="stack-horizontal items-start gap-m">
    <div class="stack items-center self-stretch" aria-hidden="true">
      <color-mode palette="green">
        <span
          class="bg-currentcolor br-circle fg-muted mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
      <span class="b-l b-faint flex-1"></span>
    </div>
    <div class="stack pb-m">
      <p class="fs-xs fg-muted mb-2xs">09:24</p>
      <h3 class="fs-m t-bold ">Deployment finished</h3>
      <p class="fs-s fg-muted">Production is now running build #482.</p>
    </div>
  </div>

  <div class="stack-horizontal items-start gap-m">
    <div class="stack items-center" aria-hidden="true">
      <color-mode palette="periwinkle">
        <span
          class="bg-currentcolor br-circle fg-muted mt-4xs"
          style="width: 0.75rem; height: 0.75rem;"
        ></span>
      </color-mode>
    </div>
    <div class="stack">
      <p class="fs-xs fg-muted mb-2xs">10:05</p>
      <h3 class="fs-m t-bold ">Comment added</h3>
      <p class="fs-s fg-muted">Ola reviewed the deploy config.</p>
    </div>
  </div>
</div>
```
