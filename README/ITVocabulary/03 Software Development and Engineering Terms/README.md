# Software Development and Engineering Terms

How developers talk about changing code and getting it to users: version-control words, review collaboration, the road from commit to production, and the vocabulary of code health.

## 0. Prerequisites

[Domain 01 Core IT Concepts](<../01 Core IT Concepts and Professional Jargon/README.md>) — especially precise reporting ([1.1](<../01 Core IT Concepts and Professional Jargon/sections/1. Learning vocabulary like a professional/1.1. Why precise vocabulary matters.md>)) and meeting words ([3.2](<../01 Core IT Concepts and Professional Jargon/sections/3. Everyday professional jargon/3.2. Meeting jargon standup sync blockers and shipped.md>)); [Domain 02](<../02 Hardware Infrastructure and Platforms/README.md>) environments ([2.1](<../02 Hardware Infrastructure and Platforms/sections/2. Where code lives and runs/2.1. Localhost staging and production environments.md>)) — releases travel through them.

## 1. Change words

### [1.1. Repo, branch, commit, and merge](<./sections/1. Change words/1.1. Repo branch commit and merge.md>)

1. **Repo holds history, branch holds a line of work** (the project + its timeline vs your parallel draft of the future).
2. **Commit is a snapshot with a message** (atomic, reviewable, revertable — the currency of collaboration).
3. **Merge unites lines of work** (fast-forward vs merge commit vs rebase — names only, mechanics in the Git track).

### [1.2. Pull request, review, and conflicts](<./sections/1. Change words/1.2. Pull request review and conflicts.md>)

1. **Pull request proposes, review disposes** (the change + its conversation — approval is a responsibility, not a rubber stamp).
2. **Conflicts are overlapping edits, not errors** (two drafts touched the same lines — a human decision, resolved deliberately).
3. **Review words that move work** (LGTM, nit, blocking vs non-blocking — comment vocabulary with consequences).

---

## 2. Ship words

### [2.1. Build, test, release, and deploy](<./sections/2. Ship words/2.1. Build test release and deploy.md>)

1. **Build turns source into runnable** (compile, bundle, image — the artifact pipeline in one line each).
2. **Test gates the pipeline** (unit vs integration vs e2e — what each level promises and costs).
3. **Release decides, deploy executes** (release = users get it; deploy = bits land somewhere — flags split the two).

---

## 3. Health words

### [3.1. Refactor, tech debt, legacy, and cleanup](<./sections/3. Health words/3.1. Refactor tech debt legacy and cleanup.md>)

1. **Refactor changes shape, not behavior** (restructure under green tests — otherwise it is rewriting, say so).
2. **Tech debt is borrowed time with interest** (shortcut + its carrying cost — deliberate vs accidental debt).
3. **Legacy means inherited, not bad** (working code with missing context — respect it, characterize it, then change it).

---

## 4. Important points to remember (engineering terms)

### [4.1. Engineering terms checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Engineering terms checklist mental models mentors insist on.md>)

1. **Name the change unit** (commit, PR, release — in every status).
2. **Name the gate** (which test, whose approval — before merging).
3. **Name the debt** (what shortcut, what interest — when taking it).

---

## 5. Interview questions and answers (engineering terms)

### [5.1. Common interview QA: engineering terms](<./sections/5. Interview questions and answers/5.1. Common interview QA engineering terms.md>)

1. **Git vs GitHub** (tool vs platform — the opener that filters bluffing).
2. **Merge vs rebase** (vocabulary-level answer with honesty markers).
3. **CI/CD in one paragraph** (what the letters promise), plus rapid-fire drills (commit, PR, deploy vs release, tech debt).

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Git mechanics** (commands, branching strategies, rebasing how-to) — future Git track, not here.
2. **CI/CD pipelines and DevOps practice** — Domain 06, not here.
3. **Testing and agile process depth** — future Testing track and Domain 07; this domain owns only the words.
