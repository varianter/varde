# Real World Example — Filter Sidebar

# Pretty fjes

```html
<style>
  @property --pf-gaze-x {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --pf-gaze-y {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  @keyframes pf-gaze {
    0%,
    7% {
      --pf-gaze-x: 0;
      --pf-gaze-y: 0;
    }
    15%,
    29% {
      --pf-gaze-x: -1;
      --pf-gaze-y: -0.2;
    }
    37%,
    49% {
      --pf-gaze-x: 0.9;
      --pf-gaze-y: -0.6;
    }
    57%,
    68% {
      --pf-gaze-x: 0.6;
      --pf-gaze-y: 0.9;
    }
    77%,
    87% {
      --pf-gaze-x: -0.5;
      --pf-gaze-y: 0.45;
    }
    95%,
    100% {
      --pf-gaze-x: 0;
      --pf-gaze-y: 0;
    }
  }

  @keyframes pf-eyes-open {
    0%,
    92.5% {
      opacity: 1;
    }
    93%,
    96% {
      opacity: 0;
    }
    96.5% {
      opacity: 1;
    }
  }
  @keyframes pf-eyes-shut {
    0%,
    92.5% {
      opacity: 0;
    }
    93%,
    96% {
      opacity: 1;
    }
    96.5% {
      opacity: 0;
    }
  }

  @scope (.pf-face) {
    :scope {
      animation: pf-gaze 12s cubic-bezier(0.25, 1, 0.4, 1) infinite;
    }

    .pf-turn,
    .pf-layer {
      transform-box: view-box;
    }

    .pf-turn {
      transform-origin: 39px 39px;
      transform: rotate(calc(var(--pf-gaze-x) * 2.5deg))
        scaleX(calc(1 - max(var(--pf-gaze-x), var(--pf-gaze-x) * -1) * 0.045));
    }

    .pf-layer {
      transform: translate(
        calc(var(--pf-gaze-x) * var(--pf-depth) * 1px),
        calc(var(--pf-gaze-y) * var(--pf-depth) * 0.6px)
      );
    }

    .pf-back {
      --pf-depth: 1;
    }
    .pf-mid {
      --pf-depth: 2.6;
    }
    .pf-front {
      --pf-depth: 4.2;
    }

    .pf-eyes-open {
      animation: pf-eyes-open 3.7s steps(1, end) infinite;
    }
    .pf-eyes-shut {
      animation: pf-eyes-shut 3.7s steps(1, end) infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      :scope,
      .pf-eyes-open,
      .pf-eyes-shut {
        animation: none;
      }
    }
  }
</style>
<svg
  class="pf-face"
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
```

# Badges

```html
<div class="stack-horizontal gap-xs bg-surface-base p-m">
  <color-mode
    palette="blue"
    class="bg-surface-dyed stack br-pill px-xs py-3xs fs-s t-medium"
  >
    Blue
  </color-mode>
  <color-mode
    inverted
    palette="blue"
    class="bg-surface-dyed stack br-pill px-xs py-3xs fs-s t-medium"
  >
    Inverted Blue
  </color-mode>

  <color-mode
    palette="blue"
    class="bg-surface-dyed stack br-pill px-xs py-3xs fs-s t-medium"
  >
    Blue
  </color-mode>
  <color-mode
    inverted
    palette="blue"
    class="bg-surface-dyed stack br-pill px-xs py-3xs fs-s t-medium"
  >
    Inverted Blue
  </color-mode>
</div>
```

# Bemanning

