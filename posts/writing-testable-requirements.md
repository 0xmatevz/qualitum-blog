---
title: GxP Inspector Ready Testable Requirements: One Test, ALCOA+ Evidence
date: 2026-10-01
description: Write GxP testable requirements that map one test per requirement, include ALCOA+ evidence, and use automation to keep acceptance criteria inspection ready.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1790714269063_Pharmaceutical-validation-test-rig-recording-evidence.jpeg
coverAlt: Pharmaceutical validation test rig recording evidence
---

Writing testable requirements for regulated validation means expressing each URS or FS item as an owner-measurable acceptance criterion that maps to one verifiable test and a defined evidence artifact. Apply the one-test-per-requirement principle: if a requirement needs two tests to confirm it, split it into two requirements. The immediate action is simple: take any vague requirement in your current URS and rewrite it with a number, a boolean condition, or a timing threshold that a tester can pass or fail without interpretation.

***

> **TL;DR:**
>
> - High-impact requirements, such as dosage calculations, must undergo independent testing under production conditions, while low-impact ones may only need a visual review.
> - Requirements should specify measurable thresholds or conditions to produce verifiable evidence, with compound checks split into separate requirements to ensure clarity.
> - Evidence must preserve metadata and audit trail information, with raw data or true copies preferred over summaries to meet regulatory data integrity standards.
> - Each requirement needs unique metadata, including version number and rationale, to maintain an audit trail and support revalidation after changes.
> - Automated platforms can enforce testability and data integrity criteria during requirement authoring, reducing errors and streamlining inspection readiness.

***

## Table of Contents

