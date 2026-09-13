---
title: 5 Readiness Checks Pharma IQ Checklists Need for Audit Ready OQ Handover
date: 2026-09-13
description: Close five pre IQ checks, set measurable acceptance criteria, and deliver a signed IQ baseline for OQ. See how automation preserves ALCOA+.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789139233938_Torque-check-on-pharmaceutical-equipment-installation.jpeg
coverAlt: Torque check on pharmaceutical equipment installation
---

Installation Qualification (IQ) proves the equipment is installed and configured as specified before you power it on. The IQ checklist must map every installed item, from nameplate voltage to firmware version, to a measurable acceptance criterion the equipment owner and QA both sign against. Before executing anything, confirm the protocol is approved and every measurement instrument carries a current calibration certificate.

***

> **TL;DR:**
>
> - Proper scope definition in the IQ protocol prevents disputes and audit findings, requiring clear boundaries for each equipment component.
> - All equipment and measurement instruments must have current calibration certificates, and verification should happen during IQ to avoid delays and non-compliance.
> - The IQ checklist should systematically cover delivery, mechanical, electrical, utilities, environmental, software, calibration, and safety verification, with evidence properly documented.
> - Distinguishing among IQ protocol, checklist, and report ensures proper documentation, clear evidence, and traceability for audit readiness.
> - Automating IQ evidence generation using platforms like Qualitum can reduce authoring time, improve accuracy, and ensure compliance with ALCOA+ principles.

***

## Table of Contents

