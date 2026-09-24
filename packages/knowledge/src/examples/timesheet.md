---
title: Timesheet
description: A weekly time tracking grid with per-day inputs and totals.
group: data
tags: [app, table, forms]
---

A week of hours per project. Today's column is highlighted with a `color-mode`, and days with a note get an icon inside the input.

```html
<div class="stack-h gap-s mb-l">
  <color-mode palette="green">
    <button
      class="v-button"
      data-variant="filled"
      popovertarget="add-row-dialog"
    >
      <div class="v-icon" data-v-icon="plus"></div>
      Legg til rad
    </button>
  </color-mode>
  <div class="stack-h nowrap b-all bc-default br-l ml-auto p-4xs">
    <button
      class="v-button aspect-square p-0"
      data-variant="plain"
      data-size="small"
      aria-label="Forrige uke"
    >
      <div class="v-icon" data-v-icon="chevron-left"></div>
    </button>
    <span class="stack-h nowrap gap-2xs px-xs fw-medium">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      Denne uken <span class="fw-regular">21.–27. sep 2026</span>
    </span>
    <button
      class="v-button aspect-square p-0"
      data-variant="plain"
      data-size="small"
      aria-label="Neste uke"
    >
      <div class="v-icon" data-v-icon="chevron-right"></div>
    </button>
  </div>
</div>

<div
  class="d-grid gap-column-2xs of-scroll t-tabular"
  style="grid-template-columns: minmax(20ch, 1fr) repeat(7, 10ch) 8ch auto;"
>
  <!-- Header -->
  <div class="grid-subgrid grid-all-columns b-b bc-subtle fs-s">
    <div></div>
    <div class="ta-right py-xs ink-subtle">
      <div class="stack-h nowrap gap-4xs justify-end">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Man
      </div>
      21. sep
    </div>
    <div class="ta-right py-xs ink-subtle">
      <div class="stack-h nowrap gap-4xs justify-end">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Tir
      </div>
      22. sep
    </div>
    <div class="ta-right py-xs ink-subtle">
      <div class="stack-h nowrap gap-4xs justify-end">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Ons
      </div>
      23. sep
    </div>
    <color-mode
      palette="orange"
      class="d-block ta-right py-xs px-xs surface-tinted ink-subtle fw-medium"
    >
      <div>Tor</div>
      24. sep
    </color-mode>
    <div class="ta-right py-xs ink-subtle">
      <div>Fre</div>
      25. sep
    </div>
    <div class="ta-right py-xs ink-subtle">
      <div>Lør</div>
      26. sep
    </div>
    <div class="ta-right py-xs ink-subtle">
      <div>Søn</div>
      27. sep
    </div>
    <div></div>
    <div></div>
  </div>

  <!-- Row -->
  <div class="grid-subgrid grid-all-columns b-b bc-subtle items-center">
    <div class="py-s">
      <p class="fw-medium">
        [VAR1000] Variantdrift <span class="fw-regular">(Varianttid)</span>
      </p>
      <p>Variantdag</p>
    </div>
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Man"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Tir"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Ons"
    />
    <color-mode
      palette="orange"
      class="surface-tinted self-stretch stack-h px-3xs"
    >
      <input
        class="v-input ta-right w-min-0 w-full"
        inputmode="decimal"
        aria-label="Tor"
      />
    </color-mode>
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Fre"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Lør"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Søn"
    />
    <div class="ta-right fw-medium">0</div>
    <button
      class="v-button aspect-square p-0"
      data-variant="outlined"
      data-size="small"
      aria-label="Fjern rad"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="6" y1="6" x2="18" y2="18"></line>
        <line x1="18" y1="6" x2="6" y2="18"></line>
      </svg>
    </button>
  </div>

  <!-- Row -->
  <div class="grid-subgrid grid-all-columns b-b bc-subtle items-center">
    <div class="py-s">
      <p class="fw-medium">
        [VAR1099] Variantdrift - mellom prosjekter
        <span class="fw-regular">(Varianttid)</span>
      </p>
      <p>Mellom prosjekter</p>
    </div>
    <div class="pos-relative">
      <svg
        class="pos-absolute ink-subtle"
        style="left: 0.5rem; top: 50%; translate: 0 -50%;"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <line x1="8" y1="8" x2="16" y2="8"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
        <line x1="8" y1="16" x2="13" y2="16"></line>
      </svg>
      <input
        class="v-input ta-right w-min-0 w-full"
        inputmode="decimal"
        aria-label="Man"
        value="7,50"
      />
    </div>
    <div class="pos-relative">
      <svg
        class="pos-absolute ink-subtle"
        style="left: 0.5rem; top: 50%; translate: 0 -50%;"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <line x1="8" y1="8" x2="16" y2="8"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
        <line x1="8" y1="16" x2="13" y2="16"></line>
      </svg>
      <input
        class="v-input ta-right w-min-0 w-full"
        inputmode="decimal"
        aria-label="Tir"
        value="7,50"
      />
    </div>
    <div class="pos-relative">
      <svg
        class="pos-absolute ink-subtle"
        style="left: 0.5rem; top: 50%; translate: 0 -50%;"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <line x1="8" y1="8" x2="16" y2="8"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
        <line x1="8" y1="16" x2="13" y2="16"></line>
      </svg>
      <input
        class="v-input ta-right w-min-0 w-full"
        inputmode="decimal"
        aria-label="Ons"
        value="7,50"
      />
    </div>
    <color-mode
      palette="orange"
      class="surface-tinted self-stretch stack-h px-3xs"
    >
      <input
        class="v-input ta-right w-min-0 w-full"
        inputmode="decimal"
        aria-label="Tor"
      />
    </color-mode>
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Fre"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Lør"
    />
    <input
      class="v-input ta-right w-min-0 w-full"
      inputmode="decimal"
      aria-label="Søn"
    />
    <div class="ta-right fw-medium">22,50</div>
    <button
      class="v-button aspect-square p-0"
      data-variant="outlined"
      data-size="small"
      aria-label="Fjern rad"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="6" y1="6" x2="18" y2="18"></line>
        <line x1="18" y1="6" x2="6" y2="18"></line>
      </svg>
    </button>
  </div>

  <!-- Totals -->
  <div class="grid-subgrid grid-all-columns fw-medium ta-right py-s">
    <div></div>
    <div class="px-xs">7,50</div>
    <div class="px-xs">7,50</div>
    <div class="px-xs">7,50</div>
    <div class="px-xs">0</div>
    <div class="px-xs">0</div>
    <div class="px-xs">0</div>
    <div class="px-xs">0</div>
    <div>22,50</div>
    <div></div>
  </div>
</div>

<div class="stack-h gap-s mt-l">
  <div class="stack-h nowrap">
    <button class="v-button br-tr-none br-br-none" data-variant="outlined">
      Kopier fra forrige uke (kun prosjekter)
    </button>
    <button
      class="v-button aspect-square p-0 br-tl-none br-bl-none"
      data-variant="outlined"
      aria-label="Flere kopieringsvalg"
    >
      <div class="v-icon" data-v-icon="chevron-down"></div>
    </button>
  </div>
  <div class="stack-h nowrap ml-auto">
    <button class="v-button br-tr-none br-br-none" data-variant="outlined">
      Send uken til godkjenning
    </button>
    <button
      class="v-button aspect-square p-0 br-tl-none br-bl-none"
      data-variant="outlined"
      aria-label="Flere innsendingsvalg"
    >
      <div class="v-icon" data-v-icon="chevron-down"></div>
    </button>
  </div>
</div>

<div
  id="add-row-dialog"
  class="v-popover"
  popover="auto"
  data-type="dialog"
  data-backdrop
>
  <form
    class="stack-v of-clip br-l shadow-high surface-base"
    style="width: 560px; max-width: 100%;"
  >
    <div class="surface-tinted b-b bc-subtle py-xs px-l ta-center">
      <h2 class="fs-m fw-medium">Legg til rad i timelisten</h2>
    </div>
    <div class="stack-v gap-xs p-s">
      <label class="v-form-label" for="add-row-project"
        >Prosjekt / oppgave</label
      >
      <select class="v-select" id="add-row-project">
        <optgroup label="Varianttid">
          <option>[VAR1000] Variantdrift</option>
          <option selected>[VAR1099] Variantdrift - mellom prosjekter</option>
        </optgroup>
      </select>
      <select class="v-select" aria-label="Aktivitet">
        <option>Fadder- og oppstartsaktiviteter</option>
        <option>Mellom prosjekter</option>
        <option>Variantdag</option>
      </select>
      <div class="stack-h gap-2xs mt-xs">
        <color-mode palette="green">
          <button
            type="button"
            class="v-button"
            data-variant="filled"
            popovertarget="add-row-dialog"
            popovertargetaction="hide"
          >
            Lagre rad
          </button>
        </color-mode>
        <button
          type="button"
          class="v-button"
          data-variant="outlined"
          popovertarget="add-row-dialog"
          popovertargetaction="hide"
        >
          Avbryt
        </button>
      </div>
    </div>
  </form>
</div>
```
