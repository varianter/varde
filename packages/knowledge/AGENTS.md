# Rules

- Never use h1 in the markdown files. The title in the frontmatter does this.
- Do not skip headings. In other words, don't go from an h2 to an h4.
- Avoid terms that mean something in CSS, like "absolute" and "relative".
- The language should not be forceful. Rather, we aim for a friendly, informative, tone.
- Make no examples of classes that do not exist.
- Remember to use links to other relevant files.

# Voice

- Open with what the thing is and who it's for, in one sentence, before any detail.
- Lead with the problem or the outcome, not the feature. Say why the reader should care first.
- Use "you" for the reader and "we" for choices the system makes on their behalf.
- Say what a thing is not when the reader might confuse it with something else. Keep it short.
  One sentence is enough: "X is not Y — X is Z." For example: "`inverted` is not dark mode. Dark
  mode follows the user's preference; `inverted` is a choice you make per block."
- Headings describe outcomes, not objects: "Make a block pop", not "Usage".
  Write the heading as the thing the reader will do, not the thing you're describing.
  Prefer a verb: "Force one scheme" over "Scheme", "Space a form field" over "Spacing".
  Reference pages are the exception — there, naming the thing is the point, so "Font
  size" and "Button variants" are fine.
- Name the trade-off. If a decision costs something, say so and say why it's worth it. Do not add sections for trade-offs just because there wasn't one.

# Voice — temperature

The goal is a calm designer explaining a decision to a peer. Every sentence reduces to one clause:

> `[a real thing] [does] [a real result]`

"Real" means it exists in the system — a class, an element, an attribute, a token, a palette. A noun that isn't in the code is a metaphor or a fabrication.

Walk the clause:

1. Is the **thing** a real part of the system?
   - No → metaphor, fabrication, or "you" where the system should be. Name the real thing.
2. Is the **does** an action — not `is` / `are` / `has` / `there is`?
   - No → you're classifying. Make it do something.
3. Is the **result** filled in, exactly once?
   - Empty → clipped. Name what happens.
   - Twice → spelled out. Cut the repeat.
   - Once → done.

Any "no" means rewrite.

| Target                                   | Why it dies                                       |
| ---------------------------------------- | ------------------------------------------------- |
| Metaphor (`slots`, `complete statement`) | It names your idea of the system, not the system. |
| Fabrication (`no .badge-success`)        | It points at what isn't there.                    |
| Classification (`is` / `are`)            | It labels; it doesn't explain.                    |
| Empty result (`Ink inherits.`)           | It stops before what happens.                     |
| Repeated result                          | It lands, then lands again.                       |

## Headings are labels, not slogans

A heading is the `thing` slot, standing alone. If it reads like a movie tagline, it's an idea, not a signpost — move the idea into the body and leave a plain label.

- "Contexts carry color, components don't" → "Where color lives"
- "Modes nest, and the nearest one wins" → "Nesting modes"
- "Names describe jobs, not colors" → "Naming colors"

The line survives in the sentence: "A button inside a periwinkle mode is periwinkle. Nobody told it to be."

Also: Don't use Varde class names or selectors in headings.

## Write like you're explaining, not issuing

Put the `thing` slot on Varde, not the reader. Clipped commands read as forceful even when they're friendly in intent — when Varde does the work, describe Varde, not "you" in charge of a non-task.

- "You set nothing up for it." → "There's nothing to set up."
- "give it the usual shape:" → "start from the standard HTML structure:"
- "Three things to notice:" → "Three things matter here:"

## State the fact and stop

Fill the `result` slot once. If the sentence already implies the conclusion, don't add it. Trust the reader.

- "The checked state fills the mark automatically — no extra classes needed." → "The checked state fills the mark automatically."

If the contrast is the point, make it the point: "The checked state needs no class — it fills the mark on its own."

# Tips

Make use of Markdown to present information properly. Use:

- code blocks for examples
- tables for matrices
- A too simple example is not worth the code block.
- For code blocks, you can use `open` or `no-preview` for smaller examples.
