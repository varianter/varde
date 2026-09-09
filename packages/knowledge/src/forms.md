---
title: Form controls
description: Inputs, selects, textareas, checkboxes, radios, and labels.
---

Apply `.v-input`, `.v-select`, `.v-textarea`, `.v-checkbox`, or `.v-radio` to their respective native HTML elements. Pair with `.v-form-label` for labels. Size with `data-size` and mark errors with `aria-invalid`.

## .v-input / .v-textarea / .v-select

`data-size` scales height, padding, font size, and border radius proportionally. Medium is the default — omit the attribute for the standard size.

| Attribute   | Values                           |
| ----------- | -------------------------------- |
| `data-size` | `"small"`, `"medium"`, `"large"` |

Text-like inputs on `<input>` elements:

```html
<div class="stack-v gap-2xs">
  <label class="v-form-label" for="name">Full name</label>
  <input class="v-input" type="text" id="name" placeholder="e.g. Ola Nordmann" />
</div>
```

Textareas on `<textarea>`:

```html
<div class="stack-v gap-2xs">
  <label class="v-form-label" for="message">Message</label>
  <textarea
    class="v-textarea"
    id="message"
    rows="3"
    placeholder="Write something…"
  ></textarea>
</div>
```

Selects on `<select>`. A custom chevron is rendered via `background-image` — no wrapper element or icon needed. Supports `<optgroup>` labels, `<hr>` separators, and disabled `<option>` elements.

```html
<div class="stack-v gap-2xs">
  <label class="v-form-label" for="country">Country</label>
  <select class="v-select" id="country">
    <option value="">Choose…</option>
    <option value="no">Norway</option>
    <option value="se">Sweden</option>
    <option value="dk" disabled>Denmark</option>
  </select>
</div>
```

### Sizes

All three control types share the same sizing scale:

```html
<div class="stack-h gap-m">
  <div class="stack-v gap-s w-full flex-1">
    <input class="v-input" type="text" data-size="small" placeholder="Small" />
    <input class="v-input" type="text" placeholder="Medium" />
    <input class="v-input" type="text" data-size="large" placeholder="Large" />
  </div>

  <div class="stack-v gap-s w-full flex-1">
    <select class="v-select" data-size="small">
      <option>Small</option>
      <option>Small</option>
      <option>Small</option>
    </select>
    <select class="v-select">
      <option>Medium</option>
      <option>Medium</option>
      <option>Medium</option>
    </select>
    <select class="v-select" data-size="large">
      <option>Large</option>
      <option>Large</option>
      <option>Large</option>
    </select>
  </div>

  <div class="stack-v gap-s w-full flex-1">
    <textarea
      class="v-textarea"
      data-size="small"
      rows="1"
      placeholder="Small"
    ></textarea>
    <textarea class="v-textarea" rows="1" placeholder="Medium"></textarea>
    <textarea
      class="v-textarea"
      data-size="large"
      rows="1"
      placeholder="Large"
    ></textarea>
  </div>
</div>
```

Inputs and buttons at matching sizes align naturally in a row:

```html
<div class="stack-v gap-xs">
  <div class="stack-h gap-s">
    <input
      class="v-input grow"
      type="text"
      data-size="small"
      placeholder="Search…"
    />
    <button class="v-button " data-size="small">Go</button>
  </div>

  <div class="stack-h gap-s">
    <input
      class="v-input grow"
      type="text"
      data-size="medium"
      placeholder="Search…"
    />
    <button class="v-button " data-size="medium">Go</button>
  </div>

  <div class="stack-h gap-s">
    <input
      class="v-input grow"
      type="text"
      data-size="large"
      placeholder="Search…"
    />
    <button class="v-button " data-size="large">Go</button>
  </div>
</div>
```

### Advanced select

With optgroups and separators. In Chromium-based browsers, the dropdown is fully styled (optgroup labels, checkmarks, hover states). Other browsers get a custom chevron with a native dropdown.

```html
<select class="v-select">
  <option value="">Choose a food</option>
  <hr />
  <optgroup label="Fruit">
    <legend>Fruit</legend>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <hr />
  <optgroup label="Vegetables">
    <legend>Vegetables</legend>
    <option value="artichoke">Artichoke</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</select>
```

## range input

```html
<input class="v-range" type="range" min="0" max="100" step="5" />
```

## .v-radio / .v-checkbox

`.v-checkbox` and `.v-radio` replace the native appearance with a styled check or dot mark. Checked state fills the mark automatically — no extra classes needed. Always pair with a `<label>`.

