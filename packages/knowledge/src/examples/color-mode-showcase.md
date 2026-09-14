---
title: Color mode showcase
description: Nested and inverted `color-mode` usage, from a refill card to a full illustrated panel.
group: Foundations
---

```html
<color-mode palette="periwinkle" class="stack-v" inverted
  ><div
    class="surface-dyed pt-3xs pb-3xs px-s shrink mr-auto br-s brbl-none brbl-none -mb-3xs"
  >
    <h3 class="lh-tight fs-s">Refill</h3>
  </div>
  <div class="p-3xs surface-dyed br-m brtl-none br-tl-none">
    <color-mode
      palette="inherit"
      class="d-block surface-base br-s p-xs px-s pt-s"
      ><p class="fs-xl fw-medium lh-tight ink-prominent">
        Is this the future of colors? Yes, but color me biased. It is
        <i>a lot</i> of fun though.
      </p>
      <p class="ink-subtle fs-s mt-2xs">(certainly, it might)</p>
    </color-mode>
  </div>
</color-mode>

<color-mode class="d-block mt-xl" palette="periwinkle"
  ><div
    class="p-l surface-dyed stack gap-xl "
    style="border-radius: 6rem 6rem .375rem .375rem;"
  >
    <div>
      <svg
        class="pf-face"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="78"
        viewBox="0 0 78 78"
        fill="none"
      >
        <g class="pf-turn">
          <g class="pf-layer pf-back">
            <path
              d="M21.4556 41.5719V41.5719C28.3432 57.388 50.7755 57.388 57.6632 41.5719V41.5719"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g class="pf-layer pf-mid pf-eyes-open">
            <path
              d="M48.1181 29.0024V33.1553"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
            />
            <path
              d="M29.6606 29.0024V33.1553"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
            />
          </g>
          <g class="pf-layer pf-mid pf-eyes-shut" opacity="0">
            <path
              d="M46.05 31.0788H50.19"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
            />
            <path
              d="M27.59 31.0788H31.73"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
            />
          </g>
          <g class="pf-layer pf-front">
            <path
              d="M38.8887 29.0024V37.3081H42.3119"
              stroke="currentColor"
              stroke-width="4.02307"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
    <h4 class="fs-xl ink-prominent  ml-auto">
      If colors are made a into system rather than static values, what are the
      possibilities for composition, you might ask.
    </h4>
  </div>
</color-mode>
```
