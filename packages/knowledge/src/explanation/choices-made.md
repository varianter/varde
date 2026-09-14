---
title: The choice that went into Varde
description: The nitty gritty detail
---

Hello, Jacob here. Author of Varde.

- It's an opinionated CSS framework. Why?
- It _must_ be available as a CSS file, versioned, on a CDN. Why?
- It's design tokens in CSS
- It plays to CSS strenghts; the cascade and inheritance. Instead of fighting against it, we embrace it.
- Progressively enhanced.
- We borrow good patterns, like Tailwinds naming.

Authors node: Stardate 5112. Just kidding. I believe that _everything_ can boild down to typography, spacing and colors. Varde is the antidote to component-first design systems.

## Core philosophies

Tokens begs to be utilities: text sizes, spacing and colors.

"Component Primitives" (naming?) aka buttons and inputs are included. I believe they're safe to include because they're A. leaf nodes and B. consumes A LOT of Design Tokens. They also benefit greatly from having zero specificity, so that we might be re-composed into other patterns.

"Reset" with purpose. Lets not be afraid of global CSS.

And you shouldn't have to think too much. Oh, and agent friendly.

I believe in a finite number of classes in a globally scoped CSS file can accomplish wonders. Design tokens methodology and CSS in tandem.

We allow ourselves to use modern CSS features if they can degrade gracefully. As long as all browser vendors have agreed that a certain feature will be implemented, we can use it. Examples such as `::base-select` and `sibling-count()/sibling-index()`, they can be used and if implemented correctly, nothing would break if they're not supported. Features such as `round()` can be used inside an `@supports`.

Colors are built-in.

### CUBE CSS

### The contract

- Class names should not change. And if it does, it's a really really breaking change.
- While variable (CSS custom properties) may change.
- Why? Because the system can evolve while staying true to the naming conventions. `xl` means might be `20px` today and `22px` tomorrow, but the naming does not change. Trust the system.
- This is important, because we want to be able to improve the whole system over time. Even if we changed the fonts and colors, we'd still be able to use the same naming.
- Mostly utilities, but some abstractions. `stack-h`/`stack-v` because they help with zooming. color-mode because it helps with color. popover, stagger, typeset, and so on.

In short:

- Varde will not change from t-shirt sizing.
- Varde is expressive enough to

### Overriding should be easy (aka zero specificity)

### Progressive first

CSS

### What it doesn't do

Varde should cover 97.32% of your CSS needs, but there are thing intentionally left out:

- Media queries, because they create too many moving parts.
- High level layouts, same as above. Which is coincidentally where you'd use media queries.
- Pre-made grids.

In simpler terms: anything which can create more testing and add foot guns is left off the table. Not saying you shouldn't use them, just that it is beyond the scope of Varde.
