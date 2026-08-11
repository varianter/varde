# Real World Example — Filter Sidebar

## Time slots

```html
<color-mode
  palette="periwinkle"
  class="block bg-surface-tinted p-xl m--s br-inherit of-clip"
>
  <div class="mb-xl mt-2xl">
    <p>Velkommen til</p>
    <h1 class="fs-4xl t-bold">Variantdag</h1>
  </div>

  <div
    class="grid gap-column-xl gap-row-m"
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
      <div class="stack">
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

## KPI

```html
<div class="bg-surface-base br-m p-m">
  <div class="stack-horizontal items-start mb-m ">
    <div class="mr-auto">
      <h3 class="fs-2xl mb-2xs">Finansiell status</h3>
      <p class="fs-s fg-muted">Variants KPIs denne vs forrige måned.</p>
    </div>

    <div class="stack-horizontal gap-2xs">
      <button
        class="button aspect-ratio-1-1 px-3xs"
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
        class="button aspect-ratio-1-1 px-3xs"
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

  <div class="grid gap-s" style="grid-template-columns: repeat(3, 1fr)">
    <!-- MRR -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">MRR</span>
        <color-mode palette="green">
          <span
            class="bg-surface-dyed fg-emphasis stack-horizontal gap-3xs px-xs py-4xs br-pill fs-xs t-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml--3xs"
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
      <div class="fs-3xl t-bold mb-2xs">350K</div>
    </div>

    <!-- OpEx -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">OpEx</span>
        <color-mode palette="coral">
          <span
            class="bg-surface-dyed fg-emphasis stack-horizontal gap-3xs px-xs py-4xs br-pill fs-xs t-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml--3xs"
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
      <div class="fs-3xl t-bold mb-2xs">211K</div>
    </div>

    <!-- CapEx -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">CapEx</span>
        <color-mode palette="green">
          <span
            class="bg-surface-dyed fg-emphasis stack-horizontal gap-3xs px-xs py-4xs br-pill fs-xs t-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml--3xs"
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
      <div class="fs-3xl t-bold mb-2xs">94K</div>
    </div>

    <!-- GPM -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">GPM</span>
        <color-mode palette="coral">
          <span
            class="bg-surface-dyed fg-emphasis stack-horizontal gap-3xs px-xs py-4xs br-pill fs-xs t-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml--3xs"
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
      <div class="fs-3xl t-bold mb-2xs">44.6%</div>
    </div>

    <!-- NPM -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">NPM</span>
        <span
          class="bg-surface-tinted fg-muted px-2xs py-4xs br-pill fs-xs t-medium"
          >0.0%</span
        >
      </div>
      <div class="fs-3xl t-bold mb-2xs">9.1%</div>
    </div>

    <!-- EBITDA -->
    <div>
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">EBITDA</span>
        <color-mode palette="green">
          <span
            class="bg-surface-dyed fg-emphasis stack-horizontal gap-3xs px-xs py-4xs br-pill fs-xs t-medium"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml--3xs"
            >
              <path
                d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            4.1%
          </span>
        </color-mode>
      </div>
      <div class="fs-3xl t-bold mb-2xs">443K</div>
    </div>
  </div>
</div>
```

## A table

```html
<div class="bg-surface-base br-m mw-7 mx-auto my-xl p-m">
  <div class="stack-horizontal items-center justify-between mb-s">
    <h3 class="fs-l">Orders</h3>
    <button class="button" data-variant="plain" data-size="small">
      <svg
        width="12"
        height="12"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="fs-s">May 2023</span>
    </button>
  </div>

  <div class="stack gap-xs mb-s">
    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-s fg-muted">Order no.</span>
      <span class="fs-s fg-muted">Payment</span>
      <span class="fs-s fg-muted">Fulfillment</span>
      <span class="fs-s fg-muted t-right">Amount</span>
    </div>

    <hr />

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1005</a></span>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Paid</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="orange">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Delivering</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">154.60</span>
    </div>

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1004</a></span>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Paid</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="orange">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Unfulfilled</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">93.49</span>
    </div>

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1003</a></span>
      <div>
        <color-mode palette="grey">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Refunded</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="coral">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Cancelled</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">39.00</span>
    </div>

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1002</a></span>
      <div>
        <color-mode palette="orange">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Unpaid</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="orange">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Unfulfilled</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">438.90</span>
    </div>

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1001</a></span>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Paid</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Fulfilled</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">532.64</span>
    </div>

    <div class="grid" style="grid-template-columns: repeat(4, 1fr)">
      <span class="fs-m"><a href="#" class="link fs-s">#1000</a></span>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Paid</span
          >
        </color-mode>
      </div>
      <div>
        <color-mode palette="green">
          <span
            class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs t-medium"
            >Fulfilled</span
          >
        </color-mode>
      </div>
      <span class="fs-s t-right">625.03</span>
    </div>
  </div>

  <div class="stack-horizontal justify-end">
    <button class="button" data-variant="tinted" data-size="small">
      Show more
    </button>
  </div>
