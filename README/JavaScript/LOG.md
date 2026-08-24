# JavaScript — work log

## [2026-08-24 16:27] Session 1 — Bootstrap pure-JavaScript track (Mode 1): skeleton, curriculum plan, domains 01–02
- Status: DONE
- Context read: root `README.md`; `PROMPT.md`; C# track `README.md` (conventions reference); `README/CSharp/20 Arrays/README.md` + sample leaves (index/leaf anatomy reference); `README/CSharp/25 LINQ/.../2.1 OrderBy....md`. Found `README/JavaScript/` existing but containing only empty directories (abandoned scaffold).
- Plan:
  - Mode 1: create `README/JavaScript/` track per §2 layout; register in root README (§3 Mode 1).
  - Full planned curriculum (recorded here so future sessions don't re-decide; implement in this order):
    - 01 Fundamentals and Mental Model ← **this session**
    - 02 Language Basics ← **this session**
    - 03 Values Types and Coercion
    - 04 Variables Scope and Closures
    - 05 Functions Deep Dive
    - 06 Objects in Depth
    - 07 Prototypes and Classes
    - 08 Arrays
    - 09 Collections Map Set and Weak References
    - 10 Iterables Generators and Async Iteration
    - 11 Strings and Regular Expressions
    - 12 Numbers Dates Math and Temporal
    - 13 Async Event Loop and Promises
    - 14 Modules and Code Organization
    - 15 Error Handling and Debugging
    - 16 JSON Serialization and Data Exchange
    - 17 Metaprogramming Symbols Proxy Reflect
    - 18 Memory Management and GC
    - 19 Performance and JIT Mindset
    - 20 Testing and Tooling Essentials
    - 21 Update ECMAScript 2023 (index module pointing into topical domains)
    - 22 Update ECMAScript 2024 (index)
    - 23 Update ECMAScript 2025 (index)
    - 24 Update ECMAScript 2026 (index)
  - Track README lists only *implemented* modules so every link always resolves; append rows as domains land.
- Done:
  - Removed stale empty scaffold `01 Fundamental Theories/` (old→new mapping: that unused folder was superseded by `01 Fundamentals and Mental Model/`; it contained no files and had zero inbound links).
  - Created track index: `README/JavaScript/README.md` (Template A).
  - Registered track in root `README.md` Categories table.
  - Domain 01 `01 Fundamentals and Mental Model/`: `README.md` + 13 leaves across sections 1–6 (history/editions; engines-runtimes-hosts; TC39+MDN-vs-spec; parse/JIT/single-thread; dynamic typing/late binding; event-loop preview; browser scripts/console/modules; Node essentials/version discipline; strict mode; transpile/polyfill/baseline; checklist; interview QA; overlaps).
  - Domain 02 `02 Language Basics/`: `README.md` + 13 leaves across sections 1–6 (statements/expressions/ASI; identifiers/naming; conditionals/fall-through; classic loops incl. labels; for-of vs for-in; arithmetic/precedence/coercion effects; equality strict vs loose; logical/nullish/compound assignment; property access/optional chaining; typeof/instanceof/in/delete/void/spread/rest; checklist; interview QA; overlaps).
- Decisions:
  - Track scope = the language + standard library ("pure JS"); DOM/platform APIs, Node host APIs, and TypeScript explicitly deferred to future tracks/domains (stated in each domain's "Overlaps to avoid").
  - Version labeling "ECMAScript 2026 era"; runtime facts verified via web research (as of Aug 2026): ES2026 ratified 2026-06-30; Node.js 24 Active LTS / 22 Maintenance LTS / 26 Current; Node 20 EOL Apr 30 2026. Temporal is in-spec but engine rollout uneven — deferred to domain 12 rather than treated now.
  - Forward references to not-yet-existing domains are textual only (no dead links) until those domains land.
  - No local `node` on PATH used for verification initially — used `~/.nvm/versions/node/v22.23.2/bin/node`.
- Files touched:
  - Created: `README/JavaScript/README.md`, this `LOG.md`; 28 files under `01 Fundamentals and Mental Model/` and `02 Language Basics/` (2 domain indexes + 26 leaves).
  - Modified: root `README.md` (added JavaScript row).
  - Deleted: empty scaffold dirs under `01 Fundamental Theories/` (see mapping above).
- Links fixed / added: link-check script run over all new files — 85 relative links checked; fixed 7 (one same-folder prefix error in leaf 1.1 of domain 01; six cross-domain links from domain 02 needed one extra `../`). Final state: all resolve.
- Verification: runnable examples executed with node v22.23.2 (event-loop ordering, strict-mode ReferenceError, loop/label traces, arithmetic/coercion results, equality cases, compound logical assignment, operator inspection set) — all outputs match the claims in the leaves. Browser-only examples labeled as such.
- Next steps:
  1. Session 2: implement Domain 03 "Values Types and Coercion" (suggest sections: primitive types table & typeof; ToNumber/ToPrimitive/ToString algorithms; == vs === algorithm walkthroughs; truthiness/falsiness; boxing wrappers vs primitives; Symbol & BigInt introductions; pitfalls; interview QA; overlaps) — then add row 3 to track README.
  2. Continue in planned order through 20, then build Update ECMAScript index modules 21–24.
  3. When domain 12 lands, revisit any date/time mentions for Temporal-era guidance.

## [2026-08-24 16:35] Session 2 — Amend PROMPT.md logging workflow (user-requested process change)
- Status: DONE
- Context read: root `PROMPT.md` (§6, §7); this `LOG.md`.
- Plan: user reported that Session 1 wrote its log only at session end — a broken chat would have lost everything. Update PROMPT.md so logging is incremental and crash-proof.
- Done:
  - Rewrote `PROMPT.md` §6 (Session workflow): step 2 now mandates opening the log entry with `Status: IN PROGRESS` BEFORE any other file write; step 4 now mandates updating the open entry after EVERY completed unit; step 6 forbids ending normally with `IN PROGRESS`.
  - Rewrote `PROMPT.md` §7 (Work log contract): added `IN PROGRESS` status, `Verification:` field, append-only clarified as across-sessions (own open block updated in place), plus recovery rules for finding a broken session's entry.
  - Created `README/CSharp/LOG.md` (retroactive bootstrap — prior C# sessions predate the log file).
- Decisions:
  - Deviation acknowledged: Session 1 logged once at close instead of per-unit. The new §6/§7 wording makes that pattern impossible to repeat.
  - Amendment recorded in this log because this is the active track; the rule change is repo-global and applies to all future sessions on every track.
- Files touched: modified `PROMPT.md`; created `README/CSharp/LOG.md`; appended this entry.
- Links fixed / added: none.
- Verification: reread final PROMPT.md §6/§7 for internal consistency (statuses, step numbering, cross-references §6↔§7) — consistent.
- Next steps: next JavaScript session starts Domain 03 "Values Types and Coercion" using the NEW workflow (log entry first, update after every leaf).
