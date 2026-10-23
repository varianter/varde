---
title: Time slot booking
description: A seven-day picker with a pair of bookable time slots.
group: forms
tags: [booking]
---

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
  rel="stylesheet"
/>
<div
  class="stack-v gap-m w-full"
  style="font-family: Mulish; --button-font-weight: 700; --font-weight-medium: 700; --font-weight-bold: 900;"
>
  <h3 class="fw-bold fs-l">Timebooking</h3>
  <div class="stack-h items-center gap-l gap-row-s">
    <div class="stack-h items-center gap-xs">
      <button
        class="v-button"
        data-size="small"
        data-variant="outlined"
        popovertarget="senter-filter-popover"
      >
        Senter (2)
      </button>
      <color-mode
        palette="blue"
        class="surface-dyed stack-v br-pill px-xs py-3xs fs-s fw-medium"
      >
        Midtbyen
      </color-mode>
      <color-mode
        palette="blue"
        class="surface-dyed stack-v br-pill px-xs py-3xs fs-s fw-medium"
      >
        Byåsen
      </color-mode>
    </div>

    <div class="stack-h items-center gap-xs">
      <button
        class="v-button"
        data-size="small"
        data-variant="outlined"
        popovertarget="aktivitet-filter-popover"
      >
        Aktivitet (1)
      </button>
      <color-mode
        palette="blue"
        class="surface-dyed stack-v br-pill px-xs py-3xs fs-s fw-medium"
      >
        Styrke
      </color-mode>
    </div>

    <button class="v-button ml-auto" data-size="small" data-variant="outlined">
      Nullstill
    </button>
  </div>

  <div
    id="senter-filter-popover"
    class="v-popover"
    popover="auto"
    data-type="tooltip"
    data-side="bottom"
  >
    <div
      style="width: 20ch;"
      class="p-3xs b-all bc-subtle surface-base stack-v gap-3xs br-m shadow-mid w-full of-clip m-2xs fs-s"
    >
      <div class="stack-h gap-2xs p-3xs">
        <span class="fw-medium">Senter</span>
        <span class="ink-subtle ml-auto">2 av 7</span>
      </div>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" checked />
        <span>Midtbyen</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" checked />
        <span>Byåsen</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Lade</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Tempe</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Heimdal</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Nardo</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Moholt</span>
      </label>
    </div>
  </div>

  <div
    id="aktivitet-filter-popover"
    class="v-popover"
    popover="auto"
    data-type="tooltip"
    data-side="bottom"
  >
    <div
      style="width: 20ch;"
      class="p-3xs b-all bc-subtle surface-base stack-v gap-3xs br-m shadow-mid w-max-5 of-clip m-2xs fs-s"
    >
      <div class="stack-h gap-2xs p-3xs">
        <span class="fw-medium">Aktivitet</span>
        <span class="ink-subtle ml-auto">1 av 7</span>
      </div>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" checked />
        <span>Styrke</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Yoga</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Sirkeltrening</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Spinning</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Dans</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Pilates</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Svømming</span>
      </label>
    </div>
  </div>

  <color-mode
    palette="blue"
    class="stack-h gap-3xs b-all bc-subtle br-l of-clip p-3xs grow"
    role="group"
    aria-label="Velg dag"
  >
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="tinted"
    >
      <span class="fs-m">11</span>
      <span class="fs-xs">Fredag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">12</span>
      <span class="fs-xs">Lørdag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">13</span>
      <span class="fs-xs">Søndag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">14</span>
      <span class="fs-xs">Mandag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">15</span>
      <span class="fs-xs">Tirsdag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">16</span>
      <span class="fs-xs">Onsdag</span>
    </button>
    <button
      class="v-button flex-1 px-3xs py-3xs stack-v items-"
      data-size="small"
      data-variant="plain"
    >
      <span class="fs-m">17</span>
      <span class="fs-xs">Torsdag</span>
    </button>
  </color-mode>

  <div class="stack-v gap-s w-full">
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
      <color-mode palette="blue">
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
        <p class="fw-medium">Sirkeltrening</p>
        <p class="fs-s ink-subtle">12:00 · 45 min</p>
        <p class="fs-s ink-subtle">Kari Nordli · Trondheim</p>
      </div>
      <color-mode palette="blue">
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
        style="height: stretch; aspect-ratio: 4 / 3;"
      ></div>
      <div class="stack-v grow">
        <p class="fw-medium">Spinning</p>
        <p class="fs-s ink-subtle">13:30 · 45 min</p>
        <p class="fs-s ink-subtle">Petter Ås · Trondheim</p>
      </div>
      <color-mode palette="blue">
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
        style="height: stretch; aspect-ratio: 4 / 3;"
      ></div>
      <div class="stack-v grow">
        <p class="fw-medium">Dans</p>
        <p class="fs-s ink-subtle">15:00 · 60 min</p>
        <p class="fs-s ink-subtle">Ida Strand · Trondheim</p>
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
        <p class="fw-medium">Pilates</p>
        <p class="fs-s ink-subtle">16:30 · 30 min</p>
        <p class="fs-s ink-subtle">Ingrid Dahl · Trondheim</p>
      </div>
      <color-mode palette="blue">
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
        style="height: stretch; aspect-ratio: 4 / 3;"
      ></div>
      <div class="stack-v grow">
        <p class="fw-medium">Svømming</p>
        <p class="fs-s ink-subtle">18:00 · 60 min</p>
        <p class="fs-s ink-subtle">Lars Moen · Trondheim</p>
      </div>
      <color-mode palette="blue">
        <button class="v-button" data-size="small" style="min-width: 6rem;">
          Meld på
        </button>
      </color-mode>
    </div>
  </div>
</div>
```
