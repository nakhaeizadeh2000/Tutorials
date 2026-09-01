# MASTER PROMPT — Tutorials repository (use this in every AI session)

**How to use:** When you start any new chat/agent session to create or extend a tutorial here, open with:

> Read `PROMPT.md` and follow it exactly. Task: **\<your task\>** (e.g., “add a Python track”, “extend the C# LINQ domain with section 11 about …”).

Everything below is binding. If this file conflicts with an ad-hoc request, follow the request but record the deviation in the track `LOG.md`.

---

## 1. Mission

This repository hosts deep, production-grade tutorials for languages, technologies, and frameworks — zero-to-hero and beyond (senior, expert, mentor depth). Every tutorial must:

- Follow the **latest stable version** of the subject and current industry best practices (verify against official documentation and reputable sources when unsure; label version-specific claims, e.g. “as of C# 15 era”).
- Serve the full audience ladder: **junior** (clear fundamentals, plain definitions, runnable examples) → **mid** (idiomatic usage, patterns) → **senior** (design trade-offs, performance, testing) → **expert** (runtime/internals, edge cases, AOT/JIT/GC-level realities) → **mentor** (how to teach it, review checklists, API-design guidance, interview Q&A).
- Teach **good practices AND bad practices**: every anti-pattern shown must explain *why* it hurts (correctness, performance, maintainability) and what to do instead.
- Embed **SOLID, clean-code, and DRY principles** — both *in the content taught* and *in how the documentation itself is organized*.
- Be **boilerplate-free**: never rewrite or duplicate content that exists elsewhere in the repo. Link to it instead (see §5).

## 2. Repository layout contract (match the existing C# track exactly)

```text
README.md                                  ← root index: intro + Categories table linking each track
PROMPT.md                                  ← this file (never edit while executing a task; propose changes in LOG instead)
README/
  <Track>/                                 ← e.g. CSharp, Python, TypeScript (no spaces in track folder name)
    README.md                              ← track index: ordered module table (see template A)
    LOG.md                                 ← append-only work log (see §7) — REQUIRED for every track
    DOCUMENTATION_*.md                     ← optional generated reports
    NN Domain Name/                        ← two-digit prefix `NN `, spaces allowed, on-disk order = curriculum order
      README.md                            ← domain index: numbered sections; each section = link + summary bullets (template B)
      sections/
        M. Section name/                   ← `M. ` prefix, mirrors domain-index numbering
          M.k. Leaf topic name.md          ← leaf content file; filename = topic minus special chars (: , ?, &, parentheses removed)
        (N+1). Next section/
          ...
```

Version-feature modules (when applicable) follow the C# pattern: dedicated index folders `Update <Subject> <Version>/` listed at the end of the track table, each pointing into topical domains instead of duplicating them.

### Template A — track index (`README/<Track>/README.md`)

```markdown
# <Track> track (recommended order, <latest-version> era)

One-line orientation. Optional version map line linking Update modules.

| # | Module |
|---|--------|
| 1 | [Module name](<01 Module Folder/README.md>) |
...

Domain folders in this directory use the same `NN …` prefix so the on-disk order matches this curriculum.

[← Back to Tutorials](<../../README.md>)
```

### Template B — domain index (`…/NN Domain/README.md`)

```markdown
## 0. <optional: version maps / prerequisites with links>

## 1. <Section title>

### [1.1. <Leaf title>](<./sections/1. Section name/1.1. Leaf topic name.md>)

1. **Bold label** (short parenthetical elaboration)
2. **Bold label** (...)
3. **Bold label** (...)

---

## 2. <Section title>
...

## N. Overlaps to avoid (where this domain stops)

Links to sibling domains that already cover adjacent material.
```

Rules for indexes:

- The domain index is the single table of contents for the domain; leaf files mirror it 1:1 (same titles, same numbers).
- Each leaf entry gets 3–5 summary bullets with bold lead labels — these are the *promise* of the leaf, and the leaf must deliver exactly that, expanded.
- Standard late sections per domain (in this spirit): **Important points / mentor checklist**, **Common pitfalls → production bugs**, **Interview Q&A**, **Overlaps to avoid**.
- All relative links use the `[text](<path>)` angle-bracket form because folder names contain spaces.

### Leaf document anatomy (`M.k. ….md`)

For each numbered promise in the domain index, the leaf contains a matching `### k) **Label**` part with, as relevant:

- **Definition** — plain-language, junior-readable.
- **What problem it solves / history** — why the feature exists; what life was like before it.
- **Modern guidance** — current best practice, version-aware.
- **Runnable example** — complete, compilable, commented; show good usage; where valuable show a contrasting bad example labeled as such.
- **Common confusion** — misconceptions even experienced devs carry.
- **Performance note** — allocations, boxing, dispatch, memory, complexity; measure-don’t-guess framing.
- **Mentor note** — teaching advice, review-checklist items, API-design wisdom.
- **Cross-links** — to related leaves in other domains instead of restating them.

Depth ramps within the leaf: start simple, end with expert/mentor nuance. No filler sentences.

## 3. Operating modes

- **Mode 1 — New track:** create `README/<Track>/`, build curriculum outline, then domain-by-domain per §2. Register the track in the root `README.md` Categories table immediately after creating its index.
- **Mode 2 — Extend existing track:** add new domains (next `NN`), new sections inside a domain, or new leaves. Renumber only when unavoidable; prefer appending. Update every affected ancestor index.
- **Mode 3 — Refresh/update:** bring existing content to a newer language/framework version. Prefer updating leaves in place; move superseded material into the appropriate `Update <Subject> <Version>` index module rather than duplicating.

In every mode: **read before writing** (§6), and **log everything** (§7).

## 4. Content quality bar (Definition of Done per leaf)

- [ ] Accurate for the latest stable version; version-sensitive claims labeled.
- [ ] Junior can follow the first half; expert still learns from the last half.
- [ ] Every claim about “best practice” says why (trade-off, not dogma); bad practices shown with consequences.
- [ ] Examples are complete and runnable as-shown (correct usings/imports, no pseudocode unless explicitly labeled).
- [ ] Zero duplicated explanation: any concept defined elsewhere is linked, not rewritten (grep/search the repo first).
- [ ] Names, tone, and formatting match neighboring documents (bold lead labels, parentheticals, `—` em-dash style, back-links).
- [ ] Domain index updated; track index updated if a domain/module changed; root README updated if a track changed.
- [ ] LOG.md appended (§7).

## 5. Anti-boilerplate law (DRY)

1. **Single source of truth:** a concept gets its full treatment exactly once, in the most fitting domain. Everywhere else: one-line mention + link.
2. **Before writing any section,** search the whole repo (`grep`/file search) for prior coverage of the concept; if found, link and add only what is genuinely new.
3. Every domain ends with **“Overlaps to avoid”** stating its boundaries and where neighbors cover the rest.
4. Indexes may summarize, but summaries are promises, not copies: never paste leaf paragraphs into indexes.
5. Generated reports (`DOCUMENTATION_*`) record *what changed and why*, never re-teach content.

## 6. Session workflow (execute in this order)

**Logging is continuous, not a closing formality.** The log exists so a chat/agent killed mid-task (network drop, crash, timeout, context loss) can be resumed in a fresh session exactly where it stopped — without redoing or duplicating anything.

1. **Load context:** read root `README.md`, the track `README.md`, the target domain `README.md`, and the entire `LOG.md` of that track. Never skip this — it prevents duplicates and destroyed work.
2. **Open the log entry FIRST:** derive the minimal set of files to create/edit (the plan), then write a new session entry into `README/<Track>/LOG.md` — creating that file if it does not exist — with `- Status: IN PROGRESS` and the full plan. This log write must land on disk **before any other file is created or edited.**
3. **Research:** verify facts against current official docs / authoritative sources; note non-obvious sources directly in the open log entry. Use https://roadmap.sh/ for catching some roadmaps alongside other resources your own use.
4. **Implement incrementally, logging after every unit:** one leaf (or small coherent batch) at a time. After EACH completed unit — a created/edited file, an index update, a fixed link set — immediately update the open log entry (`Done:` bullet with file path, `Files touched:`, `Links fixed`) BEFORE starting the next unit. Never batch logging for the end of the session. Update relevant ancestor indexes as part of the same unit. The repo (log included) must stay consistent at every stopping point.
5. **Verify:** walk the DoD checklist (§4); check every new relative link resolves (paths with spaces!); confirm no content duplicates an existing leaf; record verification results in the log entry.
6. **Close the session:** flip the SAME entry's status to `DONE`/`PARTIAL`/`BLOCKED` (never leave `IN PROGRESS` on a normal exit) and finish explicit **Next steps** so a fresh session can continue seamlessly.

Never reorder, renumber, rename, or delete existing material unless the task requires it — and when it does, record old→new mappings in `LOG.md` and fix all inbound links.

## 7. Work log contract (`README/<Track>/LOG.md`)

One block per session. Blocks are append-only **across sessions**: past (closed) blocks are immutable history — never edit or delete them. The single exception is the session's OWN open block: while the session runs, that block is updated in place after every completed unit (§6.4). Format:

```markdown
# <Track> — work log

## [YYYY-MM-DD HH:MM] Session <n> — <one-line goal>
- Status: IN PROGRESS | DONE | PARTIAL | BLOCKED   ← set IN PROGRESS before implementing; flip before ending
- Context read: <files/indexes/logs reviewed>
- Plan: <what this session intends to do — written before implementation starts>
- Done: <one bullet per completed unit with file paths — appended IMMEDIATELY after each unit, not at session end>
- Decisions: <non-obvious choices and why (scope cuts, renames, overlaps resolved)>
- Files touched: <explicit list, created vs modified — kept current as files are touched>
- Links fixed / added: <notable cross-references>
- Verification: <what was executed/checked and results — examples run, links checked, etc.>
- Next steps: <precise handoff for the next session>
```

Rules:

1. The session entry IS the crash-recovery record: everything listed under `Done:` was written to disk before the last update, so an interrupted session loses at most one unit of work.
2. If a session finds an `IN PROGRESS` entry from a previous (broken) run, that entry is the recovery point. Re-read context, verify each claimed `Done:` item against disk, then EITHER resume inside that block (continue appending `Done:` bullets) OR close it as `PARTIAL` with honest remaining-work notes and open a fresh block. Never silently redo or skip completed units; never trust unchecked claims without verifying.
3. Ending a session with status `IN PROGRESS` is allowed ONLY when the process itself died mid-run — it is never a normal exit state.
4. The next session resumes from the last entry's **Next steps** without re-doing or duplicating anything.

## 8. Style micro-rules

- Headings mirror numbering (`## 3.` / `### 3.2.` / `### 2)` inside leaves); no orphan headings.
- Bold lead labels + parentheticals for bullets; tables for enumerations; `---` between major sections.
- Code fences tagged with the real language (`csharp`, `python`, …); comments in examples teach, not decorate.
- Filenames: no colons, question marks, ampersands, commas, or parentheses; spaces allowed; keep the `M.k. ` numeric prefix.
- Tone: direct, technical, opinionated-with-justification. No marketing fluff, no filler intros/outros.
