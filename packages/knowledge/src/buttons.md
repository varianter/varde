# WIP: Button

Add `.button` to a `<button>` or `<a>` element. Configure appearance with `data-color`, `data-variant`, and `data-size` — all optional, all have sensible defaults.

## Colors

`data-color` sets the palette. Defaults to `"primary"`.

```html
<button class="button">Primary</button>
<button class="button" data-color="secondary">Secondary</button>
<button class="button" data-color="danger">Danger</button>
<button class="button" data-color="inherit">Inherit</button>
```

| Value         | Use for                                 |
| ------------- | --------------------------------------- |
| `"primary"`   | Main actions (default)                  |
| `"secondary"` | Supporting actions                      |
| `"danger"`    | Destructive actions                     |
| `"inherit"`   | Pull palette from parent `<color-mode>` |

## Variants

`data-variant` controls how the color is applied. Defaults to `"filled"`.

| Value        | Look                           |
| ------------ | ------------------------------ |
| `"filled"`   | Solid background (default)     |
| `"outlined"` | Transparent bg, colored border |
| `"plain"`    | Transparent bg, no border      |

```html
<button class="button">Filled</button>
<button class="button" data-variant="outlined">Outlined</button>
<button class="button" data-variant="plain">Plain</button>
```

Any color works with any variant:

```html
<button class="button" data-color="danger" data-variant="outlined">
  Delete
</button>
```

## Sizes

`data-size` scales height, padding, font size, gap, and border radius proportionally. Defaults to `"medium"`.

```html
<button class="button" data-size="small">Small</button>
<button class="button">Medium</button>
<button class="button" data-size="large">Large</button>
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

For a circular icon-only button, add `.br-circle`:

```html
<button class="button br-circle" aria-label="Add">
  <span class="icon" data-icon="plus" />
</button>
```

For a pill shape, use `.br-pill`:

```html
<button class="button br-pill" data-variant="outlined">Filter</button>
```

## Emphasizing a button

Combine utilities to give one button more weight. Here the primary gets extra horizontal padding while the secondary stays compact:

```html
<div class="stack-horizontal gap-m">
  <button class="button px-l">Save changes</button>
  <button class="button" data-color="secondary" data-variant="plain">
    Cancel
  </button>
</div>
```

## Composing with `color-mode`

`data-color="inherit"` pulls its palette from the nearest parent `<color-mode>`. This lets sections use different color palettes without defining new button tokens.

Each example below sits on `var(--surface-base)` to show the palette in context:

```html
<color-mode palette="coral">
  <div class="p-m" style="background: var(--surface-base)">
    <button class="button" data-color="inherit">Coral</button>
    <button class="button" data-color="inherit" data-variant="outlined">
      Coral
    </button>
  </div>
</color-mode>

<color-mode palette="green">
  <div class="p-m" style="background: var(--surface-base)">
    <button class="button" data-color="inherit">Green</button>
    <button class="button" data-color="inherit" data-variant="outlined">
      Green
    </button>
  </div>
</color-mode>

<color-mode palette="blue">
  <div class="p-m" style="background: var(--surface-base)">
    <button class="button" data-color="inherit">Blue</button>
    <button class="button" data-color="inherit" data-variant="outlined">
      Blue
    </button>
  </div>
</color-mode>
```

## As links

`.button` works on `<a>` elements with the same attributes:

```html
<a href="/settings" class="button" data-variant="outlined"> Settings </a>
```
