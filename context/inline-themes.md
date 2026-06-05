```
:where(:root), [data-mode="gray"] {
  --color-0: var(--palette-gray-0);
  --color-50: var(--palette-perriwinkle-50);
  --color-100: var(--palette-perriwinkle-100);
  --color-150: var(--palette-perriwinkle-150);
}
[data-mode="coral"] {
  --0: var(--palette-coral-0);
  --50: var(--palette-coral-50);
  --100: var(--palette-coral-100);
  --150: var(--palette-coral-150);
  /* increment by 50, up to 950 */
}

@prefer dark{
  [data-mode][data-inverted]){
    --surface-default: var(--color-50);
  }
  [data-mode]:not([data-inverted]){
    --surface-default: var(--color-750);
  }
}

@prefer light{
  [data-mode][data-inverted]){
    --surface-default: var(--color-750);
  }
  [data-mode]:not([data-inverted]){
    --surface-default: var(--color-50);
  }
}

```
