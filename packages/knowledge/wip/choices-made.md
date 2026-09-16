---
title: The choice that went into Varde
description: The nitty gritty detail
---

I don't need to explain everything in this document though. This is going to be the highest level, the birds eye view. The things that are not mentioned at all in the other markdown files. The decisions made.

CDN, versioned, will outline us all because it's "just CSS/HTML". It matters because of it is low powered, but build with the grain. Fonts are included for free.

Tailwind goes against the grain of CSS by mostly trying to go around cascading/inheritance. And in these days it requires a build step to not ship MEGABYTES of CSS. This, on the other hand is a finite amount of styles that gets you A LONG way. And not to mention all the niceities built-in. That is the opinionated part. But, what Tailwind did get right is that some things are better to made as "pure functions" for CSS (aka. utilities).

It has all the ingredients of a design system, but the "components" are not locked into CSS-in-JS/CSS modules/React/npm. It isn't even components, its just primitives and tokens-as-css. Like, A datepicker is two things: the way it looks and the way it should behave. Here, we can make a datepicker, or tabs, or a sidebar, but you can also use the exact same tools to make whatever. We didn't name it datepicker or tabs though, because it's just composition. Composition to create layouts (spacing, stack, gap etc), or composition through zero specificity (like a rounded icon button).

All at the very low cost of a CSS file, cached and served via a CDN.

Zero specificity is perhaps better done as show-dont-tell example page.

- It's an opinionated CSS framework.
- It _must_ be available as a CSS file, versioned, on a CDN.
- It's design tokens in CSS
- It plays to CSS strenghts; the cascade and inheritance. Instead of fighting against it, we embrace it.
- Progressively enhanced.
- We borrow good patterns, like Tailwinds naming.

Authors node: Star date 5112. Just kidding. I believe that _everything_ can boild down to typography, spacing and colors. Varde is the antidote to component-first design systems.

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

Then "overriding" is the wrong word. What you're describing is composition. A primitive is a starting point, utilities are the vocabulary, and the two combine because the primitive gets out of the way. Zero specificity isn't the feature, it's the mechanism that makes composition work. The section should probably be called "Compose, don't override" and the point is: you never leave Varde to get what you want.

The claim underneath it is bigger than button. Every primitive has a "shape" (what the browser does) and every utility has a "property" (one thing, one value). Varde is the belief that those two sets combine into more than either. That's why you didn't name tabs or datepicker: they're compositions, not things.
