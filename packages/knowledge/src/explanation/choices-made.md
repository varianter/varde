---
title: Choices made
description: "Or, perhaps, the explanation to why this isn't XYZ"
---

Varde is built the idea that a design system can be finite.

Most of what ends up on an interfaces comes down to typography, spacing and color. HTML (and CSS) already provides buttons, inputs, selects, popovers and details. Varde builds *with* the cascade instead of against it, and as such appearance is a suggestion rather than enforcement.

Varde is not shipping readymade CSS classes for complex components such as `.datepicker` or `.tabs`. They are not browser native elements, instead Varde aims to be a good starting point which helps you compose them. I've made some example re-creating [datepickers](/docs/examples/datepicker) and [tabs](/docs/examples/tabs) to better illustrate.

Varde is a reaction to component-first systems. Those systems grow by adding bespoke components (and often with specific tokens), and each one brings its own surface, docs, tests and tokens. In contrast, Varde grows by composition. You could still ship components, but the amount of tokens stays the same.

## Where the finiteness comes from

Varde is CSS first rather than Figma first.

When tokens come from a design file, they tend to be collected by observation: a value someone decided upon becomes a token, and the set grows with the design. Varde builds its tokens from a base, a ratio and a scale, and the design is drawn from what the scale gives you. One approach records exceptions, the other generates values. We chose the second because it stays small.

Spacing and typography have been scales for a long time. Color mostly hasn't. Colors were the last magic numbers. Varde handles them through inheritance instead of assignment: semantic tokens for surface, ink and border sit on a palette, and a `<color-mode>` element swaps that palette for everything beneath it. There are no color utilities for buttons or text, and so far we haven't needed them.

## What holds it together

**Names stay, values move.** `xl` says where something sits on the scale, not how many pixels it is. Class names and public custom properties are the stable part. What they resolve to can change. That's how the system can improve over time without breaking the sites using it, and it's also what a redesign looks like: changed values, same names.

**Contrast is structure, color is intent.** You can design in grey. The relationship between background, border and text carries the hierarchy. Color goes on top, where it adds meaning.

**The browser owns behaviour.** Varde styles native elements and the states they expose. JavaScript can change those states, but it isn't needed for anything to look right.

**Compose instead of override.** Primitives are written at zero specificity and live in cascade layers, so utilities always win. Start with `.v-button`, add utilities, and you have something new. You should rarely need to write custom CSS against a primitive.

## What it does for you

It raises the floor. The system makes a lot of small decisions once, so fewer are left to make. It doesn't guarantee that a page looks cohesive. That's still design work. It just removes many of the ways to get it wrong by accident.

## What it leaves out

These follow from the choices above.

- Breakpoints. Fluid tokens cover most of what breakpoints used to, and breakpoints multiply everything else.
- High-level layouts and pre-made grids. This is where breakpoints would come back in.
- Components that depend on JavaScript. Behaviour isn't one of the ingredients.
- Color utilities for arbitrary use. They would reintroduce the magic numbers.

We use modern CSS where it degrades gracefully: if all vendors have agreed to ship a feature, and nothing breaks without it, it's fine to use.

## Why one CSS file on a CDN

A finite set doesn't need a build step. Tailwind generates classes on demand because its set is open-ended; Varde's set is small enough to ship as is. One versioned, cached file, fonts included. It also means Varde isn't tied to any framework or toolchain.

## Borrowed

From CUBE CSS: composition, and working with the cascade rather than around it. From ITCSS: layering. From Tailwind: utilities as pure functions. None implemented quite as their authors intended.