```html
<div class="stack-horizontal gap-m mb-l">
  <div class=" mr-auto">
    <button class="button" data-size="small" data-variant="outlined">
      Filter
    </button>
  </div>

  <div class="ml-auto stack-horizontal gap-3xs">
    <select data-size="small" class="select mr-s">
      <option>4 uker</option>
      <option>12 uker</option>
      <option>26 uker</option>
    </select>
    <button class="button" data-size="small" data-variant="outlined">
      Nåværende uke
    </button>
    <button
      class="button aspect-ratio-1-1 p-0"
      data-size="small"
      data-variant="outlined"
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
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
    <button
      class="button aspect-ratio-1-1 p-0"
      data-size="small"
      data-variant="outlined"
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
<div
  class="d-grid bg-surface-base gap-3xs"
  style="grid-template-columns: 250px repeat(4, 1fr);"
>
  <div class="row grid-subgrid grid-all-columns pb-s" style="">
    <div class="head-column stack-horizontal gap-2xs ">
      Konsulenter
      <color-mode
        palette="orange"
        class="d-iblock px-2xs bg-surface-dyed br-pill fs-xs"
        >96</color-mode
      >
    </div>
    <div
      class="grid-subgrid"
      style="
        grid-auto-flow: column;
        grid-column: 2 / -1;
    "
    >
      <div class="column t-right px-3xs fs-xs stack">
        <div class="t-medium">■ uke 35</div>
        <div class="fg-muted">24.08 - 28.08</div>
      </div>
      <div class="column t-right px-3xs fs-xs stack">
        <div class="t-medium">uke 35</div>
        <div class="fg-muted">24.08 - 28.08</div>
      </div>
      <div class="column t-right px-3xs fs-xs stack">
        <div class="t-medium">uke 35</div>
        <div class="fg-muted">24.08 - 28.08</div>
      </div>
      <div class="column t-right px-3xs fs-xs stack">
        <div class="t-medium">uke 35</div>
        <div class="fg-muted">24.08 - 28.08</div>
      </div>
    </div>
  </div>
  <div class="row grid-subgrid grid-all-columns" style="">
    <div class="head-column stack-horizontal gap-xs">
      <div
        style="height: 2lh; width: 2lh;"
        class="bg-surface-dyed aspect-ratio-1-1 br-s mw-2"
      ></div>
      <div class="name pr-2xs">
        <p class="fs-s t-medium">Jacob Berglund</p>
        <p class="fs-xs fg-muted">12 års erfaring</p>
      </div>
    </div>
    <div
      class="grid-subgrid"
      style="
      grid-auto-flow: column;
      grid-column: 2 / -1;
  "
    >
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <color-mode
          palette="blue"
          class="ml-auto p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
        >
          <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
          <div class="lh-tight">7.5</div>
        </color-mode>
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">30.0</div>
      </div>
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">37.5</div>
      </div>
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">37.5</div>
      </div>
      <color-mode
        palette="yellow"
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="stack-horizontal justify-end gap-3xs">
          <color-mode
            palette="purple"
            class=" p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
          >
            <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
            <div class="lh-tight fg-muted">7.5</div>
          </color-mode>
          <color-mode
            palette="yellow"
            class=" p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
          >
            <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
            <div class="lh-tight fg-muted">7.5</div>
          </color-mode>
        </div>
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">30.0</div>
      </color-mode>
    </div>
  </div>

  <div class="row grid-subgrid grid-all-columns" style="">
    <div class="head-column stack-horizontal gap-xs">
      <div
        style="height: 2lh; width: 2lh;"
        class="bg-surface-dyed aspect-ratio-1-1 br-s mw-2"
      ></div>
      <div class="name pr-2xs">
        <p class="fs-s t-medium">Jacob Berglund</p>
        <p class="fs-xs fg-muted">12 års erfaring</p>
      </div>
    </div>
    <div
      class="grid-subgrid"
      style="
      grid-auto-flow: column;
      grid-column: 2 / -1;
  "
    >
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <color-mode
          palette="blue"
          class="ml-auto p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
        >
          <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
          <div class="lh-tight">7.5</div>
        </color-mode>
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">30.0</div>
      </div>
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">37.5</div>
      </div>
      <div
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">37.5</div>
      </div>
      <color-mode
        palette="yellow"
        class="column p-3xs px-2xs bg-surface-tinted stack justify-end br-s gap-2xs"
      >
        <div class="stack-horizontal justify-end gap-3xs">
          <color-mode
            palette="purple"
            class=" p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
          >
            <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
            <div class="lh-tight fg-muted">7.5</div>
          </color-mode>
          <color-mode
            palette="yellow"
            class=" p-4xs pr-3xs bg-surface-dyed fs-xs br-s b-all b-faint stack-horizontal nowrap gap-4xs"
          >
            <div class="icon" style="font-size: 8px;" data-icon="plus"></div>
            <div class="lh-tight fg-muted">7.5</div>
          </color-mode>
        </div>
        <div class="ml-auto  t-right fs-l lh-tight fg-muted ">30.0</div>
      </color-mode>
    </div>
  </div>
</div>
```

