---
title: Real-Time Data Integrity in GxP: Check Records as They Are Written
date: 2026-10-18
description: What real-time data integrity means for GxP teams: validating records at write-time, reviewing audit trails, and what Part 11 and Annex 11 expect.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1792167113963_Analyst-recording-a-pH-result-in-laboratory.jpeg
coverAlt: Analyst recording a pH result in laboratory
---

Real-time data integrity means a record is checked for accuracy, attribution and completeness at the moment it is created or changed, not weeks later during review. In a GxP setting, that means the rules of ALCOA+ are enforced when the entry is written, the audit trail captures it as it happens, and a second check runs again when someone reviews it. Anything else is a post-mortem.

This guide explains what the idea means, how streaming data checks differ from GxP expectations, what regulators look for, and how to build a practical setup in a validated environment.

## TL;DR

- Real-time data integrity moves checks to the point of creation. Errors are rejected or flagged before they reach downstream systems, batch records or submissions.
- In GxP, "real-time" is more than speed. Every record must be attributable, contemporaneous and traceable, and the audit trail must be reviewed, not just switched on.
- System availability is not data integrity. Redundant infrastructure keeps a system running but does not decide whether an entry is valid.
- Write-time checks alone are not enough. A second check at review-time catches what slipped through, and human signatures stay authoritative.
- Treat it as architecture, not a pre-audit project: the "fire drill" model of audit readiness is the expensive one.

## Table of Contents