</div>
```

## A sidebar

```html
<button class="button" popovertarget="demo-drawer">Open sidebar</button>
  <div
    id="demo-drawer"
    class="popover"
    popover="auto"
    data-type="drawer"
    data-position="left"
    style="width: 420px;"
  >
    <div class="stack gap-l p-m bg-surface-base br-m of-scroll shadow-high">
      <!-- Header -->
      <div class="stack-horizontal justify-between">
        <h1 class="fs-l t-bold fg-emphasis">Filter</h1>
        <button
          class="button"
          data-variant="plain"
          data-size="small"
          aria-label="Lukk"
        >
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>

      <!-- Søk -->
      <div class="stack gap-2xs">
        <label class="form-label" for="consultantSearch">Søk</label>
        <input
          class="input"
          type="text"
          id="consultantSearch"
          placeholder="Søk etter konsulent"
        />
      </div>

      <!-- Status -->
      <div class="stack gap-2xs">
        <p class="form-label">Status</p>
        <div class="stack gap-2xs">
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Ledig-tid" />
            <label for="Ledig-tid" class="fs-s">Ledig tid</label>
          </div>
        </div>
      </div>

      <!-- Avdeling -->
      <div class="stack gap-2xs">
        <p class="form-label">Avdeling</p>
        <div class="stack gap-2xs">
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Bergen" />
            <label for="Bergen" class="fs-s">Bergen</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Oslo" />
            <label for="Oslo" class="fs-s">Oslo</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Trondheim" />
            <label for="Trondheim" class="fs-s">Trondheim</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Stavanger" />
            <label for="Stavanger" class="fs-s">Stavanger</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Norge" />
            <label for="Norge" class="fs-s">Norge</label>
          </div>
        </div>
      </div>

      <!-- Rå-år -->
      <div class="stack gap-2xs">
        <p class="form-label">Rå-år</p>
        <div class="stack gap-2xs">
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="0-2-Kilimanjaro" />
            <label for="0-2-Kilimanjaro" class="fs-s">0-2 Kilimanjaro</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="3-4-Mont-Blanc" />
            <label for="3-4-Mont-Blanc" class="fs-s">3-4 Mont Blanc</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="5-7-Denali" />
            <label for="5-7-Denali" class="fs-s">5-7 Denali</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="8-11-Cerro-Torre" />
            <label for="8-11-Cerro-Torre" class="fs-s">8-11 Cerro Torre</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="12+-K2" />
            <label for="12+-K2" class="fs-s">12+ K2</label>
          </div>
        </div>
      </div>

      <!-- Antall år erfaring -->
      <div class="stack gap-2xs">
        <p class="form-label">Antall år erfaring</p>
        <div class="stack-horizontal gap-s">
          <div class="stack gap-2xs flex-1">
            <label class="form-label" for="yearsExperienceFrom">Fra</label>
            <input

              class="input w-full"
              type="number"
              data-size="small"
              id="yearsExperienceFrom"
            />
          </div>
          <div class="stack gap-2xs flex-1">
            <label class="form-label" for="yearsExperienceTo">Til</label>
            <input

              class="input w-full"
              type="number"
              data-size="small"
              id="yearsExperienceTo"
            />
          </div>
        </div>
      </div>

      <!-- Kompetanse -->
      <div class="stack gap-2xs">
        <p class="form-label">Kompetanse</p>
        <div class="stack gap-2xs">
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Ledelse" />
            <label for="Ledelse" class="fs-s">Ledelse</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Design" />
            <label for="Design" class="fs-s">Design</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Utvikling" />
            <label for="Utvikling" class="fs-s">Utvikling</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input
              class="checkbox fs-s"
              type="checkbox"
              id="Prosjekt--og-produktledelse"
            />
            <label for="Prosjekt--og-produktledelse" class="fs-s"
              >Prosjekt- og produktledelse</label
            >
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Strategi" />
            <label for="Strategi" class="fs-s">Strategi</label>
          </div>
        </div>
      </div>

      <!-- Faggruppe -->
      <div class="stack gap-2xs">
        <p class="form-label">Faggruppe</p>
        <div class="stack gap-2xs">
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id=".NET" />
            <label for=".NET" class="fs-s">.NET</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Frontend" />
            <label for="Frontend" class="fs-s">Frontend</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="JVM" />
            <label for="JVM" class="fs-s">JVM</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Plattform" />
            <label for="Plattform" class="fs-s">Plattform</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="PPP-ledelse" />
            <label for="PPP-ledelse" class="fs-s">PPP-ledelse</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Salg" />
            <label for="Salg" class="fs-s">Salg</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Tjenestedesign" />
            <label for="Tjenestedesign" class="fs-s">Tjenestedesign</label>
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="Strategisk-design" />
            <label for="Strategisk-design" class="fs-s"
              >Strategisk design</label
            >
          </div>
          <div class="stack-horizontal gap-2xs">
            <input class="checkbox fs-s" type="checkbox" id="UX-design" />
            <label for="UX-design" class="fs-s">UX-design</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</button>
```
