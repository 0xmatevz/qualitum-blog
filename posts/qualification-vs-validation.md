---
title: Qualification vs Validation: A Practical Guide for Pharma QA
date: 2026-08-12
description: Understand the key differences between qualification and validation in pharma QA. Learn how to ensure compliance and avoid regulatory issues.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786299284192_Gloved-hands-calibrating-lab-instrument.jpeg
coverAlt: Gloved hands calibrating lab instrument
---

Qualification proves that a system or piece of equipment is fit for its intended use. Validation proves that a process or method consistently produces a result meeting predetermined specifications. These are not interchangeable terms, and regulators treat them as distinct, sequential activities.

**Act on this now:**

- Confirm that IQ, OQ, and PQ are complete with passing records before scheduling any process validation or process performance qualification (PPQ) runs.
- Reference completed qualification records in your Validation Master Plan (VMP) so the link between equipment evidence and process validation conclusions is explicit and auditable.

Missing qualification before validation is one of the most common regulatory red flags an FDA investigator will note during a GMP inspection. The sequence is not optional.

## Key Takeaways

Qualification and validation are sequential, not parallel: completed IQ/OQ/PQ is a regulatory prerequisite for process validation, and the traceability between them is what auditors verify first.

| Point | Details |
| --- | --- |
| Qualification precedes validation | IQ/OQ/PQ must be complete and approved before PPQ batches are manufactured. |
| FDA lifecycle has three stages | Process design, process qualification (PPQ), and continued process verification (CPV) are all required. |
| Traceability is the audit test | Every requirement must trace to a test, acceptance criterion, and evidence location in the traceability matrix. |
| Prospective validation is the default | Concurrent and retrospective approaches require documented scientific justification; FDA guidance deprecated retrospective for new products. |
| Qualitum automates the lifecycle | Qualitum's agentic platform authors protocols, enforces ALCOA+, and maintains live traceability, reducing authoring time by over 70%. |

## Table of Contents

- [How qualification and validation compare: scope, timing, and deliverables](#how-qualification-and-validation-compare-scope-timing-and-deliverables)
- [What each qualification phase requires you to do](#what-each-qualification-phase-requires-you-to-do)
- [Process and method validation: types, approaches, and FDA expectations](#process-and-method-validation-types-approaches-and-fda-expectations)
- [How IQ/OQ/PQ feeds into the process validation lifecycle](#how-iqoqpq-feeds-into-the-process-validation-lifecycle)
- [What documents auditors expect to see](#what-documents-auditors-expect-to-see)
- [What the primary guidance documents actually require](#what-the-primary-guidance-documents-actually-require)
- [Who owns what, and when does each activity happen?](#who-owns-what-and-when-does-each-activity-happen)
- [Common mistakes that create audit findings](#common-mistakes-that-create-audit-findings)
- [How automation changes qualification and validation execution](#how-automation-changes-qualification-and-validation-execution)
- [The case for getting the sequence right before anything else](#the-case-for-getting-the-sequence-right-before-anything-else)
- [Qualitum automates the validation lifecycle so your team focuses on decisions, not documents](#qualitum-automates-the-validation-lifecycle-so-your-team-focuses-on-decisions-not-documents)
- [Sources](#sources)
- [FAQ](#faq)

## How qualification and validation compare: scope, timing, and deliverables

The fastest way to see the difference between qualification and validation is to look at what question each activity answers and when it happens in the product lifecycle.

| Dimension | Qualification | Validation |
| --- | --- | --- |
| Scope | Equipment, instruments, utilities, computerized systems | Processes, analytical methods, cleaning procedures, software workflows |
| Primary question answered | Is this system installed correctly and performing as designed? | Does this process consistently produce product meeting specifications? |
| Timing | Pre-production: at installation, commissioning, and before first batch | During and after process design; ongoing through commercial production |
| Core deliverables | URS, DQ report, IQ/OQ/PQ protocols and reports | Validation protocol, PPQ batch records, validation summary report, continued process verification (CPV) data |
| Evidence type | Engineering data, calibration records, alarm/interlock test results | Statistical process data, yield, potency, purity, cleaning residue levels |

Two examples make this concrete. An autoclave undergoes IQ (installation checks, wiring, calibration), OQ (cycle parameter testing across operating range), and PQ (loaded cycle performance against acceptance criteria) before the sterilization process validation begins. Similarly, an HPLC instrument is qualified through IQ/OQ/PQ, and only then does the analytical method validation demonstrate that the method itself produces accurate, precise, and reproducible results. [Industry practitioners consistently note](https://gmpinsiders.com/qualification-vs-validation-key-differences/) that skipping or shortcutting the equipment qualification step is among the most frequent audit findings, precisely because the process validation conclusions rest on the assumption that the equipment is performing correctly.

## What each qualification phase requires you to do

Qualification follows a defined sequence: User Requirements Specification (URS), Design Qualification (DQ), Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) where applicable, Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). Each stage has a distinct purpose and a distinct set of deliverables.

### URS and DQ: defining and confirming the design

The URS captures every functional, performance, and regulatory requirement the system must meet. DQ then demonstrates, on paper, that the proposed design satisfies those requirements before the purchase order is signed. This is the only stage where you can change the design cheaply. A DQ that maps each URS requirement to a design feature, with a clear rationale, is the foundation of every qualification report that follows.

### FAT and SAT: testing before and after delivery

FAT occurs at the vendor's facility before shipment and can reduce IQ/OQ scope if the tests are witnessed, documented, and traceable. SAT confirms the system survived transport and is ready for site installation. Neither replaces IQ/OQ/PQ, but a well-documented FAT can justify a risk-based reduction in on-site testing.

### IQ, OQ, and PQ: the three core qualification stages

1. **Installation Qualification (IQ):** Verify that the equipment is installed according to the manufacturer's specifications and the URS. Typical tests include wiring verification, utility connections, component identification against the bill of materials, and calibration status of critical instruments. Acceptance criterion example: all critical instruments calibrated with certificates traceable to NIST standards, within the calibration interval.

2. **Operational Qualification (OQ):** Demonstrate that the system operates within defined limits across its full operating range, including worst-case conditions. Typical tests include setpoint accuracy, alarm activation, interlock response, and boundary condition testing. Acceptance criterion example: temperature uniformity within ±1.0°C of setpoint at all mapped locations during a 30-minute hold.

3. **Performance Qualification (PQ):** Confirm that the system consistently performs as intended under actual or simulated production conditions. Typical tests include loaded performance runs, yield measurements, and cycle reproducibility. Acceptance criterion example: three consecutive sterilization cycles with Fo ≥ 8 minutes and no sterility failures.

**Pro Tip:** *The checks that most commonly fail during PQ are not the obvious ones. Alarm response under loaded conditions, interlock behavior at boundary temperatures, and recovery time after a power interruption are frequently untested and frequently fail. Build these into your OQ/PQ protocols explicitly, not as afterthoughts.*

[PharmTech recommends](https://www.pharmtech.com/view/qualification-validation-and-verification) reserving the term "validation" for demonstrating suitability of a method for its intended purpose, and "verification" for confirming that a validated method works under specific conditions at a given site. This distinction matters for analytical labs transferring methods between sites.

For cleanroom and utility qualification, the same IQ/OQ/PQ structure applies, with additional environmental monitoring and HVAC performance requirements. Qualitum's [cleanroom qualification workflows](https://qualitum.ai/platform/validate-ai/cleanroom) follow this structure with automated protocol generation and live traceability.

## Process and method validation: types, approaches, and FDA expectations

Process validation, as defined by the [FDA's "Process Validation: General Principles and Practices" guidance](https://www.fda.gov/files/drugs/published/Process-Validation--General-Principles-and-Practices.pdf), is a lifecycle activity with three stages:

- **Stage 1 — Process Design:** Capture process knowledge from development and scale-up. Define the commercial manufacturing process, critical quality attributes (CQAs), and critical process parameters (CPPs).
- **Stage 2 — Process Qualification:** Confirm that the process design can be reproduced at commercial scale. This is where PPQ batches are manufactured and where completed IQ/OQ/PQ records are required as prerequisite evidence.
- **Stage 3 — Continued Process Verification (CPV):** Ongoing statistical monitoring of process performance during routine production to confirm the process remains in a state of control.

Beyond process validation, teams in pharmaceutical and biotech environments work with several other validation types:

| Validation Type | What It Demonstrates | Typical Regulatory Reference |
| --- | --- | --- |
| Analytical/method validation | Accuracy, precision, specificity, linearity, range, robustness | [ICH Q2(R2)](https://www.ich.org/page/quality-guidelines) |
| Cleaning validation | Residue levels below acceptance limits between product campaigns | FDA guidance |
| Sterilization validation | Sterility assurance level (SAL) for the sterilization process | USP, FDA guidance |
| Computer/software validation (CSV/CSA) | GMP-critical software functions perform as intended | FDA CSA guidance, 21 CFR Part |

### Prospective, concurrent, and retrospective approaches

| Approach | When to use | Regulatory acceptance |
| --- | --- | --- |
| Prospective | New products, new processes, new equipment; the default expectation | Always acceptable; FDA strongly prefers this for new products |
| Concurrent | Rare, justified by patient need or limited batch availability; requires prior regulatory agreement | Acceptable with documented scientific justification and risk assessment |
| Retrospective | Legacy products with extensive historical data; largely discouraged under current FDA lifecycle guidance | Rarely accepted; FDA guidance effectively deprecated this for new submissions |

The FDA's current lifecycle model makes prospective validation the standard expectation. Concurrent validation requires documented justification, and retrospective validation is generally not accepted for new products under the 2011 FDA process validation guidance.

For medical device teams, the [validation compliance requirements](https://labgistics.asia/how-to-validate-medical-devices-2026-compliance-guide) follow a parallel structure under 21 CFR Part 820, with design validation and process validation as distinct activities.

## How IQ/OQ/PQ feeds into the process validation lifecycle

Qualification and validation are not parallel tracks. They are sequential, and the output of one feeds directly into the other. The logical flow looks like this:

- **URS/DQ completed** → design is confirmed fit for purpose before purchase
- **FAT/SAT completed** → system arrives and is installed per specification
- **IQ completed** → installation is verified; equipment is ready for operational testing
- **OQ completed** → equipment operates within defined limits; ready for performance testing
- **PQ completed** → equipment performs under production-representative conditions; qualification package is closed
- **Stage 2 PPQ begins** → process validation protocol references completed IQ/OQ/PQ reports as prerequisite evidence
- **Stage 3 CPV begins** → ongoing monitoring confirms the process remains in control; any equipment change triggers re-qualification assessment

The FDA's supporting guidance on process validation reinforces that qualification provides the baseline equipment and system evidence regulators expect before accepting process validation conclusions. A PPQ report that cannot point to a completed, passing PQ for the manufacturing equipment is incomplete by definition.

When a PQ fails, the diagnostic path matters. A failure in equipment performance (temperature excursion, cycle time deviation) points back to the equipment and requires re-qualification. A failure in process output (yield, potency, uniformity) with equipment performing correctly points to process parameters and requires process investigation. Solid qualification baselines narrow investigations toward process variables rather than equipment faults, which reduces the time and cost of PPQ troubleshooting considerably.

![Hand adjusting sterilization equipment controls](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786299283910_Hand-adjusting-sterilization-equipment-controls.jpeg)

For pharmaceutical logistics and distribution processes, the same sequential logic applies. Validation in pharmaceutical logistics follows a comparable lifecycle, with qualification of cold-chain equipment preceding validation of the distribution process itself.

## What documents auditors expect to see

A complete qualification and validation documentation package includes the following:

- **Validation Master Plan (VMP):** The governing document that defines the scope, strategy, responsibilities, and schedule for all qualification and validation activities. Auditors read this first.
- **URS:** Documented user requirements for each system, traceable to DQ and IQ/OQ/PQ acceptance criteria.
- **DQ report:** Evidence that the design meets the URS before procurement.
- **IQ, OQ, PQ protocols and reports:** Executed protocols with raw data, deviations, and approval signatures.
- **Validation protocol and validation summary report:** For process, analytical, cleaning, and software validation.
- **Traceability matrix:** Maps each requirement to its test, acceptance criterion, and evidence location.
- **Change control records:** Documents any post-qualification changes and their impact assessments.

A traceability matrix row looks like this:

| Requirement (URS ref) | Test (Protocol ref) | Acceptance criterion | Evidence location |
| --- | --- | --- | --- |
| Temperature uniformity within ±1.0°C | OQ | All mapped points within ±1.0°C of setpoint | OQ Report Rev 2, Attachment B |
| Alarm activation at setpoint plus 2°C | OQ | Alarm activates within 30 seconds | OQ Report Rev 2, Attachment C |

**Document authoring checklist:**

- Version control: every document has a unique version number, effective date, and revision history.
- Signatures: protocol approved before execution; report approved after execution with raw data attached.
- ALCOA+ compliance: data is Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available.
- Raw data: original instrument printouts, electronic records, or audit-trailed data files attached to or referenced in the report.
- Deviations: all deviations documented during execution with impact assessments and dispositions before report approval.

## What the primary guidance documents actually require

The regulatory framework for qualification and validation in the United States is anchored by FDA guidance, with ICH and ISPE providing complementary technical depth.

The FDA Process Validation guidance states:

This lifecycle framing means validation is not a one-time event. It begins during process development and continues through commercial production via CPV. Qualification is the prerequisite that makes Stage 2 process qualification credible.

For computerized systems, the FDA Computer Software Assurance guidance requires both technical assurance (qualification of the infrastructure and software) and process-level assurance (validation of GMP-critical workflows). The two are complementary, not interchangeable.

ICH quality guidelines, particularly ICH Q2(R2) for analytical procedures and ICH Q10 for pharmaceutical quality systems, set the international baseline that US submissions are expected to meet. ICH Q2(R2) defines the validation characteristics for analytical methods: specificity, linearity, range, accuracy, precision, detection limit, quantitation limit, and robustness.

[ISPE GAMP 5](https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition) provides the practical lifecycle and risk-based framework for computerized system validation, categorizing software by risk and aligning qualification and validation effort to that risk level. Teams using GAMP 5 apply a scaled approach: a Category 1 infrastructure component requires less documentation than a Category 5 custom application managing batch records.

USP chapters, including USP <1225> for validation of compendial procedures and USP <1058> for analytical instrument qualification, provide method-specific expectations that complement FDA and ICH guidance. Reference these chapters explicitly in your VMP when they apply to your product type or analytical methods.

![What the primary guidance documents actually require — overview diagram](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786299716341_What-the-primary-guidance-documents-actually-require-overview-diagram.jpeg)

## Who owns what, and when does each activity happen?

Qualification and validation involve multiple functions, and unclear ownership is a reliable source of audit findings.

**Role map:**

- **QA:** Owns the VMP, approves all protocols and reports, manages change control, and is accountable for the overall compliance posture of the qualification and validation program.
- **Validation engineers:** Author and execute qualification and validation protocols, manage deviations, and compile reports.
- **Engineering and facilities:** Own equipment installation, utilities, and maintenance records that feed IQ evidence.
- **Production operations:** Participate in PQ and PPQ execution, own batch records, and confirm process parameters during validation runs.
- **IT:** Own infrastructure qualification and CSA/CSV activities for computerized systems, including audit trail configuration and access control verification.
- **Regulatory affairs:** Confirm that the validation strategy aligns with submission commitments and jurisdiction-specific expectations.

**Timing guidance:**

- DQ: completed before the purchase order is issued.
- FAT/SAT: at the vendor facility and at site delivery, respectively.
- IQ/OQ: at installation and commissioning, before any production use.
- PQ: after OQ, using production-representative materials and conditions.
- PPQ (Stage 2 process validation): after PQ is complete and approved.
- CPV (Stage 3): begins with the first commercial batches and continues indefinitely.

Typical durations vary by system complexity. A straightforward analytical instrument IQ/OQ may take two to four weeks. A complex manufacturing line qualification, including FAT, SAT, IQ, OQ, and PQ, can take three to nine months. PPQ for a new drug product typically requires a minimum of three consecutive batches, though the FDA guidance does not mandate a specific number and expects the number to be scientifically justified.

**Pre-validation handoff checklist (must be signed before PPQ begins):**

- IQ and OQ completed with no open critical deviations.
- PQ completed with passing results and approved report.
- All critical instruments calibrated and within interval.
- URS traceability confirmed in the qualification summary.
- Change control current: no unassessed changes since PQ approval.
- VMP updated to reflect completed qualification status.

## Common mistakes that create audit findings

The most expensive qualification and validation errors are the ones that surface during an FDA inspection rather than during internal review.

**Audit red flags to eliminate:**

- Starting PPQ before PQ is approved. This is the single most common sequencing error.
- Acceptance criteria written after execution, or criteria so broad they cannot fail.
- Traceability matrix missing or not updated to reflect executed tests.
- Raw data not attached to reports, or electronic data without audit trails.
- Deviations closed without documented impact assessments.
- Retrospective validation used without documented justification and regulatory agreement.

**Practical checklist for first-time program planners:**

- Write the VMP before any protocols. The VMP defines scope, risk approach, and document hierarchy.
- Use a risk assessment (FMEA or equivalent) to prioritize qualification activities and justify sampling plans for PPQ.
- Define acceptance criteria before execution, in the approved protocol. "Pass/fail" is not an acceptance criterion.
- Specify the sampling plan for PPQ statistically: sample size, sampling frequency, and the statistical method for evaluating results.
- Document every deviation in real time. A deviation written after the fact is an ALCOA+ failure.

**Pro Tip:** *When writing acceptance criteria, ask: "Could a reasonable auditor determine, from this criterion alone, whether the test passed or failed?" If the answer requires interpretation, the criterion is too vague. Quantify everything: temperature, time, concentration, count. An acceptance criterion of "within specification" is not an acceptance criterion.*

The [audit readiness checklist](https://blog.qualitum.ai/audit-readiness-checklist) published by Qualitum maps these requirements to specific document checks that QA leaders can run before an inspection.

## How automation changes qualification and validation execution

Manual qualification and validation documentation carries a quiet tax: authoring time, version control errors, ALCOA+ gaps, and traceability matrices that fall out of sync with executed protocols. Agentic validation platforms address these directly.

**Concrete benefits of automated validation platforms:**

- **Reduced authoring time:** Agent-authored protocols generate URS, DQ, IQ/OQ/PQ, and validation protocols from structured inputs, with ALCOA+ checks applied at write-time. Qualitum reports over 70% time savings in protocol authoring.
- **Live traceability matrices:** Requirements, tests, acceptance criteria, and evidence locations update in real time as protocols are executed, eliminating the manual reconciliation step that typically precedes an audit.
- **ALCOA+ enforcement at write-time and review-time:** Every record is checked for attributability, contemporaneity, and completeness before it is saved, not after an auditor finds the gap.
- **Consistent audit evidence:** Automated audit logs, electronic signatures, and change-trace records are generated by the system, not assembled manually before an inspection.

**Adoption considerations:**

- The automation platform itself must be qualified and validated under CSA/CSV expectations. FDA CSA guidance and ISPE GAMP 5 both require that GMP-critical software be technically assured before use.
- Deployment model matters: a validated private cloud or on-premises deployment provides the data sovereignty and audit trail integrity that regulated environments require.
- Integration with existing QMS platforms (MasterControl, Veeva Vault, SAP QM, and others) is a practical prerequisite for teams that cannot migrate all records to a new system at once.

**Example platform capabilities for qualification and validation:**

- Automated protocol generation for URS, DQ, IQ/OQ/PQ, CSV/CSA, cleaning validation, and sterilization validation.
- Live traceability matrix linked to executed protocol sections and evidence files.
- Deviation and CAPA tracking with impact assessment workflows.
- Change-trace records that flag downstream qualification impacts when a system change is logged.
- Audit log export in formats accepted by FDA investigators.

The [Validate·AI platform](https://qualitum.ai/platform/validate-ai) from Qualitum covers this full capability set, with validated deployment options for pharmaceutical, biotech, and medical device environments.

## The case for getting the sequence right before anything else

The most common mistake teams make is treating qualification and validation as administrative checkboxes rather than as the evidentiary foundation of their product release decisions. A validation package that cannot point to solid, complete qualification records is not a validation package. It is a liability.

The practical priority order is straightforward: write the VMP first, complete risk assessments before protocols, and close IQ/OQ/PQ with passing records before a single PPQ batch is manufactured. No amount of statistical sophistication in a PPQ protocol compensates for an equipment qualification that was never finished.

For teams building or rebuilding a qualification and validation program, a 30/60/90-day approach works well. In the first 30 days, audit the current state: inventory all systems requiring qualification, identify gaps in existing records, and confirm VMP currency. In the next 30 days, close the highest-risk qualification gaps and update the traceability matrix. In the final 30 days, confirm that all prerequisite qualification evidence is in place and schedule PPQ runs with a documented, statistically justified sampling plan.

The teams that perform best in FDA inspections are not the ones with the most elaborate protocols. They are the ones who can pull any document in the validation lifecycle within minutes and demonstrate, without hesitation, that every requirement traces to a test, every test traces to a result, and every result traces to a decision.

## Qualitum automates the validation lifecycle so your team focuses on decisions, not documents

Qualification and validation programs generate hundreds of documents across multiple systems and years. The manual overhead, version conflicts, and ALCOA+ gaps that accumulate in that process are not inevitable. They are a function of how the work is organized.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

[Qualitum](https://qualitum.ai) is an agentic validation platform built specifically for pharmaceutical, biotech, and medical device organizations. It authors IQ/OQ/PQ protocols, VMPs, cleaning validation packages, and CSV/CSA documentation through a multi-agent system that enforces ALCOA+ at write-time and review-time, not after the fact. Every record is traceable from requirement to evidence, and the live traceability matrix updates as protocols are executed, so audit preparation is a status check, not a fire drill.

The platform deploys in validated private environments and integrates with major QMS platforms, so adoption does not require replacing existing infrastructure. To see how it fits your current validation program, [book a working session](https://qualitum.ai/book) with the Qualitum team.

## Sources

These are the primary references your VMP should cite. Download and store each one in your document management system.

- [Process Validation: General Principles and Practices (FDA)](https://www.fda.gov/files/drugs/published/Process-Validation--General-Principles-and-Practices.pdf)
- [GAMP 5 guide (ISPE)](https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition)
- [Qualification, Validation, and Verification (PharmTech)](https://www.pharmtech.com/view/qualification-validation-and-verification)

## FAQ

### What is the difference between qualification and validation?

Qualification proves that a specific piece of equipment or system is installed correctly and performs within defined limits. Validation proves that a process or method consistently produces a result meeting predetermined specifications. Qualification is a prerequisite for validation, not a substitute for it.

### What are the four types of qualification?

The four qualification types are Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). They are executed in sequence, with each stage's passing records serving as a prerequisite for the next.

### What are the main types of validation in pharmaceutical manufacturing?

The primary types are process validation (covering the three-stage FDA lifecycle), analytical/method validation, cleaning validation, sterilization validation, and computer/software validation (CSV/CSA). Each type has distinct regulatory references and acceptance criteria requirements.

### What is the difference between method validation and qualification in analytical labs?

Analytical instrument qualification (IQ/OQ/PQ) confirms that the instrument performs within its design specifications. Method validation, governed by ICH Q2(R2), demonstrates that the analytical method itself produces accurate, precise, and reproducible results for its intended purpose. PharmTech notes that "verification" applies when a validated method is transferred to a new site and confirmed under local conditions.

### When does the FDA accept concurrent or retrospective validation?

Concurrent validation is accepted only with documented scientific justification and, typically, prior regulatory agreement, usually when patient need makes prospective validation impractical. Retrospective validation is largely deprecated under the FDA's 2011 process validation guidance and is not accepted for new products. Prospective validation is the default expectation for all new processes and products.

## Recommended

- [Qualitum · The agentic validation platform for life sciences](https://qualitum.ai)
- [Validate·AI · Qualitum](https://qualitum.ai/platform/validate-ai)
- [Cleanroom & utility qualification · Validate·AI · Qualitum](https://qualitum.ai/platform/validate-ai/cleanroom)
- [Audit Readiness Checklist for Validation and QA Leaders · Qualitum blog](https://blog.qualitum.ai/audit-readiness-checklist)

## FAQ
### What is the difference between qualification and validation?
Qualification proves that a specific piece of equipment or system is installed correctly and performs within defined limits. Validation proves that a process or method consistently produces a result meeting predetermined specifications. Qualification is a prerequisite for validation, not a substitute for it.

### What are the four types of qualification?
The four qualification types are Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). They are executed in sequence, with each stage's passing records serving as a prerequisite for the next.

### What are the main types of validation in pharmaceutical manufacturing?
The primary types are process validation (covering the three-stage FDA lifecycle), analytical/method validation, cleaning validation, sterilization validation, and computer/software validation (CSV/CSA). Each type has distinct regulatory references and acceptance criteria requirements.

### What is the difference between method validation and qualification in analytical labs?
Analytical instrument qualification (IQ/OQ/PQ) confirms that the instrument performs within its design specifications. Method validation, governed by ICH Q2(R2), demonstrates that the analytical method itself produces accurate, precise, and reproducible results for its intended purpose. PharmTech notes that "verification" applies when a validated method is transferred to a new site and confirmed under local conditions.

### When does the FDA accept concurrent or retrospective validation?
Concurrent validation is accepted only with documented scientific justification and, typically, prior regulatory agreement, usually when patient need makes prospective validation impractical. Retrospective validation is largely deprecated under the FDA's 2011 process validation guidance and is not accepted for new products. Prospective validation is the default expectation for all new processes and products.
