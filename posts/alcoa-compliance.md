---
title: ALCOA+ Compliance: What Each Principle Requires in Practice
date: 2026-11-01
description: ALCOA+ compliance explained for pharma and biotech QA: what each principle means, the controls inspectors check, and how to prove it in validated systems.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1793367186453_Chromatography-system-in-a-pharma-analytical-lab.jpeg
coverAlt: Chromatography system in a pharma analytical lab
---

ALCOA+ compliance means that every GxP record, paper or electronic, is attributable, legible, contemporaneous, original and accurate, and also complete, consistent, enduring and available for as long as the retention period runs. The [WHO data integrity guideline in Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf) describes the acronym in exactly these terms. Meeting it is less about memorizing nine words and more about proving, on the day an inspector asks, that your systems and procedures produce records you can defend.

This guide is written for validation, QA and CSV leads. It covers what each principle requires, how ALCOA+ connects to qualification and computerized system validation, which controls inspectors look at, and where teams most often lose evidence.

## TL;DR

- ALCOA+ has nine attributes: attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring and available.
- It applies to paper and electronic records across the whole data lifecycle, not only to final reports.
- Regulators expect documented data flows, risk-based system validation, unique user access, and regular audit trail review.
- Validation alone does not deliver compliance. Administrative controls and quality oversight have to sit around the validated system.
- The strongest position is to check records when they are written and again when they are reviewed, not weeks later in a pre-audit scramble.

## Table of Contents

