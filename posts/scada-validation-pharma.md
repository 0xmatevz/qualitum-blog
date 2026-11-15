---
title: SCADA Validation in Pharma: A Practical Lifecycle Guide
date: 2026-11-15
description: How to validate a pharmaceutical SCADA system: risk-based URS, DQ/IQ/OQ/PQ, audit trails, backup and recovery, and how to stay audit-ready afterward.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1794576683261_SCADA-station-beside-pharmaceutical-CIP-tanks.jpeg
coverAlt: SCADA station beside pharmaceutical CIP tanks
---

SCADA validation in pharma means producing documented evidence that your supervisory control and data acquisition system does what your GMP processes rely on it to do, and keeps doing it. The work follows one chain: documented requirements, a risk assessment that sets the depth of testing, qualification (DQ, IQ, OQ, PQ), controlled operation and periodic review. The hard part is rarely the testing. It is authoring, cross-checking and maintaining the paperwork that proves it. That is the part Qualitum's validation platform takes off your team's hands.

## TL;DR

- Validate a SCADA system before GMP use, on the basis of documented requirements, risk management and the system lifecycle, as [EU Annex 11](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en) sets out.
- Let a documented risk assessment decide how deep testing goes: patient safety, data integrity and product quality drive the scope.
- Test the data controls, not only the screens: access, audit trails, electronic signatures, alarms, recipes, backup and restore.
- PLCs and interfaces under the SCADA layer follow the same validation logic, with each requirement defined by the end user.
- Validation does not end at go-live. Change control, deviations and periodic review keep the validated state, and that is where most documentation effort accumulates.

## Table of Contents

