# NodeJS — work log

## [2026-09-20 07:10] Session 1 — Create track + Domain 01 Runtime Fundamentals (Domains 02–07 next)
- Status: PARTIAL
- Context read: PROMPT.md (binding, §§1–8 — full reads in prior sessions, skill harness reloaded); root README.md (Categories table — Node.js already listed at #7, link target did not exist); README/DesignPatterns/LOG.md (full — Session 1 DONE, TRACK COMPLETE 7/7, Next steps names Node.js as next track); README/DesignPatterns/README.md + README/AlgorithmDesign/README.md (Template A reference); README/JavaScript/README.md (Template A + version-label convention). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none (JS DONE track-complete, TS DONE track-complete, ITV 7/7 DONE, Git 4/4 DONE, AlgoDesign DONE TRACK COMPLETE 7/7, DesignPatterns DONE TRACK COMPLETE 7/7). Disk verified — `ls README/` showed no NodeJS dir (created empty this session), tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose "Start Node.js track" → Mode 1, Domain 01 first, then continue domain-by-domain without stopping while feasible (PARTIAL + precise Next steps only on context limits).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write) + create track README.md (Template A, lists Domain 01)
  2. Unit 2 — create 01 Runtime Fundamentals and Mental Model README.md (Template B, sections 1–6) + track README row already covers it
  3. Unit 3 — leaf 1.1. What Node.js is and is not
  4. Unit 4 — leaf 1.2. Installing managing and pinning versions
  5. Unit 5 — leaf 2.1. The process model globals and lifecycle
  6. Unit 6 — leaf 2.2. Modules in Node CJS and ESM interop
  7. Unit 7 — leaf 3.1. The Node event loop phases in practice
  8. Unit 8 — leaf 4.1. Runtime checklist mentors insist on
  9. Unit 9 — leaf 5.1. Common interview QA runtime fundamentals
  10. Unit 10 — leaf 6.1. Boundaries what is covered elsewhere
  11. Units D2+ — continue in curriculum order while feasible (02 → 03 → 04 → 05 → 06 → 07), one unit → LOG update → commit each
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Packages Scripts and Project Layout, 03 Files Streams and Buffers, 04 Events Networking and HTTP, 05 Child Processes Workers and Clustering, 06 Debugging Configuring and Shipping, 07 Production Node Use and Interview Mastery. Only Domain 01 is guaranteed in this session; later units/sessions append domains 02–07.
- Research notes: Node.js runtime facts are stable platform knowledge (nodejs.org docs — process, modules, event loop guide, fs/streams; roadmap.sh/nodejs spine confirms: runtime → packages → files/streams → networking/HTTP → processes/workers → debugging/deploy). Era label "September 2026 era" on track index (matches Algo/Patterns convention). Runtime claims labeled "as of September 2026: Node.js 24 Active LTS, 22 Maintenance LTS, 26 Current" (consistent with JavaScript track August 2026 label). Examples in JavaScript verified per unit with `node --version` + `node` run on each snippet. DRY grep: JS 13 owns event-loop/promise *language mechanics* (microtasks, promise combinators) and JS 14 owns *language-level* module syntax — this track owns the *Node runtime* side (process model, libuv threads, CJS/ESM resolution in Node, timers/ordering in production) and links back (boundaries declared in Domain 01 leaf 6.1).
- Decisions:
  - Track index lists Domain 01 only; rows 02–07 appended as each domain lands (no dead links — matches Algo/Patterns convention).
- Done:
  - [unit 1] Created `README/NodeJS/README.md` (Template A track index, lists Domain 01) + opened this LOG entry (root README row #7 already pointed here — now resolves, no root edit needed)
  - [unit 2] Created `README/NodeJS/01 Runtime Fundamentals and Mental Model/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders (local `node --version` = v20.20.2 for example verification)
  - [unit 3] Created leaf `01/sections/1. Runtime identity and setup/1.1. What Node.js is and is not.md` (three-box model, platform swap, runtime-vs-framework layers; verified versions probe v8 11.3.244.8/uv 1.46.0, window-undefined probe, node:fs good 4 lines, bare http listen; caught + fixed own premature live links to unbuilt domains pre-commit per no-dead-links rule)
  - [unit 4] Created leaf `01/sections/1. Runtime identity and setup/1.2. Installing managing and pinning versions.md` (dual-pin contract, LTS calendar, five-probe handshake; verified all probes on v20.20.2 Iron/openssl 3.0.19/fetch function; caught + fixed own openssl version comment pre-commit)
  - [unit 5] Created leaf `01/sections/2. Process and modules/2.1. The process model globals and lifecycle.md` (argv/env/exitCode contracts, module-relative resolution, graceful SIGTERM; verified exit 1/0 paths, cwd-vs-module divergence, unref natural exit, drain-then-number shutdown)
  - [unit 6] Created leaf `01/sections/2. Process and modules/2.2. Modules in Node CJS and ESM interop.md` (two loaders one resolver, type+extension mapping, default-import discipline; verified require-identity true, type:module mapping, interop trio, dynamic-import fallback)
  - [unit 7] Created leaf `01/sections/3. Execution model/3.1. The Node event loop phases in practice.md` (phase itinerary, nextTick-vs-immediate liveness, pool-vs-loop diagnosis; verified I/O immediate-first, queue order 1-5, blocked timer 300 vs 100, pool parallel; caught + fixed own 400ms estimate pre-commit)
  - [unit 8] Created leaf `01/sections/4. Important points to remember/4.1. Runtime checklist habits mentors insist on.md` (pin-print-probe, exit-code API, phase-aware scheduling synthesis; verified boot print, exit 2/0 paths, chunked yield with clean exit; caught + fixed own unverified lag claim pre-commit)
  - [unit 9] Created leaf `01/sections/5. Interview questions and answers/5.1. Common interview QA runtime fundamentals.md` (layered threading answer, priced CJS/ESM judgment, canonical trace + rapid-fire; verified layers probe 1/4/6, trace A-E, interop rule)
  - [unit 10] Created leaf `01/sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md` (language mechanics → JS 13/14, deeper runtime → Domains 02–06 textual, frameworks/words → framework tracks + ITVocabulary; caught + fixed own non-English fragment + own 2-up cross-track depth bug `../../` → `../../../../` pre-commit)
- Files touched: created `README/NodeJS/LOG.md`, created `README/NodeJS/README.md`; created `01 Runtime Fundamentals and Mental Model/README.md` (+ 6 section dirs); created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1); modified `README/NodeJS/LOG.md` per unit (10 units, 10 commits)
- Links fixed / added: track index → Domain 01 README + back-link to root README (row #7 now resolves); domain index 8 leaf links (all live); cross-track links to JS 13/14 READMEs + ITVocabulary index (all resolve); textual forwards to Domains 02–06 (planned, see LOG — no dead links by design)
- Verification: Domain 01 DoD walk (§4): 8/8 promises ↔ 8/8 leaves; every claim-bearing snippet executed on node v20.20.2 (outputs recorded in Done bullets); full link sweep 48/48 angle-bracket targets resolve, 0 broken, 0 `%20`; filenames punctuation-clean; headings 8/8 match; zero duplication (DRY: JS 13/14 mechanics linked never re-taught; decorator/framework mechanics deferred); formatting matches neighboring tracks (bold labels, angle-bracket literal-space links, `---` separators, `javascript`/`bash`/`jsonc` fences); self-caught defects fixed pre-commit (premature live links ×3, openssl comment, 400ms estimate, unverified lag claim, non-English fragment, cross-track depth bug)
- Next steps: PARTIAL — Domain 01 complete (track README 1/7 rows). Continue in order: Domain 02 Packages Scripts and Project Layout (index + section folders + leaves: package.json/scripts, node_modules resolution, workspaces basis, + checklist/QA/boundaries) → Domains 03–07 per the full planned curriculum above. Resume by opening a fresh Session 2 block (this block closes PARTIAL) or continue appending here only if the harness resumes mid-session. Then upgrade Domain 01 textual forwards → live links per domain as each lands (02 first).

## [2026-09-20 15:22] Session 2 — Domain 02 Packages Scripts and Project Layout (then 03–07 in order)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads in Sessions 1 + prior tracks); root README.md (Node.js #7, unchanged); README/NodeJS/LOG.md (full — Session 1 PARTIAL, recovery point); README/NodeJS/README.md (1/7 rows); README/NodeJS/01 Runtime Fundamentals and Mental Model/README.md (Template B reference). Recovery: grep for live `- Status: IN PROGRESS` — none (AlgoDesign PARTIALs are closed history superseded by Session 3 DONE; NodeJS S1 closed PARTIAL = this recovery point). Disk verified — Session 1 Done 10/10: track README + domain 01 index + 6 section dirs + 8/8 leaves all present; git log shows 11 nodejs commits, tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 2 block (S1 immutable). No scope override in request → resume from S1 Next steps: Domain 02 first, then 03–07 without stopping while feasible.
- Plan:
  1. Unit D2-1 — open this entry (this write) + create 02 index README (Template B, sections 1–6, 8 promises) + 6 section folders + track README row 2
  2. Unit D2-2 — leaf 1.1. package.json as install and load contract
  3. Unit D2-3 — leaf 1.2. Versions lockfiles and reproducible installs
  4. Unit D2-4 — leaf 2.1. npm scripts as the task layer
  5. Unit D2-5 — leaf 2.2. Binaries npx and executed packages
  6. Unit D2-6 — leaf 3.1. node_modules resolution and project layout
  7. Unit D2-7 — leaf 4.1. Packaging checklist mentors insist on
  8. Unit D2-8 — leaf 5.1. Common interview QA packages and layout
  9. Unit D2-9 — leaf 6.1. Boundaries what is covered elsewhere
  10. Unit D2-10 — upgrade Domain 01 textual forwards → live 02 links + full track link sweep
  11. Units D3+ — Domains 03–07 in curriculum order while feasible, same loop
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: npm/package facts are stable platform knowledge (npm docs — package.json fields, semver, lockfiles, scripts, npx; nodejs.org modules docs — resolution algorithm). DRY grep for `package.json` outside NodeJS: TS 16 owns package *health/tooling* (publint/attw, upgrade playbooks) and TS 12 owns *publishing types* (exports map, typesVersions) — this domain owns the *Node runtime* side (install/load contract, resolution walk, scripts execution, lockfile reproducibility) and links out (boundaries in leaf 6.1). Examples verified per unit with npm/node on local v20.20.2.
- Decisions:
  - Domain 02 shape (8 leaves: 2 identity-versions + 2 scripts-binaries + 1 layout-resolution + checklist + QA + boundaries); files/streams stay forward to 03.
- Done:
  - [unit D2-1] Created `README/NodeJS/02 Packages Scripts and Project Layout/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders + added track README row 2 (local npm 10.8.2 / node v20.20.2; caught + fixed own non-English fragment pre-commit)
- Files touched: created `02 Packages Scripts and Project Layout/README.md` (+ 6 section dirs); modified track `README.md` (row 2)
- Links fixed / added:
- Verification:
- Next steps:
