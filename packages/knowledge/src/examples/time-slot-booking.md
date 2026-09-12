---
title: Time slot booking
description: A seven-day picker with a pair of bookable time slots.
---

```html
<div class="stack-v gap-m w-full">
  <h3>Timebooking</h3>
  <div class="stack-h gap-xs">
    <div
      class="stack-h b-all bc-subtle br-pill of-clip p-3xs grow"
      role="group"
      aria-label="Pick a day"
    >
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="filled"
      >
        <span class="stack-v items-center">
          <span>Ma</span>
          <span class="fs-xs">05.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>Ti</span>
          <span class="fs-xs">06.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>On</span>
          <span class="fs-xs">07.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>To</span>
          <span class="fs-xs">08.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>Fr</span>
          <span class="fs-xs">09.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>Sat</span>
          <span class="fs-xs">10.10</span>
        </span>
      </button>
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="plain"
      >
        <span class="stack-v items-center">
          <span>Sun</span>
          <span class="fs-xs">11.10</span>
        </span>
      </button>
    </div>

    <div class="ml-auto stack-h gap-3xs">
      <button class="v-button" data-size="small" data-variant="outlined">
        Nåværende uke
      </button>
      <button
        class="v-button aspect-square p-0"
        data-size="small"
        data-variant="outlined"
        aria-label="Forrige uke"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <button
        class="v-button aspect-square p-0"
        data-size="small"
        data-variant="outlined"
        aria-label="Neste uke"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>

  <div class="stack-h items-center gap-xs">
    <button class="v-button" data-size="small" data-variant="outlined">
      Sted (1)
    </button>
    <color-mode
      palette="blue"
      class="surface-dyed stack-v br-pill px-xs py-3xs fs-s fw-medium"
    >
      Trondheim
    </color-mode>
    <button class="v-button" data-size="small" data-variant="outlined">
      Aktivitet
    </button>
  </div>

  <div class="stack-v gap-s w-max-7">
    <div
      class="stack-h items-center gap-m b-all bc-subtle br-m p-s of-clip"
      style="
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: max-content 1fr 7rem;
    "
    >
      <div
        class="-my-s -ml-s surface-dyed"
        style="height: stretch; aspect-ratio: 4 / 3;"
      ></div>
      <div class="stack-v grow">
        <p class="fw-medium">Morning yoga</p>
        <p class="fs-s ink-subtle">09:00 · 45 min</p>
        <p class="fs-s ink-subtle">Maja Berg · Trondheim</p>
      </div>
      <color-mode palette="periwinkle">
        <button class="v-button" data-size="small" style="min-width: 6rem;">
          Meld på
        </button>
      </color-mode>
    </div>

    <div
      class="stack-h items-center gap-m b-all bc-subtle br-m p-s of-clip"
      style="
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: max-content 1fr 7rem;
    "
    >
      <div
        class="-my-s -ml-s surface-dyed"
        style="height: stretch; aspect-ratio: 4 / 3; "
      ></div>
      <div class="stack-v grow">
        <p class="fw-medium">Strength class</p>
        <p class="fs-s ink-subtle">10:30 · 30 min</p>
        <p class="fs-s ink-subtle">Ola Nordmann · Trondheim</p>
      </div>
      <color-mode palette="yellow">
        <button
          class="v-button"
          data-variant="tinted"
          data-size="small"
          style="min-width: 6rem;"
          disabled
        >
          Meld på venteliste
        </button>
      </color-mode>
    </div>
  </div>
</div>
```
