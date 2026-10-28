---
title: Configurable vs Custom Validation in GxP Systems
date: 2026-10-28
description: Configured and custom systems need different validation effort. Learn how to scope testing, evidence and change control for each, and stay audit ready.
author: Qualitum
cover: https://media.babylovegrowth.ai/blog-images/organization-48457/1793062891782_QA-specialist-comparing-GxP-validation-records.jpeg
coverAlt: QA specialist comparing GxP validation records
---

Configurable validation applies to commercial software whose settings, workflows and parameters you adjust without touching source code. Custom validation applies to code written or modified for you, and it carries a much heavier burden: unit, integration and system testing of that code. The label sets a starting point only. Risk, intended use and the quality of your supplier evidence decide how deep you actually test.

This guide is for validation, QA and CSV leads who need to scope a project, defend the scope to an inspector, and avoid both over-testing and under-testing.

## TL;DR

- Configured systems focus testing on your settings, workflows and usage scenarios. Custom code needs full code-level validation on top of that.
- Both approaches need formal change control, with impact assessment and re-validation scaled to the change.
- A complex configuration can carry more residual risk than a simple custom component, so decide validation depth by risk and intended use, not by label.
- You may leverage vendor validation documentation only after you assess it for adequacy. You stay responsible for any gap.
- Whichever route you take, traceability from requirements to tests and ALCOA+ controls on every record are what make the package defensible.

## Table of Contents