- [What real-time data integrity actually means](#what-real-time-data-integrity-actually-means)
- [Two meanings of "real-time": streaming pipelines and GxP records](#two-meanings-of-real-time-streaming-pipelines-and-gxp-records)
- [Why availability is not integrity](#why-availability-is-not-integrity)
- [What regulators expect](#what-regulators-expect)
- [Where real-time programs break down](#where-real-time-programs-break-down)
- [A practical way to build it](#a-practical-way-to-build-it)
- [Our perspective](#our-perspective)
- [How Qualitum supports write-time and review-time checks](#how-qualitum-supports-write-time-and-review-time-checks)
- [Making audit readiness continuous](#making-audit-readiness-continuous)
- [FAQ](#faq)
- [Sources](#sources)

## What real-time data integrity actually means

Data integrity is the assurance that data stays accurate, complete and consistent across its lifecycle. The classic view treats it as something you verify afterwards: export the data, reconcile it, review it, sign it off.

The real-time view reverses the order. Validation happens in-flight, at ingestion, before the record enters any downstream system. Streaming engineers describe the old way bluntly: batch checks are [always too late](https://www.confluent.io/blog/making-data-quality-scalable-with-real-time-streaming-architectures/), because by the time an error is flagged it may already have spread to customer-facing systems.

The same logic applies in a regulated plant or lab. A transposed value in an electronic batch record that is caught as it is typed costs seconds. The same value found during release review costs a deviation, an investigation and possibly a delayed batch.

Three ideas sit underneath the phrase:

1. **Point-of-creation checks.** Rules about format, range, units and required fields run when the entry is made.
2. **Continuous monitoring.** Drift, gaps and unusual patterns are detected as they develop, not found in a quarterly review.
3. **Evidence that builds itself.** The who, what, when and why are captured automatically, so the proof exists the moment the record does.

## Two meanings of "real-time": streaming pipelines and GxP records

Search results for this topic mix two communities, and it helps to separate them.

**Data engineering** treats real-time integrity as a pipeline problem. Research on [adaptive data quality monitoring](https://doi.org/10.1109/access.2026.3686826) uses statistical process control (EWMA-based) to detect degradation in streaming data. In that paper the framework sustained 46.9 million events per second and reported a 10.2x improvement in detection over static baselines. That is useful for high-volume sensor and event data. It says nothing about whether the data would survive a Part 11 inspection.

**GxP quality** treats it as a record problem. The question is not only whether the value is statistically plausible but whether it is attributable to a named person or system, recorded at the time of the activity, original or a certified true copy, and retained so it stays available.

Researchers working on streaming systems reach a conclusion that quality teams will recognize: integrity as a [one-time gatekeeping step](https://www.vldb.org/workshops/2024/proceedings/QDB/QDB-7.pdf) does not work for continuous data. Provenance tracking and adaptive monitoring have to sit inside the pipeline. For a validation lead, the translation is simple. Controls must be designed into the system, then validated, rather than layered on as inspections.

![Two meanings of "real-time": streaming pipelines and GxP records — overview diagram](https://media.babylovegrowth.ai/blog-images/organization-48457/1792167166526_Two-meanings-of-real-time-streaming-pipelines-and-GxP-records-overview-diagram.jpeg)

## Why availability is not integrity

A common blind spot comes from cloud and infrastructure teams. Managed services give you redundancy, failover and backups, which protect availability. They do not decide whether the data written to them is correct.

Google's site reliability engineering guidance makes the distinction clearly: [data integrity depends on the application](https://sre.google/sre-book/data-integrity/) defining valid states and rejecting or flagging anything outside them. In a GxP context, that means validated rules, such as:

- a result cannot be saved without a unit and an instrument ID,
- a timestamp cannot be edited by the person who made the entry,
- a field tied to a specification limit triggers a flag when the value falls outside it,
- an entry cannot be completed without an authenticated user.

These rules are part of the intended use of the system. They belong in the user requirements, in the risk assessment and in the test scripts, which is where validation evidence comes from.

## What regulators expect

### ALCOA+ at the moment of record creation

FDA, EMA and MHRA all expect electronic GxP data to meet ALCOA+: Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring and Available. [Draft revisions to EU GMP Annex 11](https://www.velsafe.com/insights/eu-gmp-annex-11-2025-draft-insights/) put particular weight on audit trails being reviewed, with the review frequency documented.

"Contemporaneous" is the word that makes this a real-time subject. A record entered at the end of a shift from memory fails the principle even if every number is right. For worked examples, see our guide to [ALCOA+ examples every pharma team should know](https://blog.qualitum.ai/alcoa-examples).

### Audit trails: generated and reviewed

Under 21 CFR Part 11 and cGMP, electronic records must be as reliable as paper. Audit trails should provide [a time-stamped chronology of the who, what, when and why](https://www.scilife.io/blog/data-integrity) behind creation, modification or deletion of data, and qualified personnel review them before final approval or batch release.

FDA's own question-and-answer guidance covers the practical points, including [how access to cGMP computer systems should be restricted](https://www.biopharminternational.com/view/fda-answers-data-integrity-questions-0) and who should review audit trails. For a deeper design walk-through, our article on [GxP audit trail design](https://blog.qualitum.ai/audit-trail-design) covers seven elements to specify before procurement.

### Annex 11 is moving toward continuous control

The 2025 draft of Annex 11 grew from 5 to 19 pages. According to [a summary of the draft](https://eupry.com/regulations-temperature-compliance/annex-11/), audit trails must be enabled at all times, must capture data creation as well as changes and deletions, and reviews must be documented with defined frequency, scope and responsibilities. The comment period closed on 7 October 2025 and the final text was expected in mid-2026, so check the current status of the published version before you update procedures.

The pressure is real. An analysis cited by Velsafe reports that [more than 70 percent of critical GMP inspection findings in 2024](https://www.velsafe.com/insights/eu-gmp-annex-11-2025-draft-insights/) related to computerised systems, with data integrity and audit trail management prominent among them.

If you work in the US but supply Europe or the UK, it is worth reading how the MHRA approaches the same ground in our [MHRA data integrity guide for US teams](https://blog.qualitum.ai/mhra-data-integrity).

## Where real-time programs break down

Most failures are not technical. They are procedural, and they repeat.

**Audit trails enabled, never reviewed.** Practitioners describe this as a common inspection failure: the feature is on, but there is [no documented evidence of review before batch release](https://treedis.com/blog/pharma-data-integrity-alcoa/). Reviews should be risk-based and performed by people who cannot alter the data they review.

**Security logs mistaken for audit trail review.** A login history is not a data-change history. Auditors look for evidence that you reviewed [GxP-relevant data modifications](https://www.copadata.com), such as changes to process parameters or batch data, rather than a security log.

**Static thinking about dynamic data.** A PDF printout of a chromatography run does not preserve the ability to reprocess. Our note on [static versus dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) explains what GxP records really require.

**AI added without a validation story.** Where AI drafts or checks records, the model is part of the system. Guidance on AI in GxP points out that models can drift, so validation has to cover [version control of the model itself](https://intuitionlabs.ai/pdfs/ispe-gamp-ai-guide-validation-framework-for-gxp-systems.pdf), and every prompt and output should be treated as an electronic record that meets ALCOA+.

Record expectations differ by regulatory regime, too. If your teams work across research and manufacturing, a reference on [GLP versus GMP record requirements](https://datapeptides.com/glp-vs-gmp) shows how the applicable regulation changes which records you must be able to produce.

## A practical way to build it

Here is a sequence we see working for validation and quality teams.

1. **Inventory critical records.** List the records that drive product quality or patient safety decisions: batch records, test results, deviations, validation protocols. Start where the risk is highest, in line with a CSA approach focused on intended use.
2. **Define valid states.** For each record type, write the rules that decide what a valid entry looks like: required fields, ranges, units, sequence, who may enter and who may approve.
3. **Enforce at write-time.** Configure the system to block or flag invalid entries at entry, not at month-end. Test those rules as part of OQ.
4. **Log everything automatically.** Audit trails should be on by default, cannot be disabled by ordinary users and should include creation events.
5. **Review with separation of duties.** Define review frequency by risk, assign reviewers who have no authority to change the data, and keep the review itself as a record.
6. **Re-check at review-time.** Run a second verification when a record is reviewed, so errors that passed the first check or arose from edits are caught before approval.
7. **Monitor continuously.** Watch for patterns such as bulk deletions, after-hours edits or repeated failed logins, and route alerts into deviation and CAPA handling.
8. **Revalidate on change.** Treat configuration changes, new integrations and model updates as triggers for a risk-based validation review.

Our [data integrity by design playbook](https://blog.qualitum.ai/data-integrity-by-design) and the [Part 11 inspection-ready checklist](https://blog.qualitum.ai/part-11-compliance) go deeper on steps 3 to 5.

### What it looks like in practice

Take an analyst entering a pH result. A write-time rule checks the unit, the instrument's calibration status and the specification limit. If the value is outside the limit, the system flags it immediately and requires a documented reason to proceed. The audit trail records the entry and the flag. At review, a different person sees the entry, the flag and the justification together, and a second check confirms the record is complete before it is approved. Nothing here requires a heroic search through logs later.

![Write-time pH checks through independent review](https://media.babylovegrowth.ai/blog-images/organization-48457/1792167204468_Write-time-pH-checks-through-independent-review.jpeg)

## Our perspective

We build validation software, so we see the same pattern in nearly every conversation: teams spend most of their effort assembling evidence after the fact. Documents are authored by hand, traceability matrices are reconciled before an inspection, and audit trails are skimmed under time pressure. That is the quiet tax on validation, and it grows with every system you add.

Our view is that integrity should be a property of how records are produced, not a service performed on them later. That is why every record in Qualitum is ALCOA+ checked twice, at write-time and again at review-time. It is also why human signatures stay authoritative. Agents draft and verify, people decide and sign.

We also think deployment matters as much as features. In regulated work, you should be able to run the platform privately inside your own infrastructure, with no data egress, customer-managed encryption and your choice of language model. A tool that moves GxP records outside your boundary to check them has traded one integrity risk for another.

Finally, we are cautious about claims. Automation does not replace quality judgment. It removes the manual authoring and reconciliation work that crowds judgment out, so your experts spend their time on risk decisions rather than formatting.

> *— Matt*

## How Qualitum supports write-time and review-time checks

Qualitum is an automated validation and compliance platform for pharmaceutical, biotech and medical device companies. Its multi-agent system authors validation lifecycle documents (URS, FS, DQ, IQ, OQ, PQ, CSV/CSA), maintains a live traceability matrix, and checks every record against ALCOA+ as it is written and again as it is reviewed. It integrates with existing quality management systems and is built for a validated private deployment.

If you want to see how that works on your own systems, start with the [platform overview](https://qualitum.ai/platform/), look at how the [AI Verifier Agent](https://qualitum.ai/agents/verifier) re-checks drafts with multi-model consensus, or ask about a [paid pilot](https://qualitum.ai/) on a single system.

## Making audit readiness continuous

The practical test of real-time integrity is whether an auditor's request becomes a retrieval task rather than a project. If your team can open any record and show its origin, changes, review and signature without reconstruction, you are close.

A few signals that you are not there yet:

- You schedule special "audit prep" weeks.
- Traceability is reconciled by hand before inspections.
- Audit trail review lives in a spreadsheet that someone updates retroactively.
- Different sites follow different review frequencies without a documented rationale.

The same discipline applies outside pharma. Any GMP-certified operation, such as [cosmetic contract manufacturing](https://harmonyskinlab.com/gmp-certified-skincare-manufacturing), depends on records that stand up on their own. If you are building a roadmap, our [30, 90 and 180 day plan for GxP document control](https://blog.qualitum.ai/gxp-document-control) is a sensible place to sequence the work, and the [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) covers governance.

## FAQ

### What is data integrity in a GxP context?

It is the assurance that data is complete, consistent and accurate throughout its lifecycle, and that it can be trusted for quality decisions. Regulators assess it through ALCOA+ principles and through audit trails that show who did what, when and why.

### How do you verify data in real time without slowing people down?

Push the checks into the system as validated rules: required fields, ranges, units and role-based permissions. Because they run at entry, they usually remove rework rather than add steps. Keep the rules risk-based so only critical records carry the heaviest controls.

### Is an enabled audit trail enough for compliance?

No. Regulators expect the audit trail to be reviewed by qualified people, with the review documented and its frequency justified. Reviewers should not have authority to change the data they are reviewing.

### How is data integrity different from data quality?

Data quality describes whether data is fit for its purpose, such as being accurate and complete. Data integrity adds the guarantee that it stays unaltered and traceable across its lifecycle. In GxP, you need both, plus evidence of how the record came to be.

## Sources

- [Confluent: Ensure Data Quality With Real-Time Validation and Monitoring](https://www.confluent.io/blog/making-data-quality-scalable-with-real-time-streaming-architectures/)
- [Adaptive Data Quality Monitoring: A Comprehensive Framework for Streaming Data Integrity](https://doi.org/10.1109/access.2026.3686826)
- [VLDB QDB workshop paper on streaming data integrity](https://www.vldb.org/workshops/2024/proceedings/QDB/QDB-7.pdf)
- [Google SRE Book: Data Integrity](https://sre.google/sre-book/data-integrity/)
- [Velsafe: EU GMP Annex 11 2025 draft insights](https://www.velsafe.com/insights/eu-gmp-annex-11-2025-draft-insights/)
- [Scilife: Data integrity](https://www.scilife.io/blog/data-integrity)
- [BioPharm International: FDA Answers Data Integrity Questions](https://www.biopharminternational.com/view/fda-answers-data-integrity-questions-0)
- [Eupry: EU GMP Annex 11 requirements](https://eupry.com/regulations-temperature-compliance/annex-11/)
- [Treedis: Pharma Data Integrity and ALCOA+](https://treedis.com/blog/pharma-data-integrity-alcoa/)
- [COPA-DATA](https://www.copadata.com)
- [ISPE GAMP AI Guide: Validation Framework for GxP Systems](https://intuitionlabs.ai/pdfs/ispe-gamp-ai-guide-validation-framework-for-gxp-systems.pdf)

## Recommended

- [Static vs Dynamic Data: What GxP Records Really Require](https://blog.qualitum.ai/static-vs-dynamic-data)
- [Data Integrity by Design: A Pharma QA Playbook](https://blog.qualitum.ai/data-integrity-by-design)
- [Data Integrity Compliance for Pharma: A Practical Playbook](https://blog.qualitum.ai/data-integrity-compliance)
- [Pass Inspections: GxP Audit Trail Design for Procurement, 7 Elements](https://blog.qualitum.ai/audit-trail-design)

## FAQ
### What is data integrity in a GxP context?
It is the assurance that data is complete, consistent and accurate throughout its lifecycle, and that it can be trusted for quality decisions. Regulators assess it through ALCOA+ principles and through audit trails that show who did what, when and why.

### How do you verify data in real time without slowing people down?
Push the checks into the system as validated rules: required fields, ranges, units and role-based permissions. Because they run at entry, they usually remove rework rather than add steps. Keep the rules risk-based so only critical records carry the heaviest controls.

### Is an enabled audit trail enough for compliance?
No. Regulators expect the audit trail to be reviewed by qualified people, with the review documented and its frequency justified. Reviewers should not have authority to change the data they are reviewing.

### How is data integrity different from data quality?
Data quality describes whether data is fit for its purpose, such as being accurate and complete. Data integrity adds the guarantee that it stays unaltered and traceable across its lifecycle. In GxP, you need both, plus evidence of how the record came to be.
