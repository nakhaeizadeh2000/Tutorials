# Workflows, Tags, Stash, and Releases

Team policy made mechanical: which long-lived lines exist and why, which join strategy each mandates, how releases get marked with tags, where half-done work sleeps safely, and how Conventional Commits drive changelogs automatically. The mechanics underneath live in [Domains 01–05](<../01 Git Fundamentals and Mental Model/README.md>); this domain turns them into team decisions that outlive any single developer's judgment.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) (labels, DAG), [Domain 02: Core Workflow](<../02 Core Workflow Add Commit and Inspect/README.md>) (atomic commits, Conventional Commits as a writing contract), [Domain 03: Branching, Merging, and Conflicts](<../03 Branching Merging and Conflicts/README.md>) (joining lines), [Domain 04: Remotes, GitHub, and Pull Requests](<../04 Remotes GitHub and Pull Requests/README.md>) (PR flow, protected-branch consumers), and [Domain 05: Undo, Fix, and Rewrite History](<../05 Undo Fix and Rewrite History/README.md>) (replay vs join, lease discipline). This domain assumes all five and spends its pages on policy and release mechanics.

## 1. Branching strategy

### [1.1. Trunk-based, GitHub Flow, and GitFlow shapes](<./sections/1. Branching strategy/1.1. Trunk-based GitHub Flow and GitFlow shapes.md>)

1. **One long-lived line vs two vs many** (trunk: `main` only, short branches; GitHub Flow: `main` plus deploys; GitFlow: `main` + `develop` + release/hotfix lines — pick by release cadence, not fashion).
2. **Long-lived means protected** (every persistent line gets rules — required reviews, green CI, no direct pushes — the policy that makes the shape real).
3. **Strategy follows deploy reality** (continuous deploy → trunk; scheduled releases → GitFlow; managed SaaS middle → GitHub Flow with environment branches).

### [1.2. Merge policy: squash, merge commit, or rebase](<./sections/1. Branching strategy/1.2. Merge policy squash merge commit or rebase.md>)

1. **Three strategies, three histories** (squash: one commit per PR; merge commit: preserved joins; rebase: linear replay — each optimizes a different reader).
2. **Choose per line, enforce on the forge** (strategy lives in repo settings and required checks — not in per-developer improvisation).
3. **Merge queues for busy mains** (serializes concurrent green PRs — the race between "green on old base" and "merged into new base" disappears).

---

## 2. Marking and shelving

### [2.1. Tags: marking releases that never move](<./sections/2. Marking and shelving/2.1. Tags marking releases that never move.md>)

1. **Annotated tags are release objects** (message, tagger, date, optional signature — `v1.4.2` as a first-class citizen, not a sticky note).
2. **Semver gives tags meaning** (MAJOR.MINOR.PATCH — the number tells consumers what kind of change to expect before reading a line).
3. **Push tags deliberately** (tags don't follow branches — `push --tags` or explicit refspecs; deleted remote tags need `--delete` on both sides).

### [2.2. Stash: shelving half-done work](<./sections/2. Marking and shelving/2.2. Stash shelving half-done work.md>)

1. **Stash is a pause button** (`push -m` shelves tree+index, `pop` restores and drops — context switches without commits).
2. **Name every stash** (bare stashes become an unreadable stack — `-m` messages plus `list` discipline keep the shelf searchable).
3. **Stash is local and short-lived** (never a substitute for branches or backup pushes — shelf for hours, branch for days).

---

## 3. Release automation

### [3.1. Changelogs from Conventional Commits](<./sections/3. Release automation/3.1. Changelogs from Conventional Commits.md>)

1. **Parseable messages compound** (the Domain 02 writing contract pays off here — `feat:`/`fix:` prefixes become versions and notes automatically).
2. **Release pipelines derive, humans decide** (semantic-release computes bumps, drafts notes, moves tags — the team decides strategy and breaking-change honesty).
3. **Enforce the contract at the gate** (commitlint in CI plus PR-title checks — unparseable messages never reach the release line).

---

## 4. Important points to remember (workflows)

### [4.1. Workflow checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Workflow checklist habits mentors insist on.md>)

1. **Strategy written, not assumed** (one page: lines, policy per line, who merges — new hires read it before their first PR).
2. **Tags mean releases, branches mean work** (never move a release tag; never release from a personal branch).
3. **Shelf small, automate the boring** (stash with messages, changelogs from commits, queues for races).

---

## 5. Interview questions and answers (workflows)

### [5.1. Common interview QA: workflows, tags, and releases](<./sections/5. Interview questions and answers/5.1. Common interview QA workflows tags and releases.md>)

1. **Trunk vs GitFlow — which for us?** (the judgment question — cadence, team size, and deploy reality over dogma).
2. **Tag moved after release — what broke?** (the trust exercise — consumers, builds, and auditability vs floating labels).
3. **Design the release pipeline** (the systems answer — contracts, gates, automation, and humans), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics underneath** (joining → Domain 03; proposing → Domain 04; replay/undo → Domain 05; composing → Domain 02).
2. **Trust and production gates** (signing, secrets, hooks/CI enforcement, review etiquette → Domain 07; this domain sets policy, 07 guards it).
3. **Word-level naming** (what strategy words mean in meetings → IT Vocabulary; this track owns the operations).
