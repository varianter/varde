---
title: Branded tab navigation
description: A tab strip where every tab is its own color-mode, the active one inverted and joined to an inverted panel below.
group: navigation
tags: [color-mode, composition]
---

A branded tab strip where the active tab joins the panel below. The custom CSS does three things. `position-anchor` pins one inverted background to the active tab, so it slides when the selection changes. Its `::before` and `::after` draw the curved corners with a masked `radial-gradient`. `--tab-overlap` tucks the panel under the strip, so the background covers the panel's corner on the first tab. A short script moves `aria-selected` and `inverted` to the clicked tab.

```html
<color-mode palette="purple" class="stack-v">
  <nav
    class="stack-h nowrap items-start gap-3xs pos-relative"
    role="tablist"
    data-sliding-tabs
  >
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >All cities <span class="ink-subtle">(8)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Bergen <span class="ink-subtle">(1)</span></a
      >
    </color-mode>
    <color-mode inverted palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="true"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium"
        >Oslo <span class="ink-subtle">(3)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Stavanger <span class="ink-subtle">(2)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Trondheim <span class="ink-subtle">(3)</span></a
      >
    </color-mode>
    <color-mode
      inverted
      palette="inherit"
      class="d-block surface-dyed br-xl br-bl-none br-br-none pos-absolute"
      data-tab-background
      aria-hidden="true"
    ></color-mode>
  </nav>

  <color-mode
    inverted
    palette="inherit"
    class="stack-v gap-xs surface-dyed br-2xl p-2xs"
    role="tabpanel"
  >
    <div class="px-l pt-l pb-m">
      <h2 class="fs-4xl fw-medium lh-tight ink-prominent">Become a variant!</h2>
      <p class="fs-l lh-relaxed mt-2xs">
        We would love your application. Can't find any suitable positions
        advertised for you? Contact the recruitment manager for the city you
        want to apply for. Contact information can be found at the bottom of the
        page.
      </p>
    </div>

    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Talent Acquisition Specialist
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Designer in Oslo
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Developer in Oslo
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
  </color-mode>
</color-mode>

<style>
  [data-sliding-tabs] {
    anchor-scope: --active-tab;
    --tab-transition: var(--interaction-transition-duration-enter-large)
      var(--interaction-transition-easing-large);
    --tab-overlap: var(--spacing-m);
    padding-bottom: var(--tab-overlap);
    margin-bottom: calc(-1 * var(--tab-overlap));
    overflow-x: auto;
    white-space: nowrap;
    isolation: isolate;
  }

  [data-sliding-tabs] color-mode:has(> [aria-selected="true"]) {
    anchor-name: --active-tab;
  }

  [data-sliding-tabs] [role="tab"],
  [data-sliding-tabs] [role="tab"] > * {
    transition: color var(--tab-transition);
  }

  [data-tab-background] {
    position-anchor: --active-tab;
    left: anchor(left);
    right: anchor(right);
    top: anchor(top);
    bottom: 0;
    z-index: -1;
    transition:
      left var(--tab-transition),
      right var(--tab-transition);
  }

  [data-tab-background]::before,
  [data-tab-background]::after {
    --curve: var(--border-radius-xl, 16px);
    content: "";
    position: absolute;
    bottom: var(--tab-overlap);
    width: var(--curve);
    height: var(--curve);
    background: inherit;
  }

  [data-tab-background]::before {
    right: 100%;
    mask: radial-gradient(circle at 0 0, transparent var(--curve), #000 0);
    transform-origin: 100% 100%;
    transition: scale var(--tab-transition);
  }

  [data-sliding-tabs]:has(> :first-child > [aria-selected="true"])
    > [data-tab-background]::before {
    scale: 0;
  }

  [data-tab-background]::after {
    left: 100%;
    mask: radial-gradient(circle at 100% 0, transparent var(--curve), #000 0);
  }
</style>

<script>
  document.addEventListener("click", (event) => {
    const tab = event.target.closest('[data-sliding-tabs] [role="tab"]');
    if (!tab) return;
    event.preventDefault();
    const nav = tab.closest("[data-sliding-tabs]");
    const invert = nav
      .querySelector("[data-tab-background]")
      .hasAttribute("inverted");
    nav.querySelectorAll('[role="tab"]').forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", selected);
      other.parentElement.toggleAttribute("inverted", selected && invert);
      other.classList.toggle("bg-wash:hover", !selected);
    });
  });
</script>
```

Without `inverted`, the background and the panel use `surface-dyed`, so the selection keeps the page's polarity instead of flipping it. The script copies `inverted` to the active tab only when the background has it, so the CSS and script above drive both strips.

```html
<color-mode palette="purple" class="stack-v">
  <nav
    class="stack-h nowrap items-start gap-3xs pos-relative"
    role="tablist"
    data-sliding-tabs
  >
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >All cities <span class="ink-subtle">(8)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Bergen <span class="ink-subtle">(1)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="true"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium"
        >Oslo <span class="ink-subtle">(3)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Stavanger <span class="ink-subtle">(2)</span></a
      >
    </color-mode>
    <color-mode palette="inherit" class="d-block mb-3xs px-4xs pt-4xs">
      <a
        href="#"
        role="tab"
        aria-selected="false"
        class="d-block px-s py-2xs br-xl ink-prominent fs-l fw-medium bg-wash:hover"
        >Trondheim <span class="ink-subtle">(3)</span></a
      >
    </color-mode>
    <color-mode
      palette="inherit"
      class="d-block surface-dyed br-xl br-bl-none br-br-none pos-absolute"
      data-tab-background
      aria-hidden="true"
    ></color-mode>
  </nav>

  <color-mode
    palette="inherit"
    class="stack-v gap-xs surface-dyed br-2xl p-2xs"
    role="tabpanel"
  >
    <div class="px-l pt-l pb-m">
      <h2 class="fs-4xl fw-medium lh-tight ink-prominent">Become a variant!</h2>
      <p class="fs-l lh-relaxed mt-2xs">
        We would love your application. Can't find any suitable positions
        advertised for you? Contact the recruitment manager for the city you
        want to apply for. Contact information can be found at the bottom of the
        page.
      </p>
    </div>

    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Talent Acquisition Specialist
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Designer in Oslo
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
    <color-mode palette="inherit" class="d-block surface-base br-l">
      <a
        href="#"
        class="stack-h items-center px-l py-s fs-l fw-medium bg-wash:hover br-l"
      >
        Developer in Oslo
        <span class="v-icon ml-auto" data-v-icon="chevron-right"></span>
      </a>
    </color-mode>
  </color-mode>
</color-mode>
```
