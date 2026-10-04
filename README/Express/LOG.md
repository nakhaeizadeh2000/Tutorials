# Express — work log

## [2026-10-04 15:16] Session 2 — Domain 02 Routing and Middleware in Depth
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — change-checked via git log, PROMPT.md/root README.md untouched since 49a1003, unrelated); root README.md (Express #13, unchanged — Categories table read S1 on file); README/Express/LOG.md (full — Session 1 DONE, Next steps names Domain 02); README/Express/README.md (1/7 rows); README/Express/01 Express Foundations and Mental Model/README.md (Template B reference + neighbor tone). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none. Disk verified — S1 Done claims all present (domain 01 index + 6 section dirs + 8/8 leaves = 9 md); track README row 1; git tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 2 block (S1 immutable). No scope override in request → resume from S1 Next steps: Domain 02 only (03–07 future sessions).
- Plan (Domain 02 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (param/validation/router/wildcard sources, DRY grep) + record
  3. Unit 3 — create `02 Routing and Middleware in Depth/README.md` (Template B, sections 1–6) + 6 section folders + track README row 2
  4. Unit 4 — leaf 1.1. Route params and validation
  5. Unit 5 — leaf 1.2. Nested routers and composition
  6. Unit 6 — leaf 2.1. Advanced matching and wildcards
  7. Unit 7 — leaf 2.2. Custom middleware patterns
  8. Unit 8 — leaf 3.1. Async pipeline safety
  9. Unit 9 — leaf 4.1. Routing checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA routing
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: Express 5 routing depth — path-to-regexp v8 (`/*splat` named wildcards, `:param` modifiers, regex routes), `app.param()` preloaders, `mergeParams` nested routers, query parser `simple` default, async error auto-forwarding; validation via schemas (zod/express-validator concepts — runtime route validation, distinct from TS type-level). DRY grep (`zod|express-validator|mergeParams|path-to-regexp|splat|app.param(`): hits are TS type-boundary mentions (parse unknown → branded types) + NodeJS env-config validation — NO route-param validation, nested-router, or path-matching treatment exists; Domain 02 owns all three. Live-surface rule carries over (no registry — node --check + labeled docs behavior).
- Done:
  - [unit 1] Opened this Session 2 entry (first write on disk)
  - [unit 2] Research recorded (routing-depth sources, DRY grep with target check — no competing coverage)
  - [unit 3] Created `README/Express/02 Routing and Middleware in Depth/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 2 appended (resolves, verified on disk)
- Files touched: modified `README/Express/LOG.md`, created `README/Express/02 Routing and Middleware in Depth/README.md` + 6 `sections/` folders, modified `README/Express/README.md` (row 2)
- Links fixed / added:
- Verification:
- Next steps:

## [2026-10-04 14:33] Session 1 — Create track + Domain 01 Express Foundations (Domains 02–07 next)
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S7 ORM + S1–S7 Redis on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (Categories table — Express already listed at #13, link target did not exist); README/Redis/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names track complete). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (PARTIAL hits are other tracks' closed-session history, immutable per PROMPT.md:165). Disk verified — Redis TRACK COMPLETE on disk (7/7 domains, 7/7 rows, HEAD 2fe9a4b closeout, tree clean); `ls README/` shows no Express dir. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose Express at session start (Mode 1 new track, Domain 01 only, 02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Express 5 sources, DRY grep) + record
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 Express Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #13 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. What Express is and is not
  5. Unit 5 — leaf 1.2. Hello API with routing
  6. Unit 6 — leaf 2.1. Middleware pipeline
  7. Unit 7 — leaf 2.2. Request response lifecycle
  8. Unit 8 — leaf 3.1. Errors and 404s handled
  9. Unit 9 — leaf 4.1. Express checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA Express foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Routing and Middleware in Depth, 03 Errors Validation and Security, 04 Data Access and Persistence, 05 Testing Deployment and Operations, 06 Production Express Operations, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Research notes: Express 5.x era (5.0 stable Sep 2024, 5.1 Oct 2024 — promise support/async errors forwarded to error handlers, path-to-regexp v8 `/*splat` wildcards, query-parser default `simple`; 4.x behavior otherwise preserved). npm registry UNREACHABLE this session (`npm view` timed out, no global express) → no live install/run; live-surface rule S1: examples complete + runnable (correct requires, real Express 5 API), validated via `node --check` syntax per leaf + docs-knowledge behavior, labeled as such. DRY grep (`require('express')|app.use(|Express framework|Express 5`): ZERO framework hits — ORM hits are `expression` substrings, NodeJS covers raw http only. NodeJS 04 `3. HTTP without frameworks/3.1. Bare nodehttp servers and clients.md` verified on disk as the floor (linked, not repeated). Express track owns app/routing/middleware/errors fully.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (Express 5.x sources, DRY grep with target check — no competing coverage; live-surface rule: node --check + labeled docs behavior, no registry)
  - [unit 3] Created `README/Express/README.md` (Template A track index, lists Domain 01) + `README/Express/01 Express Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #13 now resolves, no root edit needed; track index 5/5 resolve, domain index 1/9 (8 leaf forwards resolve as units land)
  - [unit 4] Leaf `01 …/sections/1. First app/1.1. What Express is and is not.md` (3 promises) — 6/6 JS blocks `node --check` clean (no registry, per live-surface rule; behavior per docs, labeled); normalization pre-commit (2/8 resolve now — 6 same-domain forwards to unbuilt 1.2/2.1 resolve as units land)
  - [unit 5] Leaf `01 …/sections/1. First app/1.2. Hello API with routing.md` (3 promises) — 6/6 JS blocks `node --check` clean; 2 bracketed pseudo-links fixed to textual forwards + normalization pre-commit (1/2 resolve now — 1 forward to unbuilt 2.1 resolves as units land; 1.1's 4 forwards to 1.2 now resolve)
  - [unit 6] Leaf `01 …/sections/2. Core pipeline/2.1. Middleware pipeline.md` (3 promises) — 6/6 JS blocks `node --check` clean; normalization pre-commit (0/5 resolve now — 5 forwards to unbuilt 2.2/3.1 resolve as units land; 1.1's 2 + 1.2's 1 forwards to 2.1 now resolve)
  - [unit 7] Leaf `01 …/sections/2. Core pipeline/2.2. Request response lifecycle.md` (3 promises) — 6/6 JS blocks `node --check` clean; 2 wording glitches fixed + normalization pre-commit (3/4 resolve now — 1 forward to unbuilt 3.1 resolves as units land; 2.1's 3 forwards to 2.2 now resolve)
  - [unit 8] Leaf `01 …/sections/3. First safety/3.1. Errors and 404s handled.md` (3 promises) — 6/6 JS blocks `node --check` clean; normalization pre-commit (3/4 resolve now — 1 forward to unbuilt 4.1 resolves as units land; 2.1's 2 + 2.2's 1 forwards to 3.1 now resolve)
  - [unit 9] Leaf `01 …/sections/4. Mentor checklist/4.1. Express checklist mentors insist on.md` (3 promises — process leaf, examples illustrative); 6/6 JS blocks `node --check` clean; normalization pre-commit (8/9 resolve now — 1 forward to unbuilt 5.1 resolves as units land; 3.1's forward to 4.1 now resolves)
  - [unit 10] Leaf `01 …/sections/5. Interview QA/5.1. Common interview QA Express foundations.md` (3 promises — process leaf, GOOD/BAD as commented shapes in 3 fences); 3/3 blocks `node --check` clean; normalization pre-commit — 9/9 resolve first try (all targets built); 4.1's forward to 5.1 now resolves
  - [unit 11] Leaf `01 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — NodeJS floor + Domains 02–03 forwards (textual, unbuilt) + ORM data (target verified); no duplication of neighbors' links); 3/3 blocks `node --check` clean; checker caught authoring-depth slip pre-commit (`../../../ORM/` → `../../../../ORM/` — cross-track from section dirs is 4 levels, same rule as Redis standing orders); 5/5 resolve
- Files touched: modified `README/Express/LOG.md`, created `README/Express/README.md`, created `README/Express/01 Express Foundations and Mental Model/README.md` + 6 `sections/` folders, created leaf `1. First app/1.1. What Express is and is not.md`, created leaf `1. First app/1.2. Hello API with routing.md`, created leaf `2. Core pipeline/2.1. Middleware pipeline.md`, created leaf `2. Core pipeline/2.2. Request response lifecycle.md`, created leaf `3. First safety/3.1. Errors and 404s handled.md`, created leaf `4. Mentor checklist/4.1. Express checklist mentors insist on.md`, created leaf `5. Interview QA/5.1. Common interview QA Express foundations.md`, created leaf `6. Boundaries/6.1. Boundaries what is covered elsewhere.md`
- Links fixed / added:
- Verification: D01 60/60 relative links resolve (script-checked with unquote — 1 authoring-depth slip `../../../ORM/` → `../../../../ORM/` caught by checker pre-commit, same 4-level cross-track rule as Redis standing orders); 42/42 JS blocks `node --check` clean domain-wide (no registry — examples complete/runnable, behavior per Express 5 docs, labeled); non-ASCII = house set only (— … – ← § → ×); DRY spot-check clean (TS `res.json()` hits are fetch-parsing, unrelated contexts); one-unit-per-commit history held (9 commits: index + 8 leaves + closeout)
- Next steps: Session 2 — Domain 02 Routing and Middleware in Depth (params validation, nested routers, advanced matching) per plan above; then 03–07 in order. Track README row 2 appended when 02 lands. Standing rules for S2: literal spaces, `../../../` same-track / `../../../../` cross-track from section dirs, `../../sections/<M. …>/` same-domain siblings, anchored-regex normalization BEFORE every commit, verify link targets' content, scoped-paths-only commits, node --check per leaf (no registry until reachable), era label Express 5.x.
