export const path = "/examples";

function Events() {
  return (
    <div style="max-width: 1200px" class=" my-3xl">
      <color-mode palette="periwinkle" inverted class="">
        <div class="py-2xs px-2xs bg-surface-dyed stack-horizontal items-start gap-m br-l">
          <div class="px-xs-s py-m mw-6">
            <h3 class="fs-4xl mb-2xs fg-emphasis">Arrangementer</h3>
            <p class="fs-l mb-xs">
              Bli med der det skjer! Vi deltar på konferanser, arrangerer fagmøter og andre nerdete
              samlinger. Stikk innom og si hei – vi digger å bli kjent med nye folk!
            </p>
            <div class="stack-horizontal gap-xs py-2xs">
              <p>Lokasjon</p>
              <button
                class="button br-pill"
                data-variant="outlined"
                data-color="inherit"
                data-size="small"
              >
                Alle (3)
              </button>
              <button
                class="button br-pill"
                data-variant="outlined"
                data-color="inherit"
                data-size="small"
              >
                Trondheim (2)
              </button>
              <button
                class="button br-pill"
                data-variant="outlined"
                data-color="inherit"
                data-size="small"
              >
                Oslo (1)
              </button>
            </div>
            <button class="button mt-s">Se alle arrangementer</button>
          </div>
          <div class="stack gap-2xs flex-1">
            <color-mode palette="grey">
              <div class="bg-surface-base px-m py-xs br-2xl">
                <div class="stack-horizontal gap-2xs">
                  <time>24.09.2026</time>
                  <span>•</span>
                  <p>Trondheim</p>
                </div>
                <div class="mb-2xs">
                  <h6 class="fs-2xl">Workshop: Design-Patterns for KI-produkter i 2026</h6>
                  <p>
                    Variant inviterer til workshop med Vitaly Friedman fra Smashing Magazine dagen
                    før TDC, og byr på en innholdsrik dag etterfulgt av god mat, drikke og quiz på
                    Bariant..{" "}
                  </p>
                </div>
                <div class="stack-horizontal gap-2xs">
                  <p class="b-all b-prominent py-4xs px-xs lh-tight br-pill">Design</p>
                  <p class="b-all b-prominent py-4xs px-xs lh-tight br-pill">Utvikling</p>
                </div>
              </div>
            </color-mode>

            <color-mode palette="grey">
              <div class="bg-surface-base px-m py-xs br-2xl">
                <div class="stack-horizontal gap-2xs">
                  <time>24.09.2026</time>
                  <span>•</span>
                  <p>Trondheim</p>
                </div>
                <div class="mb-2xs">
                  <h6 class="fs-2xl">Offentlig frontend: Minifagdag</h6>
                </div>
                <div class="stack-horizontal gap-2xs">
                  <p class="b-all b-prominent py-4xs px-xs lh-tight br-pill">Design</p>
                  <p class="b-all b-prominent py-4xs px-xs lh-tight br-pill">Utvikling</p>
                </div>
              </div>
            </color-mode>
          </div>
        </div>
      </color-mode>
    </div>
  );
}

function SmileyBox() {
  return (
    <div class="mw-6 w-full m-xl ">
      <color-mode palette="green">
        <div
          class="p-l bg-surface-tinted stack gap-xl aspect-ratio-1-1"
          style="border-radius: 6rem 6rem .375rem .375rem;"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              role="presentation"
            >
              <path
                d="M21.4556 41.5719V41.5719C28.3432 57.388 50.7755 57.388 57.6632 41.5719V41.5719"
                stroke="currentColor"
                stroke-width="4.02307"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M38.8887 29.0024V37.3081H42.3119"
                stroke="currentColor"
                stroke-width="4.02307"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.1181 29.0024V33.1553"
                stroke="currentColor"
                stroke-width="4.02307"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.6606 29.0024V33.1553"
                stroke="currentColor"
                stroke-width="4.02307"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="fs-2xl fg-emphasis mt-auto">
            Skal vi bidra til samfunnet, må vi være åpne om hvordan vi bidrar. Derfor er alt vi gjør
            tilgjengelig for alle.{" "}
          </h4>
        </div>
      </color-mode>
    </div>
  );
}

function HandbookBox() {
  return (
    <color-mode palette="purple" inverted>
      <div class="px-m pt-xl-2xl pb-l bg-surface-dyed typeset mw-8 stack br-m">
        <h3 class="fs-2xl lh-tight">Håndboka</h3>
        <p class="fs-l">
          I håndboka står alt om hvordan vi jobber og hva som er viktig for oss. Endrer vi på oss,
          da endrer vi også håndboka.
        </p>

        <div class="stack-horizontal gap-m gap-row-3xs fs-2xl">
          <a href="/" class="link t-regular">
            Verdier
          </a>
          <a href="/" class="link t-regular">
            Familieliv
          </a>
          <a href="/" class="link t-regular">
            Likestilling
          </a>
          <a href="/" class="link t-regular">
            Helse
          </a>
          <a href="/" class="link t-regular">
            Samfunn
          </a>
          <a href="/" class="link t-regular">
            Open Source
          </a>
          <a href="/" class="link t-regular">
            Lønn
          </a>
          <a href="/" class="link t-regular">
            Bonus
          </a>
          <a href="/" class="link t-regular">
            Pensjon og forsikring
          </a>
        </div>

        <button class="button mt-l-xl ml-auto" data-variant="outlined" data-color="secondary">
          Kikk i håndboka
        </button>
      </div>
    </color-mode>
  );
}
export default function Examples() {
  return (
    <div class="p-xl">
      <HandbookBox />
      <SmileyBox />
      <Events />
    </div>
  );
}
