---
title: Bemanning
description: A staffing grid with a week view and a filter drawer.
group: Scheduling & booking
---

```html
<div class="stack-h gap-m mb-l">
  <div class=" mr-auto">
    <button
      class="v-button"
      data-size="small"
      data-variant="outlined"
      popovertarget="filter-drawer"
    >
      Filter
    </button>
  </div>

  <div class="ml-auto stack-h gap-3xs">
    <select data-size="small" class="v-select mr-s">
      <option>4 uker</option>
      <option>12 uker</option>
      <option>26 uker</option>
    </select>
    <button class="v-button" data-size="small" data-variant="outlined">
      Nåværende uke
    </button>
    <button
      class="v-button aspect-square p-0"
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
      class="v-button aspect-square p-0"
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
  class="d-grid surface-base gap-3xs of-scroll"
  style="grid-template-columns: 250px repeat(4, 100px);"
>
  <div class="row grid-subgrid grid-all-columns pb-s" style="">
    <div class="head-column stack-h gap-2xs ">
      Konsulenter
      <color-mode
        palette="orange"
        class="d-inline-block px-2xs surface-dyed br-pill fs-xs"
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
      <div class="column ta-right px-3xs fs-xs stack-v">
        <div class="fw-medium">■ uke 35</div>
        <div class="ink-subtle">24.08 - 28.08</div>
      </div>
      <div class="column ta-right px-3xs fs-xs stack-v">
        <div class="fw-medium">uke 35</div>
        <div class="ink-subtle">24.08 - 28.08</div>
      </div>
      <div class="column ta-right px-3xs fs-xs stack-v">
        <div class="fw-medium">uke 35</div>
        <div class="ink-subtle">24.08 - 28.08</div>
      </div>
      <div class="column ta-right px-3xs fs-xs stack-v">
        <div class="fw-medium">uke 35</div>
        <div class="ink-subtle">24.08 - 28.08</div>
      </div>
    </div>
  </div>
  <div class="row grid-subgrid grid-all-columns" style="">
    <div class="head-column stack-h gap-xs">
      <div
        style="height: 2lh; width: 2lh;"
        class="surface-dyed aspect-square br-s w-max-2"
      ></div>
      <div class="name pr-2xs">
        <p class="fs-s fw-medium">Jacob Berglund</p>
        <p class="fs-xs ink-subtle">12 års erfaring</p>
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
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <color-mode
          palette="blue"
          class="ml-auto p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
        >
          <div class="v-icon" style="font-size: 8px;" data-v-icon="plus"></div>
          <div class="lh-tight">7.5</div>
        </color-mode>
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">30.0</div>
      </div>
      <div
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">37.5</div>
      </div>
      <div
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">37.5</div>
      </div>
      <color-mode
        palette="coral"
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="stack-h justify-end gap-3xs">
          <color-mode
            palette="purple"
            class=" p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
          >
            <div
              class="v-icon"
              style="font-size: 8px;"
              data-v-icon="plus"
            ></div>
            <div class="lh-tight ink-subtle">7.5</div>
          </color-mode>
          <color-mode
            palette="yellow"
            class=" p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
          >
            <div
              class="v-icon"
              style="font-size: 8px;"
              data-v-icon="plus"
            ></div>
            <div class="lh-tight ink-subtle">7.5</div>
          </color-mode>
        </div>
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">15.0</div>
      </color-mode>
    </div>
  </div>

  <div class="row grid-subgrid grid-all-columns" style="">
    <div class="head-column stack-h gap-xs">
      <div
        style="height: 2lh; width: 2lh;"
        class="surface-dyed aspect-square br-s w-max-2"
      ></div>
      <div class="name pr-2xs">
        <p class="fs-s fw-medium">Jacob Berglund</p>
        <p class="fs-xs ink-subtle">12 års erfaring</p>
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
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <color-mode
          palette="blue"
          class="ml-auto p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
        >
          <div class="v-icon" style="font-size: 8px;" data-v-icon="plus"></div>
          <div class="lh-tight">7.5</div>
        </color-mode>
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">30.0</div>
      </div>
      <div
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">37.5</div>
      </div>
      <div
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">37.5</div>
      </div>
      <color-mode
        palette="yellow"
        class="column p-3xs px-2xs surface-tinted stack-v justify-end br-s gap-2xs"
      >
        <div class="stack-h justify-end gap-3xs">
          <color-mode
            palette="purple"
            class=" p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
          >
            <div
              class="v-icon"
              style="font-size: 8px;"
              data-v-icon="plus"
            ></div>
            <div class="lh-tight ink-subtle">7.5</div>
          </color-mode>
          <color-mode
            palette="yellow"
            class=" p-4xs pr-3xs surface-dyed fs-xs br-s b-all bc-subtle stack-h nowrap gap-4xs"
          >
            <div
              class="v-icon"
              style="font-size: 8px;"
              data-v-icon="plus"
            ></div>
            <div class="lh-tight ink-subtle">7.5</div>
          </color-mode>
        </div>
        <div class="ml-auto  ta-right fs-l lh-tight ink-subtle ">30.0</div>
      </color-mode>
    </div>
  </div>
</div>

<div
  id="filter-drawer"
  class="v-popover"
  popover="auto"
  data-type="drawer"
  data-position="left"
  style="width: 420px;"
>
  <div
    class="stack-v nowrap gap-s p-m surface-tinted  of-scroll shadow-high m-s"
    style="
      min-height: 100svh;
      max-height: 100svh;
  "
  >
    <!-- Header -->
    <div
      class="pos-sticky top-0 shadow-mid  br-m surface-dyed justify-between -mx-xs p-2xs px-xs stack-h"
    >
      <h1 class="fs-l fw-bold ink-prominent">Filter</h1>
      <button
        class="v-button"
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
    <div class="stack-v gap-2xs my-l">
      <label class="v-form-label" for="consultantSearch">Søk etter navn</label>
      <input
        class="v-input"
        type="text"
        id="consultantSearch"
        data-size="large"
      />
    </div>

    <!-- Status -->
    <div class="b-all bc-subtle surface-base br-l gap-2xs px-xs py-2xs stack-v">
      <div class="stack-v gap-2xs">
        <div class="stack-h gap-2xs">
          <label for="Ledig-tid" class="fs-s fw-medium flex-1">Ledig tid</label>
          <input
            class="v-checkbox fs-s "
            data-size="large"
            type="checkbox"
            id="Ledig-tid"
          />
        </div>
      </div>
    </div>

    <!-- Avdeling -->
    <div class="stack-v gap-2xs p-xs surface-base b-all bc-subtle br-l">
      <p class="v-form-label">Avdeling</p>
      <div class="stack-v gap-2xs">
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Bergen" />
          <label for="Bergen" class="fs-s stack-h flex-1 ">
            <span class="mr-auto">Bergen</span>
            <span class="ink-subtle">30</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Oslo" />
          <label for="Oslo" class="fs-s stack-h flex-1 ">
            <span class="mr-auto">Oslo</span>
            <span class="ink-subtle">30</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Trondheim" />
          <label for="Trondheim" class="fs-s stack-h flex-1 ">
            <span class="mr-auto">Trondheim</span>
            <span class="ink-subtle">30</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Stavanger" />
          <label for="Stavanger" class="fs-s stack-h flex-1 ">
            <span class="mr-auto">Stavanger</span>
            <span class="ink-subtle">30</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Norge" />
          <label for="Norge" class="fs-s stack-h flex-1 ">
            <span class="mr-auto">Norge</span>
            <span class="ink-subtle">30</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Rå-år -->
    <div class="stack-v gap-2xs p-xs surface-base b-all bc-subtle br-l">
      <p class="v-form-label">Rå-år / Antall år erfaring</p>
      <div class="stack-v gap-2xs">
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m"
        >
          <input class="v-checkbox fs-s" type="checkbox" id="0-2-Kilimanjaro" />
          <label for="0-2-Kilimanjaro" class="fs-s stack-h gap-xs flex-1">
            <span class="mr-auto">Kilimanjaro</span>
            <span class="ink-subtle">0-2</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m"
        >
          <input class="v-checkbox fs-s" type="checkbox" id="3-4-Mont-Blanc" />
          <label for="3-4-Mont-Blanc" class="fs-s stack-h gap-xs flex-1">
            <span class="mr-auto">Mont Blanc</span>
            <span class="ink-subtle">3-4 </span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m"
        >
          <input class="v-checkbox fs-s" type="checkbox" id="5-7-Denali" />
          <label for="5-7-Denali" class="fs-s stack-h gap-xs flex-1">
            <span class="mr-auto">Denali</span>
            <span class="ink-subtle">5-7 </span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m"
        >
          <input
            class="v-checkbox fs-s"
            type="checkbox"
            id="8-11-Cerro-Torre"
          />
          <label for="8-11-Cerro-Torre" class="fs-s stack-h gap-xs flex-1">
            <span class="mr-auto"> Cerro Torre</span>
            <span class="ink-subtle">8-11</span>
          </label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m"
        >
          <input class="v-checkbox fs-s" type="checkbox" id="12+-K2" />
          <label for="12+-K2" class="fs-s stack-h gap-xs flex-1">
            <span class="mr-auto">K2</span>
            <span class="ink-subtle">12+ </span>
          </label>
        </div>
      </div>
      <div class="stack-v gap-3xs mt-s">
        <div
          class="stack-h gap-3xs flex-1 b-all br-m bc-subtle py-3xs pl-2xs pr-3xs"
        >
          <label class="fs-xs fw-medium p-3xs" for="yearsExperienceFrom"
            >Fra</label
          >
          <input
            class="v-input w-max-2 ml-auto ta-right"
            type="number"
            data-size="small"
            id="yearsExperienceFrom"
          />
        </div>
        <div
          class="stack-h gap-3xs flex-1 b-all br-m bc-subtle py-3xs pl-2xs pr-3xs"
        >
          <label class="fs-xs fw-medium p-3xs" for="yearsExperienceTo"
            >Til</label
          >
          <input
            class="v-input w-max-2 ml-auto ta-right"
            type="number"
            data-size="small"
            id="yearsExperienceTo"
          />
        </div>
      </div>
    </div>

    <!-- Antall år erfaring -->
    <div class="stack-v gap-2xs p-xs surface-base b-all bc-subtle br-l">
      <p class="v-form-label">Antall år erfaring</p>
    </div>

    <!-- Kompetanse -->
    <div class="stack-v gap-2xs p-xs surface-base b-all bc-subtle br-l">
      <p class="v-form-label">Kompetanse</p>
      <div class="stack-v gap-2xs">
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Ledelse" />
          <label for="Ledelse" class="fs-s">Ledelse</label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Design" />
          <label for="Design" class="fs-s">Design</label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Utvikling" />
          <label for="Utvikling" class="fs-s">Utvikling</label>
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input
            class="v-checkbox fs-s"
            type="checkbox"
            id="Prosjekt--og-produktledelse"
          />
          <label for="Prosjekt--og-produktledelse" class="fs-s"
            >Prosjekt- og produktledelse</label
          >
        </div>
        <div
          class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
        >
          <input class="v-checkbox fs-s" type="checkbox" id="Strategi" />
          <label for="Strategi" class="fs-s">Strategi</label>
        </div>
      </div>
    </div>

    <!-- Faggruppe -->
    <div class="stack-v gap-2xs p-xs surface-base b-all bc-subtle br-l">
      <details>
        <summary class="stack-h gap-xs">
          <h3 class="v-form-label">Faggruppe</h3>
          <div class="v-button ml-auto" data-variant="tinted" data-size="small">
            Vis
          </div>
        </summary>

        <div class="stack-v gap-2xs py-s">
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id=".NET" />
            <label for=".NET" class="fs-s">.NET</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="Frontend" />
            <label for="Frontend" class="fs-s">Frontend</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="JVM" />
            <label for="JVM" class="fs-s">JVM</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="Plattform" />
            <label for="Plattform" class="fs-s">Plattform</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="PPP-ledelse" />
            <label for="PPP-ledelse" class="fs-s">PPP-ledelse</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="Salg" />
            <label for="Salg" class="fs-s">Salg</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input
              class="v-checkbox fs-s"
              type="checkbox"
              id="Tjenestedesign"
            />
            <label for="Tjenestedesign" class="fs-s">Tjenestedesign</label>
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input
              class="v-checkbox fs-s"
              type="checkbox"
              id="Strategisk-design"
            />
            <label for="Strategisk-design" class="fs-s"
              >Strategisk design</label
            >
          </div>
          <div
            class="stack-h gap-2xs py-3xs pr-2xs -mr-2xs pl-3xs -ml-3xs  -my-3xs bg-wash:hover br-m "
          >
            <input class="v-checkbox fs-s" type="checkbox" id="UX-design" />
            <label for="UX-design" class="fs-s">UX-design</label>
          </div>
        </div>
      </details>
    </div>
  </div>
</div>
```
