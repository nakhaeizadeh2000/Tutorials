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

## [2026-08-25 11:21] Session 3 — Domain 03 "Values Types and Coercion" (Mode 2)
- Status: DONE
- Context read: root `README.md`; `PROMPT.md`; track `README.md`; full `LOG.md` (Sessions 1–2); domain 01+02 indexes; domain 02 leaves `3.1`/`3.2`/`3.5`, `5.1`, and both "Overlaps" leaves (DRY scan for ToPrimitive/truthy/boxing/Symbol/BigInt coverage — confirmed this domain owns the algorithms; operator leaves keep only practical effects).
- Plan:
  - Create `03 Values Types and Coercion/` with domain index (Template B) + 15 leaves across sections:
    - §1 The value model: 1.1 Eight types two families primitives vs objects; 1.2 Immutability identity and copying how primitives and objects differ.
    - §2 Conversion algorithms: 2.1 Explicit conversion toolbox Number String Boolean parseInt parseFloat unary plus; 2.2 ToString and ToNumber the exact conversion tables; 2.3 ToPrimitive and the valueOf toString and Symbol.toPrimitive dance; 2.4 ToBoolean the complete falsy list.
    - §3 Coercion at work: 3.1 Loose equality the abstract equality algorithm walkthrough; 3.2 Hidden coercion sites relational operators templates and property keys.
    - §4 Boxing: 4.1 Wrapper objects vs primitives boxing demystified.
    - §5 Exotic primitives: 5.1 Symbol unique property keys beyond strings; 5.2 BigInt integers beyond MAX_SAFE_INTEGER.
    - §6 Important points: 6.1 Coercion checklist reflex rules mentors screen for.
    - §7 Pitfalls: 7.1 Real production bugs caused by coercion.
    - §8 Interview QA: 8.1 Common interview QA values types and coercion.
    - §9 Overlaps to avoid: 9.1 Boundaries what is covered elsewhere.
  - Add row 3 to track `README.md`; verify all links + run every code example with node v22.23.2; close log DONE.
  - DRY contract with neighbors: equality leaf here walks the *algorithm* step-by-step (guidance stays in 02 §3.2, linked); falsy list tabulated here once (02 mentions effects only); Symbol/BigInt introduced as types here — protocol/metaprogramming deep dives stay textual forward references to domains 10/17.
- Research notes: facts verified by execution on node v22.23.2 per unit below; spec anchors ECMA-262 abstract operations (ToPrimitive §7.1.1, ToNumber §7.1.4, ToString §7.1.19, IsLooselyEqual §7.2.14) + MDN pages (Equality comparisons and sameness; Symbol; BigInt; parseInt). Version-sensitive claims minimal (wrapper/symbol/bigint semantics stable since ES2020 era).
- Done: (appending after each unit)
- Decisions: (as they arise)
- Files touched:
  - Created: `03 Values Types and Coercion/README.md` + 15 leaves under `sections/` (folders 1–9 as planned).
  - Modified: track `README.md` (module row 3). Root README unchanged (JavaScript row already present).
- Links fixed / added: link-check over whole JS track (189→188 links, 46 files): fixed 19 cross-domain links from domain-03 sections to domain 02 (one extra `../`, same failure class Session 1 hit) and removed one non-conforming footer back-link in 9.1 (sibling leaves end with Cross-links only). Final state: 0 broken.
- Verification: (a) every claim-bearing example executed on node v22.23.2 during its unit — three draft claims corrected by execution before commit (`both + ""` → "10" not "ten"; `Object(sym) === sym` → false; static toStringTag prints `[object Object]`) plus two syntax fixes (`!!() => {}`; strict-mode directive needs function prologue); (b) full sweep: all js fences of all 13 code-bearing leaves concatenated and run — 13/13 exit 0; (c) link checker: 188 relative links across 46 files, 0 broken; (d) anchor `#5-performance-note` in 1.2 resolves to its heading slug; (e) DoD checklist §4 walked — index promises ↔ leaf delivery 1:1, no duplicated coverage (grep-audited), filenames follow punctuation rules, tone/format match domains 01–02.
- Next steps:
  1. Session 4: implement Domain 04 "Variables Scope and Closures" in the same incremental workflow (suggest sections: var/let/const mechanics & TDZ; scope chains; hoisting reality; closures patterns & loops; module vs script top-level; garbage-collection implications of closures; checklist; pitfalls; interview QA; overlaps).
  2. Continue through planned curriculum (05–20), then Update ECMAScript index modules 21–24.
  3. When domains 08–12/16/17 land, convert domain 03's textual forward references (sort mechanics, Map keys, JSON BigInt strategy, protocol deep dives, Numbers formatting) into live links.
  - Created `03 Values Types and Coercion/README.md` (domain index, Template B; sections 0–9, 15 leaf promises). Note: §7 folder named "Common pitfalls to production bugs" on disk (arrow glyph stripped from path per filename rules).
  - Created leaf `sections/1. The value model/1.1. Eight types two families primitives vs objects.md` (examples verified: typeof table incl. undeclared-identifier safety, copy-vs-reference, identity split — all assertions passed on node v22.23.2).
  - Created leaf `sections/1. The value model/1.2. Immutability identity and copying how primitives and objects differ.md` (verified: string index-write no-op, aliasing via function arg, shallow spread, Object.is NaN/-0 cases).
  - Created leaf `sections/2. The conversion algorithms/2.1. Explicit conversion toolbox Number String Boolean parseInt parseFloat and unary plus.md` (verified: whole-string vs prefix contracts, radix, ""→0 vs NaN asymmetry, String(sym) vs template throw, isNaN/isFinite coercion gap).
  - Created leaf `sections/2. The conversion algorithms/2.2. ToString and ToNumber the exact conversion tables.md` (verified: null→0 vs undefined→NaN, prefix literals, "1_000"→NaN, -0 prints "0", array join quirks, symbol implicit-throw/explicit-ok, +10n throws vs Number(10n) ok). Fixed one dead forward-link (domain 12 not implemented yet — made textual per Session 1 decision).
  - Created leaf `sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md` (verified: hint orders, DEFAULT-hint valueOf-first surprise — initial draft wrongly claimed `both + ""` → "ten", execution corrected to "10" before commit; Date @@toPrimitive default→string; @@toPrimitive precedence; null-proto TypeError).
