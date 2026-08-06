## When to stack and when to use margin/padding.

We generally want less spacing when things are getting nested. As an example, a label and an input usually gets a spacing between eachother of about `3xs`. Groups of inputs are then usually `s` or `m`.

Do:

- When more than two elements in the same container: use `.stack`
- When just one element, and there is no background involved, use the `.m-*` classes.
- When many elements look the same, like lists or cards spacing should be uniform.
- When elements are not alike, do not use the same spacing between them.

## Form Controls

Here's an example of a regular input:

```html
<div class="stack">
  <label class="label mb-3xs" for="demo-email">Email</label>
  <input class="input mb-2xs" type="email" id="demo-email" />
</div>
```

With a validation error:

```html
<div class="stack">
  <label class="label mb-3xs" for="demo-email">Email</label>
  <input
    class="input"
    type="text"
    id="demo-email"
    aria-invalid="true"
    aria-describedby="validation-email"
  />
  <p id="validation-email mb-2xs" class="fs-s">
    Please enter a valid email address
  </p>
</div>
```

Note that we do not use `.stack` here, because the spacing of the label and the error is not 1:1. These are three different elements and should have non-uniform spacing.
