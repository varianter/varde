---
title: Ground rules
description: Non-negotiable conventions when using Varde.
---

## The non-negotiables

- Never use Varde's variables directly.
- Never override an internal CSS property. They start with an underscore, like `--_button-base`.
- Don't overuse `ink-prominent`. Headings already carry a larger size and bolder weight.
- Don't combine `bg-wash:hover` with a `surface-*` on the same element. Set `surface-*` on a parent, then use the wash for the hover effect.

## Use semantic elements

- `<time datetime="">` for time.
- `<nav>` for navigation.