- [What ALCOA+ stands for](#what-alcoa-stands-for)
- [What data integrity means in pharma](#what-data-integrity-means-in-pharma)
- [Applying ALCOA+ to paper and electronic records](#applying-alcoa-to-paper-and-electronic-records)
- [How ALCOA+ connects to validation and qualification](#how-alcoa-connects-to-validation-and-qualification)
- [Controls inspectors expect to see](#controls-inspectors-expect-to-see)
- [What failure looks like: FDA findings](#what-failure-looks-like-fda-findings)
- [Where teams lose ALCOA+ evidence](#where-teams-lose-alcoa-evidence)
- [A practical ALCOA+ checklist for validation records](#a-practical-alcoa-checklist-for-validation-records)
- [Perspective](#perspective)
- [How Qualitum supports ALCOA+ in validation](#how-qualitum-supports-alcoa-in-validation)
- [FAQ](#faq)
- [Sources](#sources)

## What ALCOA+ stands for

The original ALCOA acronym has been in use [since the 1990s](https://www.qualifyze.com/resources/blog/what-is-alcoa-data-integrity/) and covers attributable, legible, contemporaneous, original and accurate. The plus extends it with four further expectations: complete, consistent, enduring and available. The [International Society for Pharmaceutical Engineering](https://ispe.org/pharmaceutical-engineering/ispeak/dynamic-data-integrity-why-alcoa-keeps-evolving) describes ALCOA+ as a data integrity benchmark for highly regulated industries.

It helps to see the principles as answers to questions an inspector asks about any single data point.

| Principle | The question it answers | What it looks like in a GxP record |
|---|---|---|
| Attributable | Who did this, and when? | A unique user ID tied to each entry or signature |
| Legible | Can it be read, now and later? | Readable, permanent entries, with no obscured or overwritten values |
| Contemporaneous | Was it recorded at the time of the activity? | System-generated timestamps, not after-the-fact transcription |
| Original | Is this the first capture, or a certified true copy? | Source data or raw data retained, with controlled copies |
| Accurate | Does it reflect what actually happened? | Verified values, with any change explained and traceable |
| Complete | Is anything missing? | All data kept, including repeat and reanalysis results |
| Consistent | Does the sequence make sense? | Ordered, time-stamped events that agree across systems |
| Enduring | Will it last? | Maintained records on suitable media for the full retention period |
| Available | Can it be produced on request? | Retrievable for review and inspection throughout retention |

The descriptions of Complete, Consistent, Enduring and Available follow [PharmTech's overview](https://www.pharmtech.com/view/alcoa-and-data-integrity), which draws on WHO guidance.

### What about ALCOA++?

You will see "ALCOA++" in training decks and slides. It generally refers to a further extension of the same framework, often by adding traceability. There is no separate regulation behind it. The practical point is the same: the regulators' expectations in WHO, PIC/S, MHRA and FDA guidance are what you will be inspected against, so build your procedures to those documents and treat any acronym variant as a teaching aid.

## What data integrity means in pharma

ALCOA+ is the working method. Data integrity is the outcome. The [MHRA GxP data integrity guidance](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA%5FGxP%5Fdata%5Fintegrity%5Fguide%5FMarch%5Fedited%5FFinal.pdf) defines it as the degree to which data are complete, consistent, accurate, trustworthy and reliable, with those characteristics maintained throughout the data lifecycle. Note the last clause. A record that was correct at capture but can be altered silently during storage fails the definition.

For a broader view of building this into a quality system, see our [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) and the piece on [data integrity by design](https://blog.qualitum.ai/data-integrity-by-design).

## Applying ALCOA+ to paper and electronic records

ALCOA+ does not care about the medium. According to WHO Annex 4, it applies to paper and electronic records alike, through secure, permanent and traceable documentation: audit trails for electronic systems, and strictly controlled logbooks for paper, so that data is never obscured. Hybrid setups, where a chromatography system prints a result that is then signed by hand, need both sets of controls, plus a clear link between the two.

![Controls for paper, electronic, and hybrid records](https://media.babylovegrowth.ai/blog-images/organization-48457/1793367226136_Controls-for-paper-electronic-and-hybrid-records.jpeg)

### Start with the data flow

Both WHO and [PIC/S](https://picscheme.org/docview/4234) recommend that companies document data flows and assess data integrity risks across the data processes. In practice, this means a map for each critical process:

1. Where is data generated (instrument, operator, system)?
2. Where is it transferred, transformed or calculated?
3. Where is it stored, and who can change it?
4. Who reviews it, and against what?
5. How is it archived and retrieved?

Every handoff on that map is a place where Attributable, Original or Complete can fail. Risk assessment then decides how much control each handoff deserves.

### Static and dynamic records

A balance printout is static. A chromatographic raw data file you can reprocess is dynamic, and reprocessing changes what "original" and "complete" mean. Dynamic records need the audit trail and the underlying raw data preserved so that the review can reconstruct what was done. We go deeper in [static vs dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) and in our collection of [ALCOA+ examples](https://blog.qualitum.ai/alcoa-examples).

## How ALCOA+ connects to validation and qualification

PIC/S links computerized system validation to data integrity through the requirement to qualify systems for their intended use, through DQ, IQ, OQ and PQ, and to challenge specifically the areas where data integrity risks exist. A test script that confirms a screen opens does not do that. A test that tries to delete a result without a trail, or to sign as another user, does.

Three practical consequences follow for validation teams:

- **Requirements must name the integrity controls.** If the URS does not say that audit trails cannot be disabled by operators, nothing downstream will test it. Our note on [tracing DQ evidence from URS to PQ](https://blog.qualitum.ai/dq-protocol-automation) shows how this thread is kept intact.
- **Test design should follow risk.** Spend effort where data can be lost, altered or misattributed. See [risk-based test design techniques for IQ/OQ/PQ](https://blog.qualitum.ai/test-design-techniques).
- **Know what you are validating.** The difference between the two disciplines is worth getting right, and we explain it in [qualification vs validation](https://blog.qualitum.ai/qualification-vs-validation).

The same PIC/S guidance makes a point that catches teams out: validation alone is not enough. Administrative controls such as unique usernames and defined access permissions are essential for integrity in computerized systems. A perfectly validated system that is run on a shared login is still a data integrity finding.

For system-specific walk-throughs, see our posts on [LIMS validation with ALCOA+ evidence](https://blog.qualitum.ai/lims-validation-pharma) and [risk-based CMMS validation](https://blog.qualitum.ai/cmms-validation).

## Controls inspectors expect to see

PIC/S guidance describes compliance as demonstrated through risk-based system validation, regular audit trail review, unique user access controls and documented procedures for data governance, all assessed during inspections. WHO and PIC/S both frame data governance as a quality system responsibility: management is expected to assess systems for vulnerabilities and ensure data stays reliable across the product lifecycle.

### Audit trails that can be read

WHO defines an audit trail as metadata that lets you reconstruct the history of a record, showing who, what, when and why. Two things follow. The trail has to be reviewed, not merely enabled, and the review has to be part of the record review itself. ISPE's discussion of traceability makes the [same point about a robust trail](https://ispe.org/pharmaceutical-engineering/ispeak/dynamic-data-integrity-why-alcoa-keeps-evolving) covering reviews, storage and revisions of documents.

### Access control and change control

Unique credentials, role-based permissions and a clear separation between those who generate data and those who administer the system are the baseline. Without them, Attributable collapses first and the rest follow.

### Quality unit oversight

Policies on paper are not enough if nobody checks that they are followed.

## What failure looks like: FDA findings

Public FDA letters show how these principles fail in reality, and they are worth reading as case studies.

- In a December 2022 warning letter, FDA found that [Nortec Quimica](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/nortec-quimica-sa-639894-12082022) lacked sufficient controls over computerized systems to prevent unauthorized access or changes to data, and omissions of data. That is a direct hit on Attributable, Accurate and Complete.
- In a 2025 compliance document, FDA inspectors reported [torn GMP documents at Micro Labs Limited](https://www.fda.gov/media/191689/download), including original records and raw data, alongside a lack of Quality Unit oversight. That touches Original, Enduring and Available, and shows why oversight matters as much as technology.

Neither case needed a sophisticated attack. Each was a basic control that did not exist or did not work.

One adjacent point for laboratories: if your records cover research-use-only materials, the regulatory status of those materials affects what the lot documentation must show. Reading about [how FDA treats RUO products](https://shopwithcaileys.com/fda-approval-does-not-apply-ruo-material) helps teams record that status accurately.

## Where teams lose ALCOA+ evidence

The common failures are less dramatic than falsification. They are the quiet tax of manual documentation:

- **Transcription.** Results retyped from instrument to protocol break Original and invite errors in Accurate.
- **Late documentation.** Protocols completed at the end of a shift, or screenshots collected before an audit, undermine Contemporaneous.
- **Disconnected systems.** URS in one tool, tests in another, deviations in a third. Consistent and Complete suffer because nobody can see the whole chain.
- **Review as a formality.** Reviewers skim for signatures and miss a missing attachment or an unexplained edit.
- **Retention gaps.** Records exist but cannot be retrieved in readable form years later, a failure of Enduring and Available.

Each of these is a process problem before it is a technology problem. A fire drill before an audit is usually the symptom.

## A practical ALCOA+ checklist for validation records

Use this as a self-inspection pass on any validation package:

1. Does every entry and signature trace to a named, unique individual and a system timestamp?
2. Are executed results the first-capture data, or certified copies with the link to source documented?
3. Are failed, repeated and reprocessed results retained with the reason?
4. Do requirement, risk, test and result items trace to each other without gaps?
5. Is the audit trail enabled, protected and reviewed as part of the record review?
6. Is the retention period defined, and has retrieval been tested on archived records?
7. Is there a documented data flow for the process, with risks assessed?
8. Does the quality unit review and approve, and is that review itself recorded?

## Perspective

> We see ALCOA+ treated as a final review step, a checklist applied to a finished package. By then the evidence is already shaped by how it was written. Our view is that integrity has to be a property of authoring, not an audit of it.
>
> That is why in our platform every record is ALCOA+ checked at write-time and again at review-time. Agents draft and trace the validation lifecycle, and human signatures remain authoritative. The agent does the documentation burden; your people keep the judgment and the accountability.
>
> We also believe the architecture matters to your InfoSec and QA leads as much as the features. Qualitum is deployed privately inside the customer's infrastructure, designed for zero data egress, with customer-managed encryption and an LLM-agnostic approach. Teams using this model aim to cut authoring time by more than 70%, without trading away defensibility.
>
> *Matt*

## How Qualitum supports ALCOA+ in validation

Qualitum is an automated validation and compliance platform for pharma, biotech and medical device companies. [Validate·AI and Operate·AI](https://qualitum.ai/platform) cover agent-authored validation lifecycle work: URS, FS, DQ, IQ, OQ, PQ, CSV/CSA, risk assessment, a live traceability matrix, audit trails and deviation and CAPA handling, with integrations to major quality management systems. Our design aims at compliance with GxP, Annex 11 and 21 CFR Part 11 expectations out of the box.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Most teams begin with a paid pilot on a defined set of systems, so you can see the traceability and the write-time checks on your own records before wider rollout. [Start from our home page](https://qualitum.ai) to talk to us about a pilot, or review the [security approach](https://qualitum.ai/security) your InfoSec team will ask about.

## FAQ

### What does ALCOA+ stand for?

It stands for attributable, legible, contemporaneous, original and accurate, extended with complete, consistent, enduring and available. WHO's Annex 4 describes the extension as added emphasis on records being complete, consistent, enduring and available throughout the defined retention period.

### Does ALCOA+ apply to paper records?

Yes. It applies to paper and electronic data. Paper needs controlled logbooks and records that are never obscured, while electronic systems need audit trails and access controls. Hybrid processes need both.

### Is validating a system enough to be ALCOA+ compliant?

No. PIC/S guidance states that validation alone is insufficient. Administrative controls such as unique usernames and access permissions are also essential, together with data governance procedures and regular audit trail review.

### What will an inspector look for?

Expect questions on documented data flows, risk-based validation of computerized systems, user access, audit trail review and quality unit oversight. FDA warning letters show findings often start with missing basic controls, such as unrestricted changes to data.

## Sources

- [WHO Annex 4: Guideline on data integrity](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)
- [Qualifyze: What Is ALCOA Data Integrity?](https://www.qualifyze.com/resources/blog/what-is-alcoa-data-integrity/)
- [ISPE: Dynamic Data Integrity: Why Alcoa Keeps Evolving](https://ispe.org/pharmaceutical-engineering/ispeak/dynamic-data-integrity-why-alcoa-keeps-evolving)
- [PharmTech: ALCOA+ and Data Integrity](https://www.pharmtech.com/view/alcoa-and-data-integrity)
- [MHRA GxP data integrity guidance](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA%5FGxP%5Fdata%5Fintegrity%5Fguide%5FMarch%5Fedited%5FFinal.pdf)
- [PIC/S Guidance on Data Integrity](https://picscheme.org/docview/4234)
- [FDA warning letter: Nortec Quimica SA](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/nortec-quimica-sa-639894-12082022)
- [FDA compliance document: Micro Labs Limited](https://www.fda.gov/media/191689/download)
- [FDA signals on RUO materials](https://shopwithcaileys.com/fda-approval-does-not-apply-ruo-material)

## Recommended

- [ALCOA+ Examples Every Pharma Team Should Know](https://blog.qualitum.ai/alcoa-examples)
- [ALCOA+ Audit Trails: What Regulators Expect and How to Build Them](https://blog.qualitum.ai/alcoa-audit-trails)
- [Data Integrity Compliance for Pharma: A Practical Playbook](https://blog.qualitum.ai/data-integrity-compliance)
- [Write Time ALCOA+: 5 Audit Fields Validation Teams Must Test](https://blog.qualitum.ai/write-time-alcoa)

## FAQ
### What does ALCOA+ stand for?
It stands for attributable, legible, contemporaneous, original and accurate, extended with complete, consistent, enduring and available. WHO's Annex 4 describes the extension as added emphasis on records being complete, consistent, enduring and available throughout the defined retention period.

### Does ALCOA+ apply to paper records?
Yes. It applies to paper and electronic data. Paper needs controlled logbooks and records that are never obscured, while electronic systems need audit trails and access controls. Hybrid processes need both.

### Is validating a system enough to be ALCOA+ compliant?
No. PIC/S guidance states that validation alone is insufficient. Administrative controls such as unique usernames and access permissions are also essential, together with data governance procedures and regular audit trail review.

### What will an inspector look for?
Expect questions on documented data flows, risk-based validation of computerized systems, user access, audit trail review and quality unit oversight. FDA warning letters show findings often start with missing basic controls, such as unrestricted changes to data.
