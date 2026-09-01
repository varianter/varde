---
title: Ground rules
description: Non-negotiable conventions when using Varde.
---

# The non-negotiables:

- Never use the variables from Varde directly.
- Never override an internal CSS property. They start with an underscore, like so `--_button-base`.

- Do not overuse fg-emphasis. Heading already have font-size and a bolder text, no need to add more.
- Do not use `bg-wash:hover` and a `bg-surface-*` at the same element. Use `bg-surface-*` should be set on a parent element instead, then use the wash to add a hover effect.
- ???
- Profit

# Use semantic elements:

- `<time datetime="">` for time
- `<nav>` for navigation
