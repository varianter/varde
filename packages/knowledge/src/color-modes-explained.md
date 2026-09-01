---
title: Color modes explained
description: The how
---

`<color-mode>` is how you add colour in Varde.

It's tempting to file it under "dark mode toggle" and move on, but that undersells it quite a lot. It's better to think of it as **coloured lighting**. You put a `<color-mode>` around something, and everything inside gets lit in that colour — the backgrounds, the text, the borders, the buttons. The relationships between them stay exactly the same, so nothing breaks. Only the hue changes.

And because it's just lighting, you can rig it anywhere. Over a whole page. Over a single badge. Over one badge sitting inside a card that's already lit a different colour.

### The one idea behind it

Most design systems name colours after the colour: `--green-500`, `--color-success-background`, `.badge-danger`.

Varde names colours after the **job they do**:

| Token                                   | Job                                   |
| --------------------------------------- | ------------------------------------- |
| `bg-surface-base`                       | the plainest background               |
| `bg-surface-tinted`                     | a background with a bit more presence |
| `bg-surface-dyed`                       | a background with a lot more presence |
| `fg-default`                            | normal text                           |
| `fg-muted`                              | quieter text                          |
| `fg-emphasis`                           | louder text                           |
| `b-faint` / `b-default` / `b-prominent` | borders, from barely-there to obvious |

Notice that none of those say what colour they are. That's on purpose. They're _slots_. `<color-mode>` is what fills them in.

So this:

```html
<span class="bg-surface-tinted fg-muted px-2xs py-3xs br-pill fs-xs">
  Paid
</span>
```

…is a badge with no colour opinion at all. It becomes green, or orange, or grey, depending entirely on what you wrap it in.

---

## Basic use

Pick a palette, wrap something in it.

```html
<color-mode palette="green" class="d-block bg-surface-tinted p-m br-l">
  <h3>Everything in here is green</h3>
  <p class="fg-muted">Including this quieter line.</p>
</color-mode>

<color-mode palette="blue" class="d-block bg-surface-tinted p-m br-l">
  <h3>Everything in here is blue</h3>
  <p class="fg-muted">Including this quieter line.</p>
</color-mode>
```

The available palettes:

`grey` · `blue` · `green` · `yellow` · `orange` · `coral` · `purple` · `teal` · `periwinkle`

> **One thing to remember:** `<color-mode>` is invisible by default — it doesn't create a box, it just passes colour down. If you want it to _have_ a background, give it a display class too: `d-block`, `d-iblock`, `stack`, or `stack-horizontal`. If your background isn't showing up, this is almost always why.

## Usage on wrappers or sections

Wrap a whole page section and everything inside falls in line — headings, body text, links, buttons, form fields, the lot.

```html
<color-mode palette="periwinkle" class="d-block bg-surface-tinted p-xl">
  <h1 class="fs-3xl t-bold">Velkommen til Variantdag</h1>
  <p class="fg-muted">Programmet for dagen</p>

  <button class="button">Meld deg på</button>
</color-mode>
```

That button is now periwinkle. You didn't tell it to be. It asked its surroundings.

This is the bit worth sitting with: **components don't carry colour, contexts do.** There is no `.button-periwinkle`. There never needs to be one.

## Usage on leaf nodes or the like

The exact same tool works on a single word.

```html
<span class="fs-s fg-muted">MRR</span>

<color-mode
  palette="green"
  class="d-iblock bg-surface-dyed px-xs py-4xs br-pill fs-xs"
>
  +3.2%
</color-mode>
```

Here's the part that saves real work. A status column in a table — six badges, six meanings, **one set of classes**:

```html
<color-mode
  inverted
  palette="green"
  class="d-iblock bg-surface-dyed t-medium fg-muted px-2xs py-3xs br-pill fs-xs"
  >Paid</color-mode
>

<color-mode
  inverted
  palette="orange"
  class="d-iblock bg-surface-dyed t-medium fg-muted px-2xs py-3xs br-pill fs-xs"
  >Unfulfilled</color-mode
>

<color-mode
  inverted
  palette="coral"
  class="d-iblock bg-surface-dyed t-medium fg-muted px-2xs py-3xs br-pill fs-xs"
  >Cancelled</color-mode
>

<color-mode
  inverted
  palette="grey"
  class="d-iblock bg-surface-dyed t-medium fg-muted px-2xs py-3xs br-pill fs-xs"
  >Refunded</color-mode
>
```

No `.badge-success`. No `.badge-warning`. No `--color-status-cancelled`. "Paid is green" is a decision your product makes, in your markup, where anyone can see it and change it. Varde doesn't need an opinion about your statuses, and you don't need to file a request to add one.

## Nesting

