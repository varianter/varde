import { DocsPage, ExamplePanel, Section } from "../components/docs";

export const path = "/utilities/typeset";

export function TypesetPage() {
  return (
    <DocsPage
      title="Typeset"
      description="A prose container for long-form text content. Wrap any article, blog post, or documentation block in .typeset to get sensible typography, vertical rhythm, and readable line length — no per-element tweaking needed."
    >
      {/* Vertical Rhythm */}
      <Section
        title="Vertical Rhythm"
        description="Block siblings (p, ul, ol, blockquote, headings) are automatically spaced with --flow-space (default 0.75em). Line-height is set to 1.4 and max-width to 65ch for optimal readability."
      >
        <ExamplePanel>
          <div class="typeset">
            <p>
              The king, seeing how much heavier his nephew's attention was to home than his, and
              that all his own meaſures were fruſtrated by the unaccountable prejudice his nephew
              had taken againſt the unfortunate Miſs Frick, he gave it as his laſt advice.
            </p>
            <p>
              An enumeration of all the particulars, the delivery, and the eſtate to be purchaſed,
              would ſwell this article to a tedious length.
            </p>
          </div>
        </ExamplePanel>
      </Section>

      {/* Headings */}
      <Section
        title="Headings"
        description="h1–h4 are sized relative to each other with tighter line-height (1.2 for h1/h2, 1.33 for h3/h4). h1 gets extra top margin for section separation."
      >
        <ExamplePanel>
          <div class="typeset">
            <h1>This is a level-one heading</h1>
            <p>Body text following an h1.</p>
            <h2>This is a level-two heading</h2>
            <p>Body text following an h2.</p>
            <h3>This is a level-three heading</h3>
            <p>Body text following an h3.</p>
            <h4>This is a level-four heading</h4>
            <p>Body text following an h4.</p>
          </div>
        </ExamplePanel>
      </Section>

      {/* Heading Spacing Rules */}
      <Section
        title="Heading Spacing Rules"
        description="Spacing between headings and body adapts to the context. A spacious 2rem gap appears before headings that follow body content, while headings after an h1 stay tightly coupled at 1rem. Body after a heading gets a close 0.5rem gap."
      >
        <ExamplePanel>
          <div class="typeset">
            <h1>Page Title</h1>
            <h2>Subtitled — tightly coupled to h1</h2>
            <p>
              Body text after a heading stays close (0.5rem). This keeps the heading visually
              connected to its content.
            </p>
            <p>
              Another paragraph flowing naturally after the first. The regular rhythm between body
              paragraphs is 0.75em.
            </p>
            <h2>A New Section</h2>
            <p>
              When body content precedes a heading, a spacious 2rem gap is added to visually
              separate the new section.
            </p>
            <h3>Nested Subsection</h3>
            <p>
              Same rules apply at every heading level. Body before a heading gets breathing room;
              body after a heading stays close.
            </p>
          </div>
        </ExamplePanel>
      </Section>

      {/* Lists */}
      <Section
        title="Lists"
        description="Unordered lists use square markers; ordered lists use decimal. Markers use the accent font and reduced opacity. List items have a small gap between them."
      >
        <ExamplePanel>
          <div class="typeset">
            <p>A paragraph before the list:</p>
            <ul>
              <li>Square markers for unordered lists</li>
              <li>Items have 0.25em gap between them</li>
              <li>Markers use the accent font at 60% opacity</li>
            </ul>
            <p>A paragraph between lists:</p>
            <ol>
              <li>Decimal markers for ordered lists</li>
              <li>Same item spacing as unordered lists</li>
              <li>Also uses the accent font for markers</li>
            </ol>
            <p>Lists can also be nested:</p>
            <ul>
              <li>
                Top-level item
                <ul>
                  <li>Nested item with square markers</li>
                  <li>Another nested item</li>
                </ul>
              </li>
              <li>Another top-level item</li>
            </ul>
          </div>
        </ExamplePanel>
      </Section>

      {/* Definition Lists */}
      <Section
        title="Definition Lists"
        description="dl elements use a two-column grid. Terms sit in the left column (60% opacity, no wrap) and descriptions span the right column."
      >
        <ExamplePanel>
          <div class="typeset">
            <dl>
              <dt>Typeset</dt>
              <dd>A prose container with sensible typography defaults.</dd>
              <dt>Flow Space</dt>
              <dd>The CSS custom property that controls vertical rhythm between block siblings.</dd>
              <dt>Ch</dt>
              <dd>
                A relative unit equal to the width of the "0" character, used for readable line
                length.
              </dd>
            </dl>
          </div>
        </ExamplePanel>
      </Section>

      {/* Inline Code */}
      <Section
        title="Inline Code"
        description="Inline code gets a monospace font, slightly reduced size, padding, and a subtle background. Code blocks (pre > code) are left untouched — only inline code within paragraphs or list items is styled."
      >
        <ExamplePanel>
          <div class="typeset">
            <p>
              The <code>.typeset</code> class applies a set of sensible defaults to all child
              elements. Use <code>--flow-space</code> to customize the vertical rhythm spacing.
            </p>
            <p>
              Inline code looks distinct from body text, making it easy to spot class names like{" "}
              <code>.typeset</code> or property names like <code>max-width</code> inline.
            </p>
          </div>
        </ExamplePanel>
      </Section>

      {/* Full Article Example */}
      <Section
        title="Putting It All Together"
        description="A realistic example combining headings, paragraphs, lists, definition lists, and inline code — all in a single .typeset container."
      >
        <ExamplePanel>
          <div class="typeset">
            <h1>On the Design of Typesetting</h1>
            <h2>A brief guide to readable prose on the web</h2>
            <p>
              Good typography is invisible. The reader should never notice the spacing, the line
              length, or the font choices — they should simply read. The <code>.typeset</code>{" "}
              utility provides a set of defaults that make this possible.
            </p>
            <h3>Core Principles</h3>
            <ul>
              <li>
                <strong>Line length:</strong> Capped at <code>65ch</code> — roughly 65 characters
                per line, the sweet spot for readability.
              </li>
              <li>
                <strong>Line height:</strong> Set to <code>1.4</code> for body text, giving letters
                room to breathe without feeling loose.
              </li>
              <li>
                <strong>Vertical rhythm:</strong> Block siblings are automatically spaced using the{" "}
                <code>--flow-space</code> custom property.
              </li>
            </ul>
            <h3>Technical Details</h3>
            <dl>
              <dt>Layer</dt>
              <dd>typeset</dd>
              <dt>Selector</dt>
              <dd>:where(.typeset)</dd>
              <dt>Max Width</dt>
              <dd>65ch</dd>
              <dt>Default Flow</dt>
              <dd>0.75em</dd>
            </dl>
            <p>
              The <code>:where()</code> pseudo-class keeps specificity low, so you can override any
              rule without fighting selector wars. Need a different flow space? Just set{" "}
              <code>--flow-space</code> on the container or any child.
            </p>
          </div>
        </ExamplePanel>
      </Section>
    </DocsPage>
  );
}

export default TypesetPage;
