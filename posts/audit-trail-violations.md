---
title: Audit Trail Violations in GxP: What They Are and How to Prevent Them
date: 2026-11-13
description: What counts as an audit trail violation in GxP systems, which failures draw FDA and WHO findings, and how to detect, fix and prevent them before an inspection.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1794411075290_Quality-specialist-reviewing-a-pharma-audit-trail.jpeg
coverAlt: Quality specialist reviewing a pharma audit trail
---

An audit trail violation is any failure to keep a secure, attributable, time-stamped record of who created, changed or deleted GxP data, and why. The usual causes are trails that are switched off, never reviewed, shared logins, or users who can overwrite the original. The fix is not more paperwork after the fact. Evidence has to be checked as it is written and again as it is reviewed. That is the approach we built Qualitum around: every record is ALCOA+ checked at write-time and review-time.

This guide covers what regulators mean by a violation, the failures that recur in inspections, what a trail must capture, what enforcement can look like, and how to find problems before an inspector does.

## TL;DR

- A violation is a missing, disabled, incomplete, overwritten or unreviewed audit trail, not only a deliberate falsification.
- The recurring findings are inactive trails, shared or administrator logins, deletable data, changed timestamps and no review of electronic raw data.
- Review critical trails before the decision they support, such as batch release, and keep a signed record of the review.
- When you find a violation, apply short-term risk controls, run CAPA across every affected system and tell management what residual risk remains.
- Write-time checks are cheaper than finding gaps at review time, and far cheaper than finding them during an inspection.

## Table of Contents

