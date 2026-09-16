---
title: Deviations
description: A route-package deviation list with tabs, filters, and a subgrid table.
group: Data display
---

```html
<div class="mx-auto  surface-base -mx-s -my-s p-s">
  <div class="stack-h items-start justify-between gap-m pt-xl p-s mb-s">
    <div class="">
      <h2 class="fs-xl">Rutepakke 1: Bysundby</h2>

      <div class="stack-h gap-s mt-s">
        <button class="v-button" data-variant="outlined">
          <span class="v-icon" data-v-icon="plus"></span>
          Opprett avvik
        </button>
        <button class="v-button" data-variant="plain">
          Kontroller ekskluderte avvik
          <svg
            width="14"
            height="14"
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
    <div class="stack-h gap-2xs">
      <div class="surface-base br-m px-s py-2xs ta-right">
        <div class="fs-l fw-bold t-tabular">17 520,79 kr</div>
        <div class="fs-xs ink-subtle">Forventet for august per i dag</div>
      </div>
      <div class="surface-base br-m px-s py-2xs ta-right">
        <div class="fs-l fw-bold t-tabular">17 520,79 kr</div>
        <div class="fs-xs ink-subtle">Prognose for august</div>
      </div>
    </div>
  </div>

  <nav role="tablist" class="stack-h gap-4xs" style="margin-bottom: -1px;">
    <button
      role="tab"
      class="v-button br-bl-none br-br-none"
      data-size="small"
      data-variant="plain"
    >
      Operatør <span class="fs-xs">(2444)</span>
    </button>
    <button
      role="tab"
      aria-selected="true"
      class="v-button br-bl-none br-br-none"
      data-size="small"
    >
      Kontraktsansvarlig <span class="fs-xs">(87)</span>
    </button>
    <button
      role="tab"
      class="v-button br-bl-none br-br-none"
      data-size="small"
      data-variant="plain"
    >
      Ferdigbehandlet <span class="fs-xs">(21)</span>
    </button>
  </nav>

  <div class="surface-base b-all bc-subtle br-l of-clip br-tl-none p-m">
    <div class="bc-subtle b-b -mx-m -mt-m px-xs py-xs surface-tinted stack-h">
      <button class="v-button" data-variant="plain" data-size="small">
        Filter
        <span class="v-icon" data-v-icon="chevron-down"></span>
      </button>
      <span class="fs-s ink-subtle mx-l">Viser 87 av 87 avvik</span>
      <button class="v-button ml-auto" data-variant="plain" data-size="small">
        Vis i statistikk
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          ></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </button>
    </div>

    <div
      class="d-grid of-scroll gap-column-s mt-m lh-snug"
      style="grid-template-columns: max-content max-content max-content minmax(40%, max-content) 1fr 1.2fr max-content;"
    >
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle py-xs"
      >
        <span></span>
        <span></span>
        <span class="fs-s ink-subtle fw-bold">Dato</span>
        <span class="fs-s ink-subtle fw-bold">Rute</span>
        <span class="fs-s ink-subtle fw-bold">Avvik</span>
        <span class="fs-s ink-subtle fw-bold">Årsak og ansvar</span>
        <span></span>
      </div>

      <!-- #5 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #5"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #5"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-01" class="fs-s">1. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#5</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="15:15">15:15</time> Gatestopp – Sævollen</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              1 • 726
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Forsinkelser utover 10 min</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug"> Ambulanse/nødetat</span>
          <span class="fs-xs ink-subtle">Ekstern</span>
        </div>
        <span class="stack-h gap-3xs fs-xs ink-subtle">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-3.9 7.1 8.5 8.5 0 0 1-9.8-.8L3 19l1.2-4.2a8.38 8.38 0 0 1-.7-3.4 8.5 8.5 0 0 1 8.5-8.4h.3a8.48 8.48 0 0 1 8.5 8.1v.4z"
            ></path>
          </svg>
          1
        </span>
      </div>

      <!-- #1828 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1828"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1828"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1828</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="11:40">11:40</time> Korsegata–Sætra</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              3 • 125
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Forsinkelser utover 10 min</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s"> Trafikk</span>
          <span class="fs-xs ink-subtle">Ekstern</span>
        </div>
        <span></span>
      </div>

      <!-- #1841 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1841"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1841"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1841</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="13:35">13:35</time> Gatestopp – Keiser
            Wilhelmsgate</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              12 • 140
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Forsinkelser utover 10 min</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s"> Trafikk</span>
          <span class="fs-xs ink-subtle">Ekstern</span>
        </div>
        <span></span>
      </div>

      <!-- #1868 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1868"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1868"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1868</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="16:00">16:00</time> Gatestopp – Keiser
            Wilhelmsgate</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              1 • 230
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s">Kjøretøy</span>
          <span class="fs-xs ink-subtle">Operatør</span>
        </div>
        <span></span>
      </div>

      <!-- #1882 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1882"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1882"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1882</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="19:20">19:20</time> Humla–Gatestopp Moa</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              14 • 126
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Datasystem</span>
          <span class="fs-xs ink-subtle">FRAM</span>
        </div>
        <span></span>
      </div>

      <!-- #1883 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1883"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1883"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1883</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="19:50">19:50</time> Keiser
            Wilhelmsgate–Gatestopp</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              12 • 177
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Datasystem</span>
          <span class="fs-xs ink-subtle">FRAM</span>
        </div>
        <span></span>
      </div>

      <!-- #1884 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1884"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1884"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1884</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="20:15">20:15</time> Gatestopp – Keiser
            Wilhelmsgate</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              12 • 176
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Datasystem</span>
          <span class="fs-xs ink-subtle">FRAM</span>
        </div>
        <span></span>
      </div>

      <!-- #1885 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1885"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1885"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-30" class="fs-s">30. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1885</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="20:20">20:20</time> Keiser
            Wilhelmsgate–Gatestopp</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              12 • 179
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Feil i gjennomføring</span>
          <span class="fs-xs ink-subtle">Operatør</span>
        </div>
        <span></span>
      </div>

      <!-- #1890 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1890"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1890"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-31" class="fs-s">31. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1890</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="02:30">02:30</time> 109543–15320327</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              3 • 637
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Feil i gjennomføring</span>
          <span class="fs-xs ink-subtle">Operatør</span>
        </div>
        <span></span>
      </div>

      <!-- #1900 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1900"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1900"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-31" class="fs-s">31. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1900</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="09:30">09:30</time> Gatestopp Moa–Osane</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              1 • 6012
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Ikke pålogget sanntidsystem</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s lh-snug">Feil i gjennomføring</span>
          <span class="fs-xs ink-subtle">Operatør</span>
        </div>
        <span></span>
      </div>

      <!-- #1910 -->
      <div
        class="grid-all-columns grid-subgrid items-center b-b bc-subtle bg-wash:hover p-xs"
      >
        <input
          class="v-checkbox fs-s"
          type="checkbox"
          aria-label="Velg avvik #1910"
        />
        <button
          class="v-button aspect-square p-0"
          data-variant="plain"
          data-size="small"
          aria-label="Vis detaljer for avvik #1910"
        >
          <span class="v-icon" data-v-icon="chevron-down"></span>
        </button>
        <div class="stack-v items-start gap-4xs">
          <time datetime="2025-05-31" class="fs-s">31. mai</time>
          <color-mode palette="blue">
            <span
              class="surface-tinted b-all bc-subtle px-3xs py-4xs br-s fs-xs fw-medium t-tabular"
              >#1910</span
            >
          </color-mode>
        </div>
        <div class="stack-v items-start gap-4xs">
          <span
            class="fs-s fw-medium lh-snug"
            style="    text-overflow: ellipsis;
          text-wrap: nowrap;"
            ><time datetime="14:00">14:00</time> Moa trafikkterminal–Moa
            trafikkterminal</span
          >
          <color-mode inverted>
            <span
              class="surface-base stack-h gap-2xs px-3xs py-4xs br-s fs-xs fw-medium lh-snug"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="14" rx="2"></rect>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="16" cy="21" r="1"></circle>
              </svg>
              13 • 609
            </span>
          </color-mode>
        </div>
        <span class="fs-s lh-snug">Forsinkelser utover 10 min</span>
        <div class="stack-v gap-4xs">
          <span class="fs-s"> Trafikk</span>
          <span class="fs-xs ink-subtle">Ekstern</span>
        </div>
        <span class="stack-h gap-3xs fs-xs ink-subtle">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-3.9 7.1 8.5 8.5 0 0 1-9.8-.8L3 19l1.2-4.2a8.38 8.38 0 0 1-.7-3.4 8.5 8.5 0 0 1 8.5-8.4h.3a8.48 8.48 0 0 1 8.5 8.1v.4z"
            ></path>
          </svg>
          2
        </span>
      </div>
    </div>
  </div>
</div>
```
