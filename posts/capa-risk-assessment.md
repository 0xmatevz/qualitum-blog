---
title: Six Stage Audit Ready CAPA Risk Assessment for QA and Compliance Leads
date: 2026-09-20
description: Audit ready CAPA process for QA and compliance leads in pharma. Six stages, two tier triage, SMART verification, and traceable evidence to satisfy inspectors.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789722476682_Pharmaceutical-inspection-station-with-segregated-lot-containers.jpeg
coverAlt: Pharmaceutical inspection station with segregated lot containers
---

A CAPA risk assessment is the structured application of risk identification, analysis, and evaluation at CAPA initiation and planning, so that corrective and preventive actions are prioritized and sized to the actual patient-safety, product-quality, and compliance stakes involved. The practical answer for QA leads is to embed this assessment at triage, before any action is selected, and run a two-tier CAPA model with pre-defined SMART effectiveness checks built in from day one, not bolted on at closure.

***

> **TL;DR:**
>
> - Risk assessment tools should match the failure complexity; FMEA suits process issues, while risk matrices and fault-tree analysis are better for safety-critical or multi-faceted failures.
> - Implementing a two-tier CAPA system prioritizes high-risk issues with greater investigation resources, reducing backlog and focusing on genuinely harmful nonconformities.
> - Effectiveness checks must be written during planning with specific metrics and independent verifiers to prevent subjective or post hoc evaluations.
> - Closure relies on objective evidence linking corrective actions to root causes, with risk re-scoring for validated systems to determine if revalidation is necessary.
> - Automation platforms ensure audit-ready documentation by checking cross-references and evidence integrity at every stage, reducing manual effort and improving traceability.

***

## Table of Contents

