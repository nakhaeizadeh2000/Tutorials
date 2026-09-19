# Remotes, GitHub, and Pull Requests

Your work leaves your machine safely: fetching without fear, pushing without overwriting, tracking branches that remember where they belong, and the fork → branch → pull-request loop teams actually use. The label model underneath lives in [Domain 01 §1.2](<../01 Git Fundamentals and Mental Model/sections/1. Thinking in snapshots/1.2. The commit DAG history as a graph.md>); this domain turns it into collaboration fluency.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) (snapshots, DAG, remotes named-not-taught) and [Domain 02: Core Workflow](<../02 Core Workflow Add Commit and Inspect/README.md>) (atomic commits worth sharing) and [Domain 03: Branching, Merging, and Conflicts](<../03 Branching Merging and Conflicts/README.md>) (short-lived branches, joining lines). This domain assumes all three and spends its pages on moving commits *between* machines and *through* review.

## 1. Syncing with remotes

### [1.1. Fetch, pull, and push](<./sections/1. Syncing with remotes/1.1. Fetch pull and push.md>)

1. **Fetch reads, pull reads-and-joins** (`fetch` updates remote-tracking labels only — safe anytime; `pull` is fetch plus a join you must choose deliberately).
2. **Push publishes your line** (fast-forward-only by default — the remote refuses to lose commits unless you force it with intent).
3. **Inspect before you join** (fetch first, read the graph, then merge or rebase — never pull blind on a diverged line).

### [1.2. Tracking branches and upstream](<./sections/1. Syncing with remotes/1.2. Tracking branches and upstream.md>)

1. **Upstream is a remembered pairing** (local branch ↔ remote branch — `push -u` sets it once, bare `push`/`pull`/`status` use it forever).
2. **Remote-tracking labels are read-only mirrors** (`origin/main` moves only on fetch — your local `main` and the mirror are two different labels).
3. **Divergence reads as ahead/behind** (`status` counts your unpublished commits vs their unfetched ones — the numbers tell you which direction to move).

---

## 2. GitHub collaboration

### [2.1. Forks, clones, and remotes](<./sections/2. GitHub collaboration/2.1. Forks clones and remotes.md>)

1. **Clone copies the repo, fork copies the ownership** (clone for repos you can push to; fork for repos you cannot — your fork is the pushable copy).
2. **Two remotes, two directions** (`origin` points at your copy, `upstream` at the source — fetch from upstream, push to origin, propose across).
3. **Clone once, fetch forever** (the initial copy is the only expensive step — everything after is incremental object transfer).

### [2.2. Pull-request flow: propose, review, merge](<./sections/2. GitHub collaboration/2.2. Pull request flow propose review and merge.md>)

1. **Branch → push → propose** (short-lived branch from Domain 03, pushed to your copy, opened as a PR against the source — the collaboration unit).
2. **Review is staged reading** (diff first, then files, then commits — approve the *change*, not the *person*; request changes as edits, not verdicts).
3. **Merge the PR, delete the branch** (squash vs merge vs rebase is team policy — Domain 06 owns it; the branch label dies either way).

---

## 3. Staying current

### [3.1. Keeping forks and branches current](<./sections/3. Staying current/3.1. Keeping forks and branches current.md>)

1. **Sync the fork, then the branch** (fetch `upstream`, advance your copy, rebase or merge into your line — in that order, never reversed).
2. **Rebase private, merge public** (replay your unshared commits onto fresh `upstream/main`; join — never rewrite — lines others already see).
3. **Stale PRs rot visibly** (behind-by-hundreds PRs conflict, fail CI on old APIs, and review dead code — refresh weekly, not the night before merge).

---

## 4. Important points to remember (remotes)

### [4.1. Remotes checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Remotes checklist habits mentors insist on.md>)

1. **Fetch before you reason** (every remote question starts with fresh mirrors — stale `origin/main` lies by omission).
2. **Upstream set once, trusted always** (`push -u` on first push — bare `push`, `pull`, and `status` ahead/behind then just work).
3. **Propose small, sync often** (short branches, fresh forks, weekly rebases — the collaboration loop stays cheap when the gap stays small).

---

## 5. Interview questions and answers (remotes)

### [5.1. Common interview QA: remotes and pull requests](<./sections/5. Interview questions and answers/5.1. Common interview QA remotes and pull requests.md>)

1. **Fetch vs pull — which and when?** (the judgment question — safe read vs read-plus-join, and why seniors fetch first).
2. **Your push is rejected — what happened?** (the practical exercise — non-fast-forward, fetch, read the divergence, then move deliberately).
3. **Walk me through your first PR to a new repo** (the process answer — fork, clone, branch, push, propose, sync), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Label theory and local joining** (branch-as-pointer model → Domain 01; fast-forward vs true merge, conflicts → Domain 03).
2. **Rewriting and rescue** (rebase, amend, reset, reflog — replaying and recovering lines → Domain 05, not here).
3. **Merge policy and release lines** (squash vs merge vs rebase rules, protected branches, release strategy → Domain 06; secrets and signing → Domain 07).
