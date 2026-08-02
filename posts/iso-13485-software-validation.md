---
title: ISO 13485 Software Validation: A Practical Compliance Guide
date: 2026-08-02
description: Ensure compliance with ISO 13485 software validation. Discover essential documentation, risk assessments, and audits for software in your QMS.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785636887671_Pharmaceutical-production-machines-in-clean-lab.jpeg
coverAlt: Pharmaceutical production machines in clean lab
---

ISO 13485 software validation is not optional and not a one-time exercise. ISO 13485:2016 clause 4.1.6 requires documented, risk-proportionate validation of every software application used in your QMS, validated before first use and revalidated after changes. Clause 7.5.6 extends that obligation to any software used in production or service provision that can affect product conformity. Together, these two clauses define the scope most auditors work from.

What auditors expect to see in your validation file:

- An intended-use statement that defines exactly what the software does in your environment
- A risk assessment proportionate to the tool's impact on product quality or patient safety
- User requirements (URS) that are specific, testable, and traceable
- Test cases with explicit acceptance criteria, execution evidence, and pass/fail outcomes
- A signed validation report with process owner and QA approval
- Revalidation records for any change that could affect validated functionality

Your immediate next step: draft a one-page validation plan template and run a short risk assessment for your top five QMS and production tools this week. That single action surfaces scope gaps before an auditor does.

***

## Table of Contents

