---
title: "Active Directory Enumeration: Start With the Map"
description: "An evidence-first approach to mapping an Active Directory lab before drawing conclusions about attack paths."
pubDate: 2026-10-20
tags: ["Active Directory", "BloodHound", "Lab Notes"]
readTime: "6 min read"
---
When assessing an Active Directory lab, it is tempting to jump straight into attack tooling. A better first step is to understand the environment: its domain structure, identities, group relationships, hosts, and trust boundaries. Good enumeration turns output into testable hypotheses.

## 1. Confirm the scope and starting point
Record the authorized domain, in-scope hosts, current account privileges, and rules of engagement. In a lab, note which machine and network segment you are operating from. Do not scan systems outside the agreed scope.

## 2. Build an identity and host inventory
Use approved, low-impact queries to identify domain controllers, DNS configuration, domain users and groups, computer accounts, and relevant service accounts. Keep raw output and timestamps so findings can be reproduced.

Example commands from a Windows domain lab host:

```bat
whoami
whoami /all
echo %USERDOMAIN%
nltest /dsgetdc:%USERDOMAIN%
```

These are starting points, not a complete assessment. Availability and results depend on host configuration and permissions.

## 3. Follow relationships, not just object names
Prioritize nested group membership, delegated permissions, service accounts with excessive rights, privileged sessions on workstations, and permissions over Group Policy Objects.

Graph tools such as BloodHound can help visualize relationships, but a graph edge is a lead to validate—not proof that a path is exploitable.

## 4. Turn observations into findings
- **Observation:** describe the exact object, permission, or relationship.
- **Validation:** explain how it was confirmed within scope.
- **Impact:** state what an attacker could do if the condition is abused.
- **Remediation:** remove unnecessary rights, tighten delegation, rotate exposed credentials, or reduce privileged account exposure as appropriate.

**Field rule:** enumerate methodically, validate every assumption, and document the evidence needed for another tester to reproduce the finding.
