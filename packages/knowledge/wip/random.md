---
title: Fjes example
---

# Pretty fjes

```html
<style>
  @property --pf-gaze-x {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --pf-gaze-y {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  @keyframes pf-gaze {
    0%,
    7% {
      --pf-gaze-x: 0;
      --pf-gaze-y: 0;
    }
    15%,
    29% {
      --pf-gaze-x: -1;
      --pf-gaze-y: -0.2;
    }
    37%,
    49% {
      --pf-gaze-x: 0.9;
      --pf-gaze-y: -0.6;
    }
    57%,
    68% {
      --pf-gaze-x: 0.6;
      --pf-gaze-y: 0.9;
    }
    77%,
    87% {
      --pf-gaze-x: -0.5;
      --pf-gaze-y: 0.45;
    }
    95%,
    100% {
      --pf-gaze-x: 0;
      --pf-gaze-y: 0;
    }
  }

  @keyframes pf-eyes-open {
    0%,
    92.5% {
      opacity: 1;
    }
    93%,
    96% {
      opacity: 0;
    }
    96.5% {
      opacity: 1;
    }
  }
  @keyframes pf-eyes-shut {
    0%,
    92.5% {
      opacity: 0;
    }
    93%,
    96% {
      opacity: 1;
    }
    96.5% {
      opacity: 0;
    }
  }

  @scope (.pf-face) {
    :scope {
      animation: pf-gaze 12s cubic-bezier(0.25, 1, 0.4, 1) infinite;
    }

    .pf-turn,
    .pf-layer {
      transform-box: view-box;
    }

    .pf-turn {
      transform-origin: 39px 39px;
      transform: rotate(calc(var(--pf-gaze-x) * 2.5deg))
        scaleX(calc(1 - max(var(--pf-gaze-x), var(--pf-gaze-x) * -1) * 0.045));
    }

    .pf-layer {
      transform: translate(
        calc(var(--pf-gaze-x) * var(--pf-depth) * 1px),
        calc(var(--pf-gaze-y) * var(--pf-depth) * 0.6px)
      );
    }

    .pf-back {
      --pf-depth: 1;
    }
    .pf-mid {
      --pf-depth: 2.6;
    }
    .pf-front {
      --pf-depth: 4.2;
    }

    .pf-eyes-open {
      animation: pf-eyes-open 3.7s steps(1, end) infinite;
    }
    .pf-eyes-shut {
      animation: pf-eyes-shut 3.7s steps(1, end) infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      :scope,
      .pf-eyes-open,
      .pf-eyes-shut {
        animation: none;
      }
    }
  }
</style>
<svg
  class="pf-face"
  xmlns="http://www.w3.org/2000/svg"
  width="78"
  height="78"
  viewBox="0 0 78 78"
  fill="none"
>
  <g class="pf-turn">
    <g class="pf-layer pf-back">
      <path
        d="M21.4556 41.5719V41.5719C28.3432 57.388 50.7755 57.388 57.6632 41.5719V41.5719"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g class="pf-layer pf-mid pf-eyes-open">
      <path
        d="M48.1181 29.0024V33.1553"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
      />
      <path
        d="M29.6606 29.0024V33.1553"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
      />
    </g>
    <g class="pf-layer pf-mid pf-eyes-shut" opacity="0">
      <path
        d="M46.05 31.0788H50.19"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
      />
      <path
        d="M27.59 31.0788H31.73"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
      />
    </g>
    <g class="pf-layer pf-front">
      <path
        d="M38.8887 29.0024V37.3081H42.3119"
        stroke="currentColor"
        stroke-width="4.02307"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </g>
</svg>
```
