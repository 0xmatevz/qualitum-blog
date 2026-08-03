---
title: Data Integrity by Design: A Pharma QA Playbook
date: 2026-08-03
description: Explore how data integrity by design enhances compliance in pharma. Embed ALCOA+ checks from day one for a seamless audit-ready process.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785733660871_pharma-manufacturing-machines-in-cleanroom.jpeg
coverAlt: pharma manufacturing machines in cleanroom
---

Data integrity by design means embedding ALCOA+ checks, traceability, and recoverability into every process and system from the first day of design, not as a remediation layer added after an FDA finding. The [ISPE GAMP RDI Good Practice Guide](https://ispe.org/publications/guidance-documents/gamp-rdi-good-practice-guide-data-integrity-design) defines this as a lifecycle activity that connects system design to data governance from initial planning through system retirement. Done correctly, it transforms compliance from a fire drill before an audit into a continuous, auditable state.

**The three elements to design in from the start:**

- **Write-time validation:** Every critical data element is checked for format, range, and attribution at the moment of capture, not during review.
- **Traceability and immutable audit trails:** Every record change is logged with a timestamp, user identity, and reason, with no mechanism to delete or overwrite the original.
- **Recoverability and backup tiers:** Soft deletion, tiered backups, and out-of-band corruption checks are architected before go-live, not bolted on after the first incident.

**Three tasks your QA team can start this week:**

1. Map your top three high-risk data flows (typically raw instrument data, LIMS entries, and batch record sign-offs) and document where write-time controls are absent.
2. Capture critical data elements in your System Requirements Specification (SRS), noting the ALCOA+ attribute each element must satisfy and the control that enforces it.
3. Assign a governance owner for data integrity, someone with authority to halt a release if integrity evidence is missing, before your next system change.

***

## Table of Contents

- [What does data integrity by design actually mean in pharma?](#what-does-data-integrity-by-design-actually-mean-in-pharma)
- [What does the FDA actually expect during inspections?](#what-does-the-fda-actually-expect-during-inspections)
- [Which technical and process controls must you design in from the start?](#which-technical-and-process-controls-must-you-design-in-from-the-start)
- [How do GAMP RDI, GAMP 5, and QbD fit together?](#how-do-gamp-rdi-gamp-5-and-qbd-fit-together)
- [What does a realistic implementation roadmap look like?](#what-does-a-realistic-implementation-roadmap-look-like)
- [How do you test data integrity and what KPIs should you track?](#how-do-you-test-data-integrity-and-what-kpis-should-you-track)
- [Are you audit-ready? An inspection checklist for QA leaders](#are-you-audit-ready-an-inspection-checklist-for-qa-leaders)
- [What are the bottom-line recommendations?](#what-are-the-bottom-line-recommendations)
- [Key Takeaways](#key-takeaways)
- [The tradeoff that most frameworks don't address honestly](#the-tradeoff-that-most-frameworks-dont-address-honestly)
- [How Qualitum operationalizes data integrity by design](#how-qualitum-operationalizes-data-integrity-by-design)
- [Useful sources](#useful-sources)
- [FAQ](#faq)

## What does data integrity by design actually mean in pharma?

The phrase "data integrity by design" is the practitioner shorthand for a principle that ISPE formalizes in its GAMP RDI Good Practice Guide: data integrity is an architectural requirement, not a compliance checkbox. The contrast with reactive remediation is stark. Remediation starts after an observation, a warning letter, or an internal audit finding. Design-time integrity starts at the System Requirements Specification and never stops.

![pharma QA production control room with machines](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785733637934_pharma-QA-production-control-room-with-machines.jpeg)

In regulated pharmaceutical settings, this means every system, instrument, and process that generates or transforms GxP data must be specified, built, and validated with integrity controls as first-class requirements, not afterthoughts.

![Infographic showing key data integrity steps in pharma](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785734292320_Infographic-showing-key-data-integrity-steps-in-pharma.jpeg)

### ALCOA and ALCOA+ mapped to controls

The FDA and international regulators use ALCOA as the foundational framework for evaluating data integrity. ALCOA+ extends it with five additional attributes that reflect modern electronic record environments.

| ALCOA+ Attribute | What it requires | Example control | Evidence auditors expect |
|---|---|---|---|
| **Attributable** | Every record linked to the person or system that created it | Role-based access control, unique user IDs, electronic signatures | Access logs, signature manifest |
| **Legible** | Records readable throughout the retention period | Validated display formats, PDF/A archiving, font/encoding standards | Archived record samples, rendering test results |
| **Contemporaneous** | Data captured at the time of the activity | Server-side timestamps, no pre-dating or post-dating controls | Audit trail with timestamp delta analysis |
| **Original** | First capture is preserved; copies are clearly identified | Immutable write-once storage, copy flagging in LIMS | Audit trail showing no overwrites on originals |
| **Accurate** | Records reflect what actually occurred | Write-time range/format validation, instrument calibration linkage | Validation protocols (IQ/OQ/PQ), calibration records |
| **Enduring** | Records survive the full retention period | Tiered backup, media migration SOP, format-boundary checksums | Backup logs, media verification records |
| **Available** | Records retrievable on demand | Indexed archive, recovery-time objective (RTO) testing | Restore test reports |
| **Complete** | No gaps in the data set | Sequence-number checks, mandatory field enforcement | Completeness audit reports |
| **Consistent** | Dates, times, and sequences are internally coherent | Synchronized system clocks (NTP), cross-system reconciliation | Clock-sync logs, reconciliation reports |

Auditors do not just ask whether these attributes are defined in a policy. They ask for evidence that each control was tested, is operating, and has been reviewed. A policy without a tested control is a gap waiting to become a Form 483 observation.

***

## What does the FDA actually expect during inspections?

FDA investigators approach data integrity with a specific mental model: they look for the presence of controls, the evidence those controls are operating, and the absence of mechanisms that would allow manipulation. [21 CFR Part 11](https://www.fda.gov/) governs electronic records and electronic signatures, but it is not the only predicate rule in play. cGMP regulations under 21 CFR Parts 211, 212, and 820 independently require accurate and complete records, which means a system can fail a data integrity inspection even if it technically meets Part 11's technical specifications.

Common FDA inspection findings in data integrity include:

- **Missing or incomplete audit trails:** Systems configured with audit trails disabled, or audit trail data not reviewed as part of routine quality oversight.
- **Shared login credentials:** Multiple analysts using a single account, making attribution impossible.
- **Backdated entries:** Paper or electronic records with timestamps that do not match the actual time of activity, often discovered through metadata analysis.
- **Inadequate retention policies:** Data deleted before the regulatory retention period expires, or archived in formats that cannot be rendered without proprietary software.
- **Uncontrolled instrument data:** Raw data from standalone instruments (pH meters, balances, filter testers) stored locally with no backup, no audit trail, and no transfer verification.
- **Lack of second-person review of audit trails:** Audit trails exist but are never reviewed, meaning anomalies go undetected until an investigator finds them.

For practical regulatory intelligence on how these expectations are evolving in biotech settings, [regulatory intelligence in biotech](https://blog.haiphai.com/blog/what-does-regulatory-intelligence-mean-biotech) provides useful context on how agencies are sharpening their focus on electronic records.

Beyond Part 11, the FDA's 2018 data integrity guidance and MHRA's GxP data integrity guide (widely referenced by US-based multinationals) both reinforce that predicate rules set the floor. Part 11 sets the technical specifications for electronic records and signatures, but cGMP sets the quality obligation. Designing for both simultaneously is the only defensible approach.

***

## Which technical and process controls must you design in from the start?

The controls that matter most are the ones that prevent integrity failures at the point of data creation, not the ones that detect failures weeks later during a periodic review. ISPE GAMP RDI and engineering guidance from [Google SRE](https://sre.google/sre-book/data-integrity) converge on a defense-in-depth model: layer controls so that a single failure does not produce an undetected integrity loss.

### Core technical controls

- **Immutable audit trails:** Write-once, append-only logs that capture every create, read, update, and delete event with a server-side timestamp and user identity. No user, including administrators, should be able to delete audit trail entries.
- **Role-based access control (RBAC):** Permissions defined by job function, not by individual negotiation. Separation of duties between data entry, review, and approval is non-negotiable for GxP systems.
- **Write-time validation:** Format, range, and referential integrity checks applied at the moment of data capture. A pH value of 14.7 or a batch number that does not exist in the batch master should be rejected at entry, not flagged during review.
- **Checksums and format-boundary verification:** A checksum computed at write-time and verified at read-time catches silent corruption between components. Seven Rules for Building Data-Intensive Systems treats this as a non-negotiable requirement for any data-intensive system.
- **Soft deletion and backup tiers:** Records marked as deleted must remain in the database and in audit trails. Tiered backups (local fast-restore plus off-site long-term) with tested recovery paths protect against both accidental deletion and catastrophic failure.
- **Tamper-evident storage:** Cryptographic hashing or digital signatures on record sets so that any modification after the fact is detectable.
- **Recovery paths tested before go-live:** Designing a recovery path is not the same as having one. Recovery must be tested under realistic failure conditions, including partial corruption and concurrent-write scenarios, before the system is released to production.

### Core process controls

- **Supplier assessments:** GxP computerized system suppliers must be assessed under a risk framework aligned with ICH Q9(R1). Configuration decisions and system ownership must remain with the regulated organization, not the vendor.
- **SRS with critical data elements:** The System Requirements Specification must name every critical data element, the ALCOA+ attribute it must satisfy, and the control that enforces it. A generic "the system shall maintain an audit trail" is not sufficient.
- **Change control tied to the data lifecycle:** Any change to a system that affects data capture, storage, or retrieval must pass through change control and trigger a documented impact assessment on data integrity.
- **Human-review rules for audit trails:** Audit trail review must be a defined, scheduled activity with documented evidence of completion, not an ad hoc task performed only before inspections.
- **Knowledge management:** Procedures, configurations, and validation rationale must be documented so that staff turnover does not create integrity gaps.

**Pro Tip:** *The highest-risk zone in most pharmaceutical IT architectures is not the LIMS or the ERP. It is the interface between them. Silent corruption at system boundaries, where data is transformed from one format to another, is a leading cause of undetected integrity failures. Design checksums and reconciliation checks at every integration point before go-live.*

### Instrument-level handling: a practical example

A pH meter that stores readings locally presents a different risk profile than a LIMS entry. ISPE GAMP RDI specifically calls out instrument-level risks: these devices increasingly store electronic records without the technical controls available in full computerized systems. The pragmatic approach is to define a documented transfer procedure (manual transcription with second-person verification, or automated transfer with checksum verification), retain the original instrument printout or electronic export as the raw data record, and include the transfer step in the system's validation scope.

![close-up of pharma lab instrument and data devices](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785733642412_close-up-of-pharma-lab-instrument-and-data-devices.jpeg)

***

## How do GAMP RDI, GAMP 5, and QbD fit together?

These three frameworks are not competing approaches. They are complementary lenses that, used together, give you a complete picture of where to focus design effort and how to document it.

### GAMP RDI and GAMP 5 lifecycle alignment

[GAMP 5's second edition](https://www.sciencedirect.com/science/article/pii/S1359644623002751) emphasizes a risk-based, iterative lifecycle that integrates data integrity concerns directly into software classification and computer system validation (CSV) activities. The CSV scope, the validation evidence required, and the level of supplier oversight are all determined by the software's GxP impact and its data integrity risk profile.

GAMP RDI plugs into this lifecycle at three specific points:

1. **System Requirements Specification:** GAMP RDI requires that critical data elements and their integrity controls be specified before design begins. This is where ALCOA+ attributes are assigned to each data element and the controls that enforce them are documented.
2. **Supplier assessment:** GAMP RDI and GAMP 5 both require that suppliers of GxP systems be assessed for their ability to support data integrity requirements. This includes reviewing the supplier's software development lifecycle, their audit trail implementation, and their configuration management practices.
3. **Validation planning and execution:** DQ, IQ, OQ, and PQ protocols must include explicit data integrity test cases. Passing functional tests is not sufficient; the validation must demonstrate that integrity controls operate correctly under normal and failure conditions.

### Where QbD adds precision

Quality by Design directs attention to critical quality attributes (CQAs) and the process parameters that affect them. Applied to data integrity, QbD asks: which data elements, if corrupted or lost, would directly affect product quality or patient safety? Those elements are your highest-priority design targets.

The practical output of this analysis is a risk-ranked list of data flows. High-risk flows (raw analytical data, batch release decisions, stability data) get the most rigorous controls. Lower-risk flows (administrative metadata, non-GxP operational logs) get proportionate controls. This prevents the common failure of applying uniform, often inadequate, controls everywhere.

**Recommended deliverables when aligning these frameworks:**

- A fit-for-purpose SRS that maps each critical data element to its ALCOA+ attribute, its risk ranking, and its control.
- Supplier oversight records documenting assessment findings and any compensating controls required.
- A traceability matrix that links each SRS requirement to a test case in the validation protocol and to the executed test result.
- A data integrity risk assessment (aligned with ICH Q9(R1)) that documents the rationale for control selection.

***

## What does a realistic implementation roadmap look like?

Emerging life science organizations that treat data integrity as a downstream compliance activity accumulate technical debt that results in expensive, multi-year remediation programs. The cost of embedding controls at design time is a fraction of the cost of retrofitting them after a regulatory finding. A staged roadmap makes the investment manageable.

### Four-stage implementation roadmap

1. **Quick wins (weeks 1–8):** Assign a data integrity governance owner. Inventory all GxP systems and instruments. Identify the top three high-risk data flows using a QbD-informed risk assessment. Confirm audit trails are enabled and being reviewed in those systems. Document findings in a gap register.

2. **Near-term (months 2–6):** Update SRS documents for systems under active development or scheduled for revalidation to include critical data elements and ALCOA+ control mappings. Conduct supplier assessments for critical GxP system vendors. Implement write-time validation for the highest-risk data entry points. Establish a formal audit trail review procedure with documented frequency and evidence of completion.

3. **Medium-term (months 6–18):** Extend write-time controls and checksum verification to all GxP systems. Implement tiered backup with tested recovery paths. Integrate data integrity requirements into the change control process. Deploy AI-driven life sciences integration patterns where they reduce manual evidence burden and improve detection speed.

4. **Long-term (months 18+):** Move toward compliance-as-code, where validation checks, audit trails, and traceability matrices are generated automatically. Establish continuous monitoring with alerting for anomalies. Conduct periodic maturity assessments against a defined model.

### Maturity levels

| Level | Label | What it looks like |
|---|---|---|
| 1 | Ad hoc | Controls exist in some systems; no governance; audit trails reviewed only before inspections |
| 2 | Repeatable | Governance owner assigned; gap register maintained; audit trail review scheduled and documented |
| 3 | Managed | Write-time controls in all GxP systems; traceability matrices current; supplier assessments complete |
| 4 | Optimized | Compliance-as-code; continuous monitoring; automated evidence generation; always-audit-ready state |

### Common failure modes and mitigations

- **Technical debt:** Systems built without SRS-level integrity requirements. Mitigation: require a data integrity impact assessment before any new system is approved for use.
- **Tribal knowledge:** Procedures and configurations known only to individuals. Mitigation: document configuration rationale in validation records; require knowledge transfer as part of change control.
- **Fragmented architecture:** Multiple systems with no integration-level integrity checks. Mitigation: treat every system boundary as a high-risk zone and design checksums and reconciliation checks at each interface.

***

## How do you test data integrity and what KPIs should you track?

Testing data integrity is not the same as testing system functionality. A system can pass every functional test and still have integrity vulnerabilities. Ben Thomasson's guidance on data-intensive systems recommends fault-injection and recovery tests tied to invariants, so that recovery paths do not produce corrupted or inconsistent state.

### Testing checklist for CSV/CSA protocols

- Verify audit trail captures all create, update, and delete events with correct timestamps and user attribution.
- Test write-time validation by submitting out-of-range, malformed, and missing-field entries and confirming rejection.
- Inject a checksum mismatch at a format boundary and confirm detection and alerting.
- Simulate concurrent writes and confirm no data is silently overwritten or lost.
- Execute a full restore from backup and verify that restored data matches the pre-failure state and that audit trail continuity is preserved.
- Test soft deletion: confirm deleted records remain in the database and appear in audit trail queries.
- Verify that administrator accounts cannot delete or modify audit trail entries.
- Test clock synchronization: confirm that timestamps across integrated systems are coherent within an acceptable tolerance.

For a detailed practitioner checklist, [testing data integrity across lab systems](https://blog.qualitum.ai/test-data-integrity) covers additional scenarios specific to LIMS and instrument interfaces.

### Monitoring rules and alerting

- **Out-of-band checksum checks:** Run checksum verification on critical data stores on a scheduled basis (daily for high-risk data, weekly for lower-risk). Alert on any mismatch within 24 hours.
- **Audit trail completeness monitoring:** Automated query that flags any time period with no audit trail entries for a system that should have continuous activity.
- **Access anomaly detection:** Alert on login attempts outside business hours, failed login sequences, or privilege escalation events.
- **Backup verification:** Automated confirmation that backup jobs completed and that a sample restore succeeded, logged with evidence.

### KPIs and target guidance

| KPI | Description | Target guidance |
|---|---|---|
| % of critical data elements with write-time validation | Proportion of SRS-identified critical elements that have an active write-time control | High proportion for high-risk elements |
| Audit trail completeness rate | % of expected audit trail entries present vs. gaps detected | Majority for GxP systems |
| Time to detect data corruption | Hours from corruption event to detection alert | <24 hours for high-risk data |
| Backup restore success rate | % of scheduled restore tests that complete successfully | All |
| Audit trail review compliance | % of scheduled audit trail reviews completed on time with documented evidence | Most |

Automated continuous monitoring is appropriate for high-risk, high-volume data flows. Periodic sampling (monthly or quarterly) is acceptable for lower-risk systems, provided the sampling methodology is documented and the sample size is statistically defensible.

***

## Are you audit-ready? An inspection checklist for QA leaders

Audit preparedness is not a separate program. It is the natural output of a well-executed data integrity by design program. If controls are designed in and evidence is generated continuously, the pre-inspection checklist becomes a verification exercise rather than a scramble.

### Evidence checklist

- SRS documents with critical data elements and ALCOA+ control mappings for all GxP systems.
- Traceability matrices linking SRS requirements to validation test cases and executed results.
- Supplier assessment records for all critical GxP system vendors, including follow-up actions and closure evidence.
- Validation reports (DQ, IQ, OQ, PQ) with explicit data integrity test cases and results.
- Audit trail review records showing scheduled reviews were completed, by whom, and what was found.
- Access control records: current user lists, role assignments, and records of periodic access reviews.
- Training records for all personnel with data entry, review, or approval roles in GxP systems.
- Change control records for all system changes, including data integrity impact assessments.
- Backup and recovery test records showing successful restores with timestamps.
- Instrument data transfer records (for standalone instruments) showing transfer procedure, verification, and retention of original records.

For a ready-to-use audit preparedness checklist, the [audit readiness checklist for validation and QA leaders](https://blog.qualitum.ai/audit-readiness-checklist) from Qualitum covers the full evidence bundle in detail.

### RACI guidance for data integrity ownership

| Role | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Data integrity governance owner | Defines standards | Signs off on gaps | QA, IT, Validation | Senior leadership |
| System owner | Maintains controls | Owns system compliance | IT, Validation | QA |
| QA reviewer | Reviews audit trails | Approves evidence | System owner | Compliance |
| IT/infrastructure | Manages backups, access | Delivers technical controls | Validation | QA |

**Pro Tip:** *Package your audit evidence in logical bundles indexed by system and by ALCOA+ attribute. An investigator who can navigate directly to the audit trail review records for a specific system, without asking for help, is an investigator who spends less time in your facility. Prepare a one-page index of evidence locations before every inspection.*

***

## What are the bottom-line recommendations?

Three recommendations stand above the rest for QA and compliance leaders who want measurable progress within a single quarter.

- **Identify your top three high-risk data flows** using a QbD-informed risk assessment. Document where write-time controls are absent and assign remediation owners with deadlines. This single exercise surfaces the gaps most likely to generate FDA findings.
- **Embed write-time controls** in every new or revalidated GxP system before release. Retrofitting controls after go-live costs significantly more in validation effort and operational disruption than specifying them in the SRS.
- **Automate evidence generation where possible.** Compliance-as-code approaches, where audit trails, traceability matrices, and validation checks are generated automatically, eliminate the tribal knowledge failure mode and create an always-audit-ready state.

Near-term metrics to track after program launch:

- Gap register completion rate (% of identified gaps with assigned owners and target dates).
- Write-time validation coverage (% of critical data elements with active controls).
- Audit trail review compliance rate (% of scheduled reviews completed on time).
- Backup restore success rate.

Each of these metrics is directly observable, requires no subjective judgment, and maps to a specific FDA inspection expectation. Organizations that embed these controls at design time consistently report shorter inspection cycles and fewer repeat findings.

***

## Key Takeaways

Data integrity by design requires embedding ALCOA+ controls, traceability, and tested recovery paths into every GxP system and process from the SRS stage, not as a remediation layer after an inspection finding.

| Point | Details |
|---|---|
| Design in, don't retrofit | Embedding write-time controls at the SRS stage costs a fraction of post-go-live remediation. |
| ALCOA+ maps to specific controls | Each attribute requires a tested, documented control: attribution needs RBAC; contemporaneous needs server-side timestamps. |
| System boundaries are highest risk | Silent corruption at integration points is a leading failure mode; checksum every format boundary. |
| Automate evidence generation | Compliance-as-code eliminates tribal knowledge and creates a continuously audit-ready state. |
| Qualitum enforces ALCOA+ at write-time | Qualitum's platform applies ALCOA+ checks at write-time and review-time, generating traceable validation evidence automatically. |

***

## The tradeoff that most frameworks don't address honestly

Speed versus evidentiary defensibility is the real tension in pharmaceutical data integrity programs, and most guidance documents sidestep it. ISPE GAMP RDI and GAMP 5 are thorough, authoritative, and correct. They are also written for organizations with the resources and time to implement them fully. Pre-commercial biotech companies and emerging life science organizations rarely have that luxury.

The practical lesson from organizations that have navigated this well is that the tradeoff is false when you design correctly. Write-time validation does not slow down data entry if it is implemented at the system level rather than as a manual review step. Automated audit trail generation adds zero burden to the analyst. Traceability matrices generated automatically from a validated platform require no authoring time at all.

The failure mode is not choosing speed over compliance. The failure mode is choosing manual processes over designed-in controls and then discovering, during an inspection or a product release hold, that the manual process was never consistently followed. That is when speed becomes expensive.

The QA leaders who influence this most effectively frame the investment in data integrity by design not as a compliance cost but as insurance against the far larger cost of remediation. A single warning letter response, a consent decree, or a product recall dwarfs the cost of any validation platform or governance program. That framing tends to move budget conversations faster than any regulatory citation.

***

## How Qualitum operationalizes data integrity by design

The gap between a well-designed data integrity framework and an always-audit-ready operation is almost always an execution gap, not a knowledge gap. QA and validation teams know what controls are required. The challenge is generating and maintaining the evidence continuously, without the manual burden that makes programs unsustainable.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

[Qualitum](https://qualitum.ai) is built specifically to close that execution gap for pharmaceutical, biotech, and medical device companies. Every record authored through the platform is ALCOA+ checked at write-time and review-time, so compliance is enforced at the point of creation rather than verified after the fact. The platform's multi-agent system generates validation evidence across the full lifecycle (URS, FS, DQ, IQ, OQ, PQ, CSV/CSA) with a live traceability matrix that links every requirement to its test case and executed result. Audit trail gaps, the single most common FDA finding, are structurally prevented rather than periodically reviewed.

For organizations at the early stages of a data integrity program, Qualitum's [platform overview](https://qualitum.ai/platform/overview) shows how automated evidence generation maps directly to the ALCOA+ controls and GAMP RDI requirements covered in this article. Teams that have piloted the platform report over 70% reduction in authoring time and materially faster CSV cycles, which means the resources freed from documentation can be redirected to the risk assessments and governance activities that actually improve inspection outcomes.

The next step is a working session where your team maps your current gap register to the controls Qualitum enforces automatically. [Book a working session](https://qualitum.ai/book) to see how the platform fits your specific systems and inspection timeline.

***

## Useful sources

The primary sources below are the authoritative references for data integrity by design in regulated pharmaceutical and life science settings. Each is worth reading in full; the annotations indicate where each source is most directly applicable.

- **ISPE GAMP RDI Good Practice Guide: Data Integrity by Design**: The definitive industry guidance document. Covers lifecycle integration, ALCOA+ mapping, instrument-level risks, and governance requirements. Start here.
- **ISPE GAMP 5 (Second Edition)**: Risk-based lifecycle approach for computerized systems. Defines software classification, CSV scope, and how data integrity risk drives validation evidence requirements.
- **FDA 21 CFR Part 11**: The US regulatory standard for electronic records and electronic signatures. Read alongside the predicate rules (21 CFR Parts 211, 212, 820) for the complete regulatory picture.
- **FDA Data Integrity and Compliance With Drug CGMP Guidance (2018)**: FDA's own guidance document on data integrity expectations for drug manufacturers. Directly maps to inspection findings and remediation expectations.
- **MHRA GxP Data Integrity Guide**: Widely referenced by US-based multinationals operating in multiple jurisdictions. Provides practical definitions and worked examples for ALCOA+ attributes.
- **CarmodyQS: Data Integrity by Design in Emerging Life Science Organizations**: Practitioner analysis of common failure modes and a maturity model for pre-commercial and emerging organizations.
- **Google SRE: Data Integrity Principles and Best Practices**: Engineering-level guidance on defense-in-depth, soft deletion, tiered backups, and out-of-band corruption detection. Directly applicable to GxP system architecture.
- **Ben Thomasson: Seven Rules for Building Data-Intensive Systems**: Practical engineering rules for checksums, format-boundary verification, and recovery-path testing. Useful for IT and validation engineers designing GxP system integrations.
- **Qualitum blog: How to Test Data Integrity**: Practitioner testing checklist for lab systems and LIMS, aligned with the CSV/CSA protocols described in this article.
- **Qualitum: Audit Readiness Checklist**: Ready-to-use evidence checklist for QA and validation leaders preparing for FDA inspections.
- **Qualitum platform overview**: Feature-level detail on how Qualitum's automated validation platform enforces ALCOA+ and generates defensible evidence across the validation lifecycle.

***

## FAQ

### What are the four types of data integrity?

Data integrity is typically categorized as physical integrity (protection from hardware failure), logical integrity (consistency of data relationships and constraints), referential integrity (validity of links between data sets), and user-defined integrity (business rules enforced at the application layer). In GxP settings, all four must be addressed, with logical and user-defined integrity most directly mapped to ALCOA+ controls.

### What are the ALCOA+ principles in pharma?

ALCOA+ stands for Attributable, Legible, Contemporaneous, Original, and Accurate, extended by Enduring, Available, Complete, and Consistent. Each attribute maps to a specific technical or process control that must be designed into GxP systems and validated before use.

### What is ALCOA++ in pharma?

ALCOA++ is an informal extension sometimes used in industry that adds further attributes such as "traceable" or "verified" to the ALCOA+ set. It is not a formally standardized term; ISPE GAMP RDI and FDA guidance use ALCOA+ as the recognized framework, and organizations should align their documentation to that standard rather than to informal extensions.

### What are the six pillars of data integrity?

The "six pillars" framing varies by source and is not a formally standardized regulatory construct. The recognized framework in US pharmaceutical regulation is ALCOA+ (nine attributes), as referenced in FDA guidance and ISPE GAMP RDI. If your organization uses a six-pillar model internally, map each pillar explicitly to the corresponding ALCOA+ attribute to maintain alignment with FDA inspection expectations.

### How does Qualitum support data integrity by design?

Qualitum enforces ALCOA+ at write-time and review-time across the full validation lifecycle, generating immutable audit trails, live traceability matrices, and defensible validation evidence automatically. This eliminates the manual documentation burden that makes most data integrity programs unsustainable and creates an always-audit-ready state aligned with ISPE GAMP RDI and 21 CFR Part 11 requirements.

## Recommended

- [How to Test Data Integrity: A Practitioner's Guide · Qualitum blog](https://blog.qualitum.ai/test-data-integrity)
- [Operate·AI · Qualitum](https://qualitum.ai/platform/operate-ai)
- [Qualitum · The agentic validation platform for life sciences](https://qualitum.ai)
- [Validate·AI · Qualitum](https://qualitum.ai/platform/validate-ai)

## FAQ
### What are the four types of data integrity?
Data integrity is typically categorized as physical integrity (protection from hardware failure), logical integrity (consistency of data relationships and constraints), referential integrity (validity of links between data sets), and user-defined integrity (business rules enforced at the application layer). In GxP settings, all four must be addressed, with logical and user-defined integrity most directly mapped to ALCOA+ controls.

### What are the ALCOA+ principles in pharma?
ALCOA+ stands for Attributable, Legible, Contemporaneous, Original, and Accurate, extended by Enduring, Available, Complete, and Consistent. Each attribute maps to a specific technical or process control that must be designed into GxP systems and validated before use.

### What is ALCOA++ in pharma?
ALCOA++ is an informal extension sometimes used in industry that adds further attributes such as "traceable" or "verified" to the ALCOA+ set. It is not a formally standardized term; ISPE GAMP RDI and FDA guidance use ALCOA+ as the recognized framework, and organizations should align their documentation to that standard rather than to informal extensions.

### What are the six pillars of data integrity?
The "six pillars" framing varies by source and is not a formally standardized regulatory construct. The recognized framework in US pharmaceutical regulation is ALCOA+ (nine attributes), as referenced in FDA guidance and ISPE GAMP RDI. If your organization uses a six-pillar model internally, map each pillar explicitly to the corresponding ALCOA+ attribute to maintain alignment with FDA inspection expectations.

### How does Qualitum support data integrity by design?
Qualitum enforces ALCOA+ at write-time and review-time across the full validation lifecycle, generating immutable audit trails, live traceability matrices, and defensible validation evidence automatically. This eliminates the manual documentation burden that makes most data integrity programs unsustainable and creates an always-audit-ready state aligned with ISPE GAMP RDI and 21 CFR Part 11 requirements.
