---
name: tutorial-builder
description: Use ONLY when user wants to build, extend, or deep-dive a tutorial track/domain/section/leaf following PROMPT.md exactly with incremental LOG.md and git commit per unit.
---

# Tutorial Builder — PROMPT.md Loop Harness

This skill IS the loop you asked for: `a1 -> b1 -> check c1 -> git commit -> a2 -> ...`
It enforces `PROMPT.md:1-176` in every step. Never skip it.

## Trigger keywords

- `Read PROMPT.md and follow it exactly. Task: ...`
- `lets add a new tutorial for ...`
- `lets deep dive into ... track`
- `extend ... domain ...`
- `/tutorial`

If the user says any of these, this skill MUST activate and follow the workflow below.

---

## Phase 0 — Load context FIRST (PROMPT.md:132 step 1)

Before writing ANY file, read completely:

1. `PROMPT.md` (full, binding §1-§8)
2. Root `README.md` (Categories table + track list)
3. `README/<Track>/README.md` (track index Template A) — if track exists
4. `README/<Track>/LOG.md` (full, every session block) — if exists
5. `README/<Track>/NN Domain Name/README.md` (domain index Template B) — if extending a domain

**Do NOT proceed until all are read.** If track does not exist, note it as Mode 1.

Also check for a dangling `Status: IN PROGRESS` entry at the end of LOG.md:
- If found, it is the recovery point (`PROMPT.md:165`). Verify each claimed `Done:` bullet against disk, then either resume inside that block OR close it as `PARTIAL` and open a fresh block. Never silently redo or skip.

---

## Phase 1 — Open the log entry FIRST (PROMPT.md:132 step 2)

This write MUST be the first write to disk in the session.

Derive the plan: list every file to create/edit (domains, sections, leaves, indexes).

**Plan scope — critical:**
- If user says `rest of sections and domains`, `till finishing completely`, `all remaining`, `complete the track`, `until the end`, or similar — Plan = **ALL remaining unimplemented domains/sections/leaves** for that track, in curriculum order (`NN` prefix). Compare `README/<Track>/README.md` (implemented) vs full curriculum in `README/<Track>/LOG.md` or root `README.md` to find gaps. Do NOT limit to one domain.
- Otherwise Plan = the minimal set implied by the request (e.g. one domain, one section).
- When Plan is full-track, you MUST loop continuously through every domain/leaf in order without stopping after one domain and without asking the user for the next command. Only stop when the last domain's last leaf is committed and LOG is closed to `DONE`. Use `PARTIAL` + precise `Next steps` only if you hit context/token limits — then the next `/tutorial-continue` will resume from there.

Then create or append to `README/<Track>/LOG.md`:

```markdown
## [YYYY-MM-DD HH:MM] Session N — <one-line goal>
- Status: IN PROGRESS
- Context read: <exact files read>
- Plan: <numbered list of units — each leaf/section/index update is one unit>
- Done:
- Decisions:
- Files touched:
- Links fixed / added:
- Verification:
- Next steps:
```

Append this block. This is your crash-recovery checkpoint.

---

## Phase 2 — Research (PROMPT.md:132 step 3)

For every non-obvious fact:

- Verify against official docs (never hallucinate versions). Label version-specific claims `as of <YYYY> era`.
- Check https://roadmap.sh for curriculum gaps.
- Record sources directly in the open LOG entry under `Research notes:` or inline in `Decisions:`.

Before writing any leaf, grep the whole repo for prior coverage of the concept (`PROMPT.md:123`). If found, link to it instead of duplicating (`PROMPT.md:5` DRY).

---

## Phase 3 — Incremental loop (PROMPT.md:132 step 4) — THE CORE LOOP

**One unit at a time. No batching.** Each unit = one leaf file OR one index update OR one link-fix set.

For each unit in Plan order (on-disk order `NN` prefix matters):

### Unit step a1 — Implement the content

Follow the exact contract for the unit type:

**New track (PROMPT.md:105 Mode 1):**
- Create `README/<Track>/README.md` (Template A `PROMPT.md:42`) — ordered module table.
- Create `README/<Track>/LOG.md` if not exists.
- Register track in root `README.md` Categories table immediately.
- Build curriculum outline (ordered `NN Domain` list) — record full plan in LOG.

**New domain (PROMPT.md:105 Mode 2):**
- Create `README/<Track>/NN Domain Name/README.md` (Template B `PROMPT.md:58`) with 3–5 bold-label bullets per leaf promise.
- Create `sections/M. Section name/` folders.
- Leaves use `M.k. Leaf topic name.md` — no `: , ? & ( )` in filename (`PROMPT.md:175`).

**Leaf (`M.k. ...md`) anatomy (`PROMPT.md:89`):**
Must deliver every promise from domain index with `### k) **Label**` parts:
Definition → What problem it solves/history → Modern guidance → Runnable example (good + bad labeled) → Common confusion → Performance note → Mentor note → Cross-links.
Depth ramps junior → mentor within the leaf. No filler. Code fences tagged with real language. Tone direct, opinionated-with-justification.

**Anti-boilerplate (`PROMPT.md:123`):**
- Single source of truth — full treatment once, elsewhere one-line + link.
- Every domain ends with `## N. Overlaps to avoid` linking siblings.
- Late sections (Important points / Common pitfalls → production bugs / Interview Q&A / Overlaps to avoid) MUST be real `## N. Section` with leaf files `M.k. ...md` — never README-only bullets (`PROMPT.md:86`).

### Unit step b1 — Update ancestor indexes IN THE SAME UNIT

- Domain README updated to list the new leaf with `[text](<path>)` angle-bracket links (`PROMPT.md:87`).
- Track README updated if domain list changed.
- Root README updated if track changed.
- Fix all inbound links if renaming/renumbering.

### Unit step c1 — Verify the unit BEFORE logging

- DoD checklist (`PROMPT.md:112`): accurate, junior→expert depth, best-practice with why, examples runnable, zero duplication (grep), names/tone/format match neighbors, indexes updated, LOG will be appended.
- Check every new relative link resolves (paths contain spaces!).
- Run every code example mentally or via `bash` with node if applicable.

### Unit step d1 — LOG then COMMIT (order matters!)

1. **Update the open LOG entry in place** (append bullet):
   ```markdown
   - Done:
     - [unit N] Created `README/<Track>/NN Domain/sections/M. Section/M.k. Leaf.md` + updated domain README
   - Files touched: (append to list)
   - Links fixed / added: (if any)
   - Verification: (what was checked)
   ```
   Save LOG.md to disk BEFORE committing.

2. **Git commit immediately** (one unit = one commit):
   ```bash
   git status   # check only this unit's files are staged
   git add <leaf path> <domain README> <track README> <LOG.md>   # only this unit
   git commit -m "feat(<track>): add <NN Domain / M.k leaf> - <short why>"
   # e.g. feat(typescript): add 01 Fundamentals / 1.1 What is TypeScript - establish engine vs runtime model
   ```

**Then repeat for next unit `a2 -> b2 -> c2 -> commit` until Plan is exhausted.** Never log or commit multiple leaves together. When Plan is full-track, this loop spans multiple domains/sections automatically — do not break after one domain.

---

## Phase 4 — Final verification (PROMPT.md:132 step 5)

After all units in Plan are done:

- Walk full DoD (`PROMPT.md:112`) across all new leaves.
- Run link checker over all new files (e.g. count broken `[text](<...>)`).
- Confirm no content duplicates existing leaves (grep scan).
- Execute all runnable examples where feasible.
- Record results in LOG entry `Verification:` field.

---

## Phase 5 — Close the session (PROMPT.md:132 step 6)

Flip the SAME entry's status:

```markdown
- Status: DONE | PARTIAL | BLOCKED
- Next steps: <precise handoff — what remains, in what order, so next session resumes without redo>
```

- `DONE` = plan fully completed
- `PARTIAL` = plan partially done (list what remains)
- `BLOCKED` = cannot continue (state why + what unblocks)

**Never leave `IN PROGRESS` on a normal exit** (`PROMPT.md:167`).

Then do a final `git add LOG.md && git commit -m "docs(<track>): close Session N — <goal>"` if LOG close was not already committed.

---

## Recovery rule (PROMPT.md:165)

If you find an `IN PROGRESS` entry from a previous crash:

1. Re-read context (Phase 0).
2. For each `Done:` bullet, check disk: does the file exist and match the claim?
3. If any bullet is false or file missing, note discrepancy — trust disk over log.
4. Either resume appending `Done:` bullets inside same block, OR close it as `PARTIAL` with honest remaining-work notes and open a fresh block.

---

## Style contract (PROMPT.md:170)

- Headings mirror numbering (`## 3.` / `### 3.2.` / `### 2)` inside leaves); no orphan headings.
- Bold lead labels + parentheticals for bullets; tables for enumerations; `---` between major sections.
- Code fences tagged with real language (`typescript`, `javascript`).
- Filenames: no `: , ? & ( )`; spaces allowed; keep `M.k. ` prefix.
- Tone: direct, technical, opinionated-with-justification, no fluff.