- [What configurable and custom mean in a GxP system](#what-configurable-and-custom-mean-in-a-gxp-system)
- [Configurable vs custom validation side by side](#configurable-vs-custom-validation-side-by-side)
- [What regulators expect for each approach](#what-regulators-expect-for-each-approach)
- [Why the label alone misleads](#why-the-label-alone-misleads)
- [When configuration is enough and when you need custom validation](#when-configuration-is-enough-and-when-you-need-custom-validation)
- [The evidence package for each route](#the-evidence-package-for-each-route)
- [Data integrity applies equally to both](#data-integrity-applies-equally-to-both)
- [Change control: the part that never ends](#change-control-the-part-that-never-ends)
- [Our perspective](#our-perspective)
- [Where Qualitum fits](#where-qualitum-fits)
- [A short decision path](#a-short-decision-path)
- [FAQ](#faq)
- [Sources](#sources)

## What configurable and custom mean in a GxP system

The two terms describe where the behavior of the system comes from.

A configurable system is a pre-built commercial application. Its [settings, workflows and parameters can be adjusted without changing source code](https://www.pharmagmp.in/configurable-vs-custom-systems-validation-strategy-and-documentation-impact/). Examples include setting up approval routes in an eQMS, defining user roles in a LIMS, or choosing which fields a deviation form requires.

A custom system, or a custom component inside a commercial platform, runs code written specifically for you: a bespoke interface, a scripted calculation, an added module. The same source notes that custom systems [require full code validation, including unit, integration and system testing](https://www.pharmagmp.in/configurable-vs-custom-systems-validation-strategy-and-documentation-impact/), while configured systems concentrate testing on the configured parameters and usage scenarios.

If you work with GAMP 5 vocabulary, this is the familiar split between configured products and custom applications. The 2026 ISPE article [When Is a Category Not a Category?](https://ispe.org/pharmaceutical-engineering/january-february-2026/when-category-not-category) is a useful reminder that categorization is a starting point and not a validation checklist.

One note on the search results for this phrase: most pages that rank for it concern web forms, Salesforce rules or Java validators. That is software input validation. This article is about validation in the regulated sense: documented evidence that a computerized system is fit for its intended use.

## Configurable vs custom validation side by side

| Aspect | Configurable | Custom |
|---|---|---|
| Source of behavior | Vendor code, adjusted through settings | Code written or modified for you |
| Testing focus | Configured parameters, workflows, your usage scenarios | Full code testing: unit, integration and system |
| Supplier evidence | Can be leveraged after you assess its adequacy | Limited to what the developer produces, plus your own review |
| Implementation effort | Generally lower | Generally higher and slower to design, test and release |
| Maintenance | Primary codebase stays unchanged, so upkeep is more streamlined | You maintain the base product and the added features |
| Change control | Impact assessment and scoped re-validation for patches, parameter changes and enhancements | Same, with regression testing of custom code on top |

The maintenance row has a concrete rationale. When you customize, [maintenance can cover both the original software and the custom-added features](https://academy.broadcom.com/blog/valueops/software-configuration-versus-customization), whereas configuration leaves the main codebase unchanged. Every vendor upgrade then forces you to ask whether your custom code still behaves as validated.

Notice what the table does not say: that configuration is always easier to validate. It usually is, but only when the configuration is modest and the supplier evidence is sound.

## What regulators expect for each approach

Regulators do not grade you on the label. They look for evidence that the system performs as intended and stays that way.

The EMA guideline on computerised systems and electronic data in clinical trials frames validation as [confirmation that specified requirements are consistently fulfilled and the system is fit for purpose](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf), with accuracy, reliability and intended performance maintained from design through decommissioning. Three points from it matter directly for this decision:

- **Configuration and customization are both in scope.** Trial-specific configuration and customization must be pre-specified, documented in detail, checked against the protocol and related documents, quality-controlled and tested before production release.
- **New code must be validated before use.** Newly developed functionality, interfaces or added code fall under this expectation. It is the clearest trigger for custom-level validation rather than relying on standard-platform evidence.
- **Vendor documents are not a free pass.** You may leverage vendor validation documentation only after assessing the vendor's activities for adequacy and coverage of your intended use. You remain ultimately responsible and must perform additional validation where gaps exist.

On the US side, FDA's 2022 presentation on [Computer Software Assurance for production and quality systems](https://www.fda.gov/media/163299/download) recommends choosing assurance activities from the intended use and the risk of failure, and keeping sufficient evidence that the software was assessed and performs as intended. Validation effort should be no more than necessary for the identified risk.

The practical reading: a configured system does not escape scrutiny, and a custom one is not automatically a mountain of paperwork. Both are judged on whether your effort matches the risk and whether the record proves it.

## Why the label alone misleads

It is tempting to treat "configurable" as low risk and "custom" as high risk. ISPE's perspective is more careful: a complex configured component can present [more residual-defect risk than a simple custom component](https://ispe.org/pharmaceutical-engineering/january-february-2026/when-category-not-category). The article stresses critical thinking, functional risk assessment and supplier assessment as the factors that determine which lifecycle activities you add, remove or scale.

Two examples show why.

**A heavily configured workflow engine.** Your team builds forty interlocking rules in a commercial platform that route batch deviations, escalate by severity and trigger CAPA. No code was written, yet the combinations of conditions behave like a program. Testing only the happy path would leave real defects.

**A small custom script.** A twelve-line script converts a unit and writes a value to a record. It is custom, but its function is narrow and easy to test exhaustively. A proportionate, well-documented test set can be sufficient.

The lesson is to ask three questions of every configured or custom element:

1. Does it affect patient safety, product quality or data integrity?
2. How complex is the logic, and how many conditions interact?
3. How much trustworthy evidence do we already hold from the supplier?

FDA's perspective supports this: confidence in the intended use, not maximal paperwork, [should drive the selection and extent of testing, monitoring, supplier evidence and documentation](https://www.fda.gov/media/163299/download). The same risk logic is the heart of the shift from traditional CSV toward CSA, which [moves away from exhaustive retesting and screenshot-heavy documentation](https://www.ibtimes.co.in/how-visionary-leader-reshaping-software-assurance-through-risk-based-approaches-896399). Least burdensome does not mean lower expectations: documentation sufficiency is anchored in risk analysis and intended use.

## When configuration is enough and when you need custom validation

Use this as a working rule set, then confirm each point in your risk assessment.

**Configuration is usually enough when:**

- The standard product meets your user requirements through settings, roles, templates and workflows.
- You can document each configured setting against a requirement.
- The supplier's quality system and test evidence have been assessed and found adequate for your intended use.
- The functions you rely on are used widely enough that defects tend to surface in the field.

**Custom-level validation is needed when:**

- You add code, scripts, interfaces or modules not delivered and supported by the vendor as standard.
- A gap in the supplier evidence cannot be closed by assessment or audit.
- The custom function touches critical data, calculations or release decisions.

A useful side effect of keeping configuration within the vendor's supported options: it reduces what you have to retest each time the platform updates. If you need to justify a configuration-first strategy to your team, our guide to [change impact assessment for CSV and CSA](https://blog.qualitum.ai/change-impact-assessment) shows how to scope re-validation per change.

### Mixed systems are the norm

Most real systems combine both: a configured core with a few custom interfaces or reports. Validate the core as configured, and treat each custom element as its own validated unit with its own risk rating. Keep the boundary explicit in your validation plan so an inspector can see exactly where vendor evidence ends and yours begins.

![Configured core and separately validated custom components](https://media.babylovegrowth.ai/blog-images/organization-48457/1793062948727_Configured-core-and-separately-validated-custom-components.jpeg)

Speed claims from vendors are worth testing against your own context. Some vendors cite configurable eQMS rollouts of about 90 days against six months or more for custom builds, but your timeline depends on your processes, data migration and approval cycles. Use such figures as a prompt for planning, not a commitment.

## The evidence package for each route

Whatever the route, the record must show what you intended, what you did and what happened. FDA's CSA material says the assurance record should document the [intended use, risk determination, assurance activities and testing, issues and their disposition, a conclusion, the date and tester, and appropriate review and approval](https://www.fda.gov/media/163299/download).

For a configured system, a defensible package typically contains:

- Approved user requirements and a documented risk assessment.
- A configuration specification listing every setting that differs from default, with its rationale.
- Supplier assessment and the portion of vendor evidence you are leveraging, with your adequacy conclusion.
- Tests of configured workflows and real usage scenarios, using pre-approved cases.
- Traceability from requirements to configuration to tests.

For custom functionality, add:

- A design specification and code-level review or unit testing records.
- Integration testing with the surrounding systems and interfaces.
- System-level tests of the custom function under realistic conditions.
- Version control and release records so you can show exactly which code was tested.

The EMA expects [pre-approved test cases that state the software version, prerequisites, test steps and expected results, with actual results recorded](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf), and traceability maintained between requirements and tests or other evidence. In practice that traceability should [link user requirements to design elements and then to test cases](https://www.pharmagmp.in/computer-software-validation-integrating-gamp-5-and-fda-csa-expectations/). A live matrix beats a spreadsheet rebuilt before each audit.

## Data integrity applies equally to both

Neither route lets you relax data integrity. Systems should be designed, configured and validated with ALCOA+ principles in mind, with role-based security in place and audit trails enabled so that they cannot be disabled after initial configuration. That has a direct consequence for configured systems: the audit trail setting, the role matrix and the signature rules are configuration items, and they belong in your tested configuration specification.

The same source offers a sobering point: data integrity is best ensured at the development stage, because remediation after implementation is difficult and often unsuccessful. Test it before go-live, not after the first finding.

For deeper treatment, see our pieces on [ALCOA+ audit trails](https://blog.qualitum.ai/alcoa-audit-trails), [write-time ALCOA+ audit fields](https://blog.qualitum.ai/write-time-alcoa) and the broader [data integrity compliance playbook](https://blog.qualitum.ai/data-integrity-compliance).

## Change control: the part that never ends

Validation is not a one-off project. Both configurable and custom systems require [formal change control, including impact assessment and appropriately scoped re-validation or regression testing for patches, parameter changes and enhancements](https://www.pharmagmp.in/configurable-vs-custom-systems-validation-strategy-and-documentation-impact/).

Where the routes differ is the volume of change you generate:

- **Configured:** vendor releases and your own parameter changes. Each needs an impact assessment to decide whether you retest a function, a workflow or nothing.
- **Custom:** vendor releases, your own code changes and the interaction between them. Regression testing is broader because your code sits on a moving base.

A lean approach is to tie every change to its requirement and risk rating so the retest scope follows automatically. Our six-step guide to [inspector-ready validation change control](https://blog.qualitum.ai/validation-change-control) covers how to structure that record.

## Our perspective

We see the same pattern in validation teams again and again. The debate about configurable versus custom is rarely the real bottleneck. The bottleneck is authoring: writing URS, risk assessments, protocols and traceability by hand, then reconciling them when something changes. That is the quiet tax on every validation cycle, and it grows with every configured setting and custom component you add.

![Our perspective — overview diagram](https://media.babylovegrowth.ai/blog-images/organization-48457/1793062983639_Our-perspective-overview-diagram.jpeg)

That is why we built Qualitum around agent-authored validation evidence rather than a faster template library. Drafts are produced by agents, every record is checked against ALCOA+ at write time and again at review time, and human signatures remain authoritative. The platform is deployed privately inside the customer's infrastructure, so records do not leave it, and it is model-agnostic. We do not claim the system removes the need for judgment. Deciding that a configuration is simple enough to test lightly, or that a script is critical enough to test exhaustively, is a quality decision, and it belongs to your people.

Our advice is plain. Prefer configuration inside the vendor's supported options. Keep custom code small, isolated and risk-rated. Let the risk assessment, not the label, set the testing depth. And build the traceability so that the answer to an inspector's question is one click away, not a fire drill before an audit.

> *— Matt*

## Where Qualitum fits

If your team spends more time writing validation documents than executing them, the [Validate·AI and Operate·AI platform](https://qualitum.ai/platform/) generates requirements, risk assessments and IQ/OQ/PQ protocols for configured and custom systems alike, with a live traceability matrix. You can start with a [paid pilot](https://qualitum.ai/) on one system to see the effect on your own authoring time. For the requirements step specifically, the [requirements drafting use case](https://qualitum.ai/use-cases/drafting) shows how a sourced first-draft spec comes together.

## A short decision path

1. **Write the intended use and user requirements first.** Every configuration setting and custom function should trace back to one.
2. **Assess the supplier.** Decide how much vendor evidence you can leverage and record why.
3. **Risk-rate each element.** Rate by impact on patient safety, product quality and data integrity, not by whether it is configured or coded.
4. **Scale testing.** Light, scenario-based testing for low-risk configuration. Full code-level and integration testing for critical custom functions.
5. **Lock the configuration baseline.** Put audit trails, roles and signature rules into the tested specification.
6. **Plan change control now.** Define who assesses impact, how retest scope is chosen and how traceability stays current.

For related scoping questions, our guide on [qualification vs validation](https://blog.qualitum.ai/qualification-vs-validation) helps separate equipment from system activities, and the [risk-based CMMS validation](https://blog.qualitum.ai/cmms-validation) article applies the same logic to a common configured system.

## FAQ

### What is the difference between configuration and customization in validation?

Configuration adjusts settings, workflows and parameters in a commercial product without changing its source code. Customization adds or modifies code. Configured systems concentrate testing on your settings and usage scenarios, while custom code needs full code-level testing as well.

### Is a configured system always less work to validate?

No. Configuration usually reduces effort because you can leverage assessed vendor evidence and your codebase stays untouched. But a complex configuration with many interacting rules can carry more residual risk than a small custom script, so effort should follow risk and intended use.

### Can I rely on the vendor's validation documents?

Partly. You may leverage them after assessing whether they are adequate and cover your intended use. You remain responsible for the result, and you must perform additional validation wherever the vendor evidence leaves a gap.

### Does change control differ between the two approaches?

Both need formal change control with impact assessment and scoped re-validation or regression testing. Custom systems generate more of it, because your code must be retested whenever the underlying platform or the code itself changes.

### Does CSA mean I can document less?

CSA means documentation should match risk and intended use, not that expectations are lower. You still keep sufficient evidence that the software was assessed and performs as intended, but you can skip exhaustive retesting where the risk does not call for it.

## Sources

- [Guideline on computerised systems and electronic data in clinical trials (EMA)](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-computerised-systems-and-electronic-data-clinical-trials_en.pdf)
- [Computer Software Assurance for Production and Quality Systems (FDA)](https://www.fda.gov/media/163299/download)
- [When Is a Category Not a Category? (ISPE Pharmaceutical Engineering)](https://ispe.org/pharmaceutical-engineering/january-february-2026/when-category-not-category)
- [Configurable vs Custom Systems: Validation Strategy and Documentation Impact](https://www.pharmagmp.in/configurable-vs-custom-systems-validation-strategy-and-documentation-impact/)
- [Computer Software Validation: Integrating GAMP 5 and FDA CSA Expectations](https://www.pharmagmp.in/computer-software-validation-integrating-gamp-5-and-fda-csa-expectations/)
- [Configuration vs. Customization: The Right Approach](https://academy.broadcom.com/blog/valueops/software-configuration-versus-customization)
- [How a Visionary Leader is Reshaping Software Assurance](https://www.ibtimes.co.in/how-visionary-leader-reshaping-software-assurance-through-risk-based-approaches-896399)

## Recommended

- [Prevent 483s: Risk Based CMMS Validation for GxP QA Teams](https://blog.qualitum.ai/cmms-validation)
- [Multi-Agent Validation in GxP: How It Works and What to Ask](https://blog.qualitum.ai/multi-agent-validation)
- [Prove Meaning in GxP Data Migration Validation With Risk Based Tiers](https://blog.qualitum.ai/data-migration-validation)

## FAQ
### What is the difference between configuration and customization in validation?
Configuration adjusts settings, workflows and parameters in a commercial product without changing its source code. Customization adds or modifies code. Configured systems concentrate testing on your settings and usage scenarios, while custom code needs full code-level testing as well.

### Is a configured system always less work to validate?
No. Configuration usually reduces effort because you can leverage assessed vendor evidence and your codebase stays untouched. But a complex configuration with many interacting rules can carry more residual risk than a small custom script, so effort should follow risk and intended use.

### Can I rely on the vendor's validation documents?
Partly. You may leverage them after assessing whether they are adequate and cover your intended use. You remain responsible for the result, and you must perform additional validation wherever the vendor evidence leaves a gap.

### Does change control differ between the two approaches?
Both need formal change control with impact assessment and scoped re-validation or regression testing. Custom systems generate more of it, because your code must be retested whenever the underlying platform or the code itself changes.

### Does CSA mean I can document less?
CSA means documentation should match risk and intended use, not that expectations are lower. You still keep sufficient evidence that the software was assessed and performs as intended, but you can skip exhaustive retesting where the risk does not call for it.
