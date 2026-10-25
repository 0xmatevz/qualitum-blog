---
title: Vendor Audit Preparation: A Practical Guide for Pharma QA
date: 2026-10-25
description: How to prepare a vendor audit in pharma and life sciences: risk tiering, pre-audit document requests, quality agreements, the audit day and follow-up.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1792749798854_QA-auditor-observing-a-pharmaceutical-packaging-line.jpeg
coverAlt: QA auditor observing a pharmaceutical packaging line
---

Good vendor audit preparation happens mostly before anyone travels or opens a video call. You decide how much scrutiny the vendor deserves, request the right documents, read them critically, and walk in with a short list of questions that the paperwork could not answer. This guide covers that sequence for pharma, biotech and medical device teams, including the software and SaaS vendors that sit behind your GxP systems.

It also covers the part most checklists skip: what happens after the audit, because that is where renewals succeed or fail.

## TL;DR

- Tier your vendors by risk first. Audit intensity and frequency should follow the tier, not habit or the calendar.
- Request a core document package before the visit so audit time goes to high-risk areas instead of manual verification.
- Treat the quality agreement as an operating manual with timelines, not a legal formality.
- For software vendors, scale effort to intended use and reuse the supplier's own evidence where your assessment supports it.
- The audit is one step in a loop. Ongoing monitoring of CAPA and performance is what protects you at renewal.

## Table of Contents