# Choicebox

Inspiration:
https://vercel.com/geist/choicebox

This is where JS would come in hand to switch between `palette="blue|grey"` when the radio is selected.

```html
<div class="stack-horizontal gap-s">
  <color-mode palette="blue" class="d-block flex-1  br-m  bg-surface-dyed">
    <label
      class="stack-horizontal gap-m p-xs bg-wash:hover b-prominent b-all   br-inherit"
    >
      <div class="mr-auto">
        <h5 class="fg-muted t-medium fs-m">Pro trial</h5>
        <p class="fg-muted">Free for two weeks</p>
      </div>
      <input type="radio" class="radio" name="trial" checked />
    </label>
  </color-mode>

  <color-mode
    palette="grey"
    class="d-block flex-1 b-all b-prominent br-m  bg-surface-dyed "
  >
    <label class="stack-horizontal gap-m p-xs bg-wash:hover">
      <div class="mr-auto">
        <h5 class="fg-muted t-medium fs-m">Pro trial</h5>
        <p class="fg-muted">Free for two weeks</p>
      </div>
      <input type="radio" class="radio" name="trial" />
    </label>
  </color-mode>
</div>
```

## Split buttons

Not sure if it is possible, but here we go!
https://vercel.com/geist/split-button

Edit: turns out it's somewhat possible. We're using two buttons in a `stack-horizontal nowrap`, when using a

```html
<div class="stack-horizontal nowrap">
  <button class="button brtr-none brbr-none px-l">Save</button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    class="aspect-ratio-1-1 brbl-none brtl-none button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>

<div class="stack-horizontal nowrap">
  <button data-variant="tinted" class="button brtr-none brbr-none px-l">
    Save
  </button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    data-variant="tinted"
    class="aspect-ratio-1-1 brbl-none brtl-none button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>

<div class="stack-horizontal nowrap">
  <button data-variant="outlined" class="button brtr-none brbr-none px-l">
    Save
  </button>
  <div class="bg-currentcolor self-stretch"></div>
  <button
    data-variant="outlined"
    class="aspect-ratio-1-1 brbl-none brtl-none button p-0"
    popovertarget="split-button-popover"
  >
    <svg
      viewBox="0 0 16 16"
      height="16"
      width="16"
      data-slot="geist-icon"
      style="color: currentcolor;"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m14.06 5.5-.53.53-4.82 4.82a1 1 0 0 1-1.42 0L2.47 6.03l-.53-.53L3 4.44l.53.53L8 9.44l4.47-4.47.53-.53z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</div>
<div
  id="split-button-popover"
  class="popover"
  popover="auto"
  data-type="tooltip"
  data-position="bottom"
>
  <div
    class="p-3xs b-all bg-surface-base stack br-l mw-4 fs-s m-2xs"
    stagger-items="from-above"
  >
    <div class="p-3xs bg-wash:hover br-m stack gap-3xs" href="#">
      <h4>Save</h4>
      <p class="fg-muted">Save charges</p>
    </div>
    <div class="p-3xs bg-wash:hover br-m stack gap-3xs" href="#">
      <h4>Save + Redeploy</h4>
      <p class="fg-muted">
        Save changes and create a new production deployment
      </p>
    </div>
  </div>
</div>
```

## Nice popovers

This one leverages a popover, a details list, and a form

