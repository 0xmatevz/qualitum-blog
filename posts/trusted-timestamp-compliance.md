---
title: Trusted Timestamp Compliance in GxP: What Regulators Expect
date: 2026-11-19
description: What a trusted timestamp proves in a GxP record, where Part 11, Annex 11 and eIDAS apply, and how to implement and verify timestamps so audits go cleanly.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1794938604286_Analyst-checking-clock-settings-beside-lab-equipment.jpeg
coverAlt: Analyst checking clock settings beside lab equipment
---

A trusted timestamp is a date and time that a third-party time authority has cryptographically signed to a fingerprint of your data. For GxP records it proves that the data existed in exactly that form at that moment, and that any later change can be detected. No regulation asks you to buy one for every record. But 21 CFR Part 11 and EU Annex 11 do require trustworthy, protected, attributable date and time on audit trails and signatures, and a trusted timestamp is the strongest way to prove it. Qualitum builds this logic into validation records: every record is ALCOA+ checked at write-time and review-time, so time evidence is verified when it is created, not reconstructed before an inspection.

## TL;DR

- A trusted timestamp is a signed statement from a Timestamp Authority (TSA) that a specific hash of your data existed at a specific time. It is stronger than a system clock reading.
- Part 11 and Annex 11 require date and time on audit trails and signatures. They do not mandate third-party timestamping, but they do require that the time be correct and protected from tampering.
- A timestamp proves integrity and time of existence. It does not prove who authored the data, that it was sent or received, or that the content is correct.
- Implement it with controlled clocks, a documented time source, retention of the token with the record, and a periodic verification routine inside your validated system.
- Check time evidence at write-time, not at audit time. That is where most findings begin.

## Table of Contents

