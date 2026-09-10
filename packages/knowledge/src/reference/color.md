---
title: Color reference
description: Color symptoms and their fixes, plus a quick cheat sheet for common color tasks.
---

For the full class list, see [Classes](/docs/reference/classes). For the reasoning behind any of it, see [Color modes](/docs/explanation/color-modes).

## Troubleshooting

| Symptom                           | Cause                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| Background isn't showing          | Missing display class. Add `d-block` or `d-inline-block`.                                   |
| Nesting a palette changed nothing | Same palette twice is a no-op. Step the surface instead: `surface-tinted` → `surface-dyed`. |
| `inverted` stopped part-way down  | Setting `palette` on a child resets direction. Repeat `inverted` on the child.              |
| A button is the wrong color      | Don't color the button. Color its container.                                              |
| Focus ring didn't change          | Correct. Focus rings, text selection and error states never follow the palette.             |

## Quick reference

| Want to             | Do this                                   |
| ------------------- | ----------------------------------------- |
| Color anything     | Wrap it in `<color-mode palette="…">`     |
| Make it visible     | Add `d-block` or `d-inline-block`         |
| Add contrast        | Add `inverted`                            |
| Go a shade stronger | `surface-tinted` → `surface-dyed`         |
| Color a button     | Nothing — color its container            |
| Support dark mode   | Nothing — set `data-color-scheme` at root |
