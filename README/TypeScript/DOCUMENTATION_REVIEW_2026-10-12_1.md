# TypeScript documentation review — 2026-10-12 — revision 1

**Decision: repairs require approval.** Published lessons and indexes were not changed. This report records a **sampled substantive review**, with structural checks across the entire track. It does **not** certify that all 260 lessons have been read, all examples work, or all curriculum gaps have been found. Full substantive review remains outstanding.

## 1. Scope, method and coverage

The requested scope is the TypeScript track. At the initial clean Git state `1ad3519`, it contained **286 Markdown files: 260 teaching leaves, 24 module indexes, the track index and its log**. The leaf text totals 3,901,921 bytes. Those sizes explain the coverage declaration; they are not quality criteria.

- Read completely: PROMPT.md, AGENTS.md, .tutorial/WORKFLOW.md, .tutorial/QUALITY.md, tutorial-review/SKILL.md, root README.md, track README.md and the complete 718-line historical TypeScript LOG.md in chunks.
- Read completely: the ten TypeScript leaves marked **FULL** in Appendix A; module indexes 01, 02 and 21–24. Other index reads were partial; all 24 indexes received a section-heading inventory and structural scans. Truncated batch output was not treated as a full read.
- Scanned every initial track file for inventory; all published files for angle-bracket links and selected feature/version strings; all 260 leaves for numbered required sections and filename/title prefixes. This detects structural defects, not the substance of unread prose.
- Read the JavaScript calibration files in section 2. Inspected current primary documentation and original practitioner material in section 6. Executed the reproductions in Appendix B.
- No subagents were used. No lesson, example, published index, policy file or root curriculum entry was edited. Only this report and the active log entry are review outputs.

Structural results: **233/260 leaves fail the required standalone-section check**; **215 leaves repeat all three notes as inline paragraphs** under multiple promises. The remaining 27 pass the heading/order scan only; their substance is not thereby approved. All 260 leaf title prefixes match filenames. Of **4,508 angle-bracket links** in published files, **four target absent tracks**. Malformed/non-angle links are outside that total and include additional defects (F13).

## 2. Comparison with the JavaScript benchmark

Read the JavaScript track index, Fundamentals index and these actual references:

| Reference | Useful teaching move | TypeScript comparison |
|---|---|---|
| Engines/runtimes/hosts, Fundamentals 1.2 | Defines neighboring concepts before diagnosing confusion | TS declaration-spaces 2.2 mixes spaces, merging and module status, then gives a contradictory mentor answer (F06). |
| Holes/undefined, Arrays 2.1 | Varies one condition, observes it, compares consequences | TS unknown 2.2 has a useful assignability table and boundary example, but incorrectly names the post-array-check type (F06). |
| Promise chaining, Async 3.2 | Traces values and errors through actual transitions | TS metadata 2.3 prints annotated outcomes without supplying runtime prerequisites (F02); upgrade 20/2.2 prints generic strings rather than demonstrating an upgrade (F12). |

The TypeScript track has worthwhile topic breadth: assignability, variance, declarations, type transformations, configuration, validation, tooling, type tests, async and scaling. The unknown lesson explains why unchecked external data needs a check; the execution lesson separates checking, emission and execution; later lessons attempt practical trade-offs. Preserve those strengths.

JavaScript is an editorial reference, not a technical oracle. Its sampled pages also contain stale runtime claims and compressed/self-correcting prose. None of those defects should be copied or repaired as part of this TypeScript review. The target is an explanation the learner can follow and verify, not an identical page count or repeated label scheme.

## 3. Verified baseline and version limits

The local checker is **TypeScript 7.0.2**; the host runtime is **Node 20.20.2**. A separate npm-exec runtime **Node 22.18.0** was used for the stripping reproductions. No repository dependency was installed or changed.

The official announcements establish TypeScript **6.0 stable on 2026-03-23** and **7.0 stable on 2026-07-08**. Therefore the track's September/August 2026 descriptions of 5.9 as current stable and 6.0 as beta are false. A text scan found that pair in **183 published files**. This review verifies the 7.0 release and the installed 7.0.2 checker; it does not claim an exhaustive npm release-tag audit. [TypeScript 6.0 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/), [TypeScript 7.0 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/).

Runtime/library support must be verified separately from compiler acceptance. Experimental APIs and declarations must not become stable defaults merely because `lib: ESNext` compiles. The upsert draft consulted still labels itself Stage 2.7; this report uses it to verify signatures, not to claim final standardization or universal runtime support.

## 4. Findings

Severity follows QUALITY.md: **blocker** for incorrect or misleading instructions; **major** for missing coverage, prerequisite/verification gaps or explanation that does not teach its promise. Line numbers refer to the unchanged reviewed files.

### F01 — Blocker: the fundamentals checklist's validating guard does not validate its promised shape

Affected: [Fundamentals checklist](<01 Fundamentals and Mental Model/sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>), lines 46–54; specifically `isApiResult` at line 47.

The guard checks only that `id` and `name` exist. It accepts `{ id: 1, name: 123 }` as `ApiResult`, then `handle` calls `.toUpperCase()` on a number. The original fence plus that input compiles with strict checking and throws a **TypeError** when executed. The lesson presents this as validated-once boundary discipline, teaching the exact failure it claims to prevent.

**Repair:** check the value type of every required property, explain property existence versus value validity, and show valid input plus malformed input rejected by the guard. Keep the full predicate mechanics in their canonical owner. The mentor probe at line 10 also needs to distinguish a compiler error for using a type parameter as a value from a runtime error after forced emit.

### F02 — Blocker: metadata prerequisites and expected output are false

Affected: [Symbol.metadata](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.3. Symbol.metadata and the metadata proposal.md>), lines 5–9, 30–32, 65, 177–201 and the runtime-support claim at line 208.

The page repeatedly promises a runtime-native symbol with no polyfill. Its first fence compiles, but prints **`undefined`** on both tested Node versions instead of `/users`. Initializing `Symbol.metadata` before loading the emitted class changes the output to `/users`. TypeScript's metadata documentation explicitly describes this initialization requirement for runtimes without support. [TypeScript 5.2 metadata guidance](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html).

The bridge fence independently prints **`unmarked`**, not its annotated `v1`: its stand-in object contains no metadata, and its fallback does not query legacy metadata. This is not an implemented bridge.

**Repair:** declare the exact compile/runtime setup, initialize the symbol before decorated class evaluation when necessary, verify absent/attached/inherited metadata, and either implement a real legacy/standard bridge with its dependencies or label the incomplete sketch honestly. Investigate dependent decorators/validation examples before propagating an assumption of native support.

### F03 — Blocker: Node stripping instructions promise unsupported transformations and omit necessary version distinctions

Affected: [Executing TypeScript](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>), lines 25–35 and 49–60; Fundamentals index's native-stripping promise.

The text suggests `--experimental-transform-types` transforms newer JavaScript or legacy decorators. Node's documentation says decorators are not transformed and produce a parser error; the reproduced decorator file fails with **SyntaxError** under that flag on Node 22.18.0. Its unflagged/flagged availability also needs exact versions: the Node 22 documentation records default stripping beginning at 22.18.0, rather than making all “22.12+” invocation forms equivalent. [Node 22 TypeScript documentation](https://nodejs.org/docs/latest-v22.x/api/typescript.html).

**Repair:** separate erasable syntax, transformable TypeScript syntax and unsupported JavaScript syntax; supply exact version/run commands, file extensions and module context; observe the intentional failure. Treat the blanket prohibition on deploying source `.ts` and the speed ranking as choices needing stated deployment conditions/evidence, not universal facts.

### F04 — Blocker: type-testing lesson substitutes inert equivalents for the actual tools and misstates execution/checking

Affected: [tsd/expect-type](<17 Testing Types/sections/1. Type Assertions in Tests/1.2. tsd expect-type and type-testing libraries.md>), lines 9, 11–20, 33, 61, 92 and 119–124.

Its first “runnable” fence declares `assertType` and `greet` without implementations, calls both, and promises console output. Strict compilation succeeds; Node throws **ReferenceError: assertType is not defined**. These can be valid compile-only probes, but they are not runnable demonstrations of `tsd` or `expect-type`.

