---
title: Upcoming events
description: An inverted color-mode panel listing upcoming events, each row resetting to its own nested color-mode.
group: data
tags: [color-mode, composition]
---

```html
<color-mode
  inverted=""
  palette="periwinkle"
  class="br-2xl items-start of-hidden stack-h surface-dyed"
  style=""
>
  <div class="gap-s p-s self-stretch stack-v w-max-6 w-min-0" style="">
    <h2 class="fs-4xl fw-bold lh-tight mt-xl" style="overflow-wrap: anywhere;">
      Arrangementer
    </h2>
    <p class="ink-subtle fs-m lh-relaxed">
      Bli med der det skjer! Vi deltar på konferanser, arrangerer fagmøter og
      andre nerdete samlinger. Stikk innom og si hei – vi digger å bli kjent med
      nye folk!
    </p>

    <div class="gap-2xs mt-auto stack-v">
      <p class="fs-s ink-subtle fw-medium">Lokasjon</p>
      <div class="stack-h gap-2xs">
        <button class="v-button br-pill" data-size="small">Alle (2)</button>
        <button
          class="v-button br-pill"
          data-size="small"
          data-variant="outlined"
        >
          Trondheim (2)
        </button>
      </div>
    </div>

    <button class="v-button">Se alle arrangementer</button>
  </div>

  <div class="flex-1 gap-s p-s stack-v" style="">
    <color-mode palette="inherit" class="d-block surface-base br-2xl p-m">
      <p class="fs-xs ink-subtle mb-3xs">24.09.2026 · Trondheim</p>
      <h3 class="fs-2xl fw-medium ink-prominent mb-2xs">
        Offentlig frontend: Minifagdag
      </h3>
      <div class="stack-h gap-2xs items-center">
        <span class="b-all bc-subtle br-pill fs-xs fw-medium px-xs py-4xs"
          >Utvikling</span
        >
        <span class="b-all bc-subtle br-pill fs-xs fw-medium px-xs py-4xs"
          >Frontend</span
        >
        <span class="ink-subtle fs-xs ml-auto">【 Kristoffer 】</span>
      </div>
    </color-mode>

    <color-mode palette="inherit" class="d-block surface-base br-2xl p-m">
      <div class="stack-h items-start gap-s">
        <div class="grow">
          <p class="fs-xs ink-subtle mb-3xs">
            18.10.2026 · 10:00–17:00 (afterparty › 21:00) · Trondheim
          </p>
          <h3 class="fs-2xl fw-medium ink-prominent mb-2xs">
            Workshop: Design-Patterns for KI-produkter i 2026
          </h3>
        </div>
      </div>
      <p class="fs-s ink-subtle mb-s">
        Variant inviterer til workshop med Vitaly Friedman fra Smashing Magazine
        dagen før TDC, og byr på en innholdsrik dag etterfulgt av god mat,
        drikke og quiz på Bariant..
      </p>
      <div class="stack-h gap-2xs items-center">
        <span class="b-all bc-subtle br-pill fs-xs fw-medium px-xs py-4xs"
          >Design</span
        >
        <span class="b-all bc-subtle br-pill fs-xs fw-medium px-xs py-4xs"
          >KI</span
        >
        <span class="ink-subtle fs-xs ml-auto"
          >【 Rolf Anders · Kristin · Tonje 】</span
        >
      </div>
    </color-mode>
  </div>
</color-mode>
```
