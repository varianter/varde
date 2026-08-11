# Button

Add `.button` to a `<button>` or `<a>` element. Configure appearance with `data-variant` and `data-size` — both optional, both have sensible defaults. Color comes from the enclosing `<color-mode palette="...">`; unwrapped buttons use the default grey palette.

## Variants

`data-variant` controls how the color is applied. Defaults to `"filled"`.

| Value        | Look                           |
| ------------ | ------------------------------ |
| `"filled"`   | Solid background (default)     |
| `"tinted"`   | Subtle tinted background       |
| `"outlined"` | Transparent bg, colored border |
| `"plain"`    | Transparent bg, no border      |

```html
<button class="button">Filled</button>
<button class="button" data-variant="tinted">Tinted</button>
<button class="button" data-variant="outlined">Outlined</button>
<button class="button" data-variant="plain">Plain</button>
```

## Sizes

`data-size` scales height, padding, font size, gap, and border radius proportionally. Defaults to `"medium"`.

```html
<button class="button" data-size="small">Small</button>
<button class="button">Medium</button>
<button class="button" data-size="large">Large</button>
```

## Colors

Color comes from the nearest `<color-mode palette="...">` ancestor. Unwrapped buttons fall back to the default grey palette. Combine any palette with any variant:

```html
<!-- Default (grey) -->
<div class="stack gap-xs">
  <div class="stack-horizontal gap-xs">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </div>

  <color-mode class="stack-horizontal gap-xs" palette="periwinkle">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode class="stack-horizontal gap-xs" palette="coral">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>
</div>
```

And here's the same, but on `<color-mode inverted />`:

```html
<div class="stack">
  <color-mode inverted class="bg-surface-dyed stack-horizontal gap-xs p-xs">
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode
    inverted
    class="bg-surface-dyed stack-horizontal gap-xs p-xs"
    palette="periwinkle"
  >
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>

  <color-mode
    inverted
    class="bg-surface-dyed stack-horizontal gap-xs p-xs"
    palette="coral"
  >
    <button class="button">Filled</button>
    <button class="button" data-variant="tinted">Tinted</button>
    <button class="button" data-variant="outlined">Outlined</button>
    <button class="button" data-variant="plain">Plain</button>
  </color-mode>
</div>
```

## With icons

Place a `.icon` element with a `data-icon` attribute inside the button. The icon inherits color and scales with font size.

```html
<button class="button">
  <span class="icon" data-icon="plus" />
  Add item
</button>
```

Icon-only buttons need `aria-label`:

```html
<button class="button" aria-label="Add">
  <span class="icon" data-icon="plus" />
</button>
```

## With spinners

Place a `.spinner` inside the button for loading or processing states. Color and size inherit from the button automatically.

There is no `:disabled` style by design — use a spinner to show an action is in progress instead of graying out the button.

```html
<button class="button">
  <span class="spinner" />
  Saving…
</button>
```

## Round and pill buttons

Button styles use low-specificity selectors — you can layer utility classes on top without fighting the cascade.

For a circular icon-only button, you'd compose as such: `button br-circle p-0 aspect-ratio-1-1`:

```html
<button class="button br-circle p-0 aspect-ratio-1-1" aria-label="Add">
  <span class="icon" data-icon="plus" />
</button>
```

For a pill shape, use `.br-pill`:

```html
<button class="button br-pill" data-variant="outlined">Filter</button>
```

## Emphasizing a button

Combine utilities to give one button more weight:

```html
<div class="stack-horizontal gap-xs">
  <color-mode palette="periwinkle">
    <button class="button px-l">Save changes</button>
  </color-mode>
  <button class="button" data-variant="plain">Cancel</button>
</div>
```

## As links

`.button` works on `<a>` elements with the same attributes:

```html
<a href="/settings" class="button" data-variant="outlined"> Settings </a>
```
