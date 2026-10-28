---
title: "Phishing Triage: More Than a Suspicious Link"
description: "A workflow for preserving email evidence, correlating indicators, and making defensible phishing decisions."
pubDate: 2026-10-21
tags: ["Email Analysis", "OSINT", "SOC"]
readTime: "5 min read"
---
A suspicious email is a collection of signals, not a verdict based on one URL. A disciplined triage workflow preserves evidence, looks for corroborating indicators, and avoids interacting with attacker-controlled infrastructure.

## 1. Preserve the message
Keep the original message or approved export, including full headers and timestamps. Record who received it and whether anyone clicked a link, opened an attachment, replied, or entered credentials. Follow your organization's evidence-handling policy.

## 2. Review sender authentication and routing
Inspect the visible `From` address alongside `Return-Path`, `Reply-To`, and the `Received` chain. Review SPF, DKIM, and DMARC results, remembering that authentication passing does not automatically make a message trustworthy.

Look for lookalike domains, unexpected reply destinations, and inconsistencies with the claimed sender.

## 3. Analyze URLs and attachments safely
Extract and normalize URLs without opening them in a normal browser session. Check domain age, reputation, redirects, and related indicators using approved threat-intelligence services.

For attachments, record file type, hashes, and metadata in a controlled analysis environment. Do not upload confidential messages or customer files to public scanners unless policy permits it.

### Triage record
- **Sender / Reply-To:**
- **SPF, DKIM, DMARC:**
- **URLs and domains:**
- **Attachment names and SHA-256:**
- **Reputation sources checked:**
- **User interaction reported:**
- **Confidence and next action:**

## 4. Decide and communicate
Correlate the evidence before classifying the message. If malicious, follow incident-response procedures to contain affected accounts, remove matching messages where appropriate, block validated indicators, and reset credentials or revoke sessions when exposure is suspected.

Share a short explanation with users so they know what to report next time.

**Remember:** a reputation score is one input—not a substitute for context, evidence, and analyst judgment.