| Attribute   | Values                           |
| ----------- | -------------------------------- |
| `data-size` | `"small"`, `"medium"`, `"large"` |

```html
<div class="stack-h gap-s">
  <input class="v-checkbox" type="checkbox" id="terms" checked />
  <label for="terms">I accept the terms</label>
</div>
```

```html
<div class="stack-h gap-s">
  <input class="v-radio" type="radio" name="choice" id="opt-a" checked />
  <label for="opt-a">Option A</label>
</div>
<div class="stack-h gap-s">
  <input class="v-radio" type="radio" name="choice" id="opt-b" />
  <label for="opt-b">Option B</label>
</div>
```

### Sizes

Both controls share the same sizing scale:

```html
<div class="stack-v gap-xs">
  <div class="stack-h items-center gap-m">
    <div class="stack-h gap-2xs">
      <input class="v-checkbox" type="checkbox" data-size="small" checked />
      <label>Small</label>
    </div>
    <div class="stack-h gap-2xs">
      <input class="v-checkbox" type="checkbox" checked />
      <label>Medium</label>
    </div>
    <div class="stack-h gap-2xs">
      <input class="v-checkbox" type="checkbox" data-size="large" checked />
      <label>Large</label>
    </div>
  </div>
  <div class="stack-h items-center gap-m">
    <div class="stack-h gap-2xs">
      <input class="v-radio" type="radio" name="size" data-size="small" checked />
      <label>Small</label>
    </div>
    <div class="stack-h gap-2xs">
      <input class="v-radio" type="radio" name="size" />
      <label>Medium</label>
    </div>
    <div class="stack-h gap-2xs">
      <input class="v-radio" type="radio" name="size" data-size="large" />
      <label>Large</label>
    </div>
  </div>
</div>
```

## Labels

`.v-form-label` provides consistent label styling: muted color, small size, medium weight.

```html
<div class="stack-v gap-2xs">
  <label class="v-form-label" for="email">Email</label>
  <input class="v-input" type="email" id="email" />
</div>
```

## Error state

Set `aria-invalid="true"` on the control. The border and text turn red automatically — no custom error classes needed. Wrap the error message in `<color-mode palette="coral">` to match the color:

```html
<div class="stack-v">
  <label class="v-form-label" for="email">Email</label>
  <input
    class="v-input"
    type="email"
    id="email"
    value="not-an-email"
    aria-invalid="true"
  />
  <color-mode palette="coral">
    <p class="fs-xs fw-medium mt-2xs">Please enter a valid email address</p>
  </color-mode>
</div>
```

## Disabled state

Disabled controls get `cursor: not-allowed`, but no visual graying out — consistent with the button component. If you need to communicate that an action is unavailable, consider showing an explanation instead of relying on a dimmed appearance.

## Putting it together

A realistic form combining labels, layout, validation, and multiple control types:

```html
<form class="stack-v gap-m">
  <div class="stack-h items-start gap-m">
    <div class="stack-v gap-2xs grow">
      <label class="v-form-label" for="first">First name</label>
      <input class="v-input" type="text" id="first" placeholder="Ola" />
    </div>
    <div class="stack-v gap-2xs grow">
      <label class="v-form-label" for="last">Last name</label>
      <input class="v-input" type="text" id="last" placeholder="Nordmann" />
    </div>
  </div>

  <div class="stack-v">
    <label class="v-form-label mb-3xs" for="email">Email</label>
    <input
      class="v-input"
      type="email"
      id="email"
      value="bad"
      aria-invalid="true"
    />
    <color-mode palette="coral">
      <p class="fs-xs fw-medium mt-2xs">Please enter a valid email address</p>
    </color-mode>
  </div>

  <div class="stack-v gap-2xs">
    <label class="v-form-label" for="country">Country</label>
    <select class="v-select" id="country">
      <option value="">Choose…</option>
      <option value="no">Norway</option>
      <option value="se">Sweden</option>
      <option value="dk">Denmark</option>
    </select>
  </div>

  <div class="stack-v gap-2xs">
    <label class="v-form-label" for="message">Message</label>
    <textarea
      class="v-textarea"
      id="message"
      rows="3"
      placeholder="Write something…"
    ></textarea>
  </div>

  <div class="stack-h gap-s">
    <input class="v-checkbox" type="checkbox" id="terms" />
    <label class="fs-s" for="terms">I accept the terms and conditions</label>
  </div>

  <button class="v-button ml-auto px-xl" type="submit">Submit</button>
</form>
```
