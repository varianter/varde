# Form controls

Apply `.input`, `.select`, `.textarea`, `.checkbox`, or `.radio` to their respective native HTML elements. Pair with `.form-label` for labels. Size with `data-size` and mark errors with `aria-invalid`.

## Text input

`.input` on text-like `<input>` elements.

```html
<label class="form-label" for="name">Full name</label>
<input class="input" type="text" id="name" placeholder="e.g. Ola Nordmann" />
```

## Textarea

`.textarea` on `<textarea>`.

```html
<label class="form-label" for="message">Message</label>
<textarea
  class="textarea"
  id="message"
  rows="3"
  placeholder="Write something…"
></textarea>
```

## Select

`.select` on `<select>`. A custom chevron is rendered via `background-image` — no wrapper element or icon needed. Supports `<optgroup>` labels, `<hr>` separators, and disabled `<option>` elements.

```html
<label class="form-label" for="country">Country</label>
<select class="select" id="country">
  <option value="">Choose…</option>
  <option value="no">Norway</option>
  <option value="se">Sweden</option>
  <option value="dk" disabled>Denmark</option>
</select>
```

With optgroups and separators:

```html
<select class="select">
  <option value="">Choose a food</option>
  <hr />
  <optgroup label="Fruit">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <hr />
  <optgroup label="Vegetables">
    <option value="artichoke">Artichoke</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</select>
```

In Chromium-based browsers, the dropdown itself is fully styled (optgroup labels, checkmarks, hover states). Other browsers get a custom chevron with a native dropdown.

## Checkbox & Radio

`.checkbox` and `.radio` on `<input type="checkbox">` and `<input type="radio">`. The native appearance is replaced with a styled check or dot mark. Checked state fills the mark automatically — no extra classes needed.

```html
<div class="stack-horizontal gap-s">
  <input class="checkbox" type="checkbox" id="terms" checked />
  <label for="terms">I accept the terms</label>
</div>
```

```html
<div class="stack-horizontal gap-s">
  <input class="radio" type="radio" name="choice" id="opt-a" checked />
  <label for="opt-a">Option A</label>
</div>
<div class="stack-horizontal gap-s">
  <input class="radio" type="radio" name="choice" id="opt-b" />
  <label for="opt-b">Option B</label>
</div>
```

Always pair checkbox and radio inputs with `<label>` elements — the label text is not built into the control.

## Labels

`.form-label` provides consistent label styling: muted color, small size, medium weight.

```html
<label class="form-label" for="email">Email</label>
<input class="input" type="email" id="email" />
```

## Sizes

All controls accept `data-size="small"` and `data-size="large"`. Medium is the default.

```html
<input class="input" type="text" data-size="small" placeholder="Small" />
<input class="input" type="text" placeholder="Medium" />
<input class="input" type="text" data-size="large" placeholder="Large" />
```

Inputs and buttons at matching sizes align naturally in a row:

```html
<div class="stack-horizontal gap-s">
  <input
    class="input grow"
    type="text"
    data-size="large"
    placeholder="Search…"
  />
  <button class="button" data-size="large">Go</button>
</div>
```

## Error state

Set `aria-invalid="true"` on the control. The border and text turn red automatically — no custom error classes needed. Wrap the error message in `<color-mode palette="coral">` to match the color:

```html
<label class="form-label" for="email">Email</label>
<input
  class="input"
  type="email"
  id="email"
  value="not-an-email"
  aria-invalid="true"
/>
<color-mode palette="coral">
  <p class="fs-xs t-medium mt-2xs">Please enter a valid email address</p>
</color-mode>
```

## Disabled state

Disabled controls get `cursor: not-allowed`, but no visual graying out — consistent with the button component. If you need to communicate that an action is unavailable, consider showing an explanation instead of relying on a dimmed appearance.

## Putting it together

A realistic form combining labels, layout, validation, and multiple control types:

```html
<form class="stack gap-m">
  <div class="stack-horizontal items-start gap-m">
    <div class="stack gap-2xs grow">
      <label class="form-label" for="first">First name</label>
      <input class="input" type="text" id="first" placeholder="Ola" />
    </div>
    <div class="stack gap-2xs grow">
      <label class="form-label" for="last">Last name</label>
      <input class="input" type="text" id="last" placeholder="Nordmann" />
    </div>
  </div>

  <div class="stack">
    <label class="form-label mb-3xs" for="email">Email</label>
    <input
      class="input"
      type="email"
      id="email"
      value="bad"
      aria-invalid="true"
    />
    <color-mode palette="coral">
      <p class="fs-xs t-medium mt-2xs">Please enter a valid email address</p>
    </color-mode>
  </div>

  <div class="stack gap-2xs">
    <label class="form-label" for="country">Country</label>
    <select class="select" id="country">
      <option value="">Choose…</option>
      <option value="no">Norway</option>
      <option value="se">Sweden</option>
      <option value="dk">Denmark</option>
    </select>
  </div>

  <div class="stack gap-2xs">
    <label class="form-label" for="message">Message</label>
    <textarea
      class="textarea"
      id="message"
      rows="3"
      placeholder="Write something…"
    ></textarea>
  </div>

  <div class="stack-horizontal gap-s">
    <input class="checkbox" type="checkbox" id="terms" />
    <label class="fs-s" for="terms">I accept the terms and conditions</label>
  </div>

  <button class="button ml-auto px-xl" type="submit">Submit</button>
</form>
```
