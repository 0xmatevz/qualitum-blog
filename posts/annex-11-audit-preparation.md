---
title: Annex 11 Audit Preparation: What Inspectors Review
date: 2026-11-27
description: How to prepare for an EU GMP Annex 11 audit: the evidence inspectors expect, how to prioritize systems by risk, and how to keep records inspection-ready.
author: Qualitum
cover: https://media.ai-fast-cdn.com/blog-images/organization-48457/1795631469872_Quality-team-retrieving-evidence-during-GMP-inspection.jpeg
coverAlt: Quality team retrieving evidence during GMP inspection
---

An Annex 11 audit asks one question of every GxP computerized system: can you show, with records, that it was validated, is controlled and stays in a validated state? Teams that answer it well do not scramble before an inspection. They keep validation evidence current as the work happens. That is the approach we build Qualitum around: [Validate·AI and Operate·AI](https://qualitum.ai/platform) write and check validation records as they are created, so the evidence is already traceable when the inspector asks.

## TL;DR

- Annex 11 covers computerized systems used in manufacturing medicinal products. Inspectors start from your system inventory and the validation evidence for GxP-critical systems.
- Prepare by risk: classify systems by use, criticality and validation status, then build the evidence pack for the highest-risk ones first.
- The evidence pack spans requirements, risk assessment, validation, traceability, supplier oversight, access, audit trails, backup and change control.
- You stay responsible for compliance even when work is outsourced to a supplier.
- Continuous readiness, with records checked when written and again when reviewed, beats a pre-audit fire drill.

## Table of Contents

- [What Annex 11 requires, and where it stands](#what-annex-11-requires-and-where-it-stands)
- [Start from the inventory, not the binder](#start-from-the-inventory-not-the-binder)
- [The evidence an inspector expects to see](#the-evidence-an-inspector-expects-to-see)
- [Outsourcing does not move the responsibility](#outsourcing-does-not-move-the-responsibility)
- [A readiness plan you can run in six weeks](#a-readiness-plan-you-can-run-in-six-weeks)
- [Why continuous readiness beats the sprint](#why-continuous-readiness-beats-the-sprint)
- [How Qualitum fits](#how-qualitum-fits)
- [Perspective](#perspective)
- [FAQ](#faq)
- [Sources](#sources)

## What Annex 11 requires, and where it stands

Annex 11 is the part of EudraLex Volume 4, the EU GMP guidelines, that governs computerized systems. The European Commission opened a [stakeholder consultation on 7 July 2025](https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en) on a revised Annex 11, a revised Chapter 4 (documentation) and a new Annex 22 on artificial intelligence. The drafts were prepared by the EMA GMP/GDP Inspectors Working Group together with PIC/S, and the consultation closed on 7 October 2025. The Commission describes the Annex 11 draft as strengthening lifecycle management, quality risk management, supplier oversight, audit-trail, electronic-signature and security controls.

The [July 2025 draft text](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en) applies to all types of computerized systems used in manufacturing medicinal products and active substances. It expects systems to be validated before use and kept in a validated state through their lifecycle, with quality risk management applied throughout, weighing process complexity, automation, product quality, patient safety and data integrity.

For your audit plan, treat the revision status as a reason to build to the direction of travel, not to wait. Check the European Commission's EudraLex Volume 4 page for the text currently in force before an inspection.

### Scope when you operate in several countries

Annex 11 is an EU document. PIC/S, whose [2023 annual report](https://picscheme.org/docview/8880) describes it as a non-binding cooperation arrangement among authorities with 56 participating authorities, publishes its own computerized-systems recommendations, and those say [national legislation should determine how far they apply](https://www.gmp-compliance.org/files/guidemgr/PI%20011-3%20Recommendation%20on%20Computerised%20Systems.pdf). Health Canada's [GUI-0050](https://www.canada.ca/content/dam/hc-sc/documents/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/Annex-11-to-the-Good-Manufacturing-Practices-Guide-Computerized-Systems-(GUI-0050)-ENG-.pdf) follows the same lifecycle and risk logic. For a US site shipping to the EU, a single evidence model that satisfies Annex 11 and 21 CFR Part 11 avoids maintaining two sets of records.

## Start from the inventory, not the binder

Inspectors work from the list. PIC/S PI 011-3 says firms should keep an inventory of computerized systems classified by use, criticality and validation status, and that inspectors select GxP-critical systems and review validation evidence before looking at routine operational controls. Your preparation should mirror that order.

1. **Build or refresh the inventory.** Every GxP system: LIMS, MES, SCADA, chromatography data systems, ERP modules, spreadsheets with GxP calculations, SaaS tools.
2. **Classify each system.** Record its intended use, GxP criticality, data-integrity impact and current validation status.
3. **Rank by risk.** Health Canada's guidance expects the extent of validation and data-integrity controls to rest on a justified, documented risk assessment, covering patient safety, data integrity and product quality.
4. **Assign owners.** Each system needs a named business owner and a named system owner who can speak to it in the room.

The ranking tells you where to spend the next four weeks. A batch-release system with an out-of-date validation package deserves attention before a low-risk reporting tool.

## The evidence an inspector expects to see

The draft Annex 11 specifies controls and evidence across the areas below. Use this as the contents of each critical system's evidence pack.

| Area | What to have ready |
|---|---|
| Requirements | Approved user and system requirements, current version |
| Risk | Documented risk assessment justifying validation scope |
| Validation | Validation plan, protocols, executed tests, summary report |
| Traceability | Requirements linked to tests and results, with change history |
| Suppliers | Supplier assessment, contract, quality agreement |
| Access | User roles, access reviews, electronic-signature controls |
| Audit trails | Enabled, reviewed and retrievable records of GxP changes |
| Data transfer | Migration and interface verification records |
| Resilience | Backup and restore evidence |
| Change | Change-control records and periodic reviews |

PIC/S PI 011-3 adds what inspectors weigh: evidence that covers each lifecycle step and is justified against documented risk and complexity, plus traceability, change and version control, and resolved errors or deviations. Its framing is useful for your own readiness: validation is a defensible, risk-justified body of evidence, not a one-time test event.

### Where gaps usually sit

- **Traceability that went stale.** The matrix matched the system at go-live, then changes happened.
- **Audit trails that exist but are never reviewed.** Having them enabled is not the same as showing review.
- **Supplier files without current evidence.** Our guide to [SaaS vendor qualification](https://blog.qualitum.ai/saas-vendor-qualification) covers what to request. For the audit side, see [vendor audit preparation](https://blog.qualitum.ai/vendor-audit-preparation).
- **Open deviations with no linked CAPA.** Inspectors read resolved errors as a sign of control, so unresolved ones need a visible path. We cover this in [deviation and CAPA evidence gaps](https://blog.qualitum.ai/deviation-and-capa).

## Outsourcing does not move the responsibility

The July 2025 draft states that the regulated user remains responsible for compliance, evidence retention and regulatory access even when activities are outsourced. For a cloud or SaaS system, that means your file must hold the supplier's evidence and your own assessment of it, and you must be able to produce both to an inspector. Plan for how records are retrieved, who can retrieve them and how fast.

## A readiness plan you can run in six weeks

**Weeks 1 to 2: inventory and risk.** Finish the inventory, classify systems and rank them. Agree the top tier for the audit.

![Four phases of a six-week audit readiness plan](https://media.ai-fast-cdn.com/blog-images/organization-48457/1795631524687_Four-phases-of-a-six-week-audit-readiness-plan.jpeg)

**Weeks 2 to 4: gap assessment.** For each top-tier system, walk the evidence table above and mark each row as complete, outdated or missing. Record each gap with an owner, a due date and a risk rating. Our [Gap Agent](https://qualitum.ai/agents/gap) is built to find gaps in evidence before the auditor does.

**Weeks 3 to 5: remediation.** Close missing items starting with the highest risk. Where validation is outdated, a documented risk-based rationale for scope belongs in the file, not an ad hoc explanation on audit day. Update the traceability matrix, then re-review audit-trail and access records.

**Week 6: rehearsal.** Run a mock inspection. Have the system owner pull evidence live, unprepared, from the quality system. If retrieval takes more than a few minutes per document, fix the retrieval, not just the content.

On the document side, see our checklists on [Part 11 compliance](https://blog.qualitum.ai/part-11-compliance) and [audit trail design](https://blog.qualitum.ai/audit-trail-design), since inspectors often test the same controls under both frameworks.

## Why continuous readiness beats the sprint

A six-week sprint works once. The cost is that the same sprint returns before every inspection, a quiet tax on validation and QA teams. The alternative is to keep records inspection-ready as work happens: requirements, protocols and executed tests reviewed as they are produced, traceability updated on every change, and audit-trail review on a schedule. Our guide to [continuous audit readiness](https://blog.qualitum.ai/continuous-audit-readiness) lays out the routine.

## How Qualitum fits

Qualitum is an automated validation and compliance platform for pharmaceutical, biotech and medical device companies. Agents author validation lifecycle documents (URS, FS, DQ, IQ, OQ, PQ, CSV/CSA, risk assessments), keep a live traceability matrix, and support deviation and CAPA handling. Every record is ALCOA+ checked at write-time and review-time, and human signatures remain authoritative. The platform is deployed privately in your infrastructure, with zero data egress, and integrates with major quality management systems.

The [AI Trace Agent](https://qualitum.ai/agents/trace) maintains a live trace graph that flags every change, and the [evidence review use case](https://qualitum.ai/use-cases/evidence-review) covers executed tests reviewed before QA sees them. Our customers' authoring time falls by more than 70%. If you want to see it against one of your own top-tier systems, [start with a pilot](https://qualitum.ai).

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

For a deployment timeline, read our [30 to 90 day validated SaaS deployment](https://blog.qualitum.ai/validated-saas-deployment) guide.

## Perspective

> Most audit findings we read about are not exotic. They are a stale trace matrix, an audit trail nobody reviewed, a supplier file that stopped at the contract. Each is a symptom of evidence assembled for the audit instead of produced by the work.
>
> We built Qualitum on the opposite premise: the record should be right when it is written. That is why every record is ALCOA+ checked at write-time and again at review-time, and why human signatures stay authoritative. Agents take over the authoring burden; your people keep the judgment and the sign-off.
>
> Annex 11 is moving toward stronger lifecycle management and supplier oversight. A team that already works from live traceability and risk-justified evidence will find the revised text confirms its routine rather than forcing a rebuild.
>
> *Matt*

## FAQ

### What is the first thing an Annex 11 inspector asks for?

Usually the inventory of computerized systems. PIC/S inspector guidance describes selecting GxP-critical systems from it and then reviewing their validation evidence. Have the list classified by use, criticality and validation status.

### Does Annex 11 apply to SaaS and cloud systems?

The July 2025 draft applies to all types of computerized systems used in manufacturing medicinal products and active substances. The regulated user stays responsible for compliance and evidence even when a supplier operates the system, so your file needs supplier evidence and your own assessment.

### Is the revised Annex 11 in force?

The Commission's consultation on the draft closed on 7 October 2025. Check the EudraLex Volume 4 page for the text currently in force, and build your evidence to the lifecycle, supplier and data-integrity direction the draft sets.

### How far ahead should we start preparing?

A focused gap assessment and remediation for top-tier systems can run in about six weeks, as outlined above. Keeping records audit-ready continuously shortens that to a short check before each inspection.

## Sources

- [Annex 11: Computerised Systems, July 2025 draft (European Commission)](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en)
- [Stakeholders' consultation on EudraLex Volume 4, Chapter 4, Annex 11 and Annex 22 (European Commission)](https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en)
- [PIC/S PI 011-3, Computerised Systems in Regulated GxP Environments](https://www.gmp-compliance.org/files/guidemgr/PI%20011-3%20Recommendation%20on%20Computerised%20Systems.pdf)
- [PIC/S 2023 Annual Report](https://picscheme.org/docview/8880)
- [Health Canada GUI-0050, Annex 11 computerized systems](https://www.canada.ca/content/dam/hc-sc/documents/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/Annex-11-to-the-Good-Manufacturing-Practices-Guide-Computerized-Systems-(GUI-0050)-ENG-.pdf)

## Recommended

- [Inspector Ready Annex 11 Compliance: Build Inspector Evidence With Automation](https://blog.qualitum.ai/annex-11-compliance)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [Audit Trail Review: Inspection-Ready Guide for QA Teams](https://blog.qualitum.ai/audit-trail-review)
- [Part 11 Compliance: Inspection-Ready Checklist for QA Teams](https://blog.qualitum.ai/part-11-compliance)

## FAQ
### What is the first thing an Annex 11 inspector asks for?
Usually the inventory of computerized systems. PIC/S inspector guidance describes selecting GxP-critical systems from it and then reviewing their validation evidence. Have the list classified by use, criticality and validation status.

### Does Annex 11 apply to SaaS and cloud systems?
The July 2025 draft applies to all types of computerized systems used in manufacturing medicinal products and active substances. The regulated user stays responsible for compliance and evidence even when a supplier operates the system, so your file needs supplier evidence and your own assessment.

### Is the revised Annex 11 in force?
The Commission's consultation on the draft closed on 7 October 2025. Check the EudraLex Volume 4 page for the text currently in force, and build your evidence to the lifecycle, supplier and data-integrity direction the draft sets.

### How far ahead should we start preparing?
A focused gap assessment and remediation for top-tier systems can run in about six weeks, as outlined above. Keeping records audit-ready continuously shortens that to a short check before each inspection.
