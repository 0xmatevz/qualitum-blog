---
title: U.S. Electronic Signature Requirements: A Compliance Guide
date: 2026-08-15
description: Discover essential U.S. electronic signature requirements for legal compliance. Learn how to ensure your e-signatures meet federal and state standards.
author: Qualitum
cover: https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786542229756_Gloved-hand-interacting-with-electronic-signature-device.jpeg
coverAlt: Gloved hand interacting with electronic signature device
---

An electronic signature is legally valid in the United States when it satisfies five core conditions established under the [Electronic Signatures in Global and National Commerce Act](https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap96-subchapI-sec7001.htm) (ESIGN, 15 U.S.C. §7001) and, at the state level, the Uniform Electronic Transactions Act (UETA) where adopted. For regulated industries, [21 CFR Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) adds a separate, stricter layer of technical and procedural controls that ESIGN alone does not require.

The five conditions courts and agencies consistently look for:

- **Intent to sign:** The signer must take an affirmative action that objectively signals agreement, not merely view a document.
- **Consent and disclosure:** Where required by statute, the signer must consent to transact electronically and receive required hardware/software notices.
- **Association with the record:** The electronic signature must be logically attached to or associated with the specific record being signed.
- **Signer identification and authentication:** The system must capture evidence linking the signature to a specific, authorized individual.
- **Integrity, retention, and accessibility:** The signed record must be preserved in a form that can be accurately reproduced and retrieved for the period required by law.

***

## Key Takeaways

U.S. electronic signature requirements rest on ESIGN and UETA, but regulated organizations must layer agency-specific controls on top of that statutory baseline to produce defensible, audit-ready evidence.

