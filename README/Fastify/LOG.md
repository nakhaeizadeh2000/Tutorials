# Fastify — work log

## [2026-10-06 09:34] Session 1 — Create track + Domain 01 Fastify Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S7 ORM + S1–S7 Redis + S1–S7 Express on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (Categories table — Fastify already listed at #14, link target did not exist); README/Express/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names track complete). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (PARTIAL hits are other tracks' closed-session history, immutable per PROMPT.md:165). Disk verified — Express TRACK COMPLETE on disk (7/7 domains, 7/7 rows, HEAD 2a5fb66 closeout, tree clean); `ls README/` shows no Fastify dir. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose Fastify at session start (Mode 1 new track, Domain 01 only, 02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Fastify 5 sources, DRY grep) + record
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 Fastify Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #14 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. What Fastify is and is not
  5. Unit 5 — leaf 1.2. Hello API with schemas
  6. Unit 6 — leaf 2.1. Hooks lifecycle
  7. Unit 7 — leaf 2.2. Request reply lifecycle
  8. Unit 8 — leaf 3.1. Errors and 404s handled
  9. Unit 9 — leaf 4.1. Fastify checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA Fastify foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Routing Schemas and Validation, 03 Hooks Plugins and Composition, 04 Data Access and Persistence, 05 Testing Deployment and Operations, 06 Production Fastify Operations, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Research notes: Fastify 5.x era (installed 5.12.5 — latest per registry this session; schemas first-class via ajv built-in, response serialization strips undeclared fields, hooks lifecycle onRequest→preParsing→preValidation→preHandler→preSerialization→onSend, encapsulation via avvio plugins, pino logger built-in, return-value auto-send, async natively, setNotFoundHandler/setErrorHandler, FST_ERR_VALIDATION). DRY grep (`require('fastify')|fastify({|Fastify framework`): ZERO code hits — NodeJS hits are word mentions, incl. explicit "framework tracks (planned — Express/Fastify/NestJS own tracks)" deferral; NodeJS 04 bare-http leaf is the floor (linked, not repeated). Fastify track owns app/routes/schemas/hooks/plugins/errors fully. Live-surface rule S1 (UPGRADED vs Express): registry REACHABLE — fastify@5 installed to /tmp/opencode/fastify-s1 (5.12.5 verified); examples EXECUTE live via fastify.inject() (no ports) + node --check; outputs recorded per leaf. (Sandbox note: only /tmp/opencode root is writable — scratch lives directly there, never in repo.)
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (Fastify 5.12.5 installed + inject smoke 200 verified; DRY grep with target check — no competing coverage)
  - [unit 3] Created `README/Fastify/README.md` (Template A track index, lists Domain 01) + `README/Fastify/01 Fastify Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #14 now resolves, no root edit needed; track index 5/5 resolve, domain index 1/9 (8 leaf forwards resolve as units land)
  - [unit 4] Leaf `01 …/sections/1. First app/1.1. What Fastify is and is not.md` (3 promises) — 3 GOOD examples RUN LIVE via fastify.inject (201-stripped/200/200 outputs verified); 6/6 JS blocks `node --check` clean; checker caught depth slip pre-commit (my normalizer mapped cross-track Express to 3 levels — fixed to 4-level `../../../../Express/`, standing rule corrected: same-track `../../../01 …`, cross-track ALWAYS `../../../../Track/`); normalization pre-commit (4/7 resolve now — 3 same-domain forwards to unbuilt 1.2/2.1 resolve as units land)
  - [unit 5] Leaf `01 …/sections/1. First app/1.2. Hello API with schemas.md` (3 promises) — contract/return/inject examples RUN LIVE via fastify.inject (201-held/400-FST_ERR_VALIDATION/200/200 outputs verified); 6/6 JS blocks `node --check` clean; normalization pre-commit (correct 4-level cross-track applied at write time) — 5/5 resolve first try (Express track complete, all targets built); 1.1's 2 forwards to 1.2 now resolve
  - [unit 6] Leaf `01 …/sections/2. Core pipeline/2.1. Hooks lifecycle.md` (3 promises) — hook/plugin/builtin examples RUN LIVE via fastify.inject (200+x-ms/200-tenant/200-echo outputs verified); 6/6 JS blocks `node --check` clean; 4-level cross-track rule applied at write time (lesson learned); normalization pre-commit (1/4 resolve now — 3 forwards to unbuilt 2.2/3.1 resolve as units land; 1.1's 2 forwards to 2.1 now resolve)
  - [unit 7] Leaf `01 …/sections/2. Core pipeline/2.2. Request reply lifecycle.md` (3 promises) — decorate/send/async examples RUN LIVE via fastify.inject (200-page/200+400/200+500 outputs verified); 6/6 JS blocks `node --check` clean; normalization pre-commit (5/6 resolve now — 1 forward to unbuilt 3.1 resolves as units land; 2.1's 3 forwards to 2.2 now resolve)
- Files touched: modified `README/Fastify/LOG.md`, created `README/Fastify/README.md`, created `README/Fastify/01 Fastify Foundations and Mental Model/README.md` + 6 `sections/` folders, created leaf `1. First app/1.1. What Fastify is and is not.md`, created leaf `1. First app/1.2. Hello API with schemas.md`, created leaf `2. Core pipeline/2.1. Hooks lifecycle.md`, created leaf `2. Core pipeline/2.2. Request reply lifecycle.md`
- Links fixed / added:
- Verification:
- Next steps:
