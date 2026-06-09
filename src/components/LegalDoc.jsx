import { SITE } from "../config.js";

// Replace the {{email}} token with a mailto link.
function withEmail(text) {
  return text.replaceAll("{{email}}", `<a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a>`);
}

function Block({ block }) {
  if (block.h3) return <h3 dangerouslySetInnerHTML={{ __html: withEmail(block.h3) }} />;
  if (block.ul)
    return (
      <ul>
        {block.ul.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: withEmail(li) }} />
        ))}
      </ul>
    );
  return <p dangerouslySetInnerHTML={{ __html: withEmail(block.p) }} />;
}

// Renders a structured legal document (see src/legal/*.js).
export default function LegalDoc({ doc, date, eyebrow }) {
  return (
    <article className="legal">
      <div className="container legal__wrap">
        <header className="legal__head">
          <span className="eyebrow">
            <span className="eyebrow__dot" /> {eyebrow}
          </span>
          <h1>{doc.title}</h1>
          <p className="legal__meta">
            {doc.updatedLabel}: {date}
          </p>
        </header>

        <div className="legal__body">
          {doc.summary && (
            <div className="legal__summary">
              <h2>{doc.summary.title}</h2>
              <ul>
                {doc.summary.items.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: withEmail(it) }} />
                ))}
              </ul>
            </div>
          )}

          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2>{s.h}</h2>
              {s.blocks.map((b, j) => (
                <Block key={j} block={b} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
