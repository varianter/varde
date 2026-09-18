---
title: Variantdag schedule
description: A schedule for an event day, from morning coffee to quiz.
group: forms
tags: [scheduling]
---

```html
<color-mode
  palette="periwinkle"
  class="d-block surface-tinted p-xl -m-s br-inherit of-clip"
>
  <color-mode
    inverted
    class="surface-dyed d-block br-l mb-xl mt-2xl pb-2xs pt-xs px-s"
  >
    <p class="lh-tight">Velkommen til</p>
    <h1 class="fs-4xl fw-bold">Variantdag</h1>
  </color-mode>

  <div
    class="d-grid gap-column-xl gap-row-m"
    style="grid-template-columns: max-content 1fr;"
    stagger-reveal
  >
    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">08:00 – 08:15</time>
      <div>
        <h3>Kaffe med noko attåt</h3>
        <p>aka. selskapsstatus</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">08:30 – 10:15</time>
      <div class="stack-v">
        <h3>Fagaktiviteter</h3>
        <p>Utvikling → k8 workshop</p>
        <p>Design → k8 workshop</p>
        <p>PPP → Dele erfaringer fra oppdrag</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">10:15 – 11:30</time>
      <div>
        <h3>Lunsj</h3>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">11:30 – 11:45</time>
      <div>
        <h3>Velkommen til åpen Variantdag</h3>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">12:15 – 13:00</time>
      <div>
        <h3>Tilit og KI</h3>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">15:00 – 15:30</time>
      <div>
        <h3>KI og design</h3>
        <p>Lorem something something</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">15:30 – 16:00</time>
      <div>
        <h3>KI i Kunnskapssektor</h3>
        <p>Lorem something something</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">16:00 – 17:00</time>
      <div>
        <h3>Produktstrategi og, skulle du tro, KI!</h3>
        <p>Lorem something something</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">17:00</time>
      <div>
        <h3>Quiz!</h3>
        <p>Lorem something something</p>
      </div>
    </div>

    <div class="grid-subgrid grid-all-columns">
      <time class="pt-3xs">18:00</time>
      <div>
        <h3>Åpen Bariant</h3>
      </div>
    </div>
  </div>
</color-mode>
```
