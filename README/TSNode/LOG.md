# TSNode — work log

## [2026-09-22 12:10] Session 1 — Create track + Domain 01 Execution Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding, §§1–8 — full read this session, skill harness reloaded); root README.md (Categories table — TS-Node already listed at #8, link target did not exist); README/TypeScript/README.md (Template A reference, 5.9 era); README/NodeJS/README.md (Template A, September 2026 era) + README/NodeJS/01 Runtime Fundamentals and Mental Model/README.md (Template B reference); README/NodeJS/LOG.md (tail — Session 3 DONE, Next steps names TS-Node as next track). Recovery: grep for live `- Status: IN PROGRESS` across all track LOGs — none (all tracks close DONE; NodeJS S1 PARTIAL superseded by S2/S3 DONE). Disk verified — `ls README/` showed no TSNode dir (created empty this session), tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose option 1 "Start TS-Node track" → Mode 1, Domain 01 first, then continue domain-by-domain without stopping while feasible (PARTIAL + precise Next steps only on context limits).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — create track README.md (Template A, lists Domain 01)
  3. Unit 3 — create 01 Execution Foundations and Mental Model README.md (Template B, sections 1–6) + section folders
  4. Unit 4 — leaf 1.1. What ts-node is and is not
  5. Unit 5 — leaf 1.2. Installing and running your first TypeScript file
  6. Unit 6 — leaf 2.1. Transpile-only versus full typechecking
  7. Unit 7 — leaf 2.2. The tsconfig that executes
  8. Unit 8 — leaf 3.1. Loading TypeScript under CJS and ESM
  9. Unit 9 — leaf 4.1. Execution checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA execution foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Units D2+ — continue in curriculum order while feasible (02 → 03 → 04 → 05 → 06 → 07), one unit → LOG update → commit each
  13. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Configuration and tsconfig for Execution, 03 ESM CJS and Loader Hooks Deep Dive, 04 Development Workflow Watch REPL and Editors, 05 Debugging Sourcemaps and Profiling TypeScript, 06 Shipping Builds Dist and Containers, 07 Production TS Execution and Interview Mastery. Only Domain 01 is guaranteed in this session; later units/sessions append domains 02–07.
- Research notes: ts-node official docs (typestrong.org/ts-node/docs — Overview: JIT transforms TS→JS by hooking module loading; features: automatic sourcemaps, tsconfig parsing, node-version defaults, optional typechecking, REPL, standalone scripts, native ESM loader, third-party transpilers, custom transformers; Usage: `ts-node script.ts`, `-e`/`-p`, `ts-node-transpile-only`, `--esm`/`--loader ts-node/esm`, `node -r ts-node/register`, NODE_OPTIONS register, shebang via tsconfig). Node.js Learn "Running TypeScript Natively" (v22.18.0+ runs erasable-only TS flagless; older needs `--experimental-strip-types`; `--no-experimental-strip-types` disables; Amaro loader ignores tsconfig.json — configure editor/tsc to mirror Node via recommended compilerOptions, TS 5.7+; non-erasable enum/parameter-properties/runtime-namespaces/import-aliases need a runner or transpile step; no typechecking at run — pair with `tsc --noEmit`). roadmap.sh/typescript page is JS-rendered shell (no extractable spine — same class as prior sessions; spine taken from official docs above). Era label "September 2026 era" on track index (matches NodeJS convention). Runtime claims labeled "as of September 2026: Node.js 24 Active LTS, 22 Maintenance LTS, 26 Current; TypeScript 5.9 stable". Examples in TypeScript/JavaScript verified per unit with `node --version` + run on each snippet (local v20.20.2 — flagless stripping NOT available there; stripping claims verified as version-gated prose + ts-node/transpile paths executed locally where installable). DRY grep: TS 01/3.2 owns the *pipeline survey* (tsc vs tsx vs ts-node vs native stripping compared) + 01/3.3 owns the *erasable inventory* + TS 13 owns *config flags* + TS 16 owns *tsserver tooling* + NodeJS 01/2.2 owns *CJS/ESM resolution in Node* + JS 15/5.3 owns *sourcemap/inspector mechanics* — this track owns the *ts-node operation* side (install, register/loader hooks, transpileOnly vs typecheck, tsconfig-for-execution, watch/REPL, shipping) and links back (boundaries declared in Domain 01 leaf 6.1).
- Decisions:
  - Track index lists Domain 01 only; rows 02–07 appended as each domain lands (no dead links — matches NodeJS/Algo/Patterns convention). Root README row #8 already points here — creating the track README resolves it, no root edit needed.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Created `README/TSNode/README.md` (Template A track index, lists Domain 01) — root README row #8 now resolves, no root edit needed
  - [unit 3] Created `README/TSNode/01 Execution Foundations and Mental Model/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders (caught + fixed own wrong-depth NodeJS cross-link pre-commit and own wrong-case 6th section dir pre-commit)
  - [unit 4] Created leaf `01/sections/1. Execution identity and setup/1.1. What ts-node is and is not.md` (hook-not-runtime, two modes, honest leaderboard; verified ts-node 10.9.2 + TS 5.9.3: hook run prints, bare node SyntaxError, full-mode TS2322 gate, transpile-only runs; real findings: ts-node 10 crashes under TS 7.0.2 peer-incompat + `-e` eval quirk + TS5109 without explicit tsconfig — probe pinned to TS 5.9.3 + script files + explicit module)
- Files touched: created `README/TSNode/LOG.md`, created `README/TSNode/README.md`; created `01 Execution Foundations and Mental Model/README.md` (+ 6 section dirs); created leaf 1.1
- Links fixed / added: track index → TypeScript + NodeJS track READMEs (both resolve) + back-link to root README; Domain 01 row targets planned index (lands unit 3)
- Verification:
- Next steps:
