# Security Cloud and DevOps Vocabulary

Staying safe and shipping smoothly: the words for threats and defenses, proving who you are, the automation that carries code to users, and the operate-side language of incidents and reversals.

## 0. Prerequisites

[Domain 01 Core IT Concepts](<../01 Core IT Concepts and Professional Jargon/README.md>) — precise reporting ([1.1](<../01 Core IT Concepts and Professional Jargon/sections/1. Learning vocabulary like a professional/1.1. Why precise vocabulary matters.md>)); [Domain 03](<../03 Software Development and Engineering Terms/README.md>) build/test/release ([2.1](<../03 Software Development and Engineering Terms/sections/2. Ship words/2.1. Build test release and deploy.md>)) — pipelines automate that path; [Domain 04](<../04 Networks Web and Internet Vocabulary/README.md>) HTTP outcomes ([2.1](<../04 Networks Web and Internet Vocabulary/sections/2. Web talk/2.1. HTTP requests verbs and status codes.md>)) — status classes feed alerts.

## 1. Safety words

### [1.1. Threat, vulnerability, CVE, and patch](<./sections/1. Safety words/1.1. Threat vulnerability CVE and patch.md>)

1. **Threat is who, vulnerability is where** (attacker intent vs your exploitable weakness — risk needs both).
2. **CVE names it, CVSS scores it** (public ID + severity number — the shared language of "how bad, how urgent").
3. **Patch closes it, upgrade moves you** (targeted fix vs version jump — different risk, different testing).

### [1.2. Auth, identity, secrets, and least privilege](<./sections/1. Safety words/1.2. Auth identity secrets and least privilege.md>)

1. **Authentication proves who, authorization decides what** (identity check vs permission check — 401 vs 403).
2. **Secrets are credentials that must never leak** (passwords, keys, tokens — vaulted, rotated, never in code).
3. **Least privilege limits blast radius** (minimum access for the job — every extra permission is future attacker leverage).

---

## 2. Flow words

### [2.1. Pipeline, observe, and incident words](<./sections/2. Flow words/2.1. Pipeline observe and incident words.md>)

1. **Pipeline automates the path** (CI builds+tests, CD delivers — Domain 03's conveyor, now automatic).
2. **Logs, metrics, traces observe it** (three pillars — events, numbers, request journeys — each answers different questions).
3. **Incident, severity, postmortem** (declared failure + graded urgency + blameless learning — the operate loop).

### [2.2. On-call, runbook, hotfix, and rollback words](<./sections/2. Flow words/2.2. On-call runbook hotfix and rollback words.md>)

1. **On-call owns the pager** (rotation + escalation — named human, bounded burden).
2. **Runbook scripts the response** (written playbook for known failures — diagnosis without inventing).
3. **Hotfix skips the line, rollback undoes** (emergency forward vs emergency reverse — both with explicit risk).

---

## 4. Important points to remember (safety)

### [4.1. Safety checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Safety checklist mental models mentors insist on.md>)

1. **Name the weakness and its score** (CVE + CVSS — before debating urgency).
2. **Name the identity and its scope** (who + least privilege — in every access grant).
3. **Name the reversal** (rollback path + time — before every release).

---

## 5. Interview questions and answers (safety and flow)

### [5.1. Common interview QA: safety and flow vocabulary](<./sections/5. Interview questions and answers/5.1. Common interview QA safety and flow vocabulary.md>)

1. **AuthN vs AuthZ** (prove-who vs decide-what — with the 401/403 tell).
2. **How do you handle secrets** (vaulted, rotated, never in code — the three verbs).
3. **CI/CD and incident walkthrough** (pipeline in one paragraph, postmortem without blame), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Security practice** (threat modeling, pentesting, crypto implementation) — future Security track, not here.
2. **Pipeline configuration** (writing workflows, runners, secrets wiring) — future DevOps/Cloud tracks; words stay here.
3. **Release-shape mechanics** (flag systems, canary analysis operation) — Domain 03 names them; operating them lives in future tracks.
