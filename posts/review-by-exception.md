---
title: Audit First Review by Exception for Pharma QA: ALCOA+ Packets
date: 2026-09-10
description: Audit first playbook for pharma QA: make review by exception audit defensible with ALCOA+ data, validated rules, and exportable audit packets.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1788925080509_Automated-pharmaceutical-batch-inspection-equipment.jpeg
coverAlt: Automated pharmaceutical batch inspection equipment
---

Review by exception (RbE) lets QA review only the batch records that trip a defined limit, skipping routine manual review of every field. It's defensible only when the underlying data is structured and machine-verifiable, the exception rules are validated and change-controlled, and the "no exception" result is periodically proven to mean "in control," not "unmonitored." Get any of those three wrong, and RbE stops being review by exception. It becomes review by omission.

***

> **TL;DR:**
>
> - Valid RbE requires structured, machine-checkable data and traceability from limits to source documents to ensure audit readiness.
> - Properly designed exception rules must specify parameters, conditions, response actions, and ownership to hold up during audits.
> - A phased rollout starting with a single process or product, including shadow mode testing and clear escalation procedures, improves long-term success.
> - Regular validation, change control, and governance of rules are essential to maintain data integrity and system reliability over time.
> - Metrics like exception density and review time, along with periodic manual sampling, help measure RbE effectiveness and highlight potential failures.

***

## Table of Contents

