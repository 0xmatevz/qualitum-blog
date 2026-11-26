---
title: Backup Validation Records for GxP Systems: What to Capture
date: 2026-11-26
description: What a GxP backup validation record must contain, how to test restores, and how to keep the evidence audit-ready without duplicating your validation package.
author: Qualitum
cover: https://media.ai-fast-cdn.com/blog-images/organization-48457/1795546872478_Isolated-pharma-system-restore-test-station.jpeg
coverAlt: Isolated pharma system restore test station
---

A backup validation record is the documented proof that your backup process works and that data can be restored complete, readable and usable. A green "job succeeded" log is not that proof. Inspectors want a record that ties the backup design to a requirement, shows an executed restore, and carries a reviewer's signature. Qualitum's agent-authored validation platform is built to produce this kind of record, with every entry ALCOA+ checked at write-time and review-time.

## TL;DR

- A backup record has two parts: verification that each backup ran correctly, and a restore test that proves the data is recoverable and accessible.
- Annex 11 expects restore tests during system validation and after any change to backup or restore processes, documented and risk-based.
- Evidence means executed test scripts, screenshots where relevant, and test cases traceable to requirements.
- Failed restores need a deviation, a documented correction that preserves the original record, and a retest.
- Authoring these records by hand is a recurring burden that automated, traceable authoring removes.

## Table of Contents

