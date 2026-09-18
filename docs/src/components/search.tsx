/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative icons do not need titles */

export function SearchTrigger() {
  return (
    <button
      id="search-trigger"
      type="button"
      class="v-button justify-start gap-xs"
      data-variant="outlined"
      style="width: 15ch"
      data-size="small"
      popovertarget="search-dialog"
      aria-label="Search the docs"
    >
      <svg
        role="presentation"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
      Search
    </button>
  );
}

export function SearchDialog() {
  return (
    <div
      id="search-dialog"
      class="v-popover mt-2xl"
      popover="auto"
      data-type="dialog"
      data-backdrop
    >
      <div class="stack-v of-clip br-m shadow-high" style="width: min(90vw, 560px);">
        <color-mode palette="grey" class="d-block surface-tinted">
          <combo-keys>
            <div class="pos-sticky top-0 w-full b-b bc-subtle">
              <div class="pile">
                <svg
                  class="justify-self-start ml-m aspect-square"
                  style="z-index: 1; width: 1em; height: 1em;"
                  role="presentation"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <input
                  id="search-input"
                  type="text"
                  class="b-none br-none pl-xl py-s v-input w-full"
                  style="border: none; outline: none;"
                  placeholder="Search the docs…"
                  autocomplete="off"
                  spellcheck={false}
                  aria-label="Search the docs"
                />
              </div>
            </div>
            <div class="of-scroll pt-xs" style="max-height: min(70svh, 640px);">
              <div
                id="search-results"
                class="w-full stack-v gap-3xs px-xs pb-m"
                style="min-height: 0;"
              >
                <div id="search-empty" class="stack-v gap-3xs px-xs py-m ta-center">
                  <p class="fs-s fw-medium">Search the docs</p>
                  <p class="fs-xs ink-subtle">Type to search · ↑ ↓ to navigate · Esc to close</p>
                </div>
              </div>
            </div>
          </combo-keys>
        </color-mode>
      </div>
    </div>
  );
}