```html
<button type="button" class="button" popovertarget="demo-default">
  Open popover
</button>

<button class="button" popovertarget="demo-drawer">Open sidebar</button>

<div
  id="demo-drawer"
  class="popover"
  popover="auto"
  data-type="drawer"
  data-position="left"
  style="width: 420px;"
>
  <div
    class="stack nowrap gap-s p-m bg-surface-tinted  of-scroll shadow-high m-s"
    style="
      min-height: 100svh;
      max-height: 100svh;
  "
  >
    <!-- Header -->
    <div
      class="position-sticky top-0 shadow-medium  br-m bg-surface-dyed justify-between mx--xs p-2xs px-xs stack-horizontal"
    >
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
    <div class="stack gap-2xs my-l">
      <label class="form-label" for="consultantSearch">Søk etter navn</label>
      <input
        class="input"
        type="text"
        id="consultantSearch"
        data-size="large"
      />
    </div>

    <!-- Status -->
    <div class="b-all b-faint bg-surface-base br-l gap-2xs px-xs py-2xs stack">
      <div class="stack gap-2xs">
        <div class="stack-horizontal gap-2xs">
          <label for="Ledig-tid" class="fs-s t-medium flex-1">Ledig tid</label>
          <input
            class="checkbox fs-s "
            data-size="large"
            type="checkbox"
            id="Ledig-tid"
          />
        </div>
      </div>
    </div>

    <!-- Avdeling -->
    <div class="stack gap-2xs p-xs bg-surface-base b-all b-faint br-l">
      <p class="form-label">Avdeling</p>
      <div class="stack gap-2xs">
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Bergen" />
          <label for="Bergen" class="fs-s stack-horizontal flex-1 ">
            <span class="mr-auto">Bergen</span>
            <span class="fg-muted">30</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Oslo" />
          <label for="Oslo" class="fs-s stack-horizontal flex-1 ">
            <span class="mr-auto">Oslo</span>
            <span class="fg-muted">30</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Trondheim" />
          <label for="Trondheim" class="fs-s stack-horizontal flex-1 ">
            <span class="mr-auto">Trondheim</span>
            <span class="fg-muted">30</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Stavanger" />
          <label for="Stavanger" class="fs-s stack-horizontal flex-1 ">
            <span class="mr-auto">Stavanger</span>
            <span class="fg-muted">30</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Norge" />
          <label for="Norge" class="fs-s stack-horizontal flex-1 ">
            <span class="mr-auto">Norge</span>
            <span class="fg-muted">30</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Rå-år -->
    <div class="stack gap-2xs p-xs bg-surface-base b-all b-faint br-l">
      <p class="form-label">Rå-år / Antall år erfaring</p>
      <div class="stack gap-2xs">
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m"
        >
          <input class="checkbox fs-s" type="checkbox" id="0-2-Kilimanjaro" />
          <label
            for="0-2-Kilimanjaro"
            class="fs-s stack-horizontal gap-xs flex-1"
          >
            <span class="mr-auto">Kilimanjaro</span>
            <span class="fg-muted">0-2</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m"
        >
          <input class="checkbox fs-s" type="checkbox" id="3-4-Mont-Blanc" />
          <label
            for="3-4-Mont-Blanc"
            class="fs-s stack-horizontal gap-xs flex-1"
          >
            <span class="mr-auto">Mont Blanc</span>
            <span class="fg-muted">3-4 </span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m"
        >
          <input class="checkbox fs-s" type="checkbox" id="5-7-Denali" />
          <label for="5-7-Denali" class="fs-s stack-horizontal gap-xs flex-1">
            <span class="mr-auto">Denali</span>
            <span class="fg-muted">5-7 </span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m"
        >
          <input class="checkbox fs-s" type="checkbox" id="8-11-Cerro-Torre" />
          <label
            for="8-11-Cerro-Torre"
            class="fs-s stack-horizontal gap-xs flex-1"
          >
            <span class="mr-auto"> Cerro Torre</span>
            <span class="fg-muted">8-11</span>
          </label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m"
        >
          <input class="checkbox fs-s" type="checkbox" id="12+-K2" />
          <label for="12+-K2" class="fs-s stack-horizontal gap-xs flex-1">
            <span class="mr-auto">K2</span>
            <span class="fg-muted">12+ </span>
          </label>
        </div>
      </div>
      <div class="stack gap-3xs mt-s">
        <div
          class="stack-horizontal gap-3xs flex-1 b-all br-m b-faint py-3xs pl-2xs pr-3xs"
        >
          <label class="fs-xs t-medium p-3xs" for="yearsExperienceFrom"
            >Fra</label
          >
          <input
            class="input mw-2 ml-auto t-right"
            type="number"
            data-size="small"
            id="yearsExperienceFrom"
          />
        </div>
        <div
          class="stack-horizontal gap-3xs flex-1 b-all br-m b-faint py-3xs pl-2xs pr-3xs"
        >
          <label class="fs-xs t-medium p-3xs" for="yearsExperienceTo"
            >Til</label
          >
          <input
            class="input mw-2 ml-auto t-right"
            type="number"
            data-size="small"
            id="yearsExperienceTo"
          />
        </div>
      </div>
    </div>

    <!-- Antall år erfaring -->
    <div class="stack gap-2xs p-xs bg-surface-base b-all b-faint br-l">
      <p class="form-label">Antall år erfaring</p>
    </div>

    <!-- Kompetanse -->
    <div class="stack gap-2xs p-xs bg-surface-base b-all b-faint br-l">
      <p class="form-label">Kompetanse</p>
      <div class="stack gap-2xs">
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Ledelse" />
          <label for="Ledelse" class="fs-s">Ledelse</label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Design" />
          <label for="Design" class="fs-s">Design</label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Utvikling" />
          <label for="Utvikling" class="fs-s">Utvikling</label>
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input
            class="checkbox fs-s"
            type="checkbox"
            id="Prosjekt--og-produktledelse"
          />
          <label for="Prosjekt--og-produktledelse" class="fs-s"
            >Prosjekt- og produktledelse</label
          >
        </div>
        <div
          class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
        >
          <input class="checkbox fs-s" type="checkbox" id="Strategi" />
          <label for="Strategi" class="fs-s">Strategi</label>
        </div>
      </div>
    </div>

    <!-- Faggruppe -->
    <div class="stack gap-2xs p-xs bg-surface-base b-all b-faint br-l">
      <details>
        <summary class="stack-horizontal gap-xs">
          <h3 class="form-label">Faggruppe</h3>
          <div class="button ml-auto" data-variant="tinted" data-size="small">
            Vis
          </div>
        </summary>

        <div class="stack gap-2xs py-s">
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id=".NET" />
            <label for=".NET" class="fs-s">.NET</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="Frontend" />
            <label for="Frontend" class="fs-s">Frontend</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="JVM" />
            <label for="JVM" class="fs-s">JVM</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="Plattform" />
            <label for="Plattform" class="fs-s">Plattform</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="PPP-ledelse" />
            <label for="PPP-ledelse" class="fs-s">PPP-ledelse</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="Salg" />
            <label for="Salg" class="fs-s">Salg</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="Tjenestedesign" />
            <label for="Tjenestedesign" class="fs-s">Tjenestedesign</label>
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input
              class="checkbox fs-s"
              type="checkbox"
              id="Strategisk-design"
            />
            <label for="Strategisk-design" class="fs-s"
              >Strategisk design</label
            >
          </div>
          <div
            class="stack-horizontal gap-2xs py-3xs pr-2xs mr--2xs pl-3xs ml--3xs  my--3xs bg-wash:hover br-m "
          >
            <input class="checkbox fs-s" type="checkbox" id="UX-design" />
            <label for="UX-design" class="fs-s">UX-design</label>
          </div>
        </div>
      </details>
    </div>
  </div>
</div>

<div
  id="demo-default"
  class="popover w-full"
  data-backdrop
  popover="auto"
  style="max-width: 68rem;"
>
  <div
    class="d-block p-l stack bg-surface-tinted br-xl shadow-high"
    stagger-items="soft"
  >
    <div class="stack-horizontal gap-m items-start">
      <div class="mw-4">
        <h1 class="lh-tight">Get started with Varde</h1>
        <p class="fg-muted mt-xs">It's really simple – anyone could do it!</p>
      </div>

      <div class="shadow-medium flex-1 bg-surface-base br-l of-clip">
        <div class="px-l-xl py-m b-b b-faint stack">
          <label class="t-medium mb-3xs">Where is your endpoint?</label>
          <input
            value="https://varde.variant.dev/api"
            type="text"
            class="input"
          />
        </div>

        <div class="px-l-xl py-m b-b b-faint stack">
          <label class="t-medium mb-3xs">Your repo</label>
          <input
            value="https://varde.variant.dev/api"
            type="text"
            class="input"
          />
        </div>

        <color-mode
          palette="periwinkle"
          class="d-block px-l-xl py-m bg-surface-dyed"
        >
          <details>
            <summary class="t-medium stack-horizontal">
              <p class="mr-auto">Not yet ready to implement?</p>
              <div
                type="button"
                data-variant="tinted"
                data-size="small"
                class="button"
              >
                Tell me more
              </div>
            </summary>
            <div class="typeset py-s">
              <p class="t-medium">
                Get started and try Varde by following these steps
              </p>
              <ol>
                <li>Link to</li>
                <li>Run prompt <code>???</code></li>
                <li>Profit</li>
              </ol>
              <p>
                For more details see
                <a href="https://varde.variant.dev/docs">Varde docs</a>
              </p>
            </div>
          </details>
        </color-mode>
      </div>
    </div>
    <div class="stack-horizontal mt-l">
      <button
        type="button"
        class="button mr-auto"
        data-variant="tinted"
        popovertargetaction="hide"
        popovertarget="demo-default"
      >
        Cancel
      </button>
      <button type="button" class="button">Go, go, go!</button>
    </div>
  </div>
</div>
```