- [What a SCADA system is, and why pharma validates it](#what-a-scada-system-is-and-why-pharma-validates-it)
- [What validation should demonstrate](#what-validation-should-demonstrate)
- [The SCADA validation lifecycle, step by step](#the-scada-validation-lifecycle-step-by-step)
- [Protecting electronic records: the tests that matter most](#protecting-electronic-records-the-tests-that-matter-most)
- [PLCs and interfaces under the SCADA layer](#plcs-and-interfaces-under-the-scada-layer)
- [Keeping the validated state](#keeping-the-validated-state)
- [Where the documentation time goes](#where-the-documentation-time-goes)
- [Faster SCADA validation with Qualitum](#faster-scada-validation-with-qualitum)
- [FAQ](#faq)
- [Sources](#sources)

## What a SCADA system is, and why pharma validates it

SCADA stands for supervisory control and data acquisition. In a plant, it is the software layer that sits above PLCs and field instruments. It collects process signals, shows operators what is happening, raises alarms, lets them change setpoints or start recipes, and stores the history. In pharmaceutical manufacturing that means utilities, bioreactors, purification skids, clean-in-place systems, environmental monitoring and packaging lines can all be supervised from one place.

Because operators and quality decisions rely on what SCADA shows and records, it is a computerized system used in GMP. Annex 11 of the EU GMP guide states that such systems should be validated before use, and that validation should rest on documented requirements, risk management and the system lifecycle ([European Commission, Annex 11](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en)). In the US, the FDA's [Part 11 scope and application guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application) explains that 21 CFR Part 11 applies to records in electronic form that are created, modified, maintained, archived, retrieved or transmitted under FDA record requirements. A SCADA historian, alarm log or electronic batch record feed fits that description.

The practical result: a SCADA system needs to be fit for its intended use, and you need evidence you can hand to an inspector without a scramble.

## What validation should demonstrate

Annex 11 spells out what the system has to get right. A validation package for SCADA typically shows that:

- hardware and software are installed as specified;
- user permissions and access work as designed;
- parameters, recipes and reports are configured correctly;
- electronic signatures, audit trails and security behave as required;
- signals and alarms reach the operator correctly;
- end-to-end workflows, from instrument reading to stored record, produce the expected result.

These are the checks the [Annex 11 text](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en) points to for computerized systems in general. The scope of validation is decided by risk, not by a fixed checklist. Health Canada's [GUI-0050](https://www.canada.ca/content/dam/hc-sc/documents/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/Annex-11-to-the-Good-Manufacturing-Practices-Guide-Computerized-Systems-(GUI-0050)-ENG-.pdf), its version of Annex 11, requires risk management throughout the lifecycle with patient safety, data integrity and product quality in mind. The extent of validation and controls must be justified by a documented risk assessment.

## The SCADA validation lifecycle, step by step

### 1. Inventory the system and describe its criticality

Start with a current inventory of computerized systems and a description of each critical one. GUI-0050 expects both. For SCADA, the description should show which GMP processes it supervises, which records it creates, and what it exchanges with PLCs, historians, MES, LIMS and the quality management system. Gaps here cause trouble later: an interface nobody listed is an interface nobody tested.

### 2. Write the user requirements specification (URS) from risk

The URS states the functions you rely on for GMP activities. Annex 11 says requirements must describe that functionality, stay current and form the basis for qualification and validation. For SCADA, write requirements you can test: alarm priorities and acknowledgment, role-based access, audit-trail content, electronic signature behavior, recipe version control, data retention, time synchronization and recovery after power loss.

Where it goes wrong: requirements copied from the vendor's brochure, so the URS describes what the product does rather than what your process needs. Another common failure is a URS that was never updated after a change, which leaves the tests tracing to a document that no longer describes the system.

### 3. Run the risk assessment

Assess each function for its effect on patient safety, product quality and data integrity. High-risk functions, such as a critical process parameter alarm or a batch record signature, get scripted, repeatable testing with objective evidence. Low-risk standard functions can rely on supplier documentation and lighter verification. The [GAMP 5 risk-based approach](https://blog.qualitum.ai/gamp-5-risk-based) is the usual framework for this scaling.

![Risk dimensions determine SCADA testing rigor](https://media.babylovegrowth.ai/blog-images/organization-48457/1794576741470_Risk-dimensions-determine-SCADA-testing-rigor.jpeg)

ISPE's [GxP Process Control Systems Good Practice Guide, third edition](https://ispe.org/publications/guidance-documents/gamp-good-practice-guide-gxp-process-control-systems-3rd-edition), published in March 2026 and aligned with GAMP 5 Second Edition, covers strategies for process-control systems that are fit for intended use and compliant. It is the natural reference when you are tying SCADA work to process equipment activities.

### 4. Plan the tests and qualify

A validation plan sets who does what, in which environment, against which acceptance criteria. Japan's MHLW computerized-system guideline calls for documented test plans specifying environment, test items, methods, acceptance criteria and schedule. It also says factory and site acceptance testing (FAT and SAT) may be selected as appropriate to confirm that functions and performance meet the URS ([MHLW guideline](https://www.pmda.go.jp/files/000153231.pdf)).

The qualification stages map onto the plan like this:

| Stage | What it confirms | Typical SCADA evidence |
|---|---|---|
| DQ | The design meets the URS | Functional and design specifications, architecture and network diagrams, supplier assessment |
| IQ | Installed as specified | Software versions, server and client configuration, licenses, interface connections |
| OQ | Operates as intended across its ranges | Alarm tests, access-level tests, recipe download, signature and audit-trail challenges, failure and recovery tests |
| PQ | Performs in real operating conditions | End-to-end runs with the actual process, operators and procedures |

A [2024 peer-reviewed review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11416705/) describes DQ, IQ, OQ and PQ as the documented qualification checks that confirm a computerized system works as designed, and lists planning, requirements, testing, installation, documentation, operation, monitoring and adjustment as the lifecycle activities.

Where it goes wrong: test scripts that verify a screen exists but not that the record behind it is correct, and deviations during execution that are closed without linking back to the requirement they affected.

### 5. Release for use and control it

Once the validation report is approved, the system enters operation under change control, deviation handling and periodic review. This stage is covered in its own section below, because it is where a validated state is won or lost.

## Protecting electronic records: the tests that matter most

For SCADA, data integrity tests carry more weight than interface tests. Health Canada's GUI-0050 sets the expectations in terms you can turn into test cases:

- Restrict access to authorized users using physical or logical controls, and record the creation, change and cancellation of access authorizations.
- Record the identity, date and time of operators who enter, change, confirm or delete data.
- Risk-assess audit trails for GMP-relevant changes and deletions.
- Protect stored data, and check its accessibility, readability and accuracy throughout retention.
- Back up regularly, and check backup integrity, accuracy and restoration capability during validation, then monitor them periodically.

The restore test is the one teams skip. A backup that has never been restored in a test environment is an assumption. Include a scenario where the SCADA server fails or loses power mid-batch, then show that the record is complete and readable afterward. Document who can change alarm limits, who can delete a trend, and what the audit trail shows when they do.

Data that feeds quality decisions should also meet ALCOA+, which means records are attributable, legible, contemporaneous, original and accurate, plus complete, consistent, enduring and available. Test each attribute against a real SCADA record, not an abstract policy.

When results from instruments or lab systems connected to your process data support release decisions, the lab side also needs controlled documentation. A [clause-by-clause ISO 17025 testing checklist](https://purityxpeptides.com/blogs/research-articles/iso-17025-testing) shows how lab competence and certificate documentation are typically organized, which helps when you map where plant data and lab data meet.

## PLCs and interfaces under the SCADA layer

SCADA rarely stands alone. PLCs execute the control logic, and SCADA supervises. The same 2024 review notes that PLC and PC validation methods are similar and align with general validation practice, and that end users should define each specific requirement. In practice:

- Treat the PLC application as part of the system boundary, or validate it separately and test the SCADA-to-PLC interface explicitly.
- Verify tag mapping end to end: a value changed at the instrument should arrive at the operator screen and the historian with the right units, scaling and timestamp.
- Test interface failure: what happens to alarms and data when communication drops, and does the gap show up in the record?
- Keep PLC code and SCADA configuration under version control, so a change in one triggers an impact assessment on the other.

If the SCADA system supplies data to a manufacturing execution system, the same logic applies at that interface. Our guide to [audit-ready MES validation](https://blog.qualitum.ai/mes-validation-pharma) covers the risk-based testing approach for that neighbor.

## Keeping the validated state

Validation at go-live is a snapshot. GUI-0050 expects you to keep lifecycle validation documents and reports, change-control and deviation records, an up-to-date system inventory, access records, audit trails and internal-audit records, and to evaluate computerized systems periodically. Japan's MHLW guideline adds periodic internal audits to verify that systems remain controlled, with written reporting to responsible quality or engineering management and retained records.

A workable routine for a SCADA system looks like this:

1. **Change control.** Every patch, tag addition, alarm limit change and recipe revision gets an impact assessment and, where risk warrants, regression testing.
2. **Deviation handling.** Link each deviation to the requirement and the test it touches. See how to [close deviation and CAPA evidence gaps](https://blog.qualitum.ai/deviation-and-capa) without chasing records at the end.
3. **Periodic review.** Check the inventory, open changes, access lists, audit-trail review results, backup and restore evidence, and whether the URS still describes reality.
4. **Traceability.** Keep requirements, risks and tests connected, so you can answer "which test covers this requirement?" in minutes.

The quiet cost is that each of these produces documents. Over a plant with dozens of systems, that authoring and checking is a tax your engineers pay every year.

## Where the documentation time goes

![Where the documentation time goes](https://media.babylovegrowth.ai/blog-images/organization-48457/1794576782095_Where-the-documentation-time-goes.jpeg)

In a SCADA project, testing hours are visible and budgeted. The hidden hours go to drafting the URS, the risk assessment, the IQ/OQ/PQ protocols, reviewing executed evidence for completeness, and reconciling traceability after a change. Those are repetitive, rule-driven tasks with strict acceptance criteria, which is exactly what a purpose-built validation platform is designed to take on.

Qualitum's platform covers the validation lifecycle for pharmaceutical, biotech and medical device companies: URS, FS, DQ, IQ, OQ, PQ, CSV/CSA, risk assessment, audit trails and a live traceability matrix. Every record is ALCOA+ checked at write-time and review-time, and human signatures remain authoritative. Our [guide to automated validation documents](https://blog.qualitum.ai/automated-validation-documents) shows how that works against FDA's CSA direction.

> ## Our perspective
>
> We see SCADA validation as a documentation problem hiding inside an engineering problem. The engineering is well understood: define what the system must do, assess risk, test it, control change. What consumes the calendar is turning that logic into consistent, traceable, reviewable records for every system, then keeping them current.
>
> That is why we built Qualitum around agents that author and check the validation lifecycle, with a live traceability matrix and ALCOA+ checks at write-time and review-time. Our platform deploys privately inside the customer's infrastructure, with zero data egress, so QA and InfoSec can sign off on it. Human signatures stay authoritative: the agents draft and verify, your people decide and approve.
>
> The result we design for is over 70% time savings in authoring and faster CSV cycles, with evidence an inspector can follow from requirement to test to signature. For a SCADA system, that means your validation engineers spend their time on the risk judgments and the challenge testing, where their expertise matters, and not on formatting protocols.
>
> *Matt*

## Faster SCADA validation with Qualitum

If your team is validating or revalidating SCADA and the paperwork is the bottleneck, Validate·AI and Operate·AI on the [Qualitum platform](https://qualitum.ai/platform) are built for that lifecycle, from requirements drafting to executed-evidence review. Qualitum starts with a paid pilot, so you can run it on a real system before committing to a wider rollout. See the [pilot and landing page](https://qualitum.ai) to start the conversation.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

You can also see how [requirements drafting](https://qualitum.ai/use-cases/drafting) produces a first-draft spec with every line sourced, and how [executed protocol and evidence review](https://qualitum.ai/use-cases/evidence-review) checks each executed test before QA sees it.

## FAQ

### What is a SCADA system in pharma?

SCADA is a supervisory control and data acquisition system. It sits above PLCs and instruments, collects process data, displays it to operators, raises alarms and stores history. In pharma it supervises GMP-relevant processes, so its records and functions fall under validation and data integrity expectations.

### What are the four types of validation?

The term usually refers to prospective, concurrent, retrospective and revalidation. For a computerized system such as SCADA, the working structure is the qualification sequence of DQ, IQ, OQ and PQ, supported by requirements, risk assessment and ongoing change control.

### What is the role of PLC validation in SCADA projects?

The PLC executes the control logic that SCADA supervises, so its application has to be validated or explicitly covered in the system boundary. The 2024 review cited above notes that PLC and PC validation methods align with general validation practice. Test the interface between the two, including behavior when communication fails.

### Does Part 11 apply to SCADA?

It applies where SCADA creates, modifies, maintains, archives, retrieves or transmits electronic records under FDA record requirements, according to the FDA's scope and application guidance. That typically covers batch-relevant data, alarm and event logs, and electronic signatures. Your risk assessment documents which records are in scope.

### How often should a validated SCADA system be reviewed?

The guidance calls for periodic evaluation without fixing one interval. Set the frequency in your validation plan according to risk, and review change records, access, audit trails and backup and restore evidence at each cycle.

## Sources

- [European Commission: Annex 11, Computerised Systems](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en)
- [Health Canada: GUI-0050, Annex 11 Computerized Systems](https://www.canada.ca/content/dam/hc-sc/documents/services/drugs-health-products/compliance-enforcement/good-manufacturing-practices/guidance-documents/Annex-11-to-the-Good-Manufacturing-Practices-Guide-Computerized-Systems-(GUI-0050)-ENG-.pdf)
- [FDA: Part 11, Electronic Records; Electronic Signatures, Scope and Application](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application)
- [MHLW (Japan): Guideline on computerized systems](https://www.pmda.go.jp/files/000153231.pdf)
- [The Essential Guide to Computer System Validation, 2024 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11416705/)
- [ISPE: GAMP Good Practice Guide, GxP Process Control Systems, 3rd edition](https://ispe.org/publications/guidance-documents/gamp-good-practice-guide-gxp-process-control-systems-3rd-edition)
- [ISO 17025 testing clause checklist](https://purityxpeptides.com/blogs/research-articles/iso-17025-testing)

## Recommended

- [FDA CSA LIMS Validation for Pharma: ALCOA+ Proof, Cut Authoring 70%](https://blog.qualitum.ai/lims-validation-pharma)
- [Audit Ready MES Validation for Pharma with CSA Risk Based Testing](https://blog.qualitum.ai/mes-validation-pharma)
- [Qualification vs Validation: A Practical Guide for Pharma QA](https://blog.qualitum.ai/qualification-vs-validation)
- [System Decommissioning Validation: A Practical Guide for GxP Teams](https://blog.qualitum.ai/system-decommissioning-validation)

## FAQ
### What is a SCADA system in pharma?
SCADA is a supervisory control and data acquisition system. It sits above PLCs and instruments, collects process data, displays it to operators, raises alarms and stores history. In pharma it supervises GMP-relevant processes, so its records and functions fall under validation and data integrity expectations.

### What are the four types of validation?
The term usually refers to prospective, concurrent, retrospective and revalidation. For a computerized system such as SCADA, the working structure is the qualification sequence of DQ, IQ, OQ and PQ, supported by requirements, risk assessment and ongoing change control.

### What is the role of PLC validation in SCADA projects?
The PLC executes the control logic that SCADA supervises, so its application has to be validated or explicitly covered in the system boundary. The 2024 review cited above notes that PLC and PC validation methods align with general validation practice. Test the interface between the two, including behavior when communication fails.

### Does Part 11 apply to SCADA?
It applies where SCADA creates, modifies, maintains, archives, retrieves or transmits electronic records under FDA record requirements, according to the FDA's scope and application guidance. That typically covers batch-relevant data, alarm and event logs, and electronic signatures. Your risk assessment documents which records are in scope.

### How often should a validated SCADA system be reviewed?
The guidance calls for periodic evaluation without fixing one interval. Set the frequency in your validation plan according to risk, and review change records, access, audit trails and backup and restore evidence at each cycle.
