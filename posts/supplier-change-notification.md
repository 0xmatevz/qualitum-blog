---
title: Supplier Change Notification: Audit Ready Intake With 90/180 Day Rules
date: 2026-09-18
description: Practitioner playbook for supplier change notification intake: checklist fields, enforceable 90/180 day timelines, automation options, and ALCOA+...
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789605348587_Pharmaceutical-components-awaiting-supplier-change-review.jpeg
coverAlt: Pharmaceutical components awaiting supplier change review
---

A supplier change notification (SCN) is a supplier-initiated notice describing a proposed change to a material, process, site, or component that may affect fit, form, function, supply continuity, or regulatory compliance. On receipt, log it immediately: capture the supplier name, affected part numbers, proposed implementation date, and change description, then route it to quality and procurement together, since acceptance decisions require both perspectives before anything gets approved.

***

> **TL;DR:**
>
> - Supplier change notifications affecting material, process, or safety-critical aspects require formal review and should be logged immediately with key details like affected part numbers and implementation dates.
> - A complete SCN submission must include supplier information, a clear change description, affected part numbers and sites, supporting documentation, and a proposed implementation date at least 90 days in advance for standard changes.
> - Industry-standard notice periods are 90 days for process or design changes and 180 days for last-time-buy or end-of-life notices, with contractual controls to enforce these timelines.
> - Initial triage should flag safety, regulatory, or critical part impacts to determine if rigorous qualification and risk assessment are necessary before approval.
> - Automating SCN intake with structured forms or portals helps ensure data accuracy and traceability, but the real value lies in linking records directly to qualification evidence and maintaining ALCOA+ compliant documentation.

***

## Table of Contents

