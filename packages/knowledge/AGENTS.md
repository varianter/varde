# Tone of voice

## Voice

A calm designer explaining a decision to a peer. Friendly, informative, never forceful. The reader is competent and busy.

## Person

- **"You"** for the reader.
- **"Varde"** for the system and the choices it makes. Not "we". _Varde uses modern CSS_, not _we use modern CSS_. Describe what the system does, not what the team decided.
- **"It"** once Varde is established as the subject.

## Sentences

Every sentence should reduce to one clause: **a real thing does a real result.**

- **Real thing.** A class, element, attribute, token or palette that exists in the code. Not a metaphor ("slots"), not something that doesn't exist (`.badge-success`), not "you" when Varde is doing the work.
- **Does.** An action, not `is`, `are`, `has` or `there is`. Those label; they don't explain.
- **Real result.** Say what happens, once. Not zero times ("Ink inherits."), not twice ("…automatically — no extra classes needed").

If any part fails, rewrite.

| Don't say                                                                 | Say                                                   |
| ------------------------------------------------------------------------- | ----------------------------------------------------- |
| You set nothing up for it.                                                | There's nothing to set up.                            |
| Give it the usual shape:                                                  | Start from the standard HTML structure:               |
| The checked state fills the mark automatically — no extra classes needed. | The checked state fills the mark automatically.       |
| We chose the second because it stays small.                               | Varde is built on the second, because it stays small. |

## Structure

- **Open with what the thing is and who it's for**, in one sentence.
- **Lead with the problem or outcome**, then the feature.
- **Say what a thing is not** when confusion is likely. One sentence: _`inverted` is not dark mode. Dark mode follows the user's preference; `inverted` is a choice you make per block._
- **Name the trade-off** when there is one. Don't invent one.

## Headings

A heading names what the reader gets or does. It's a label, not a sentence or a slogan.

- Guides: prefer a verb. _Space a form field_, not _Spacing_.
- Reference pages: name the thing. _Font size_, _Button variants_.
- Never a full sentence. _Contexts carry color, components don't_ → _Where color lives_. Move the idea into the body.
- No class names or selectors in headings.

## Avoid

- Words with a CSS meaning used loosely: "absolute", "relative".
- Class names or examples that don't exist in Varde.
- Repeating a conclusion the sentence already implies.

## Accuracy and formatting

- Link to related pages.
- No h1; the frontmatter title is the h1. Don't skip heading levels.
- Code blocks for examples. Skip the block if the example is trivial. Use `open` or `no-preview` for small ones.
- Tables for matrices. Italics and bold where they help.
