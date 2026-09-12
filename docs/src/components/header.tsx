import { SearchTrigger } from "./search";

export function Header() {
  return (
    <header
      class="site-header stack-v b-b bc-subtle px-s-m pos-sticky top-0"
      style="
      background: oklch(from var(--surface-base) l c h / 0.9);
"
    >
      <a href="/docs" class="site-logo py-xs fw-bold gap-xs stack-h d-inline-flex self-stretch">
        <img
          src="https://varde.variant.dev/static/logos/variant-circle-filled.svg"
          alt="Varde"
          width="24"
          height="24"
        />{" "}
        <span class="ink-default lh-tight">Varde</span>
      </a>
      <div class="w-full stack-h gap-xs">
        <div class="ml-auto gap-2xs stack-h">
          <SearchTrigger />
          <button
            id="theme-toggle"
            class="v-button pile"
            data-variant="outlined"
            data-size="small"
            type="button"
            aria-label="Toggle between light and dark color scheme"
          >
            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-moon-icon lucide-moon"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>

            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
          <button
            type="button"
            data-size="small"
            popovertarget="nav-popover"
            class="v-button menu-toggle"
            aria-label="Toggle navigation menu"
          >
            <span aria-hidden="true">☰</span> Menu
          </button>
        </div>
      </div>
    </header>
  );
}