- [Why Risk-Based CAPA Matters to Regulators](#why-risk-based-capa-matters-to-regulators)
- [The CAPA Workflow, Stage by Stage, With Risk Gates Built In](#the-capa-workflow-stage-by-stage-with-risk-gates-built-in)
- [Choosing the Right Risk Assessment Tool for the Job](#choosing-the-right-risk-assessment-tool-for-the-job)
- [Building a Two-Tier CAPA Model That Actually Prioritizes](#building-a-two-tier-capa-model-that-actually-prioritizes)
- [Root Cause Analysis That Actually Reduces Risk](#root-cause-analysis-that-actually-reduces-risk)
- [Designing SMART Effectiveness Checks Before You Act](#designing-smart-effectiveness-checks-before-you-act)
- [Tying CAPA Back Into Validation and the Risk Register](#tying-capa-back-into-validation-and-the-risk-register)
- [The KPIs That Tell You Whether CAPA Actually Works](#the-kpis-that-tell-you-whether-capa-actually-works)
- [Where Automation Fits Into Risk-Based CAPA](#where-automation-fits-into-risk-based-capa)
- [What Most CAPA Programs Get Wrong](#what-most-capa-programs-get-wrong)
- [Automate Your CAPA Risk Assessment Evidence Trail](#automate-your-capa-risk-assessment-evidence-trail)
- [Primary Sources and Guidance](#primary-sources-and-guidance)
- [Sources](#sources)
- [FAQ](#faq)

## Why Risk-Based CAPA Matters to Regulators

CAPA is not a paperwork exercise regulators tolerate. It's the system they use to judge whether a quality unit actually understands its own failures. FDA regulation 21 CFR 820.100 requires manufacturers to investigate the cause of nonconformities and verify that corrective actions are effective, not just documented. ISO 13485 and ISO 9001 echo this expectation for quality management systems broadly, and ICH Q9 sets out the risk management vocabulary, identification, analysis, evaluation, that CAPA teams are now expected to apply consistently rather than case by case.

Inspection trends make the stakes concrete. CAPA remains one of the most frequently cited deficiencies in FDA inspections, and [Redica's analysis of inspection outcomes](https://www.redica.com/resources/post/strategies-to-improve-your-capa-program-addressing-key-compliance-risks) points to a recurring pattern: understaffed CAPA programs treat every nonconformity with the same intensity, which buries genuinely dangerous issues under a backlog of low-risk paperwork. Risk-based CAPA fixes that by routing resources to what actually threatens patients or product quality first.

[MDCG guidance](https://health.ec.europa.eu/document/download/080c6aed-4f09-4a8a-b052-3414275945db_en) reinforces the same discipline for medical device manufacturers: nonconformities go into a structured template with assigned responsibilities, supporting evidence, and defined verification timelines, not a free-text summary. The regulatory logic across FDA, ISO, ICH, and MDCG converges on three things:

- CAPA must trace from a documented root cause to a specific, proportionate action.
- Effectiveness must be verified with objective evidence, not assumed from closure.
- Risk assessment determines how much investigation and follow-up a given issue deserves.

That convergence is why regulators increasingly focus less on whether a CAPA was closed on time and more on whether it demonstrably prevented recurrence. Closure speed without proof of effectiveness is now a red flag, not a strength, according to industry CAPA management analysis.

## The CAPA Workflow, Stage by Stage, With Risk Gates Built In

Every CAPA moves through the same six stages: identification, investigation, planning, implementation, verification, and closure. What separates an audit-ready program from a reactive one is where risk assessment sits inside that sequence, and who signs off at each handoff.

1. **Initiation and triage.** Screen every trigger, complaint, deviation, audit finding, trend alert, against severity, likelihood of recurrence, detectability, and regulatory impact. This is where you decide Tier 1 or Tier 2, and it should take hours, not days.
2. **Investigation.** Assign an investigator functionally separate from the process owner. Use the triage risk score to set investigation depth: a Tier 1 issue justifies fault-tree analysis and cross-functional review; a Tier 2 issue may only need a documented 5 Whys.
3. **Planning.** Translate root cause findings into actions sized to the risk. This is the point to re-run or refine the risk assessment, since investigation often surfaces a different severity or likelihood than the initial triage suggested.
4. **Implementation.** Assign an owner distinct from the investigator wherever staffing allows. Document the implementation date, scope, and any interim containment already in place.
5. **Verification.** A verifier who did not implement the action confirms effectiveness against criteria written during planning, not invented after the fact.
6. **Closure.** Close only after objective evidence supports the verification criteria, and cross-reference the CAPA ID in any validation or risk register documents it touches.

[CASRAI's process guidance](https://casrai.org/guides/capa-process-steps) is explicit that segregation of duties across these handoffs measurably reduces the audit findings that come from self-verified, self-closed CAPAs. Every handoff needs a documented decision, not a verbal agreement. When investigation reveals a root cause more systemic than the initial triage assumed, that's your signal to escalate: reopen the risk assessment rather than force the original tier to hold.

**Pro Tip:** *Build your CAPA form so the risk score field is mandatory before the "proposed action" field unlocks. Teams that can write actions before scoring risk will do it every time, and it defeats the entire point of triage.*

## Choosing the Right Risk Assessment Tool for the Job

Not every CAPA needs a full FMEA, and not every CAPA is safe to run through a five-minute risk matrix. The tool has to match the stakes and the complexity of the failure mode.

**FMEA** works well when a CAPA touches a process or system with multiple interacting failure modes, a manufacturing line change, a software update affecting several functions. The Risk Priority Number (severity times occurrence times detectability) gives you a ranked list, but RPN has a well-documented weakness: it can mask a low-detectability, high-severity failure behind a merely average composite score. Treat RPN as a starting point for discussion, not a final verdict, and flag any high-severity item for manual review regardless of its composite number.

![FMEA and risk matrix CAPA comparison](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789722480589_FMEA-and-risk-matrix-CAPA-comparison.jpeg)

**Risk matrices** are the fastest triage tool available, plotting severity against likelihood on a simple grid. That speed is also their limitation. According to a comprehensive review of CAPA effectiveness practices, risk matrices suffer from range compression and subjective scoring, meaning two reviewers can plot the same event in different cells. Use a matrix for the initial triage call, then confirm anything landing in a high-impact zone with a more structured method before finalizing the CAPA plan.

**Hazard analysis and fault-tree analysis (FTA)** suit CAPAs involving safety-critical equipment or facilities, where you need to trace a failure back through multiple contributing branches rather than a single linear cause.

**LOPA (Layer of Protection Analysis)** earns its place when a CAPA involves a process with existing safeguards, interlocks, alarms, procedural checks, and you need to know whether those layers still provide adequate protection after a near-miss.

> A structured review of CAPA literature found that risk matrices are useful for preliminary prioritization but should be confirmed with more rigorous analysis for high-impact items, given their known limitations around subjectivity and compressed rating scales.

Whichever tool you choose, document both inherent risk (before controls) and residual risk (after controls), and record how you assessed each control's actual effectiveness, not just its existence. A control that exists on paper but has never been challenged is not a control your CAPA plan should rely on.

## Building a Two-Tier CAPA Model That Actually Prioritizes

A two-tier model exists to stop every CAPA from consuming the same investigative bandwidth. Tier 1 CAPAs are reserved for issues with high severity, meaningful recurrence likelihood, poor detectability, or direct regulatory exposure, adverse events, sterility failures, systemic deviations across product lines. Tier 2 covers lower-risk, isolated events: a labeling typo caught before release, a single out-of-spec reading with a clear, non-systemic cause.

Triage should run against a fixed set of criteria every time, not a subjective gut check:

- **Severity**: could this reach a patient, or does it stay contained within the process?
- **Likelihood of recurrence**: is this a one-off, or does the same condition exist elsewhere in the process?
- **Detectability**: would your current controls catch this again before it escapes?
- **Regulatory impact**: does this connect to a prior 483, warning letter, or audit finding?

Timelines should scale with tier. A review of CAPA program strategies points to a two-tier structure as one of the most effective levers for reducing backlog without sacrificing rigor on the issues that matter. Practical benchmarks many programs use include prompt containment soon after identification for Tier 1 issues, with effectiveness verification windows that allow sufficient time to generate reliable data to judge recurrence, which vary based on process cycle times.

Risk thresholds should also govern resourcing, not just timelines. A Tier 1 CAPA justifies a cross-functional investigation team; a Tier 2 CAPA can run with a single qualified investigator. Setting these thresholds in writing, before a crisis forces an ad hoc decision, is what keeps triage consistent across shifts, sites, and reviewers.

## Root Cause Analysis That Actually Reduces Risk

The most common regulator-cited CAPA failure isn't a missing signature. It's a root cause analysis that stops at "human error" or "operator retraining" without asking why the error was possible in the first place. Auditors expect to see extent-of-condition thinking: does this failure exist elsewhere in the process, on other lines, at other sites?

Match the RCA method to the complexity of the failure:

- **5 Whys** works for straightforward, single-cause events where the causal chain is short and traceable.
- **Fishbone (Ishikawa) diagrams** suit failures with multiple contributing categories, people, methods, materials, equipment, where you need to see interactions rather than a single chain.
- **Fault-tree analysis** fits complex, safety-critical failures where several independent conditions had to align for the failure to occur.

The output of RCA has to feed directly back into the risk assessment. If investigation reveals the root cause is systemic, a training gap that spans three shifts rather than one operator's mistake, the corrective action has to address the system, and the risk score should be revised upward to reflect that broader exposure. A corrective action that retrains one person after finding a procedural gap affecting the whole department doesn't lower risk; it just documents that you found the problem.

**Pro Tip:** *When your RCA report includes the phrase "operator error" as the final answer, treat that as an incomplete investigation, not a conclusion. Ask what allowed the error to happen and go one level deeper before writing the corrective action.*

Every corrective action in your plan should reference the specific root cause it addresses and the specific risk element it reduces, severity, likelihood, or detectability. That cross-reference is what an auditor looks for when testing whether your CAPA program does real risk analysis or just performs it on paper.

## Designing SMART Effectiveness Checks Before You Act

Effectiveness verification criteria written after implementation are, functionally, an excuse waiting to happen. Write them during the planning stage, before anyone touches the process, so nobody can shape the criteria around whatever outcome actually occurred.

A workable SMART verification criterion names the metric, the threshold, the data source, and the observation window in one sentence: "Complaint rate for lot deviation type X falls below two per 10,000 units over a 90-day rolling window, measured from the complaint management system." That's specific, measurable, achievable, relevant to the original risk, and time-bound. MDCG guidance explicitly calls for this level of specificity when CAPA templates define verification steps and timelines.

1. **Select the evidence type before implementation**, trend analysis, internal audit results, statistical sampling, or complaint rate tracking, based on what will actually demonstrate the risk has receded.
2. **Assign an independent verifier.** The person confirming effectiveness should be functionally separate from whoever implemented the action, since a verifier grading their own work introduces exactly the bias regulators are trained to spot.
3. **Set the observation period to match the process cycle time.** A batch process running monthly needs a longer verification window than a continuous process generating daily data; 30 to 90 days is a common range, but the actual number should follow your process's natural data cadence.
4. **Build a reopen path for failed verification.** If the evidence doesn't meet the threshold, the CAPA reopens, the risk assessment gets revisited, and a revised action goes back through planning rather than getting a quiet extension.

Segregating implementation from verification is one of the most consistently underused safeguards in CAPA programs. When the same person who fixed the problem also confirms it worked, the confirmation carries an unavoidable conflict of interest, however well-intentioned the individual is.

## Tying CAPA Back Into Validation and the Risk Register

A CAPA that touches a validated system isn't finished when the corrective action closes. It has to trigger a decision: does the residual risk profile of that system still match what the original validation assumed? Guidance on closing this loop recommends re-scoring risk with the same tool used in original validation, FMEA or HACCP, so the comparison is apples to apples rather than a fresh assessment built on different assumptions.

The practical workflow looks like this: identify whether the CAPA's root cause maps to a validated process step, re-run the relevant risk tool with the new information, compare the revised score against the original validation's acceptance criteria, and document whether the gap justifies partial or full revalidation.

| Step | Action | Output |
|---|---|---|
| 1. Impact check | Determine if CAPA root cause touches a validated system or process step | Yes/No impact determination, documented |
| 2. Re-score risk | Re-run original validation risk tool (FMEA/HACCP) with new findings | Revised risk score vs. original |
| 3. Gap decision | Compare revised score to validation acceptance criteria | Partial revalidation, full revalidation, or no action needed |
| 4. Cross-reference | Record CAPA ID in validation report and risk register | Traceable link for audit review |

This is also where [risk-based validation approaches](https://blog.qualitum.ai/risk-based-validation) earn their keep. If your organization already maintains a living risk register outside of individual validation packages, CAPA trend data should feed it directly. A cluster of Tier 1 CAPAs pointing at the same equipment class is a signal for a management review conversation, not just three separate closed records sitting in a document management system.

## The KPIs That Tell You Whether CAPA Actually Works

A CAPA program can look healthy on paper and still be failing patients. The metrics that catch that gap are the ones read together, not in isolation.

- **On-time closure rate**: tracks whether your program meets its own deadlines, but says nothing about quality.
- **Effectiveness verification rate**: the share of CAPAs where the pre-defined SMART criteria were actually met, not just checked as complete.
- **Recurrence rate**: how often the same or a related failure reappears after a CAPA closes, the single clearest signal of whether root cause analysis worked.
- **Average time to close by tier**: should differ meaningfully between Tier 1 and Tier 2; if it doesn't, your triage isn't actually differentiating workload.

Closure speed read alone is a vanity metric. A program that closes CAPAs quickly but shows a rising recurrence rate is manufacturing the appearance of compliance, not the substance of it.

| Metric | What it signals | Escalation trigger |
|---|---|---|
| Effectiveness verification rate | Whether corrective actions actually work | Below your internal target for two consecutive quarters |
| Recurrence rate | Whether root cause analysis is systemic enough | Any repeat of a closed Tier 1 issue |
| On-time closure by tier | Whether resourcing matches risk tiering | Tier 1 average time approaching Tier 2 average |

Set a management review cadence, monthly for Tier 1 trend review, quarterly for full program metrics, and keep records structured enough that an inspector can trace any CAPA from trigger to verification evidence without needing a narrated explanation. Inspection readiness isn't a separate activity from good CAPA management. It's what good CAPA management looks like from the outside.

## Where Automation Fits Into Risk-Based CAPA

Manual CAPA documentation creates the exact gaps regulators keep citing: missing cross-references, verification criteria written after the fact, and audit trails that don't hold up under scrutiny. Qualitum's multi-agent validation platform addresses this by having every record checked against ALCOA+ principles at the moment it's written and again at review, rather than relying on a reviewer to catch data integrity gaps after the fact.

That structure has specific operational payoffs for CAPA risk assessment work:

- **Automatic CAPA ID cross-referencing** into linked validation documents and risk registers, so the traceability an auditor expects doesn't depend on someone remembering to update three separate files.
- **Consistent record structure** across CAPAs, meaning an inspector reviewing five different CAPA files sees the same evidence hierarchy every time, not five different documentation styles from five different authors.
- **Faster evidence collation for effectiveness checks**, pulling trend data, complaint metrics, and audit results into a single traceable package instead of a manual assembly job before each verification deadline.
- The platform can help reduce authoring time significantly, freeing quality teams to spend that reclaimed time on investigation depth rather than document formatting.

Tools like [Investigate·AI](https://qualitum.ai/platform/investigate-ai) are built specifically around this kind of investigational traceability, connecting root cause findings to the risk assessments and validation records they affect, without requiring a QA specialist to manually stitch the connections together after the fact.

## What Most CAPA Programs Get Wrong

The weakest link in most CAPA programs isn't the corrective action itself. It's the triage decision made in the first hour, when nobody has full information and everyone's instinct is to treat every issue with the same urgency. Weak problem statements are the quiet failure point: a CAPA that opens with "process deviated from procedure" instead of naming the specific parameter, magnitude, and affected lots sets up a shallow investigation from the start.

Collapsed handoffs are the second recurring pattern. When the same person investigates, implements, and verifies, the CAPA technically has three stages but functionally has one perspective checking itself. Retroactive effectiveness criteria compound both problems: writing verification thresholds after you already know the outcome isn't verification, it's narration.

The fixes are not complicated. Write sharper problem statements at initiation. Commit to real two-tier triage with criteria in writing, not memory. Define SMART effectiveness checks during planning, before anyone acts. None of this requires new software or a program overhaul, just discipline applied consistently.

My ask of leadership is simple: resource CAPA proportionate to risk, and require independent verification without exception. A quality system that lets people grade their own corrective actions isn't a quality system. It's a hope.

> *— Matt*

## Automate Your CAPA Risk Assessment Evidence Trail

Building a defensible CAPA risk assessment program by hand means chasing signatures, reconciling spreadsheets, and hoping your cross-references survive an inspector's scrutiny. Qualitum takes a different route: every CAPA record, risk score, and effectiveness check is authored and checked against ALCOA+ principles as it's created, so the traceability regulators expect is built in rather than reconstructed after the fact.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

The [Validate·AI and Operate·AI platform](https://qualitum.ai/platform) connects CAPA documentation directly to your existing risk registers and validation records, so a Tier 1 CAPA that touches a validated system automatically carries its cross-reference forward instead of waiting for someone to remember. Qualitum deploys privately within your own infrastructure, with zero data egress and customer-managed encryption, so evidence stays under your control while the authoring burden drops. If you want a clearer picture of where your current CAPA documentation has gaps before you commit to anything, start with a [free validation gap report](https://qualitum.ai/gap-check), or [book a working session](https://qualitum.ai/book) to see how a pilot would fit your existing quality management system.

## Primary Sources and Guidance

The regulatory and technical positions in this article draw on the following primary sources, useful for QA teams building or auditing their own CAPA risk assessment procedures:

- [MDCG guidance on CAPA templates and expectations](https://health.ec.europa.eu/document/download/080c6aed-4f09-4a8a-b052-3414275945db_en), covering EU medical device expectations for SMART verification.
- CAPA effectiveness in risk mitigation and quality improvement: a comprehensive review, on ICH Q9 tool application and risk matrix limitations.
- [NSW Treasury risk management toolkit](https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/risk-management-toolkit/chapter-5-risk-management-process), on the identification, analysis, and evaluation structure of risk assessment.
- Closing the loop: how CAPA should tie back to validation risk assessments, on integrating CAPA outcomes with validation risk tools.
- [CASRAI's CAPA process steps guidance](https://casrai.org/guides/capa-process-steps), on segregation of duties across CAPA stages.

## Sources

- [MDCG guidance — CAPA template and expectations](https://health.ec.europa.eu/document/download/080c6aed-4f09-4a8a-b052-3414275945db_en)
- [NSW Treasury — Risk management toolkit (Chapter 5)](https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/risk-management-toolkit/chapter-5-risk-management-process)

## FAQ

### What Are the Seven Steps of CAPA?

Most CAPA frameworks compress into six operational stages, identification, investigation, planning, implementation, verification, and closure, though some programs add a separate "containment" step immediately after identification to make seven. The structure matters less than the discipline: each stage needs a documented decision and, ideally, a different person signing off than the stage before it.

### Is CAPA Part of Six Sigma?

CAPA and Six Sigma share tools, like root cause analysis and structured problem solving, but CAPA is a distinct regulatory requirement under frameworks such as FDA 21 CFR 820.100, not a Six Sigma deliverable. Many quality teams borrow Six Sigma's DMAIC discipline to strengthen CAPA investigations, but a compliant CAPA program stands on its own regulatory footing regardless of whether Six Sigma methods are used.

### What Are the 5 Whys in CAPA?

The 5 Whys is a root cause analysis technique where investigators ask "why" repeatedly, typically five times, to move past a surface symptom toward a systemic cause. It works best for straightforward failures with a single traceable chain; more complex, multi-factor failures usually need a fishbone diagram or fault-tree analysis instead.

### What Should Be Included in a CAPA?

A complete CAPA record includes a specific problem statement, a documented root cause analysis, a risk assessment justifying the tier and urgency, the corrective and preventive actions taken, pre-defined SMART effectiveness verification criteria, and evidence confirming those criteria were met. MDCG guidance also expects assigned responsibilities and timelines documented at the planning stage, not added retroactively.

### How Does Automation Help With CAPA Risk Assessment?

Automation platforms like Qualitum reduce the manual burden of cross-referencing CAPA records to risk registers and validation documents, applying ALCOA+ checks at write time so evidence stays audit-ready without extra reviewer effort. Qualitum reports significant time savings in authoring, based on its own client data; current pricing for its product lines is available directly on the [Qualitum site](https://qualitum.ai/pricing).

## Recommended

- [Risk-Based Validation: A Practical Guide for QA Leads](https://blog.qualitum.ai/risk-based-validation)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [Three Phase Risk Based Cleaning Validation Strategy for Pharma QA](https://blog.qualitum.ai/cleaning-validation-strategy)
- [Pharma QA: Close Deviation and CAPA Evidence Gaps with Automation](https://blog.qualitum.ai/deviation-and-capa)

## FAQ
### What Are the Seven Steps of CAPA?
Most CAPA frameworks compress into six operational stages, identification, investigation, planning, implementation, verification, and closure, though some programs add a separate "containment" step immediately after identification to make seven. The structure matters less than the discipline: each stage needs a documented decision and, ideally, a different person signing off than the stage before it.

### Is CAPA Part of Six Sigma?
CAPA and Six Sigma share tools, like root cause analysis and structured problem solving, but CAPA is a distinct regulatory requirement under frameworks such as FDA 21 CFR 820.100, not a Six Sigma deliverable. Many quality teams borrow Six Sigma's DMAIC discipline to strengthen CAPA investigations, but a compliant CAPA program stands on its own regulatory footing regardless of whether Six Sigma methods are used.

### What Are the 5 Whys in CAPA?
The 5 Whys is a root cause analysis technique where investigators ask "why" repeatedly, typically five times, to move past a surface symptom toward a systemic cause. It works best for straightforward failures with a single traceable chain; more complex, multi-factor failures usually need a fishbone diagram or fault-tree analysis instead.

### What Should Be Included in a CAPA?
A complete CAPA record includes a specific problem statement, a documented root cause analysis, a risk assessment justifying the tier and urgency, the corrective and preventive actions taken, pre-defined SMART effectiveness verification criteria, and evidence confirming those criteria were met. MDCG guidance also expects assigned responsibilities and timelines documented at the planning stage, not added retroactively.

### How Does Automation Help With CAPA Risk Assessment?
Automation platforms like Qualitum reduce the manual burden of cross-referencing CAPA records to risk registers and validation documents, applying ALCOA+ checks at write time so evidence stays audit-ready without extra reviewer effort. Qualitum reports significant time savings in authoring, based on its own client data; current pricing for its product lines is available directly on the Qualitum site.
