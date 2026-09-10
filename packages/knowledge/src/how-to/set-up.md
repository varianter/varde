---
title: Set up Varde
description: Link the stylesheet and set the page's root classes.
---

## Create a page

Create a file called `index.html` and give it the usual shape:

```html no-preview
<!doctype html>
<html lang="en" class="ink-default surface-base">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first Varde page</title>
    <link
      rel="stylesheet"
      href="https://varde.variant.dev/v/<VERSION>/styles.css"
    />
  </head>
  <body class="fs-m">
    <h1 class="fs-4xl">It's so Britti</h1>
  </body>
</html>
```

Three things to notice:

- The `<link>` loads Varde. Replace `<VERSION>` with a real version number from https://varde.variant.dev/. Friends don't let friends use `latest`.
- The `<html>` element carries `ink-default surface-base`. These set the page's default text color and background.
- The `<body>` carries `fs-m`, the default font size.

Open the page. If it looks like the Variant typeface, you're good to go!

## Set a color scheme

Varde reads the user's system preference and switches between light and dark on its own. You set nothing up for it.

If your product is dark-only or light-only, override it once on the `<html>` element:

```html no-preview
<html lang="en" class="ink-default surface-base" data-color-scheme="dark" />
```

For a user-facing toggle, see [How to control dark mode](/docs/how-to/dark-mode).

## Where next

- [Build a card](/docs/tutorial/build-a-card) — your first `<color-mode>`, from wrapper to finished card.
