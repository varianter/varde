---
title: Permissions
description: Collapsible permission groups, each with a count of enabled items and a list of checkboxes.
group: forms
tags: [forms]
---

Each group is a native `<details>` element, so it opens and closes without JS. The counts are static here; keeping them in sync with the checkboxes takes a few lines of JS.

```html
<div class="stack-v gap-s surface-base p-s br-l w-max-7">
  <div class="stack-h items-center gap-s">
    <p>Choose what members of this role can see and change.</p>
    <p class="ml-auto fs-s ink-subtle">3 of 22 enabled</p>
  </div>

  <div class="b-all bc-subtle br-m of-clip">
    <details class="b-b bc-subtle b-none:last-child">
      <summary class="stack-h items-center gap-xs px-s py-xs bg-wash:hover">
        <span class="v-icon ink-subtle fs-xs" data-v-icon="chevron-right"></span>
        <span class="fw-medium">Projects</span>
        <span class="ml-auto fs-s ink-subtle">2 of 5</span>
      </summary>
      <div class="stack-v gap-xs pl-l pr-s pt-2xs pb-s">
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" checked />
          View all projects
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" checked />
          Create new projects
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Archive projects
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Change project owners
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Delete projects
        </label>
      </div>
    </details>
    <details class="b-b bc-subtle b-none:last-child" open>
      <summary class="stack-h items-center gap-xs px-s py-xs bg-wash:hover">
        <span class="v-icon ink-subtle fs-xs" data-v-icon="chevron-right"></span>
        <span class="fw-medium">Documents</span>
        <span class="ml-auto fs-s ink-subtle">1 of 4</span>
      </summary>
      <div class="stack-v gap-xs pl-l pr-s pt-2xs pb-s">
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" checked />
          Read shared documents
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Upload documents
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Share documents outside the team
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Delete documents
        </label>
      </div>
    </details>
    <details class="b-b bc-subtle b-none:last-child">
      <summary class="stack-h items-center gap-xs px-s py-xs bg-wash:hover">
        <span class="v-icon ink-subtle fs-xs" data-v-icon="chevron-right"></span>
        <span class="fw-medium">Members</span>
        <span class="ml-auto fs-s ink-subtle">0 of 4</span>
      </summary>
      <div class="stack-v gap-xs pl-l pr-s pt-2xs pb-s">
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          View member profiles
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Invite new members
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Change member roles
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Remove members
        </label>
      </div>
    </details>
    <details class="b-b bc-subtle b-none:last-child" open>
      <summary class="stack-h items-center gap-xs px-s py-xs bg-wash:hover">
        <span class="v-icon ink-subtle fs-xs" data-v-icon="chevron-right"></span>
        <span class="fw-medium">Billing</span>
        <span class="ml-auto fs-s ink-subtle">0 of 5</span>
      </summary>
      <div class="stack-v gap-xs pl-l pr-s pt-2xs pb-s">
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          View invoices
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Download receipts
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Update the payment card
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Change the subscription plan
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Cancel the subscription
        </label>
      </div>
    </details>
    <details class="b-b bc-subtle b-none:last-child">
      <summary class="stack-h items-center gap-xs px-s py-xs bg-wash:hover">
        <span class="v-icon ink-subtle fs-xs" data-v-icon="chevron-right"></span>
        <span class="fw-medium">Integrations</span>
        <span class="ml-auto fs-s ink-subtle">0 of 4</span>
      </summary>
      <div class="stack-v gap-xs pl-l pr-s pt-2xs pb-s">
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          View connected apps
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Connect new apps
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Manage API keys
        </label>
        <label class="stack-h items-center gap-xs">
          <input class="v-checkbox" type="checkbox" />
          Configure webhooks
        </label>
      </div>
    </details>
  </div>
</div>
```
