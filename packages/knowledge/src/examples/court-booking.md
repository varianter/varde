---
title: Court booking
description: A day picker and venue columns for booking a squash court.
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
  class="stack-v gap-m w-full py-xl"
  style="font-family: Mulish; --button-font-weight: 700; --font-weight-medium: 700; --font-weight-bold: 900;"
>
  <div class="stack-h items-center justify-between m">
    <h1 class="fs-xl fw-bold">Book squash</h1>
    <div class="stack-h gap-xs">
      <button
        class="v-button br-pill"
        data-variant="outlined"
        data-size="small"
        popovertarget="senter-filter-popover"
      >
        Senter (2)
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
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <button
        class="v-button br-pill"
        data-variant="outlined"
        data-size="small"
        popovertarget="tid-filter-popover"
      >
        Tid på dag (2)
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
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
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
    id="tid-filter-popover"
    class="v-popover"
    popover="auto"
    data-type="tooltip"
    data-side="bottom"
  >
    <div
      style="width: 26ch;"
      class="p-3xs b-all bc-subtle surface-base stack-v gap-3xs br-m shadow-mid w-full of-clip m-2xs fs-s"
    >
      <div class="stack-h gap-2xs p-3xs">
        <span class="fw-medium">Tid på dag</span>
        <span class="ink-subtle ml-auto">2 av 3</span>
      </div>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" />
        <span>Formiddag</span>
        <span class="ml-auto ink-subtle fs-xs">04:30 - 12:00</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" checked />
        <span>Ettermiddag</span>
        <span class="ml-auto ink-subtle fs-xs">12:00 - 18:00</span>
      </label>
      <label class="stack-h gap-2xs p-3xs bg-wash:hover br-m">
        <input type="checkbox" class="v-checkbox" checked />
        <span>Kveld</span>
        <span class="ml-auto ink-subtle fs-xs">18:00 - 00:00</span>
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

  <div style="position: relative;" class="mt-m w-full of-scroll">
    <div
      class="d-grid gap-column-xl gap-row-l"
      style="grid-template-columns: 1fr 1fr;"
    >
      <div class="stack-v gap-m">
        <div
          class="d-grid gap-row-2xs gap-column-xs"
          style="grid-template-columns: max-content repeat(4, 1fr);"
        >
          <div class="grid-subgrid grid-all-columns  pb-2xs items-end">
            <span class="fs-l px-s fw-medium lh-snug"> Sluppen </span>
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 1</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 2</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 3</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 4</span
            >
          </div>

          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>14:30 –</span>
              <span>15:00</span>
            </span>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>15:00 –</span>
              <span>15:30</span>
            </span>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>15:30 –</span>
              <span>16:00</span>
            </span>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>16:00 –</span>
              <span>16:30</span>
            </span>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>16:30 –</span>
              <span>17:00</span>
            </span>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
        </div>
      </div>

      <div class="stack-v gap-m">
        <div
          class="d-grid gap-row-2xs gap-column-xs"
          style="grid-template-columns: max-content repeat(5, 1fr);"
        >
          <div class="grid-subgrid grid-all-columns  pb-2xs items-end">
            <span class="fs-l px-s fw-medium lh-snug"> Rosten </span>
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 1</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 2</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 3</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 4</span
            >
            <span class="fs-s ink-subtle fw-medium ta-center lh-tight pb-4xl"
              >Bane 5</span
            >
          </div>

          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>14:30 –</span>
              <span>15:00</span>
            </span>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>15:00 –</span>
              <span>15:30</span>
            </span>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>15:30 –</span>
              <span>16:00</span>
            </span>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>16:00 –</span>
              <span>16:30</span>
            </span>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="fs-s fw-medium px-xs lh-snug">
              <span>16:30 –</span>
              <span>17:00</span>
            </span>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="grey">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
            <color-mode palette="blue">
              <button class="v-button w-full" data-size="small">Velg</button>
            </color-mode>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
