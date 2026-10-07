# NestJS — work log

## [2026-10-07 06:30] Session 1 — Create track + Domain 01 NestJS Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — Fastify S1–S7 on file, full loop discipline carries over); root README.md (Categories table — NestJS #15 listed, link target missing until this session); README/Fastify/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (other tracks' PARTIAL hits are closed-session history, immutable per PROMPT.md:165). Disk verified — `ls README/` shows no NestJS dir; git tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose NestJS at session start (Mode 1 new track, Domain 01 only, 02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (NestJS version/architecture sources, DRY grep) + record
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 NestJS Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #15 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. What NestJS is and is not
  5. Unit 5 — leaf 1.2. Hello API with controllers
  6. Unit 6 — leaf 2.1. Modules and providers
  7. Unit 7 — leaf 2.2. Request lifecycle in order
  8. Unit 8 — leaf 3.1. Errors and validation handled
  9. Unit 9 — leaf 4.1. NestJS checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA NestJS foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Controllers Routing and Validation, 03 Providers Modules and DI, 04 Data Access and Persistence, 05 Testing Deployment and Operations, 06 Production NestJS Operations, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Research notes: NestJS 12.1.2 latest per registry (Oct 2026; node v20.20.2, npm 10.8.2, registry reachable); architecture — modules (@Module) owning controllers+providers, DI container (classes + constructor injection via design:paramtypes), request pipeline (middleware → guards → interceptors → pipes → handler → interceptors → filters), USER DECISION: Fastify adapter by default (@nestjs/platform-fastify + fastify 5.12.5 — same fastify as Fastify track scratch; Express adapter NOT taught), testing via @nestjs/testing Test factory. DRY grep with target reads: TS 14 OWNS decorator/metadata mechanics (explicit NestJS references, links outward — NestJS links it, never re-teaches emitDecoratorMetadata); Express/Fastify tracks own their layers (contrast links only); NodeJS owns runtime. ZERO @Controller/@Module/@Injectable code hits outside TS-track mentions → NestJS track owns framework usage fully. BOUNDARY: NestJS 01 owns framework USAGE (controllers, modules, providers, lifecycle order, error/validation handling) and LINKS TS 14 for decorator mechanics + Express/Fastify for contrast (never re-teaches either). Live-surface rule (NEW for TS framework): registry REACHABLE — installed @nestjs/common+core+platform-fastify+testing+fastify+reflect-metadata+rxjs+typescript@5.9 to /tmp/opencode/nestjs-s1 (77 pkgs, PRE-VERIFIED live: tsc 5.9.3 compiles, Nest boots on FastifyAdapter, inject → 200 {"id":"7"}); inject pattern = `app.getHttpAdapter().getInstance().inject(...)` (`app.inject` does NOT exist — TS2339 verified); TS examples COMPILE via tsc (experimentalDecorators + emitDecoratorMetadata) then RUN compiled JS with node; outputs recorded per leaf; node --check for plain-JS shapes only.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (NestJS 12 sources, DRY grep with target reads — TS 14/Express/Fastify/NodeJS boundaries drawn; framework usage owned, mechanics linked)
  - [unit 3] Created `README/NestJS/README.md` (Template A track index, lists Domain 01, Fastify-adapter default stated) + `README/NestJS/01 NestJS Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #15 now resolves, no root edit needed; track index 6/6 resolve, domain index 1/9 (8 leaf forwards resolve as units land)
- Files touched: modified `README/NestJS/LOG.md`, created `README/NestJS/README.md`, created `README/NestJS/01 NestJS Foundations and Mental Model/README.md` + 6 `sections/` folders
- Links fixed / added:
- Verification:
- Next steps:
