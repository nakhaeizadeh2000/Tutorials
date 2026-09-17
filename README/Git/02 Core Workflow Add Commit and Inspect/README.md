# Core Workflow: Add, Commit, and Inspect

Everyday fluency on top of the Domain 01 model: composing atomic commits at speed, writing messages reviewers trust, reading history like a database, ignoring what should never be committed, and compressing the loop with aliases. Theory stays in [Domain 01](<../01 Git Fundamentals and Mental Model/README.md>); this domain is hands on keyboard.

## 0. Prerequisites

[Domain 01: Git Fundamentals and Mental Model](<../01 Git Fundamentals and Mental Model/README.md>) — the snapshot model, the three areas, and the first-commit loop. This domain assumes you can already explain *why* the index exists and spends its pages on *how fast and how well* you use it.

## 1. Composing commits

### [1.1. Partial staging and the atomic commit](<./sections/1. Composing commits/1.1. Partial staging and the atomic commit.md>)

1. **Stage hunks, not files** (`add -p` walks each hunk — stage the fix, leave the experiment, commit one idea at a time).
2. **Unstage without fear** (`restore --staged` moves work back to the working tree — nothing is lost, the composition just changes).
3. **One commit, one idea** (atomicity is what makes `revert`, `bisect`, and review possible — staging is the tool that delivers it).

### [1.2. Commit messages reviewers thank you for](<./sections/1. Composing commits/1.2. Commit messages reviewers thank you for.md>)

1. **Imperative subject, scoped prefix** (`fix(cart): reject negative quantities` — what the commit *does*, where it does it).
2. **Body explains why, not what** (the diff shows what changed; the message records the reason, the trade, the link).
3. **Conventional Commits as team contract** (machine-readable prefixes power changelogs and releases — agree once, benefit forever).

---

## 2. Reading history

### [2.1. Log filtering, formatting, and the questions log answers](<./sections/2. Reading history/2.1. Log filtering formatting and the questions log answers.md>)

1. **Ask questions, not dumps** (`log --oneline -10`, `-- <path>`, `--since`, `--grep` — each flag answers one question).
2. **Format for the consumer** (`--pretty=format:` for scripts and release notes, `--graph --all` for shape, `--stat` for scope).
3. **Limit the walk** (history queries cost commits visited — bound every exploration before running it).

### [2.2. Show, blame, and archaeology without blame games](<./sections/2. Reading history/2.2. Show blame and archaeology without blame games.md>)

1. **Show the snapshot** (`git show` renders any commit — message, diff, metadata — the unit of archaeology).
2. **Blame lines, not people** (`git blame` annotates each line with its commit — read it as "which change", never "which person").
3. **Follow code across renames** (`log --follow`, `-S`/`-G` pickaxe — find when a string appeared or vanished, through moves).

---

## 3. Ignoring and aliasing

### [3.1. Gitignore patterns that keep status fast and secrets out](<./sections/3. Ignoring and aliasing/3.1. Gitignore patterns that keep status fast and secrets out.md>)

1. **Ignore build outputs and environments** (`node_modules/`, `dist/`, `.env`, editor swap — never committed, never scanned).
2. **Patterns, negation, and scope** (`*.log`, `!keep.log`, per-repo `.gitignore` vs global excludes — order and level matter).
3. **Secrets need prevention, not cleanup** (once pushed, a secret is compromised — ignore first, rotate on leak, filter-repo only as surgery).

### [3.2. Aliases and config that compress the daily loop](<./sections/3. Ignoring and aliasing/3.2. Aliases and config that compress the daily loop.md>)

1. **Alias the graph and the sandwich** (`st`, `lg`, `unstage` — the commands you type fifty times a day deserve two letters).
2. **Sane defaults, set once** (`init.defaultBranch`, `pull --ff-only` discipline, `rerere` preview — config that prevents whole bug classes).
3. **Dotfiles belong in version control** (your aliases and configs are code — store, share, and review them like it).

---

## 4. Important points to remember (workflow)

### [4.1. Workflow checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Workflow checklist habits mentors insist on.md>)

1. **Compose before you freeze** (hunk-staged, one-idea commits — review the staged diff every time).
2. **Message like the reader is future-you** (imperative subject, why in the body, link the ticket).
3. **Read before you operate** (graph and status first — orientation is cheaper than rescue).

---

## 5. Interview questions and answers (workflow)

### [5.1. Common interview QA: workflow and history](<./sections/5. Interview questions and answers/5.1. Common interview QA workflow and history.md>)

1. **Staged, edited again, committed — what got committed?** (the workflow trap question — staged content only, plus the `add -p` follow-up).
2. **Find when a bug was introduced** (the archaeology answer — `blame`, pickaxe `-S`, `bisect` preview).
3. **Write a commit message for this diff** (the practical exercise — subject, scope, why), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Mental models** (snapshots, DAG, three areas) — Domain 01 owns the theory, linked rather than repeated.
2. **Branching, remotes, history rewrite, workflows, mastery** — Domains 03–07 of this track, not here.
3. **Release automation from message conventions** (semantic-release, changelogs) — Domain 06 owns the pipeline; this domain owns the message habit.
