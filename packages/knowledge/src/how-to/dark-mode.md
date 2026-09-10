---
title: Dark mode
description: Force light or dark, or wire up a toggle.
---

## Do nothing

Dark mode works "out-of-the-box". Varde follows the user's system preference and switches automatically. No class, no attribute, nothing to set up.

## Force one scheme

If your product is dark-only or light-only, set `data-color-scheme` once on the `<html>` element:

```html open no-preview
<html
  lang="en"
  class="ink-default surface-base"
  data-color-scheme="dark"
></html>
```

Use `dark` or `light`. Leave the attribute off to follow the system.

The override wins everywhere: `<color-mode>` blocks inside inherit it and can't opt out.

## Give users a toggle

Set the attribute yourself and the page follows. Flip it to switch:

```js open no-preview
const root = document.documentElement;
const current =
  root.getAttribute("data-color-scheme") ??
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

root.setAttribute("data-color-scheme", current === "dark" ? "light" : "dark");
```

Persist the choice however you already store preferences — a cookie, `localStorage`, your server.

## Where next

- [Color modes](/docs/explanation/color-modes) — why color lives on containers, and why `inverted` isn't dark mode.
