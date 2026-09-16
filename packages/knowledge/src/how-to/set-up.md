---
title: Set up Varde
description: Link the stylesheet and set the page's root classes.
order: 1
---

## Create a page

Create a file called `index.html` and start from the standard HTML structure:

```html no-preview
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first Varde page</title>
    <link
      rel="stylesheet"
      href="https://varde.variant.dev/v/<VERSION>/styles.css"
    />
  </head>
  <body>
    <h1 class="fs-4xl">It's so Britti</h1>
  </body>
</html>
```

Open the page. If the text uses the Variant typeface, the stylesheet loaded.

## Set a color scheme

Varde reads the user's system preference and switches between light and dark on its own.

If your product is dark-only or light-only, override the color scheme once on the `<html>` element:

```html no-preview
<html lang="en" class="ink-default surface-base" data-color-scheme="dark" />
```

For a user-facing toggle, see [How to control dark mode](/docs/how-to/dark-mode).

## Go further

- [Build a card](/docs/tutorial/build-a-card) — your first `<color-mode>`, from wrapper to finished card.
