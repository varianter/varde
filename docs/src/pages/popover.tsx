import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/components/popover";

export function PopoverPage() {
  return (
    <DocsPage
      title="Popover"
      description="An opt-in helper for the native Popover API. Layer on data-type, data-position, and data-backdrop to control positioning and transitions — start with a bare .popover and add only what you need."
    >
      {/* Default */}
      <Section
        title="Default"
        description='A .popover with no attributes: centered, fades in with a subtle slide-down. Use the class="button" style from the buttons helper for the trigger.'
      >
        <ExamplePanel>
          <button type="button" class="button" popovertarget="demo-default">
            Open popover
          </button>
          <div id="demo-default" class="popover p-m" popover="auto">
            <div class="p-l stack bg-surface-dyed br-m shadow-medium" stagger-items>
              <a class="stack fs-xs px-3xs py-3xs" href="/fundamentet/formaal-og-verdier">
                <span class="t-bold fg-default">Formål og verdier</span>
                <span class="subnav-description fg-muted">
                  Hvorfor vi finnes, og verdiene som styrer valgene våre
                </span>
              </a>
              <a class="stack fs-xs px-3xs py-3xs" href="/fundamentet/formaal-og-verdier">
                <span class="t-bold fg-default">Formål og verdier</span>
                <span class="subnav-description fg-muted">
                  Hvorfor vi finnes, og verdiene som styrer valgene våre
                </span>
              </a>
              <a class="stack fs-xs px-3xs py-3xs" href="/fundamentet/formaal-og-verdier">
                <span class="t-bold fg-default">Formål og verdier</span>
                <span class="subnav-description fg-muted">
                  Hvorfor vi finnes, og verdiene som styrer valgene våre
                </span>
              </a>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* Dialog */}
      <Section
        title="Dialog"
        description='data-type="dialog" adds a scale+fade transition. Add data-backdrop for a visible overlay behind it.'
      >
        <ExamplePanel>
          <button type="button" class="button" popovertarget="demo-dialog">
            Open dialog
          </button>
          <div id="demo-dialog" class="popover" popover="auto" data-type="dialog" data-backdrop>
            <div class="stack of-clip br-m shadow-high">
              <color-mode palette="grey" class="d-block bg-surface-tinted ">
                <div class="px-l-xl pt-l-xl pb-s stack" style="max-width: 560px;" stagger-items>
                  <h2 class="fs-xl t-bold">Er du en Variant?</h2>
                  <p class="mt-s">
                    A centered dialog with a backdrop overlay. Click outside or press Escape to
                    dismiss.
                  </p>
                  <div class="stack gap-2xs mt-xl">
                    <color-mode class="contents" palette="blue">
                      <button
                        type="button"
                        class="button"
                        popovertarget="demo-dialog"
                        popovertargetaction="hide"
                      >
                        Kom igang
                      </button>
                    </color-mode>
                    <button
                      type="button"
                      class="button"
                      data-variant="tinted"
                      popovertarget="demo-dialog"
                      popovertargetaction="hide"
                    >
                      Jeg er allrede en Variant
                    </button>
                  </div>
                </div>
              </color-mode>
            </div>
          </div>
        </ExamplePanel>
      </Section>

      {/* Drawer */}
      <Section
        title="Drawer"
        description='data-type="drawer" attaches to an edge and slides in. Defaults to the right edge. Use data-position to pick an edge.'
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-xs">
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-drawer-right"
            >
              Right
            </button>
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-drawer-left"
            >
              Left
            </button>
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-drawer-bottom"
            >
              Bottom
            </button>
          </div>

          <div
            id="demo-drawer-right"
            class="popover"
            popover="auto"
            data-type="drawer"
            data-backdrop="true"
            style="width: 320px;"
          >
            <div class="p-l stack gap-m bg-surface-base shadow-high" style="height: 100%;">
              <h2 class="fs-l t-bold">Right drawer</h2>
              <p>Slides in from the right edge. Width is up to you.</p>
            </div>
          </div>

          <div
            id="demo-drawer-left"
            class="popover"
            popover="auto"
            data-type="drawer"
            data-position="left"
            data-backdrop="true"
            style="width: 320px;"
          >
            <div class="p-l stack gap-m bg-surface-base shadow-high" style="height: 100%;">
              <h2 class="fs-l t-bold">Left drawer</h2>
              <p>Slides in from the left edge.</p>
            </div>
          </div>

          <div
            id="demo-drawer-bottom"
            class="popover"
            popover="auto"
            data-type="drawer"
            data-position="bottom"
            data-backdrop="true"
            style="max-height: 40vh;"
          >
            <div
              class="p-l stack gap-m bg-surface-base shadow-high"
              style="height: 100%;"
              stagger-items
            >
              <h2 class="fs-l t-bold">Bottom drawer</h2>
              <p>Slides up from the bottom edge.</p>
            </div>
          </div>
        </ExamplePanel>
      </Section>
      {/* Tooltip */}
      <Section
        title="Tooltip"
        description="data-type=&quot;tooltip&quot; uses the popover's implicit anchor — the triggering element — so no anchor-name setup is needed. Just add popovertarget and inset-area handles the rest."
      >
        <ExamplePanel>
          <div class="stack-horizontal gap-xs pb-3xl">
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-tooltip-top"
            >
              Top
            </button>
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-tooltip-right"
            >
              Right
            </button>
            <button
              type="button"
              class="button"
              data-variant="tinted"
              popovertarget="demo-tooltip-bottom"
            >
              Bottom
            </button>
          </div>

          <div
            id="demo-tooltip-top"
            class="popover px-2xs py-2xs"
            popover="auto"
            data-type="tooltip"
          >
            <color-mode
              class="of-clip block b-all b-faint px-xs pt-xs pb-2xs stack bg-surface-base br-m shadow-medium mw-5"
              stagger-items="reverse from-below hard"
            >
              <h5 class="fs-s t-medium mb-2xs">
                Tooltip <span class="fg-muted">· Top</span>{" "}
              </h5>
              <p class="fs-s lh-tight fg-muted">
                This uses the popover's implicit anchor — the triggering element — no anchor-name
                setup is needed.
              </p>
              <hr class="my-xs" style="opacity: 0.3" />
              <div class="stack-horizontal gap-2xs fs-xs t-medium">
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="blue"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  A text
                </a>
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="green"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  Another one
                </a>
              </div>
            </color-mode>
          </div>

          <div
            id="demo-tooltip-right"
            class="popover px-s py-2xs"
            popover="auto"
            data-type="tooltip"
            data-position="right"
          >
            <color-mode
              class="of-clip block b-all b-faint px-xs pt-xs pb-2xs stack bg-surface-base br-m shadow-medium mw-5"
              stagger-items="from-start hard"
            >
              <h5 class="fs-s t-medium mb-2xs">
                Tooltip <span class="fg-muted ml-auto">· Right</span>{" "}
              </h5>
              <p class="fs-s lh-tight fg-muted">
                This uses the popover's implicit anchor — the triggering element — no anchor-name
                setup is needed.
              </p>
              <hr class="my-xs" style="opacity: 0.3" />
              <div class="stack-horizontal gap-2xs fs-xs t-medium">
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="blue"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  A text
                </a>
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="green"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  Another one
                </a>
              </div>
            </color-mode>
          </div>

          <div
            id="demo-tooltip-bottom"
            class="popover px-s py-2xs"
            popover="auto"
            data-type="tooltip"
            data-position="bottom"
          >
            <color-mode
              class="of-clip block b-all b-faint px-xs pt-xs pb-2xs stack bg-surface-base br-m shadow-medium mw-5"
              stagger-items="from-above hard "
            >
              <h5 class="fs-s t-medium mb-2xs">
                Tooltip <span class="fg-muted">· Bottom</span>{" "}
              </h5>
              <p class="fs-s lh-tight fg-muted">
                This uses the popover's implicit anchor — the triggering element — no anchor-name
                setup is needed.
              </p>
              <hr class="my-xs" style="opacity: 0.3" />
              <div class="stack-horizontal gap-2xs fs-xs t-medium">
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="blue"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  A text
                </a>
                <a
                  href="#"
                  class=" br-pill lh-tight pl-3xs pr-2xs py-3xs bg-surface-dyed stack-horizontal gap-3xs"
                >
                  <color-mode
                    palette="green"
                    style="opacity: 0.5"
                    inverted
                    class="d-block p-3xs fg-muted b-all b-emphasis bg-surface-dyed br-circle aspect-ratio-1-1"
                  ></color-mode>
                  Another one
                </a>
              </div>
            </color-mode>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default PopoverPage;
