# Branching, Merging, and Conflicts

Branches as daily tools, not theory: creating and switching in seconds, short-lived feature branches, fast-forward vs true merges, reading conflict markers calmly, and `rerere` confidence. The label model underneath lives in [Domain 01 §1.2](<../01 Git Fundamentals and Mental Model/sections/1. Thinking in snapshots/1.2. The commit DAG history as a graph.md>); this domain turns it into hands-on fluency.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) (branches as labels, merges as two-parent commits) and [Domain 02: Core Workflow](<../02 Core Workflow Add Commit and Inspect/README.md>) (atomic commits, staged-diff review). This domain assumes both and spends its pages on branching *operations*.

## 1. Branches in daily use

### [1.1. Creating, switching, and deleting branches](<./sections/1. Branches in daily use/1.1. Creating switching and deleting branches.md>)

1. **Create and switch in one move** (`switch -c` creates and moves — the modern spelling; `checkout -b` is the legacy twin).
2. **Switching moves HEAD, never work** (clean tree switches freely; dirty tree blocks or carries — know which before you hop).
3. **Delete merged with `-d`, unmerged with intent** (`-d` refuses to orphan work; `-D` overrides — the safety catch and its deliberate bypass).

### [1.2. Short-lived branches and the feature-branch habit](<./sections/1. Branches in daily use/1.2. Short-lived branches and the feature-branch habit.md>)

1. **One branch per idea** (feature, fix, experiment — small branches review fast, merge clean, revert safely).
2. **Name for triage** (`feat/cart-guest-checkout`, `fix/login-loop` — type, area, ticket; future-you greps these).
3. **Delete on merge, not someday** (merged branches are reachable from the target — the label is clutter, the commits are safe).

---

## 2. Joining lines

### [2.1. Fast-forward vs true merges](<./sections/2. Joining lines/2.1. Fast-forward vs true merges.md>)

1. **Fast-forward slides the label** (no divergence — `main` simply advances; history stays linear).
2. **True merge records the join** (diverged lines get a two-parent commit — the graph remembers the collaboration).
3. **Choose deliberately, message honestly** (`--no-ff` preserves feature shape; `--ff-only` refuses surprise merges; merge messages name the joined line).

### [2.2. Reading conflict markers and resolving without fear](<./sections/2. Joining lines/2.2. Reading conflict markers and resolving without fear.md>)

1. **Markers are a question, not damage** (`<<<<<<<` / `=======` / `>>>>>>>` delimit the two sides — read top vs bottom, then decide).
2. **The resolution loop** (edit → test → `add` → commit — conflicts resolve one hunk at a time, never all at once).
3. **Abort is always available** (`merge --abort` restores the pre-merge state — no resolution is riskier than a pause).

---

## 3. Reuse and safety

### [3.1. Rerere and merge confidence](<./sections/3. Reuse and safety/3.1. Rerere and merge confidence.md>)

1. **Record, reuse, relax** (`rerere` remembers how you resolved a conflict and replays it — long-lived branches stop re-hurting).
2. **Train it before you need it** (enable globally now; it learns silently and pays off on the third identical conflict).
3. **Shared resolutions need sharing** (`rerere` is local — teams spread resolutions via rerere-trainable branches or documented patterns, not magic).

---

## 4. Important points to remember (branching)

### [4.1. Branching checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Branching checklist habits mentors insist on.md>)

1. **Branch small, branch often** (short-lived, well-named, one idea — the unit of safe collaboration).
2. **Read the graph before joining** (shape first: fast-forward, true merge, or conflict waiting — then choose the command).
3. **Resolve calmly, abort freely** (markers are questions; the loop is mechanical; pausing is professional).

---

## 5. Interview questions and answers (branching)

### [5.1. Common interview QA: branching and merging](<./sections/5. Interview questions and answers/5.1. Common interview QA branching and merging.md>)

1. **What happens on `git merge`?** (the fork-check answer — fast-forward slide vs two-parent join, plus the conflict third case).
2. **Fast-forward vs merge commit — which and when?** (the judgment question — linear history vs preserved shape, team policy over dogma).
3. **Resolve this conflicted hunk** (the practical exercise — read markers, decide, loop), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Label theory and remotes** (branch-as-pointer model → Domain 01; tracking branches, fetch/pull/push, PRs → Domain 04).
2. **Rebase, cherry-pick, and history surgery** (replaying vs merging, rewriting shared lines → Domain 05, not here).
3. **Branching *strategy*** (trunk-based vs GitFlow, release lines) — Domain 06 owns the policy; this domain owns the mechanics.