- [What a trusted timestamp is and how it works](#what-a-trusted-timestamp-is-and-how-it-works)
- [What regulators actually require about time](#what-regulators-actually-require-about-time)
- [Where the EU's eIDAS rules come in](#where-the-eus-eidas-rules-come-in)
- [What a trusted timestamp proves, and what it does not](#what-a-trusted-timestamp-proves-and-what-it-does-not)
- [Implementing trusted timestamps in a GxP system](#implementing-trusted-timestamps-in-a-gxp-system)
- [Where timestamp compliance usually fails](#where-timestamp-compliance-usually-fails)
- [A worked example](#a-worked-example)
- [Our perspective](#our-perspective)
- [Making time evidence part of your validation workflow](#making-time-evidence-part-of-your-validation-workflow)
- [FAQ](#faq)
- [Sources](#sources)

## What a trusted timestamp is and how it works

A system-generated date and time is whatever the server clock says. Anyone with administrative rights can change it, and the record gives no independent proof that the clock was right.

A trusted timestamp adds a third party. NIST defines it as a timestamp signed by a Trusted Timestamp Authority, an entity trusted to provide accurate time. [NIST SP 800-89](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-89.pdf) also ranks time sources by trustworthiness: first a signed timestamp from a trusted authority, then a clock whose accuracy is trusted, then a clock of unknown accuracy.

The mechanics are short:

1. Your system computes a hash (a fixed-length fingerprint) of the document, data set or audit trail extract.
2. It sends only that hash to the TSA. The data itself never leaves your environment.
3. The TSA adds the current time from its own source, signs the combination and returns a timestamp token.
4. You store the token with the record. Later, anyone can recompute the hash, compare it to the token and verify the TSA's signature.

The widely used protocol is [RFC 3161](https://www.rfc-editor.org/rfc/rfc3161.txt). It requires the TSA to use a trustworthy time source, to include a trustworthy time value and a unique serial number in every token, and to timestamp only a hash of the data.

If one character of the record changes, the hash no longer matches the token. That single property is what makes the timestamp useful in a data integrity argument.

## What regulators actually require about time

The regulations are written around outcomes: accurate, attributable, protected time. Here is how the major texts phrase it.

| Source | What it says about date and time |
|---|---|
| [21 CFR Part 11, as summarized in FDA's 2024 Q&A guidance](https://www.fda.gov/media/166215/download) | Signed records carry the printed name of the signer, the date and time of signing and the meaning of the signature (§11.50). Signatures are linked to their records so they cannot be excised, copied or transferred to falsify a record (§11.70). |
| [Same FDA guidance, audit trails](https://www.fda.gov/media/166215/download) | Audit trails capture all changes, who made them and when, are protected from modification and disabling, and are retained at least as long as the records. Components include date and time, user ID and role, and old and new values. |
| [EU GMP Annex 11](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en) | Systems automatically log date and time. The signature manifestation includes name, role, meaning and the date and time applied. |
| [WHO TRS 1033, Annex 4](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf) | Audit trails reflect users, dates, times, original data, changes and reasons. They are enabled at installation and stay enabled. Each electronic signature is date- and time-stamped. |
| [UK MHRA GxP data integrity guide (2018)](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf) | An audit trail records the life cycle of a GxP record, including the reason for any change, in enough detail to reconstruct the activity. |

None of these texts says "use an RFC 3161 authority." They say the time must be there, correct, linked to the record and impossible to quietly edit. That is the gap a trusted timestamp closes.

### The FDA's position on computer clocks

FDA addressed this directly. In March 2002 it announced a [draft guidance on Part 11 time stamps](https://www.govinfo.gov/content/pkg/FR-2002-03-20/pdf/02-6623.pdf), explaining that Part 11 requires time stamps in audit trails and signature manifestations and that the guidance covers computer-generated time stamps in systems that create, modify, maintain, archive, retrieve or transmit electronic records.

The current Q&A guidance on electronic systems in clinical investigations is more concrete. It says the ability to change system date or time should be limited to authorized administrators, that changes must be documented, and that for trials spanning time zones the sponsor should indicate the time zone or record times as GMT ([FDA, 2024](https://www.fda.gov/media/166215/download)).

Read together, the message for a validation lead is plain. An uncontrolled clock is a data integrity risk, and a controlled, documented, externally anchored clock is a defensible control.

## Where the EU's eIDAS rules come in

If you file or sign in the EU, a second layer applies. Under the eIDAS Regulation, a qualified electronic time stamp must be based on an accurate time source linked to Coordinated Universal Time (UTC), bind date and time to the data so undetectable change is reasonably precluded, and be signed or sealed by a qualified trust service provider. [ENISA's guidelines](https://www.enisa.europa.eu/sites/default/files/publications/WP2016%203-2%2016%20Relying%20Parties%20QTStamp.pdf) set out these three conditions.

The legal benefit is a presumption. Qualified time stamps carry, across the EU, a legal presumption that the date and time are accurate and that the bound data is intact ([Article 41 of eIDAS](https://www.iberley.es/legislacion/articulo-41-identificacion-electronica-servicios-confianza-transacciones-electronicas-mercado-interior-reglamento-eidas)). Even a non-qualified electronic time stamp cannot be rejected as evidence solely because it is electronic or not qualified, according to the [Luxembourg trust services overview](https://portail-qualite.public.lu/dam-assets/publications/confiance-numerique/trustservices-under-eIDAS.pdf).

The pharma regulators use this infrastructure themselves. The EDQM states that each electronically signed Certificate of Suitability carries a [qualified electronic signature](https://www.edqm.eu/documents/52006/0/PA_PH_CEP+%2823%29+50.pdf/9b2d5c65-b0eb-93f4-271f-856c986af957?t=1695291411088) from a trusted provider compliant with eIDAS, with an embedded timestamp.

For US-only operations, eIDAS is not a requirement. If your records move between the US and EU, or you submit to EU authorities, it is worth knowing which tier of timestamp your evidence would stand on. Our guide to [U.S. electronic signature requirements](https://blog.qualitum.ai/electronic-signature-requirements) covers the Part 11 side in more depth.

![Where the EU's eIDAS rules come in](https://media.babylovegrowth.ai/blog-images/organization-48457/1794938674865_Where-the-EU-s-eIDAS-rules-come-in.jpeg)

## What a trusted timestamp proves, and what it does not

This is where teams over-claim in audits. ENISA is precise about the limits of a qualified time stamp:

- **It proves** that the data existed in that exact form at that time, and any alteration of the time-stamped data can be detected.
- **It does not prevent** alteration. It makes alteration visible.
- **It gives no confidentiality guarantee** for the data, because only a hash is sent to the provider.
- **It does not prove** that a document was sent or received.

To that list, add the limits that follow from what a hash can do. A timestamp does not identify the author, so it does not replace an attributable electronic signature. It does not show the reason for a change, so it does not replace an audit trail. And it does not show the data was correct when it was stamped.

The right mental model: the timestamp is one link in an ALCOA+ chain. Attributable, legible, contemporaneous, original and accurate each need their own control. Timestamping strengthens contemporaneous and original, and supports enduring. Our piece on [ALCOA+ audit trails](https://blog.qualitum.ai/alcoa-audit-trails) maps what regulators expect across all of them.

## Implementing trusted timestamps in a GxP system

A workable implementation has five parts. Treat each as something your validation package should show evidence for.

![Five steps for implementing trusted timestamps](https://media.babylovegrowth.ai/blog-images/organization-48457/1794938644019_Five-steps-for-implementing-trusted-timestamps.jpeg)

### 1. Decide which records need it

Not every record needs an external timestamp. Start with risk. High-value candidates are final approved validation protocols and reports, executed test evidence, audit trail exports, batch and release records, and records that will be archived for many years or submitted to authorities. For routine records inside a validated system with a protected audit trail, a controlled system clock may be proportionate. Document the rationale in your risk assessment.

### 2. Control the clock first

An external timestamp does not repair a badly managed system clock. Restrict clock changes to authorized administrators, document each change, synchronize servers to a defined time source and record the time zone convention (UTC or a named zone). This follows the [FDA expectations above](https://www.fda.gov/media/166215/download). Where it goes wrong: virtual machines and instruments that drift, and local PCs that run acquisition software on a standalone clock nobody checks.

### 3. Choose the timestamp authority and policy

For the EU tier, choose a qualified trust service provider listed on the national trusted list. ENISA recommends relying parties look for the EU trust mark and that qualified time stamp accuracy be 1 second or better. Record the provider, the timestamping policy and the hash algorithm in your specification so the choice is traceable.

### 4. Store the token with the record

The token is part of the record. Keep it linked to the data it covers for the full retention period, so it cannot be separated, in line with the Part 11 principle that signatures and records stay linked. Keep the verification material too: the TSA certificate chain and revocation information as they stood at the time, since certificates expire long before records do.

### 5. Verify on a schedule, not only on demand

ENISA's checklist for a claimed qualified time stamp is a good template for a verification procedure: validate the signature or seal, identify the provider and its country from the certificate, identify the time stamping policy, and check the national trusted list to confirm the provider's qualified status was granted at the time-stamp date and time. Add a periodic sample check as part of audit trail review, consistent with the WHO expectation that audit trails are [periodically verified across the data life cycle](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf).

## Where timestamp compliance usually fails

Three patterns come up repeatedly in data integrity findings.

**Time anomalies nobody reviews.** FDA's draft time stamp guidance already suggested spot-checking for impossible sequences, such as a modification time earlier than the creation time, as [reported by Citeline](https://insights.citeline.com/PS093784/FDA-time-stamp-guidance/). Those anomalies are cheap to detect by rule and expensive to explain to an inspector.

**Evidence assembled after the fact.** If timestamp, signature and audit trail reconciliation happens the week before an inspection, you have a fire drill, not a control. See our guide to [continuous audit readiness](https://blog.qualitum.ai/continuous-audit-readiness).

**Audit trails that exist but are not designed.** Date and time are one of several audit trail elements. Our [audit trail design](https://blog.qualitum.ai/audit-trail-design) and [audit trail violations](https://blog.qualitum.ai/audit-trail-violations) articles go through the rest.

## A worked example

Take an OQ protocol for a bioreactor control system. The executed protocol, with screenshots and signed pages, is finalized as a PDF.

1. The system hashes the final PDF and requests a token from the TSA.
2. The token is stored in the validation record next to the PDF and the signature manifestation (name, role, meaning, date and time).
3. Two years later, an inspector questions whether a deviation note was added after approval. You recompute the hash of the archived PDF, compare it to the token and verify the TSA signature. A match shows the file is bit-for-bit what existed at the stamped time.
4. If the hash does not match, you know the file changed, and the audit trail shows who changed what, when and why.

Note what did the work in step 3: the combination of timestamp, signature and audit trail. None would be enough alone.

## Our perspective

> Most timestamp problems we hear about are not cryptographic. They are process problems: a clock someone adjusted, a PDF re-exported after approval, an audit trail reviewed once at go-live and never again.
>
> That is why we treat time evidence as part of record creation. Every record in Qualitum is ALCOA+ checked at write-time and again at review-time, so a missing or inconsistent date, time or signature link surfaces while the author can still fix it, not when an auditor finds it.
>
> Human signatures remain authoritative. Agents draft and check; your people sign. And because the platform deploys privately within your infrastructure with zero data egress, the evidence stays where your QA and InfoSec teams already govern it.
>
> A trusted timestamp is a strong control. It is strongest when it sits inside a validation process that was designed to be inspected.
>
> *Matt*

## Making time evidence part of your validation workflow

If your team authors URS, IQ, OQ and PQ documents by hand and assembles evidence at the end, timestamp checks will always be a late, manual task. Qualitum's [Validate·AI and Operate·AI](https://qualitum.ai/platform) agents author and review validation lifecycle records with a live traceability matrix, audit trail handling and integrations with major quality management systems, so date, time, signature and record linkage are checked as part of the work itself.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Teams usually start with a paid [pilot](https://qualitum.ai) on one system or process and expand once the evidence holds up in QA review. For how we approach security and private deployment, see our [privacy and security page](https://qualitum.ai/security).

## FAQ

### Does 21 CFR Part 11 require a trusted timestamp from a third party?

No. Part 11 requires date and time in audit trails and signature manifestations, and FDA expects the system clock to be controlled, with changes limited to authorized administrators and documented. A third-party timestamp is one way to strengthen that evidence, particularly for long-retained or submitted records.

### Is a trusted timestamp the same as an electronic signature?

No. A signature ties a named individual to a record and carries meaning, such as approval or review. A timestamp ties a hash of the data to a time. Part 11 and Annex 11 expect signatures to include the date and time, so the two work together.

### Does a timestamp stop someone from altering a record?

No. It makes alteration detectable, because the hash will no longer match the token. Prevention comes from access control, protected audit trails and validated workflows.

### How long should timestamp tokens be kept?

As long as the record they cover. FDA's Q&A guidance says audit trails are retained at least as long as the underlying records, and the same logic applies to the token and its verification material. Set the period in your records retention procedure.

## Sources

- [NIST SP 800-89, Recommendation for Obtaining Assurances for Digital Signature Applications](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-89.pdf)
- [IETF RFC 3161, Time-Stamp Protocol](https://www.rfc-editor.org/rfc/rfc3161.txt)
- [FDA, Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Q&A (2024)](https://www.fda.gov/media/166215/download)
- [EU GMP Annex 11: Computerised Systems](https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en)
- [WHO TRS 1033, Annex 4: Guideline on data integrity](https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf)
- [UK MHRA GxP data integrity guide](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf)
- [Federal Register notice, Draft Guidance on Electronic Records; Electronic Signatures, Time Stamps (March 20, 2002)](https://www.govinfo.gov/content/pkg/FR-2002-03-20/pdf/02-6623.pdf)
- [Citeline Insights, FDA time-stamp guidance](https://insights.citeline.com/PS093784/FDA-time-stamp-guidance/)
- [ENISA, Security guidelines on the appropriate use of qualified electronic time stamps](https://www.enisa.europa.eu/sites/default/files/publications/WP2016%203-2%2016%20Relying%20Parties%20QTStamp.pdf)
- [Luxembourg public quality portal, Trust services under eIDAS](https://portail-qualite.public.lu/dam-assets/publications/confiance-numerique/trustservices-under-eIDAS.pdf)
- [eIDAS Regulation, Article 41](https://www.iberley.es/legislacion/articulo-41-identificacion-electronica-servicios-confianza-transacciones-electronicas-mercado-interior-reglamento-eidas)
- [EDQM, Certificates of Suitability: electronic signature features](https://www.edqm.eu/documents/52006/0/PA_PH_CEP+%2823%29+50.pdf/9b2d5c65-b0eb-93f4-271f-856c986af957?t=1695291411088)

## Recommended

- [Real-Time Data Integrity in GxP: Check Records as They Are Written](https://blog.qualitum.ai/real-time-data-integrity)
- [Audit Trail Violations in GxP: What They Are and How to Prevent Them](https://blog.qualitum.ai/audit-trail-violations)
- [Log Review Frequency in GxP: How Often to Review](https://blog.qualitum.ai/log-review-frequency)
- [Static vs Dynamic Data: What GxP Records Really Require](https://blog.qualitum.ai/static-vs-dynamic-data)

## FAQ
### Does 21 CFR Part 11 require a trusted timestamp from a third party?
No. Part 11 requires date and time in audit trails and signature manifestations, and FDA expects the system clock to be controlled, with changes limited to authorized administrators and documented. A third-party timestamp is one way to strengthen that evidence, particularly for long-retained or submitted records.

### Is a trusted timestamp the same as an electronic signature?
No. A signature ties a named individual to a record and carries meaning, such as approval or review. A timestamp ties a hash of the data to a time. Part 11 and Annex 11 expect signatures to include the date and time, so the two work together.

### Does a timestamp stop someone from altering a record?
No. It makes alteration detectable, because the hash will no longer match the token. Prevention comes from access control, protected audit trails and validated workflows.

### How long should timestamp tokens be kept?
As long as the record they cover. FDA's Q&A guidance says audit trails are retained at least as long as the underlying records, and the same logic applies to the token and its verification material. Set the period in your records retention procedure.
