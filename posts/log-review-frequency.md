---
title: Log Review Frequency in GxP: How Often to Review
date: 2026-11-04
description: No GxP regulation sets one log review frequency. Learn how to set, justify and document a risk-based schedule for audit trails and system logs.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1793586792029_QA-specialist-reviewing-a-pharmaceutical-machine-log.jpeg
coverAlt: QA specialist reviewing a pharmaceutical machine log
---

No GxP regulation gives you one number. The FDA does not prescribe a fixed frequency for reviewing audit trails. It expects you to follow the review timing already written into CGMP rules, such as reviewing data before batch release, and to set the rest through a documented, risk-based decision ([FDA Guidance for Industry, December 2018](https://www.fda.gov/media/119570/download)). In practice, the right frequency depends on which log you are reviewing, how critical the data is, and what could go wrong if a change went unnoticed.

This guide shows how to separate the logs that need review from the ones that do not, how to choose and defend a frequency, and how to document the result so it holds up in an inspection.

## TL;DR

- There is no universal interval. The FDA ties audit trail review to existing CGMP timing (for example, before batch release) and to risk assessment where the rules are silent.
- Review data audit trails (changes to GxP-relevant data). System logs such as logins or password resets generally need review only when a risk assessment says so.
- Set frequency from data criticality, control mechanisms and product quality impact, then write the rationale into a procedure.
- Document each review with a date, a signature and a positive statement of what was found.
- Supplement scheduled reviews with validated exception reports so abnormal events surface between cycles.

## Table of Contents

- [What the regulations actually say about frequency](#what-the-regulations-actually-say-about-frequency)
- [Which logs need review, and which do not](#which-logs-need-review-and-which-do-not)
- [How to set a risk-based review frequency](#how-to-set-a-risk-based-review-frequency)
- [What reviewers check and how to document it](#what-reviewers-check-and-how-to-document-it)
- [When event-triggered or continuous review should supplement the schedule](#when-event-triggered-or-continuous-review-should-supplement-the-schedule)
- [Handling exceptions and preparing for inspection](#handling-exceptions-and-preparing-for-inspection)
- [Our perspective](#our-perspective)
- [How Qualitum supports a risk-based review routine](#how-qualitum-supports-a-risk-based-review-routine)
- [Building the procedure: a short template](#building-the-procedure-a-short-template)
- [FAQ](#faq)
- [Sources](#sources)

## What the regulations actually say about frequency

The FDA's position is the anchor for US teams. Where a CGMP regulation already specifies when records are reviewed, such as before batch release or after a significant manufacturing step, the audit trail is reviewed on that same cadence. Where no frequency is specified, the agency recommends determining one through a risk assessment that weighs data criticality, control mechanisms and impact on product quality ([FDA, 2018](https://www.fda.gov/media/119570/download)). The same guidance compares audit trail review to checking cross-outs on a paper record, which is a useful way to explain the expectation to a skeptical process owner.

Other authorities use different words but land in the same place:

- **WHO (Annex 4, 2021):** GxP-relevant audit trails must be enabled at installation, stay enabled, and be periodically verified to confirm they keep working across the data life cycle. Review frequency should reflect system criticality (high or low impact) and the category of audit trail information, such as batch-specific, administrative or system activity ([WHO TRS 1033, Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)).
- **MHRA (2018):** Audit trail review should be documented as part of routine data review where risk assessment determines it, and it can be limited to GxP-relevant data ([MHRA GxP data integrity guidance](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)).
- **Health Canada (Annex 11 guidance, 2021):** Audit trails must be available, convertible to a generally intelligible form, and regularly reviewed ([Health Canada](https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/annex-11-guide-computerized-systems-gui-0050.html)).

Notice what is missing: a statement such as "weekly" or "monthly". "Regularly" and "periodically" are deliberately open, which puts the burden of justification on you. An inspector will not ask whether you picked the same interval as another site. They will ask why you picked yours and whether you followed it. For the wider regulatory picture, see how [regulatory expectations around FDA approval and RUO materials](https://shopwithcaileys.com/fda-approval-does-not-apply-ruo-material) show up in inspection signals.

## Which logs need review, and which do not

Most frequency debates go wrong because "log" covers very different records. Separate them first.

| Record type | What it captures | Review expectation |
|---|---|---|
| Data audit trail | Creation, modification and deletion of GxP-relevant data, with who, when and why | Reviewed as part of data review, on a risk-based or CGMP-defined cadence |
| System audit trail | Logins, configuration changes, password resets | Generally a security or technical log; routine review not required unless risk assessment says so |
| Security and infrastructure logs | Network, access and operating-system events | Handled under IT security monitoring, not GxP data review |

The distinction comes from [Pharmaceutical Engineering's March/April 2026 article on audit trail review](https://ispe.org/pharmaceutical-engineering/march-april-2026/audit-trail-review-regulation-and-practice-gxp): data audit trails support reconstruction of GxP activity, while system audit trails track system-level events. The MHRA says the same thing in its own terms, noting that it is not necessary to include every system activity, such as user log on and log off or keystrokes, in an audit trail review ([MHRA, 2018](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)).

### When routine review adds no value

The same Pharmaceutical Engineering piece makes a practical point: when a system activity is already controlled through effective change management or maintenance processes, routinely reviewing the matching system log entry does not add value. A configuration change that has an approved change record is already evidenced. Reading the log line again produces effort without new assurance.

There is also a flexibility worth knowing in API manufacturing. The APIC Data Integrity Best Practices Guide (2022) indicates that well-controlled system logs can serve as the audit trail where data are time-stamped and non-modifiable, provided a formal assessment supports the substitution ([APIC guide, April 2022](https://www.gmp-compliance.org/files/guidemgr/APIC_Data-Integrity-Best-Practices-Guide-for-API-Rev-2-Final-April-2022.pdf)). If you rely on that, the assessment is the evidence. Keep it with the validation file.

## How to set a risk-based review frequency

A defensible frequency is a short chain of reasoning, written down. Here is a workable sequence.

1. **Inventory the systems and the audit trail categories.** List each GxP system and split its trails into batch-specific data, administrative actions and system activity, the categories the WHO names.
2. **Rate data criticality.** Ask what decisions the data supports. Data that releases a batch, supports a stability conclusion or feeds a regulatory submission sits at the top.
3. **Assess the control mechanisms.** Role-based access, enforced workflows, change management and electronic signatures lower the chance of an undetected change. Weak controls raise the review burden.
4. **Assess product quality impact.** What happens to patient safety or product quality if a change was unauthorized and unseen?
5. **Anchor to existing CGMP timing.** If data are already reviewed before batch release, build the audit trail check into that same step rather than inventing a parallel one.
6. **Set the interval and the trigger.** Assign a scheduled cadence and name the events that trigger an extra review.
7. **Write it into a procedure.** The WHO expects a documented procedure for routine and periodic review and approval of data, including associated audit trails ([WHO Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)).

### A worked example

Take two systems at one site. A chromatography data system produces results that support batch release. Its data audit trail is reviewed by the second person as part of each batch record review, because release is the CGMP review point. A building management system logs temperature setpoint edits in a warehouse that stores only labeled, packaged goods. Its risk assessment rates data criticality as lower, with controls such as restricted access and change management, so the team reviews edits on a longer periodic cycle and relies on alarms between cycles.

![Comparison of batch and periodic log reviews](https://media.babylovegrowth.ai/blog-images/organization-48457/1793586872908_Comparison-of-batch-and-periodic-log-reviews.jpeg)

Those two systems have different frequencies, and both are defensible, because each decision traces to data criticality, controls and product impact. That is the pattern to copy. The interval itself is yours to choose, and the reasoning is what you defend.

## What reviewers check and how to document it

A review is only as good as the reviewer. The MHRA expects reviewers to have enough knowledge and system access to examine raw data, metadata and audit trails for anomalies or unauthorized changes, and to be appropriately trained ([MHRA, 2018](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)).

A practical checklist for each review:

- Changes to results, processing methods or specifications made after initial entry
- Deletions, or data that were repeated or re-processed without a documented reason
- Changes made outside normal working patterns or by users whose role does not cover the action
- Missing reasons for change where the system requires one
- Gaps in the sequence, such as sample runs with no matching record

### Documentation that stands up

The MHRA requires the review record to carry the date, the reviewer's signature and a positive statement of whether issues were found. A blank "reviewed" box does not meet that. The WHO adds that evidence of audit trail review must be maintained, and that conclusions, where required, are signed and dated ([WHO Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)).

If you want a deeper walk-through of what inspectors look for, our [audit trail review guide for QA teams](https://blog.qualitum.ai/audit-trail-review) covers the reviewer's workflow in more detail.

## When event-triggered or continuous review should supplement the schedule

A fixed schedule has a built-in blind spot: whatever happens between reviews. Exception reporting closes it. The MHRA describes two acceptable approaches: reviewing a list of relevant data, or using an exception reporting process in which a validated search tool identifies predetermined abnormal actions for the reviewer to investigate ([MHRA, 2018](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)).

Good candidates for exception rules:

- Result edits after approval
- Audit trail disabled or paused
- Deletion of any GxP record
- Privileged user activity on a production system
- Repeated failed injections or aborted runs followed by a passing run

The word "validated" matters. The filter that decides what a reviewer sees becomes part of your control, so it needs its own validation and change control. For a working model, see how [review by exception](https://blog.qualitum.ai/review-by-exception) packages evidence so reviewers spend time on what deviates.

Triggers for an unscheduled review typically include a data integrity deviation, a system upgrade or migration, a change in user roles, or a pending inspection. Name them in the procedure so that nobody has to improvise.

## Handling exceptions and preparing for inspection

Finding an anomaly is the point of the exercise. What you do next is what the inspector will read. The WHO says procedures should describe the actions to take for errors, discrepancies or omissions, with appropriate CAPA. Significant lapses should be investigated on a risk basis, and relevant authorities notified when significant impact or risk is identified ([WHO Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)).

A simple escalation path works well:

1. The reviewer records the finding and the affected records.
2. QA decides whether it is an error, a discrepancy or a potential integrity breach.
3. Significant findings go to a deviation and investigation, with impact on released product assessed.
4. CAPA is raised and tracked to closure.
5. The review record cross-references the deviation number.

Then keep the whole thread retrievable. Related reading on [continuous audit readiness](https://blog.qualitum.ai/continuous-audit-readiness) explains how to keep this evidence inspection-ready all year rather than assembling it the week before.

### Review frequency is not retention

Teams often mix up two separate questions. Review frequency depends on system criticality and audit trail category. Retention periods are defined separately, in authorized procedures ([WHO Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)). A trail that you review monthly may still need to be kept for the life of the record. Keep the two decisions in separate sections of your procedure so a change to one does not silently alter the other.

## Our perspective

> Most review schedules we see fail for the same reason: they were set once, on a spreadsheet, and then performed by people who already had a full day. The interval looks fine on paper. In practice, the review shrinks to a glance and a signature.
>
> We think the better answer is to change how the work gets done, not to lower the standard. When every record is ALCOA+ checked at write-time and again at review-time, the reviewer starts from evidence that has already been screened for attribution, completeness and consistency. Human signatures stay authoritative. The agents do the sorting and the cross-checking, and the person decides.
>
> That is why we build Qualitum as a privately deployed, LLM-agnostic platform with zero data egress. Audit trail review is a quiet tax on validation and QA teams, and a fire drill before an audit. A live traceability matrix and exception-first review turn it into a routine that runs every day instead.
>
> Frequency still has to be justified by risk. What changes is how cheaply you can afford to look.
>
> *Matt*

## How Qualitum supports a risk-based review routine

If your team spends more time assembling review evidence than judging it, Qualitum's [Validate·AI and Operate·AI](https://qualitum.ai/platform) are designed to author validation records and keep them ALCOA+ checked, with traceability and audit preparedness built in. Integration with existing quality management systems means reviews run where your records already live.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

We start most customers with a paid pilot, so you can test the approach on one system before committing to a wider rollout. Learn how to [start with a pilot](https://qualitum.ai), or look at our [AI Trace Agent](https://qualitum.ai/agents/trace) to see how a live trace graph flags every change.

## Building the procedure: a short template

A review procedure that survives inspection usually contains the same ten elements. Use this as a checklist when you draft or revise yours, and compare it with the [seven audit trail design elements](https://blog.qualitum.ai/audit-trail-design) that make the review easier to perform in the first place.

- **Scope:** the systems and the audit trail categories covered, and the ones excluded with the reason
- **Roles:** who reviews, who approves, and the training required
- **Frequency:** the scheduled cadence per system, linked to the risk assessment
- **Triggers:** events that require an unscheduled review
- **Method:** full list review or validated exception report
- **Checklist:** what the reviewer looks for
- **Record:** date, signature and a positive statement of findings
- **Escalation:** the path to deviation and CAPA
- **Verification:** periodic confirmation that the audit trail remains enabled and functional
- **Retention:** a pointer to the retention procedure, kept separate

Revisit the risk assessment when the system changes, when a deviation exposes a gap, or when an inspection comment points at your approach. A frequency that never changes in five years is usually a frequency nobody is questioning.

## FAQ

### How often should audit trails be reviewed in GxP?

There is no single required interval. The FDA expects review at the points CGMP regulations already set, such as before batch release, and a risk-based frequency elsewhere. Base your choice on data criticality, controls and product quality impact, and document the reasoning.

### Do I need to review every system log entry?

No. Data audit trails that record changes to GxP-relevant data require review. System logs of logins or password resets are generally treated as security or technical logs, reviewed only if your risk assessment calls for it. The MHRA states that user log on and log off do not have to be part of the review.

### What should a review record contain?

It should carry the review date, the reviewer's signature and a positive statement of whether issues were found. Keep evidence of the review, and document and sign conclusions where they are required.

### Can exception reporting replace scheduled reviews?

It can be the method of review, not a way to skip review. The MHRA accepts reviewing a list of relevant data or using a validated search tool that flags predetermined abnormal actions. Validate the tool, and keep scheduled cycles with exception reports covering the time between them.

## Sources

- [FDA, Data Integrity and Compliance With Drug CGMP: Guidance for Industry (2018)](https://www.fda.gov/media/119570/download)
- [WHO TRS 1033, Annex 4: Guideline on data integrity (2021)](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)
- [MHRA, GxP Data Integrity Guidance and Definitions (2018)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)
- [Health Canada, Annex 11 to the GMP guide: computerized systems (2021)](https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/annex-11-guide-computerized-systems-gui-0050.html)
- [Pharmaceutical Engineering, Audit Trail Review: Regulation and Practice in GxP (March/April 2026)](https://ispe.org/pharmaceutical-engineering/march-april-2026/audit-trail-review-regulation-and-practice-gxp)
- [APIC, Data Integrity Best Practices Guide for APIs (April 2022)](https://www.gmp-compliance.org/files/guidemgr/APIC_Data-Integrity-Best-Practices-Guide-for-API-Rev-2-Final-April-2022.pdf)

## Recommended

- [Continuous Audit Readiness in GxP: A Practical Guide](https://blog.qualitum.ai/continuous-audit-readiness)
- [GxP Document Control: 30, 90, and 180 Day Audit Ready Plan for QA](https://blog.qualitum.ai/gxp-document-control)
- [Pass Inspections: GxP Audit Trail Design for Procurement, 7 Elements](https://blog.qualitum.ai/audit-trail-design)
- [Audit First Review by Exception for Pharma QA: ALCOA+ Packets](https://blog.qualitum.ai/review-by-exception)

## FAQ
### How often should audit trails be reviewed in GxP?
There is no single required interval. The FDA expects review at the points CGMP regulations already set, such as before batch release, and a risk-based frequency elsewhere. Base your choice on data criticality, controls and product quality impact, and document the reasoning.

### Do I need to review every system log entry?
No. Data audit trails that record changes to GxP-relevant data require review. System logs of logins or password resets are generally treated as security or technical logs, reviewed only if your risk assessment calls for it. The MHRA states that user log on and log off do not have to be part of the review.

### What should a review record contain?
It should carry the review date, the reviewer's signature and a positive statement of whether issues were found. Keep evidence of the review, and document and sign conclusions where they are required.

### Can exception reporting replace scheduled reviews?
It can be the method of review, not a way to skip review. The MHRA accepts reviewing a list of relevant data or using a validated search tool that flags predetermined abnormal actions. Validate the tool, and keep scheduled cycles with exception reports covering the time between them.