- Decisions: leaf 2.3 leads with the default-vs-string-hint distinction (verified against node) — most existing tutorials get this wrong by equating `+""` with `String()`.
  - Created leaf `sections/2. The conversion algorithms/2.4. ToBoolean the complete falsy list.md` (verified: 8-value falsy list, truthy surprises, == skips ToBoolean via "0"==false / [2]==true chains). Fixed one inline example syntax error (`!!() => {}` unparseable → replaced with `!!new Date()`).
  - Created leaf `sections/3. Coercion at work/3.1. Loose equality the abstract equality algorithm walkthrough.md` (verified: 7-step algorithm incl. null-pair exclusivity, boolean→number first, ToPrimitive recursion, [] == ![] narration, bigint bridges, Object(sym) == sym).
  - Created leaf `sections/3. Coercion at work/3.2. Hidden coercion sites relational operators templates and property keys.md` (verified: "10"<"9" lexical, ["8"]<9 numeric path, null>=0 vs null==0 asymmetry, NaN poisoning all four relationals, key stringification incl. object keys, template symbol throw).
  - Created leaf `sections/4. Boxing and wrapper objects/4.1. Wrapper objects vs primitives boxing demystified.md` (verified: autoboxing reads, wrapper typeof/===/==, new Boolean(false) truthy, sloppy silent write vs strict IIFE TypeError, null/undefined access throw, Object(sym) makes NEW object each call — initial draft claimed `Object(sym) === sym` true, execution corrected to false; new Symbol/new BigInt TypeError). Cleaned leftover draft sentence from §3 before finalizing.
  - Created leaf `sections/5. The exotic primitives Symbol and BigInt/5.1. Symbol unique property keys beyond strings.md` (verified: uniqueness vs description, registry/keyFor, hiding from Object.keys/for-in/JSON but visible to getOwnPropertySymbols, string-context TypeErrors, Symbol.hasInstance instanceof hook, toStringTag instance-vs-static — initial static version printed [object Object], corrected to prototype getter).
  - Created leaf `sections/5. The exotic primitives Symbol and BigInt/5.2. BigInt integers beyond MAX_SAFE_INTEGER.md` (verified: MAX_SAFE_INTEGER collapse demo, literals/RangeError on fractions, truncating division, mixed-arithmetic/unary+/Math/>>> throws, ==/===/relational asymmetry, JSON replacer workaround).
  - Created leaf `sections/6. Important points to remember/6.1. Coercion checklist reflex rules mentors screen for.md` (boundary-conversion pattern verified runnable; five-reflex table + review grep list; heavy cross-linking instead of re-teaching).
  - Created leaf `sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by coercion.md` (all five incident demos verified; notable find during verification: reducer poisoning via "" yields plausible "037"/12.33 garbage instead of NaN — documented as the nastier variant).
  - Created leaf `sections/8. Interview questions and answers/8.1. Common interview QA values types and coercion.md` (12 Q&As incl. statement-vs-expression `{}+{}` — verified: expression position concatenates, statement position parses leading `{}` as block leaving `+{}` → NaN; MAX_SAFE_INTEGER collapse and lexical relational claims re-verified).
  - Created leaf `sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md` (boundaries vs domain 02, forward references to domains 08–12, 16, 17 kept textual per no-dead-links decision).
  - Updated track `README.md`: added row 3 (Values, Types, and Coercion) to the module table.