The recommendation to put `tsd` negative tests in plain `tsc`'s include set ignores `tsd`'s special handling of `expectError`. Vitest type checking requires configuration/`--typecheck`; successful runtime tests alone do not establish type correctness. [tsd's actual test processing](https://github.com/tsdjs/tsd), [Vitest type checking](https://vitest.dev/guide/testing-types).

**Repair:** use a minimal package with a declaration surface and real `tsd` imports/commands, demonstrate a failing then passing negative test, and use actual `expectTypeOf` with a separate type-check command. Label ambient probes compile-only and provide real implementations for any promised runtime output. Revisit dependent Testing Types examples; the scan finds `declare function assertType` in 22 leaves, which are candidates, not 22 confirmed runtime failures.

### F05 — Blocker: erasable inventory is incomplete and three flags do not guarantee identical execution

Affected: [erasableSyntaxOnly/trio](<13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>), lines 5, 15–23, 57–83 and 97–104.

The definition says enum and namespace are the only two output-producing forms. The documented gate also rejects parameter properties and other unsupported forms; a parameter-property repro fails with **TS1294**. [Official gate inventory](https://www.typescriptlang.org/tsconfig/erasableSyntaxOnly.html).

The page promises every file processes identically under tsc, Babel, bundlers and Node stripping. Its first original multi-file fence imports `./kinds131.js` while supplying only `kinds131.ts`. Direct source execution on Node 22.18.0 fails with **ERR_MODULE_NOT_FOUND**. Passing compiler flags does not install modules, rewrite Node's resolution or guarantee supported decorator/runtime syntax.

**Repair:** teach each flag's bounded guarantee, explicitly separate source-running and emitted-running import strategies, supply package/config/file sets for both and execute them. Remove byte-for-byte/universal graph claims; explain what dual-pipeline checks actually test.

### F06 — Blocker: declaration spaces and an array-narrowing type are taught incorrectly

Affected: [Declaration spaces](<02 The Type System Core/sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>), lines 11, 46–52 and 98; its index promises; [unknown](<03 Basic Types and Annotations/sections/2. The Special Types/2.2. unknown the type-safe top type.md>), the `sumUnknownValues` comment at line 92.

The namespace row includes classes and enums as namespace-creating declarations, contradicting the Handbook table. The mentor answer says type alias plus interface does not collide, then says it errors; the reproduction emits **TS2300**. The commented script-mode `declare global` advice also needs a real module/global augmentation project. [Declaration-merging primary reference](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).

`Array.isArray(raw)` narrows an unknown input to **`any[]`**, not the promised `unknown[]`; an unchecked element method compiles in the reproduction. The element checks in the sum implementation are useful, but the explanation invents checker protection. [TypeScript issue documenting the library behavior](https://github.com/microsoft/TypeScript/issues/43865).

**Repair:** correct the declaration-space table and mentor answer; compile valid/invalid merging and augmentation examples; explain array membership checks versus element checks, using an explicit safe element view or a checked wrapper where useful.

### F07 — Blocker: update indexes contain a wrong API invocation and a build flag unusable on the checked baseline

Affected: module 24 README, line 52; module 21 README, lines 5, 31 and 61.

Module 24 recommends `map.getOrInsert(k, () => fresh())`. The value-taking method stores a value; the callback-taking method is `getOrInsertComputed`. The number-map repro fails **TS2345** for a callback supplied as the value. An existing function-valued map could instead silently store the factory itself. [Upsert signature/algorithm draft](https://tc39.es/proposal-upsert/).

Module 21 recommends `--stopOnBuildErrors`; TypeScript 7.0.2 rejects it with **TS5023: Unknown compiler option**. Check the supported `--stopBuildOnErrors` name on every declared compiler baseline. Historical release prose may use different naming; do not assume an announcement spelling is a current executable command.

**Repair:** use the correct value/lazy-factory APIs, name support conditions, compile typed examples and observe runtime results where supported. Verify actual build flags and dependent-failure behavior in a two-project fixture. Remove the unsupported race-window generalization about synchronous check-then-set without an asynchronous/reentrant case.

### F08 — Blocker: scaling lesson invents an adjustable depth flag

Affected: [Instantiation budgets](<19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.2. Instantiation budgets and TS2589 carve-outs.md>), line 79 and the absolute costing/termination claims in parts 1–2.

The lesson suggests raising `instantiationDepth` as a flag. The reproduction returns **TS5023: Unknown compiler option**. It also presents branches × members × keys as counter arithmetic accurate within 2× and a cap as making TS2589 structurally impossible, without a measurement that supports either promise. Compiler caching, other limits and caller input invalidate a simple universal guarantee.

**Repair:** distinguish implementation limits from public options. Build a measured minimal diagnosis with pinned compiler/version, baseline diagnostics, one changed condition and observed results; retain cap/carve/scope as conditional remedies with their semantic trade-offs. Use evidence rather than an invented tunable knob. [TypeScript performance investigation guidance](https://github.com/microsoft/TypeScript/wiki/Performance).

### F09 — Blocker: published baseline is internally contradictory and already stale

Affected: track README lines 1–3; 183 files with the stable/beta pair; module 24's native-preview framing; closed LOG history is evidence and must remain unchanged.

The index calls September 2026 TypeScript 5.9 stable/6.0 beta, while module 24 itself gives a March 2026 stable date for 6.0. The verified 7.0 release precedes both dates. Learners cannot choose the compiler, editor or compatible linter from this inconsistent route.

**Repair:** establish one explicit verified baseline/date, correct misleading old guidance at its owner, preserve genuinely historical examples with honest labels, and provide a focused incremental 7.0 route. Do not mechanically replace historical version numbers or rewrite closed logs. See P6 below for the proposed update scope.

### F10 — Major: required topic-specific synthesis sections are absent as standalone numbered sections

Affected: **233 leaves**, enumerated with counts in Appendix A. Domains 01–03 have four failing leaves each; every leaf in domains 04–20 fails the structural rule. The first three domains' nine topical leaves each are the 27 structural passes.

Inline notes repeated under each promise do not satisfy the current required distinct numbered sections once per leaf. For example, metadata 14/2.3 repeats three sets, while checklist 01/4.1 has only a numbered Mentor note.

**Repair:** consolidate topic-specific Common confusion, Performance note and Mentor note at the end, in order with continued numbering, then a separate Cross-links section when needed. Preserve useful content and remove repetition. Fill actual omissions with reasoning; no generic template or invented performance claim. Passing the new heading scan is necessary but still requires substantive review.

### F11 — Major: compressed slogans, repeated scaffolding and absolute review rules obscure the teaching

Affected sampled lessons: erasable/trio 13/2.3, metadata 14/2.3, type-testing 17/1.2, instantiation 19/1.2 and upgrade 20/2.2. These are confirmed sample findings; unread pages are not automatically assigned the same prose defect.

Multiple promises repeat Definition → history → modern guidance → good/bad → confusion/performance/mentor, often explaining toy output by restating a slogan. “universality by construction”, “drift becomes impossible” and “range-respecting code” imply guarantees the examples do not demonstrate. The upgrade page first mandates TS-first, then says blockers must go first; it needs one dependency-aware rule.

Representative before/after (editorial targets, not already implemented repairs):

| Before | Proposed teaching prose |
|---|---|
| `guaranteeing every file processes identically` (13/2.3) | These flags catch several syntax and import mismatches before execution. They do not configure Node's resolver. Next we will run the same two-file program from source and from emitted JavaScript and compare its import paths. |
| `metadata ... drift becomes impossible by construction` (14/2.3) | Attaching a route beside its class makes related edits easier to review. A string route name can still be wrong, and inherited metadata can be shared. Test the dispatcher and subclass behavior rather than treating co-location as validation. |
| `range-respecting code ... support windows overlapping here` (20/2.2) | The function below demonstrates ordinary narrowing. To check an upgrade, install the old and candidate compiler separately, run both against the same project, and compare diagnostics and emitted output. |

**Repair:** use connected causal prose, introduce prerequisites before advanced terms, vary one condition in a meaningful example, explain limits and reserve strict review gates for the stated conditions. Consolidate repeated notes through F10. This is semantic editing, not punctuation removal or a length quota.

### F12 — Major: feature ownership and advanced practical assessment are weaker than the indexes promise

Whole-track feature searches show `import defer`, `getOrInsert` and `IteratorObject` occur only in their update indexes. The named topical owners do not contain those exact APIs. The read 18/3.1 owner teaches lib selection/settled results/disposal but has no worked iterator-helper or upsert lesson. `NoInfer` occurs only in a performance index promise and a hover-budget mention, with no actual usage, although its purpose is inference control and it has been available since 5.4. [Official NoInfer reference](https://www.typescriptlang.org/docs/handbook/utility-types.html).

The section inventory reaches advanced vocabulary, but does not itself demonstrate Junior → Mentor outcomes. In the read upgrade leaf, `upgradeSafe`, `dualSafe` and `ecoSafe` execute strings/indexing, not a real compiler upgrade, dual tool setup or ecosystem support check. A fictional `tsc59` job and `npm ... --branch` line lack an implemented setup. This is a confirmed assessment gap in that leaf, not proof that every other advanced lesson lacks practice.

**Repair:** give NoInfer a worked home in 08/1.2; make each update pointer lead to a substantive owned explanation (Node import-extension strategy, iterator-helper typing, deferred import support and collection upsert), or honestly mark unsupported/proposed work. Replace 20/2.2's filler with a reproducible small package migration exercise: compare diagnostics, fix one genuine compatibility issue, verify built consumers and defend tool support choices. Supply an explained solution and review criteria. Additional unsampled curriculum gaps require a new reported finding rather than implicit repair authorization.

### F13 — Major: navigation scan success ignores malformed syntax and future-target debt

Four missing angle-link targets:

- [14 Decorators and Metadata/README.md:117](<14 Decorators and Metadata/README.md>) → `../NestJS/README.md`.
- [14 Decorators and Metadata/sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md:181](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md>) → `../NestJS/README.md`.
- [14 Decorators and Metadata/sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md:220](<14 Decorators and Metadata/sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md>) → `../../../NestJS/README.md`.
- [15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md:138](<15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md>) → `../../../Linux/README.md`.

The module-14 index and legacy-comparison leaf use `../NestJS`, which also has the wrong depth for a sibling track; those links would remain wrong when NestJS exists. Declaration-spaces 02/2.2 also contains two malformed/non-angle era-alternative links (lines 90 and 100); these were invisible to the old angle-only checker. The index scan also found 11 raw-space relative links: module 01 README lines 113–114 (two), module 02 README lines 114–116 (three), and module 03 README lines 113–117 (six, with two on line 116). Their targets exist, but the Markdown syntax does not follow the required angle-bracket form.

**Repair:** use precise existing owners, keep absent tracks as explicit planned prose instead of live broken links, and repair relative depths. Validate Markdown syntax as well as path existence. Never create NestJS or Linux just to satisfy these links. Preserve current topic boundaries and check inbound references for any approved path change.

### F14 — Major: quantitative performance advice lacks reproducible evidence and sources are mostly untraceable

Affected confirmed samples: executing 01/3.2 line 73 (`~2–3×` cold-start and 300-file ranking); unknown 03/2.2 Performance note (parsing microseconds/O(schema size)); trio 13/2.3 (microseconds and smallest/fastest guarantees); instantiation 19/1.2 (within-2× estimates and constant-work claims). These are workload/version-dependent claims without cited measurements in their explanations.

The historical log names mainly official documentation and roadmap.sh, often without precise URLs, evaluated practitioner contributions or a reproducible harness. It records checking commented errors or illustrative equivalents as broad verification. That history is not overwritten; current observed failures show why a compiler pass cannot certify runtime output or tool integration.

**Repair:** remove unsupported quantities, or supply an appropriate measured fixture with environment and limits. Separate erased type cost, runtime validation cost and build/editor cost. Add precise source attribution near non-obvious claims and a compact evaluated source map per affected unit. Use original practitioner explanations to expose failure modes, then corroborate behavior against primary evidence and execution.

## 5. Ordered repair plan proposed for approval

**Approval applies only to the findings and outcomes here.** No repair has started. Approve the whole plan or selected steps/findings. Every teaching unit below means one leaf plus affected ancestor indexes, verification, immediate LOG update and an explicit-path commit before advancing. A coherent navigation unit may stand alone. No concurrent writers; no batch of authored leaves. The original report remains the approval reference.

1. **P1 — Correct unsafe boundaries and runtime examples (F01–F06).** Start with checklist 01/4.1, metadata 14/2.3, execution 01/3.2, trio 13/2.3, type tools 17/1.2, declaration spaces 02/2.2 and unknown 03/2.2, in that order. Execute happy/malformed/unsupported cases with declared flags, modules, dependencies and observed output. Consolidate each touched leaf's required sections in the same unit. Inspect direct dependent examples; repair only repetitions of these accepted defects, reporting materially different new issues.
2. **P2 — Repair executable update/scaling guidance (F07–F08).** Fix module 21's build flag in a verified index unit; fix module 24's upsert signature/support wording in another index unit; repair 19/1.2 with actual diagnostics and supported remedies. Each affected index is updated alongside its owning lesson when substantive content changes.
3. **P3 — Repair known navigation debt (F13).** One coherent syntax/depth/planned-target unit across the enumerated broken links, the declaration-spaces malformed links and confirmed raw-space links. Run a checker that does not silently skip malformed relative Markdown. No absent-track authorship or root reorder.
4. **P4 — Restore substantive leaf sections (F10), with approved editorial/evidence repairs (F11/F14).** Walk the exact 233-leaf Appendix A manifest in numeric curriculum order, skipping leaves already resolved in P1/P2. One leaf at a time: read fully, consolidate/fill the three distinct sections, explain misconceptions and mentoring action, correct repeated unsupported claims identified in F14, verify its examples and promises, update indexes if needed, log and commit. Apply F11's causal rewrite to its five named sampled leaves; do not treat formatting approval as permission to invent curriculum. Other material correctness issues found during this pass are reported separately before repair.
5. **P5 — Make feature ownership and assessment real (F12).** Add NoInfer reasoning/examples to existing 08/1.2 with precise cross-links; implement source/emit import-extension reasoning in the existing modules/execution owners; place iterator-helper typing in the current standard-library/collection owner; establish bounded deferred-import and upsert routes with actual compiler/runtime support and proposal labels where necessary. Replace 20/2.2's illustrative upgrade strings with the real package exercise described in F12 and its solution. Research each owner before authoring; keep existing paths stable and use separate leaf units. New domains are not inferred from topic counts.
6. **P6 — Correct the baseline and add a focused current-release route (F09).** Correct current-facing false beta/stable claims in topical leaves as each unit is visited; preserve valid historical 5.x examples. Add the proposed **25 Update TypeScript 7.0** incremental domain below, then the track index points new/returning readers to it. This is a material addition included explicitly in this report's requested approval; if P6 is not approved, keep it pending and report current-release coverage unresolved.
7. **P7 — Verify the accepted repairs and close their scope.** Re-run required-section and navigation checks, execute repaired examples/tool projects, compare accepted finding → unit → observed evidence, and preserve unresolved limits. Separately complete substantive reading/testing of the 250 unsampled leaves and unreviewed index passages as review work; report any new findings for approval before repairing them. Do not claim a full-track quality pass from the current sample or from P4's structural work alone.

### P6 proposed incremental domain outcomes and boundaries

Prior published label: TypeScript 5.9/6.0 beta. Verified update baseline: 7.0, with local example checking on 7.0.2 and explicit runtime/library conditions. Existing mechanics stay in their topical owners; each update leaf explains the delta, migration, exercise and links. Experimental controls stay labeled experimental.

| Planned leaf | Outcome and prerequisites |
|---|---|
| 1.1 Configuration defaults and removed options | Migrate a small 5.x/6.x project; compare rootDir/types/defaults and unsupported options. Prerequisites: 13 configuration and 20 migration. |
| 2.1 Editor and tool API compatibility | Distinguish native editor/LSP setup from tools needing the earlier compiler API; test a supported two-tool setup. Owners: 16 tooling and 17 type tests. |
| 3.1 Native builds watch and measurement | Compare a real rebuild with consistent inputs; discuss CPU/memory trade-offs without promising a speedup. Owner: 19 measurement/references. |
| 4.1 Template literal Unicode inference | Predict/check the changed code-point inference and diagnose an affected string utility. Owners: 09 transforms and JavaScript strings. |
| 5.1 Migration exercise and review | Integrate configuration, checking, actual consumer tests and tool compatibility; justify a migration/rollback choice with observed evidence. Owners: 17 and 20. |
| 6.1 Overlaps and update route | Explain where old mechanics remain and how a returning/new learner reaches current guidance. No duplicate full lessons. |

No production service framework is needed for this language/toolchain exercise; the NestJS/Fastify backend contract is preserved. Domain purpose is an incremental migration route, not a replacement curriculum or copied module quota.

## 6. Evaluated research/source map

Consulted 2026-10-12. Roles distinguish technical authority from teaching value. Pages were consulted for the relevant passages; inaccessible entire books/courses are not claimed as read. Search snippets alone were not used as correctness evidence.

| Concept/source | Contribution, applicability and corroboration/limits |
|---|---|
| [TS 6.0 release](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) | Primary release date/status; exposes stale beta wording. Historical release snapshot, not a runtime support table. |
| [TS 7.0 release](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) | Primary current-release route and compatibility questions; local checker version corroborated. Benchmark results are not transferred to this repo. |
| [Node 22 TypeScript](https://nodejs.org/docs/latest-v22.x/api/typescript.html) | Primary runtime/version/transform limitations; corroborated with 22.18.0 source execution. Does not imply identical behavior on every Node line. |
| [TS 5.2 metadata](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html) | Primary initialization requirement and compiler/runtime distinction; first metadata fence reproduced with/without symbol initialization. Historical API introduction, deployment support still checked separately. |
| [erasableSyntaxOnly](https://www.typescriptlang.org/tsconfig/erasableSyntaxOnly.html) | Primary bounded syntax inventory; parameter-property failure observed. Flags do not provide runtime resolution. |
| [Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) | Primary space table and merge rules; duplicate example actually checked. |
| [tsd repository documentation](https://github.com/tsdjs/tsd) | Maintainer description of special assertion processing; original hand-rolled fence reproduced, actual tsd suite not run in this report. |
| [Vitest type tests](https://vitest.dev/guide/testing-types) | Maintainer setup/CLI guidance; identifies missing distinct checking gate. Vitest integration remains a repair verification task. |
| [Upsert draft](https://tc39.es/proposal-upsert/) | Primary signatures/value-vs-callback distinction; local checker rejects mismatch. Draft status prevents inferring final standardization. |
| [NoInfer](https://www.typescriptlang.org/docs/handbook/utility-types.html) | Primary inference-control topic and 5.4 introduction; track-wide string search found no worked owner. |
| [Performance wiki](https://github.com/microsoft/TypeScript/wiki/Performance) | Primary investigation process/limits of isolation flags; contrasts measured diagnosis with unsupported arithmetic. Historical wiki claims still require version-aware use. |
| [Dan Vanderkam — hidden side of predicates](https://effectivetypescript.com/2024/02/27/type-guards/) | Original specialist explanation: learners must test false branches as well as true branches. Useful principal teaching input for guard review; claims need current checking. F01 reproduction corroborates the broader risk of trusting unproved predicates, not every example in the article. |
| [Nested-array narrowing question](https://stackoverflow.com/questions/77462120/cant-narrow-down-deeply-nested-object-prop) | Community learner question used to discover the any[] confusion; answer popularity is not evidence. Behavior corroborated via the primary TypeScript issue and local checker. |
| [TypeScript issue 43865](https://github.com/microsoft/TypeScript/issues/43865) | Primary project discussion of Array.isArray's unsafe element view; checked locally. A requested change in an issue is not a shipped change. |

Curriculum inputs were the actual repository hierarchy/outcomes, official reference/release structure, the original specialist explanation and real practitioner questions. The existing fixed 13-leaf-per-domain shape and roadmap-driven log are not assumed to prove adequate progression. Future repairs refine research per owner rather than collecting a fixed website quota.

## Appendix A. Exact initial inventory and review status

`FULL` = complete prose read in this review; `SCAN` = inventory/structural/search coverage only, with possible partial excerpts. Every initial teaching leaf got heading/order/prefix scans; every published file got angle-link/search scans. LOG got a complete context read but is excluded from published-content link/version totals.

The `C/P/M` columns count distinct **numbered** Common confusion / Performance note / Mentor note headings. Inline repeated notes do not count. `FAIL` is the structural failure manifest for P4. A `PASS` is not substantive quality approval.

| File | Read | C/P/M | Structure |
|---|---|---|---|
| [01 Fundamentals and Mental Model/README.md](<01 Fundamentals and Mental Model/README.md>) | FULL | — | not a leaf |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.1. From JavaScript to TypeScript history superset claim and why it exists.md](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.1. From JavaScript to TypeScript history superset claim and why it exists.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>) | FULL | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) | SCAN | 1/1/1 | PASS |
| [01 Fundamentals and Mental Model/sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md](<01 Fundamentals and Mental Model/sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>) | FULL | 0/0/1 | FAIL |
| [01 Fundamentals and Mental Model/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by misunderstanding fundamentals.md](<01 Fundamentals and Mental Model/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by misunderstanding fundamentals.md>) | SCAN | 0/0/1 | FAIL |
| [01 Fundamentals and Mental Model/sections/6. Interview questions and answers/6.1. Common interview QA fundamentals of TypeScript.md](<01 Fundamentals and Mental Model/sections/6. Interview questions and answers/6.1. Common interview QA fundamentals of TypeScript.md>) | SCAN | 0/0/0 | FAIL |
| [01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [02 The Type System Core/README.md](<02 The Type System Core/README.md>) | FULL | — | not a leaf |
| [02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md](<02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md](<02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md](<02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md](<02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md](<02 The Type System Core/sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>) | FULL | 1/1/1 | PASS |
| [02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md](<02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md](<02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md](<02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md](<02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>) | SCAN | 1/1/1 | PASS |
| [02 The Type System Core/sections/4. Important points to remember/4.1. Type system core checklist mental models mentors insist on.md](<02 The Type System Core/sections/4. Important points to remember/4.1. Type system core checklist mental models mentors insist on.md>) | SCAN | 0/0/1 | FAIL |
| [02 The Type System Core/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md](<02 The Type System Core/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md>) | SCAN | 0/0/1 | FAIL |
| [02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md](<02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>) | SCAN | 0/0/0 | FAIL |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [03 Basic Types and Annotations/README.md](<03 Basic Types and Annotations/README.md>) | SCAN | — | not a leaf |
| [03 Basic Types and Annotations/sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md](<03 Basic Types and Annotations/sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md](<03 Basic Types and Annotations/sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md](<03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/2. The Special Types/2.1. any the unchecked escape hatch.md](<03 Basic Types and Annotations/sections/2. The Special Types/2.1. any the unchecked escape hatch.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/2. The Special Types/2.2. unknown the type-safe top type.md](<03 Basic Types and Annotations/sections/2. The Special Types/2.2. unknown the type-safe top type.md>) | FULL | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md](<03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md](<03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md](<03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md](<03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) | SCAN | 1/1/1 | PASS |
| [03 Basic Types and Annotations/sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md](<03 Basic Types and Annotations/sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [03 Basic Types and Annotations/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md](<03 Basic Types and Annotations/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [03 Basic Types and Annotations/sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md](<03 Basic Types and Annotations/sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md>) | SCAN | 0/0/0 | FAIL |
| [03 Basic Types and Annotations/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<03 Basic Types and Annotations/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/1 | FAIL |
| [04 Objects Interfaces and Type Aliases/README.md](<04 Objects Interfaces and Type Aliases/README.md>) | SCAN | — | not a leaf |
| [04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.2. Branded and opaque object patterns for domain safety.md](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.2. Branded and opaque object patterns for domain safety.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/4. Important points to remember/4.1. Objects interfaces checklist mental models mentors insist on.md](<04 Objects Interfaces and Type Aliases/sections/4. Important points to remember/4.1. Objects interfaces checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by object type misunderstandings.md](<04 Objects Interfaces and Type Aliases/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by object type misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/6. Interview questions and answers/6.1. Common interview QA objects interfaces and type aliases.md](<04 Objects Interfaces and Type Aliases/sections/6. Interview questions and answers/6.1. Common interview QA objects interfaces and type aliases.md>) | SCAN | 0/0/0 | FAIL |
| [04 Objects Interfaces and Type Aliases/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<04 Objects Interfaces and Type Aliases/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/1 | FAIL |
| [05 Functions and Callable Types/README.md](<05 Functions and Callable Types/README.md>) | SCAN | — | not a leaf |
| [05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.1. Function type syntax call signatures and callable objects.md](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.1. Function type syntax call signatures and callable objects.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.2. Parameters optional default rest and destructuring.md](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.2. Parameters optional default rest and destructuring.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/2. Overloads and Generics/2.1. Function overloads call signatures and implementation compatibility.md](<05 Functions and Callable Types/sections/2. Overloads and Generics/2.1. Function overloads call signatures and implementation compatibility.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md](<05 Functions and Callable Types/sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md](<05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/4. Important points to remember/4.1. Functions checklist mental models mentors insist on.md](<05 Functions and Callable Types/sections/4. Important points to remember/4.1. Functions checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by function type misunderstandings.md](<05 Functions and Callable Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by function type misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/6. Interview questions and answers/6.1. Common interview QA functions and callable types.md](<05 Functions and Callable Types/sections/6. Interview questions and answers/6.1. Common interview QA functions and callable types.md>) | SCAN | 0/0/0 | FAIL |
| [05 Functions and Callable Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<05 Functions and Callable Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/README.md](<06 Classes and Object-Oriented Types/README.md>) | SCAN | — | not a leaf |
| [06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.3. Access modifiers and encapsulation public private protected readonly.md](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.3. Access modifiers and encapsulation public private protected readonly.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.1. Extends implements and structural class compatibility.md](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.1. Extends implements and structural class compatibility.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.2. Abstract classes and members when abstract beats interface.md](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.2. Abstract classes and members when abstract beats interface.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.1. Static members generics and static blocks.md](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.1. Static members generics and static blocks.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.3. Class type queries InstanceType and constructor signatures.md](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.3. Class type queries InstanceType and constructor signatures.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/4. Important points to remember/4.1. Classes checklist mental models mentors insist on.md](<06 Classes and Object-Oriented Types/sections/4. Important points to remember/4.1. Classes checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by class type misunderstandings.md](<06 Classes and Object-Oriented Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by class type misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/6. Interview questions and answers/6.1. Common interview QA classes and object-oriented types.md](<06 Classes and Object-Oriented Types/sections/6. Interview questions and answers/6.1. Common interview QA classes and object-oriented types.md>) | SCAN | 0/0/0 | FAIL |
| [06 Classes and Object-Oriented Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<06 Classes and Object-Oriented Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/README.md](<07 Unions Intersections and Narrowing/README.md>) | SCAN | — | not a leaf |
| [07 Unions Intersections and Narrowing/sections/1. Union Types/1.1. Union fundamentals member access and the common property rule.md](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.1. Union fundamentals member access and the common property rule.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/1. Union Types/1.2. Discriminated unions the tagged pattern that scales.md](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.2. Discriminated unions the tagged pattern that scales.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.1. Intersection fundamentals merging object shapes.md](<07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.1. Intersection fundamentals merging object shapes.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.2. The never trap conflicting intersections and impossible states.md](<07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.2. The never trap conflicting intersections and impossible states.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md](<07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md](<07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md](<07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md](<07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/4. Important points to remember/4.1. Unions intersections narrowing checklist mental models mentors insist on.md](<07 Unions Intersections and Narrowing/sections/4. Important points to remember/4.1. Unions intersections narrowing checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by union and narrowing misunderstandings.md](<07 Unions Intersections and Narrowing/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by union and narrowing misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/6. Interview questions and answers/6.1. Common interview QA unions intersections and narrowing.md](<07 Unions Intersections and Narrowing/sections/6. Interview questions and answers/6.1. Common interview QA unions intersections and narrowing.md>) | SCAN | 0/0/0 | FAIL |
| [07 Unions Intersections and Narrowing/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<07 Unions Intersections and Narrowing/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/README.md](<08 Generics Deep Dive/README.md>) | SCAN | — | not a leaf |
| [08 Generics Deep Dive/sections/1. Generic Fundamentals/1.1. Type parameters declaration instantiation and erasure.md](<08 Generics Deep Dive/sections/1. Generic Fundamentals/1.1. Type parameters declaration instantiation and erasure.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md](<08 Generics Deep Dive/sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/1. Generic Fundamentals/1.3. Generic scope per-call vs per-value and declaration sites.md](<08 Generics Deep Dive/sections/1. Generic Fundamentals/1.3. Generic scope per-call vs per-value and declaration sites.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.1. Constraints extends narrowing inside the body.md](<08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.1. Constraints extends narrowing inside the body.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.2. Defaults and optional type parameters.md](<08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.2. Defaults and optional type parameters.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md](<08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.1. Variance in out annotations and generic positions.md](<08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.1. Variance in out annotations and generic positions.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md](<08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.3. Variadic tuple generics pipe concat and rest capture.md](<08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.3. Variadic tuple generics pipe concat and rest capture.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/4. Important points to remember/4.1. Generics checklist mental models mentors insist on.md](<08 Generics Deep Dive/sections/4. Important points to remember/4.1. Generics checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by generic misunderstandings.md](<08 Generics Deep Dive/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by generic misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/6. Interview questions and answers/6.1. Common interview QA generics deep dive.md](<08 Generics Deep Dive/sections/6. Interview questions and answers/6.1. Common interview QA generics deep dive.md>) | SCAN | 0/0/0 | FAIL |
| [08 Generics Deep Dive/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<08 Generics Deep Dive/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/README.md](<09 Utility Types and Type Transformations/README.md>) | SCAN | — | not a leaf |
| [09 Utility Types and Type Transformations/sections/1. Mapped Types/1.1. Mapped type fundamentals homomorphic mapping over keys.md](<09 Utility Types and Type Transformations/sections/1. Mapped Types/1.1. Mapped type fundamentals homomorphic mapping over keys.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/1. Mapped Types/1.2. readonly and optional modifiers with plus and minus.md](<09 Utility Types and Type Transformations/sections/1. Mapped Types/1.2. readonly and optional modifiers with plus and minus.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/1. Mapped Types/1.3. keyof constrained mapping and template literal keys.md](<09 Utility Types and Type Transformations/sections/1. Mapped Types/1.3. keyof constrained mapping and template literal keys.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/2. Conditional Types/2.1. Conditional fundamentals distributive law and never branches.md](<09 Utility Types and Type Transformations/sections/2. Conditional Types/2.1. Conditional fundamentals distributive law and never branches.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md](<09 Utility Types and Type Transformations/sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md](<09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.1. Deep transforms DeepPartial DeepReadonly and the budget.md](<09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.1. Deep transforms DeepPartial DeepReadonly and the budget.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.2. Template literal composition Capitalize handlers and routes.md](<09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.2. Template literal composition Capitalize handlers and routes.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.3. satisfies and as const preserving literals through transforms.md](<09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.3. satisfies and as const preserving literals through transforms.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/4. Important points to remember/4.1. Utility checklist mental models mentors insist on.md](<09 Utility Types and Type Transformations/sections/4. Important points to remember/4.1. Utility checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by transform misunderstandings.md](<09 Utility Types and Type Transformations/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by transform misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/6. Interview questions and answers/6.1. Common interview QA utility types and transformations.md](<09 Utility Types and Type Transformations/sections/6. Interview questions and answers/6.1. Common interview QA utility types and transformations.md>) | SCAN | 0/0/0 | FAIL |
| [09 Utility Types and Type Transformations/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<09 Utility Types and Type Transformations/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/README.md](<10 Arrays Tuples and Collections/README.md>) | SCAN | — | not a leaf |
| [10 Arrays Tuples and Collections/sections/1. Array Types/1.1. Array type syntax and element checking.md](<10 Arrays Tuples and Collections/sections/1. Array Types/1.1. Array type syntax and element checking.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/1. Array Types/1.2. Readonly arrays and mutable vs frozen arrays.md](<10 Arrays Tuples and Collections/sections/1. Array Types/1.2. Readonly arrays and mutable vs frozen arrays.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/1. Array Types/1.3. Array methods map filter reduce typed precisely.md](<10 Arrays Tuples and Collections/sections/1. Array Types/1.3. Array methods map filter reduce typed precisely.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/2. Tuple Types/2.1. Fixed arity tuples labels and optional elements.md](<10 Arrays Tuples and Collections/sections/2. Tuple Types/2.1. Fixed arity tuples labels and optional elements.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/2. Tuple Types/2.2. as const tuples literal inference and readonly.md](<10 Arrays Tuples and Collections/sections/2. Tuple Types/2.2. as const tuples literal inference and readonly.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/2. Tuple Types/2.3. Destructuring tuples inference and rest elements.md](<10 Arrays Tuples and Collections/sections/2. Tuple Types/2.3. Destructuring tuples inference and rest elements.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md](<10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.2. Record vs Map indexed access vs hashed keys.md](<10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.2. Record vs Map indexed access vs hashed keys.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.3. Choosing Array Tuple ReadonlyArray and readonly tuples.md](<10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.3. Choosing Array Tuple ReadonlyArray and readonly tuples.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/4. Important points to remember/4.1. Collections checklist mental models mentors insist on.md](<10 Arrays Tuples and Collections/sections/4. Important points to remember/4.1. Collections checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by collection misunderstandings.md](<10 Arrays Tuples and Collections/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by collection misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/6. Interview questions and answers/6.1. Common interview QA arrays tuples and collections.md](<10 Arrays Tuples and Collections/sections/6. Interview questions and answers/6.1. Common interview QA arrays tuples and collections.md>) | SCAN | 0/0/0 | FAIL |
| [10 Arrays Tuples and Collections/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<10 Arrays Tuples and Collections/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/README.md](<11 Enums and Literal Types/README.md>) | SCAN | — | not a leaf |
| [11 Enums and Literal Types/sections/1. Enum Mechanics/1.1. Numeric enums auto values and reverse mapping.md](<11 Enums and Literal Types/sections/1. Enum Mechanics/1.1. Numeric enums auto values and reverse mapping.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/1. Enum Mechanics/1.2. String enums intent and no reverse mapping.md](<11 Enums and Literal Types/sections/1. Enum Mechanics/1.2. String enums intent and no reverse mapping.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/1. Enum Mechanics/1.3. Heterogeneous ambient and computed members.md](<11 Enums and Literal Types/sections/1. Enum Mechanics/1.3. Heterogeneous ambient and computed members.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.1. const enum inlining and isolatedModules danger.md](<11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.1. const enum inlining and isolatedModules danger.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.2. erasableSyntaxOnly the enum ban and migration.md](<11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.2. erasableSyntaxOnly the enum ban and migration.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.3. Literal unions as enums the decision rule.md](<11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.3. Literal unions as enums the decision rule.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.1. const type parameters and literal preservation.md](<11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.1. const type parameters and literal preservation.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.2. Exhaustive switches over enums and unions.md](<11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.2. Exhaustive switches over enums and unions.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.3. Nominal enum patterns branding vs enums.md](<11 Enums and Literal Types/sections/3. Literals and Nominal Patterns/3.3. Nominal enum patterns branding vs enums.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/4. Important points to remember/4.1. Enums checklist mental models mentors insist on.md](<11 Enums and Literal Types/sections/4. Important points to remember/4.1. Enums checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by enum misunderstandings.md](<11 Enums and Literal Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by enum misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/6. Interview questions and answers/6.1. Common interview QA enums and literal types.md](<11 Enums and Literal Types/sections/6. Interview questions and answers/6.1. Common interview QA enums and literal types.md>) | SCAN | 0/0/0 | FAIL |
| [11 Enums and Literal Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<11 Enums and Literal Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/README.md](<12 Modules Namespaces and Declaration Files/README.md>) | SCAN | — | not a leaf |
| [12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md](<12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md](<12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.3. export equals and interop with CommonJS.md](<12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.1. Namespaces organization and when to avoid.md](<12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.1. Namespaces organization and when to avoid.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.2. declare global and global augmentation.md](<12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.2. declare global and global augmentation.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.3. Ambient modules declare module wildcards.md](<12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.3. Ambient modules declare module wildcards.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md](<12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.2. Module augmentation at file scale.md](<12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.2. Module augmentation at file scale.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md](<12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/4. Important points to remember/4.1. Modules checklist mental models mentors insist on.md](<12 Modules Namespaces and Declaration Files/sections/4. Important points to remember/4.1. Modules checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by module misunderstandings.md](<12 Modules Namespaces and Declaration Files/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by module misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/6. Interview questions and answers/6.1. Common interview QA modules namespaces and declaration files.md](<12 Modules Namespaces and Declaration Files/sections/6. Interview questions and answers/6.1. Common interview QA modules namespaces and declaration files.md>) | SCAN | 0/0/0 | FAIL |
| [12 Modules Namespaces and Declaration Files/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<12 Modules Namespaces and Declaration Files/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/README.md](<13 Configuration and Compiler Options/README.md>) | SCAN | — | not a leaf |
| [13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md](<13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/1. Strictness Family/1.2. noImplicitAny and useUnknownInCatchVariables.md](<13 Configuration and Compiler Options/sections/1. Strictness Family/1.2. noImplicitAny and useUnknownInCatchVariables.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md](<13 Configuration and Compiler Options/sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md](<13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.2. verbatimModuleSyntax predictable emit.md](<13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.2. verbatimModuleSyntax predictable emit.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md](<13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>) | FULL | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md](<13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.2. declaration composite project references.md](<13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes.md](<13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md](<13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by configuration misunderstandings.md](<13 Configuration and Compiler Options/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by configuration misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/6. Interview questions and answers/6.1. Common interview QA configuration and compiler options.md](<13 Configuration and Compiler Options/sections/6. Interview questions and answers/6.1. Common interview QA configuration and compiler options.md>) | SCAN | 0/0/0 | FAIL |
| [13 Configuration and Compiler Options/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<13 Configuration and Compiler Options/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/README.md](<14 Decorators and Metadata/README.md>) | SCAN | — | not a leaf |
| [14 Decorators and Metadata/sections/1. Standard Decorators/1.1. TC39 standard decorators classes methods fields.md](<14 Decorators and Metadata/sections/1. Standard Decorators/1.1. TC39 standard decorators classes methods fields.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/1. Standard Decorators/1.2. Decorator evaluation and application order.md](<14 Decorators and Metadata/sections/1. Standard Decorators/1.2. Decorator evaluation and application order.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/1. Standard Decorators/1.3. Practical class decorators registration and mixins.md](<14 Decorators and Metadata/sections/1. Standard Decorators/1.3. Practical class decorators registration and mixins.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/2. Legacy and Metadata/2.2. emitDecoratorMetadata and design types.md](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.2. emitDecoratorMetadata and design types.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/2. Legacy and Metadata/2.3. Symbol.metadata and the metadata proposal.md](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.3. Symbol.metadata and the metadata proposal.md>) | FULL | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/3. Patterns in Practice/3.1. Validation decorators field rules.md](<14 Decorators and Metadata/sections/3. Patterns in Practice/3.1. Validation decorators field rules.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/3. Patterns in Practice/3.2. Logging timing and memoization decorators.md](<14 Decorators and Metadata/sections/3. Patterns in Practice/3.2. Logging timing and memoization decorators.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md](<14 Decorators and Metadata/sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/4. Important points to remember/4.1. Decorators checklist mental models mentors insist on.md](<14 Decorators and Metadata/sections/4. Important points to remember/4.1. Decorators checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by decorator misunderstandings.md](<14 Decorators and Metadata/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by decorator misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/6. Interview questions and answers/6.1. Common interview QA decorators and metadata.md](<14 Decorators and Metadata/sections/6. Interview questions and answers/6.1. Common interview QA decorators and metadata.md>) | SCAN | 0/0/0 | FAIL |
| [14 Decorators and Metadata/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<14 Decorators and Metadata/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/README.md](<15 Strictness Errors and Validation/README.md>) | SCAN | — | not a leaf |
| [15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md](<15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/1. Assertion Functions/1.2. Type predicates vs assertions caller vs thrower.md](<15 Strictness Errors and Validation/sections/1. Assertion Functions/1.2. Type predicates vs assertions caller vs thrower.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/1. Assertion Functions/1.3. satisfies as a validation gate.md](<15 Strictness Errors and Validation/sections/1. Assertion Functions/1.3. satisfies as a validation gate.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.1. Error as value Result Ok Err patterns.md](<15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.1. Error as value Result Ok Err patterns.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.2. Custom error classes cause and stacks.md](<15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.2. Custom error classes cause and stacks.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.3. Never-throw boundaries and error budgets.md](<15 Strictness Errors and Validation/sections/2. Error Values and Hierarchies/2.3. Never-throw boundaries and error budgets.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.1. Hand-rolled schemas parse validate narrow.md](<15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.1. Hand-rolled schemas parse validate narrow.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.2. Schema objects and inferred types.md](<15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.2. Schema objects and inferred types.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md](<15 Strictness Errors and Validation/sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/4. Important points to remember/4.1. Validation checklist mental models mentors insist on.md](<15 Strictness Errors and Validation/sections/4. Important points to remember/4.1. Validation checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by validation misunderstandings.md](<15 Strictness Errors and Validation/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by validation misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/6. Interview questions and answers/6.1. Common interview QA strictness errors and validation.md](<15 Strictness Errors and Validation/sections/6. Interview questions and answers/6.1. Common interview QA strictness errors and validation.md>) | SCAN | 0/0/0 | FAIL |
| [15 Strictness Errors and Validation/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<15 Strictness Errors and Validation/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/README.md](<16 Tooling Language Server and Ecosystem/README.md>) | SCAN | — | not a leaf |
| [16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.1. Navigation go to definition find references.md](<16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.1. Navigation go to definition find references.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.2. Rename refactorings and code actions.md](<16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.2. Rename refactorings and code actions.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md](<16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.1. typescript-eslint rules and type-aware linting.md](<16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.1. typescript-eslint rules and type-aware linting.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.2. Prettier dprint and formatting discipline.md](<16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.2. Prettier dprint and formatting discipline.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.3. publint attw and package health checks.md](<16 Tooling Language Server and Ecosystem/sections/2. Lint Format and Checks/2.3. publint attw and package health checks.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md](<16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.2. Playground twoslash and documentation snippets.md](<16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.2. Playground twoslash and documentation snippets.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md](<16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/4. Important points to remember/4.1. Tooling checklist mental models mentors insist on.md](<16 Tooling Language Server and Ecosystem/sections/4. Important points to remember/4.1. Tooling checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by tooling misunderstandings.md](<16 Tooling Language Server and Ecosystem/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by tooling misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/6. Interview questions and answers/6.1. Common interview QA tooling language server and ecosystem.md](<16 Tooling Language Server and Ecosystem/sections/6. Interview questions and answers/6.1. Common interview QA tooling language server and ecosystem.md>) | SCAN | 0/0/0 | FAIL |
| [16 Tooling Language Server and Ecosystem/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<16 Tooling Language Server and Ecosystem/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/README.md](<17 Testing Types/README.md>) | SCAN | — | not a leaf |
| [17 Testing Types/sections/1. Type Assertions in Tests/1.1. Expect Equal and compile-time type assertions.md](<17 Testing Types/sections/1. Type Assertions in Tests/1.1. Expect Equal and compile-time type assertions.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/1. Type Assertions in Tests/1.2. tsd expect-type and type-testing libraries.md](<17 Testing Types/sections/1. Type Assertions in Tests/1.2. tsd expect-type and type-testing libraries.md>) | FULL | 0/0/0 | FAIL |
| [17 Testing Types/sections/1. Type Assertions in Tests/1.3. Negative type tests with ts-expect-error.md](<17 Testing Types/sections/1. Type Assertions in Tests/1.3. Negative type tests with ts-expect-error.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/2. Typed Test Doubles/2.1. Mocking functions with full type safety.md](<17 Testing Types/sections/2. Typed Test Doubles/2.1. Mocking functions with full type safety.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/2. Typed Test Doubles/2.2. Spies stubs and fakes over generics.md](<17 Testing Types/sections/2. Typed Test Doubles/2.2. Spies stubs and fakes over generics.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md](<17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/3. Type Tests in Practice/3.1. Testing generics and conditional types.md](<17 Testing Types/sections/3. Type Tests in Practice/3.1. Testing generics and conditional types.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/3. Type Tests in Practice/3.2. Testing declaration files and public API surface.md](<17 Testing Types/sections/3. Type Tests in Practice/3.2. Testing declaration files and public API surface.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md](<17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/4. Important points to remember/4.1. Type-testing checklist mental models mentors insist on.md](<17 Testing Types/sections/4. Important points to remember/4.1. Type-testing checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type-testing misunderstandings.md](<17 Testing Types/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type-testing misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/6. Interview questions and answers/6.1. Common interview QA testing types.md](<17 Testing Types/sections/6. Interview questions and answers/6.1. Common interview QA testing types.md>) | SCAN | 0/0/0 | FAIL |
| [17 Testing Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<17 Testing Types/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/README.md](<18 Async Types and Standard Library/README.md>) | SCAN | — | not a leaf |
| [18 Async Types and Standard Library/sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md](<18 Async Types and Standard Library/sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/1. Promise Types/1.2. Awaited recursive unwrapping and thenables.md](<18 Async Types and Standard Library/sections/1. Promise Types/1.2. Awaited recursive unwrapping and thenables.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/1. Promise Types/1.3. async function return-type contracts.md](<18 Async Types and Standard Library/sections/1. Promise Types/1.3. async function return-type contracts.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.1. all race allSettled any typed precisely.md](<18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.1. all race allSettled any typed precisely.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.2. AbortSignal propagation and cancellation contracts.md](<18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.2. AbortSignal propagation and cancellation contracts.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.3. Sequential vs parallel patterns and tuple typing.md](<18 Async Types and Standard Library/sections/2. Combinators and Cancellation/2.3. Sequential vs parallel patterns and tuple typing.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md](<18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>) | FULL | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.2. AsyncIterable generators and for-await.md](<18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.2. AsyncIterable generators and for-await.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.3. Timers queues and the event-loop type view.md](<18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.3. Timers queues and the event-loop type view.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/4. Important points to remember/4.1. Async checklist mental models mentors insist on.md](<18 Async Types and Standard Library/sections/4. Important points to remember/4.1. Async checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by async misunderstandings.md](<18 Async Types and Standard Library/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by async misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/6. Interview questions and answers/6.1. Common interview QA async types and standard library.md](<18 Async Types and Standard Library/sections/6. Interview questions and answers/6.1. Common interview QA async types and standard library.md>) | SCAN | 0/0/0 | FAIL |
| [18 Async Types and Standard Library/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<18 Async Types and Standard Library/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/README.md](<19 Performance Project References and Scaling/README.md>) | SCAN | — | not a leaf |
| [19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md](<19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.2. Instantiation budgets and TS2589 carve-outs.md](<19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.2. Instantiation budgets and TS2589 carve-outs.md>) | FULL | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.3. Hot-spot discipline mapped conditional and union cost.md](<19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.3. Hot-spot discipline mapped conditional and union cost.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/2. Project References and Builds/2.1. Composite partitioning and references architecture.md](<19 Performance Project References and Scaling/sections/2. Project References and Builds/2.1. Composite partitioning and references architecture.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md](<19 Performance Project References and Scaling/sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md](<19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.1. Codebase partitioning boundaries layers and barrels.md](<19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.1. Codebase partitioning boundaries layers and barrels.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.2. Type-only boundaries import type bulk and erasable scale.md](<19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.2. Type-only boundaries import type bulk and erasable scale.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.3. Editor performance at scale budgets and tuning.md](<19 Performance Project References and Scaling/sections/3. Scaling Patterns/3.3. Editor performance at scale budgets and tuning.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/4. Important points to remember/4.1. Performance checklist mental models mentors insist on.md](<19 Performance Project References and Scaling/sections/4. Important points to remember/4.1. Performance checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by scaling misunderstandings.md](<19 Performance Project References and Scaling/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by scaling misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/6. Interview questions and answers/6.1. Common interview QA performance project references and scaling.md](<19 Performance Project References and Scaling/sections/6. Interview questions and answers/6.1. Common interview QA performance project references and scaling.md>) | SCAN | 0/0/0 | FAIL |
| [19 Performance Project References and Scaling/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<19 Performance Project References and Scaling/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/README.md](<20 Production Checklist Migration and Interoperability/README.md>) | SCAN | — | not a leaf |
| [20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.1. Pre-release type gates all green.md](<20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.1. Pre-release type gates all green.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.2. Strictness and configuration audits.md](<20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.2. Strictness and configuration audits.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.3. Observability hooks error reporting and health.md](<20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.3. Observability hooks error reporting and health.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.1. JavaScript to TypeScript file by file.md](<20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.1. JavaScript to TypeScript file by file.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md](<20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>) | FULL | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.3. Loose to strict sequencing.md](<20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.3. Loose to strict sequencing.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.1. allowJs checkJs and JSDoc-typed JavaScript.md](<20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.1. allowJs checkJs and JSDoc-typed JavaScript.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.2. Environment-portable code node browser edge.md](<20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.2. Environment-portable code node browser edge.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.3. Declaration-first consumption of untyped JavaScript.md](<20 Production Checklist Migration and Interoperability/sections/3. Interop and Portable Code/3.3. Declaration-first consumption of untyped JavaScript.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/4. Important points to remember/4.1. Production checklist mental models mentors insist on.md](<20 Production Checklist Migration and Interoperability/sections/4. Important points to remember/4.1. Production checklist mental models mentors insist on.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by production misunderstandings.md](<20 Production Checklist Migration and Interoperability/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by production misunderstandings.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/6. Interview questions and answers/6.1. Common interview QA production migration and interop.md](<20 Production Checklist Migration and Interoperability/sections/6. Interview questions and answers/6.1. Common interview QA production migration and interop.md>) | SCAN | 0/0/0 | FAIL |
| [20 Production Checklist Migration and Interoperability/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md](<20 Production Checklist Migration and Interoperability/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | SCAN | 0/0/0 | FAIL |
| [21 Update TypeScript 5.6/README.md](<21 Update TypeScript 5.6/README.md>) | FULL | — | not a leaf |
| [22 Update TypeScript 5.7/README.md](<22 Update TypeScript 5.7/README.md>) | FULL | — | not a leaf |
| [23 Update TypeScript 5.8/README.md](<23 Update TypeScript 5.8/README.md>) | FULL | — | not a leaf |
| [24 Update TypeScript 5.9 and 6.0/README.md](<24 Update TypeScript 5.9 and 6.0/README.md>) | FULL | — | not a leaf |
| [LOG.md](<LOG.md>) | FULL | — | not a leaf |
| [README.md](<README.md>) | FULL | — | not a leaf |

## Appendix B. Actual verification and reproducible method

Tests ran from `/tmp/typescript-review-repro`, outside the repository. `tsc --version` printed `Version 7.0.2`; `node --version` printed `v20.20.2`; `npm exec --yes --package=node@22.18.0 -- node --version` printed `v22.18.0`.

For original fences, extraction preserved the TypeScript code verbatim. Metadata fence 1, metadata fence 8 (bridge), and type-library fence 1 used:

```text
tsc --strict --target es2022 --module commonjs --lib esnext,dom --outDir out FILE.ts
node out/FILE.js
```

All three compiled (exit 0). Observed runtime outcomes:

| Reproduction | Result |
|---|---|
| metadata first fence, Node 20.20.2 | exit 0; `undefined` (expected `/users`) |
| same emitted metadata, Node 22.18.0 | exit 0; `undefined` |
| metadata after symbol initialization before require | exit 0; `/users` |
| bridge fence | exit 0; `unmarked` (expected `v1`) |
| type-tool first fence | exit 1; ReferenceError for assertType |
| original checklist fence plus `handle({id:1,name:123})` | compile exit 0; runtime exit 1 TypeError |
| trio first multi-file fence, supplied .ts files, direct Node 22.18.0 | exit 1; ERR_MODULE_NOT_FOUND for kinds131.js |
| original metadata source under Node 22.18.0 transform-types | exit 1; SyntaxError at decorator |
| type alias plus interface | checker exit 1; TS2300 |
| Array.isArray followed by arbitrary element method | checker exit 0; unchecked operation accepted |
| parameter property with erasableSyntaxOnly | checker exit 1; TS1294 |
| Map<string,number>.getOrInsert with factory | checker exit 1; TS2345 |
| --stopOnBuildErrors on checker 7.0.2 | exit 1; TS5023 |
| --instantiationDepth 200 on checker 7.0.2 | exit 1; TS5023 |

The additional source-execution checks used the original first metadata fence and the first trio fence split at its `// file:` markers into `app131.ts` and `kinds131.ts`, without supplying an emitted `.js` file:

```text
npm exec --yes --package=node@22.18.0 -- node out/metadata.js
npm exec --yes --package=node@22.18.0 -- node --experimental-transform-types metadata.ts
npm exec --yes --package=node@22.18.0 -- node app131.ts
tsc --stopOnBuildErrors --noEmit gate.ts
tsc --instantiationDepth 200 --noEmit gate.ts
```

Fresh minimal diagnostic inputs (intentional failures) are reproducible as follows:

```typescript
// duplicates.ts — tsc --strict --noEmit duplicates.ts
type A = { x: number }; interface A { y: number }
```

```typescript
// array-guard.ts — tsc --strict --noEmit array-guard.ts
export {};
const raw: unknown = [1];
if (Array.isArray(raw)) raw[0].missingMethod();
```

```typescript
// gate.ts — tsc --strict --erasableSyntaxOnly --noEmit gate.ts
class Example { constructor(public value: number) {} }
```

```typescript
// map.ts — tsc --strict --target es2022 --lib esnext --noEmit map.ts
const m = new Map<string, number>();
m.getOrInsert("x", () => 3);
```

Symbol-initialized comparison (executed only in the scratch process):

```text
node -e "Object.defineProperty(Symbol, 'metadata', {value: Symbol('metadata')}); require('./out/metadata.js');"
```

Structural scan: enumerate `rglob('*.md')`, classify `/sections/` leaves, match `^### (number)) **Label**`, require exactly one of each required label in order, compare `## filename-prefix`, inspect angle links with `\[[^\]\n]*\]\(<([^>]+)>\)` and resolve relative targets from each file's parent. This intentionally does not parse all Markdown; F13 records that limitation rather than certifying malformed links.

**Not executed:** all remaining fences, real tsd/Vitest suites, bundler/tool/editor integrations, live production deployments, cross-engine metadata support, performance benchmarks, a two-project build-error integration test, and all existing curriculum exercises. Closed-log claims of these checks are not new results. No benchmark was mentally simulated or reported as run.

## 7. Checkpoint

Phase: **REVIEW_REPORT**. Revision: **1**. Approval: **pending**. Status: **PARTIAL**, deliberately awaiting approval. Known sampled findings are ready for review; full substantive review of the unsampled scope remains outstanding. Approval of accepted repair outcomes persists across later sessions; continuation alone does not approve this report.
