# Git Fundamentals and Mental Model

Why Git exists, how it thinks (snapshots, not diffs; history as a graph), the three areas every change flows through, and your first repository — the foundation every later domain assumes.

## 0. Prerequisites

None — this is the entry point of the Git track. If you already commit daily, skim sections 1–2 for the vocabulary used across the track, then jump to Domain 02. Word-level naming of repo/branch/commit is assumed from [IT Vocabulary Domain 03 §1](<../../ITVocabulary/03 Software Development and Engineering Terms/sections/1. Change words/1.1. Repo branch commit and merge.md>) — this domain teaches the mechanics behind those words.

## 1. Thinking in snapshots

### [1.1. What Git is and why snapshots win](<./sections/1. Thinking in snapshots/1.1. What Git is and why snapshots win.md>)

1. **Distributed means every clone is a full backup** (no central server holds your history hostage — every clone carries every commit).
2. **Snapshots, not diffs** (Git stores what every file looked like at each commit; deltas are a storage optimization, not the model).
3. **Integrity by hash** (every object is content-addressed — SHA-1 historically, SHA-256 in modern repos — so corruption is detectable, not silent).

### [1.2. The commit DAG: history as a graph](<./sections/1. Thinking in snapshots/1.2. The commit DAG history as a graph.md>)

1. **Commits point backwards** (each commit names its parent or parents — history is a directed acyclic graph you walk from the tips).
2. **Branches are movable labels** (a branch is a sticky note on one commit, not a container of changes).
3. **Merges are commits with two parents** (the graph shape — not timestamp order — is what `log --graph` shows you).

---

## 2. The three areas

### [2.1. Working tree, index, HEAD, and the file lifecycle](<./sections/2. The three areas/2.1. Working tree index HEAD and the file lifecycle.md>)

1. **Three places a change can live** (working tree edits, staged index entries, committed HEAD snapshots — know which one you are looking at).
2. **Staging is intentional committing** (the index lets a commit contain exactly what you choose, not everything you touched).
3. **HEAD is "where I am"** (the pointer that says which commit — and which branch tip — your next commit builds on).

### [2.2. Status, diff, and seeing what changed](<./sections/2. The three areas/2.2. Status diff and seeing what changed.md>)

1. **Status answers one question** (what would the next commit contain — staged vs unstaged vs untracked, at a glance).
2. **Two diffs for two boundaries** (unstaged `git diff` vs staged `git diff --staged` — each shows one edge of the three areas).
3. **Read diffs hunks-first** (headers, then `+`/`-` lines — the skill every code review assumes).

---

## 3. Your first repository

### [3.1. Init, clone, config, and your first commit](<./sections/3. Your first repository/3.1. Init clone config and your first commit.md>)

1. **Init vs clone** (start empty locally vs copy a remote — the two births of a working repo).
2. **Identity config is a correctness control** (name and email are stamped into every commit — set them before the first one).
3. **Add, commit, log** (the smallest complete loop — stage intentionally, snapshot with a message, verify with the log).

---

## 4. Important points to remember (fundamentals)

### [4.1. Fundamentals checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>)

1. **Snapshot reflex** (ask "which commit shows this state?" before "what changed?").
2. **Three-area discipline** (stage deliberately, commit atomically, check status before and after).
3. **Graph literacy** (read `log --graph` shape — branches as labels, merges as two-parent commits).

---

## 5. Interview questions and answers (fundamentals)

### [5.1. Common interview QA: fundamentals](<./sections/5. Interview questions and answers/5.1. Common interview QA fundamentals.md>)

1. **Git vs centralized VCS** (the distributed answer — full history locally, cheap branching, offline work).
2. **Snapshots vs deltas** (what Git stores vs how it packs — the question that separates users from understanders).
3. **The three areas in one breath** (working tree, index, HEAD — plus what `status` and the two `diff`s show), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Everyday commands and inspection depth** — Domain 02 owns `add`/`commit`/`log` fluency, not here.
2. **Branching, merging, conflicts, remotes, GitHub, history rewrite, workflows** — Domains 03–06 of this track, not here.
3. **Word-level vocabulary** (what "repo" or "PR" *means* in a meeting) — IT Vocabulary track Domain 03, linked rather than repeated.