Modes nest, and the nearest one wins. This is where it stops feeling like a theme switcher.

```html
<color-mode palette="yellow" class="d-block bg-surface-tinted p-s br-m">
  <p>This whole cell is yellow…</p>

  <color-mode
    palette="purple"
    class="d-iblock bg-surface-dyed px-2xs br-s fs-xs"
  >
    …but this tag inside it is purple.
  </color-mode>
</color-mode>
```

You can go as deep as you like. A green card containing an orange row containing a blue chip is completely fine, and every one of them stays readable, because they're all reading from the same set of jobs.

## Inverted

`inverted` flips the light and dark ends of whatever palette you're in. Use it when you want a block to _pop_ — a hero, a highlighted card, a selected chip.

```html
<color-mode palette="periwinkle" class="d-block bg-surface-tinted p-m b-all">
  <p class="p-s">
    This sits in a non-inverted color-mode. Below we've inverted the color-mode
  </p>

  <color-mode inverted class="d-block bg-surface-dyed br-l px-s py-xs">
    <p class="lh-tight">Velkommen til</p>
    <h1 class="fs-4xl t-bold">Variantdag</h1>
  </color-mode>
</color-mode>
```

If no palette is present on a `color-mode`, it inherits from the previous one. This means you can also do `inverted` on `color-mode` without a palette, as it will inherit.

## Colour as state

Here's the trick that isn't obvious until someone points at it.

Because colour lives on the wrapper, **changing state is one attribute**. Selected vs unselected isn't a different set of styles — it's the same card, lit differently.

```html
<!-- selected -->
<div class="stack-horizontal gap-xs" data-palette-group>
  <color-mode palette="blue" class="d-block flex-1 br-m bg-surface-tinted">
    <label
      class="stack-horizontal gap-m p-xs bg-wash:hover b-all b-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">Pro trial</h5>
        <p class="fg-muted">Free for two weeks</p>
      </div>
      <input type="radio" class="radio" name="trial" checked />
    </label>
  </color-mode>

  <!-- not selected — note the classes are identical -->
  <color-mode palette="grey" class="d-block flex-1 br-m bg-surface-tinted">
    <label
      class="stack-horizontal gap-m p-xs bg-wash:hover b-all b-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">Team trial</h5>
        <p class="fg-muted">Free for two weeks</p>
      </div>
      <input type="radio" class="radio" name="trial" />
    </label>
  </color-mode>

  <color-mode palette="grey" class="d-block flex-1 br-m bg-surface-tinted">
    <label
      class="stack-horizontal gap-m p-xs bg-wash:hover b-all b-prominent br-inherit"
    >
      <div class="mr-auto">
        <h5 class="t-medium fs-m">No thanks</h5>
        <p class="fg-muted">I'm good</p>
      </div>
      <input type="radio" class="radio" name="trial" />
    </label>
  </color-mode>
</div>

<script>
  document.querySelectorAll("[data-palette-group]").forEach((group) => {
    group.addEventListener("change", () => {
      group.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio
          .closest("color-mode")
          .setAttribute("palette", radio.checked ? "blue" : "grey");
      });
    });
  });
</script>
```

This is where you'd reach for Javascript to handle the toggling. The examples does this to showcase the changing of the colors.

## What _doesn't_ change colour

A few things deliberately ignore the surrounding palette:

- **Text selection** doesn't change.
- **Focus rings** doesn't not change colors
- **Error states** on stays red.

The developer/designer shouldn't have to think about setting colors to an aria-invalid or deal with focus rings. This is encoded in the system.

## Gotchas

A short list of things that surprise people once.

**Backgrounds not showing?** You forgot the display class. `<color-mode>` is invisible until you add `d-block`, `d-iblock`, `stack`, or `stack-horizontal`.

**`inverted` doesn't pass through a nested `palette`.** If you set a palette on a child, it starts fresh in the normal (non-inverted) direction:

If you want inverted to continue, say so again on the child.

**Nesting the same palette twice does nothing.** `<color-mode palette="green">` inside `<color-mode palette="green">` is a no-op. If you want a visual step, change the _surface_ instead — go from `bg-surface-tinted` to `bg-surface-dyed`.

| Want to…            | Do this                                        |
| ------------------- | ---------------------------------------------- |
| Colour anything     | Wrap it in `<color-mode palette="…">`          |
| Make it visible     | Add `d-block` or `d-iblock`                    |
| Add contrast        | Add `inverted`                                 |
| Go a shade stronger | Change `bg-surface-tinted` → `bg-surface-dyed` |
| Support dark mode   | Nothing — it already works                     |
| Colour a button     | Nothing — wrap its container                   |

## In one line

Don't reach for a colour. Reach for a **role**, and let the surroundings decide what colour that role is today.