- [Start with risk, not with the checklist](#start-with-risk-not-with-the-checklist)
- [Run the paper assessment before the visit](#run-the-paper-assessment-before-the-visit)
- [Build the audit plan](#build-the-audit-plan)
- [On the audit day: what to look at](#on-the-audit-day-what-to-look-at)
- [Auditing a software or SaaS vendor](#auditing-a-software-or-saas-vendor)
- [After the audit: close the loop](#after-the-audit-close-the-loop)
- [A pre-audit checklist you can reuse](#a-pre-audit-checklist-you-can-reuse)
- [Our perspective: preparation is a documentation problem](#our-perspective-preparation-is-a-documentation-problem)
- [Where automation helps](#where-automation-helps)
- [FAQ](#faq)
- [Sources](#sources)

## Start with risk, not with the checklist

A single checklist applied to every vendor wastes effort on low-risk suppliers and under-examines the critical ones. Risk tiering fixes that. The question is simple: if this vendor fails, what happens to product quality, patient safety or data integrity?

A practical tiering has three levels:

| Tier | Typical vendor | Audit approach |
|---|---|---|
| Critical | API or excipient manufacturer, contract lab, GxP SaaS holding your records | On-site or structured virtual audit, full document package, close monitoring |
| Moderate | Calibration provider, packaging supplier, non-GxP-impacting IT service | Questionnaire plus document review, targeted audit if signals appear |
| Low | Office and general services | Qualification at onboarding, periodic review |

This lines up with the way [risk tiering determines audit intensity](https://intuitionlabs.ai/pdfs/pharma-supplier-qualification-risk-tiering-audits.pdf) for qualified suppliers in pharma. On timing, European guidance describes [audit frequency of roughly two to three years](https://www.a3p.org/wp-content/uploads/2014/04/article_regulatory_2014_gdp_guideline_chapter7_outsourcing_v1.pdf) for established, lower-risk suppliers, with more frequent audits in the early stages of a relationship. Treat that as a starting point and document why you chose your own interval.

Write the rationale down. An inspector who asks why a vendor was audited every three years will be satisfied by a one-paragraph risk assessment. They will not be satisfied by "that is what we always did."

## Run the paper assessment before the visit

The real preparation happens in the desk review. Practitioners point out that the [pre-audit paper assessment and the ongoing monitoring afterwards](https://kenx.org/wp-content/uploads/2025/03/Supplier-Auditing-and-Quality-Agreements-KENX.pdf) are where most of the hidden work sits, with the visit itself being only one step.

### Request a core document package

Ask for these items in advance, as suggested in a [pharmaceutical supplier qualification checklist](https://www.popprobe.com/checklist-library/pharmaceutical-life-sciences/supply-chain/pharmaceutical-supplier-qualification-audit-checklist):

- A current GMP certificate
- The Site Master File
- A summary of CAPAs from the last 24 months
- Change control logs for the past 12 months
- Summaries of recent OOS and OOT investigations

The point is focus. When you already hold these, auditors spend the visit testing the risky areas rather than confirming that documents exist.

### Read the CAPA log like an auditor

The most useful document in the package is often the CAPA log. A supplier with many open, recurring or poorly closed deviations is a clearer risk signal than [a slightly outdated policy document](https://intuitionlabs.ai/pdfs/pharma-supplier-qualification-risk-tiering-audits.pdf). Look at how out-of-specification investigations were handled, because that tends to show the true maturity of the quality culture.

Before the audit, mark three things in the log: recurring root causes, CAPAs that were closed without an effectiveness check, and change controls that touched validated processes.

### Check the quality agreement

The quality agreement is where cross-border and complex service relationships tend to break down. It should be [an operational manual that sets timelines](https://kenx.org/wp-content/uploads/2025/03/Supplier-Auditing-and-Quality-Agreements-KENX.pdf) for deviation notification and change control, not only a legal document. Before the audit, confirm four points:

1. Who must notify whom, and within how many days, when a deviation affects your product or data.
2. Which changes require your approval before implementation.
3. Your right to audit, including for-cause audits and subcontractors.
4. How records are returned or retained if the relationship ends.

Outsourced activities should be [appropriately defined, agreed and controlled](https://health.ec.europa.eu/document/download/58b5106a-cf6f-4352-9dca-1caf5d27d97e_en?filename=vol4-chap7_2012-06_en.pdf), as EU GMP Chapter 7 puts it. If the agreement is silent on something you plan to audit, fix the agreement as well as the finding.

## Build the audit plan

With the paper review done, the audit plan can be short and sharp. A workable plan includes:

- **Scope and objective.** Which site, which processes, which systems, and why this audit is happening now (routine, qualification, for-cause).
- **Focus areas from the desk review.** List the specific CAPAs, change controls or investigations you want to trace end to end.
- **Team and roles.** Name a lead auditor, a technical specialist if the vendor makes sterile product or runs computerized systems, and a scribe.
- **Agenda sent in advance.** Share the schedule and the document list so the vendor can bring the right people, not the most senior ones.
- **Remote or on-site.** A structured virtual protocol can work, but remote review of documents is [necessary but not sufficient](https://chemoxpharma.com/how-to-qualify-api-supplier-india-a-step-by-step-guide/) on its own for a manufacturer. For critical suppliers, plan to see the facility.

One more habit pays off: pre-write your evidence capture. Decide how you will record document IDs, record versions and the exact sample you reviewed. Findings that cite a record number survive scrutiny. Findings that say "several batch records were incomplete" invite argument.

## On the audit day: what to look at

You will not read everything. Choose samples that test the system rather than showcase it.

### Trace, do not just inspect

Pick one change control and follow it from request, to risk assessment, to approval, to implementation, to the updated document. Pick one deviation and follow it to CAPA and effectiveness check. Breaks in the chain tell you more than a clean procedure.

![Two audit evidence paths from initiation to verification](https://media.babylovegrowth.ai/blog-images/organization-48457/1792749828382_Two-audit-evidence-paths-from-initiation-to-verification.jpeg)

### Treat data integrity as culture

Practitioners suggest reading data integrity as [a cultural indicator](https://chemoxpharma.com/how-to-qualify-api-supplier-india-a-step-by-step-guide/). Look at whether manual overrides are justified and documented rather than hidden. A site that openly documents its deviations is generally lower risk than one with a suspiciously perfect record log.

In practice, ask to see who can edit or delete data, how audit trails are reviewed, and whether the review is evidenced or assumed. If you want a framework for those questions, our [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance) walks through the controls, and the piece on [static versus dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) clarifies what a GxP record has to preserve.

### Ask how issues are escalated

Expect to be asked, and to ask, about qualification, quality agreements, audit outcomes, change notifications and how supplier issues are escalated and corrected. Ask the vendor to show you the last time a problem reached a customer, and what changed afterwards.

## Auditing a software or SaaS vendor

The same logic applies to vendors behind your GxP systems, with different evidence. A SaaS platform that stores batch, validation or complaint records is a critical vendor, even if it never touches product.

Your regulated company is not expected to re-test everything. GAMP 5 Second Edition encourages regulated companies to [maximize supplier involvement](https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition), leveraging the supplier's knowledge and experience. The guide's own text says that [justification for using supplier documentation](https://kenx.org/wp-content/uploads/2025/03/Supplier-Auditing-and-Quality-Agreements-KENX.pdf) should come from a satisfactory outcome of supplier assessments. So the audit is what earns you the right to reuse their evidence.

The FDA's final computer software assurance guidance points the same way. It asks manufacturers to [start from intended use](https://hlc.com/en/publications/fda-finalizes-computer-software-assurance-guidance-for-production-and-quality-system-software) and let that drive validation scope, using vendor assessments, certifications and digital system logs to cut manual documentation. For your audit, that means the vendor's software development lifecycle, release controls and defect handling matter more than a long list of generic questions.

Expect the traffic to go both ways. Customers routinely send [vendor quality questionnaires](https://sakaradigital.com/blog/selecting-software-vendors-gxp-regulated-industries/) during the RFP phase, well before a contract exists. If you are the vendor, keep a ready-made evidence pack: SDLC description, release and change records, security and data integrity controls, and your own supplier list.

For a deeper look at the buyer's side, see our guide to [SaaS vendor qualification for life sciences](https://blog.qualitum.ai/saas-vendor-qualification), and for scoping, [GAMP 5's risk-based approach](https://blog.qualitum.ai/gamp-5-risk-based) and the walkthrough on [validating COTS software](https://blog.qualitum.ai/cots-software-validation).

![Auditing a software or SaaS vendor — overview diagram](https://media.babylovegrowth.ai/blog-images/organization-48457/1792749865863_Auditing-a-software-or-SaaS-vendor-overview-diagram.jpeg)

## After the audit: close the loop

The most common reason for failure at renewal is losing sight of monitoring. Qualification is [a continuous loop rather than a point-in-time event](https://intuitionlabs.ai/pdfs/pharma-supplier-qualification-risk-tiering-audits.pdf), and the track phase covers KPIs such as delivery timeliness and CAPA resolution speed.

A sensible post-audit routine:

1. Issue the report with graded findings and a response deadline, as agreed in the quality agreement.
2. Review the vendor's CAPA plan for root cause, not just correction, and set effectiveness checks.
3. Record the decision (approved, conditionally approved, rejected) with the rationale.
4. Feed the result back into the risk tier and the next audit date.
5. Monitor between audits: change notifications, complaints, deviations, and any external signals about the vendor.

For that last point, outside inspection data helps as much as your own records. Resources on [supplier qualification and ongoing oversight](https://atlas-compliance.ai/blog/high-quality-supplier-qualification) discuss how audit scope and monitoring fit together across the supplier lifecycle.

Document control is the quiet backbone of all of this. If your audit reports, quality agreements and vendor files cannot be found in minutes, preparation starts from behind. Our [30, 90 and 180 day document control plan](https://blog.qualitum.ai/gxp-document-control) shows how teams get that in order.

## A pre-audit checklist you can reuse

Before you confirm an audit date, check each line:

- Vendor tier and audit rationale documented
- Quality agreement reviewed against the audit scope
- Core document package received and read
- CAPA, change control and OOS or OOT patterns marked for tracing
- Audit plan and agenda sent, team and roles named
- Evidence capture method agreed (document IDs, versions, samples)
- Report template and response timeline ready
- Next review date and monitoring KPIs defined

## Our perspective: preparation is a documentation problem

We build validation software for regulated teams, and we see the same pattern in vendor audit preparation. The thinking is rarely the bottleneck. The bottleneck is assembling evidence: pulling records from several systems, rewriting the same assessment in a new template, and chasing signatures a week before the visit. It becomes a fire drill before an audit, and it is a quiet tax on every validation team.

Our view is that the evidence should be built as the work happens. That is why every record in our platform is checked against ALCOA+ at write-time and again at review-time, and why human signatures stay authoritative. Agents draft, verify and trace. People decide and sign.

It matters for vendor audits in two directions. When you audit a software supplier, you should expect to see how its records are protected, how the platform is deployed, and where your data lives. We deploy privately inside the customer's infrastructure, which is the answer we want buyers to be able to verify. When you are audited yourself, a live traceability matrix and a single audit trail make the difference between a calm hour and a week of retrieval.

None of this replaces judgment. A tool will not tell you whether a vendor's culture handles bad news well. It can, however, give you the time to go and find out.

> *— Matt*

## Where automation helps

If supplier selection and qualification are a recurring load for your team, our [AI Supplier Comparison Agent](https://qualitum.ai/agents/supplier-comparison) scores every offer against your URS, so the vendor shortlist is traceable from the start. For the wider validation lifecycle, see the [Validate·AI and Operate·AI platform](https://qualitum.ai/platform/). Teams usually begin with a paid pilot, and you can [start the conversation here](https://qualitum.ai/).

## FAQ

### What is a vendor audit in pharma?

A vendor audit, also called a supplier audit, is a documented, independent examination of a supplier's quality system to confirm it can meet your requirements. In pharma it covers GMP, GDP or GxP compliance, data integrity, change control and CAPA. It can be on-site, remote or a postal questionnaire, depending on the risk tier.

### How often should we audit a vendor?

It depends on risk. Guidance describes [two to three years](https://www.a3p.org/wp-content/uploads/2014/04/article_regulatory_2014_gdp_guideline_chapter7_outsourcing_v1.pdf) for established, lower-risk suppliers, with more frequent audits early in a relationship. Add for-cause audits when complaints, recalls or inspection findings suggest a problem.

### What documents should we request before the audit?

At minimum, request the GMP certificate, Site Master File, a 24-month CAPA summary, 12 months of change control logs and recent OOS or OOT summaries. For software vendors, add the SDLC description, release records and data integrity controls. Reviewing them first lets you spend the visit on the riskiest areas.

### Do we have to audit software vendors the same way as manufacturers?

The principle is the same but the evidence differs. You assess the vendor's development lifecycle, change management and data integrity controls, then scale your own validation to intended use. A satisfactory assessment is what supports reusing the supplier's documentation.

## Sources

- [Pharma Supplier Qualification: Risk Tiering & Audits](https://intuitionlabs.ai/pdfs/pharma-supplier-qualification-risk-tiering-audits.pdf)
- [Supplier Auditing and Quality Agreements (KENX)](https://kenx.org/wp-content/uploads/2025/03/Supplier-Auditing-and-Quality-Agreements-KENX.pdf)
- [Guidance on European Good Distribution Practice, Chapter 7 outsourcing (A3P)](https://www.a3p.org/wp-content/uploads/2014/04/article_regulatory_2014_gdp_guideline_chapter7_outsourcing_v1.pdf)
- [Pharmaceutical supplier qualification audit checklist (POPProbe)](https://www.popprobe.com/checklist-library/pharmaceutical-life-sciences/supply-chain/pharmaceutical-supplier-qualification-audit-checklist)
- [EU GMP Chapter 7, Outsourced Activities (European Commission)](https://health.ec.europa.eu/document/download/58b5106a-cf6f-4352-9dca-1caf5d27d97e_en?filename=vol4-chap7_2012-06_en.pdf)
- [How to Qualify an API Supplier in India (Chemox Pharma)](https://chemoxpharma.com/how-to-qualify-api-supplier-india-a-step-by-step-guide/)
- [GAMP 5 Guide 2nd Edition (ISPE)](https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition)
- [FDA finalizes computer software assurance guidance (HLC)](https://hlc.com/en/publications/fda-finalizes-computer-software-assurance-guidance-for-production-and-quality-system-software)
- [Selecting Software Vendors for GxP Industries (Sakara Digital)](https://sakaradigital.com/blog/selecting-software-vendors-gxp-regulated-industries/)
- [Supplier Qualification: How to Ensure Quality in Pharma (Atlas)](https://atlas-compliance.ai/blog/high-quality-supplier-qualification)

## Recommended

- [Qualification vs Validation: A Practical Guide for Pharma QA](https://blog.qualitum.ai/qualification-vs-validation)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [Part 11 Compliance: Inspection-Ready Checklist for QA Teams](https://blog.qualitum.ai/part-11-compliance)
- [Data Integrity Compliance for Pharma: A Practical Playbook](https://blog.qualitum.ai/data-integrity-compliance)

## FAQ
### What is a vendor audit in pharma?
A vendor audit, also called a supplier audit, is a documented, independent examination of a supplier's quality system to confirm it can meet your requirements. In pharma it covers GMP, GDP or GxP compliance, data integrity, change control and CAPA. It can be on-site, remote or a postal questionnaire, depending on the risk tier.

### How often should we audit a vendor?
It depends on risk. Guidance describes two to three years for established, lower-risk suppliers, with more frequent audits early in a relationship. Add for-cause audits when complaints, recalls or inspection findings suggest a problem.

### What documents should we request before the audit?
At minimum, request the GMP certificate, Site Master File, a 24-month CAPA summary, 12 months of change control logs and recent OOS or OOT summaries. For software vendors, add the SDLC description, release records and data integrity controls. Reviewing them first lets you spend the visit on the riskiest areas.

### Do we have to audit software vendors the same way as manufacturers?
The principle is the same but the evidence differs. You assess the vendor's development lifecycle, change management and data integrity controls, then scale your own validation to intended use. A satisfactory assessment is what supports reusing the supplier's documentation.