- [What counts as an audit trail violation](#what-counts-as-an-audit-trail-violation)
- [The failures inspectors find again and again](#the-failures-inspectors-find-again-and-again)
- [What an audit trail must capture](#what-an-audit-trail-must-capture)
- [What a violation can cost](#what-a-violation-can-cost)
- [How to detect violations before an inspector does](#how-to-detect-violations-before-an-inspector-does)
- [What to do when you find a violation](#what-to-do-when-you-find-a-violation)
- [Keeping audit trail controls validated](#keeping-audit-trail-controls-validated)
- [Our perspective](#our-perspective)
- [Qualitum for validation teams under audit pressure](#qualitum-for-validation-teams-under-audit-pressure)
- [FAQ](#faq)
- [Sources](#sources)

## What counts as an audit trail violation

Regulators do not publish a single list titled "violations". They define what a trail must do, and a violation is a failure to meet that definition.

FDA's 2018 data integrity guidance describes an audit trail as a [secure, computer-generated, time-stamped electronic record](https://www.fda.gov/media/119570/download) that lets you reconstruct events involving the creation, modification or deletion of an electronic record. The UK regulator MHRA adds that a [GxP audit trail records creations, additions, deletions and alterations](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf) without obscuring or overwriting the original, so you can reconstruct who, what, when and why.

Read those definitions backwards and the violations follow:

- **Changes or deletions not retained.** The MHRA guide treats failure to keep changes to or deletions of data, while preserving the previous and original data, as a breach.
- **Shared or generic logins.** WHO's 2021 data integrity guideline says [shared or generic logins should not be used](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf) on systems that generate, amend or store GxP data. Individual access is expected, which is what makes an entry attributable.
- **Trail disabled or editable.** The same WHO guideline expects GxP-relevant trails to be enabled when software is installed, to stay enabled and to be periodically verified across the data life cycle.
- **No review.** A trail nobody reads proves nothing. MHRA expects a documented, risk-based review of relevant trails and metadata.

The common thread is ALCOA+. WHO describes it as data that is attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring and available throughout the retention period. An audit trail is the evidence that those attributes held for a given record. If you want each principle explained in practice, our guide to [what each ALCOA+ principle requires](https://blog.qualitum.ai/alcoa-compliance) goes through them one by one.

## The failures inspectors find again and again

The same patterns show up across agencies and years. A professional review of FDA enforcement by FDLI lists [inactive or unreviewed trails, analysts able to delete or modify data, trial injections and aborted runs, changed timestamps, inadequate backup and retention, and review of printed chromatograms without the underlying electronic data](https://www.fdli.org/2018/04/update-fda-data-integrity-enforcement-trends-practical-mitigation-measures/).

Other regulators see the same things:

- A WHO prequalification inspection-trends presentation gives as major-observation examples [an absent data integrity policy or risk assessment, unlocked instrument date and time, shared administrator passwords, analyst privileges to integrate or delete files, and no audit trail review before API batch release](https://extranet.who.int/prequal/sites/default/files/document_files/2-day2_session6_inspectiontrends_api-fpp-manufacturers.pdf).
- A 2016 presentation from Italy's medicines agency AIFA on recurrent FDA deviations lists [trial injections, deleted or overwritten chromatographic analyses, changed computer clocks, use of administrator passwords by analysts, inactive trails and missing trail review](https://www.aifa.gov.it/sites/default/files/2016-05-25_FDA_inspection_technique.pdf).

It is rarely one dramatic act. A review in the PDA Journal examined 65 regulatory-action cases from 2002 through 2014 and concluded that [human factors are a potential source of GxP data integrity problems](https://journal.pda.org/content/69/6/762), which is why remedial controls are needed. In practice the gap is often a system configured with a convenient privilege, a review step that exists in the SOP but not in the schedule, or an analyst who can re-process without leaving a trail.

Laboratory data are a typical place where this bites. Reproducible [assay data analysis](https://mayflowerbio.com/how-to-analyze-assay-data-for-accurate-results) depends on the raw results staying intact and traceable, which is exactly what an inspector tests when comparing a reported result against the electronic record.

### Why these failures survive internal checks

Three reasons explain most of them. First, trails are reviewed as an IT exercise rather than as part of a quality decision. Second, the review happens at the end, after the data have been used. Third, validation covered the happy path and never tested whether a user could turn the trail off. Each of these is a process design problem, which means each can be designed out.

![Three causes of audit trail review failures](https://media.babylovegrowth.ai/blog-images/organization-48457/1794411158691_Three-causes-of-audit-trail-review-failures.jpeg)

## What an audit trail must capture

A trail that records a change but not the reason, the original value or the person is incomplete, and incomplete is a violation. The research gives a consistent picture across agencies.

| Element | What the guidance expects | Source |
|---|---|---|
| User | Individual, identifiable user, no shared logins | [WHO 2021](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf) |
| Date and time | Recorded for every action, not editable by the user | WHO 2021, MHRA 2018 |
| Original and new values | Original data preserved, changes shown | [MHRA 2018](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf) |
| Reason for change | Recorded where required | WHO 2021, [PIC/S 2021](https://ecompliance.jp/wp-content/uploads/2022/10/GOOD-PRACTICES-FOR-DATA-MANAGEMENT-AND-INTEGRITY_J.pdf) |
| Authorizer | Recorded where applicable | PIC/S 2021 |
| Trail status | Enabling or disabling of the trail is itself recorded | WHO 2021 |
| Retention | Data and metadata kept for the whole retention period | [FDA 2018](https://www.fda.gov/media/119570/download) |

EU rules point the same way. The ECA's summary of EU GMP Annex 11 says trails must be [available, convertible into an intelligible form and regularly reviewed](https://www.gmp-compliance.org/gmp-news/audit-trail-review-required-before-each-batch-release), and it links batch-release records to checking whether data changed after original entry.

If you are specifying a system, we have a practical breakdown in [GxP audit trail design for procurement](https://blog.qualitum.ai/audit-trail-design) and a longer look at [what regulators expect from ALCOA+ audit trails](https://blog.qualitum.ai/alcoa-audit-trails). The five fields validation teams should test at the moment of writing are covered in [write-time ALCOA+ checks](https://blog.qualitum.ai/write-time-alcoa).

## What a violation can cost

The consequences scale with severity, and a finding on data integrity undermines trust in every other record the site produces.

FDA's 2019 announcement about a Chinese manufacturer, Ningbo Huize, shows the chain. Investigators received falsified cleaning-validation reports, batch records and purported periodic-review records. FDA treated the products as adulterated and misbranded. The outcome included [an import alert, a voluntary recall and a 15-working-day response requirement](https://www.fda.gov/news-events/press-announcements/fda-warns-company-putting-consumers-risk-drug-manufacturing-data-integrity-violations), and FDA said failure to correct the violations might lead it to keep refusing admission of products from the facility.

Notice what the finding rested on: records that could not be trusted. Once an inspector cannot trust one set of records, the review widens to the validation packages, the periodic reviews and the batch records that depend on them. For a site selling into the US, that is the real exposure.

## How to detect violations before an inspector does

The guidance converges on a handful of habits. Together they form a review routine you can run on a schedule.

1. **Confirm the trail is on and locked.** MHRA expects risk-required trails to be enabled, with users unable to amend or switch them off, or with a record of administrator actions where that is not possible.
2. **Enforce individual accounts and controlled privileges.** Check who holds administrator rights, and whether any analyst can delete, integrate or re-process data.
3. **Review critical trails before the decision.** PIC/S says critical trails should be [independently reviewed with related records before the operation is completed](https://ecompliance.jp/wp-content/uploads/2022/10/GOOD-PRACTICES-FOR-DATA-MANAGEMENT-AND-INTEGRITY_J.pdf), for example before batch release. It frames this as part of operational disposition, not a detached IT task.
4. **Use validated exception reporting.** MHRA describes exception reports as a way to spot abnormal activity so reviewers do not read every line.
5. **Add independent QA and periodic functionality reviews.** A Japanese PDA committee paper describes [batch-level QC and QA review, periodic independent QA review and periodic review of trail functionality](https://www.jstage.jst.go.jp/article/pda/24/1/24_10/_supplement/_download/24_10_3.pdf), with detected tampering or improper changes entering deviation management.
6. **Trend the exceptions.** Repeated overrides on one instrument or by one role are a signal worth more than any single entry.
7. **Document the review.** MHRA says a data-review record should state whether issues were found, carry the review date and reviewer signature, and define actions when errors or omissions are identified.

WHO adds that data should be regularly reviewed for ALCOA+ consistency through routine work, system and facility audits and self-inspections, with effort proportional to the risk and impact of failure. The Institute of Internal Auditors' continuous-auditing guidance supports the same logic: [monitoring frequency should reflect risk, process cycle and management oversight](https://www.theiia.org/globalassets/documents/content/articles/guidance/gtag/gtag-3-continuous-auditing/gtag-3-continuous-auditing-2nd-edition.pdf), and exceptions should be tracked through corrective action.

### Where manual review breaks down

A reviewer reading exported logs for a critical system faces thousands of lines, in a format the system chose rather than the reviewer. Review quality drops as volume rises, and the review record becomes a signature on a page nobody could fully read. This is where automated checks earn their place. Our [executed protocol and evidence review](https://qualitum.ai/use-cases/evidence-review) use case reviews every executed test before QA sees it, and our [AI Gap Agent](https://qualitum.ai/agents/gap) is built to find gaps before the auditor does. A [live trace agent](https://qualitum.ai/agents/trace) flags every change to the traceability graph.

## What to do when you find a violation

Finding one is not the failure. Leaving it undocumented is. MHRA's guidance gives the order of operations:

1. **Contain the risk now.** Apply short-term, risk-reducing measures while long-term remediation is underway: restrict privileges, enable the trail, add manual second-person verification.
2. **Document priorities and residual risk.** Remediation priorities and residual-risk acceptance are communicated to management and kept under review.
3. **Assess the impact.** Which records, batches, studies or validation packages depended on the affected data?
4. **Open a deviation and implement CAPA.** Apply CAPA across all relevant activities and systems, not just the one where it surfaced. A shared password on one instrument usually means the same practice elsewhere.
5. **Verify the fix.** Re-review the trail after the correction, and trend the result.

The fifth point matters because an inspector will ask not only what you fixed but how you know it stayed fixed.

## Keeping audit trail controls validated

Ongoing audit readiness comes from validating the controls, not just the software. MHRA says complex systems should be validated for their intended purpose, with risk-required trails enabled and protected, and relevant events reviewed periodically using risk-based controls.

In practice that means your validation protocols should include negative tests: can a standard user disable the trail, change the clock, delete a result, or re-process without a recorded reason? Test the failure, not just the function. Our guides on [data integrity compliance for pharma](https://blog.qualitum.ai/data-integrity-compliance) and [static vs dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) cover why dynamic records need their metadata kept alive to be reconstructable. For LIMS specifically, see our notes on [FDA CSA LIMS validation](https://blog.qualitum.ai/lims-validation-pharma). If your document system is the weak point, the [30, 90 and 180 day plan for GxP document control](https://blog.qualitum.ai/gxp-document-control) lays out a sequence.

![Keeping audit trail controls validated](https://media.babylovegrowth.ai/blog-images/organization-48457/1794411136755_Keeping-audit-trail-controls-validated.jpeg)

AI-enabled systems add a layer. If an agent drafts or reviews a record, its actions need the same attribution as a person's; we cover this in [AI audit trails for regulated AI](https://blog.qualitum.ai/ai-audit-trail-compliance).

## Our perspective

> Most audit trail violations we read about are not conspiracies. They are the quiet tax of documentation done by hand: a log reviewed late, a privilege granted for convenience, a signature on something no one could fully read.
>
> Our view is that the trail should be checked when the record is written, not discovered to be broken months later. That is why every record in our platform is ALCOA+ checked at write-time and review-time, and why human signatures remain authoritative. Agents do the drafting and the checking. People decide.
>
> We also deploy privately inside the customer's infrastructure, with zero data egress and customer-managed encryption, because evidence about your validated state should not leave your control. Validation teams can then spend their time on judgment: risk, deviations and sign-off.
>
> The fire drill before an audit is optional. A live traceability matrix and continuous review make it unnecessary.
>
> *Matt*

## Qualitum for validation teams under audit pressure

Qualitum is an automated validation and compliance platform for pharmaceutical, biotech and medical device companies. [Validate·AI and Operate·AI](https://qualitum.ai/platform) cover agent-authored validation lifecycle work (URS, FS, DQ, IQ, OQ, PQ, CSV/CSA), a live traceability matrix, audit preparedness, deviation and CAPA handling, and data integrity enforcement with ALCOA+ checks. It integrates with major quality management systems and is built for out-of-the-box alignment with GxP, Annex 11 and 21 CFR Part 11. Teams typically start with a paid [pilot](https://qualitum.ai) before a wider rollout.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

If audit trail review is the bottleneck in your validation cycle, a pilot on one system is the practical way to see the write-time and review-time checks on your own records.

## FAQ

### What is the penalty for not maintaining an audit trail?

It depends on the regulator and the severity. In the Ningbo Huize case, FDA cited adulteration and misbranding, issued an import alert, noted a voluntary recall and set a 15-working-day response window. Failing to correct violations can lead FDA to keep refusing admission of the facility's products.

### What constitutes an audit trail?

A secure, computer-generated, time-stamped record that reconstructs the creation, modification or deletion of an electronic record, without obscuring the original. WHO expects it to show the user, date and time, original data, changes, and reasons where required, and to record when the trail itself is enabled or disabled.

### What does an audit trail report show you?

It shows who did what to a record and when, with old and new values and the reason for change where applicable. PIC/S also expects the authorizer where applicable. A useful report lets a reviewer spot abnormal activity quickly, which is why validated exception reporting is recommended.

### How often should audit trails be reviewed?

As often as the risk demands. Critical trails should be reviewed before the related decision, such as batch release, and the trail functionality itself should be verified periodically. Frequency should be proportional to the risk and impact of failure, and each review should be recorded with a date and signature.

## Sources

- [MHRA GxP data integrity guidance, March 2018](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)
- [FDA Data Integrity and Compliance With Drug CGMP guidance, December 2018](https://www.fda.gov/media/119570/download)
- [WHO Annex 4, guideline on data integrity, 2021](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)
- [FDLI, FDA data integrity enforcement trends](https://www.fdli.org/2018/04/update-fda-data-integrity-enforcement-trends-practical-mitigation-measures/)
- [WHO prequalification, inspection trends of API and FPP manufacturing sites](https://extranet.who.int/prequal/sites/default/files/document_files/2-day2_session6_inspectiontrends_api-fpp-manufacturers.pdf)
- [AIFA, FDA inspection technique and recurrent deviations, 2016](https://www.aifa.gov.it/sites/default/files/2016-05-25_FDA_inspection_technique.pdf)
- [PDA Journal, Data Integrity: A Study of Current Regulatory Thinking](https://journal.pda.org/content/69/6/762)
- [PIC/S good practices for data management and integrity, 2021](https://ecompliance.jp/wp-content/uploads/2022/10/GOOD-PRACTICES-FOR-DATA-MANAGEMENT-AND-INTEGRITY_J.pdf)
- [ECA, audit trail review before each batch release](https://www.gmp-compliance.org/gmp-news/audit-trail-review-required-before-each-batch-release)
- [Japan PDA, audit trail review paper, December 2021](https://www.jstage.jst.go.jp/article/pda/24/1/24_10/_supplement/_download/24_10_3.pdf)
- [FDA press announcement on drug manufacturing data integrity violations, 2019](https://www.fda.gov/news-events/press-announcements/fda-warns-company-putting-consumers-risk-drug-manufacturing-data-integrity-violations)
- [IIA GTAG 3, Continuous Auditing](https://www.theiia.org/globalassets/documents/content/articles/guidance/gtag/gtag-3-continuous-auditing/gtag-3-continuous-auditing-2nd-edition.pdf)

## Recommended

- [Audit Trail Management: Four Layer Architecture for Regulated Teams](https://blog.qualitum.ai/audit-trail-management)
- [Audit Trail Review: Inspection-Ready Guide for QA Teams](https://blog.qualitum.ai/audit-trail-review)
- [ALCOA+ Audit Trails: What Regulators Expect and How to Build Them](https://blog.qualitum.ai/alcoa-audit-trails)
- [Log Review Frequency in GxP: How Often to Review](https://blog.qualitum.ai/log-review-frequency)

## FAQ
### What is the penalty for not maintaining an audit trail?
It depends on the regulator and the severity. In the Ningbo Huize case, FDA cited adulteration and misbranding, issued an import alert, noted a voluntary recall and set a 15-working-day response window. Failing to correct violations can lead FDA to keep refusing admission of the facility's products.

### What constitutes an audit trail?
A secure, computer-generated, time-stamped record that reconstructs the creation, modification or deletion of an electronic record, without obscuring the original. WHO expects it to show the user, date and time, original data, changes, and reasons where required, and to record when the trail itself is enabled or disabled.

### What does an audit trail report show you?
It shows who did what to a record and when, with old and new values and the reason for change where applicable. PIC/S also expects the authorizer where applicable. A useful report lets a reviewer spot abnormal activity quickly, which is why validated exception reporting is recommended.

### How often should audit trails be reviewed?
As often as the risk demands. Critical trails should be reviewed before the related decision, such as batch release, and the trail functionality itself should be verified periodically. Frequency should be proportional to the risk and impact of failure, and each review should be recorded with a date and signature.