| Point | Details |
|---|---|
| Federal baseline | ESIGN (15 U.S.C. §7001) prohibits denying legal effect to electronic signatures in interstate commerce; UETA fills state-level gaps. |
| Five validity elements | Intent, consent/disclosure, association with the record, signer authentication, and integrity/retention must all be documented. |
| Common exclusions | Wills, certain family-law instruments, some real-property documents, and ESIGN §7003 carve-outs still require wet signatures or notarization. |
| Agency overlays | IRS IRM, 21 CFR Part 11, and HIPAA each add technical and procedural controls above the ESIGN baseline; treat them as your actual audit checklist. |
| Qualitum's role | Qualitum's [validated compliance platform](https://qualitum.ai/platform/validate-ai) enforces ALCOA+ at write-time and review-time, producing the traceable, audit-ready evidence that Part 11 inspections demand. |

***

## Table of Contents

- [Which federal and state laws govern electronic signature requirements?](#which-federal-and-state-laws-govern-electronic-signature-requirements)
- [What are the five core requirements for a valid electronic signature?](#what-are-the-five-core-requirements-for-a-valid-electronic-signature)
- [Electronic signature vs. digital signature: what is the legal difference?](#electronic-signature-vs-digital-signature-what-is-the-legal-difference)
- [Which documents are excluded from electronic signature treatment?](#which-documents-are-excluded-from-electronic-signature-treatment)
- [Regulatory overlays: IRS, FDA 21 CFR Part 11, and HIPAA](#regulatory-overlays-irs-fda-21-cfr-part-11-and-hipaa)
- [California specifics: what compliance teams need to check](#california-specifics-what-compliance-teams-need-to-check)
- [Compliance checklist for regulated organizations (life sciences / FDA context)](#compliance-checklist-for-regulated-organizations-life-sciences-fda-context)
- [How to evaluate an e-signature vendor from a compliance perspective](#how-to-evaluate-an-e-signature-vendor-from-a-compliance-perspective)
- [Where compliance teams should focus their effort first](#where-compliance-teams-should-focus-their-effort-first)
- [Qualitum supports regulated teams with validated, audit-ready evidence](#qualitum-supports-regulated-teams-with-validated-audit-ready-evidence)
- [Sources](#sources)
- [FAQ](#faq)

## Which federal and state laws govern electronic signature requirements?

The U.S. legal framework rests on two parallel structures: a federal statute and a model state law, with agency-specific overlays sitting on top of both.

**ESIGN** (15 U.S.C. §7001) applies to transactions in interstate or foreign commerce. Its core rule is categorical: a record or signature cannot be denied legal effect solely because it is electronic. ESIGN also sets baseline consumer-consent conditions, requires that signers receive notice of hardware and software requirements, and mandates that records remain accessible to all parties for the legally required retention period.

**UETA** is the model statute that most U.S. jurisdictions have adopted to govern electronic transactions at the state level. Where both ESIGN and UETA apply to the same transaction, UETA generally controls if the state has adopted it, because ESIGN expressly defers to state law that meets certain criteria. [Practitioner summaries confirm](https://helpx.adobe.com/legal/esignatures/regulations/united-states.html) that ESIGN and UETA together create a nationally consistent baseline, though gaps and exceptions remain.

Not every state followed UETA verbatim. New York, for example, enacted its own [Electronic Signatures and Records Act (ESRA)](https://its.ny.gov/system/files/documents/2022/10/nys_g04_001_electronic_signatures_and_records_act_esra.pdf) with separate implementing guidance from the Office of Information Technology Services. State-specific exclusions and formality requirements can survive the ESIGN baseline, so jurisdiction-level triage is always necessary.

| Statute | Scope | Typical applicability |
|---|---|---|
| ESIGN (15 U.S.C. §7001) | Interstate and foreign commerce | Federal baseline; applies when no qualifying state law governs |
| UETA (model state law) | Intrastate transactions; adopted by most states | State-level default where enacted; controls over ESIGN when qualifying |
| State enactments (e.g., NY ESRA, CA UETA) | State-specific transactions and document types | Adds or modifies requirements; may exclude document categories |

***

## What are the five core requirements for a valid electronic signature?

Compliance teams need more than a general understanding of ESIGN. They need checklist-language that maps to auditable evidence. Here are the five elements, each with the legal test and the practical artifacts that satisfy it.

**1. Intent to sign**
The signer must perform an affirmative act that a reasonable person would interpret as agreement. A typed name in a signature field, a checkbox labeled "I agree," or a biometric capture all qualify. Passive scrolling does not. Audit trail entries should capture the specific action taken, not merely a timestamp.

**2. Consent to transact electronically and required disclosures**
ESIGN's consumer-consent provisions require that consumers affirmatively consent to electronic delivery and receive a clear statement of the hardware and software needed to access records. The consent must be captured before the transaction, and the signer must be told they have the right to receive a paper copy and to withdraw consent. Document the consent click, the disclosure text version, and the timestamp.

**3. Association with the specific record**
The signature must be logically attached to the exact version of the document being signed. A record-lock mechanism that prevents post-signature modification, combined with a document hash embedded in the audit trail, satisfies this requirement. Signing a cover page that references a separate attachment without cryptographic linkage is a common gap auditors flag.

**4. Signer identification and authentication**
The system must produce evidence that the person who signed is who they claim to be and is authorized to sign. Acceptable methods range from username/password with a knowledge-based authentication challenge to multi-factor authentication (MFA) or PKI-based digital certificates. The [IRS IRM](https://www.irs.gov/irm/part10/irm_10-010-001) enumerates signer identification and authorization as a discrete required element for taxpayer e-signatures, treating it as separate from intent.

**5. Integrity, retention, and accessibility**
The signed record must be stored in a format that accurately reflects the information at the time of signing and remains accessible for the full retention period. ESIGN requires that the record be capable of being retained and accurately reproduced. For regulated industries, this means exportable, tamper-evident records with a documented retention and retrieval procedure.

***

## Electronic signature vs. digital signature: what is the legal difference?

The terms are not interchangeable, and conflating them creates real compliance risk.

An **electronic signature** is any electronic sound, symbol, or process attached to or logically associated with a record and executed or adopted by a person with intent to sign. That definition, drawn from ESIGN and UETA, is deliberately broad. A typed name, a scanned wet signature image, a stylus-drawn mark, or a checkbox click all qualify.

A **digital signature** is a specific cryptographic mechanism based on public key infrastructure (PKI). It uses a private key to generate a signature that can be verified against a public key, producing non-repudiation attributes that a simple typed name cannot. Digital signatures are a subset of electronic signatures, not a separate legal category.

> Courts treat both as potentially valid under ESIGN and UETA. The distinction matters for evidentiary weight, not for threshold validity.

Where the difference becomes operationally significant is in regulated and high-risk contexts. Life sciences organizations operating under 21 CFR Part 11 must use electronic signatures that meet specific identity-proofing and system-validation requirements. Financial services firms handling high-value instruments often require PKI-backed signatures to support non-repudiation claims in disputes. The practical rule: use typed or checkbox signatures for lower-risk, consumer-facing transactions where ESIGN compliance is the ceiling; require PKI-backed digital signatures or MFA-verified electronic signatures for regulated records, high-value contracts, or any transaction where non-repudiation will be litigated.

***

## Which documents are excluded from electronic signature treatment?

ESIGN is explicit that its general rule of validity does not override other statutory formalities. Several document categories commonly require wet signatures, notarization, or witness attestation regardless of what ESIGN permits.

- **Wills, codicils, and testamentary trusts:** Most state probate codes require handwritten signatures and witnesses; ESIGN does not displace those requirements.
- **Adoption, divorce, and certain family-law orders:** Court-ordered instruments in family proceedings typically require wet signatures and judicial authentication.
- **Certain real-property instruments:** Deeds, mortgages, and some lease agreements may require notarization or acknowledgment under state recording statutes that ESIGN does not preempt.
- **Court filings and orders:** Federal and state courts have their own e-filing rules; a document that a court rule requires to bear an original signature is not covered by ESIGN's general rule.
- **Notices of cancellation or termination of utility services, foreclosure, eviction, and similar consumer-protection instruments:** ESIGN §7003 expressly excludes these from the general rule of validity.
- **Product recall notices and documents required to accompany hazardous materials:** Also carved out under §7003.

The triage question for any document is: does a separate statute, court rule, or regulation impose a formality (notarization, witnessing, acknowledgment) that ESIGN does not preempt? If yes, the electronic path requires either that the formality be satisfied electronically under a separate authorization (e.g., remote online notarization statutes) or that a wet signature be obtained. State variance here is substantial; California, for instance, has specific rules on which instruments may be electronically notarized.

The [FDIC's consumer compliance guidance](https://www.fdic.gov/resources/supervision-and-examinations/consumer-compliance-examination-manual/documents/10/x-3-1.pdf) also notes that even where ESIGN permits electronic delivery, certain consumer disclosures require verification that the consumer received and can access the record, adding a procedural layer beyond the signature itself.

***

## Regulatory overlays: IRS, FDA 21 CFR Part 11, and HIPAA

The statutory baseline is the floor. Agency rules frequently raise it, and for regulated organizations, those agency requirements are what auditors actually check.

| Regulation | Extra technical/process controls required | Typical evidence items |
|---|---|---|
| IRS IRM (e-signature program) | Acceptable signature form; intent; association to record; signer ID/authentication; integrity preservation | Audit log with signer ID, date/time, IP; signed copy retained per IRS retention schedule |
| FDA 21 CFR Part 11 | Validated system; controlled user accounts; audit trail with reason for signing; closed vs. open system controls; policy/SOP documentation | System validation package (IQ/OQ/PQ); audit trail schema; identity-proofing records; SOPs |
| HIPAA (Security Rule) | Access controls; audit controls; integrity controls; transmission security for PHI | Access control logs; audit trail for PHI records; encryption in transit and at rest |

![Comparison of IRS, FDA, and HIPAA signature requirements](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786542267295_Comparison-of-IRS-FDA-and-HIPAA-signature-requirements.jpeg)

**IRS requirements** are detailed in IRM 10.10.1, which enumerates five required elements for any e-signature process applied to taxpayer documents: an acceptable signature form, demonstrated intent, logical association with the record, signer identification and authorization, and a method to preserve record integrity. These map closely to the ESIGN baseline but add specificity about acceptable signature forms and retention.

**21 CFR Part 11** is the most demanding overlay for life sciences. It requires that electronic signature systems be validated, that audit trails capture the reason for each signing action, and that user accounts be individually controlled. Closed systems (internal networks) and open systems (internet-accessible) carry different technical requirements. Part 11 also requires that organizations maintain written policies holding individuals accountable for actions taken under their electronic signatures.

![Gloved hand adjusting pharma machine control panel](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1786542236990_Gloved-hand-adjusting-pharma-machine-control-panel.jpeg)

**HIPAA** does not define electronic signature requirements directly, but the Security Rule's access-control and audit-control standards apply to any electronic record containing protected health information (PHI). Organizations signing PHI-containing documents electronically must document access controls, maintain audit logs, and apply integrity controls to prevent unauthorized alteration.

***

## California specifics: what compliance teams need to check

California adopted UETA in 1999 (California Civil Code §1633.1 et seq.), making electronic signatures legally effective for most transactions in the state. The [California Secretary of State FAQ](https://www.sos.ca.gov/administration/regulations/current-regulations/technology/digital-signatures/frequently-asked-questions) provides the most operationally useful state-level guidance, clarifying that the use of digital signatures is optional and that when a state agency requires a digital signature, it must specify an approved certification authority.

> The California Secretary of State's guidance makes clear that "digital signature" in the California Government Code context means a PKI-based signature from an approved provider, not simply any electronic signature. Compliance teams should confirm whether a California agency counterparty requires a certified digital signature or whether a general electronic signature under UETA suffices.

Practical California-specific checks for compliance teams:

- **Confirm document category:** California's UETA implementation excludes certain instruments (wills, family-law orders, and some real-property documents) consistent with the ESIGN carve-outs. Verify that the document type is not excluded before routing to an electronic workflow.
- **Agency counterparty requirements:** When transacting with a California state agency, check whether the agency has designated an approved certification authority. The Secretary of State FAQ lists provider considerations and the statutory basis for those requirements.
- **Consumer notice language:** California's consumer protection statutes may require specific disclosure language beyond the ESIGN baseline. Document the exact text of any consent or disclosure presented to signers.
- **Retention and accessibility:** California law requires that electronically signed records be retained in a form that accurately reflects the information and remains accessible. Document your retention schedule and export capability.

***

## Compliance checklist for regulated organizations (life sciences / FDA context)

For organizations operating under 21 CFR Part 11, the ESIGN baseline is a starting point, not a destination. The following checklist maps legal requirements to auditable evidence.

- **Policy and SOP coverage:** Maintain a written electronic signature policy that assigns individual accountability, defines acceptable signature methods, and references the applicable regulatory framework (Part 11, ESIGN, UETA).
- **System validation:** The electronic signature system must be validated per GAMP 5 or equivalent methodology. Maintain IQ, OQ, and PQ documentation. Revalidate after significant system changes.
- **Audit trail schema:** Capture, at minimum: signer identity (unique user ID), date and time (UTC-referenced), reason for signing, record identifier and version, and IP address or device identifier. The audit trail must be computer-generated and not modifiable by the signer.
- **Identity proofing and authorization records:** Document the identity-proofing process used at account creation (e.g., government ID verification, in-person enrollment). Maintain records of role-based authorization for each signing privilege.
- **Consent and disclosure capture:** Record the exact text of the electronic consent presented, the signer's affirmative response, and the timestamp. For consumer-facing transactions, include the hardware/software notice required by ESIGN.
- **Record locking and integrity:** Apply a tamper-evident mechanism (cryptographic hash or equivalent) at the moment of signing. The hash value should be stored in the audit trail and verifiable independently of the document viewer.
- **Retention and export capability:** Demonstrate that signed records can be exported in a human-readable format and retained for the full regulatory period. Test and document the export procedure annually.
- **Periodic revalidation triggers:** Define the events that trigger revalidation (major software updates, infrastructure changes, regulatory guidance changes) and document the revalidation rationale.

**Pro Tip:** *Link each signature event to the signed data element using an immutable SHA-256 or equivalent hash combined with a qualified timestamp from a trusted timestamping authority. Auditors increasingly ask for this linkage as evidence that the signed record version is identical to what the signer reviewed, not a later-modified copy. Without it, the association element of your e-signature validity argument rests on system controls alone, which is a weaker evidentiary position.*

***

## How to evaluate an e-signature vendor from a compliance perspective

Vendor selection is a compliance decision, not just a procurement one. The evidence a vendor can produce determines whether your signed records are defensible in an inspection or litigation.

1. **Configurable consent capture:** The system must present and record the specific consent and disclosure text required by ESIGN and any applicable state law. Verify that consent text is version-controlled and that the captured record includes the text version presented, not just a flag.
2. **Persistent, tamper-evident audit trail:** Request a sample audit trail export. It should include signer identity, timestamp, signing reason, document hash, and IP/device metadata. Confirm the trail is computer-generated and cannot be altered by any user, including administrators.
3. **Record locking and exportable reproducible records:** Confirm that the system locks the document at signing and that the locked version is exportable in a format courts and regulators can read without proprietary software.
4. **Multi-factor signer authentication:** For regulated records, verify that the system supports MFA or PKI-based authentication and that the authentication event is logged in the audit trail.
5. **SOC 2 Type II or ISO 27001 attestation:** These are the minimum security attestations for a vendor handling regulated records. Request the most recent report and confirm the scope covers the e-signature functionality.
6. **Validated deployment option:** For 21 CFR Part 11 contexts, ask whether the vendor offers a validated deployment with IQ/OQ/PQ documentation or a system validation package you can incorporate into your own validation lifecycle.
7. **Retention and retrieval SLA:** Confirm the contractual retention period, the retrieval procedure, and what happens to your records if the vendor relationship ends.
8. **Security architecture documentation:** Request a network and data-flow diagram showing where signed records are stored, encrypted, and backed up. This is a standard request in FDA inspections of computerized systems.

***

## Where compliance teams should focus their effort first

The most common failure mode in electronic signature compliance is not a missing policy. It is a gap between what the policy says and what the system actually captures. Auditors, whether from the FDA or a counterparty's legal team, go straight to the audit trail. They ask: can you show me the exact record the signer saw, the identity of the signer, the timestamp, and the reason they signed? If any of those elements is missing or reconstructed after the fact, the signed record's evidentiary value collapses.

For life-sciences teams, the risk is compounded by the validation requirement. A system that produces a complete audit trail but was never validated under GAMP 5 or an equivalent methodology is still non-compliant under Part 11. The validation evidence and the audit trail evidence must both be present and linked. That combination is what separates a defensible electronic signature from a signature that looks right until an inspector asks a follow-up question.

The practical priority order: first, confirm your audit trail captures all required metadata for every signing event. Second, verify that your identity-proofing and authorization records are current and documented. Third, ensure your system validation package is complete and covers the version of the software currently in production. Everything else, consent language, retention schedules, vendor attestations, matters, but those three are what inspectors reach for first.

***

## Qualitum supports regulated teams with validated, audit-ready evidence

For pharmaceutical, biotech, and medical device organizations, meeting electronic signature requirements is inseparable from the broader validation lifecycle. Every signed record needs to be traceable, tamper-evident, and reproducible, and the system producing those records needs to be validated.

![Qualitum](https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-48457/1785522367413_qualitum.jpg)

Qualitum's [agentic validation platform](https://qualitum.ai) enforces ALCOA+ at write-time and review-time across the full validation lifecycle, from URS through PQ and CSV/CSA. Every record is authored with a live traceability matrix and a complete audit trail that maps directly to the evidence items Part 11 inspectors request.

If your organization is assessing e-signature technology for regulated use, the right starting point is understanding what validation evidence the system can produce. [Book a working session](https://qualitum.ai/book) with Qualitum to see the platform's audit trail, validation output, and ALCOA+ enforcement in a live environment.

***

This article is general information, not a substitute for advice from a qualified lawyer. Consult a qualified legal professional about your own circumstances before acting on anything here.

## Sources

Primary statutes and agency guidance should be cited directly in legal memoranda and compliance SOPs, not through vendor summaries. The following sources are the authoritative references for U.S. electronic signature law.

- [U.S.C. Title 15 - COMMERCE AND TRADE 15 U.S.C. United](https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap96-subchapI-sec7001.htm)
- [21 CFR Part 11 -- Electronic Records; Electronic Signatures - eCFR](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11)
- [10.10.1 IRS Electronic Signature (e-Signature) Program | Internal Revenue Service](https://www.irs.gov/irm/part10/irm_10-010-001)
- [Electronic Signatures in Global and National Commerce Act - FDIC (PDF)](https://www.fdic.gov/resources/supervision-and-examinations/consumer-compliance-examination-manual/documents/10/x-3-1.pdf)
- [Frequently Asked Questions - California Secretary of State](https://www.sos.ca.gov/administration/regulations/current-regulations/technology/digital-signatures/frequently-asked-questions)
- [Electronic Signature Laws & Regulations - United States](https://helpx.adobe.com/legal/esignatures/regulations/united-states.html)

These are primary authority. A vendor's help page or a practitioner summary is useful for orientation, but your legal memos and SOPs should cite the statute or regulation directly.

***

## FAQ

### What are the requirements for an electronic signature to be valid?

Under ESIGN (15 U.S.C. §7001) and UETA, an electronic signature is valid when five conditions are met: the signer demonstrated intent to sign, consent and required disclosures were captured, the signature is logically associated with the specific record, the signer's identity is authenticated, and the signed record is retained in an accessible, tamper-evident form.

### What is the difference between an electronic signature and a digital signature?

An electronic signature is any electronic symbol or process adopted with intent to sign; a digital signature is a specific PKI-based cryptographic mechanism that provides non-repudiation attributes. Both can be legally valid under ESIGN and UETA, but regulated industries and high-risk transactions typically require the stronger evidentiary weight of a PKI-backed digital signature.

### What are the three main ESIGN Act requirements?

ESIGN's core requirements are: (1) the general rule of validity prohibiting denial of legal effect solely because a record is electronic, (2) consumer-consent and hardware/software disclosure requirements before electronic delivery, and (3) record-retention and accessibility obligations ensuring signed records can be accurately reproduced for the required period.

### What extra controls does 21 CFR Part 11 add beyond ESIGN?

Part 11 requires that the electronic signature system be validated, that audit trails be computer-generated and capture the reason for each signing action, that user accounts be individually controlled and not shared, and that organizations maintain written policies holding individuals accountable for actions taken under their electronic signatures. These controls go well beyond the ESIGN baseline.

### Does California have its own electronic signature law?

Yes. California adopted UETA (Civil Code §1633.1 et seq.) and the California Secretary of State publishes separate FAQ guidance clarifying that when a state agency requires a "digital signature," it means a PKI-based signature from an approved certification authority, not simply any electronic signature under UETA.

## Recommended

- [Qualitum · The agentic validation platform for life sciences](https://qualitum.ai)
- [Validate·AI · Qualitum](https://qualitum.ai/platform/validate-ai)
- [Audit Readiness Checklist for Validation and QA Leaders · Qualitum blog](https://blog.qualitum.ai/audit-readiness-checklist)
- [Operate·AI · Qualitum](https://qualitum.ai/platform/operate-ai)

## FAQ
### What are the requirements for an electronic signature to be valid?
Under ESIGN (15 U.S.C. §7001) and UETA, an electronic signature is valid when five conditions are met: the signer demonstrated intent to sign, consent and required disclosures were captured, the signature is logically associated with the specific record, the signer's identity is authenticated, and the signed record is retained in an accessible, tamper-evident form.

### What is the difference between an electronic signature and a digital signature?
An electronic signature is any electronic symbol or process adopted with intent to sign; a digital signature is a specific PKI-based cryptographic mechanism that provides non-repudiation attributes. Both can be legally valid under ESIGN and UETA, but regulated industries and high-risk transactions typically require the stronger evidentiary weight of a PKI-backed digital signature.

### What are the three main ESIGN Act requirements?
ESIGN's core requirements are: (1) the general rule of validity prohibiting denial of legal effect solely because a record is electronic, (2) consumer-consent and hardware/software disclosure requirements before electronic delivery, and (3) record-retention and accessibility obligations ensuring signed records can be accurately reproduced for the required period.

### What extra controls does 21 CFR Part 11 add beyond ESIGN?
Part 11 requires that the electronic signature system be validated, that audit trails be computer-generated and capture the reason for each signing action, that user accounts be individually controlled and not shared, and that organizations maintain written policies holding individuals accountable for actions taken under their electronic signatures. These controls go well beyond the ESIGN baseline.

### Does California have its own electronic signature law?
Yes. California adopted UETA (Civil Code §1633.1 et seq.) and the California Secretary of State publishes separate FAQ guidance clarifying that when a state agency requires a "digital signature," it means a PKI-based signature from an approved certification authority, not simply any electronic signature under UETA.
