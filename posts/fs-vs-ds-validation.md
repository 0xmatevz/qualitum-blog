---
title: FS vs DS Validation: What Each Spec Proves and Where They Differ
date: 2026-11-06
description: FS vs DS validation explained for GxP computerized systems: what each specification covers, who signs, how to trace them to tests, and when to combine them.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1793809867553_Pharma-validation-specification-documents-under-review.jpeg
coverAlt: Pharma validation specification documents under review
---

The Functional Specification (FS) states what a computerized system must do. The Design Specification (DS) states how the system is built to do it. In validation, the FS is what your operational testing proves against, and the DS is what your installation and configuration checks prove against. Keep the two apart and every requirement can be traced to a behavior, a build decision and a test.

This guide is for validation managers, QA leads and CSV engineers who need to decide what goes in each document, who signs it, and when one document is enough.

## TL;DR

- **FS = what.** Workflows, business rules, permissions, audit-trail behavior, inputs and outputs, written from the user's perspective.
- **DS = how.** Architecture, data structures, interfaces, security implementation and configuration.
- **Traceability is the point.** URS to FS to DS to tests to results, held in a live traceability matrix.
- **Two documents are not always required.** A combined, controlled specification can be justified when the risk is low and the decision is documented.
- **Changes reopen both.** Run impact analysis, then regression-test what the change touches.

## Table of Contents