- [What does "software validation" mean under ISO 13485?](#what-does-software-validation-mean-under-iso-13485)
- [When is validation required, and how do you determine scope?](#when-is-validation-required-and-how-do-you-determine-scope)
- [Which ISO 13485 clauses reference software, and what does each require?](#which-iso-13485-clauses-reference-software-and-what-does-each-require)
- [What does the ISO 13485 validation lifecycle look like step by step?](#what-does-the-iso-13485-validation-lifecycle-look-like-step-by-step)
- [How do you write validation test plans and test cases auditors will accept?](#how-do-you-write-validation-test-plans-and-test-cases-auditors-will-accept)
- [How do you apply a risk-based approach to scale validation effort?](#how-do-you-apply-a-risk-based-approach-to-scale-validation-effort)
- [How do you keep a validated state after SaaS and cloud updates?](#how-do-you-keep-a-validated-state-after-saas-and-cloud-updates)
- [What documentation do auditors expect, and how should you organize it?](#what-documentation-do-auditors-expect-and-how-should-you-organize-it)
- [What are realistic timelines and costs for a validation project?](#what-are-realistic-timelines-and-costs-for-a-validation-project)
- [How does validation automation change the workload for your team?](#how-does-validation-automation-change-the-workload-for-your-team)
- [Key Takeaways](#key-takeaways)
- [The gap between what validation looks like on paper and what it does in practice](#the-gap-between-what-validation-looks-like-on-paper-and-what-it-does-in-practice)
- [Qualitum cuts validation authoring time so your team can focus on compliance](#qualitum-cuts-validation-authoring-time-so-your-team-can-focus-on-compliance)
- [Useful sources](#useful-sources)
- [FAQ](#faq)

## What does "software validation" mean under ISO 13485?

Validation under ISO 13485 means demonstrating, with documented evidence, that software performs correctly for its intended use in your specific configuration. That definition sounds simple, but it trips up teams who conflate validation with verification or qualification.

![Biotech lab bioreactors and monitoring instruments](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785636886598_Biotech-lab-bioreactors-and-monitoring-instruments.jpeg)

**Verification** answers the question: did the developer build the system correctly? It is the vendor's responsibility and covers unit tests, code reviews, and design outputs. **Validation** is your responsibility as the manufacturer: does this software, as configured and deployed in your environment, meet your intended use? **Qualification** is the IQ/OQ/PQ framework borrowed from equipment validation, often applied to production systems to confirm installation, operational behavior, and performance against real-world workloads.

The FDA's [Computer Software Assurance (CSA) guidance](https://www.fda.gov/media/188844/download) reinforces this risk-based framing, shifting emphasis from documentation volume to confidence-building test activities. GAMP 5 and EudraLex Annex 11 provide complementary lifecycle frameworks that many U.S. medical device teams reference alongside ISO 13485, particularly when a system also falls under 21 CFR Part 11 for electronic records.

![Infographic showing ISO 13485 validation lifecycle steps](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785637261250_Infographic-showing-ISO-13485-validation-lifecycle-steps.jpeg)

| Term | Core question | Who owns it | Primary evidence |
|---|---|---|---|
| Verification | Was the system built correctly? | Vendor / developer | Design records, unit tests, code review |
| Validation | Does it meet intended use in our environment? | Manufacturer (you) | URS, test protocols, signed validation report |
| Qualification (IQ/OQ/PQ) | Is it installed, operating, and performing as required? | Manufacturer, often with vendor input | Installation records, operational tests, performance tests |

One practical note: for a simple cloud eQMS, a short validation file covering intended use, risk assessment, configuration record, and a performance test can be fully defensible. The standard does not mandate length; it mandates evidence.

***

## When is validation required, and how do you determine scope?

The rule is straightforward. Validate any software used in the QMS (clause 4.1.6) and any software used in production or service provision that can affect product conformity (clause 7.5.6). The harder question is where the line sits for a given tool.

Use this intended-use checklist to map each tool to its validation obligation:

- Does the software create, manage, or control quality records? (Document control, CAPA, training records) → clause 4.1.6 applies
- Does the software generate outputs that feed directly into product release decisions? (Label printing, release calculations, batch records) → clause 7.5.6 applies
- Does the software only support administrative tasks with no quality record output? (General email, calendar, internal chat) → likely out of scope, but document the rationale
- Is the software used to monitor or measure production parameters? → clause 7.5.6 applies

**Revalidation triggers** are where teams most often accumulate audit findings. Revalidate when:

- A vendor update modifies functionality that was part of your validated scope
- You change configuration settings that affect validated workflows
- Intended use expands (e.g., adding electronic signature for batch release)
- An incident or CAPA reveals a gap in validated behavior
- Infrastructure migrates (new server, new cloud region, new tenancy model)

An annual light review of higher-risk tools is good practice even when no formal trigger has fired. For lower-risk tools, a documented impact assessment confirming no change to validated functionality is usually sufficient.

**In-scope vs. out-of-scope examples:**

| Software | Scope | Rationale |
|---|---|---|
| eQMS (document control, CAPA, training) | In scope — clause 4.1.6 | Directly manages quality records |
| Label printing software | In scope — clause 7.5.6 | Output affects product conformity |
| ERP with release calculation module | In scope — clause 7.5.6 | Affects release decision |
| General word processor (no quality record output) | Out of scope | No direct QMS or production impact |
| Training log spreadsheet (read-only reference) | Out of scope | No quality record creation or control |
| Training management platform (records completions) | In scope — clause 4.1.6 | Creates and manages training records |

COTS and OTS tools follow the same logic: even when vendor documentation is robust, you must validate the tool for the way you have configured and use it. Vendor IQ packs reduce your effort; they do not replace your intended-use testing.

***

## Which ISO 13485 clauses reference software, and what does each require?

Two clauses carry the primary validation obligations, but several others intersect with how you build and maintain your validation file.

**Clause 4.1.6** covers software used in the QMS. It requires a documented procedure for validation, evidence that validation occurred before initial use, and records of revalidation after changes. Risk proportionality is explicit: the depth of validation must match the risk the software poses to QMS integrity.

**Clause 7.5.6** covers software used in production or service provision. The expectation is the same in structure but the examples differ: label printing, MES functions, release calculation tools, and monitoring systems all fall here.

Related clauses that intersect with your validation program:

- [ISO 14971](https://www.iso.org/obp/ui/en/#!iso:std:60044:en) — (Risk management): risk assessments within your validation file should align with your broader risk management framework, even when ISO 14971 applies formally to device risk rather than QMS software.

**Audit evidence map by clause:**

| Clause | Evidence auditors expect |
|---|---|
| 4.1.6 | Validation procedure, URS, test protocols, signed validation report, revalidation records |
| 7.5.6 | Intended-use statement, performance tests, configuration record, signed release decision |
| 4.2 | Version-controlled validation records in your DMS, retention schedule |
| 6.2 | Training records for validation team members |
| 7.4 | Vendor qualification records, SOC 2 / ISO 27001 certificates, IQ/OQ packages |

When an auditor opens your validation file, the first thing they should see is the intended-use statement and the risk assessment. Those two documents tell them immediately whether your validation scope was rational. Keep them at the front of every validation package.

![Close-up of pharma manufacturing control machines](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785636886785_Close-up-of-pharma-manufacturing-control-machines.jpeg)

***

## What does the ISO 13485 validation lifecycle look like step by step?

A practical validation lifecycle for ISO 13485 has seven stages. The depth at each stage scales with risk, but the sequence is consistent.

1. **Validation plan.** Define scope, intended use, risk level, team roles, deliverables, and acceptance criteria for the project. A two-page plan is sufficient for low-risk tools; high-risk production systems warrant more detail. A reusable SOP plus a protocol template reduces rework across multiple tools.

2. **User requirements specification (URS).** List every function the software must perform in your environment, written in testable language. "The system shall prevent unauthorized users from approving documents" is testable. "The system shall be secure" is not.

3. **Functional and design specification (FS/DS).** Describe how the system meets each URS. For COTS tools, this is often a configuration record that maps system settings to user requirements.

4. **Installation qualification (IQ).** Confirm the software is installed correctly: version, environment, access controls, and integration points. For cloud tools, this includes tenancy configuration and data residency confirmation.

5. **Operational qualification (OQ).** Execute test cases that verify each function works as specified under normal and boundary conditions. Every test case needs a precondition, steps, expected result, actual result, and pass/fail determination.

6. **Performance qualification (PQ).** Confirm the system performs under realistic workloads with real users and real data. For a document control system, this might mean testing concurrent approvals, large document uploads, and audit trail completeness under production-representative conditions.

7. **Validation report and release.** Summarize results, document any deviations and their dispositions, confirm all acceptance criteria were met, and obtain signatures from the process owner, QA lead, and PRRC where applicable. Store the signed report in your validated DMS.

**Sample traceability matrix schema:**

| URS ID | Requirement description | Test case ID | Test result | Deviation ref |
|---|---|---|---|---|
| URS | System prevents unauthorized document approval | TC | Pass | None |
| URS | Audit trail captures user, timestamp, and action | TC | Pass | None |
| URS | System sends notification on document expiry | TC | Fail | DEV |

The traceability matrix is the single artifact auditors use most to assess validation completeness. Every URS line must trace to at least one test case, and every test case must trace back to a requirement.

**Pro Tip:** *Size IQ/OQ/PQ effort by risk bucket. A low-risk cloud eQMS can combine IQ and OQ into a single short protocol. A high-risk MES with custom integrations warrants separate, detailed protocols for each phase. The standard supports this; your validation plan just needs to justify the approach.*

***

## How do you write validation test plans and test cases auditors will accept?

A test protocol that auditors accept has a predictable structure: scope, preconditions, numbered test steps, expected results, actual results, pass/fail determination, and a signature block. What separates defensible test cases from weak ones is specificity in the expected result and completeness in the evidence captured.

**Test protocol template outline:**

- **Scope:** which URS items this protocol addresses
- **Preconditions:** system state, test data, user roles, and environment required before execution
- **Test steps:** numbered, written so a different tester could reproduce them exactly
- **Expected result:** specific, observable outcome (not "system works correctly")
- **Actual result:** recorded during execution, not filled in afterward
- **Pass/fail:** explicit determination against the expected result
- **Evidence:** screenshots, log exports, or signed test sheets attached and referenced by test case ID
- **Sign-off:** tester name, date, and reviewer signature

For data integrity, ALCOA+ principles apply to your test records just as they apply to batch records. Evidence must be attributable (who captured it), legible, contemporaneous (captured at the time of execution), original, and accurate. Timestamps on screenshots must match the execution date in the protocol.

Test case checklist for completeness:

- User role permutations: test each function with the roles that will use it in production
- Boundary conditions: test at the limits of acceptable input, not just the happy path
- Negative tests: confirm the system rejects invalid inputs and unauthorized actions
- Performance tests: use realistic data volumes and concurrent user loads
- Audit trail verification: confirm every relevant action is logged with user, timestamp, and action type

**Pro Tip:** *Design tests in modular blocks tied to individual URS items. When a vendor patch touches only the notification module, you can run just the notification-related test cases rather than the full suite. Document the modular structure in your validation plan so the targeted approach is pre-justified for auditors.*

Thinking about [protocol deviations](https://blog.kohealthlabs.com/blog/how-to-reduce-protocol-deviations-in-clinical-trials) during test execution? Document every deviation immediately, assess its impact on the URS item it covers, and decide whether it requires a test repeat, a CAPA, or an accepted risk. Never close a deviation by simply re-running the test without documenting the root cause.

***

## How do you apply a risk-based approach to scale validation effort?

Applying the same validation depth to a simple document repository and a manufacturing execution system wastes resources and, paradoxically, raises audit risk by obscuring which systems actually matter. The standard explicitly permits risk-proportionate validation; your job is to document the rationale.

**Risk classification rubric:**

| Risk level | Impact on product conformity or patient safety | Likelihood of failure affecting QMS | Recommended validation depth |
|---|---|---|---|
| High | Direct: affects release decisions, product labeling, or safety-critical records | Any | Full IQ/OQ/PQ, detailed URS, traceability matrix, performance tests |
| Medium | Indirect: affects quality records but not directly release or labeling | Medium to high | Combined OQ/PQ, URS, traceability matrix, targeted tests |
| Low | Minimal: administrative support, no quality record output | Low | Intended-use statement, brief risk assessment, configuration record, basic functional test |

**Common tools mapped to risk buckets:**

- [Low:](https://quality.eleapsoftware.com/medical-device-quality-management-software/) — Read-only reference databases, general scheduling tools with no quality record output, internal wikis with no controlled content

A tool can move between buckets when its intended use changes. A training management platform used only to schedule sessions is medium risk. The same platform enabled with electronic signature for training completion records that feed into release decisions moves to high risk. That change in intended use is a revalidation trigger.

**Pro Tip:** *The most common audit finding in risk classification is a missing rationale. Auditors do not object to a low-risk classification; they object when there is no documented reasoning for it. Write two to three sentences in your validation plan explaining why the tool is low risk. That brief justification is what makes the classification defensible.*

***

## How do you keep a validated state after SaaS and cloud updates?

SaaS environments update on vendor schedules, not yours. Without a structured change-impact workflow, every vendor release becomes either a full revalidation event (expensive) or an undocumented gap (an audit finding). Neither is acceptable.

**Vendor evidence to collect before validation and maintain on file:**

- SOC 2 Type II report or ISO 27001 certificate confirming security controls
- Vendor IQ/OQ package or validation guide for your software version
- Release notes for every update, retained in your validation file
- Change logs distinguishing infrastructure changes from functional changes
- Encryption and backup confirmation, including data residency for cloud deployments
- Tenancy model documentation (single-tenant vs. multi-tenant) and its implications for your configuration

**Change-impact matrix workflow for vendor updates:**

1. Receive release notes from the vendor (automate this with a vendor notification subscription)
2. Classify each change: no impact on validated functionality / configuration change / functional change affecting validated scope
3. For no-impact changes: document the classification decision and rationale; no testing required
4. For configuration changes: run targeted tests covering the affected configuration items
5. For functional changes: run the relevant modular test cases from your validation suite
6. Document results, update the validation report addendum, and obtain QA sign-off

Automated validation platforms support this workflow by maintaining a live traceability matrix that flags which test cases are affected by a given change. That targeted approach avoids full revalidation for minor vendor patches while keeping the validated state documented and defensible.

The FDA's Computer Software Assurance guidance reinforces this philosophy: confidence in software comes from targeted, risk-based testing activities, not from documentation volume. For SaaS tools, that means a well-structured impact analysis is often more valuable than a repeated full test suite.

***

## What documentation do auditors expect, and how should you organize it?

A validation file that auditors can navigate in under ten minutes is a competitive advantage during an inspection. The goal is not a thick binder; it is a logically ordered package where every key artifact is findable within two clicks or two tabs.

**Core deliverables checklist:**

| Artifact | Minimum content | Owner |
|---|---|---|
| Validation plan | Scope, intended use, risk level, team, deliverables, acceptance criteria | Validation lead |
| URS | Testable requirements linked to intended use | Process owner |
| Traceability matrix | URS-to-test-case mapping with results | Validation lead |
| IQ protocol and results | Installation confirmation, version, environment | IT / validation lead |
| OQ protocol and results | Functional test cases, evidence, pass/fail | Validation lead |
| PQ protocol and results | Performance tests with realistic data | Validation lead + process owner |
| Deviation log | All deviations, impact assessments, dispositions | QA |
| Vendor evidence pack | SOC 2, IQ/OQ package, release notes | Validation lead |
| Validation report | Summary, deviations, acceptance statement, signatures | QA / PRRC |

Evidence capture specifics matter. Screenshots must show the system name, version, date, and the specific function being tested. Log exports must be unedited originals, not copy-pasted text. Signed test sheets must carry the tester's name, role, and execution date, not just initials.

**Pro Tip:** *Build a one-page evidence index at the front of every validation file. List each artifact, its document number, version, and location in your DMS. Auditors who can orient themselves in 60 seconds spend less time asking questions and more time confirming compliance. That index is the single highest-return document in your validation package.*

Structure your DMS folder for a validated system like this: Validation Plan → URS → Specs → IQ → OQ → PQ → Deviations → Vendor Evidence → Validation Report. Keep the folder name consistent with the system name in your software inventory so auditors can cross-reference without asking.

***

## What are realistic timelines and costs for a validation project?

Validation timelines depend primarily on risk classification, integration complexity, and the availability of vendor evidence. The table below reflects typical effort for U.S. medical device manufacturers working with experienced validation staff.

| Risk level | Typical effort (person-days) | Typical calendar time | Key cost drivers |
|---|---|---|---|
| Low | 2–5 | 1–2 weeks | Scope definition, brief testing, report authoring |
| Medium | — | 3–6 weeks | URS authoring, OQ/PQ execution, vendor evidence review |
| High | — | — | Full IQ/OQ/PQ, integrations testing, performance testing, PRRC review |

Primary cost drivers beyond effort hours:

- **Number of integrations:** each integration point requires its own test cases and often its own IQ confirmation
- **Custom configuration:** heavily configured systems require more URS items and more test cases
- **Vendor evidence availability:** vendors who provide detailed IQ/OQ packages reduce your effort; vendors with minimal documentation increase it
- **Performance testing complexity:** realistic data volumes and concurrent user simulations require test environment setup time
- **QA staffing model:** in-house validation leads cost less per hour but may have competing priorities; contract validation specialists cost more but move faster

**Planning checklist for a pilot vs. enterprise rollout:**

For a pilot (one to two tools):

- Assign a validation lead and a process owner for each tool
- Confirm vendor evidence availability before scoping
- Draft the validation plan and URS in week one
- Execute protocols in weeks two and three
- Close deviations and sign the report in week four

For an enterprise rollout (ten or more tools):

- Build and maintain a software inventory with risk classifications before starting any protocols
- Sequence tools by risk: validate high-risk tools first
- Assign dedicated validation leads per tool cluster
- Establish a shared protocol template and traceability matrix format to reduce per-tool authoring time
- Plan for a PRRC review cycle at each validation report stage

***

## How does validation automation change the workload for your team?

Manual validation is a quiet tax on your QA team. Protocol authoring, traceability matrix maintenance, evidence collection, and deviation tracking consume person-days that could go toward higher-value quality activities. Automation platforms shift that burden by generating agent-authored validation artifacts, enforcing ALCOA+ at write time, and maintaining a live traceability matrix that updates as tests execute.

What to look for when evaluating a validation automation platform:

- **Agent-authored artifacts:** can the platform generate URS, functional specs, IQ/OQ/PQ protocols, and validation reports from your intended-use inputs, or does it only provide templates?
- **Live traceability matrix:** does the matrix update automatically as test cases execute, or does someone maintain it manually?
- **ALCOA+ enforcement:** does the platform check data integrity at the point of record creation and at review, not just at export?
- **Change-impact analysis:** when a vendor update arrives, can the platform identify which test cases are affected without a manual review of the full test suite?
- **Audit export:** can you produce a complete, formatted validation package for an auditor in minutes, not days?
- **Validated deployment model:** is the platform itself deployed in a validated environment, and does the vendor provide their own validation documentation?
- **Integration with your QMS:** does it connect to your existing document control, CAPA, and training systems?

[Qualitum](https://qualitum.ai) addresses each of these criteria with an agentic validation platform built specifically for pharmaceutical, biotech, and medical device organizations. Its multi-agent system authors validation lifecycle artifacts (URS, FS, IQ/OQ/PQ equivalents, validation reports) from your intended-use inputs, enforces ALCOA+ at write time and review time, and maintains a live traceability matrix throughout the validation lifecycle. Qualitum reports significant time savings in authoring, with faster CSV cycles as a direct result.

Expected benefits from automation, based on platform capabilities:

- Reduced authoring time for protocols and reports, freeing QA staff for higher-value activities
- Faster revalidation cycles after vendor updates, using targeted impact analysis rather than full suite reruns
- More defensible audit evidence, with ALCOA+ enforcement built into every record
- Consistent traceability across all validated systems, maintained automatically rather than manually

**Pro Tip:** *Run your first automation pilot on one high-risk tool where the manual validation burden is most visible. Measure authoring time, evidence completeness, and auditor feedback. A single successful pilot with documented time savings is the most persuasive internal business case for an enterprise rollout.*

***

## Key Takeaways

ISO 13485 software validation requires documented, risk-proportionate evidence for every QMS and production tool, validated before first use and revalidated after any change that affects validated functionality.

| Point | Details |
|---|---|
| Two clauses, one obligation | Clause 4.1.6 covers QMS software; clause 7.5.6 covers production software. Both require intended-use validation before first use. |
| Risk drives depth | Low-risk tools need a brief intended-use statement and basic functional test; high-risk tools require full IQ/OQ/PQ with performance testing. |
| Traceability is the auditor's first check | Every URS item must trace to at least one test case with a recorded result. A live traceability matrix is the fastest way to demonstrate completeness. |
| SaaS updates require change-impact analysis | Classify each vendor update, run targeted tests for functional changes, and document the decision. Full revalidation is rarely necessary for minor patches. |
| Qualitum reduces authoring time significantly | Qualitum's agentic platform authors URS, IQ/OQ/PQ protocols, and validation reports while enforcing ALCOA+ at write and review time, cutting manual documentation burden significantly. |

***

## The gap between what validation looks like on paper and what it does in practice

Most audit findings in software validation are not about missing documents. They are about documents that exist but do not connect. A URS with 40 requirements and a test suite with 40 test cases looks complete until an auditor asks which test case covers requirement 17. If the traceability matrix is a manually maintained spreadsheet last updated three months ago, that question becomes a finding.

The deeper problem is that teams often treat validation as a project rather than a state. They validate a system, file the report, and move on. Then the vendor releases an update, someone in IT applies it, and six months later an auditor asks for the revalidation record. There is none, because no one connected the vendor update process to the validation change control process.

Experienced validators do three things differently. First, they write tight scope statements that define exactly what is and is not validated, so any change to the system immediately flags whether it touches the validated scope. Second, they design modular test suites where each module maps to a specific URS section, so a targeted revalidation after a vendor patch takes hours, not weeks. Third, they store validation records where auditors will look first: in the validated DMS, indexed by system name, with a one-page evidence summary at the front.

The teams that sail through audits are not the ones with the thickest validation files. They are the ones whose validation files tell a coherent story from intended use through risk assessment through test evidence through signed release. That story does not require hundreds of pages. It requires discipline in how evidence is structured and maintained.

One pattern worth noting: organizations that rely exclusively on vendor IQ packs as their validation evidence consistently receive observations. The vendor's IQ pack confirms the software was installed correctly in a generic environment. It says nothing about whether your configuration, your user roles, your integrations, and your workflows produce the outcomes your URS requires. That gap is where most audit findings live.

***

## Qualitum cuts validation authoring time so your team can focus on compliance

Validation authoring is where QA hours disappear. Writing URS items, drafting IQ/OQ/PQ protocols, maintaining traceability matrices, and assembling audit packages manually can consume weeks per system. For teams managing ten or more validated tools, that burden compounds into a structural bottleneck.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Qualitum's agentic validation platform was built to eliminate that bottleneck for medical device, pharmaceutical, and biotech organizations. Feed the platform your intended-use inputs, and its multi-agent system authors your URS, functional specifications, IQ/OQ/PQ protocols, and validation report. Every record is ALCOA+ checked at write time and at review, so data integrity is enforced throughout the lifecycle, not audited after the fact. The live traceability matrix updates as tests execute, and when a vendor update arrives, the change-impact analysis identifies exactly which test cases need to run.

The result: a substantial reduction in authoring time, faster CSV cycles, and audit packages that are complete and exportable in minutes. Qualitum deploys in a validated private environment and integrates with your existing QMS, so there is no disruption to your current document control or CAPA workflows.

Start with a paid pilot on one or two of your highest-priority validated systems. Define intended use, run automated protocol authoring and execution, and measure the time savings and evidence completeness against your current manual process. Request a pilot with Qualitum to see what audit-ready validation looks like when the documentation burden is handled by the platform.

***

## Useful sources

Authoritative references for ISO 13485 software validation, clause mapping, and regulatory guidance:

- **FDA Computer Software Assurance for Production and Quality Systems**: The FDA's CSA guidance document, which establishes the risk-based, confidence-building framework for software assurance in production and quality systems. Essential reading for U.S. medical device manufacturers aligning ISO 13485 validation with FDA expectations.

- **Validating QMS Software Tools Under MDR (EN ISO 13485 Clause 4.1.6)**: Practitioner-focused guidance on clause 4.1.6 obligations, intended-use testing, and how to structure a defensible validation file. Covers the distinction between vendor evidence and manufacturer testing.

- **Computer System Validation (CSV) for Medical Device Manufacturing Software**: Covers clause 7.5.6 obligations for production software, risk-proportionate validation approaches, and the software inventory best practice. Includes examples of concise validation files for small organizations.

- **Validation of Software Used in Quality Management System**: Covers COTS and OTS software validation requirements, emphasizing that intended-use testing is required regardless of vendor documentation quality.

- **ISO 13485 Compliance Software — V5 for Medical Device Manufacturers**: Covers ALCOA+ data integrity expectations, GAMP 5 and Annex 11 crosswalks, and how compliance software platforms address ISO 13485 validation requirements.

- **Qualitum: The Agentic Validation Platform for Life Sciences**: Overview of Qualitum's automated validation capabilities, including agent-authored lifecycle artifacts, live traceability matrix, ALCOA+ enforcement, and validated private deployment for regulated organizations.

***

## FAQ

### What software must be validated under ISO 13485?

Any software used in your QMS (clause 4.1.6) and any software used in production or service provision that can affect product conformity (clause 7.5.6) must be validated before first use and revalidated after relevant changes.

### Does a vendor's IQ/OQ package satisfy ISO 13485 validation requirements?

No. Vendor IQ/OQ packages are supporting evidence, but ISO 13485 requires the manufacturer to validate software for their specific intended use, configuration, and environment. Your own test execution and signed validation report are mandatory.

### How often does validated software need to be revalidated?

Revalidation is required after any change that could affect validated functionality, including vendor updates, configuration changes, infrastructure migrations, and changes in intended use. An annual light review is good practice for higher-risk tools even when no formal trigger has occurred.

### What is the difference between ISO 13485 software validation and FDA CSA?

ISO 13485 clause 4.1.6 and 7.5.6 establish the validation obligation; the FDA's Computer Software Assurance guidance provides a risk-based framework for how to build confidence in software through targeted testing. For U.S. medical device manufacturers, both frameworks apply and are largely compatible in their risk-proportionate approach.

### Can Qualitum help with ISO 13485 software validation?

Yes. Qualitum's agentic platform authors URS, IQ/OQ/PQ protocols, and validation reports from your intended-use inputs, enforces ALCOA+ at write and review time, and maintains a live traceability matrix throughout the validation lifecycle, significantly reducing authoring time.

## Recommended

- [Qualitum · The agentic validation platform for life sciences](https://qualitum.ai)

## FAQ
### What software must be validated under ISO 13485?
Any software used in your QMS (clause 4.1.6) and any software used in production or service provision that can affect product conformity (clause 7.5.6) must be validated before first use and revalidated after relevant changes.

### Does a vendor's IQ/OQ package satisfy ISO 13485 validation requirements?
No. Vendor IQ/OQ packages are supporting evidence, but ISO 13485 requires the manufacturer to validate software for their specific intended use, configuration, and environment. Your own test execution and signed validation report are mandatory.

### How often does validated software need to be revalidated?
Revalidation is required after any change that could affect validated functionality, including vendor updates, configuration changes, infrastructure migrations, and changes in intended use. An annual light review is good practice for higher-risk tools even when no formal trigger has occurred.

### What is the difference between ISO 13485 software validation and FDA CSA?
ISO 13485 clause 4.1.6 and 7.5.6 establish the validation obligation; the FDA's Computer Software Assurance guidance provides a risk-based framework for how to build confidence in software through targeted testing. For U.S. medical device manufacturers, both frameworks apply and are largely compatible in their risk-proportionate approach.

### Can Qualitum help with ISO 13485 software validation?
Yes. Qualitum's agentic platform authors URS, IQ/OQ/PQ protocols, and validation reports from your intended-use inputs, enforces ALCOA+ at write and review time, and maintains a live traceability matrix throughout the validation lifecycle, significantly reducing authoring time.
