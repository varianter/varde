---
title: Editorial examples
description: Typography-driven compositions — display type, hero sections, pull quotes and long-form layouts built from Varde utilities.
---

Editorial layouts live or die on type. The content is words, so the hierarchy has to do the heavy lifting: one very large statement, a few quieter supporting lines, and a lot of deliberate space in between.

Varde's type scale is fluid — `fs-4xl` stays readable on a phone and still feels big on a wide monitor. Pair the large steps with `lh-normal` or `lh-relaxed` for air, `t-uppercase` and `fg-muted` for kickers, and `t-tabular` where numbers need to line up. Colour comes from `<color-mode>`, not from the text.

## Hero

One statement, one supporting line, one byline. The whole block is lit by a `color-mode`, so the text and background stay in the same hue without a single colour class on the type.

```html
<color-mode palette="periwinkle" class="d-block bg-surface-tinted br-l p-xl">
  <div class="stack gap-s mw-7">
    <p class="fs-xs t-uppercase fg-muted">Issue 04 · Winter 2026</p>
    <h1 class="fs-4xl t-bold">The quiet art of making space</h1>
    <p class="fs-xl fg-muted lh-normal">
      Whitespace is not the absence of content. It is the shape content makes
      when it stops talking.
    </p>
    <div class="stack-horizontal gap-xs fs-s fg-muted">
      <span>By Ada Lindberg</span>
      <span aria-hidden="true">·</span>
      <time datetime="PT12M">12 min read</time>
    </div>
  </div>
</color-mode>
```

## Pull quote

A quote earns its size. A thick left rule does the work of quotation marks; the attribution stays quiet underneath.

```html
<figure class="stack gap-m mw-7">
  <blockquote class="fs-3xl t-medium lh-normal b-l b-thick b-prominent pl-m">
    “Restraint reads as confidence only when it is deliberate.”
  </blockquote>
  <figcaption class="fs-s fg-muted">
    <span class="t-bold">Ada Lindberg</span> — design editor
  </figcaption>
</figure>
```

## Long-form article

The reading experience. A narrow measure (`mw-6`), a standfirst that leads, body text with a little extra air (`lh-relaxed`), and a subhead that interrupts rather than competes.

```html
<article class="stack gap-m mw-6">
  <header class="stack gap-2xs">
    <p class="fs-xs t-uppercase fg-muted">Essay</p>
    <h2 class="fs-2xl t-bold">Less is a decision</h2>
    <p class="fs-l fg-muted">
      The difference between empty and restrained is the number of choices
      someone made before you arrived.
    </p>
  </header>
  <p class="lh-relaxed">
    Most interfaces are not overcrowded on purpose. They are overcrowded by
    default — every element survived a meeting, so every element gets a seat.
    Nothing was chosen; everything was kept.
  </p>
  <p class="lh-relaxed">
    Restraint is the opposite. It is a series of small, unglamorous refusals.
    No, this does not belong. No, this can wait. No, this is someone else's
    problem, and it can live on someone else's page.
  </p>
  <h3 class="fs-xl t-bold">Cut toward meaning</h3>
  <p class="lh-relaxed">
    When two things compete, remove the one that is easier to replace.
    Decoration is easy to replace. Structure is not.
  </p>
  <hr />
  <p class="fs-s fg-muted">
    Ada Lindberg is the design editor. This essay appears in issue 04.
  </p>
</article>
```

## Numbered section opener

A chapter break. The index numeral is large and tinted by its own `color-mode`; the heading stays neutral and lets the number do the decorating.

```html
<div class="stack-horizontal items-end gap-m mw-8">
  <color-mode palette="purple" class="d-block">
    <p class="fs-4xl t-bold fg-muted">01</p>
  </color-mode>
  <div class="stack gap-xs">
    <h2 class="fs-2xl t-bold">The argument</h2>
    <p class="fs-m fg-muted">
      Every page makes a case before the reader has read a single word — and the
      case is made by what is absent.
    </p>
  </div>
</div>
```

## Contents

A magazine index. Ruled rows, titles that lead, and page numbers set in `t-tabular` so the column lines up.

```html
<nav class="stack mw-8">
  <div class="stack-horizontal items-end gap-s b-b b-faint pb-s">
    <p class="fs-xs t-uppercase fg-muted">Contents</p>
    <p class="fs-3xl t-bold ml-auto">04</p>
  </div>

  <a class="stack-horizontal items-end gap-s b-b b-faint py-s" href="#">
    <div class="stack gap-2xs">
      <h3 class="fs-xl t-bold">The quiet art of making space</h3>
      <p class="fs-s fg-muted">Ada Lindberg</p>
    </div>
    <p class="fs-m fg-muted ml-auto t-tabular">12</p>
  </a>

  <a class="stack-horizontal items-end gap-s b-b b-faint py-s" href="#">
    <div class="stack gap-2xs">
      <h3 class="fs-xl t-bold">A field guide to negative space</h3>
      <p class="fs-s fg-muted">Maren Solberg</p>
    </div>
    <p class="fs-m fg-muted ml-auto t-tabular">24</p>
  </a>

  <a class="stack-horizontal items-end gap-s py-s" href="#">
    <div class="stack gap-2xs">
      <h3 class="fs-xl t-bold">Type that keeps its mouth shut</h3>
      <p class="fs-s fg-muted">Jens Krogstad</p>
    </div>
    <p class="fs-m fg-muted ml-auto t-tabular">38</p>
  </a>
</nav>
```

## Statistic band

Big figures with small, uppercase labels. The numbers carry the page; the labels just name them.

```html
<div class="stack-horizontal items-end gap-l mw-8">
  <div class="stack gap-2xs">
    <p class="fs-4xl t-bold">48</p>
    <p class="fs-s fg-muted t-uppercase">Issues published</p>
  </div>
  <div class="stack gap-2xs">
    <p class="fs-4xl t-bold">2 100</p>
    <p class="fs-s fg-muted t-uppercase">Pieces of type set</p>
  </div>
  <div class="stack gap-2xs">
    <p class="fs-4xl t-bold">19</p>
    <p class="fs-s fg-muted t-uppercase">Contributors</p>
  </div>
</div>
```