- [What FS and DS mean in computerized system validation](#what-fs-and-ds-mean-in-computerized-system-validation)
- [FS vs DS at a glance](#fs-vs-ds-at-a-glance)
- [What a good Functional Specification contains](#what-a-good-functional-specification-contains)
- [What a good Design Specification contains](#what-a-good-design-specification-contains)
- [Who writes, reviews and approves each document](#who-writes-reviews-and-approves-each-document)
- [How FS and DS link to testing](#how-fs-and-ds-link-to-testing)
- [Traceability: keeping URS, FS, DS and tests connected](#traceability-keeping-urs-fs-ds-and-tests-connected)
- [Do you always need separate FS and DS documents?](#do-you-always-need-separate-fs-and-ds-documents)
- [Changes, suppliers and keeping the specs current](#changes-suppliers-and-keeping-the-specs-current)
- [Common mistakes in FS and DS validation](#common-mistakes-in-fs-and-ds-validation)
- [Automating FS, DS and trace evidence with Qualitum](#automating-fs-ds-and-trace-evidence-with-qualitum)
- [FAQ](#faq)
- [Sources](#sources)

## What FS and DS mean in computerized system validation

In pharmaceutical computerized system validation (CSV), the FS describes what the system must do from a [user or functional perspective](https://www.easy-gcs.ch/grid/yecs/concept/data-handling/clinical-data-mgmt-system/computer-system-validation.html), while the DS details the technical implementation and configuration through which those functions are achieved.

A useful way to hold the difference: the User Requirements Specification (URS) says what the business needs. The FS translates that need into system functions. The DS translates those functions into construction. In the GAMP 5 lifecycle the core CSV documents are usually listed as the URS, FS, DS, Configuration Specification, Verification Plan and Traceability Matrix, [with the URS and FS reviewed and approved by QA and end users](https://www.pharmagmp.in/gamp-5-explained-practical-application-for-modern-pharma-facilities/).

The search term "FS vs DS validation" also pulls in unrelated results about food safety, process validation and simulation modeling. Here we mean only the two specifications that sit between the URS and the qualification protocols for GxP software and automated equipment.

## FS vs DS at a glance

| Aspect | Functional Specification (FS) | Design Specification (DS) |
|---|---|---|
| Core question | What will the system do? | How is it built to do that? |
| Written from | User and process perspective | Technical and engineering perspective |
| Typical content | Business rules, workflows, role-based permissions, audit-trail functions, data inputs and outputs | Architecture, modules, database schema, communication interfaces, security controls, configuration |
| Derived from | The URS | The FS |
| Tested mainly by | OQ (functional testing) | IQ (installation and configuration verification), plus design-based checks |
| Typical signers | QA and System Owner | Engineering or IT, plus QA |

The content split comes from published practice rather than a single regulation. One [pharmacovigilance validation guide](https://qppv.com/functional-specifications-and-design-specifications-in-pharmacovigilance) describes the FS as covering workflows, user interactions, permissions and audit-trail behavior, and the DS as covering architecture, data models, interface mappings, security implementation and infrastructure. A [CSV review SOP](https://reesach.com/sop-functional-design-specification-review-csv-lifecycle-management/) lists FS content in similar terms: business rules, workflows, permissions, audit-trail functions and data inputs and outputs.

## What a good Functional Specification contains

An FS earns its place when each statement is something a tester can observe. Think in terms of behavior:

- **Workflows and state changes:** how a record moves from draft to approved, who can trigger each step.
- **Business rules:** calculations, limits, mandatory fields, hold and release logic.
- **Roles and permissions:** which role can create, review, approve, delete or configure.
- **Audit-trail behavior:** which events are captured, what is recorded (who, what, when, why), and that entries cannot be altered.
- **Data inputs and outputs:** formats, reports, exports, interfaces seen from the outside.

Two habits keep an FS defensible. First, give every function a unique identifier that points back to a URS line. Second, write each function so it can be verified by a single, unambiguous test. Our own write-up on [one test per requirement](https://blog.qualitum.ai/functional-specification-validation) goes deeper on that discipline.

Avoid putting construction detail in the FS. "The system enforces unique user IDs" is a function. "The user table has a unique index on column X" is a design decision, and it belongs in the DS.

## What a good Design Specification contains

The DS documents how the system is constructed so that someone other than the author can understand, install, verify and maintain it. Typical sections:

- Architecture and modules, including hosting and environments.
- Database schema and data formats.
- Algorithms and logic for the critical functions.
- Interface descriptions: protocols, mappings, error handling.
- Security controls: authentication, encryption, access enforcement.
- Configuration settings that realize the FS functions, often split into a separate Configuration Specification for configurable commercial software.

Accevo's manufacturing system guide frames it the same way: the FS covers [system functions and modules that meet the URS](https://accevo.com/blog/manufacturing-system-validation-in-the-pharmaceutical-industry-ebr-mes-system-validation/), while the DS documents how the system is built, including structure, logic, data formats and interfaces.

For commercial off-the-shelf software, the vendor often owns most of the design. Your DS may then reference vendor documentation and focus on your configuration and your interfaces. That is legitimate, provided the supplier material is assessed and the references are controlled.

## Who writes, reviews and approves each document

Ownership follows expertise. A commonly used CSV review SOP assigns the roles this way: the [System Owner confirms business needs are reflected](https://reesach.com/sop-functional-design-specification-review-csv-lifecycle-management/), QA checks compliance and traceability, CSV verifies testability and traceability, and IT or the vendor supplies the technical design. The same source treats an approved URS as an input to the review and approves the documents once comments are resolved.

A published validation lifecycle document for a SCADA system shows how the signatures can split: the [FS needs the QA Manager and System Owner, while the DS needs the Engineering Manager plus QA](https://optizeus.org/downloads/OptiZeus_Validation_Lifecycle.pdf). Your own quality procedures decide the actual approvers, so match them to your SOP rather than copying another company's table.

### Timing in the lifecycle

The sequence is straightforward. URS approved first. FS drafted and approved next. DS follows once the functions are fixed. Protocols are then written against them. Drafting protocols before the FS is stable is the classic source of rework, because every changed function forces a protocol revision. For the wider sequence, see our [seven-phase CSV lifecycle](https://blog.qualitum.ai/csv-lifecycle).

## How FS and DS link to testing

The FS and DS are not tested directly. They define what the qualification and validation protocols check.

- **IQ** verifies the system is installed and configured as the DS describes: versions, settings, infrastructure, security controls.
- **OQ** verifies the system performs as the FS describes: workflows, rules, permissions, audit trail.
- **PQ** verifies it performs in the real process, against the URS.

If you want a clearer line between qualification and validation terms, our guide to [qualification versus validation](https://blog.qualitum.ai/qualification-vs-validation) lays it out.

A validation package typically flows from the URS through FS and DS, technical artifacts, IQ/OQ/PQ, execution records and the Validation Summary Report, [with the traceability matrix tying requirements to tests and results](https://dev.to/beefedai/validation-master-plan-vmp-development-and-lifecycle-management-588d).

![Pharma packaging machine during qualification testing](https://media.babylovegrowth.ai/blog-images/organization-48457/1793809930778_Pharma-packaging-machine-during-qualification-testing.jpeg)

## Traceability: keeping URS, FS, DS and tests connected

A Requirements Traceability Matrix (RTM) is where the FS and DS prove their worth. A [state government RTM template](https://portal.ct.gov/-/media/Departments-and-Agencies/DSS/CT-METS/Library/General/CTDSSRequirementsTraceabilityMatrixv11.pdf) describes starting the matrix alongside the initial requirements and updating it as the Design Specifications and test protocols are developed, with each requirement ideally traced to the specific test step. That is a general-purpose template, not a GxP rule, but the logic carries over directly.

A minimal GxP trace row looks like this:

| URS ID | FS ID | DS ID | Risk | Test ID | Result | Deviation |
|---|---|---|---|---|---|---|
| URS-014 | FS-031 | DS-012 | High | OQ-045 | Pass | None |

Three checks catch most problems:

1. **No orphan requirements:** every URS line reaches at least one test.
2. **No orphan functions:** every FS function traces back to a URS line, or to an explained regulatory or safety need.
3. **No orphan tests:** every test step points to a requirement or function.

Maintaining this by hand in a spreadsheet works for a small system and breaks for a portfolio. That is where a live trace graph helps: our [AI Trace Agent](https://qualitum.ai/agents/trace) is built to flag every change to a linked requirement, function or test as it happens.

## Do you always need separate FS and DS documents?

No. Separate documents are a convention, not a universal requirement. A [pharmacovigilance validation guide](https://qppv.com/functional-specifications-and-design-specifications-in-pharmacovigilance) notes that a combined controlled specification, or a concise requirements-and-configuration record, may be appropriate. What matters is that what the system does and how it is configured are both documented, controlled and testable.

The decision should be risk-based. A configurable, low-risk tool with minimal customization may justify one combined specification. A system that touches product release, batch records or patient safety usually warrants separate documents and deeper testing. Whatever you choose, record the rationale in the validation plan so it is traceable. The regulatory direction supports this thinking: FDA's final [Computer Software Assurance guidance](https://www.federalregister.gov/documents/2025/09/24/2025-18468/computer-software-assurance-for-production-and-quality-system-software-guidance-for-industry-and), announced in September 2025, covers software used in medical device production and the quality system and centers on assurance activities proportionate to risk. Our guides to [risk-based validation](https://blog.qualitum.ai/risk-based-validation) and [CSV risk assessment](https://blog.qualitum.ai/csv-risk-assessment) show how to document that scaling.

## Changes, suppliers and keeping the specs current

A specification that is approved once and never touched is a warning sign. Software is patched, configurations drift and suppliers release updates.

FDA's guidance on blood establishment computer systems is a useful official reference for the principle. It says changes should prompt [impact analysis and appropriate regression testing](https://www.fda.gov/media/72533/download), and that users remain responsible for keeping the system validated, including after supplier changes. It also expects contracts to address notification so users learn which functions are potentially affected. That guidance is written for a specific system type, but the same responsibilities are the norm in GxP supplier management.

In practice:

- **Update the right document.** A changed workflow touches the FS. A changed database, interface or setting touches the DS.
- **Scope regression by impact.** Retest the functions the change can affect, not the whole system. Fundamentals of [regression testing after software changes](https://connectedmedics.com/knowledge-hub/d6900d0e-ea6f-48f3-8026-ea66ed93e75c) apply to validated pharmaceutical systems as much as anywhere.
- **Contract for notification.** Put change-notice obligations into quality agreements with suppliers.

## Common mistakes in FS and DS validation

- **Copying the URS into the FS.** The FS must add system-level detail, not repeat requirements in new words.
- **Mixing "what" and "how."** Design details in the FS make it brittle, and behavior-only statements in the DS leave nothing to verify.
- **Untestable language.** Words such as "user-friendly" or "fast" cannot be passed or failed. Give measurable criteria.
- **Validating everything to the same depth.** Equal depth on a low-risk tool and a batch-release system wastes effort where it adds no assurance.
- **Signatures that do not match roles.** QA approving a design it cannot assess, or engineering approving functions it does not own, weakens the record.

> ## Our perspective
>
> We see the FS and DS as the place where validation either becomes evidence or becomes paperwork. When the two documents are written once and then left to drift, teams spend the weeks before an audit reconciling them with the protocols. That is the fire drill nobody budgets for, and it is a quiet tax on every release.
>
> Our view is that authoring should be agent-assisted and the evidence should be checked as it is written. In Qualitum, every record is ALCOA+ checked at write-time and again at review-time, the traceability matrix stays live as the specs change, and human signatures remain authoritative. People decide. The platform removes the retyping, the cross-referencing and the manual chasing of version mismatches.
>
> The real question is not whether to keep FS and DS separate. It is whether you can show, on any given day, which requirement led to which function, which design element and which executed test. If you can, the format of the documents matters much less.
>
> *Matt*

## Automating FS, DS and trace evidence with Qualitum

If your team spends more time formatting and cross-checking specifications than reviewing them, that is the work we built Qualitum to take on. The platform supports agent-authored validation lifecycle management across URS, FS, DS, IQ, OQ and PQ, with a live traceability matrix, deviation and CAPA handling, and integrations with major quality management systems. It deploys privately inside your infrastructure.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

You can see how this works in practice through our [requirements drafting use case](https://qualitum.ai/use-cases/drafting) and our [AI Drafting Agent for IQ/OQ/PQ and test specs](https://qualitum.ai/agents/drafting). To scope a first system, start with a paid pilot via [Qualitum](https://qualitum.ai), or review the [Validate·AI and Operate·AI platform](https://qualitum.ai/platform).

## FAQ

### What is the difference between FS and DS in validation?

The FS describes what the system must do: workflows, rules, permissions and audit-trail behavior. The DS describes how the system is built to do it: architecture, data structures, interfaces and configuration. The FS is tested mainly in OQ, and the DS is verified mainly in IQ.

### Which comes first, the FS or the DS?

The FS comes first. It is derived from the approved URS, and the DS is derived from the FS. Writing protocols before the FS is approved usually means rewriting them when functions change.

### Can the FS and DS be combined into one document?

Yes, when the system is low risk or largely configured rather than custom-built, and when the decision is documented in the validation plan. The combined document must still cover both function and configuration, and every item must stay traceable to a test. Higher-risk systems usually keep them separate.

### Who signs the FS and DS?

Practice varies by company, so follow your SOP. A common pattern has the System Owner and QA approving the FS, and engineering or IT plus QA approving the DS. CSV specialists typically review both for testability and traceability.

### Do FS and DS need updating after a software change?

Yes, wherever the change alters documented behavior or design. Run an impact analysis, update the affected specification, and regression-test the functions the change can touch. Supplier change notices should feed this process.

## Sources

- [Computerised System Validation, clinical data management system (easy-gcs)](https://www.easy-gcs.ch/grid/yecs/concept/data-handling/clinical-data-mgmt-system/computer-system-validation.html)
- [Functional Specifications and Design Specifications in Pharmacovigilance (QPPV)](https://qppv.com/functional-specifications-and-design-specifications-in-pharmacovigilance)
- [GAMP 5 Explained: Practical Application for Modern Pharma Facilities](https://www.pharmagmp.in/gamp-5-explained-practical-application-for-modern-pharma-facilities/)
- [Manufacturing system validation in the pharmaceutical industry (Accevo)](https://accevo.com/blog/manufacturing-system-validation-in-the-pharmaceutical-industry-ebr-mes-system-validation/)
- [SOP: Functional and Design Specification Review (Reesach)](https://reesach.com/sop-functional-design-specification-review-csv-lifecycle-management/)
- [OptiZeus SCADA Validation and Software Lifecycle Document](https://optizeus.org/downloads/OptiZeus_Validation_Lifecycle.pdf)
- [Validation Master Plan Development and Lifecycle Management](https://dev.to/beefedai/validation-master-plan-vmp-development-and-lifecycle-management-588d)
- [Requirements Traceability Matrix Template (Connecticut DSS)](https://portal.ct.gov/-/media/Departments-and-Agencies/DSS/CT-METS/Library/General/CTDSSRequirementsTraceabilityMatrixv11.pdf)
- [Computer Software Assurance for Production and Quality System Software (Federal Register)](https://www.federalregister.gov/documents/2025/09/24/2025-18468/computer-software-assurance-for-production-and-quality-system-software-guidance-for-industry-and)
- [Guidance for Industry: Blood Establishment Computer System Validation (FDA)](https://www.fda.gov/media/72533/download)
- [Reinventing biotech systems for patient impact](https://connectedmedics.com/knowledge-hub/d6900d0e-ea6f-48f3-8026-ea66ed93e75c)

## Recommended

- [One Test Per Requirement: Functional Spec Validation for Regulated CSV](https://blog.qualitum.ai/functional-specification-validation)
- [CSA vs CSV for Validation Teams: What QA Needs to Know](https://blog.qualitum.ai/csa-vs-csv)
- [32% Faster FS Authoring for Validation Teams: Audit Ready FS Automation](https://blog.qualitum.ai/fs-automation)
- [Configurable vs Custom Validation in GxP Systems](https://blog.qualitum.ai/configurable-vs-custom-validation)

## FAQ
### What is the difference between FS and DS in validation?
The FS describes what the system must do: workflows, rules, permissions and audit-trail behavior. The DS describes how the system is built to do it: architecture, data structures, interfaces and configuration. The FS is tested mainly in OQ, and the DS is verified mainly in IQ.

### Which comes first, the FS or the DS?
The FS comes first. It is derived from the approved URS, and the DS is derived from the FS. Writing protocols before the FS is approved usually means rewriting them when functions change.

### Can the FS and DS be combined into one document?
Yes, when the system is low risk or largely configured rather than custom-built, and when the decision is documented in the validation plan. The combined document must still cover both function and configuration, and every item must stay traceable to a test. Higher-risk systems usually keep them separate.

### Who signs the FS and DS?
Practice varies by company, so follow your SOP. A common pattern has the System Owner and QA approving the FS, and engineering or IT plus QA approving the DS. CSV specialists typically review both for testability and traceability.

### Do FS and DS need updating after a software change?
Yes, wherever the change alters documented behavior or design. Run an impact analysis, update the affected specification, and regression-test the functions the change can touch. Supplier change notices should feed this process.
