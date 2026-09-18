---
title: Datepicker
description: A static calendar panel with month navigation and a selected day.
group: forms
tags: [component, composition]
---

```html
<color-mode
  palette="grey"
  class="d-block surface-tinted b-all bc-subtle br-xl shadow-mid p-m w-max-content"
>
  <div class="stack-v gap-m">
    <div class="stack-h items-center justify-between">
      <button
        class="v-button aspect-square p-0"
        data-size="small"
        data-variant="plain"
        aria-label="Previous month"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <p class="fw-medium">September 2026</p>

      <button
        class="v-button aspect-square p-0"
        data-size="small"
        data-variant="plain"
        aria-label="Next month"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <div
      class="d-grid gap-3xs w-full"
      style="
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: max-content;
        grid-auto-rows: 1fr;
    "
      role="group"
      aria-label="September 2026"
    >
      <span class="ta-center fs-xs fw-medium ink-subtle">Mo</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">Tu</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">We</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">Th</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">Fr</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">Sa</span>
      <span class="ta-center fs-xs fw-medium ink-subtle">Su</span>

      <button
        class="v-button  p-0 aspect-square ink-subtle"
        data-size="small"
        data-variant="plain"
      >
        31
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        1
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        2
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        3
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        4
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        5
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        6
      </button>

      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        7
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        8
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        9
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        10
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        11
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        12
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        13
      </button>

      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        14
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        15
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        16
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        17
      </button>
      <button
        class="v-button  p-0 aspect-square"
        data-size="small"
        data-variant="outlined"
      >
        18
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        19
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        20
      </button>

      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        21
      </button>
      <button
        class="v-button  p-0 aspect-square"
        data-size="small"
        aria-current="date"
      >
        22
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        23
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        24
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        25
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        26
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        27
      </button>

      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        28
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        29
      </button>
      <button class="v-button  p-0 aspect-square" data-size="small" data-variant="plain">
        30
      </button>
      <button
        class="v-button  p-0 aspect-square ink-subtle"
        data-size="small"
        data-variant="plain"
      >
        1
      </button>
      <button
        class="v-button  p-0 aspect-square ink-subtle"
        data-size="small"
        data-variant="plain"
      >
        2
      </button>
      <button
        class="v-button  p-0 aspect-square ink-subtle"
        data-size="small"
        data-variant="plain"
      >
        3
      </button>
      <button
        class="v-button  p-0 aspect-square ink-subtle"
        data-size="small"
        data-variant="plain"
      >
        4
      </button>
    </div>

    <div class="stack-h gap-xs">
      <button class="v-button flex-1" data-size="small" data-variant="outlined">
        Today
      </button>
      <button class="v-button flex-1" data-size="small">Apply</button>
    </div>
  </div>
</color-mode>
```
