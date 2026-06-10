/* Fallback content so the build always produces output even before Contentful
   is connected. Once CONTENTFUL_* env vars are set, these are ignored. */
export const SAMPLE_POSTS = [
  {
    title: 'Why validation evidence belongs in a system, not a document',
    slug: 'evidence-not-documents',
    excerpt: 'The validation record is the most valuable, least structured data in a pharma quality org. Here is what changes when it becomes live data inside your tenant.',
    author: 'Qualitum', publishedDate: '2026-05-12', cover: null,
    body: `## The document is the bottleneck

Every regulated therapy ships on a mountain of validation evidence. Almost all of it lives in Word and PDF — authored by hand, reviewed by committee, and frozen the moment it is signed.

That freezing is the problem. The moment a system changes, the evidence is stale, and the only way to know is to read it.

## What changes

When the evidence becomes **live data** inside your own tenant:

- The traceability matrix is a query, not a controlled document.
- Audit-trail review runs continuously, not once a quarter.
- Inspection readiness is a state you are always in.

> The artifact stops being the output. The validated state becomes the output.

## FAQ

### Does this replace our existing eQMS?
No. Qualitum sits alongside your eQMS and makes the validation evidence inside it queryable and continuously current, rather than frozen in static documents.

### Where does the data live?
Entirely inside your own tenant. The private data perimeter never moves, which is what keeps platform validation and your configuration validation cleanly separated.`,
  },
  {
    title: 'A practical read of Annex 11 §4 in a private-tenant deployment',
    slug: 'annex-11-private-tenant',
    excerpt: 'Validation of the platform vs. validation of your configuration — where the line sits, and why private deployment makes the answer cleaner.',
    author: 'Qualitum', publishedDate: '2026-04-28', cover: null,
    body: `## Two layers, two owners

Annex 11 §4 asks for validation appropriate to risk. In a private-tenant deployment that resolves into two clean layers.

### The platform layer

Validated as a GAMP 5 Category 4 baseline. This is our responsibility, evidenced in the platform validation pack.

### The configuration layer

Your site-specific configuration is validated as part of your own CSV lifecycle — with the platform pack as the input.

The private boundary is what keeps the two from blurring.`,
  },
  {
    title: 'Audit trails that reconstruct the sequence of activities',
    slug: 'audit-trails-reconstruct',
    excerpt: 'Computer-generated, time-sequenced, tamper-evident — and reviewed continuously. What a regulator-grade audit log actually requires.',
    author: 'Qualitum', publishedDate: '2026-04-10', cover: null,
    body: `## More than a log

A compliant audit trail is not a log file. It has to reconstruct the sequence of activities with enough detail to satisfy an inspector, and it has to be tamper-evident.

- Time-stamped by an authoritative clock, not the app server.
- Cryptographically chained, append-only.
- Exportable to your SIEM.

That is the bar, and it is the default.`,
  },
];