- [What Is Review by Exception, and How Does It Differ From Other Release Models?](#what-is-review-by-exception-and-how-does-it-differ-from-other-release-models)
- [Why Review by Exception Matters: Measurable Benefits and Real Limits](#why-review-by-exception-matters-measurable-benefits-and-real-limits)
- [Prerequisites: The Non-Negotiable Controls Before You Turn RbE On](#prerequisites-the-non-negotiable-controls-before-you-turn-rbe-on)
- [How Do You Design Exception Rules That Hold Up in Audit?](#how-do-you-design-exception-rules-that-hold-up-in-audit)
- [How Should Exception Logic Be Validated and Change-Controlled?](#how-should-exception-logic-be-validated-and-change-controlled)
- [What Does a Staged RbE Rollout Actually Look Like?](#what-does-a-staged-rbe-rollout-actually-look-like)
- [What Do Inspectors Actually Look for in an RbE Program?](#what-do-inspectors-actually-look-for-in-an-rbe-program)
- [Which KPIs Prove Review by Exception Is Working?](#which-kpis-prove-review-by-exception-is-working)
- [What Are the Most Common Ways Review by Exception Fails?](#what-are-the-most-common-ways-review-by-exception-fails)
- [How Does Qualitum Support a Defensible Review by Exception Program?](#how-does-qualitum-support-a-defensible-review-by-exception-program)
- [What I've Learned Watching RbE Rollouts Succeed and Fail](#what-ive-learned-watching-rbe-rollouts-succeed-and-fail)
- [Where to Read More Before Your Next Audit](#where-to-read-more-before-your-next-audit)
- [Ready to Evaluate Your Own Program?](#ready-to-evaluate-your-own-program)
- [Sources](#sources)
- [FAQ](#faq)

## What Is Review by Exception, and How Does It Differ From Other Release Models?

Review by exception is a batch review model in which a system pre-screens every parameter, step, and signature against approved limits, and routes to QA only the records that fail a defined rule. Everything that passes is logged as reviewed by the system rather than paged through by a human. In pharmaceutical manufacturing, this is often called batch review by exception (BRBE), and it sits between two other models QA teams already know.

Full manual review means a human checks every field on every batch record, every time, regardless of whether anything went wrong. Parametric or real-time release goes further than RbE. It uses in-process data to release a batch without any additional testing or review step, and it requires its own separate regulatory pathway and validation burden.

RbE occupies the middle ground: it doesn't replace QA's release decision, and it doesn't eliminate the review requirement under [21 CFR 211 CGMP regulations](https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations). What it changes is where human attention goes.

- QA still owns the release decision and the signature.
- QA still must be able to prove every step was reviewed, whether by a person or a validated rule.
- What changes is *how* that review happens: routine, in-spec data gets machine-confirmed instead of manually re-read.

## Why Review by Exception Matters: Measurable Benefits and Real Limits

The pitch for RbE is straightforward: less time spent re-reading data that was always going to pass, more time spent on the handful of records that actually need judgment. That reallocation is the entire value proposition.

**Reported gains from vendor and practitioner sources**: teams that implement RbE with reliable checks and exportable evidence report substantial reductions in batch review time, though the exact percentage [varies by process complexity and should be confirmed in a pilot](https://mareana.com/blog/how-to-implement-review-by-exception-for-faster-batch-reviews/) rather than assumed from a vendor's marketing figure.

The gains generally show up in three places:

- QA touch time per batch drops because reviewers spend their attention on flagged exceptions, not routine confirmations.
- Release lead time shortens, since batches with zero exceptions can move through disposition faster.
- Audit defensibility can actually *improve*, not just hold steady, because every disposition decision leaves a structured, timestamped rationale instead of a signature next to unremarkable data.

The caveat that gets buried in most vendor pitches: those gains only materialize if the rule set was built to catch what actually matters. A poorly tuned rule set produces fast reviews and a false sense of control.

## Prerequisites: The Non-Negotiable Controls Before You Turn RbE On

RbE is a data-quality problem before it's a software feature. If your batch records still involve manual transcription from a paper logbook into an electronic system, you have a rekeying problem that RbE will not fix. It will just make the rekeying invisible.

1. **Structured, machine-checkable data.** Every parameter RbE evaluates needs to arrive as a discrete, typed value from an integrated source: an instrument, a scanner, an MES tag, a historian point. Free-text fields and scanned PDFs can't be evaluated by a rule.
2. **Specification limits traceable to source documents.** Every limit encoded in a rule must trace back to an approved specification, batch record, or validation protocol. If a limit exists only in a spreadsheet someone updated last quarter, it isn't audit-ready.
3. **Completeness rules and hard gating for critical steps.** The system must refuse to let a batch proceed past a critical step with missing or out-of-sequence data. Silence should never be interpreted as compliance.
4. **ALCOA+ adherence at the data layer.** Every value the rule engine reads must be attributable, legible, contemporaneous, original, and accurate, plus complete, consistent, enduring, and available.
5. **Governance: named rule owners and change control.** Every rule needs a documented owner, a version history, and a formal process before anyone edits it.

**Pro Tip:** *Before writing a single rule, run an inventory of every field currently entered by hand on your batch record. If more than a handful require rekeying or free-text entry, fix data capture first. Layering exception logic on top of manual entry just moves the risk, it doesn't remove it.*

## How Do You Design Exception Rules That Hold Up in Audit?

A rule that says "flag anything abnormal" isn't a rule. It's a wish. Auditors, and more importantly the [first-principles design frameworks published by process engineers](https://www.mesengineer.com/2026/07/23/review-by-exception-how-to-actually-design-it-not-just-turn-it-on/), expect every exception rule to specify six elements: parameter, condition or limit, duration or frequency, required response, escalation role, and documented batch effect.

> A rule that only names a limit but not a response, an owner, and a time window isn't a control. It's a trigger with nowhere to go, and that's exactly what an investigator will test first.

Skipping the duration or frequency field is one of the most common design failures. A single momentary excursion outside a control limit means something very different from a value that drifts for ten consecutive readings. Rules that don't distinguish between the two either flood QA with noise or, worse, let a genuine drift pass silently because no single reading crossed the hard limit.

Two other design principles matter as much as the template itself:

- Separate discrete rule families (pass/fail checks from a PLC or scanner) from batch-level rule families (trend-based, duration-based checks across a run), since they need different validation approaches and different tag verification. Cross-domain rules covering genealogy mismatches and shift handoff confirmations deserve their own category, separate from either.
- Grade severity and scope signatures to match decision authority. A minor cosmetic deviation shouldn't require the same signature tier as a critical process parameter excursion.

## How Should Exception Logic Be Validated and Change-Controlled?

Treat every exception rule as a controlled artifact, not a configuration setting someone can adjust from an admin panel without a paper trail. That means the same CSV rigor you'd apply to a new equipment qualification.

1. **Write a user requirements specification and functional spec for each rule family**, describing what the rule detects, what data it consumes, and what response it triggers.
2. **Build test protocols that include negative testing**, deliberately feeding in-spec and out-of-spec data to confirm the rule catches what it should and, just as important, does *not* fire on data it shouldn't touch.
3. **Verify tag mapping before go-live.** A rule pointed at the wrong historian tag will pass validation testing and still fail in production, quietly, because nobody checked that the tag ID matched the physical sensor.
4. **Version every rule and assign a named owner**, so any change triggers a documented revalidation cycle rather than an informal tweak.
5. **Run shadow mode before cutover.** Let the rule engine evaluate live batches in parallel with full manual review, and compare outputs for a defined stretch of production runs before trusting the system alone.

The [SG Systems Global glossary on batch review by exception](https://sgsystemsglobal.com/glossary/batch-review-by-exception-brbe/) makes the governance point directly: regulators expect the rules themselves to be specified, tested, versioned, and owned, since the rule set is functionally part of the batch record review process, not a convenience layered on top of it.

## What Does a Staged RbE Rollout Actually Look Like?

Sites that flip an entire product line to full RbE in one release cycle tend to retreat within a year, according to [practitioner accounts of RbE prerequisites](https://sakaradigital.com/blog/review-by-exception-batch-records-prerequisites/). The ones that stick with it start narrow and expand deliberately.

1. **Pick one product, one line, or one process zone** with clean data and a manageable rule count, and prove the model there before scaling.
2. **Confirm integration coverage first**: MES, electronic batch record (eBR) systems, historians, scanners, and any third-party lab system feeding results into the record all need to talk to the rule engine without manual bridging.
3. **Define escalation windows and role-based routing** before go-live, not after the first exception fires with nobody assigned to act on it.
4. **Set explicit batch-hold criteria**: which exception severities pause the batch automatically, and which allow continued processing pending review.
5. **Update SOPs and train reviewers on the new workflow**, including what an exception packet looks like and what "zero exceptions" actually certifies.
6. **Communicate the change to auditors and inspectors proactively**, framing it as a documented process change with validation evidence attached, not a surprise they discover mid-inspection.

## What Do Inspectors Actually Look for in an RbE Program?

An inspector reviewing an RbE program isn't primarily interested in the software. They're interested in whether you can trace every automated decision back to an approved source and prove the system caught what it claims to catch.

- **Traceability from rule to source document**: every limit and condition in a rule needs a documented path back to the specification or risk assessment that justified it.
- **Exportable review packets**: a single export per batch showing every exception raised, the evidence attached, the disposition made, and the signatures applied, ready to hand an auditor without assembling it live.
- **Alignment with 21 CFR Part 11 e-signature and audit trail requirements**: every attributable action, timestamp, and signature trigger has to hold up as an immutable, contemporaneous record.
- **Periodic sampling evidence**: a documented practice of pulling a sample of "no exception" batches and manually confirming the system was right, proving that a clean result means in control rather than unmonitored.

## Which KPIs Prove Review by Exception Is Working?

Numbers matter more than confidence here. A rule set that feels like it's working can still be silently over-tuned or under-tuned, and the only way to catch that is to track a small set of metrics over time.

| Metric | What it tells you | Watch for |
|---|---|---|
| Exception density | Exceptions per batch or per parameter | Sudden drops can mean over-widened limits, not improved process control |
| QA touch time | Average review minutes per batch | Should fall after go-live; flat or rising suggests packet rework |
| Release cycle time | Time from last data point to disposition | Shortens with clean exception data, stalls if escalations go unanswered |
| Packet rework rate | % of packets returned for missing evidence | Rising rate signals a documentation gap upstream |
| Exceptions converting to deviations | % of raised exceptions that become formal deviations | A very low rate can mean rules are too loose to catch real issues |

Pair these metrics with periodic manual sampling of clean batches. Trend the numbers monthly, and treat a sudden shift in exception density as a signal to investigate the rule set, not just the process.

## What Are the Most Common Ways Review by Exception Fails?

Most RbE failures aren't dramatic. They're quiet, and that's exactly the problem in a regulated environment.

- **Signature fatigue** from too many low-value exceptions trains reviewers to rubber-stamp rather than evaluate, which is why signature triggers should map to actual decisions, not routine events.
- **Over-widened limits**, quietly adjusted to reduce exception volume, can mask real process drift long before anyone notices.
- **Silent escalations** happen when a rule fires correctly but no one is assigned to act within a defined window.
- **Exceptions handled outside the system**, via email threads or printed PDFs, create a parallel record that no audit export will ever capture.

**Pro Tip:** *Run a quarterly sample audit comparing a set of "no exception" batches against the raw source data. If you find even one batch where the rule engine should have fired and didn't, treat it as a validation failure, not a one-off, and revalidate the affected rule immediately.*

## How Does Qualitum Support a Defensible Review by Exception Program?

Every prerequisite covered above, structured data, traceable limits, governed rules, exportable evidence, is the exact territory Qualitum's platform was built to operationalize. Qualitum applies ALCOA+ checks at both write-time and review-time, which means the data feeding your exception rules is validated for integrity before a rule ever evaluates it, not after an auditor asks.

- Agent-authored validation records reduce the manual documentation burden behind CSV cycles for the rule specifications RbE depends on.
- Every review packet exports with traceable, timestamped evidence linking each exception to its disposition and signature.
- Reported authoring time savings give validation teams room to focus on rule design and sampling instead of paperwork, though any specific figure should be confirmed against your own process during a pilot.

## What I've Learned Watching RbE Rollouts Succeed and Fail

The programs that hold up under audit almost always ran a real shadow mode period, long enough to catch the rules that looked fine on paper but missed something in production. The ones that struggled skipped that step, or shortened it under schedule pressure.

Cross-functional alignment matters more than the rule engine itself. QA, validation, and manufacturing need to agree on what "in control" means before any rule gets written, not after the first disagreement over a disposition. Build in a review cadence from day one. RbE isn't a project with an end date. It's a system that needs its own periodic proof of effectiveness for as long as it runs.

> *— Matt*

## Where to Read More Before Your Next Audit

For teams building or defending an RbE program, a few resources are worth bookmarking before an inspection, not during one.

- [Batch Record Review by Exception: A First-Principles Guide — MES Engineer](https://www.mesengineer.com/2026/07/23/review-by-exception-how-to-actually-design-it-not-just-turn-it-on/)
- Review By Exception: How BRBE Speeds QA Release — SG Systems Global
- [Current Good Manufacturing Practice (CGMP) regulations — FDA](https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations)
- [Audit Trail Review: Inspection-Ready Guide for QA Teams — Qualitum blog](https://blog.qualitum.ai/audit-trail-review)
- MHRA Data Integrity: GxP Compliance Guide — Qualitum blog

## Ready to Evaluate Your Own Program?

Qualitum is built for the exact prerequisite work this article covers: structured data, traceable rule specifications, and exportable audit evidence, without the authoring burden that usually keeps QA teams from getting there. Instead of retrofitting exception logic onto manual processes, Qualitum's agentic validation platform checks every record against ALCOA+ at the moment it's written and again at review, so the "no exception" result actually means something when an inspector asks.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

That matters most for validation and QA leads deciding whether their current data and documentation can support RbE at all. If you're not sure where your program stands, start with the [Free Validation Gap Report](https://qualitum.ai/gap-check) to see where your data and rule governance need work before you build a single exception rule. Teams further along can [book a working session](https://qualitum.ai/book) to walk through a pilot scoped to one product or line, the same staged approach this article recommends.

## Sources

- [Batch Record Review by Exception: A First-Principles Guide – MES Engineer](https://www.mesengineer.com/2026/07/23/review-by-exception-how-to-actually-design-it-not-just-turn-it-on/)
- [How to implement review by Exception for faster batch reviews — Mareana](https://mareana.com/blog/how-to-implement-review-by-exception-for-faster-batch-reviews/)
- [Current Good Manufacturing Practice (CGMP) regulations — FDA](https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations)

## FAQ

### What Does "Comments by Exception" Mean in Batch Review?

"Comments by exception" typically refers to the review model itself, where reviewers only need to document commentary on records that triggered a rule, rather than annotating every field on every batch.

### How Do You Actually Perform a Batch Record Review?

A batch record review confirms that every processing step, parameter, and signature matches the approved master batch record and falls within specification, either through full manual reading or, under RbE, through validated rules that surface only the exceptions.

### What Is an Electronic Batch Record?

An electronic batch record (eBR) is the digital version of a manufacturing batch record, capturing process data, signatures, and documentation directly from integrated systems instead of paper, which is the structured data foundation RbE requires.

### How Long Must Batch Records Be Retained Under FDA Rules?

Retention requirements vary by product type and record category under 21 CFR 211, so confirm the applicable retention period for your specific product with your regulatory affairs team rather than assuming a single universal timeframe.

### Can a Platform Like Qualitum Help Prepare for RbE?

Yes. Qualitum's agent-authored validation approach builds the traceable rule documentation and ALCOA+-checked data foundation that a defensible RbE program requires, which teams can confirm fits their process during a pilot.

## Recommended

- [ALCOA+ Examples Every Pharma Team Should Know](https://blog.qualitum.ai/alcoa-examples)
- [9 ALCOA+ Checks Every Screenshot Evidence Policy Must Enforce for GxP](https://blog.qualitum.ai/screenshot-evidence-policy)
- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [Audit Trail Review: Inspection-Ready Guide for QA Teams](https://blog.qualitum.ai/audit-trail-review)

## FAQ
### What Does "Comments by Exception" Mean in Batch Review?
"Comments by exception" typically refers to the review model itself, where reviewers only need to document commentary on records that triggered a rule, rather than annotating every field on every batch.

### How Do You Actually Perform a Batch Record Review?
A batch record review confirms that every processing step, parameter, and signature matches the approved master batch record and falls within specification, either through full manual reading or, under RbE, through validated rules that surface only the exceptions.

### What Is an Electronic Batch Record?
An electronic batch record (eBR) is the digital version of a manufacturing batch record, capturing process data, signatures, and documentation directly from integrated systems instead of paper, which is the structured data foundation RbE requires.

### How Long Must Batch Records Be Retained Under FDA Rules?
Retention requirements vary by product type and record category under 21 CFR 211, so confirm the applicable retention period for your specific product with your regulatory affairs team rather than assuming a single universal timeframe.

### Can a Platform Like Qualitum Help Prepare for RbE?
Yes. Qualitum's agent-authored validation approach builds the traceable rule documentation and ALCOA+-checked data foundation that a defensible RbE program requires, which teams can confirm fits their process during a pilot.