## Chips

This one utilizes an escape hatch

```html
<div class="stack-horizontal gap-xs">
  <button
    type="button"
    class="button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Trondheim
  </button>
  <button
    type="button"
    class="button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Oslo
  </button>
  <color-mode inverted>
    <button
      type="button"
      class="button br-pill"
      data-size="small"
      data-variant="tinted"
    >
      Bergen
    </button>
  </color-mode>
  <button
    type="button"
    class="button br-pill"
    data-size="small"
    data-variant="outlined"
  >
    Stavanger
  </button>
</div>
```

## Time slots

```html
<color-mode
  palette="periwinkle"
  class="d-block bg-surface-tinted p-xl m--s br-inherit of-clip"
>
  <color-mode
    inverted
    class="bg-surface-dyed d-block br-l mb-xl mt-2xl pb-2xs pt-xs px-s"
  >
    <p class="lh-tight">Velkommen til</p>
    <h1 class="fs-4xl t-bold">Variantdag</h1>
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
<div class="bg-surface-base br-m py-m px-xl">
  <div class="stack-horizontal items-start mb-l ">
    <div class="mr-auto">
      <h3 class="fs-2xl">Finansiell status</h3>
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

  <div
    class="d-grid gap-s"
    stagger-reveal
    style="grid-template-columns: repeat(3, 1fr)"
  >
    <!-- MRR -->
    <color-mode palette="green" class="d-block">
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
      <div class="fs-3xl t-bold mb-2xs fg-mutedefault">350K</div>
    </color-mode>

    <!-- OpEx -->
    <color-mode palette="coral" class="d-block">
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
      <div class="fs-3xl t-bold mb-2xs fg-mutedefault">211K</div>
    </color-mode>

    <!-- CapEx -->
    <color-mode palette="green" class="d-block">
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
      <div class="fs-3xl t-bold mb-2xs fg-mutedefault">94K</div>
    </color-mode>

    <!-- GPM -->
    <color-mode palette="coral" class="d-block">
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
      <div class="fs-3xl t-bold mb-2xs fg-mutedefault">44.6%</div>
    </color-mode>

    <!-- NPM -->
    <color-mode palette="green" class="d-block">
      <div class="stack-horizontal items-center gap-2xs mb-2xs">
        <span class="fs-s fg-muted">NPM</span>
        <span
          class="bg-surface-tinted fg-muted px-2xs py-4xs br-pill fs-xs t-medium"
          >0.0%</span
        >
      </div>
      <div class="fs-3xl t-bold mb-2xs fg-mutedefault">9.1%</div>
    </color-mode>

    <!-- EBITDA -->
    <color-mode palette="green" class="d-block">
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
        <div class="fs-3xl t-bold mb-2xs fg-default">443K</div>
      </div>
    </color-mode>
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
    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
      <span class="fs-s fg-muted">Order no.</span>
      <span class="fs-s fg-muted">Payment</span>
      <span class="fs-s fg-muted">Fulfillment</span>
      <span class="fs-s fg-muted t-right">Amount</span>
    </div>

    <hr />

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

    <div
      class="d-grid bg-wash:hover items-center"
      style="grid-template-columns: repeat(4, 1fr)"
    >
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

  <div class="stack justify-end mt-l">
    <button class="button mx-s px-xl" data-variant="tinted" data-size="small">
      Show more
    </button>
  </div>
</div>
```
