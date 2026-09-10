Gör Github issues istället!


Ting som jag borde göra:
Dokumentera Typeset på nytt.
Pagefind
En finare header
Utforska komplementär paletter


Detta har hänt:

### Negative margins

Moved the `-` to in front of the `m`. From `m--*` to `-m-*`:

| Old                         | New                         |
| --------------------------- | --------------------------- |
| `m--4xs` … `m--3xl`         | `-m-4xs` … `-m-3xl`         |
| `m--4xs-3xs` … `m--2xl-3xl` | `-m-4xs-3xs` … `-m-2xl-3xl` |

### Text utilities

| Old           | New            |
| ------------- | -------------- |
| `t-regular`   | `fw-regular`   |
| `t-medium`    | `fw-medium`    |
| `t-bold`      | `fw-bold`      |
| `t-center`    | `ta-center`    |
| `t-left`      | `ta-left`      |
| `t-right`     | `ta-right`     |
| `t-uppercase` | `tt-uppercase` |

### Border utilities

| Old            | New                  |
| -------------- | -------------------- |
| `b-faint`      | `bc-subtle`¹         |
| `b-default`    | `bc-default`         |
| `b-prominent`  | `bc-prominent`       |
| `b-hairline`   | `bw-hairline`        |
| `b-thick`      | `bw-thick`           |
| `b-last-none`  | `b-none:last-child`  |
| `b-first-none` | `b-none:first-child` |
| `brtl-none`    | `br-tl-none`         |
| `brtr-none`    | `br-tr-none`         |
| `brbl-none`    | `br-bl-none`         |
| `brbr-none`    | `br-br-none`         |

### Color / surface utilities

| Old                 | New              |
| ------------------- | ---------------- |
| `bg-surface-base`   | `surface-base`   |
| `bg-surface-tinted` | `surface-tinted` |
| `bg-surface-dyed`   | `surface-dyed`   |
| `fg-default`        | `ink-default`    |
| `fg-muted`          | `ink-subtle`     |
| `fg-emphasis`       | `ink-prominent`  |

### Aspect ratio

| Old                | New             |
| ------------------ | --------------- |
| `aspect-ratio-1-1` | `aspect-square` |
