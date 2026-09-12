---
title: Dark mode
description: Force light or dark, or wire up a toggle.
---

## In order to set up dark mode: do nothing

Varde follows the user's system preference and switches automatically. In other words: Dark mode works "out-of-the-box". No class, no attribute, nothing to set up.

## Force light or dark mode/theme/

If you only want one more, set `data-color-scheme` as either `dark` or `light` once on the `<html>` element:

```html open no-preview
<html lang="en" class="ink-default surface-base" data-color-scheme="dark" />
```

You can also use `color-scheme: dark` or `color-scheme: light` directly at `:root`.

## Toggling between light/dark

Lets strive to be kind and thoughful. Consider adding a mode switch and allow users to override their system preference.

Here's some clientside JS to allow for overriding the color scheme. It sets `data-color-scheme` based on a cookie.

```js open no-preview
// Needs to go in <head>, otherwise users might get a flash when theme changes.
const MQL = matchMedia("(prefers-color-scheme: dark)");

const theme = {
  cookie: "theme",
  pattern: /(?:^|;\\s*)theme=(dark|light)\\b/,
  maxAge: 31536000,

  normalize: (v) => (v === "dark" || v === "light" ? v : undefined),

  resolve: (saved, system) => theme.normalize(saved) ?? system,

  parse: (cookies) => cookies.match(theme.pattern)?.[1],

  // Shell
  get saved() {
    return theme.parse(document.cookie);
  },
  get system() {
    return MQL.matches ? "dark" : "light";
  },
  get current() {
    return theme.resolve(theme.saved, theme.system);
  },

  apply(value) {
    document.documentElement.dataset.colorScheme = value;
    cookieStore
      .set({ name: theme.cookie, value, maxAge: theme.maxAge, sameSite: "lax" })
      .catch(() => {});
  },

  toggle() {
    theme.apply(theme.current === "dark" ? "light" : "dark");
  },

  init() {
    document.documentElement.dataset.colorScheme = theme.current;

    cookieStore?.addEventListener?.("change", (e) => {
      const found = e.changed.find((c) => c.name === theme.cookie);
      if (found) document.documentElement.dataset.colorScheme = found.value;
    });
  },
};

theme.init();
globalThis.theme = theme;
```

Do note that in this example, you'll still have to call `window.theme.toggle()` to actually toggle. Use `window.theme.current` if you need to read what the user currently has.

Bottom line: As long as you just use the `data-color-scheme` on `html`, you're good. Use React Hooks instead of the code above if you want – the result is the same. How you decide to persist the choice is up to you — a cookie, `localStorage`, your server.

## Where next

- [Color modes](/docs/explanation/color-modes) — why color lives on containers, and why `inverted` isn't dark mode.
