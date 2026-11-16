---
title: Data Integrity Gaps in GxP: How to Find, Rank and Close Them
date: 2026-11-16
description: What data integrity gaps look like in GxP records, how to map and rank them, and how to close them with CAPA and write-time ALCOA+ checks that hold up.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1794655865142_Quality-specialist-reviewing-a-pharmaceutical-filling-line.jpeg
coverAlt: Quality specialist reviewing a pharmaceutical filling line
---

A data integrity gap is any place where a GxP record cannot be shown to be attributable, complete, original or traceable across its life cycle. Most gaps are found the hard way: in an inspection, or in the fire drill before one. The faster route is to map where data is created, test each point against ALCOA+, rank what you find by risk, and move the check from review time to write time, so a record is tested as it is created. That last step is what our platform is built around: every record is ALCOA+ checked at write-time and review-time, and human signatures remain authoritative.

This guide is for validation, QA and quality systems leaders who need a practical method, not a definition. It covers what gaps look like, how to find them, how to rank them, and how to close them in a way an inspector will accept.

## TL;DR

- A gap is a failure of a control, not just a missing record: a poorly managed computerized system, an undefined procedure, an unreviewed original record or an audit trail nobody reads.
- Find gaps by mapping data flows and testing each step against ALCOA+, as WHO's data integrity risk assessment approach describes.
- Rank gaps by data criticality and impact on quality decisions, then apply short-term risk reduction while long-term fixes proceed.
- Close gaps with root-cause CAPA, and verify with trending and audit trail review. A one-off assessment is not enough.
- Checking records as they are written removes the largest category of recurring gaps before review ever sees them.

## Table of Contents