- [What a backup validation record is](#what-a-backup-validation-record-is)
- [What the regulators ask for](#what-the-regulators-ask-for)
- [Why inspectors keep finding the same gap](#why-inspectors-keep-finding-the-same-gap)
- [What a defensible record contains](#what-a-defensible-record-contains)
- [A worked example](#a-worked-example)
- [How often to test](#how-often-to-test)
- [When a restore fails](#when-a-restore-fails)
- [Keeping the record audit-ready without duplication](#keeping-the-record-audit-ready-without-duplication)
- [Where the effort goes, and how Qualitum takes it off your hands](#where-the-effort-goes-and-how-qualitum-takes-it-off-your-hands)
- [Our perspective](#our-perspective)
- [FAQ](#faq)
- [Sources](#sources)

## What a backup validation record is

Three things are often blurred together.

**Backup-job verification** shows a single backup completed. The UK MHRA's [GxP data integrity guidance](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA%5FGxP%5Fdata%5Fintegrity%5Fguide%5FMarch%5Fedited%5FFinal.pdf) (March 2018) defines a backup as a copy of current, editable data, metadata and system configuration settings kept for recovery. It says each backup should be verified, for example by confirming that the data size transferred matches the original.

**Restore testing** shows the copy can be turned back into a working dataset. Job verification proves the copy ran. The restore test proves recoverability.

**The backup validation record** is the controlled document set that holds the design, the acceptance criteria, the executed evidence, the review and any deviations. It is the thing an inspector reads.

The record also has a boundary. The MHRA guidance notes that recovery backups do not replace long-term retention of data and metadata in final form. FDA's [Data Integrity Q&A guidance](https://www.fda.gov/media/119570/download) (December 2018) explains that under 21 CFR 211.68(b) a backup is a true copy of the original record, exact, complete and secure from alteration or loss, with associated metadata. Temporary copies made for a crash do not meet it.

## What the regulators ask for

The requirements are consistent across jurisdictions, even when the wording differs.

| Source | What it says about backup records |
|---|---|
| [EU GMP Annex 11](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=), 16.6 | Restore from backup is tested and documented, risk-based, during validation and after changes to backup or restore processes. Documentation includes verification that data is accessible. |
| Annex 11, 9.4 and 9.6 | Evidence is executed test scripts and, where relevant, screen dumps. Restore from backup is listed among data integrity functions to test. |
| [Health Canada GUI-0050](https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/annex-11-guide-computerized-systems-gui-0050.html) (2021), 4.7 | Integrity, accuracy and restorability are checked during validation and monitored periodically. Stored data is checked for accessibility, readability and accuracy. |
| [FDA clinical trial systems guidance](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/fda-bioresearch-monitoring-information/guidance-industry-computerized-systems-used-clinical-trials) (April 1999) | Backup and recovery logs are maintained to assess the nature and scope of any data loss. |

If you work in the US, the same expectations reach you through 21 CFR 211.68(b) and through partners and inspectors who work to Annex 11. Our guide to [MHRA data integrity for US teams](https://blog.qualitum.ai/mhra-data-integrity) explains how these frameworks line up.

## Why inspectors keep finding the same gap

The Danish Medicines Agency's [January 2024 presentation](https://laegemiddelstyrelsen.dk/da/godkendelse/kontrol-og-inspektion/inspektion-af-godkendte-laegemiddelvirksomheder/krav-til-it-systemer-i-gxp/~/media/6EC03244BC3C40C9A461AFF4FC255326.ashx) on GxP IT inspections reported that in the majority of cases, organizations could not prove they had ever tested restoring complete system data from backup. It also reported retention as short as 7 days and backups that were not physically or logically separated from the system, with data loss as a result.

None of those are exotic failures. They are missing records. The backup may well have worked, but without a signed, executed restore test nobody can demonstrate it.

## What a defensible record contains

Annex 11 requires test cases to be traceable to requirements or specifications (9.5) and evidence to take the form of executed scripts (9.4). Translated into a backup record, that means:

1. **Requirement link.** The user or functional requirement that the backup meets, such as frequency, retention, and separation from the source server.
2. **Backup design.** Annex 11 (16.2) asks for backups at suitable intervals, such as hourly, daily, weekly or monthly, with retention set by risk. Sections 16.3 and 16.4 require physical separation from the original data server and no storage on the same logical network. Record your chosen values and the rationale.
3. **Scope and risk rationale.** Which data, metadata and configuration settings are covered, and why the test depth is appropriate (Annex 11, 9.2).
4. **Acceptance criteria written before execution.** Examples: record counts match, audit trail is present and intact, data opens in the application, and a named sample of records is accessible.
5. **Executed steps with results.** Who ran the test, when, on which system and version, what was restored, and what was observed. Include screenshots where relevant.
6. **Verification that data is accessible.** Annex 11 names this explicitly for restore tests.
7. **Review and signature.** The MHRA guidance asks for a record of data review with a positive statement on whether issues were found, the date and the reviewer's signature.
8. **Deviations and retest.** Covered below.

For how screenshots should be handled as evidence, see our checklist of [ALCOA+ checks for screenshot evidence](https://blog.qualitum.ai/screenshot-evidence-policy).

## A worked example

Take a laboratory information system with a nightly backup to a separate site.

During validation, the team writes an OQ test: restore last night's backup into an isolated environment, then confirm the record count of a defined study table matches the source, open ten named records, and confirm their audit trails are intact. The acceptance criteria are written first. The test is executed, screenshots are attached, and the tester signs. A reviewer checks the evidence against the criteria and signs a statement that no issues were found.

The record links back to the requirement "data must be recoverable within the retention period" and forward to the backup SOP. When the backup tool is upgraded later, a change assessment decides whether the restore test is repeated. That is the traceability an auditor follows in either direction.

To see how the team handles related operational evidence, our article on [backup and restore validation for auditors](https://blog.qualitum.ai/backup-restore-validation) goes deeper on this scenario.

![A worked example](https://media.ai-fast-cdn.com/blog-images/organization-48457/1795546935684_A-worked-example.jpeg)

## How often to test

Annex 11 ties restore testing to validation and to changes in backup or restore processes and tools, based on risk. Health Canada adds that restorability should be monitored periodically. The 2022 Annex 11 revision concept paper, as cited by the Danish agency, says testing restorability is critically important but that a required periodic check is not considered necessary when backup and restore processes are unchanged.

A practical reading for most teams:

- Restore test during initial validation.
- Restore test after any change to backup software, storage, schedule, encryption or the system itself.
- A periodic check on a risk-based schedule, defined in your SOP, so the monitoring Health Canada describes is demonstrable.

Write the schedule and its rationale down. The justification is part of the record.

## When a restore fails

A failed restore is a finding you control, as long as you document it well.

1. **Record the failure as executed.** Do not overwrite or discard the failed run. The MHRA guidance asks that corrections follow ALCOA principles, keeping the original visible and the correction traceable.
2. **Raise a deviation.** Health Canada expects validation documentation to include change control records where applicable and reports on deviations.
3. **Assess impact.** Determine whether data was at risk, and for how long. The FDA clinical systems guidance points to recovery logs for assessing the nature and scope of loss.
4. **Correct and retest.** Fix the cause, then execute the test again against the same acceptance criteria.
5. **Conditional release.** Annex 11 allows conditional approval only with a documented assessment that the open deficiencies do not affect product quality, patient safety or data integrity, plus close follow-up.

## Keeping the record audit-ready without duplication

Backup evidence should not become a parallel universe of documents. Annex 11 (9.1) says validation should follow Annex 15 principles, and it lists the adequacy of backup procedures, restore tests and disaster recovery plans among operational controls to be assessed. Archived data on a server must be backed up by the same procedures as live data, with physical and logical separation (17.3).

So keep one source of truth: the requirement in the URS, the test in the qualification protocol, the result in the executed protocol, and a link to the SOP. Where a vendor or hosting provider performs the backup, the MHRA guidance asks that review responsibilities be documented and agreed by both parties, and that you evaluate the provider's data integrity controls before relying on its reports.

Two related topics sit nearby. Archived data raises long-term readability, which ISPE's [2023 comments to EMA](https://ispewebassets.org/files/regulatory/ISPE-Commenting/2023/ISPE%20Comments%20on%20EMA_INS_GMP_778340.pdf) address, proposing defined and verified archival and retention processes. And the distinction between records that must stay in original form and those that can be reconstructed is explained in [static vs dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data).

![Keeping the record audit-ready without duplication](https://media.ai-fast-cdn.com/blog-images/organization-48457/1795546958090_Keeping-the-record-audit-ready-without-duplication.jpeg)

## Where the effort goes, and how Qualitum takes it off your hands

The test itself is short. The effort is in authoring the protocol, tracing it to requirements, collecting evidence, checking it against ALCOA+ and rebuilding the trail when a system changes. That is the manual documentation burden Qualitum is designed to remove.

Validate·AI and Operate·AI on the [Qualitum platform](https://qualitum.ai/platform) use a multi-agent system to author the validation lifecycle, with every record ALCOA+ checked at write-time and review-time. A live traceability matrix keeps requirements, tests and results connected, and human signatures remain authoritative. Qualitum reports over 70% time savings in authoring. The platform integrates with existing quality management systems and deploys privately within your infrastructure.

If you want to see it on one of your own systems, a paid [pilot](https://qualitum.ai) is the starting point.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

For the evidence side, the [executed protocol and evidence review](https://qualitum.ai/use-cases/evidence-review) use case describes how each executed test is reviewed before QA sees it.

## Our perspective

> Backup records are a quiet tax. Nobody argues the restore test is unnecessary, yet it is written late, executed once and filed where it is hard to find. Then an inspector asks for it.
>
> We think the fix is structural, not heroic. If requirements, protocols, evidence and review live in one traceable chain, the backup record is a by-product of normal validation rather than a fire drill before an audit.
>
> That is why every record in our platform is ALCOA+ checked when it is written and again when it is reviewed, and why signatures stay with your people. The agents draft and check. Your team decides.
>
> *Matt*

## FAQ

### Is a successful backup log enough as a validation record?

No. It shows one job completed, which the MHRA guidance asks you to verify for each backup. Annex 11 also expects a documented restore test showing the data is accessible, performed during validation and after relevant changes.

### How long should backups be retained?

Annex 11 (16.2) says retention is determined by a risk-based approach, with examples ranging from a week to years. The Danish inspection findings included retention as low as 7 days, so document your rationale against the data's retention requirements.

### Do backups replace long-term archives?

No. The MHRA guidance states that recovery backups do not replace long-term retention of data and metadata in final form. FDA likewise says temporary copies do not satisfy 21 CFR 211.68(b).

### Who signs the record?

The tester signs the executed steps and an independent reviewer signs the review, including a positive statement on whether issues were found and the date. Qualitum keeps human signatures authoritative.

## Sources

- [MHRA GxP Data Integrity Guidance, March 2018](https://assets.publishing.service.gov.uk/media/5aa2b9ede5274a3e391e37f3/MHRA%5FGxP%5Fdata%5Fintegrity%5Fguide%5FMarch%5Fedited%5FFinal.pdf)
- [FDA Data Integrity and Compliance With Drug CGMP Q&A, December 2018](https://www.fda.gov/media/119570/download)
- [EU GMP Annex 11: Computerised Systems](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=)
- [Health Canada Annex 11 guide GUI-0050](https://www.canada.ca/en/health-canada/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/annex-11-guide-computerized-systems-gui-0050.html)
- [FDA guidance on computerized systems used in clinical trials](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/fda-bioresearch-monitoring-information/guidance-industry-computerized-systems-used-clinical-trials)
- [Danish Medicines Agency, GxP IT inspection findings, January 2024](https://laegemiddelstyrelsen.dk/da/godkendelse/kontrol-og-inspektion/inspektion-af-godkendte-laegemiddelvirksomheder/krav-til-it-systemer-i-gxp/~/media/6EC03244BC3C40C9A461AFF4FC255326.ashx)
- [ISPE comments on EMA, 2023](https://ispewebassets.org/files/regulatory/ISPE-Commenting/2023/ISPE%20Comments%20on%20EMA_INS_GMP_778340.pdf)

## Recommended

- [Backup Restore Validation for GxP Systems: What Auditors Want](https://blog.qualitum.ai/backup-restore-validation)
- [Static vs Dynamic Data: What GxP Records Really Require](https://blog.qualitum.ai/static-vs-dynamic-data)
- [2026 FDA CSA: Audit-Ready Automated Validation Documents for Pharma QA](https://blog.qualitum.ai/automated-validation-documents)
- [Audit Trail Violations in GxP: What They Are and How to Prevent Them](https://blog.qualitum.ai/audit-trail-violations)

## FAQ
### Is a successful backup log enough as a validation record?
No. It shows one job completed, which the MHRA guidance asks you to verify for each backup. Annex 11 also expects a documented restore test showing the data is accessible, performed during validation and after relevant changes.

### How long should backups be retained?
Annex 11 (16.2) says retention is determined by a risk-based approach, with examples ranging from a week to years. The Danish inspection findings included retention as low as 7 days, so document your rationale against the data's retention requirements.

### Do backups replace long-term archives?
No. The MHRA guidance states that recovery backups do not replace long-term retention of data and metadata in final form. FDA likewise says temporary copies do not satisfy 21 CFR 211.68(b).

### Who signs the record?
The tester signs the executed steps and an independent reviewer signs the review, including a positive statement on whether issues were found and the date. Qualitum keeps human signatures authoritative.
