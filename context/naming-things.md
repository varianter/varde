the neutral background is ambient and the intent background is marked, and "surface" vs "background" is the lexical fork that carries that. Worth stating as a first principle, because it also tells you why intents can't have surfaces (a marked state can't be ambient ground) — that rule you asserted earlier now has a reason underneath it.

Neutrals are your load-bearing layer because they carry hierarchy — caption under body under heading, surface nested on surface. Hierarchy needs many rungs. Intents carry meaning, and meaning has no hierarchy: there's no "more success / less success," there's just success.

Neutrals:
surface — depth — sunken / default / raised
fg — ink/voice — muted / default / emphasis
border — visibility — faint / default / prominent

surface-{sunken / default / raised}
fg-{muted / default / emphasis}
border-{subtle / default / strong}

Intents:
bg-{subtle/medium/strong}
fg-{subtle/medium/strong}
border-{subtle/medium/strong}

Forms/inputs/buttons get their own neutral equivalent mapping to danger, and does not rely on Intent colors values (e.g 300, 500 and so on).
In other words: If we're using a neutral-600 for the the border of text input, if the same input is put in an error state, it'd point to red-600.
