---
title: Surfaces and ink
description: How to use colors in Varde.
---

Please see "Color mode explained" for the other piece of the puzzle.

| Classes          | What they do                | When to use them                                                    |
| ---------------- | --------------------------- | ------------------------------------------------------------------- |
| `surface-base`   | The starting point          | As the background of the page/modal/                                |
| `surface-tinted` | Adds a little               | When you need to disinquish an area from the `base`                 |
| `surface-dyed`   | Adds more                   | When you need a pop of color. Should mostly be used in a color-mode |
| `ink-subtle`     | Less contrast               | When something else is more imporant                                |
| `ink-default`    | This is applied to all text | Text in general. This is already set, and color is inherited.       |
| `ink-emphasis`   | Gives the most contrast     | When a text needs to be very emphasized. Use sparringly.            |

`surface-*` sets the background. `ink-*` sets the colour of what sits on it: text, icons, anything using currentColor.

Surfaces are absolute. Backgrounds don't inherit, so each class is a full statement. surface-base is the page itself, the furthest thing back. surface-tinted and surface-dyed add pigment in steps, pulling the surface a little closer to the ink.

```html
<main class="surface-base p-xs b-all">
  This is base
  <section class="surface-tinted p-xs br-l">
    This is tinted
    <div class="surface-dyed p-xs br-m">This is dyed</div>
  </section>
</main>
```

Ink is relative. Text colour inherits, so you always start at default and nudge from there: ink-subtle steps down for secondary text, ink-prominent steps up for headings and things that need to be found first. Borders follow the same pattern with b-subtle, b-default, b-prominent.

```html
<article>
  <h2 class="ink-prominent">Quarterly report</h2>
  <p>Body text sits at the default ink and needs no class.</p>
  <p class="ink-subtle">Last updated yesterday.</p>
</article>
```

### Inverting

<color-mode palette="yellow" class="d-block py-2xs px-xs b-all bc-subtle surface-base br-m fs-s ink-subtle">
  <strong>Note: </strong> This is not the same as dark mode. Dark mode is handled separately.
</color-mode>

Wrap any part of the page in `<color-mode inverted>` and it flips the colors: base goes dark where it was light, ink goes light where it was dark, and the tinted and dyed steps still move toward the ink. The markup inside stays as it is. Surfaces are named by their distance from base, not by lightness, so the same classes hold up on both sides.

```html
<color-mode inverted>
  <main class="surface-base p-xs b-all">
    This is base
    <section class="surface-tinted p-xs br-l">
      This is tinted
      <div class="surface-dyed p-xs br-m">This is dyed</div>
    </section>
  </main>
</color-mode>
<color-mode>
  <main class="surface-base p-xs b-all">
    This is base
    <section class="surface-tinted p-xs br-l">
      This is tinted
      <div class="surface-dyed p-xs br-m">This is dyed</div>
    </section>
  </main>
</color-mode>
```

Now, using the same HTML as above, but changing the palette as such `<color-mode palette="periwinkle">`,

```html
<color-mode palette="periwinkle" inverted>
  <main class="surface-base p-xs b-all">
    This is base
    <section class="surface-tinted p-xs br-l">
      This is tinted
      <div class="surface-dyed p-xs br-m">This is dyed</div>
    </section>
  </main>
</color-mode>
<color-mode palette="periwinkle">
  <main class="surface-base p-xs b-all">
    This is base
    <section class="surface-tinted p-xs br-l">
      This is tinted
      <div class="surface-dyed p-xs br-m">This is dyed</div>
    </section>
  </main>
</color-mode>
```

Add palette="coral" (or any other palette) to the same element and the pigment changes hue while everything else stays put.
