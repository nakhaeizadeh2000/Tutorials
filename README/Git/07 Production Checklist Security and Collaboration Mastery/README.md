# Production Checklist, Security, and Collaboration Mastery

The senior layer: proving authorship with signatures, keeping secrets out of history (and responding when they escape), enforcing gates with hooks and CI, conducting review as a team sport, and operating incidents with Git under pressure. Every mechanic underneath lives in [Domains 01–06](<../01 Git Fundamentals and Mental Model/README.md>); this domain turns them into production-grade habits — the mentor-grade workflows the track has been building toward.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) (model), [Domain 02: Core Workflow](<../02 Core Workflow Add Commit and Inspect/README.md>) (fluency, `.gitignore`), [Domain 03: Branching, Merging, and Conflicts](<../03 Branching Merging and Conflicts/README.md>) (joining), [Domain 04: Remotes, GitHub, and Pull Requests](<../04 Remotes GitHub and Pull Requests/README.md>) (collaboration flow), [Domain 05: Undo, Fix, and Rewrite History](<../05 Undo Fix and Rewrite History/README.md>) (undo, rescue), and [Domain 06: Workflows, Tags, Stash, and Releases](<../06 Workflows Tags Stash and Releases/README.md>) (policy, tags, automation). This domain assumes all six and spends its pages on trust, gates, and mastery.

## 1. Trust

### [1.1. Signing commits and tags](<./sections/1. Trust/1.1. Signing commits and tags.md>)

1. **Signatures prove authorship** (`-S` on commits and tags — the signature binds identity to content; unsigned history asserts, signed history proves).
2. **Verify before you trust** (`--show-signature`, `verify-commit`, required signatures on release lines — check at the gates that matter).
3. **Keys are identity infrastructure** (generate once, guard the private half, publish the public half — loss and rotation have playbooks, not panic).

### [1.2. Secret hygiene and leak response](<./sections/1. Trust/1.2. Secret hygiene and leak response.md>)

1. **Prevention beats surgery** (`.gitignore` first, secret scanning in CI, pre-commit hooks — secrets never committed beat secrets removed).
2. **Pushed secrets are compromised** (rotate immediately — removal from history doesn't unsee what was fetched or cached).
3. **Surgery is a last resort** (`filter-repo` rewrites every downstream copy — coordinate like an incident, because it is one).

---

## 2. Team enforcement

### [2.1. Hooks and CI gates](<./sections/2. Team enforcement/2.1. Hooks and CI gates.md>)

1. **Hooks advise locally, gates enforce remotely** (client hooks are bypassable reminders; server-side checks are the control — know which is which).
2. **Gate the outcomes that matter** (parseable messages, green builds, fresh bases, required reviews — automation from Domains 04–06, enforced here).
3. **Keep gates fast and honest** (slow gates get bypassed; flaky gates teach contempt — latency and reliability are policy features).

### [2.2. Review etiquette and collaboration contracts](<./sections/2. Team enforcement/2.2. Review etiquette and collaboration contracts.md>)

1. **Review code, respect humans** (comment on lines, propose edits, separate blocking from advisory — the tone that keeps seniors reviewing).
2. **Authors own the loop** (small PRs, green before request, every thread resolved, re-request after fixes — reviewability is the author's job).
3. **Contracts beat culture memos** (response-time SLAs, approval counts, CODEOWNERS routing — expectations written where work happens).

---

## 3. Production operations

### [3.1. Incidents, bisect, and hotfix trains](<./sections/3. Production operations/3.1. Incidents bisect and hotfix trains.md>)

1. **Bisect finds the culprit mechanically** (binary search over history — `bisect start/bad/good`, test, `reset` — logarithmic instead of archaeological).
2. **Freeze, then fix forward** (red main stops merges first — revert-forward beats history surgery under pressure).
3. **Hotfixes ride short trains** (branch from the tag, cherry-pick or PR the fix, tag the release — the smallest line that carries the cure).

---

## 4. Important points to remember (production)

### [4.1. Production checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Production checklist habits mentors insist on.md>)

1. **Trust is proven, not asserted** (signed releases, scanned secrets, verified gates — evidence at every step).
2. **Gates guard outcomes, humans judge** (automation enforces the invariant parts; review owns the variant parts).
3. **Incidents follow playbooks** (freeze, bisect, revert-forward, retro — rehearsed before needed, not improvised during).

---

## 5. Interview questions and answers (production)

### [5.1. Common interview QA: production Git mastery](<./sections/5. Interview questions and answers/5.1. Common interview QA production Git mastery.md>)

1. **Secret committed and pushed — exact steps?** (the incident answer — rotate, remove, coordinate, prevent).
2. **Main is red on a Friday deploy — now what?** (the pressure test — freeze, bisect or revert, hotfix train, retro).
3. **Design code review for a 50-engineer org** (the systems answer — routing, SLAs, gates, etiquette), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Everything underneath** (model → 01; fluency → 02; joining → 03; proposing → 04; undo → 05; policy → 06 — this domain guards and masters).
2. **Platform specifics** (forge admin consoles, registry publishing, deploy systems — documented per vendor; this domain owns the Git half).
3. **Word-level naming** (what security/process words mean in meetings → IT Vocabulary; this track owns the operations).
