---
title: ALCOA+ Audit Trails: What Regulators Expect and How to Build Them
date: 2026-10-24
description: How ALCOA+ shapes GxP audit trails: what to capture, how to review by risk, where legacy systems fail, and what inspectors in the US, EU and UK expect.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1792672733775_Control-terminal-beside-a-pharmaceutical-tablet-press.jpeg
coverAlt: Control terminal beside a pharmaceutical tablet press
---

An ALCOA+ audit trail is a secure, time-stamped record of who created, changed or deleted a GxP record, when, and why. It keeps the original and new values, and it is readable by a human next to the data it protects. If your audit trail can't show that, the record it supports is hard to defend in an inspection.

This guide covers what the ALCOA+ attributes mean for audit trails, what FDA, EMA and MHRA expect, how to scope review so it stays workable, and where validation teams most often slip.

## TL;DR

- An audit trail is part of the record, not a separate log. If it can't be read or exported with the data, the record's validity is open to challenge.
- A useful entry answers who, what, when and why, and shows the previous and current values.
- Review is risk-based: focus on creation, modification and deletion of GxP data, not on every log-on or keystroke.
- Audit trails that exist but are never reviewed count for little in an inspection.
- Automation helps most when records are checked at write time and review time, while qualified people keep the final signature.

## Table of Contents

