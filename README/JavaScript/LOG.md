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

## [2026-08-25 12:14] Session 4 — Domain 04 "Variables Scope and Closures" (Mode 2)
- Status: DONE
- Context read: root `README.md`; `PROMPT.md`; track `README.md`; full `LOG.md` (Sessions 1–3); domain 01–03 indexes; domain 02 leaves `2.2` (classic loops — forward-references this domain twice) and `6.1` (overlaps — hands me declaration-scope consequences); domain 03 leaf `1.2` (leaf anatomy/style reference). DRY grep for closure|hoist|TDZ|scope|var/let/const across the JS track: domains 01–03 keep only practical mentions and explicitly defer mechanics here (02 §2.2 bullet + cross-link line; 02 §6.1 item 4) — this domain owns them.
- Plan:
  - Create `04 Variables Scope and Closures/` with domain index (Template B) + 13 leaves across sections:
    - §1 Declarations and bindings: 1.1 var let const mechanics and when each is still defensible; 1.2 Temporal dead zone why early access throws.
    - §2 Scope and lookup: 2.1 Lexical scope and the scope chain how name lookup works; 2.2 Hoisting the reality creation phase not magic.
    - §3 Closures: 3.1 Closures functions that remember their birth environment; 3.2 Loops and closures var let and per iteration capture (fulfills 02 §2.2's promised "full story"); 3.3 Closure patterns privacy factories memoization; 3.4 Closures and garbage collection what stays alive.
    - §4 Top level scopes scripts modules and eval: 4.1 Script vs module top level globalThis and the declarative record.
    - §5 Important points to remember: 5.1 Scope checklist reflex rules mentors screen for.
    - §6 Common pitfalls to production bugs: 6.1 Real production bugs caused by scoping mistakes.
    - §7 Interview questions and answers: 7.1 Common interview QA variables scope and closures.
    - §8 Overlaps to avoid: 8.1 Boundaries what is covered elsewhere.
  - Add row 4 to track `README.md`.
  - Convert now-live forward references into links: domain 02 §2.2 (two spots → 3.2), domain 02 §6.1 item 4 (→ domain README), domain 01 §3.1 module-script scope claim (→ 4.1) if the wording supports a clean link.
  - Verify per unit with node v22.23.2; full-fence sweep + link check + DoD walk at the end; close DONE.
  - DRY contracts: `import`/export/live-binding mechanics stay textual-forward to domain 14 (here only top-level scope behavior); `this` binding rules (incl. arrow lexical `this` details) forward to domain 05; deep GC internals + WeakRef/FinalizationRegistry forward to domains 18/09; class `#private` fields forward to domain 07; coercion of `undefined` belongs to domain 03.
- Research notes: facts verified by execution on node v22.23.2 per unit; spec anchors ECMA-262 (CreatePerIterationEnvironment per-iteration copy in for/for-in/for-of heads; GlobalDeclarationInstantiation object vs declarative record split; Annex B web-compat function-in-block) + MDN (Closure guide; temporal dead zone; var/let/const reference pages). Version-sensitive claims minimal (core semantics stable since ES2015/ES2020 `globalThis`).
- Done: (appending after each unit)
  - Created `04 Variables Scope and Closures/README.md` (domain index, Template B; sections 0–8, 13 leaf promises; §6 folder named "Common pitfalls to production bugs" on disk, arrow glyph stripped per filename rules).
  - Created leaf `sections/1. Declarations and bindings/1.1. var let const mechanics and when each is still defensible.md` (verified: var function-scope through blocks, let block ReferenceError, redeclaration vs shadowing, const reassignment TypeError / missing-initializer SyntaxError / destructuring init, for-of const legal vs classic-for const TypeError, var→globalThis property vs let not).
  - Created leaf `sections/1. Declarations and bindings/1.2. Temporal dead zone why early access throws.md` (verified: exact ReferenceError message, typeof-throws-in-TDZ vs typeof-safe-on-undeclared, var-pre-line undefined no-throw, self-reference throw, shadowing poisons inner scope from ENTRY (outer value NOT read), call-after-line safe pattern, class TDZ, parameter-default mini-scope quirk f() throws / f(1) fine).
  - Created leaf `sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md` (verified: lexical-vs-dynamic via makeInner/callerScope, shadowing incl. function shadowed by const, missing-name ReferenceError message, var/function→globalThis vs let→declarative record — DEMONSTRATED via indirect eval because Node runs .js files as CJS where top-level var is module-local; catch-clause scoping).
  - Created leaf `sections/2. Scope and lookup/2.2. Hoisting the reality creation phase not magic.md` (verified: per-declarator timing table, function-expression variable rules incl. named-FE inner-only name, strict block-fn hoist + gone-after-block, Annex-B sloppy probe — outer binding undefined BEFORE block / function after (leak on assignment), conditional-declaration divergence strict ReferenceError vs sloppy undefined-then-TypeError, parse-time SyntaxErrors for duplicate let & function-vs-let, duplicate function decls last-wins). Domain-14 forward reference kept textual (no dead links).
  - Created leaf `sections/3. Closures/3.1. Closures functions that remember their birth environment.md` (verified: independent environments per factory call, live-binding via pre-set alias reader (31 not 20), sibling methods share one environment, env survives via external handle, param shadowing cuts link, mundane map-callback closure). `this`-resolution declared out of scope → domain 05 textual forward reference.
  - Created leaf `sections/3. Closures/3.2. Loops and closures var let and per iteration capture.md` (verified: var [3,3,3] vs let [0,1,2], setTimeout fan-out v3v3v3/l0l1l2, for-of/for-in fresh bindings incl. const legality, while-loop SHARED binding [3,3,3] + body-block fix [0,1,2], IIFE historical fix, freshness-≠-freeze via in-iteration mutation reading 100). Includes loop-form capture table.
  - Converted domain 02 §2.2's two textual forward references into live links to this leaf (bullet + Cross-links line).
  - Created leaf `sections/3. Closures/3.3. Closure patterns privacy factories memoization.md` (verified: session private-state object incl. closed-session throw, greeter/range factories, memoize call-counts 2 + independent caches, once idempotence, legacy IIFE module pattern).
  - Created leaf `sections/3. Closures/3.4. Closures and garbage collection what stays alive.md` (verified: reachability demo, naive-vs-fixed big-ref pinning with explicit null release, interval pins env until cleared (ticks>0 true), bounded FIFO cache eviction). Honest framing on engine-dependent slot pruning (spec promises nothing); deep GC internals → domain 18 textual forward reference.
  - Created leaf `sections/4. Top level scopes scripts modules and eval/4.1. Script vs module top level globalThis and the declarative record.md` (verified: classic-script semantics via indirect eval — var/function→globalThis props, let→record-not-property; ESM top-level this===undefined + var not on globalThis; CJS this===module.exports + var module-local; sloppy fn-call this===globalThis). Host table (browser script / ESM / CJS / node -e+indirect eval); two-file module example labeled multi-file.
  - Created leaf `sections/5. Important points to remember/5.1. Scope checklist reflex rules mentors screen for.md` (verified: ambient-reach vs explicit-flow boundary pattern; reflex table + grep list + lint-rule mapping; heavy cross-linking per DRY).
  - Created leaf `sections/6. Common pitfalls to production bugs/6.1. Real production bugs caused by scoping mistakes.md` (all five incidents verified: implicit-global leak + strict ReferenceError, var fan-out mail#3→undefined ×3, unbounded Map cache growth, interval-pinned payload with clean-exit demo (exit=0), mode-divergent conditional declarations — strict ReferenceError both paths / sloppy beta vs TypeError).
  - Created leaf `sections/7. Interview questions and answers/7.1. Common interview QA variables scope and closures.md` (12 Q&As matched to domain-03 format; TDZ-shadowing trace snippet verified — first test draft had commented-out declaration resolving to outer 10, replaced with canonical verified form; grading guidance + red flags).
  - Created leaf `sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md` (six boundaries: syntax→02, this→05, import/export→14, GC internals→18 + Map internals→09, #fields→07, undefined coercion→03; ends with stop-list per house style).
  - Converted remaining forward references into live links: domain 01 §3.1 Common-confusion bullet (top-level this → Variables §4.1); domain 02 §6.1 item 4 (→ domain 04 README).
- Decisions:
  - Host-context honesty: "var becomes a globalThis property" is classic-SCRIPT semantics; in Node CJS/ESM files top-level bindings are module-local. Leaf 2.1 demo uses `(0, eval)` to exhibit script semantics and says so; leaf 4.1 owns the full scripts-vs-modules story with a host table (browser classic / ESM / Node CJS / node -e + indirect eval).
  - Leaf 2.2: Annex-B claims written from a three-point probe (before block / inside pre-line / outside) rather than folklore — V8's sloppy behavior matches Annex B assignment-on-statement-evaluation.
  - Leaf 3.4: engine-dependent slot pruning framed honestly ("spec promises nothing"); explicit null-release shown as the robust pattern.
  - Multi-file ESM example in 4.1 labeled `[multi-file illustration — file N of 2]` inside the fences (non-runnable-standalone, same policy as browser-only examples); incident-1 sloppy demo in 6.1 simulated via indirect eval so every other fence stays module-safe and runnable as-shown.
  - `this` binding rules, import/export mechanics, deep GC internals, WeakMap internals, class #fields all kept textual forward references per DRY contracts (domains 05/14/18+09/07 not yet implemented — no dead links created).
- Files touched:
  - Created: `04 Variables Scope and Closures/README.md` + 13 leaves (`1.1`, `1.2`, `2.1`, `2.2`, `3.1`, `3.2`, `3.3`, `3.4`, `4.1`, `5.1`, `6.1`, `7.1`, `8.1`) across 8 section folders.
  - Modified: track `README.md` (row 4 added); domain 02 leaves `2.2` (2 links), `6.1` (1 link); domain 01 leaf `3.1` (1 link). Root README unchanged (JavaScript row already present).
- Links fixed / added: domain-internal cross-section links initially written as `./M.k.` from sibling sections (19 broken) corrected to `../<Section folder>/M.k.` form — same failure class Sessions 1 and 3 hit; three forward references converted to live links (02 §2.2 ×2 → leaf 3.2; 02 §6.1 item 4 → domain README; 01 §3.1 → leaf 4.1).
- Verification:
  - Per-unit snippets executed on node v22.23.2 before writing claims (all assertions matched; notable corrections during drafting: in-iteration mutation reads 100 not 101; strict conditional-declaration throws ReferenceError even on taken branch).
  - Full-fence sweep over the whole domain: 39 js fences executed, exit 0 for all after fixes (initial sweep caught 3 non-self-contained/context fences — 3.4 §2 cross-fence reference, 4.1 multi-file import, 6.1 sloppy-context implicit global — all rewritten to run standalone or carry explicit labels).
  - Link checker over entire JS track: 60 files, 305 relative links, 0 broken.
  - Anchor `#6-mentor-note` in 1.2 resolves to its heading slug; filenames pass punctuation rules; heading prefixes match filename prefixes 13/13; index promises ↔ leaf delivery walked 1:1 (§4 DoD checklist complete).
- Next steps:
  1. Session 5: implement Domain 05 "Functions Deep Dive" (suggest sections: function forms & expressions vs declarations; parameters defaults rest arguments; arrow functions & lexical this; call/apply/bind & call-site rules; IIFEs & callbacks history; higher-order functions; checklist; pitfalls; interview QA; overlaps). Add row 5 to track README; convert domain-04 textual forward references to `this` (leaves 3.1 §3, 7.1 Q12) into live links.
  2. Continue through planned curriculum (06–20), then Update ECMAScript index modules 21–24.
  3. When domains 08–17 land, convert remaining textual forward references in domain 04 leaves (Modules §4.1, Collections §3.3/§3.4, Prototypes §3.1/§3.3, Memory §3.4) into live links.
