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
            <div class="p-l stack gap-m bg-surface-raised br-m shadow-medium">
              <p>I'm a plain popover — centered, fade + slide-down, no backdrop.</p>
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
          <div
            id="demo-dialog"
            class="popover"
            popover="auto"
            data-type="dialog"
            data-backdrop
            style="max-width: 360px;"
          >
            <div class="p-l stack gap-m bg-surface-raised br-m shadow-high">
              <h2 class="fs-l t-bold">Dialog title</h2>
              <p>
                A centered dialog with a backdrop overlay. Click outside or press Escape to dismiss.
              </p>
              <button
                type="button"
                class="button"
                data-size="small"
                popovertarget="demo-dialog"
                popovertargetaction="hide"
              >
                Close
              </button>
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
          <div class="stack-horizontal gap-s ">
            <div>Drawers:</div>
            <button type="button" class="button" popovertarget="demo-drawer-right">
              Right
            </button>
            <button type="button" class="button" popovertarget="demo-drawer-left">
              Left
            </button>
            <button type="button" class="button" popovertarget="demo-drawer-bottom">
              Bottom
            </button>
          </div>

          <div
            id="demo-drawer-right"
            class="popover p-l stack gap-m"
            popover="auto"
            data-type="drawer"
            style="width: 320px;"
          >
            <h2 class="fs-l t-bold">Right drawer</h2>
            <p>Slides in from the right edge. Width is up to you.</p>
          </div>

          <div
            id="demo-drawer-left"
            class="popover p-l stack gap-m"
            popover="auto"
            data-type="drawer"
            data-position="left"
            style="width: 320px;"
          >
            <h2 class="fs-l t-bold">Left drawer</h2>
            <p>Slides in from the left edge.</p>
          </div>

          <div
            id="demo-drawer-bottom"
            class="popover p-l stack gap-m"
            popover="auto"
            data-type="drawer"
            data-position="bottom"
            style="max-height: 40vh;"
          >
            <h2 class="fs-l t-bold">Bottom drawer</h2>
            <p>Slides up from the bottom edge.</p>
          </div>
        </ExamplePanel>
      </Section>
      {/* Tooltip */}
      <Section
        title="Tooltip"
        description="data-type=&quot;tooltip&quot; uses the popover's implicit anchor — the triggering element — so no anchor-name setup is needed. Just add popovertarget and inset-area handles the rest."
      >
        <ExamplePanel>
          <div class="flex gap-m">
            <button type="button" class="button" popovertarget="demo-tooltip-top">
              Top (default)
            </button>
            <button type="button" class="button" popovertarget="demo-tooltip-right">
              Right
            </button>
            <button type="button" class="button" popovertarget="demo-tooltip-bottom">
              Bottom
            </button>
          </div>

          <div id="demo-tooltip-top" class="popover px-s py-2xs" popover="auto" data-type="tooltip">
            <div class="p-s stack bg-surface-raised br-m shadow-medium">
              <h5>Tooltip!</h5>
              <p>Tooltip above the trigger</p>
            </div>
          </div>

          <div
            id="demo-tooltip-right"
            class="popover px-s py-2xs"
            popover="auto"
            data-type="tooltip"
            data-position="right"
          >
            <div class="p-s stack bg-surface-raised br-m shadow-medium">
              <h5>Tooltip!</h5>
              <p>Tooltip above the trigger</p>
            </div>
          </div>

          <div
            id="demo-tooltip-bottom"
            class="popover px-s py-2xs"
            popover="auto"
            data-type="tooltip"
            data-position="bottom"
          >
            <div class="p-s stack bg-surface-raised br-m shadow-medium">
              <h5>Tooltip!</h5>
              <p>Tooltip above the trigger</p>
            </div>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default PopoverPage;
