---
title: Court booking
description: A day picker and venue columns for booking a squash court.
---

```html
<div class="stack-v gap-m w-full py-xl">
  <div class="stack-h items-center justify-between">
    <h1 class="fs-3xl fw-bold">Book squash</h1>
    <button class="v-button br-pill" data-variant="tinted">
      Skjul filtre
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
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </div>

  <div class="stack-h gap-xs">
    <button class="v-button br-pill" data-variant="outlined">
      Senter
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
    <button class="v-button br-pill" data-variant="outlined">
      Tid på dag
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

  <div
    class="stack-h b-all bc-subtle br-pill of-clip p-3xs grow"
    role="group"
    aria-label="Velg dag"
  >
    <color-mode palette="blue">
      <button
        class="v-button br-pill flex-1"
        data-size="small"
        data-variant="filled"
      >
        <span class="stack-v items-center">
          <span>11</span>
          <span class="fs-xs">Fr</span>
        </span>
      </button>
    </color-mode>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>12</span>
        <span class="fs-xs">Lø</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>13</span>
        <span class="fs-xs">Sø</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>14</span>
        <span class="fs-xs">Ma</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>15</span>
        <span class="fs-xs">Ti</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>16</span>
        <span class="fs-xs">On</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>17</span>
        <span class="fs-xs">To</span>
      </span>
    </button>
    <button
      class="v-button br-pill flex-1"
      data-size="small"
      data-variant="plain"
    >
      <span class="stack-v items-center">
        <span>18</span>
        <span class="fs-xs">Fr</span>
      </span>
    </button>
  </div>

  <div style="position: relative;">
    <div
      class="d-grid gap-column-xl gap-row-l"
      style="grid-template-columns: 1fr 1fr;"
    >
      <div class="stack-v gap-m">
        <h2 class="fs-l fw-bold ta-center">3T-Rosten</h2>

        <div
          class="d-grid gap-row-2xs gap-column-xs"
          style="grid-template-columns: max-content repeat(4, 1fr);"
        >
          <div class="grid-subgrid grid-all-columns items-center pb-2xs">
            <span class="fs-s ink-subtle fw-medium"></span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 1</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 2</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 3</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 4</span>
          </div>

          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>14:30</span>
              <span>15:00</span>
            </span>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
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
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>15:00</span>
              <span>15:30</span>
            </span>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>15:30</span>
              <span>16:00</span>
            </span>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
          </div>
        </div>
      </div>

      <div class="stack-v gap-m">
        <h2 class="fs-l fw-bold ta-center">3T-Leangen</h2>

        <div
          class="d-grid gap-row-2xs gap-column-xs"
          style="grid-template-columns: max-content repeat(5, 1fr);"
        >
          <div class="grid-subgrid grid-all-columns items-center pb-2xs">
            <span class="fs-s ink-subtle fw-medium"></span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 1</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 2</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 3</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 4</span>
            <span class="fs-s ink-subtle fw-bold ta-center">Bane 5</span>
          </div>

          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>14:30</span>
              <span>15:00</span>
            </span>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="coral">
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
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>15:00</span>
              <span>15:30</span>
            </span>
            <color-mode palette="coral">
              <button
                class="v-button w-full"
                data-size="small"
                data-variant="tinted"
                disabled
              >
                Opptatt
              </button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
          </div>
          <div
            class="bc-subtle b-all br-l grid-all-columns grid-subgrid items-center p-3xs"
          >
            <span class="stack-v fs-s fw-medium px-xs lh-snug">
              <span>15:30</span>
              <span>16:00</span>
            </span>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
            <color-mode palette="periwinkle">
              <button class="v-button w-full" data-size="small">Book</button>
            </color-mode>
          </div>
        </div>
      </div>
    </div>

    <button
      class="v-button br-circle aspect-square p-0 pos-absolute top-0 right-0"
      data-variant="outlined"
      aria-label="Vis flere sentre"
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
```