- [What Counts as a Supplier Change Notification?](#what-counts-as-a-supplier-change-notification)
- [What Information Should a Complete SCN Include?](#what-information-should-a-complete-scn-include)
- [How Much Notice Should Suppliers Give Before a Change?](#how-much-notice-should-suppliers-give-before-a-change)
- [How Do You Triage and Assess Risk on a New SCN?](#how-do-you-triage-and-assess-risk-on-a-new-scn)
- [Who Owns Each Step in the SCN Process?](#who-owns-each-step-in-the-scn-process)
- [Should You Automate SCN Intake?](#should-you-automate-scn-intake)
- [What Should Your SCN Checklist and Template Include?](#what-should-your-scn-checklist-and-template-include)
- [Why ALCOA+ Matters for SCN Records](#why-alcoa-matters-for-scn-records)
- [The Gap Between Having a Process and Having Evidence](#the-gap-between-having-a-process-and-having-evidence)
- [Turning SCN Records Into Inspection-Ready Evidence](#turning-scn-records-into-inspection-ready-evidence)
- [Sources](#sources)
- [FAQ](#faq)

## What Counts as a Supplier Change Notification?

Not every supplier email about a "minor update" deserves the same scrutiny, but the mistake most procurement teams make is deciding that in their heads instead of on paper. If your quality agreement doesn't define scope, you're negotiating that definition retroactively, mid-crisis, with a supplier who has every incentive to call their change "cosmetic."

Formal supplier change notification processing should trigger for any of the following:

- **Material or source changes** — a different resin grade, a new raw material supplier, or a substituted alloy
- **Manufacturing site changes** — relocating production, adding a second facility, or shifting a sub-tier supplier
- **Process changes** — altered cure times, new coating methods, revised assembly sequences
- **Tooling changes** — new molds, dies, or fixtures, even when the part number stays the same
- **Packaging or labeling changes** — new label artwork, revised shelf-life claims, altered shipping configurations
- **Firmware, software, or technical changes** — updated embedded code, revised calibration routines, changed technical specifications
- **Obsolescence or last-time-buy (LTB) notices** — a component being discontinued, requiring redesign or requalification

The unifying test is fit, form, and function. Does the change alter dimensions, materials, or how the part interfaces with your product? Does it touch anything safety-related or subject to regulatory oversight, like a device's biocompatibility or a drug-contact surface? If yes, the change escalates automatically, regardless of how the supplier characterizes it.

Borderline cases show up constantly: a supplier switching an internal sub-supplier without touching the finished specification, or a packaging vendor changing box dimensions but not the product inside. These deserve a documented review even when they land on the "usually doesn't trigger" side, because the paper trail matters as much as the decision.

This is also where your quality agreements and purchase orders earn their keep. Many disputes over whether an SCN was even required trace back to contracts that never specified what counts as a "change" in the first place. Review your standard supplier quality agreement language now, not after a supplier claims their change was out of scope.

## What Information Should a Complete SCN Include?

A standardized SCN form does most of the triage work before a human even opens it. Terumo's [Supplier Change Notification Form](https://www.terumomedical.com/en-us/support/08-1TFORM-04-Supplier-Change-Notification-Form.pdf) illustrates the industry baseline: a detailed description of the change, affected part numbers, impacted manufacturing sites, a technical impact assessment, and supporting documentation like revised drawings or qualification plans. Treat this as your minimum, not your ceiling.

At minimum, your intake form should require:

1. **Supplier identity and contact** — legal entity name, site of origin, and a named technical contact
2. **Proposed implementation date** — the earliest date the supplier intends to ship the changed item
3. **Before and after description** — a plain-language explanation of what's changing and why
4. **Affected part numbers** — every SKU or internal number touched, not just the "primary" one
5. **Impacted sites** — which of the supplier's manufacturing locations are affected

Beyond the core fields, require supporting documents proportional to risk: revised drawings, updated data sheets, release notes for firmware changes, qualification plans, test reports, and label artwork where packaging changes are involved. Some supplier procedures also ask for product roadmap information, last-time-buy dates, upgrade options, cost impact, and warranty terms, particularly for [electronics and component suppliers](https://www.neonscience.org/sites/default/files/basic-page-files/Supplier-Change-Notification-Procedure.pdf) managing obsolescence cycles.

Incomplete submissions are the norm, not the exception, especially from smaller suppliers unfamiliar with your intake requirements. Rather than rejecting the notice outright, use a short completeness checklist at intake:

- Does the SCN identify a specific implementation date, not a vague quarter or "soon"?
- Are all affected part numbers listed, including any second-source or private-label variants?
- Is there a change description specific enough that engineering can assess impact without a follow-up call?
- Are supporting documents attached, or has the supplier at least indicated when they'll follow?

When a submission fails this check, send it back with a specific list of what's missing rather than a generic rejection. Standardizing your form and enforcing it contractually cuts down on the back-and-forth that otherwise eats weeks off your review window.

## How Much Notice Should Suppliers Give Before a Change?

Industry practice generally expects suppliers to submit change notifications at least [90 days before implementation for design or process changes](https://eforms.zoll.com/Supplier/SCN), and at least 180 days before last-time-buy for end-of-life notifications. These windows exist because qualification work, revised FMEAs, and requalification testing all take real time, and 90 days is often the floor, not a comfortable margin.

![Technician placing samples into qualification fixture](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789605415132_Technician-placing-samples-into-qualification-fixture.jpeg)

Receiving an SCN 90 days out does not mean you have 90 days of leisure. Testing labs get booked, engineering resources compete with other projects, and regulatory submissions (where applicable) have their own lead times. Treat the notice period as a countdown that starts the moment the SCN lands in your inbox, not when someone finally opens it.

A few contractual controls make these timelines enforceable instead of aspirational:

- **Minimum notice clauses** in your quality agreement specifying 90 days for standard changes and 180 days for EOL/LTB notices
- **Escalation language** requiring supplier justification and buyer sign-off for any compressed schedule
- **Documentation requirements** tying the proposed implementation date to a specific field on the SCN form, not a cover email
- **Non-conformance consequences** for suppliers who implement changes without waiting for your disposition

Compressed timelines happen, particularly when a supplier is reacting to their own upstream shortage. When a supplier asks for an accelerated review, document the request, the justification, and who approved the shortened window. That record is what protects you later if a compressed qualification cycle turns into a field issue.

One clarification worth writing into your procedures explicitly: receiving an SCN does not constitute acceptance. Suppliers sometimes treat a lack of response as implicit approval. Your process should state, in writing, that only a formal disposition from your organization authorizes implementation.

## How Do You Triage and Assess Risk on a New SCN?

The first hour after an SCN arrives determines whether the next 90 days go smoothly or turn into a fire drill before an audit. Triage isn't a formality; it's the filter that decides whether a change gets a two-day review or a two-month qualification program.

Run every incoming notice through an immediate screen:

1. **Safety flags** — does the change touch anything with a direct safety implication, patient-contact surface, or critical-to-quality dimension?
2. **Critical part number check** — is this a part number tied to a validated process, a regulatory submission, or a single-source component?
3. **Regulatory impact** — could this change require updating a device master record, a drug application, or a technical file?
4. **Customer-facing exposure** — will your own customers need to be notified downstream, either contractually or as a courtesy?

Once triage flags a change as material, move into technical impact assessment. This means a formal fit/form/function analysis, an update to the relevant FMEA and control plan, and a determination of what qualification evidence you need before accepting the change. Some industries set a high bar here: semiconductor and automotive supplier product change notifications typically require [before/after comparisons, updated FMEAs, and full qualification results](https://www.infineon.com/quality/quality-management/supplier-product-change-notification) before a buyer signs off. Regulated manufacturing in pharma and medical devices should hold itself to a comparable standard even when your specific supplier doesn't operate at that level of rigor by default.

**Pro Tip:** *Build a simple decision matrix that maps change type to required evidence before you're staring down your first SCN of the quarter. A packaging label change and a raw material substitution should never require the same qualification burden, and having that mapping pre-approved saves days of internal debate.*

Three outcomes close the loop: accept, conditionally accept, or reject. Conditional acceptance is the most common and the most misunderstood. It means you're approving the change contingent on the supplier delivering specific qualification samples, test data, or documentation by a defined date, and it requires the same rigor as a full acceptance. Every decision, regardless of outcome, needs to land in your Change Control system or ECO record, with the evidence attached and the approving roles documented. For regulated environments, linking that decision directly to your CSV/CSA validation artifacts gives auditors a single thread from notification to justification, rather than scattered emails and a verbal "we looked at it and it was fine."

## Who Owns Each Step in the SCN Process?

A supplier notification process fails most often not because nobody reviewed it, but because everybody assumed someone else did. Mapping roles explicitly closes that gap.

A practical workflow example: procurement receives the notification, follows up with the supplier to clarify scope, and immediately loops in quality and any affected stakeholders. Quality determines whether fit, form, or function has changed. If it has, the quality manager creates an ECO and coordinates the mitigation plan and approval routing from there.

Responsibilities typically break down like this:

- **Procurement** logs the SCN, confirms completeness, and manages supplier communication throughout the review
- **Supplier quality** performs the initial risk screen and coordinates any requested samples or test data
- **Engineering** conducts the technical fit/form/function analysis and updates design documentation as needed
- **Regulatory affairs** assesses whether the change touches a filed submission, technical file, or labeling claim
- **Operations** evaluates manufacturing impact, including line changes, inventory transition, and inspection updates
- **Product management** weighs customer communication needs and commercial impact

Formal change request examples, like Rockwell Automation's [supplier change request framework](https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/downloads/pdf/supplier-change-notification.pdf), map specific change categories (construction changes, tooling transfers, process modifications) to required qualification levels and mandate signature routing through purchasing, engineering, quality, and product management before disposition. That structure prevents the common failure mode where one department approves informally and the rest find out after implementation.

Escalation should trigger automatically once a change is flagged as safety-related, regulatory, or tied to a sole-source component. At that point, a formal ECO isn't optional. Status communication matters just as much as the decision itself: stakeholders need to know where a review stands, and if the change is significant enough, your own customers may need advance notice before you accept a supplier's change and pass its effects downstream. Silence during a 90-day review window erodes trust faster than a delayed answer.

## Should You Automate SCN Intake?

Manual intake through shared inboxes works until volume outpaces your team's ability to track what's pending, overdue, or forgotten entirely. Three intake channels dominate the current landscape, each with real trade-offs.

**Supplier portals** offer the most structure. Large medical device and life sciences companies run dedicated SCR portals; BD's supplier portal reference guide describes [automated confirmations and status updates](https://www.bd.com/content/dam/bd-assets/bd-com/en-us/document/policy/supplier-policies/supplier-change-request-portal-reference-guide-for-bd-suppliers-en.pdf) once a supplier submits a request. The catch: portal automation handles ingestion and confirmation, but final disposition still comes from a buyer representative after internal review. A portal speeds up intake; it doesn't replace judgment.

**Structured web forms** work well for organizations without portal infrastructure, forcing suppliers to fill in mandatory fields rather than attaching a PDF to a free-text email.

**Inbound email parsing** fits organizations still receiving most SCNs by email but wanting to reduce manual data entry. Vendor QMS platforms describe patterns where inbound processors [parse attachments and map supplier records automatically](https://quality.veevavault.help/en/lr/54469202/), auto-populating SCN fields and attaching evidence to the right record.

Whichever channel you choose, build these checks into your implementation:

- **Required metadata** captured at submission: supplier ID, part number, site code, and proposed date, none of which should be optional fields
- **Matching rules** that reliably connect an SCN to the correct internal part number and site, especially when suppliers use their own numbering
- **Access controls** limiting who can approve disposition versus who can merely log receipt
- **Audit trail integrity** consistent with ALCOA+ principles, so every edit, approval, and attachment carries a timestamp and identity
- **A manual fallback** for when the portal or parser fails, because it will, usually during the week you can least afford it

**Pro Tip:** *The most common automation failure isn't the parsing engine. It's matching logic. A part number typo or a supplier using an old internal code can silently attach evidence to the wrong SCN record, and nobody notices until an auditor asks why the qualification data doesn't match the change under review.*

## What Should Your SCN Checklist and Template Include?

A one-page checklist attached to every purchase order and quality agreement solves more intake problems than any software purchase. Suppliers who know the requirements upfront submit cleaner notifications.

Your minimal copy-ready checklist should require:

- Supplier legal name, site, and technical contact
- Change type (material, process, site, tooling, packaging, firmware, or obsolescence)
- Detailed before/after description
- All affected part numbers and impacted sites
- Proposed implementation date, with 90-day minimum notice (180 days for EOL/LTB)
- Supporting documents: drawings, data sheets, test reports, or label artwork as applicable
- Supplier's own risk assessment, if available

Optional fields worth adding for higher-risk categories include updated FMEA references, RoHS/REACH compliance statements, and product roadmap data for components nearing obsolescence.

Version your SCN form the same way you version any controlled document: date-stamp revisions, retire old versions formally, and store completed notifications alongside their disposition record in your change control system. Reference the SCN number directly in the related ECO so auditors can trace from supplier notice to internal decision without hunting through separate systems.

## Why ALCOA+ Matters for SCN Records

An SCN record is only as defensible as its evidence trail. When ALCOA+ checks run at both write-time and review-time, every field entry, approval, and attached document carries the attribution, timestamp, and accuracy checks auditors look for, rather than being reconstructed after the fact during an inspection.

This matters most in three places:

- **Faster evidence gathering** — qualification data tied to the SCN from intake, not assembled retroactively
- **Reduced authoring time** — qualification plans and impact assessments drafted against a traceable record instead of scattered emails
- **Clearer traceability** — a direct line from the SCN to the affected validation artifacts and the [traceability matrix](https://blog.qualitum.ai/medical-device-csv), so reviewers see the full justification in one place

Linking SCN intake directly to validation records turns a defensive audit response into a five-minute walkthrough.

## The Gap Between Having a Process and Having Evidence

Most quality teams already have an SCN procedure on paper. What they don't have is confidence that the paper matches what actually happened three change cycles ago. That gap, not the absence of a process, is what shows up during audits.

The conventional advice treats SCN management as a documentation exercise: get the form, get the signature, file it. That misses the real risk, which is reconstruction. When an auditor asks why a conditional acceptance was closed out, the answer needs to already exist in a linked record, not in someone's memory of a hallway conversation from eight months ago.

Prioritize the connection between your SCN records and your validation evidence before you prioritize prettier forms or faster portals. A beautifully designed intake form that dead-ends in an inbox is worse than a rough one that feeds directly into your change control and qualification documentation. Automation and [risk-based validation](https://blog.qualitum.ai/gamp-5-risk-based) help, but only once the underlying record structure is honest about what needs proving and who proved it.

> *— Matt*

## Turning SCN Records Into Inspection-Ready Evidence

Manual SCN tracking creates the same problem regulated manufacturers hit everywhere else in validation: the paperwork exists, but proving it holds up under scrutiny takes hours nobody has. Qualitum's [agent-based validation platform](https://qualitum.ai/platform) applies ALCOA+ checks at write-time and review-time to the records tied to supplier changes, so the qualification evidence, impact assessments, and traceability links are audit-ready the moment they're created, not reconstructed the week before an inspection.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

For teams managing supplier change notifications alongside CSV, PPAP, and validation cycles, that means less time chasing down who approved what and more time on the technical review that actually matters. Some validation platforms deploy privately within your own infrastructure, keeping data integrity and traceability under your control rather than a vendor's. If your current SCN-to-validation workflow depends on someone's memory of an email thread, a working session with Qualitum is worth the hour. [Book a working session](https://qualitum.ai/book) to see how the platform connects change notification evidence to your existing quality management system.

## Sources

- [08-1TFORM-04 Supplier Change Notification Form](https://www.terumomedical.com/en-us/support/08-1TFORM-04-Supplier-Change-Notification-Form.pdf)
- [Supplier Change Notification Procedure (NEON)](https://www.neonscience.org/sites/default/files/basic-page-files/Supplier-Change-Notification-Procedure.pdf)
- [SCN - Supply Change Notification (SCN) (ZOLL)](https://eforms.zoll.com/Supplier/SCN)
- [Supplier Change Request (SCR) Portal reference guide for BD suppliers](https://www.bd.com/content/dam/bd-assets/bd-com/en-us/document/policy/supplier-policies/supplier-change-request-portal-reference-guide-for-bd-suppliers-en.pdf)

## FAQ

### How Much Notice Should a Supplier Give for a Change?

Industry practice generally expects a minimum of 90 days for design or process changes and 180 days for end-of-life or last-time-buy notices, though your quality agreement should state these windows explicitly rather than relying on assumed norms.

### Does Receiving an SCN Mean the Change Is Approved?

No. Receipt only starts your review clock; formal disposition requires internal evaluation and buyer sign-off, and treating silence as approval is a common and costly mistake.

### What Are the Minimum Required Fields on an SCN Form?

At minimum, a compliant form needs supplier identity, a detailed change description, affected part numbers, impacted sites, proposed implementation date, and supporting technical documentation like drawings or qualification plans.

### Who Should Approve a Supplier Change Notification?

Approval typically routes through quality and engineering for technical impact, with purchasing, quality, and product management signatures required before formal disposition, and regulatory affairs added when the change touches a filed submission.

### Can Qualitum Help Manage SCN-Related Validation Records?

Qualitum's validation automation platform applies ALCOA+ checks to records at creation and review, helping teams link supplier change evidence directly to qualification and traceability documentation. Current pricing and pilot details are available directly on the Qualitum site.

## Recommended

- [Change Impact Assessment for CSV/CSA: A Validation Lead's Guide](https://blog.qualitum.ai/change-impact-assessment)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [5 Readiness Checks Pharma IQ Checklists Need for Audit Ready OQ Handover](https://blog.qualitum.ai/iq-checklist-pharma)
- [Make CSA Guidance Inspection Ready for QA and Regulatory Teams](https://blog.qualitum.ai/csa-guidance)

## FAQ
### How Much Notice Should a Supplier Give for a Change?
Industry practice generally expects a minimum of 90 days for design or process changes and 180 days for end-of-life or last-time-buy notices, though your quality agreement should state these windows explicitly rather than relying on assumed norms.

### Does Receiving an SCN Mean the Change Is Approved?
No. Receipt only starts your review clock; formal disposition requires internal evaluation and buyer sign-off, and treating silence as approval is a common and costly mistake.

### What Are the Minimum Required Fields on an SCN Form?
At minimum, a compliant form needs supplier identity, a detailed change description, affected part numbers, impacted sites, proposed implementation date, and supporting technical documentation like drawings or qualification plans.

### Who Should Approve a Supplier Change Notification?
Approval typically routes through quality and engineering for technical impact, with purchasing, quality, and product management signatures required before formal disposition, and regulatory affairs added when the change touches a filed submission.

### Can Qualitum Help Manage SCN-Related Validation Records?
Qualitum's validation automation platform applies ALCOA+ checks to records at creation and review, helping teams link supplier change evidence directly to qualification and traceability documentation. Current pricing and pilot details are available directly on the Qualitum site.
