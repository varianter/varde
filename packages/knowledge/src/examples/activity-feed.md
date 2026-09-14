---
title: Activity feed
description: A vertical timeline a faint rail down the left with an inverted `color-mode` dot marking each event.
group: Data display
---

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