- [How ALCOA+ and audit trails fit together](#how-alcoa-and-audit-trails-fit-together)
- [What regulators define as an audit trail](#what-regulators-define-as-an-audit-trail)
- [Field-level, protected and human-readable](#field-level-protected-and-human-readable)
- [Review: where audit trails succeed or fail](#review-where-audit-trails-succeed-or-fail)
- [Legacy systems without a compliant audit trail](#legacy-systems-without-a-compliant-audit-trail)
- [Where validation teams get caught](#where-validation-teams-get-caught)
- [Perspective: check at write time, not just at review time](#perspective-check-at-write-time-not-just-at-review-time)
- [What to look for in a system's audit trail](#what-to-look-for-in-a-systems-audit-trail)
- [Putting this into practice with Qualitum](#putting-this-into-practice-with-qualitum)
- [FAQ](#faq)
- [Sources](#sources)

## How ALCOA+ and audit trails fit together

ALCOA stands for Attributable, Legible, Contemporaneous, Original and Accurate. The "plus" adds Complete, Consistent, Enduring and Available. The [MHRA GxP data integrity guidance](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf) uses exactly this split, and the [EU's Annex 11](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en) gives the plus attributes explicit weight for computerised systems.

The audit trail is how you prove those attributes after the fact. Most of the nine map to something you can check in a trail:

| Attribute | What the audit trail has to show |
|---|---|
| Attributable | A unique user identity on every entry, change and deletion |
| Legible | Entries a reviewer can read without special tools or decoding |
| Contemporaneous | A system-generated time stamp at the moment of the action |
| Original | The first value retained, with changes layered on top rather than overwriting it |
| Accurate | Previous and current values, plus a reason when data changed |
| Complete | No gaps: creation, modification and deletion are all captured |
| Consistent | A chronological sequence that agrees across systems and records |
| Enduring | Retention for the full record retention period |
| Available | Access for review and inspection, and export in a readable form |

Notice what this table implies. Audit trails are less a feature than a test of whether the other eight attributes can be demonstrated. For worked examples of each attribute, see our [ALCOA+ examples for pharma teams](https://blog.qualitum.ai/alcoa-examples).

## What regulators define as an audit trail

The FDA's guidance on computerized systems in clinical trials [defines an audit trail](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/fda-bioresearch-monitoring-information/guidance-industry-computerized-systems-used-clinical-trials) as a secure, computer-generated, time-stamped electronic record that allows reconstruction of events relating to the creation, modification and deletion of an electronic record. In the US, the underlying rule sits in [21 CFR 11.10(e)](https://www.law.cornell.edu/cfr/text/21/11.10), which calls for secure, computer-generated, time-stamped audit trails that independently record the date and time of operator entries and actions.

The key word is "independently". The trail can't depend on the user remembering to log what they did. It is generated by the system, outside the user's control.

The MHRA guidance reads the same way and expects the who, what, when and why, with previous and current values visible. The "why" matters more than teams expect. A change with no recorded reason is a change nobody can justify later.

### The five fields every entry needs

When you test or procure a system, check that each entry carries these:

1. **Who:** a unique, non-shared user identity.
2. **What:** the specific field or record affected.
3. **When:** a system time stamp that the user can't edit.
4. **Why:** a reason for change, captured at the moment of the change.
5. **Before and after:** the previous value and the new value.

We go deeper on testing these in [write-time ALCOA+ audit fields](https://blog.qualitum.ai/write-time-alcoa) and on procurement criteria in our guide to [GxP audit trail design](https://blog.qualitum.ai/audit-trail-design).

## Field-level, protected and human-readable

Three expectations catch teams that assume "we have an audit trail" is enough.

**Granularity.** The [EMA guideline on computerised systems in clinical trials](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf) expects audit trails at field level, not only page level, so that each data change is traceable on its own. Page-level logging tells you something changed on a form. It doesn't tell you which value.

**Protection.** Standard users must not be able to access, delete or switch off the trail. Where an administrator does amend or disable it, the system should log that administrative action automatically. This closes the loophole where the person with the most access leaves the least evidence.

**Readability.** This is the pitfall we see most often. Teams treat the audit trail as a technical log, separate from the data. In reality it is metadata that belongs to the record. The same EMA guideline expects trails to be stored within the system and to be exportable and readable alongside the data. If the trail is inaccessible or incomprehensible, the associated record can be treated as invalid.

If you want the related question of what a record must preserve beyond its values, our piece on [static versus dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) covers it.

![Field-level, protected and human-readable — overview diagram](https://media.babylovegrowth.ai/blog-images/organization-48457/1792672839023_Field-level-protected-and-human-readable-overview-diagram.jpeg)

## Review: where audit trails succeed or fail

Capturing the trail is half the job. An audit trail nobody reviews is a control on paper only. One practitioner source on GMP examples makes the point bluntly: audit trails that are disabled or never reviewed amount, in an inspection, to no control at all.

### Scope by risk, not by volume

Regulators don't expect you to read every system event. The MHRA and EMA expect the scope and frequency of review to follow a documented risk assessment. In practice that means looking at GxP-relevant activity such as creation, modification and deletion of data, and leaving out administrative noise like log-ons.

A simple way to set scope:

- List the records whose data drives a product quality or patient safety decision.
- Rank them by how much harm a undetected change could cause.
- Set a review frequency per tier and write it into the SOP.
- Reassess when the system, process or deviation history changes.

### Use exception reporting

The [ACDM guide to audit trail review](https://acdmglobal.org/wp-content/uploads/formidable/47/Getting-started-with-Audit-Trail-Review-in-Clinical-Trial-data-An-Essential-Guide.pdf) describes exception reporting: validated search tools that flag predefined abnormal actions, so reviewers spend time on the high-risk entries instead of scrolling through exhaustive logs. Typical triggers include changes after approval, deletions, repeated edits to the same value, and activity outside normal working patterns.

![Exception triggers route high-risk audit entries for review](https://media.babylovegrowth.ai/blog-images/organization-48457/1792672804048_Exception-triggers-route-high-risk-audit-entries-for-review.jpeg)

The same guide treats audit trail review as part of existing data management and quality risk processes, not a standalone chore. Teams that work this way find audit readiness a steady state rather than the fire drill before an inspection. Our [audit trail review guide for QA teams](https://blog.qualitum.ai/audit-trail-review) turns this into an inspection-ready routine.

## Legacy systems without a compliant audit trail

Many sites still run instruments or applications that can't produce a compliant trail. The MHRA accepts interim controls in that situation, such as detailed SOPs and logbooks. But it expects documented evidence that you are moving toward a validated solution. Relying on a workaround indefinitely is a recognized route to a cited deficiency.

If you carry such a system, do three things now:

1. Document the gap and the risk assessment behind your interim control.
2. Put a dated remediation or replacement plan on record.
3. Review the plan at each periodic review, with an owner named.

The same discipline applies to regulated lab work that feeds GxP records. A guide to [hERG assay requirements for regulators](https://mayflowerbioscience.com/herg-assay-requirements) shows how much assay-level evidence a regulator may want behind a result, and every one of those data points needs a trail of its own.

## Where validation teams get caught

From the guidance above, the same failure patterns repeat:

- **Trails switched off for performance or convenience,** and no one noticed because nobody reviewed configuration.
- **Reason-for-change left optional,** so the "why" is blank on half the entries.
- **Screenshots standing in for dynamic data.** A screenshot can't be queried or re-run. See our [screenshot evidence policy checks](https://blog.qualitum.ai/screenshot-evidence-policy).
- **Review recorded as a signature,** with no evidence of what was actually looked at.
- **Trails that can't be exported,** which fails the availability and readability test during an inspection.
- **Responsibility pushed to the vendor.** Under FDA's [data integrity guidance](https://www.fda.gov/media/119267/download), the regulated company owns the integrity of its data, whatever the technology.

The last point deserves emphasis. A vendor can provide controls. It can't carry your accountability.

## Perspective: check at write time, not just at review time

We build validation tooling for pharma, biotech and medical device teams, and our view is simple: most audit trail problems are discovered too late, when a reviewer or an inspector reads a record that was already wrong when it was written.

That is why every record in our platform is ALCOA+ checked twice, at write time and at review time. A missing reason, an unattributed edit or an overwritten original is flagged when it happens, not months later during a periodic review. It also cuts the manual documentation that makes validation slow. We see the manual evidence burden as a quiet tax on validation teams, and we'd rather it was paid by software than by your engineers' evenings.

We are equally clear about the limit. Agents author and check, but human signatures remain authoritative. The regulated organization owns the decision, and our job is to give qualified people evidence that is traceable and defensible, in a private deployment that keeps your data inside your own infrastructure. For the thinking behind this, read our note on [real-time data integrity in GxP](https://blog.qualitum.ai/real-time-data-integrity).

> *— Matt*

## What to look for in a system's audit trail

Whether you are validating an existing system or evaluating a new one, use this checklist during testing, then keep the results as validation evidence:

| Test | Pass condition |
|---|---|
| Create, edit and delete a GxP record as different users | Each action appears with the correct user, time and values |
| Edit without a reason | The system blocks the change or flags it |
| Attempt to alter or disable the trail as a standard user | Access denied |
| Change the trail configuration as an administrator | The action itself is logged automatically |
| Export the trail with its record | Readable, complete and in sequence |
| Check retention | Trail persists as long as the record |

Our [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) and the [MHRA data integrity guide for US teams](https://blog.qualitum.ai/mhra-data-integrity) help map these tests to each regulator's wording. For wider records hygiene, the [GxP document control plan](https://blog.qualitum.ai/gxp-document-control) sets a 30, 90 and 180 day path.

## Putting this into practice with Qualitum

If your team is spending weeks authoring validation evidence and still worrying about gaps in the trail, our [Validate·AI and Operate·AI platform](https://qualitum.ai/platform/) covers the validation lifecycle, a live traceability matrix and ALCOA+ enforcement. Details on how data stays in your environment are on our [privacy and security page](https://qualitum.ai/security). Most customers start with a paid [pilot](https://qualitum.ai/), scoped to a defined set of systems, so you can judge the results on your own records before a wider rollout.

## FAQ

### What is the difference between ALCOA and ALCOA+ for audit trails?

ALCOA covers Attributable, Legible, Contemporaneous, Original and Accurate. ALCOA+ adds Complete, Consistent, Enduring and Available. For audit trails, the plus attributes mean no gaps in capture, a consistent sequence, retention for the full record life, and access for review and export.

### What must an audit trail record?

It must record who made the change, what changed, when it happened and why, with the previous and current values. It must be secure and generated by the system. Regulators also expect it to be readable and exportable with the record.

### Do we have to review every audit trail entry?

No. The MHRA and EMA expect review scope and frequency to be set by risk assessment. Concentrate on creation, modification and deletion of GxP data, and use exception reporting to flag unusual activity rather than reading every system event.

### What if our legacy system has no audit trail?

You can use interim controls such as SOPs and logbooks, but they are not a permanent answer. Document the risk assessment and keep a dated plan to move to a compliant, validated system. Discuss the plan with your quality unit before an inspector asks for it.

## Sources

- [Annex 11: Computerised Systems (European Commission)](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en)
- [MHRA GxP Data Integrity Guidance and Definitions](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)
- [FDA, Guidance for Industry: Computerized Systems Used in Clinical Trials](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/fda-bioresearch-monitoring-information/guidance-industry-computerized-systems-used-clinical-trials)
- [21 CFR 11.10, Controls for closed systems](https://www.law.cornell.edu/cfr/text/21/11.10)
- [EMA, Guideline on computerised systems and electronic data in clinical trials](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf)
- [ACDM, Getting started with Audit Trail Review in Clinical Trial data](https://acdmglobal.org/wp-content/uploads/formidable/47/Getting-started-with-Audit-Trail-Review-in-Clinical-Trial-data-An-Essential-Guide.pdf)
- [FDA, Data Integrity and Compliance With Drug CGMP guidance](https://www.fda.gov/media/119267/download)

## Recommended

- [ALCOA+ Examples Every Pharma Team Should Know](https://blog.qualitum.ai/alcoa-examples)
- [Audit Trail Management: Four Layer Architecture for Regulated Teams](https://blog.qualitum.ai/audit-trail-management)
- [Pass Inspections: GxP Audit Trail Design for Procurement, 7 Elements](https://blog.qualitum.ai/audit-trail-design)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)

## FAQ
### What is the difference between ALCOA and ALCOA+ for audit trails?
ALCOA covers Attributable, Legible, Contemporaneous, Original and Accurate. ALCOA+ adds Complete, Consistent, Enduring and Available. For audit trails, the plus attributes mean no gaps in capture, a consistent sequence, retention for the full record life, and access for review and export.

### What must an audit trail record?
It must record who made the change, what changed, when it happened and why, with the previous and current values. It must be secure and generated by the system. Regulators also expect it to be readable and exportable with the record.

### Do we have to review every audit trail entry?
No. The MHRA and EMA expect review scope and frequency to be set by risk assessment. Concentrate on creation, modification and deletion of GxP data, and use exception reporting to flag unusual activity rather than reading every system event.

### What if our legacy system has no audit trail?
You can use interim controls such as SOPs and logbooks, but they are not a permanent answer. Document the risk assessment and keep a dated plan to move to a compliant, validated system. Discuss the plan with your quality unit before an inspector asks for it.