- [What Does an IQ Checklist Pharma Protocol Need to Define?](#what-does-an-iq-checklist-pharma-protocol-need-to-define)
- [What Has to Be Ready Before IQ Execution Starts?](#what-has-to-be-ready-before-iq-execution-starts)
- [What Goes on the Installation Checklist Itself?](#what-goes-on-the-installation-checklist-itself)
- [How Should the IQ Protocol, Checklist, and Report Differ?](#how-should-the-iq-protocol-checklist-and-report-differ)
- [How Do You Handle a Deviation During IQ?](#how-do-you-handle-a-deviation-during-iq)
- [What Does OQ Need From a Completed IQ?](#what-does-oq-need-from-a-completed-iq)
- [Where Automation Fits Into IQ Evidence Today](#where-automation-fits-into-iq-evidence-today)
- [Where Most IQ Programs Actually Go Wrong](#where-most-iq-programs-actually-go-wrong)
- [A Faster Path to Audit-Ready IQ Evidence](#a-faster-path-to-audit-ready-iq-evidence)
- [Sources](#sources)
- [FAQ](#faq)

## What Does an IQ Checklist Pharma Protocol Need to Define?

An IQ protocol that skips scope definition is the single most common source of audit findings later. Before anyone opens a crate, the protocol needs to state, in writing, exactly what installation qualification covers on this piece of equipment and what it deliberately excludes. A skid-mounted bioreactor, for instance, might have its automation package qualified separately from the mechanical frame. Leaving that boundary implicit invites disputes six months later when an auditor asks who verified the control cabinet wiring.

A defensible IQ OQ PQ validation checklist starts with these elements locked down in the protocol:

- **Scope and objective statement**: what the IQ covers, what's excluded, and why
- **Equipment identification**: manufacturer, model number, serial number, and the facility's internal asset tag
- **Reference documents**: the User Requirements Specification (URS), Design Qualification (DQ), vendor manuals, P&ID drawings, and electrical schematics
- **Roles and responsibilities**: who executes, who reviews, who has final QA sign-off authority
- **Acceptance criteria**: measurable pass/fail thresholds for every checklist line

That last point separates a usable protocol from a liability. Manufacturer specification sheets rarely translate directly into acceptance criteria. A vendor manual might state "supply voltage: 480V, three-phase." A defensible acceptance criterion says "measured voltage within the manufacturer's specified tolerance range across all three phases, recorded with a calibrated multimeter." [ISPE's GAMP framework](https://ispe.org/initiatives/regulatory/what-gamp) explains why this translation matters: the relationship between DQ, IQ, OQ, and PQ only holds up when each stage's criteria trace back to the original user requirements, not to a generic "installed per vendor recommendation" statement that means nothing to an inspector.

## What Has to Be Ready Before IQ Execution Starts?

Most IQ delays trace back to the same handful of missing preconditions, and almost none of them are equipment problems. They're paperwork and calibration gaps that surface the moment someone tries to start testing.

Work through readiness in this order:

1. **Confirm the protocol is approved and signed** by the system owner and QA before any physical work begins. An unapproved or draft protocol executed "to save time" is one of the fastest ways to generate an unusable data set, since [supplier-provided checklists still need review and adaptation](https://ispe.org/initiatives/regulatory/what-gamp) to the site's own environment before they carry any weight.
2. **Assemble the paper trail**: purchase order, packing list, vendor manuals, as-built drawings, and the spare parts list. You'll reconcile against these during delivery checks.
3. **Verify calibration on every test instrument** you'll use to take a measurement, whether it's a multimeter, a thermo-hygrometer, or a pressure gauge. Calibration certificates need to be current and traceable, a requirement [FDA guidance on equipment qualification](https://www.fda.gov/media/71021/download) treats as foundational to any defensible IQ record.
4. **Confirm site prep**: utilities routed to the correct drop points, floor load ratings checked against equipment weight, and any lifting or rigging equipment scheduled for the installation date.
5. **Sequence checks by risk**: critical path items, like a filling line's aseptic barrier integrity, get verified before secondary items like exterior panel fit.

**Pro Tip:** *Build a two-week buffer between "equipment arrives" and "IQ execution starts" specifically for calibration turnaround. Sending a gauge out for recalibration mid-execution is one of the most preventable schedule killers in validation.*

Skipping the risk-based sequencing step is tempting when a schedule is tight, but it's exactly the wrong place to cut corners. A minor cosmetic deviation on a non-critical component shouldn't hold up verification of the systems that actually protect product quality.

## What Goes on the Installation Checklist Itself?

This is where the IQ compliance checklist earns its keep, and where most of the actual evidence gets generated. Break it into the categories that map to how equipment actually gets installed, checked, and released for operational testing.

**Delivery and unpacking.** Reconcile the packing list against what physically arrived. Inventory every component, cable, and accessory against the vendor's bill of materials. Document any shipping damage with photos before anything gets moved or installed, since damage claims filed after installation rarely get honored by freight carriers.

**Mechanical and site fit.** Confirm the equipment footprint matches the DQ drawings, verify clearances for maintenance access and airflow, check anchoring against the manufacturer's torque specs, and trace drain routing if the equipment produces effluent. Floor load ratings matter more than teams expect. A tablet press or a lyophilizer at full load can exceed what an older mezzanine deck was designed to carry.

**Electrical verification.** Compare the equipment nameplate against the actual supply: measured voltage, amperage draw, and phase configuration all need documented readings, not a visual check of the breaker panel. Grounding continuity gets tested and recorded. Emergency stop circuits get physically triggered and verified to cut power, not just inspected visually.

![Emergency stop actuator being physically verified](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789139228645_Emergency-stop-actuator-being-physically-verified.jpeg)

**Utilities.** Compressed air and process gas need pressure and quality checks against the equipment's intake specifications. Water systems (whether purified water, water for injection, or plant utility water) need pressure and, where applicable, conductivity or TOC verification at the point of use. HVAC interfaces, if the equipment ties into a dedicated exhaust or supply system, need airflow direction and rate confirmed.

**Environmental conditions.** Record ambient temperature and relative humidity at the installation site and compare both against the equipment's specified operating range. [WHO's GMP standards](https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/gmp) treat environmental documentation at installation as a qualification requirement, not an afterthought, particularly for equipment sensitive to condensation or thermal drift.

**Software and firmware.** Record the installed software version, firmware revision, and configuration baseline. Verify user access controls match the intended role matrix, and confirm the audit trail function is active, not just present in the software's feature list. Time synchronization across networked systems needs verification too. A control system logging events three minutes off from the plant's master clock creates a traceability headache during any later investigation.

**Calibration and safety.** List every instrument used to take a qualification measurement, with asset numbers and calibration certificate references, and take at least one verification reading against a known standard during IQ itself. Confirm interlocks and machine guards function as designed, check that safety signage is posted, and capture the equipment's serial number directly on the checklist rather than relying on a photo filed elsewhere.

A checklist covering all of the above, drawn from what [LegalClarity's breakdown of installation qualification requirements](https://legalclarity.org/installation-qualification-checklist-what-to-include/) identifies as the standard content set, gives an inspector a single document that answers "how do you know this was installed correctly" without a follow-up question.

## How Should the IQ Protocol, Checklist, and Report Differ?

Confusing these three documents is a recurring audit finding, and it's an easy one to fix once the distinction is clear. The **protocol** is the plan: it defines scope, acceptance criteria, and execution steps before anyone touches the equipment. The **executed checklist** is the evidence: filled-in readings, initials, dates, and attachments like calibration certificates or photos. The **IQ report** is the summary: it states whether the IQ passed, lists any deviations and their resolution, and gives the equipment a documented status for handover.

Acceptance criteria need to be phrased so a second reviewer, someone who never touched the equipment, can independently verify pass or fail from the recorded data alone:

- "Measured supply voltage within 456 to 504 volts across all three phases" (not "voltage checked")
- "Ambient temperature and relative humidity within the manufacturer's specified operating range" (not "environment acceptable")
- "Installed firmware version matches the validated baseline version approved in the design qualification" (not "software verified")
- "Grounding resistance meets the manufacturer's recommended maximum limit" (not "grounding tested")

A traceability matrix ties each of these criteria back to a specific line in the URS or DQ, which is the mechanism ISPE's GAMP guidance recommends for keeping risk-based testing auditable end to end.

| Document | Purpose | Typical contents |
|---|---|---|
| IQ Protocol | Defines the plan | Scope, roles, acceptance criteria, reference documents |
| Executed Checklist | Captures evidence | Readings, initials, dates, attachments, calibration references |
| IQ Report | States the conclusion | Pass/fail summary, deviation list, final disposition |

Retain all three under version control, with wet or electronic signatures on every page requiring sign-off, and route final approval through the same QA authority named in the protocol's roles section.

## How Do You Handle a Deviation During IQ?

A deviation isn't a failure of the process. It's a normal part of it, as long as it's captured properly and closed with evidence.

1. **Record the deviation against the specific checklist line item** it affects, including the actual observed value versus the acceptance criterion it missed.
2. **Risk-assess the deviation's impact** on downstream OQ and PQ scheduling: does this block operational testing, or is it isolated to a non-critical component?
3. **Define the corrective action**, whether that's a vendor service call, a recalibration, or a parts replacement, and assign an owner and a target date.
4. **Re-verify against the original acceptance criterion** once the correction is made, and document that re-verification as a new, dated entry rather than editing the original record.
5. **Close the deviation with QA sign-off**, referencing the corrective action and the re-verification evidence in the IQ report.

Uncalibrated instruments and missing acceptance criteria are two of the most common root causes behind IQ failures, and both are entirely preventable at the pre-IQ readiness stage.

**Pro Tip:** *Never edit a failed reading in place. Strike it through, initial it, date it, and record the corrected value as a new entry. Auditors read a clean, unstruck correction as a bigger problem than the original deviation.*

A low-risk cosmetic deviation, a scuffed panel, a mislabeled cable tie, rarely justifies halting the entire IQ. A deviation touching a safety interlock or an electrical grounding failure does.

## What Does OQ Need From a Completed IQ?

Operational Qualification can't start on assumptions. It needs a defined, signed baseline to test against, and the handover package is what makes that possible.

The minimum evidence set includes:

- The fully **executed IQ checklist**, with every line item closed and initialed
- **Calibration certificates** for every instrument referenced in the qualification
- The confirmed **firmware and software configuration baseline**
- A **resolved deviations list**, with corrective actions and re-verification evidence attached
- The completed **traceability matrix** and all required signature pages

ISPE's GAMP materials are explicit that OQ tests operation within specified ranges only once IQ has established what those ranges and baseline configurations actually are. Handing OQ an incomplete IQ package means the operational tests are built on an unverified foundation. For teams managing the sequence across a larger system, a companion resource on [operational qualification protocols](https://blog.qualitum.ai/operational-qualification-oq) walks through how OQ test cases inherit directly from IQ's documented baseline.

Low-risk open items, like a minor cosmetic deviation on a component that doesn't affect function, don't have to block the start of OQ. High-risk open items, particularly anything touching safety interlocks, calibration traceability, or software configuration, do.

## Where Automation Fits Into IQ Evidence Today

Every requirement above (measurable acceptance criteria, calibration traceability, deviation documentation, signature control) is achievable manually. It's also where most validation teams lose the most hours, because manual IQ authoring means retyping the same equipment data across the protocol, the checklist, and the report, then manually cross-referencing everything against the URS for the traceability matrix.

[Qualitum](https://qualitum.ai) builds its multi-agent platform specifically around that gap. Rather than a QA engineer authoring an IQ protocol from a blank template and then manually populating a checklist during execution, the platform generates protocol content, checklist structure, and report language from a shared data model, so the equipment identification entered once flows through every document without retyping.

The traceability and audit trail requirements this article covers are exactly where Qualitum's data integrity model earns its place. Every record the platform generates gets checked against ALCOA+ principles at the moment it's written and again at review, catching the kind of gaps (a missing initial, an unreferenced calibration certificate, an unresolved deviation) that normally surface only when an auditor asks for them. Data from the validation platform shows authoring time can drop significantly under this model, which may shorten the entire computer system validation cycle rather than just the IQ stage.

![Where Automation Fits Into IQ Evidence Today — overview diagram](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1789139296766_Where-Automation-Fits-Into-IQ-Evidence-Today-overview-diagram.jpeg)

## Where Most IQ Programs Actually Go Wrong

The most frequent failure mode in IQ execution isn't a bad checklist template. It's teams starting execution before the protocol is approved, or trusting a calibration sticker without checking the expiration date on the certificate itself. Both are procedural failures, not technical ones, and both are entirely preventable with a five-minute check before anyone touches the equipment.

If you take one change from this article, make it this: build a hard gate before power-on that requires two confirmations, an approved and signed protocol, and current calibration certificates for every instrument that will take a measurement. That single gate closes off the two failure modes most commonly cited in IQ deviations: unapproved execution and uncalibrated instruments.

The practical next step is small. Add that two-item gate as a literal checkbox at the top of your IQ execution SOP, above the equipment-specific items, so no one can start filling in readings without confirming it first.

> *— Matt*

## A Faster Path to Audit-Ready IQ Evidence

Building the checklist described above by hand, protocol, execution, report, traceability matrix, is achievable, but it's also where validation teams burn the most calendar time for the least differentiated work. Qualitum gives QA and validation leads a way to generate that entire IQ package, protocol authoring, the checklist itself, and the summary report, from one connected data model instead of three separate documents built by hand.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Every field entered once (equipment ID, acceptance criteria, calibration references) carries forward automatically, and every record is checked against ALCOA+ requirements at write-time and again at review, so the audit trail gaps that usually surface during an inspection get caught while the protocol is still being drafted. The platform integrates with existing quality management systems rather than replacing them, and it doesn't touch your SOPs. It automates the authoring and evidence assembly underneath them.

If your team is planning an equipment installation or drowning in IQ rework from a recent audit finding, start with a [free validation gap report](https://qualitum.ai/gap-check) to see where your current process creates the most risk, or [book a working session](https://qualitum.ai/book) to walk through how the [Validate·AI platform](https://qualitum.ai/platform/validate-ai) maps to your specific equipment portfolio.

## Sources

- [FDA guidance on equipment and computerized system qualification](https://www.fda.gov/media/71021/download)
- [WHO GMP standards and specifications](https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/gmp)
- [ISPE: What is GAMP?](https://ispe.org/initiatives/regulatory/what-gamp)

## FAQ

### What Is IQ in Pharma?

Installation Qualification (IQ) is the documented process of verifying that equipment and its supporting systems are installed and configured exactly as specified in the design documentation, before operational testing begins.

### What Do IQ and OQ Stand For?

IQ stands for Installation Qualification, which verifies correct installation, and OQ stands for Operational Qualification, which verifies the equipment functions within its specified operating ranges once IQ is complete.

### What Is the Difference Between IQ, OQ, PQ, and DQ?

DQ (Design Qualification) confirms the equipment design meets user requirements, IQ confirms correct installation, OQ confirms the equipment operates within specified ranges, and PQ (Performance Qualification) confirms consistent performance under actual production conditions.

### What Does IQ Stand For in Validation?

In validation, IQ stands for Installation Qualification: documented evidence that equipment, utilities, and supporting software were installed and configured [according to](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/page-9) approved specifications and manufacturer requirements.

### Can IQ Documentation Be Automated?

Yes. Platforms like Qualitum generate IQ protocols, checklists, and reports from a shared data model, applying ALCOA+ checks automatically and cutting manual authoring time by more than 70 percent compared with fully manual documentation.

## Recommended

- [Audit Readiness Checklist for Validation and QA Leaders](https://blog.qualitum.ai/audit-readiness-checklist)
- [Operational Qualification (OQ): Protocols and Best Practices](https://blog.qualitum.ai/operational-qualification-oq)
- [Qualification vs Validation: A Practical Guide for Pharma QA](https://blog.qualitum.ai/qualification-vs-validation)
- [Risk-Based Test Design Techniques for IQ/OQ/PQ Validation](https://blog.qualitum.ai/test-design-techniques)

## FAQ
### What Is IQ in Pharma?
Installation Qualification (IQ) is the documented process of verifying that equipment and its supporting systems are installed and configured exactly as specified in the design documentation, before operational testing begins.

### What Do IQ and OQ Stand For?
IQ stands for Installation Qualification, which verifies correct installation, and OQ stands for Operational Qualification, which verifies the equipment functions within its specified operating ranges once IQ is complete.

### What Is the Difference Between IQ, OQ, PQ, and DQ?
DQ (Design Qualification) confirms the equipment design meets user requirements, IQ confirms correct installation, OQ confirms the equipment operates within specified ranges, and PQ (Performance Qualification) confirms consistent performance under actual production conditions.

### What Does IQ Stand For in Validation?
In validation, IQ stands for Installation Qualification: documented evidence that equipment, utilities, and supporting software were installed and configured according to approved specifications and manufacturer requirements.

### Can IQ Documentation Be Automated?
Yes. Platforms like Qualitum generate IQ protocols, checklists, and reports from a shared data model, applying ALCOA+ checks automatically and cutting manual authoring time by more than 70 percent compared with fully manual documentation.