- [What a data integrity gap actually is](#what-a-data-integrity-gap-actually-is)
- [Where gaps usually come from](#where-gaps-usually-come-from)
- [The yardstick: ALCOA+ and ALCOA++](#the-yardstick-alcoa-and-alcoa)
- [How to find gaps: map the data, then test each step](#how-to-find-gaps-map-the-data-then-test-each-step)
- [How to rank gaps so the worst get fixed first](#how-to-rank-gaps-so-the-worst-get-fixed-first)
- [Closing gaps: CAPA that survives scrutiny](#closing-gaps-capa-that-survives-scrutiny)
- [Verifying that a gap stays closed](#verifying-that-a-gap-stays-closed)
- [Making assessment and remediation faster](#making-assessment-and-remediation-faster)
- [Where Qualitum fits](#where-qualitum-fits)
- [FAQ](#faq)
- [Sources](#sources)

## What a data integrity gap actually is

The UK MHRA defines data integrity as the degree to which data are [complete, consistent, accurate, trustworthy and reliable](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf), with those characteristics maintained throughout the data life cycle. A gap is the distance between that standard and what a specific process, system or record delivers.

Two points keep the term useful:

1. **A gap is about a control.** A single wrong entry is an error. A gap is the missing or weak control that allowed it and would allow the next one: no automatic time stamp, a shared login, a blank form issued without control, a review that checks the printout but not the audit trail.
2. **Integrity is not the same as quality.** The OECD's 2021 GLP guidance separates the two: [integrity controls determine whether data can be trusted](https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/09/glp-data-integrity_c2f067ec/45779212-en.pdf), while data quality concerns whether data were generated to the applicable standards and fit their intended purpose. Integrity controls do not guarantee quality, so a clean audit trail does not close a method problem, and a good result does not excuse a missing audit trail.

That distinction matters when you scope an assessment. You are testing whether records can be trusted, not whether the science was sound.

## Where gaps usually come from

WHO's guideline on data integrity (TRS 1033, Annex 4) reports increasing inspection observations on data, documentation and record management and lists the [likely causes](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf):

- inadequate human practices
- poorly defined procedures
- resource constraints
- computerized systems that cannot meet requirements, or are poorly managed and validated
- inadequate control of data flow
- failure to review and manage original records

None of these is exotic. They are the ordinary result of a validation or quality team stretched across too many systems, with documentation done after the fact. Here is how those causes appear in daily work, by function.

| Area | Typical gap | Principle it breaks |
|---|---|---|
| Laboratory | Instrument or CDS audit trail enabled but never reviewed with the results | Complete, Traceable |
| Manufacturing | Handwritten log completed at end of shift from memory | Contemporaneous, Accurate |
| Computerized systems | Shared accounts, or admin rights held by the data owner | Attributable |
| Validation | Executed test evidence as screenshots with no date, user or system identity | Original, Attributable |
| Clinical | Data corrections without a reason, or audit trail not accessible to monitors | Traceable, Available |
| Quality systems | Uncontrolled blank forms and unreconciled paper-to-electronic transcription | Original, Consistent |

If your team produces screenshot evidence, our note on [ALCOA+ checks every screenshot evidence policy must enforce](https://blog.qualitum.ai/screenshot-evidence-policy) lists what each capture needs to carry. For worked cases by principle, see [ALCOA+ examples](https://blog.qualitum.ai/alcoa-examples).

## The yardstick: ALCOA+ and ALCOA++

You cannot find gaps without a precise standard. WHO states that GxP data and records should be [attributable, legible, contemporaneous and original, and also accurate, complete, consistent, enduring and available](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf), commonly called ALCOA+. The MHRA adds that there is [no difference in expectations](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf) between ALCOA and ALCOA+, because governance should assure all of these attributes across the life cycle.

The EMA's 2023 guideline on computerised systems and electronic data in clinical trials goes to ALCOA++, adding traceable. It requires that [any change to data or metadata be traceable](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf), not obscure the original, be explained where necessary and be documented in metadata such as the audit trail. It also asks that date and time be captured automatically and linked to an external standard. It treats a loss of integrity before the retention period ends as equivalent to data loss or destruction.

The OECD guidance adds two testable requirements: data must be [identified at the time of recording](https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/09/glp-data-integrity_c2f067ec/45779212-en.pdf) by the people responsible, and computerised systems must always retain a full audit trail showing all changes without hiding the original, each tied to a person and date, with reasons given.

For a plain-language breakdown of each letter, see [what each ALCOA+ principle requires in practice](https://blog.qualitum.ai/alcoa-compliance).

![The yardstick: ALCOA+ and ALCOA++](https://media.babylovegrowth.ai/blog-images/organization-48457/1794655941048_The-yardstick-ALCOA-and-ALCOA-.jpeg)

## How to find gaps: map the data, then test each step

WHO defines a data integrity risk assessment (DIRA) as the process of [mapping out the procedures, systems and other components that generate or obtain data](https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf?download=true), identifying and assessing the risks, and implementing controls. It recommends documented data flows and data process maps, coverage of the full data life cycle, and attention to GxP computerized systems, personnel, training, quality systems and outsourced activities. A practical sequence:

![Six steps for assessing GxP data integrity gaps](https://media.babylovegrowth.ai/blog-images/organization-48457/1794655920948_Six-steps-for-assessing-GxP-data-integrity-gaps.jpeg)

### 1. Pick a bounded process

Start with one process whose data drives a quality decision: a release test, a batch record, a qualification protocol, a trial endpoint. Whole-site assessments stall. A single process finishes in weeks and shows you the pattern.

### 2. Draw the data flow

Follow one data point from creation to retention: who or what creates it, where it is stored, how it moves, who reviews it, how it is archived. Include the manual hops, such as a transcription from an instrument display or a copy from a spreadsheet. These hops are where original data is most often lost.

### 3. Test every step against ALCOA+

At each step ask the nine questions the principles imply. Who made this entry, and can the system prove it? Was it recorded when the action happened? Is the original preserved, and is the copy certified? Can a change be seen with the old value, the new value, who, when and why? Is it still readable and retrievable at the end of retention?

### 4. Include the computerized system itself

WHO lists computerized systems that are poorly managed or validated as a root cause, so the validation status, access control, audit trail configuration and periodic review of each system in the map belong in the assessment. Our guides on [static vs dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) and on [audit trails regulators expect](https://blog.qualitum.ai/alcoa-audit-trails) cover what to check.

### 5. Check the people and the procedure

A technically sound system still fails when procedures are vague or reviewers are overloaded. Ask who reviews the audit trail, how often, with what training and how much time. A reviewer asked to check 200 records an hour is a gap, even with perfect software.

### 6. Look at partners and suppliers

Outsourced testing, contract manufacturing and supplier records sit inside the scope. Traceable, lot-specific records are the standard: for instance, [lot-specific COA verification](https://shopwithcaileys.com/peppy-and-me-coa-standards-testing) shows how a certificate can be tied to the exact lot it describes, the same linkage principle you should expect from any supplier record you rely on.

## How to rank gaps so the worst get fixed first

A mapping exercise produces a long list. Treating every item equally burns the remediation budget on low-impact fixes. WHO says DIRAs should be risk-based, cover the life cycle and consider [data criticality](https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf?download=true), meaning how much the data influence quality decisions and product quality or safety. It also calls for documented and communicated prioritization of remedial actions, including residual risk, and short-term risk-reducing measures while long-term actions proceed.

A simple scoring approach that follows that logic:

| Factor | Question | Higher score when |
|---|---|---|
| Data criticality | Does this record support release, a submission or patient safety? | It is a release or endpoint record |
| Detectability | Would the gap be caught by normal review? | It is invisible without an audit trail review |
| Recurrence | Has it happened before, or does the process repeat it daily? | It is built into the routine |
| Reach | How many systems, products or sites share the control? | The weak control is shared |
| Feasibility | Can it be fixed fast? | Quick wins exist (these go first as interim measures) |

Score on the first four, then use feasibility to decide sequencing. A critical, hard-to-detect, recurring gap with a slow permanent fix gets an interim control now, such as a second-person audit trail review, and a scheduled system change later. Record the interim measure, the owner and the date it will be reviewed.

Risk review is not a one-off. WHO frames it as an activity [performed throughout the life cycle](https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf?download=true) at a frequency based on risk, with residual risks and controls communicated. Treat the gap register as a living document.

## Closing gaps: CAPA that survives scrutiny

When a gap has already produced a failure, the expectations are explicit. FDA's CDER recommends a comprehensive evaluation of the [immediate scope, how and why the breach occurred, related products and previous instances](https://www.fda.gov/media/165540/download). It also expects a risk assessment of drug product and application quality using ICH Q9, and CAPA based on root-cause analysis covering organizational roles, QMS improvement, culture and retraining.

The cost of a thin response is visible in a February 2025 FDA warning letter to a South African manufacturer, following a September 2024 inspection under 21 CFR 211.68(a). As [reported by a GMP news service](https://www.gmp-compliance.org/gmp-news/fda-warning-letter-on-missing-audit-trails-and-raw-data-review), the response was judged inadequate because it lacked investigation outcome details, effective CAPA statements and the scope and time period of retrospective batch reviews. FDA asked for a comprehensive investigation of the extent of the inaccuracies, a current risk assessment of the effect on drug quality and a global CAPA plan.

The lesson for your own CAPA file is practical. Each corrective action should state:

- the gap and the records it affects, with the review period
- the confirmed root cause, not the symptom
- the owner, the due date and the interim control
- the evidence that will prove the fix worked

Culture is part of the root cause. The EMA guideline says data governance should create an environment that [encourages reporting of omissions and erroneous results](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf) and should assign data ownership through the life cycle. FDA likewise lists culture and retraining within CAPA. A gap register that people are afraid to add to will always look cleaner than reality.

## Verifying that a gap stays closed

Closing the CAPA is not the same as closing the gap. WHO expects management to evaluate control effectiveness through [tracking and trending of data, review of data, metadata and audit trails](https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf?download=true), and through routine audits or self-inspections that include data integrity and computerized systems. It also says acquiring non-compliant computerized systems should be avoided.

Set effectiveness checks that can actually fail: a sample of records from the 90 days after the fix, an audit trail review against the original gap pattern, and a trend of related deviations. If the same pattern reappears, the root cause was wrong.

## Making assessment and remediation faster

The slow part of most programs is not finding gaps, it is the manual evidence work around them: assembling records, rewriting protocols, reconciling review comments. Regulators have signaled that effort should follow risk. The FDA's 2025 computer software assurance guidance recommends a risk-based approach in which assurance activities are commensurate with process risk, including data integrity, storage and transfer, rather than uniform full validation of every software feature. The EMA guideline likewise expects audit trails visible at data-point level in the live system and exportable, so systematic patterns across participants and sites can be reviewed quickly.

Two practical moves follow:

1. **Test at write time.** A record that fails an attribution or time stamp check when it is created never becomes a review finding. See [write-time ALCOA+ audit fields](https://blog.qualitum.ai/write-time-alcoa) and [checking records as they are written](https://blog.qualitum.ai/real-time-data-integrity).
2. **Keep the register connected to the systems.** A spreadsheet of gaps goes stale. A register linked to traceability and deviation records stays current. Our [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) and [30, 90 and 180 day document control plan](https://blog.qualitum.ai/gxp-document-control) show how to stage the work.

> ## Our perspective
>
> We see data integrity gaps as a timing problem more than a knowledge problem. Teams know ALCOA+. What they lack is the time to apply it to every record, so the check lands at review, days or weeks after the record was written, when fixing it means a deviation.
>
> That is why we built Qualitum so that every record is ALCOA+ checked at write-time and again at review-time. Human signatures remain authoritative: the platform prepares, checks and traces the evidence, and your qualified people decide. Agents author validation documents, a live traceability matrix keeps requirements, tests and evidence connected, and deviation and CAPA handling sit in the same record trail.
>
> We deploy privately within the customer's infrastructure, with zero data egress, customer-managed encryption and no dependence on one language model. Our claim is that, for authoring, teams save over 70% of the time. The point of that saving is not speed for its own sake. It is the hours your experts get back for the risk decisions in this article: ranking, root cause and effectiveness checks.
>
> The audit you want is the one where every question has an answer already sitting in the record.
>
> *Matt*

## Where Qualitum fits

If your assessment produces a gap register and a validation backlog, the next problem is closing both without adding headcount. Our [AI Gap Agent](https://qualitum.ai/agents/gap) is built to find gaps before the auditor does, and the [Validate·AI and Operate·AI platform](https://qualitum.ai/platform) covers the validation lifecycle, from URS through IQ, OQ and PQ, with a live traceability matrix, audit preparedness and integrations with major quality management systems. We start with a paid [pilot](https://qualitum.ai) so you can see it on one of your own processes. For how data stays inside your environment, see our [privacy and security](https://qualitum.ai/security) page.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Contracts are based on the number of agentic systems activated, not on seats, so coverage can grow with your validation scope.

## FAQ

### What is a data integrity gap?

It is a weakness in a control that lets a GxP record fall short of being attributable, complete, original, accurate or traceable across its life cycle. Examples include an audit trail that exists but is never reviewed, shared logins, and handwritten entries made after the event. It is the control that is missing, not only the bad entry.

### What are the principles of data integrity?

GxP data should be attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring and available, known as ALCOA+. The EMA's clinical trial guideline adds traceable, giving ALCOA++. Regulators such as the MHRA state that the expectations are the same across these terms.

### How do you prioritize data integrity gaps?

Start with data criticality: how much the record influences quality decisions and product safety. Then weigh detectability, recurrence and how many systems share the weak control. Apply interim risk-reducing measures to high-priority gaps while permanent fixes are built, and document the prioritization.

### How often should a data integrity risk assessment be repeated?

WHO describes risk review as a life cycle activity performed at a frequency based on the level of risk. Higher-criticality processes and systems warrant more frequent review, and any change to a system, process or supplier should trigger a fresh look.

## Sources

- [WHO TRS 1033, Annex 4: Guideline on data integrity](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)
- [WHO TRS 1033, Annex 4 (CDN copy)](https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf?download=true)
- [MHRA GxP data integrity guidance, March 2018](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)
- [OECD GLP data integrity guidance, 2021](https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/09/glp-data-integrity_c2f067ec/45779212-en.pdf)
- [EMA guideline on computerised systems and electronic data in clinical trials, 2023](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf)
- [FDA CDER: Role of Data Integrity in Drug Applications, 2022](https://www.fda.gov/media/165540/download)
- [FDA warning letter on missing audit trails and raw data review](https://www.gmp-compliance.org/gmp-news/fda-warning-letter-on-missing-audit-trails-and-raw-data-review)
- [Lot-specific COA verification](https://shopwithcaileys.com/peppy-and-me-coa-standards-testing)

## Recommended

- [Data Integrity by Design: A Pharma QA Playbook](https://blog.qualitum.ai/data-integrity-by-design)
- [Real-Time Data Integrity in GxP: Check Records as They Are Written](https://blog.qualitum.ai/real-time-data-integrity)
- [Data Integrity Compliance for Pharma: A Practical Playbook](https://blog.qualitum.ai/data-integrity-compliance)
- [Pharma QA: Close Deviation and CAPA Evidence Gaps with Automation](https://blog.qualitum.ai/deviation-and-capa)

## FAQ
### What is a data integrity gap?
It is a weakness in a control that lets a GxP record fall short of being attributable, complete, original, accurate or traceable across its life cycle. Examples include an audit trail that exists but is never reviewed, shared logins, and handwritten entries made after the event. It is the control that is missing, not only the bad entry.

### What are the principles of data integrity?
GxP data should be attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring and available, known as ALCOA+. The EMA's clinical trial guideline adds traceable, giving ALCOA++. Regulators such as the MHRA state that the expectations are the same across these terms.

### How do you prioritize data integrity gaps?
Start with data criticality: how much the record influences quality decisions and product safety. Then weigh detectability, recurrence and how many systems share the weak control. Apply interim risk-reducing measures to high-priority gaps while permanent fixes are built, and document the prioritization.

### How often should a data integrity risk assessment be repeated?
WHO describes risk review as a life cycle activity performed at a frequency based on the level of risk. Higher-criticality processes and systems warrant more frequent review, and any change to a system, process or supplier should trigger a fresh look.
