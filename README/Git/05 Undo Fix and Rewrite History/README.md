# Undo, Fix, and Rewrite History

Mistakes are data, not damage: unstaging without fear, undoing public commits without rewriting, replaying private lines onto fresh bases, and recovering anything the reflog still remembers. The snapshot model underneath lives in [Domain 01](<../01 Git Fundamentals and Mental Model/README.md>); this domain turns it into calm, reversible operations — with the golden rule that draws the line between safe and destructive.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) (snapshots, DAG, three areas), [Domain 02: Core Workflow](<../02 Core Workflow Add Commit and Inspect/README.md>) (staging, atomic commits), [Domain 03: Branching, Merging, and Conflicts](<../03 Branching Merging and Conflicts/README.md>) (joining lines, aborting merges), and [Domain 04: Remotes, GitHub, and Pull Requests](<../04 Remotes GitHub and Pull Requests/README.md>) (private vs public lines, lease-push). This domain assumes all four and spends its pages on fixing and replaying.

## 1. Undoing safely

### [1.1. Restore, reset, and unstaging without fear](<./sections/1. Undoing safely/1.1. Restore reset and unstaging without fear.md>)

1. **Unstage, don't unmake** (`restore --staged` moves work back to the tree — composition changes, nothing is lost).
2. **Discard deliberately, never casually** (`restore --source HEAD -- <path>` and `reset --hard` destroy uncommitted work — the commands that deserve a pause and a `status` first).
3. **Know which area you're targeting** (working tree vs index vs HEAD — every undo names its area; the three-area model from Domain 01 picks the command).

### [1.2. Revert: the public undo](<./sections/1. Undoing safely/1.2. Revert the public undo.md>)

1. **Revert adds, never removes** (a new commit that undoes an old one — shared lines stay append-only, everyone's copies keep working).
2. **Reverting a merge names its parent** (`revert -m 1 <merge>` undoes the *join* — the granularity rollbacks actually need).
3. **Revert conflicts resolve like merges** (the same edit-test-add-commit loop from Domain 03 — undoing is joining, backwards).

---

## 2. Rewriting history

### [2.1. Amend: fixing the last commit](<./sections/2. Rewriting history/2.1. Amend fixing the last commit.md>)

1. **Amend replaces the tip** (message fixes, forgotten files, staged-then-remembered hunks — one commit, not two, when nobody else has seen it).
2. **Amended commits are new commits** (new hash, orphaned old tip — safe on private lines, destructive on shared ones).
3. **After amend comes lease-push** (pushed PR branches need `--force-with-lease` — the lease checks, bare `--force` doesn't).

### [2.2. Rebase and cherry-pick: replaying commits](<./sections/2. Rewriting history/2.2. Rebase and cherry-pick replaying commits.md>)

1. **Rebase replays onto a new base** (your commits, fresh foundation — linear history without surprise joins).
2. **Interactive rebase edits the story** (reword, squash, fixup, drop — private-branch cleanup before review, never after merge).
3. **Cherry-pick plucks single commits** (one commit across lines — hotfixes and backports without merging whole branches).

---

## 3. Rescue and recovery

### [3.1. Reflog: the seatbelt under everything](<./sections/3. Rescue and recovery/3.1. Reflog the seatbelt under everything.md>)

1. **Reflog remembers every move** (branch tips, resets, rebases, amends — 90 days by default, local only, never pushed).
2. **Recover by naming the lost tip** (`reset --hard <reflog-entry>` or a rescue branch — deleted commits are reachable until expiry and gc).
3. **Reflog is local and finite** (it doesn't cross clones, and entries expire — the seatbelt works if you reach for it promptly).

---

## 4. Important points to remember (undo and rewrite)

### [4.1. Undo checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Undo checklist habits mentors insist on.md>)

1. **Public lines append, private lines may rewrite** (the golden rule — revert shared, amend/rebase only what nobody else pulled).
2. **Destructive commands get a status first** (`status`, and a branch or tag as a bookmark before `--hard`, rebase, or lease-push).
3. **Lease, never force; reflog before panic** (`--force-with-lease` checks, `--force` doesn't; lost work starts with `reflog`, not despair).

---

## 5. Interview questions and answers (undo and rewrite)

### [5.1. Common interview QA: undo, rewrite, and recovery](<./sections/5. Interview questions and answers/5.1. Common interview QA undo rewrite and recovery.md>)

1. **Committed to the wrong branch — now what?** (the workflow trap — move the commits, don't redo them).
2. **Reset vs revert vs restore — which and when?** (the judgment question — areas, visibility, and the golden rule).
3. **You force-pushed main — walk me through recovery** (the incident answer — reflog, rescue branch, communicate), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Joining and proposing** (merges, conflicts, PR flow, fork currency → Domains 03–04; this domain replays and undoes).
2. **Policy and releases** (which strategy mandates rebase vs merge, tags, release lines → Domain 06; trust and gates → Domain 07).
3. **Everyday composition** (staging, messages, log archaeology → Domain 02; the snapshot model → Domain 01).
