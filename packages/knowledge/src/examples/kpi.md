---
title: KPI
description: A KPI dashboard with tinted cards and trend pills.
group: data
---

```html
<div class="surface-base br-m py-m px-xl">
  <div class="stack-h items-start mb-l ">
    <div class="mr-auto">
      <h3 class="fs-2xl">Finansiell status</h3>
      <p class="fs-xs ink-subtle fw-bold">
        Variants KPIs denne vs forrige måned.
      </p>
    </div>

    <div class="stack-h gap-2xs">
      <button
        class="v-button aspect-square px-3xs"
        data-variant="plain"
        data-size="small"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <button
        class="v-button aspect-square px-3xs"
        data-variant="plain"
        data-size="small"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <div
    class="d-grid gap-s"
    stagger-reveal
    style="grid-template-columns: repeat(3, 1fr)"
  >
    <!-- MRR -->
    <color-mode palette="grey" class="d-block">
      <div class="stack-h items-center gap-2xs mb-2xs">
        <span class="fs-xs ink-subtle fw-bold">MRR</span>
        <color-mode palette="periwinkle">
          <span
            class="b-all bc-subtle br-pill fs-xs fw-medium gap-3xs ink-prominent lh-snug px-2xs py-4xs stack-h surface-dyed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="-ml-3xs"
            >
              <path
                d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            3.2%
          </span>
        </color-mode>
      </div>
      <div class="fs-4xl fw-bold mb-2xs">350<span class="fs-m">K</span></div>
    </color-mode>

    <!-- OpEx -->
    <color-mode palette="grey" class="d-block">
      <div class="stack-h items-center gap-2xs mb-2xs">
        <span class="fs-xs ink-subtle fw-bold">OpEx</span>
        <color-mode palette="coral">
          <span
            class="b-all bc-subtle br-pill fs-xs fw-medium gap-3xs ink-prominent lh-snug px-2xs py-4xs stack-h surface-dyed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="-ml-3xs"
            >
              <path
                d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            12.8%
          </span>
        </color-mode>
      </div>
      <div class="fs-4xl fw-bold mb-2xs">211<span class="fs-m">K</span></div>
    </color-mode>

    <!-- CapEx -->
    <color-mode palette="grey" class="d-block">
      <div class="stack-h items-center gap-2xs mb-2xs">
        <span class="fs-xs ink-subtle fw-bold">CapEx</span>
        <color-mode palette="yellow">
          <span
            class="b-all bc-subtle br-pill fs-xs fw-medium gap-3xs ink-prominent lh-snug px-2xs py-4xs stack-h surface-dyed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="-ml-3xs"
            >
              <path
                d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            8.8%
          </span>
        </color-mode>
      </div>
      <div class="fs-4xl fw-bold mb-2xs">94<span class="fs-m">K</span></div>
    </color-mode>

    <!-- GPM -->
    <color-mode palette="grey" class="d-block">
      <div class="stack-h items-center gap-2xs mb-2xs">
        <span class="fs-xs ink-subtle fw-bold">GPM</span>
        <color-mode palette="yellow">
          <span
            class="b-all bc-subtle br-pill fs-xs fw-medium gap-3xs ink-prominent lh-snug px-2xs py-4xs stack-h surface-dyed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="-ml-3xs"
            >
              <path
                d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            1.2%
          </span>
        </color-mode>
      </div>
      <div class="fs-4xl fw-bold mb-2xs">44.6<span class="fs-m">%</span></div>
    </color-mode>

    <!-- NPM -->
    <color-mode palette="grey" class="d-block">
      <div class="stack-h items-center gap-2xs mb-2xs">
        <span class="fs-xs ink-subtle fw-bold">NPM</span>
        <span
          class="b-all bc-subtle br-pill fs-xs fw-medium gap-3xs ink-prominent lh-snug px-2xs py-4xs stack-h surface-dyed"
          >0.0%</span
        >
      </div>
      <div class="fs-4xl fw-bold mb-2xs">9.1<span class="fs-m">%</span></div>
    </color-mode>
  </div>
</div>
```