- [The authoring workflow that makes requirements testable](#the-authoring-workflow-that-makes-requirements-testable)
- [Templates and examples for testable requirement phrasing](#templates-and-examples-for-testable-requirement-phrasing)
- [Mapping requirements to tests and evidence](#mapping-requirements-to-tests-and-evidence)
- [Using risk to decide how hard to test](#using-risk-to-decide-how-hard-to-test)
- [Writing requirements that produce ALCOA+ evidence](#writing-requirements-that-produce-alcoa-evidence)
- [Keeping the requirement, test, and evidence chain audit-ready](#keeping-the-requirement-test-and-evidence-chain-audit-ready)
- [What authors get wrong most often](#what-authors-get-wrong-most-often)
- [Where automation fits the authoring-to-evidence workflow](#where-automation-fits-the-authoring-to-evidence-workflow)
- [Sources](#sources)
- [FAQ](#faq)

## The authoring workflow that makes requirements testable

Testability is a discipline applied at the point of writing, not fixed later during test design. A consistent workflow catches ambiguity before it reaches a protocol.

1. Confirm the intended use and criticality of the function the requirement describes.
2. Reference the relevant URS or FS section and the process step it supports.
3. Write a measurable acceptance criterion using a number, a boolean condition, or a timing value, and assign an owner.
4. Assign the evidence type and format the test must produce, such as raw data, a true copy, or an audit report.
5. Map the requirement to a single test case and the expected artifact in the traceability matrix.
6. Record the risk justification from your quality risk management review and version the requirement.

Skipping step three is the most common failure. A requirement that says a system "shall accurately record temperature" gives a tester nothing to check against, while a requirement that specifies a tolerance and a logging interval does. Skipping step six creates a different problem: when a requirement changes mid-project with no version history, auditors have no way to see whether the tested version matches the released one.

## Templates and examples for testable requirement phrasing

Most non-testable requirements share a root cause: they describe an intention rather than a measurable outcome. Compare these pairs.

- Non-testable: "The system shall provide fast report generation." Testable: "The system shall generate the batch record report in 10 seconds or less for a dataset of 500 records."
- Non-testable: "User signatures shall be secure." Testable: "The system shall require a unique user ID and password combination for each electronic signature, and shall reject a signature attempt after three failed authentication tries."
- Non-testable: "Data shall be captured reliably." Testable: "The system shall write each measurement to the database within 2 seconds of sensor capture, with no data loss during a simulated network interruption of 30 seconds."
- Non-testable: "Exported files shall preserve data integrity." Testable: "The system shall export data in a format that retains the original timestamp, user ID, and audit trail entry for each record."

A functional requirement template reads: "The system shall [action] within [measurable threshold] when [condition]." A data integrity requirement template reads: "The system shall record [attribute] at the time of [event], attributable to [user or role], without the possibility of overwrite." Each of these examples yields exactly one test case: one for signature lockout behavior, one for report timing, one for capture latency, one for export completeness.

**Pro Tip:** *If a requirement contains the word "and" joining two different checks, split it. A compound requirement forces one test to carry two pass/fail outcomes, and a partial failure becomes impossible to document cleanly.*

![Two independent pharmaceutical equipment test paths](https://media.babylovegrowth.ai/blog-images/organization-48457/1790714379584_Two-independent-pharmaceutical-equipment-test-paths.jpeg)

## Mapping requirements to tests and evidence

A traceability matrix earns its keep during an inspection, not during authoring. It should let an inspector trace forward from a URS line to its test result and evidence, and backward from any test execution to the requirement it satisfies.

- Requirement ID and source document, so the origin in the URS or FS is unambiguous.
- Risk classification, so the reviewer sees why a given requirement received its level of scrutiny.
- Test case ID and phase (IQ, OQ, or PQ), so the qualification stage is clear.
- Expected evidence artifact and format, specifying whether the output is raw data, a true copy, or a summary report.
- Execution date, tester, and approval signature, closing the loop from design to execution.

Evidence selection matters as much as the test itself. A flat file such as a PDF summary may satisfy a low-risk check, but a true copy that preserves metadata, timestamps, and the underlying audit trail is often what [MHRA's GxP data integrity guide](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf?refid=em_a134p000006BsB1AAK) expects, particularly where the original record is electronic. Each requirement should map to one primary test; secondary checks that confirm the same behavior under different conditions can be referenced in the matrix rather than duplicated as separate requirements. This structure is what supports the concept of validation for intended purpose that runs through IQ, OQ, and PQ.

## Using risk to decide how hard to test

Not every requirement deserves the same depth of testing, and treating them equally wastes effort on low-impact items while under-testing the ones that matter. [FDA's General Principles of Software Validation](https://www.fda.gov/media/75414/download) recommends setting validation extent according to the potential effect on quality, safety, and record integrity, which gives teams a documented basis for scoping decisions rather than an arbitrary one.

A quick risk screen asks three questions: what is the impact if this requirement fails, how likely is that failure, and how easily would it be detected before it caused harm.

- High impact, low detectability requirements, such as a dosage calculation, warrant independent review and testing under production-representative conditions.
- Moderate-risk requirements, such as a report formatting rule, can be verified with a single functional test and standard peer review.
- Low-risk requirements, such as a cosmetic UI label, may need only a documented visual check.

**A risk-based approach lets teams justify narrower test scope for low-risk functions and concentrate evidence collection on high-risk items,** a position FDA's software validation guidance supports directly, and inspectors expect to see that rationale written down, not assumed. Document the risk classification next to the requirement itself so an auditor can follow the reasoning without asking for it separately. Qualitum's [risk-based scoping approach](https://blog.qualitum.ai/gamp-5-risk-based) walks through how this plays out in a GAMP 5 context.

## Writing requirements that produce ALCOA+ evidence

A requirement can be technically testable and still fail to produce evidence that holds up to scrutiny if it ignores data integrity attributes. ALCOA+ expectations should be built into the acceptance criteria themselves, not bolted on afterward.

- Attributable: the acceptance criterion specifies that every action is tied to a unique user ID, not a shared login.
- Contemporaneous: the criterion requires the timestamp to be generated at the moment of the action, not entered manually later.
- Original and accurate: the criterion requires the system to preserve a true copy of the record, including metadata, rather than a static export.

Audit trail requirements deserve their own test coverage: confirm the audit trail cannot be disabled by a standard user, confirm it captures the original and changed values on any edit, and confirm exception reports flag anomalies rather than relying on manual review. Flat files like PDFs or Word documents often fail true copy expectations because they strip the underlying metadata that FDA's guidance on CGMP records says must be preserved when electronic raw data exists. Qualitum's [breakdown of static versus dynamic data](https://blog.qualitum.ai/static-vs-dynamic-data) covers this distinction in more depth.

**Pro Tip:** *Write retention duration and required metadata fields directly into the acceptance criterion, since an evidence artifact without both is difficult to defend months later during an audit.*

## Keeping the requirement, test, and evidence chain audit-ready

Every requirement record needs metadata that survives version changes: author, date, version number, approval signature, and a brief rationale for why the requirement exists. Without this, a revised requirement looks identical to the original in a document review, and nobody can tell which version was actually tested.

Impact analysis should trigger a revalidation review whenever a requirement's underlying process, system configuration, or regulatory basis changes, and the acceptance criteria should be phrased broadly enough to anticipate minor version changes without needing a full rewrite. For inspection readiness, retain raw data, audit trail extracts, test execution records, and sign-offs together, not scattered across separate systems.

1. Add a version number and rationale field to every requirement currently missing one.
2. Flag any requirement written without a numeric or boolean threshold for immediate rewrite.
3. Confirm each requirement in the matrix links to exactly one primary test and one evidence artifact.

## What authors get wrong most often

The most common error is writing a requirement around a feature instead of an outcome, which produces a test that confirms the feature exists rather than that it performs correctly. The second is treating evidence capture as an afterthought, then discovering during a fire drill before an audit that the "evidence" is a screenshot with no metadata. Automation and standardized templates reduce both failures by enforcing the acceptance criteria format and evidence type at the point of authoring, before a reviewer ever sees the draft.

> *— Matt*

## Where automation fits the authoring-to-evidence workflow

Writing testable requirements by hand across a full URS is slow, and the quality tax shows up later when auditors ask for evidence that was never captured correctly. Qualitum's platform applies the one-test-per-requirement structure and ALCOA+ checks automatically at write time and again at review time, rather than leaving both to manual discipline.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

- Every record is checked against ALCOA+ criteria as it is authored, not after the fact.
- Requirements link directly into a live traceability matrix, reducing the manual reconciliation that usually happens before an inspection.
- The automation delivers significant time savings in authoring, shortening CSV cycles without changing the human sign-off that remains authoritative.

Teams evaluating this approach can review the [Validate·AI and Operate·AI platform](https://qualitum.ai/platform) or [book a pilot](https://qualitum.ai) to see how the workflow applies to an existing URS.

## Sources

Keep source extracts alongside your test protocols so acceptance criteria and evidence expectations trace directly back to their regulatory basis.

- [MHRA GxP data integrity guide](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf?refid=em_a134p000006BsB1AAK)
- [FDA General Principles of Software Validation](https://www.fda.gov/media/75414/download)

This article is general information, not a substitute for advice from a qualified lawyer. Consult a qualified legal professional about your own circumstances before acting on anything here.

## FAQ

### What makes a requirement testable in validation documentation?

A testable requirement states a measurable acceptance criterion, such as a numeric threshold, a boolean condition, or a timing limit, that maps to exactly one test case. If a reviewer cannot determine pass or fail without added interpretation, the requirement needs rewriting.

### How many test cases should one requirement have?

Under the one-test-per-requirement principle, each requirement should map to a single primary test case and one expected evidence artifact. A requirement needing multiple tests to verify usually contains compound conditions that should be split into separate requirements.

### What evidence satisfies data integrity expectations for a requirement?

Evidence should preserve metadata, timestamps, and audit trail entries as a true copy rather than a flat file summary, consistent with expectations in MHRA's data integrity guidance. A PDF or Word export often strips the underlying data needed to defend the record during an inspection.

### How does risk level change how a requirement should be written?

Higher-risk requirements need tighter, independently reviewed acceptance criteria and evidence collected under production-representative conditions, while lower-risk requirements can rely on a single functional check. The risk classification and its rationale should be documented next to the requirement, as FDA's software validation guidance recommends.

### Can automated platforms like Qualitum help write testable requirements?

Yes. Qualitum's platform applies ALCOA+ checks and the one-test-per-requirement structure automatically at the point of authoring, linking requirements directly into a live traceability matrix rather than requiring manual reconciliation later.

## Recommended

- [9 ALCOA+ Checks Every Screenshot Evidence Policy Must Enforce for GxP](https://blog.qualitum.ai/screenshot-evidence-policy)
- [ALCOA+ Examples Every Pharma Team Should Know](https://blog.qualitum.ai/alcoa-examples)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [FDA CSA LIMS Validation for Pharma: ALCOA+ Proof, Cut Authoring 70%](https://blog.qualitum.ai/lims-validation-pharma)

## FAQ
### What makes a requirement testable in validation documentation?
A testable requirement states a measurable acceptance criterion, such as a numeric threshold, a boolean condition, or a timing limit, that maps to exactly one test case. If a reviewer cannot determine pass or fail without added interpretation, the requirement needs rewriting.

### How many test cases should one requirement have?
Under the one-test-per-requirement principle, each requirement should map to a single primary test case and one expected evidence artifact. A requirement needing multiple tests to verify usually contains compound conditions that should be split into separate requirements.

### What evidence satisfies data integrity expectations for a requirement?
Evidence should preserve metadata, timestamps, and audit trail entries as a true copy rather than a flat file summary, consistent with expectations in MHRA's data integrity guidance. A PDF or Word export often strips the underlying data needed to defend the record during an inspection.

### How does risk level change how a requirement should be written?
Higher-risk requirements need tighter, independently reviewed acceptance criteria and evidence collected under production-representative conditions, while lower-risk requirements can rely on a single functional check. The risk classification and its rationale should be documented next to the requirement, as FDA's software validation guidance recommends.

### Can automated platforms like Qualitum help write testable requirements?
Yes. Qualitum's platform applies ALCOA+ checks and the one-test-per-requirement structure automatically at the point of authoring, linking requirements directly into a live traceability matrix rather than requiring manual reconciliation later.
