---
title: Predicate Rules Mapping: A Practical Guide for Validation Teams
date: 2026-11-05
description: Predicate rules mapping explained: how to link each FDA requirement to records, systems, Part 11 controls and validation evidence, and keep the map inspection-ready.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1793721742451_Technician-checking-pharmaceutical-weighing-equipment-calibration.jpeg
coverAlt: Technician checking pharmaceutical weighing equipment calibration
---

Predicate rules mapping is the exercise of listing every record your FDA-regulated operation must keep under the underlying rules (cGMP, GLP, GCP and others), then tying each record to the system that holds it, the 21 CFR Part 11 controls that follow, and the validation evidence that proves those controls work. Done once and kept current, it tells you which systems need full Part 11 rigor, which do not, and why you decided so.

This guide walks through the logic, a step-by-step method, a mapping template you can adapt, and how to keep the map alive between inspections.

## TL;DR

- Predicate rules are the FDA requirements other than Part 11. They decide *what* records you must keep. Part 11 decides how those records must behave when electronic.
- Mapping means one row per required record: the predicate citation, the system, the Part 11 applicability decision, the controls and the validation evidence.
- FDA recommends documenting your scope decisions, for example in an SOP or specification, so the written rationale is what an inspector reads.
- A map only helps if it is versioned and tied to change control. A stale map is worse than none.
- Traceability from rule to evidence can be maintained as a live artifact instead of a spreadsheet rebuilt before each audit.

## Table of Contents

