---
title: Getting started
description: Initial setup and the questions to answer first.
---

## Ask the user

- Is it light/dark mode only? If so use `data-color-scheme="dark"` or `data-color-scheme="light"` on the HTML-element to override. If these are not assigned, the users preference will be used.

## Initial setup

- Add `<link rel="stylesheet" href="https://varde.variant.dev/v/<INSERT_VARDE_VERSION>/styles.css" />` to the `<head>` element. If version is unknown, check https://varde.variant.dev/. Do not use `latest` unless specifically told to do so.
- Set `fg-default bg-surface-base` onto the HTML element.
- Set `fs-m` to `body`.
