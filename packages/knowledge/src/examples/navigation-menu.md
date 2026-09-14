---
title: Navigation menu
description: Three menu patterns — a top navbar, a sidebar with an active item, and a breadcrumb trail.
group: Navigation
---

A horizontal top bar with a logotype, plain-text links, an active state picked out with `ink-prominent`, and a primary action pinned to the end with `ml-auto`.

```html
<div
  class="stack-h items-center gap-l surface-base b-b bc-subtle px-m py-2xs"
>
  <span class="fs-l fw-bold">Varde</span>
  <nav class="stack-h gap-m">
    <a href="#" class="fs-s fw-medium ink-prominent">Dashboard</a>
    <a href="#" class="fs-s fw-medium ink-subtle">Prosjekter</a>
    <a href="#" class="fs-s fw-medium ink-subtle">Bemanning</a>
    <a href="#" class="fs-s fw-medium ink-subtle">Rapporter</a>
  </nav>
  <button class="v-button ml-auto" data-size="small">Ny bestilling</button>
</div>
```

A sidebar with a search field, grouped section labels, an active row lifted with `surface-tinted`, and two expandable sections (built with native `<details>`/`<summary>` — no JS needed) that reveal a nested list of links.

```html
<nav class="stack-v surface-base b-all bc-subtle br-l p-2xs w-max-4">
  <input
    type="search"
    class="v-input w-full mb-xs"
    data-size="small"
    placeholder="Søk"
    aria-label="Søk i menyen"
  />

  <p class="fs-xs ink-subtle fw-bold tt-uppercase px-xs mb-2xs">Meny</p>
  <div class="stack-v gap-4xs">
    <a
      href="#"
      aria-current="page"
      class="stack-h items-center gap-xs px-xs py-2xs br-m surface-tinted fw-medium"
    >
      <span class="v-icon fs-xs" data-v-icon="plus"></span>
      Oversikt
    </a>

    <details open>
      <summary
        class="px-xs py-2xs br-m ink-subtle bg-wash:hover"
        style="list-style-position: inside;"
      >
        <span class="d-inline-flex items-center gap-xs">
          <span class="v-icon fs-xs" data-v-icon="plus"></span>
          Prosjekter
        </span>
      </summary>
      <div class="stack-v gap-3xs pl-m pt-3xs">
        <a
          href="#"
          aria-current="page"
          class="d-block px-xs py-3xs br-m fs-s fw-medium surface-tinted"
          >Aktive</a
        >
        <a href="#" class="d-block px-xs py-3xs br-m fs-s ink-subtle bg-wash:hover"
          >Maler</a
        >
        <a href="#" class="d-block px-xs py-3xs br-m fs-s ink-subtle bg-wash:hover"
          >Arkiverte</a
        >
      </div>
    </details>

    <details>
      <summary
        class="px-xs py-2xs br-m ink-subtle bg-wash:hover"
        style="list-style-position: inside;"
      >
        <span class="d-inline-flex items-center gap-xs">
          <span class="v-icon fs-xs" data-v-icon="pencil"></span>
          Konsulenter
        </span>
      </summary>
      <div class="stack-v gap-3xs pl-m pt-3xs">
        <a href="#" class="d-block px-xs py-3xs br-m fs-s ink-subtle bg-wash:hover"
          >Alle konsulenter</a
        >
        <a href="#" class="d-block px-xs py-3xs br-m fs-s ink-subtle bg-wash:hover"
          >Ledige nå</a
        >
      </div>
    </details>
  </div>

  <p class="fs-xs ink-subtle fw-bold tt-uppercase px-xs mt-s mb-2xs">Konto</p>
  <div class="stack-v gap-4xs">
    <a
      href="#"
      class="stack-h items-center gap-xs px-xs py-2xs br-m ink-subtle bg-wash:hover"
    >
      <span class="v-icon fs-xs" data-v-icon="pencil"></span>
      Innstillinger
    </a>
  </div>
</nav>
```

A breadcrumb trail, links until the last (current) crumb, which is plain text.

```html
<nav aria-label="Breadcrumb" class="stack-h items-center gap-3xs fs-s">
  <a href="#" class="v-link ink-subtle">Prosjekter</a>
  <span class="ink-subtle">/</span>
  <a href="#" class="v-link ink-subtle">Varde Designsystem</a>
  <span class="ink-subtle">/</span>
  <span class="fw-medium">Bemanning</span>
</nav>
```

A collapsed, icon-only rail — the same links as the sidebar above, reduced to a narrow column. Each icon carries a `title` and `aria-label` so its name is still available on hover and to assistive tech.

```html
<nav
  class="stack-v items-center gap-3xs surface-base b-all bc-subtle br-l p-2xs w-max-0"
  style="min-height: 20rem;"
  aria-label="Hovedmeny"
>
  <a
    href="#"
    title="Oversikt"
    aria-label="Oversikt"
    aria-current="page"
    class="d-inline-flex items-center justify-center aspect-square w-full br-m surface-tinted"
  >
    <span class="v-icon fs-s" data-v-icon="plus"></span>
  </a>
  <a
    href="#"
    title="Prosjekter"
    aria-label="Prosjekter"
    class="d-inline-flex items-center justify-center aspect-square w-full br-m ink-subtle bg-wash:hover"
  >
    <span class="v-icon fs-s" data-v-icon="plus"></span>
  </a>
  <a
    href="#"
    title="Konsulenter"
    aria-label="Konsulenter"
    class="d-inline-flex items-center justify-center aspect-square w-full br-m ink-subtle bg-wash:hover"
  >
    <span class="v-icon fs-s" data-v-icon="pencil"></span>
  </a>
  <a
    href="#"
    title="Innstillinger"
    aria-label="Innstillinger"
    class="d-inline-flex items-center justify-center aspect-square w-full br-m ink-subtle bg-wash:hover mt-auto"
  >
    <span class="v-icon fs-s" data-v-icon="pencil"></span>
  </a>
</nav>
```