- [What predicate rules are, and why mapping starts there](#what-predicate-rules-are-and-why-mapping-starts-there)
- [Why mapping matters before you validate anything](#why-mapping-matters-before-you-validate-anything)
- [A step-by-step method for predicate rules mapping](#a-step-by-step-method-for-predicate-rules-mapping)
- [A mapping template you can adapt](#a-mapping-template-you-can-adapt)
- [Common mapping mistakes](#common-mapping-mistakes)
- [Keeping the map inspection-ready](#keeping-the-map-inspection-ready)
- [Perspective: the map should be a live artifact, not a project](#perspective-the-map-should-be-a-live-artifact-not-a-project)
- [How Qualitum supports predicate-rule traceability](#how-qualitum-supports-predicate-rule-traceability)
- [FAQ](#faq)
- [Sources](#sources)

## What predicate rules are, and why mapping starts there

FDA's scope and application guidance describes predicate rules as the requirements set in the FD&C Act, the PHS Act, and FDA regulations other than Part 11. Examples include the cGMP regulations for finished pharmaceuticals in 21 CFR Part 211, device quality system requirements, and the rules governing clinical investigations. Each one says what must be created, retained or signed. [FDA's guidance on Part 11 scope and application](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application) states that Part 11 applies to required records kept electronically in place of paper, and to electronic records submitted to FDA under those predicate rules.

That sequence matters. Part 11 is not a free-standing rulebook that covers every file on a server. It sets the criteria under which FDA accepts electronic records and signatures as equivalent to paper and handwritten signatures, and it bites only where a predicate rule requires the record in the first place.

![How predicate rules determine Part 11 scope](https://media.babylovegrowth.ai/blog-images/organization-48457/1793721845431_How-predicate-rules-determine-Part-11-scope.jpeg)

Regulatory status always follows the requirement and intended use, not the label on the product or the system. The way [FDA and RUO materials](https://shopwithcaileys.com/fda-approval-does-not-apply-ruo-material) are treated is a useful reminder that the same substance can sit in or outside a regulated pathway depending on what it is for. Records work the same way: the same spreadsheet may be a required batch record in one workflow and an informal scratch file in another.

### The hierarchy in one view

| Layer | Question it answers | Typical source |
|---|---|---|
| Predicate rule | What record must exist, and for how long? | 21 CFR Parts 210/211, 820, 58, 312 and similar |
| Part 11 / Annex 11 | How must the electronic record and signature behave? | 21 CFR Part 11, EudraLex Annex 11 |
| Data integrity (ALCOA+) | What qualities must the record have? | Attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, available |
| Validation | Can you show the system does this reliably? | URS, risk assessment, IQ/OQ/PQ, traceability |

A map is simply this table filled in for your own operation, record by record.

## Why mapping matters before you validate anything

Without a map, teams tend to fail in one of two directions. Some apply full Part 11 controls to every system, which inflates validation effort and slows every change. Others miss a system that quietly holds a required record, and the gap surfaces as an inspection observation.

FDA's guidance describes a narrow interpretation of Part 11 scope and tells organizations to decide, based on predicate rules, whether each specific record is a Part 11 record. That includes records maintained electronically in place of paper and records kept alongside paper but relied on to perform regulated activities. It also recommends documenting the decision. The same document says a risk assessment should justify the validation approach and consider the system's potential to affect product quality, safety and record integrity, and that a system not explicitly required to be validated by a predicate rule may still need validation for these reasons.

The practical consequence: the scope decision is yours to make and defend. The map is where that decision lives.

Two cautions on scope creep. A peer-reviewed article on the role of predicate regulations in Part 11 [notes that internal policies and user behavior](https://link.springer.com/article/10.1177/009286150303700205?code=f79fd416-5d3e-40b8-a790-6263182fe64a&error=cookies_not_supported), such as routinely using general-purpose email to carry regulated information, can expand the scope of Part 11 for your organization. And for clinical work, FDA's [guidance on electronic systems, records and signatures in clinical investigations](https://www.fda.gov/media/166215/download) states that sponsors remain responsible for the quality and integrity of the data they submit, even when data originate in external systems such as electronic health records that FDA does not assess for Part 11 compliance.

![Why mapping matters before you validate anything](https://media.babylovegrowth.ai/blog-images/organization-48457/1793721814204_Why-mapping-matters-before-you-validate-anything.jpeg)

## A step-by-step method for predicate rules mapping

### 1. Build the inventory of required records

Start from the regulations, not the systems. Walk through the parts of the CFR that apply to your product type and list each requirement to create, review, approve, sign or retain a record. For a drug manufacturer this typically means going through Part 211 subparts (equipment, production and process controls, laboratory controls, records and reports). Equipment rules are a good example: [21 CFR 211.68](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-D/section-211.68) covers automatic, mechanical and electronic equipment, including computers, and ties their use to routine calibration, inspection or checking under a written program.

Capture each citation exactly. "Batch records" is not a row. The specific section is.

### 2. Locate every place each record lives

For each record, name the system of record and any system where it is created, transformed or copied. Include the unglamorous ones: laboratory instruments with local software, CMMS, document management, LIMS, MES, ERP, spreadsheets, and the shared drive that holds exported PDFs. Records often hop between three or four systems before filing.

### 3. Decide Part 11 applicability, and write the reason

For each record and system pair, apply the test FDA gives: is the record required by a predicate rule, and is it maintained electronically in place of paper or relied upon in place of or alongside it for regulated activity? Record "in scope" or "out of scope", the reasoning, the approver and the date. This is the line an inspector will read first.

### 4. Assign controls from Part 11 Subpart B

For in-scope records, list the control expectations. The [Subpart B electronic records provisions](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11/subpart-B) require, among others:

- Secure, computer-generated, time-stamped audit trails that record operator actions creating, modifying or deleting electronic records.
- Retention of audit-trail documentation for at least as long as the associated records, and availability for agency review and copying.
- For open systems, the closed-system controls plus additional measures such as encryption and appropriate digital signature standards.

Signature requirements follow in Subpart C; our guide to [U.S. electronic signature requirements](https://blog.qualitum.ai/electronic-signature-requirements) covers that side in detail.

### 5. Link validation evidence

Each control needs a pointer to proof: the requirement in the URS, the risk assessment entry, and the executed test (IQ, OQ or PQ) that demonstrates it. If you are moving to a risk-based approach, see our practical guide to [risk-based validation](https://blog.qualitum.ai/risk-based-validation) and the walk-through of [CSV risk assessment under CSA and ICH Q9(R1)](https://blog.qualitum.ai/csv-risk-assessment) for how to size the testing to the risk.

### 6. Set retention and availability

The retention period belongs to the predicate rule, not to Part 11. Part 11 expects that those records remain available and retrievable for that whole period. The FDA guidance cites predicate provisions such as §§ 211.180(c) and (d) when discussing record retention and availability, so record the period beside the exact citation and confirm it against the current regulation text. Then confirm the system can actually deliver it: format migrations, archive retrieval and audit-trail availability all count.

## A mapping template you can adapt

A spreadsheet is enough to start. These columns carry most of the value:

| Predicate citation | Required record | System(s) | Part 11 in scope? | Rationale and approver | Key controls | Validation evidence | Retention |
|---|---|---|---|---|---|---|---|
| 21 CFR 211.68 | Computer and equipment checks | CMMS, calibration software | Yes, if electronic records replace paper | Scope memo, QA approval | Audit trail, access control, e-signature | URS ref., risk assessment, OQ report | Per predicate rule |
| Your citation | Your record | Your system | Decision | Reason | Controls | Evidence ID | Period |

The first row is an illustration of the structure, not a ruling on your own records. Each decision depends on how you use the record.

For maintenance and calibration systems specifically, the logic of this map carries straight into [risk-based CMMS validation](https://blog.qualitum.ai/cmms-validation).

## Common mapping mistakes

- **Mapping systems instead of records.** A system-first inventory hides which rules drive which controls.
- **Treating "hybrid" as "paper".** If the electronic copy is what people actually use to perform the regulated activity, the scope question is open and needs a documented answer.
- **No owner.** Maps without a named business owner go stale within a release cycle.
- **Decisions without reasons.** "Out of scope" with no rationale invites the question rather than closing it.
- **Stopping at controls.** An inspector wants to follow a line from the rule to the record to the evidence. If the line breaks, so does the story.
- **Ignoring data integrity.** Part 11 controls do not by themselves make a record attributable, contemporaneous or complete. Our [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) and [ALCOA+ examples](https://blog.qualitum.ai/alcoa-examples) show what those properties look like in practice.

## Keeping the map inspection-ready

The map is a living document, and that is where most programs stumble. Four habits keep it defensible:

1. **Tie it to change control.** Any new system, new use of an existing system, or new record type triggers a map update before go-live.
2. **Version and approve it.** Every revision is dated, reviewed and signed by QA. When the inspector asks how you decided in 2025, you can show the version in force then.
3. **Review on a schedule.** Reconcile against regulation updates, new guidance and internal process changes at a fixed interval set in your SOP.
4. **Rehearse retrieval.** Pick a record at random and trace it from predicate citation to executed test evidence. If it takes more than a few minutes, the structure needs work.

For the broader readiness checklist, see our [Part 11 compliance checklist for QA teams](https://blog.qualitum.ai/part-11-compliance).

## Perspective: the map should be a live artifact, not a project

> We see the same pattern across validation teams. The predicate rules map gets built for an audit, lives in a spreadsheet, and drifts from reality within a quarter. The result is the familiar fire drill before an audit: people reconstructing why a system was in scope, where its evidence sits and who approved it.
>
> Our view is that mapping belongs inside the validation lifecycle, not beside it. When requirements, risk assessments, protocols and executed evidence are authored and linked in one place, the rule-to-evidence line is a by-product of the work instead of a separate documentation tax. That is how we designed Qualitum: agent-authored URS, FS, IQ/OQ/PQ and risk documents, a live traceability matrix that flags changes, and every record ALCOA+ checked at write-time and review-time. Human signatures stay authoritative. The agents draft and check; your people decide and sign.
>
> We also think deployment matters for regulated evidence. Qualitum runs as a validated private deployment inside the customer's infrastructure, designed for zero data egress, so the evidence base that supports your scope decisions never leaves your control.
>
> *Matt*

## How Qualitum supports predicate-rule traceability

If your map currently lives in spreadsheets, the manual part is the cost: authoring requirements, linking them to tests and keeping the links true as systems change. Qualitum's Validate·AI and Operate·AI cover agent-authored validation lifecycle documents and ongoing traceability, with integrations to major quality management systems. Our [AI Trace Agent](https://qualitum.ai/agents/trace) maintains a live trace graph that flags every change, and the [AI Gap Agent](https://qualitum.ai/agents/gap) looks for gaps before an auditor does. Teams that adopt the platform have reported over 70% time savings in authoring.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

You can start with a paid pilot on one system, then expand. See the [Qualitum platform](https://qualitum.ai/platform) or [contact us about a pilot](https://qualitum.ai). Pricing is based on the number of agentic systems activated, with no per-seat fees.

## FAQ

### Is predicate rules mapping required by FDA?

No regulation uses the phrase or prescribes a template. What FDA's Part 11 guidance does is recommend that you decide, based on predicate rules, whether records are subject to Part 11 and document that decision. A predicate rules map is the most practical way to do that consistently.

### Does every computer system need Part 11 controls?

Not automatically. Part 11 applies to required records kept electronically in place of paper, or relied on alongside paper for regulated activities. A system that holds no such records may fall outside its scope, though a risk assessment may still call for validation to protect product quality, safety and record integrity.

### Who owns the predicate rules map?

Quality assurance typically approves it, but each record needs a business owner who knows how it is created and used. Validation, IT and the process owners contribute. Name the owner in the map and in your SOP.

### How often should the map be updated?

Update it whenever a system, a record type or the way a record is used changes, through change control. Add a scheduled periodic review in your SOP to catch regulation or guidance changes and quiet process drift.

### How is a predicate rules map different from compliance mapping in general?

General compliance mapping links regulations to business activities at a broad level. A predicate rules map is narrower and more granular: it is anchored to specific CFR citations, specific records and specific validated systems, and it supports a Part 11 scope decision.

## Sources

- [Part 11, Electronic Records; Electronic Signatures: Scope and Application (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application)
- [21 CFR Part 11 Subpart B, Electronic Records (eCFR)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11/subpart-B)
- [21 CFR 211.68, Automatic, mechanical, and electronic equipment (eCFR)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-D/section-211.68)
- [Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations (FDA, 2024)](https://www.fda.gov/media/166215/download)
- [21 CFR Part 11: The Role of Predicate Regulations and Related Considerations (Springer)](https://link.springer.com/article/10.1177/009286150303700205?code=f79fd416-5d3e-40b8-a790-6263182fe64a&error=cookies_not_supported)

## Recommended

- [Cross Jurisdiction Validation Mapping: Build Defensible RTMs in Weeks](https://blog.qualitum.ai/cross-jurisdiction-validation-mapping)
- [Risk-Based Validation: A Practical Guide for QA Leads](https://blog.qualitum.ai/risk-based-validation)
- [Review Workflow Design for Validation Documents](https://blog.qualitum.ai/review-workflow-design)
- [One Test Per Requirement: Functional Spec Validation for Regulated CSV](https://blog.qualitum.ai/functional-specification-validation)

## FAQ
### Is predicate rules mapping required by FDA?
No regulation uses the phrase or prescribes a template. What FDA's Part 11 guidance does is recommend that you decide, based on predicate rules, whether records are subject to Part 11 and document that decision. A predicate rules map is the most practical way to do that consistently.

### Does every computer system need Part 11 controls?
Not automatically. Part 11 applies to required records kept electronically in place of paper, or relied on alongside paper for regulated activities. A system that holds no such records may fall outside its scope, though a risk assessment may still call for validation to protect product quality, safety and record integrity.

### Who owns the predicate rules map?
Quality assurance typically approves it, but each record needs a business owner who knows how it is created and used. Validation, IT and the process owners contribute. Name the owner in the map and in your SOP.

### How often should the map be updated?
Update it whenever a system, a record type or the way a record is used changes, through change control. Add a scheduled periodic review in your SOP to catch regulation or guidance changes and quiet process drift.

### How is a predicate rules map different from compliance mapping in general?
General compliance mapping links regulations to business activities at a broad level. A predicate rules map is narrower and more granular: it is anchored to specific CFR citations, specific records and specific validated systems, and it supports a Part 11 scope decision.
