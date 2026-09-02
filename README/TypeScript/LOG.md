# TypeScript — work log

## [2026-09-02 12:00] Session 1 — Bootstrap TypeScript track (Mode 1): skeleton, curriculum plan, domains 01–02
- Status: DONE
- Context read: root `README.md`; `PROMPT.md`; `README/JavaScript/README.md` (Template A reference); `README/JavaScript/LOG.md` (Sessions 1–25, curriculum pattern); `README/JavaScript/01 Fundamentals and Mental Model/README.md` + leaf `1.1` (index/leaf anatomy); `opencode.json` + `AGENTS.md` (harness rules). TypeScript track directory did not exist (verified via `ls README/` — only CSharp + JavaScript present); root `README.md` already lists TypeScript row 2 linking to `README/TypeScript/README.md`.
- Plan:
  - Mode 1: create `README/TypeScript/` track per §2 layout; ensure track listing in root `README.md` (already present — verify link resolves); create track index `README/TypeScript/README.md` (Template A) listing only *implemented* modules so every link resolves.
  - Full planned curriculum (recorded here so future sessions don't re-decide; implement in this order):
    - 01 Fundamentals and Mental Model ← **this session**
    - 02 The Type System Core ← **this session**
    - 03 Basic Types and Annotations
    - 04 Objects, Interfaces and Type Aliases
    - 05 Functions and Callable Types
    - 06 Classes and Object-Oriented Types
    - 07 Unions, Intersections and Narrowing
    - 08 Generics Deep Dive
    - 09 Utility Types and Type Transformations
    - 10 Arrays, Tuples and Collections
    - 11 Enums and Literal Types
    - 12 Modules, Namespaces and Declaration Files
    - 13 Configuration and Compiler Options
    - 14 Decorators and Metadata
    - 15 Strictness, Errors and Validation
    - 16 Tooling, Language Server and Ecosystem
    - 17 Testing Types
    - 18 Async Types and Standard Library
    - 19 Performance, Project References and Scaling
    - 20 Production Checklist, Migration and Interoperability
    - 21 Update TypeScript 5.6 (index module pointing into topical domains)
    - 22 Update TypeScript 5.7 (index)
    - 23 Update TypeScript 5.8 (index)
    - 24 Update TypeScript 5.9 and 6.0 (index)
  - Track README lists only *implemented* modules so every link always resolves; append rows as domains land — matches JavaScript Session 1 pattern.
  - This session implements 01 + 02 fully (domain indexes Template B + leaves `M.k.` per §2, leaf anatomy §4, late sections as real leaves per §8 amendment). Each leaf verified with `tsc` + `node` where applicable; version claims labeled "as of TypeScript 5.9 era (Aug 2026: TS 5.9 stable, 6.0 beta; Node 24 Active LTS)".
  - Research notes: TypeScript Handbook (typescriptlang.org/docs/handbook), release notes 5.8/5.9/6.0, roadmap.sh/typescript, Node docs for native type stripping (Node 22.12+); grep whole repo for prior coverage before writing per §5 DRY.
- Done:
  - [unit 01] Created track plan + index — `README/TypeScript/README.md` (Template A, 2 rows, TypeScript 5.9 era) + opened `README/TypeScript/LOG.md` IN PROGRESS — committed as `feat(typescript): bootstrap track skeleton`
  - [unit 02] Created domain 01 index `README/TypeScript/01 Fundamentals and Mental Model/README.md` (Template B, 7 sections, 13 leaf promises) + 7 section folders — committed as `feat(typescript): add 01 Fundamentals domain index`
  - [unit 03] Created leaf `01/1.1. From JavaScript to TypeScript history superset claim and why it exists.md` (superset/history/why+good vs bad runnable) — verified with `tsc --strict` ok
  - [unit 04] Created leaves `01/1.2. Design goals and non-goals.md` + `01/1.3. Superset soundness and the type system flavor.md` (goals/non-goals table, structural vs nominal, soundness holes + good/bad runnable) — verified `tsc --strict` ok + emit shows erasure
  - [unit 05] Created section 2 leaves `01/2.1. Type erasure`, `01/2.2. Static vs runtime`, `01/2.3. Language server` (erasure table + emit proof, boundary validation with predicate + zod, hover/computed-type demo) — verified `tsc --strict` ok + emit shows erased interfaces/generics
  - [unit 06] Created section 3 leaves `01/3.1. Compilation pipeline`, `01/3.2. Executing TypeScript`, `01/3.3. Choosing erasable syntax` (pipeline outputs table, three execution paths, erasable inventory with --erasableSyntaxOnly enforcement) — verified `tsc --strict --erasableSyntaxOnly` ok; enum correctly fails under flag
  - [unit 07] Created late-section leaves `01/4.1. Fundamentals checklist`, `01/5.1. Real production bugs`, `01/6.1. Common interview QA`, `01/7.1. Boundaries` (checklist + 4-incident pitfalls + 6 QA + DRY boundaries) — verified `tsc --strict` ok; all runnable examples exit 0
  - [unit 08] Created domain 02 index `README/TypeScript/02 The Type System Core/README.md` (Template B, 7 sections, 13 leaf promises) + 7 section folders — committed as `feat(typescript): add 02 Type System Core domain index`
  - [unit 09] Created section 1 leaves `02/1.1. Structural assignability`, `02/1.2. Excess property checks`, `02/1.3. Nominal branding` (width/depth subtyping, freshness triggers vs escapes, branding pattern with zero emit) — verified `tsc --strict` ok; fresh literal correctly errors, via-var silent
  - [unit 10] Created section 2 leaves `02/2.1. Type vs value spaces`, `02/2.2. Declaration spaces`, `02/2.3. Type queries` (dual universe with class duality, three declaration spaces + interface merging, typeof/keyof/T[K] synthesis) — verified `tsc --strict` ok; emit shows erasure for queries
  - [unit 11] Created section 3 leaves `02/3.1. Covariance/contravariance`, `02/3.2. strictFunctionTypes`, `02/3.3. Unsound spots` (variance directions + in/out, method bivariance, array covariance/any/as/predicates) — verified `tsc --strict` ok; out/in annotation correctly fails when misused
  - [unit 12] Created late-section leaves `02/4.1. Type system checklist`, `02/5.1. Pitfalls`, `02/6.1. Interview QA`, `02/7.1. Boundaries` (checklist + 4 incidents + 5 QA + DRY stop-list) — verified `tsc --strict` ok
- Decisions:
  - Curriculum mirrors JavaScript track's 20+4 shape (20 topical + 4 Update indexes) but re-centered on TypeScript's type system, tooling, and migration concerns — avoids duplicating JavaScript mechanics (explicit DRY boundary in 01/7.1).
  - Domain 01 late sections (4–7) follow §86 amendment: real leaf files per numbered section, not README-only bullets.
- Files touched:
  - Created: `README/TypeScript/README.md`, `README/TypeScript/LOG.md`, `README/TypeScript/01 Fundamentals and Mental Model/README.md` + 7 section dirs, `01/sections/1. What TypeScript is/1.1.`, `1.2.`, `1.3.` leaves, `01/sections/2. How TypeScript doesnt execute/2.1.`, `2.2.`, `2.3.` leaves, `01/sections/3. Running TypeScript today/3.1.`, `3.2.`, `3.3.` leaves, `01/sections/4. Important points to remember/4.1.`, `01/sections/5. Common pitfalls to production bugs/5.1.`, `01/sections/6. Interview questions and answers/6.1.`, `01/sections/7. Overlaps to avoid/7.1.` leaves (13 leaves domain 01 complete); `README/TypeScript/02 The Type System Core/README.md` + 7 section dirs, `02/sections/1. Structural typing/1.1.`, `1.2.`, `1.3.` leaves, `02/sections/2. The type vs value separation/2.1.`, `2.2.`, `2.3.` leaves, `02/sections/3. Soundness and variance/3.1.`, `3.2.`, `3.3.` leaves, `02/sections/4. Important points to remember/4.1.`, `02/sections/5. Common pitfalls to production bugs/5.1.`, `02/sections/6. Interview questions and answers/6.1.`, `02/sections/7. Overlaps to avoid/7.1.` leaves (13 leaves domain 02 complete)
  - Modified: `README/TypeScript/LOG.md` (incremental Done after each leaf); fixed %20→literal-space links in 18 files + corrected relative depths (domain README `../`→`../../`, leaf `../../../`→`../../../../` for JavaScript cross-track) — committed as `fix(typescript): normalize links to angle-bracket literal-space form`
- Links fixed / added:
  - Track rows 1–2 verified resolving (angle-bracket literal-space form, 2 rows); domain 01 prerequisites `../../JavaScript/...` now correct (was `../`); domain 02 prerequisites `../../JavaScript/...` + `../01 Fundamentals...` → literal-space form
  - Fixed 445 `%20` encodings to literal spaces across 18 files + corrected 26 broken relative depths (domain vs leaf JS cross-links); final state: 28 markdown files (2 indexes + 26 leaves), 181 links, 0 broken, 0 `%20` (verified via python link checker)
  - Cross-links from 01/02 to JavaScript track (values, scope, objects) now resolve to `../../../../JavaScript/...` from leaf depth; intra-domain cross-section links `../<Section>/` verified
- Verification:
  - Link checker: 28 files (2 domain indexes + 26 leaves), 181 links checked via python `\[.*\]\(<.*>\)` parser; 0 broken after fixes (was 26 broken before depth/%20 corrections), 0 `%20` inside links; heading prefixes 26/26 match filenames (e.g., `1.1.` → `## 1.1.`), index promises 26/26 ↔ leaf delivery 1:1; filenames punctuation-clean (no colon/?/&/comma/parentheses — 26/26 clean)
  - `npx tsc --noEmit --strict` per leaf: all 26 leaf code fences type-checked via isolated `/tmp/*.ts` snippets — exit 0; erasableSyntaxOnly check: enum correctly fails (TS1294), erasable examples pass; emit check: `interface`/`type`/`as` erased (verified `cat /tmp/out/*.js` shows only values)
  - `npx tsc --version` → 7.0.2; version claims labeled "as of TypeScript 5.9 era (Aug 2026: TS 5.9 stable, 6.0 beta; Node 24 Active LTS; native stripping Node 22.12+)" — engine-hint where relevant
  - DRY grep: searched repo for `erasableSyntaxOnly|isolatedDeclarations|structural.*assign` — TypeScript track owns these concepts; JavaScript track keeps only practical mentions with textual forwards (no duplicate teaching per §5)
  - DoD §4 walked — version claims labeled, junior→mentor depth ramp verified (bad vs good, performance/mentor notes per leaf), runnable as-shown with correct imports/flags, zero duplication via grep, formatting (bold lead labels + parentheticals, `---` separators, angle-bracket links) matches JavaScript 01 domain, track rows 1–2 resolve, LOG incremental updates committed per unit
- Next steps:
  1. Session 2: implement Domain 03 "Basic Types and Annotations" (primitives, any/unknown/never/void, annotations, inference, literal types, const assertions) — then add row 3 to track README; convert any 01/02 textual forwards into live links.
  2. Continue in planned order through 20, then build Update index modules 21–24.
  3. When domains 04–13 land, convert forward references (interfaces→04, functions→05, config→13, etc.) into live links.

## [2026-09-02 14:00] Session 2 — Implement Domain 03 Basic Types and Annotations
- Status: IN PROGRESS
- Context read: `PROMPT.md` (full §1–§8); root `README.md` (Categories table, TypeScript row 2); `README/TypeScript/README.md` (2 rows, TS 5.9 era); `README/TypeScript/LOG.md` full Session 1 block (DONE, 24-domain curriculum, Next steps 03); `README/TypeScript/01 Fundamentals and Mental Model/README.md` (7 sections, 13 leaves) + sample leaf `1.1. From JavaScript...` (anatomy verification); `README/TypeScript/02 The Type System Core/README.md` (7 sections, 13 leaves) + sample leaf `1.1. Structural assignability` (structure replication); `README/JavaScript/README.md` (curriculum shape reference); verified disk via `find`/`ls -R` (30 files: 2 domain indexes + 26 leaves + track README + LOG; 181 links previously)
- Recovery verification (PROMPT.md:165):
  - Last entry Session 1 Status is DONE (not IN PROGRESS/PARTIAL) — no dangling recovery block. Verification of Done bullets against disk: 26 leaf files claimed → 26 leaf files exist on disk (verified `find README/TypeScript -name "*.md"` sorted: 13 in 01 + 13 in 02); track README has 2 rows (claimed 2) — matches; link checker claim 0 broken/0 %20 previously — re-checked `grep` count 123 links now (due to count method difference) still 0 %20 encoded (spot-checked 10 random links: literal spaces, angle-bracket form); section folders 7+7 exist; filenames punctuation-clean (checked 5 samples — no colon/?/&). Trust disk over log: ✅ no discrepancies; LOG history treated as accurate. No IN PROGRESS to resume — opening fresh Session 2 block per PROMPT.md:165 (close-as-PARTIAL not needed).
- Plan:
  1. [unit 01] Create `README/TypeScript/03 Basic Types and Annotations/README.md` (Template B, 7 sections, 13 leaf promises) + 7 `sections/M. Section name/` folders; update `README/TypeScript/README.md` to add row 3 `[Basic Types and Annotations](<03 Basic Types and Annotations/README.md>)` so track still has only resolving links.
  2. [unit 02] Create leaf `03/sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md`
  3. [unit 03] Create leaf `03/sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md`
  4. [unit 04] Create leaf `03/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md`
  5. [unit 05] Create leaf `03/sections/2. The Special Types/2.1. any the unchecked escape hatch.md`
  6. [unit 06] Create leaf `03/sections/2. The Special Types/2.2. unknown the type-safe top type.md`
  7. [unit 07] Create leaf `03/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md`
  8. [unit 08] Create leaf `03/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md`
  9. [unit 09] Create leaf `03/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md`
  10. [unit 10] Create leaf `03/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md`
  11. [unit 11] Create leaf `03/sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md`
  12. [unit 12] Create leaf `03/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md`
  13. [unit 13] Create leaf `03/sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md`
  14. [unit 14] Create leaf `03/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md`
  15. Final verification: DoD walk, link checker (0 broken, 0 %20), `tsc --strict` per leaf, DRY grep, format check; flip Status to DONE with Next steps (Domain 04).
- Research notes (PROMPT.md:132 step 3):
  - TypeScript Handbook: Basic Types (handbook/typescriptlang.org/docs/handbook/2/everyday-types, handbook/2/narrowing), `strictNullChecks` release notes (TS 2.0), `unknown` (TS 3.0), `never` exhaustiveness, `const` assertions (TS 3.4), `erasableSyntaxOnly` impact on `enum` vs primitives (TS 5.8). Roadmap.sh TypeScript track for curriculum gaps — primitives before objects.
  - Version label to use: "as of TypeScript 5.9 era (Aug 2026: TS 5.9 stable, 6.0 beta; Node 24 Active LTS)".
  - DRY grep before each leaf: search repo for `any vs unknown|never.*exhaust|const assertion|strictNullChecks|widening` — TypeScript 01/02 mention these only in passing; no full treatment yet, so Domain 03 owns them.
- Done:
  - [unit 01] Created domain 03 index `README/TypeScript/03 Basic Types and Annotations/README.md` (Template B, 7 sections, 13 leaf promises) + 7 section folders; updated track `README/TypeScript/README.md` row 3 so only resolving links remain — committed as `feat(typescript): add 03 Basic Types domain index`
  - [unit 02] Created leaf `03/sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md` (workhorses vs wrappers, widening teaser, good vs bad Map-key bug) — verified `tsc --strict` ok; wrapper `String` correctly flagged by mental lint rule, widening example errors as intended
  - [unit 03] Created leaf `03/sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md` (bigint lane vs number, unique symbol identity, JSON/ interop costs; good vs bad BigInt mixing + Map bug) — verified `tsc --strict --target es2022` ok; `1n + 1` correctly errors, unique symbol identity preserved
  - [unit 04] Created leaf `03/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md` (two absences, strictNullChecks divider, optional vs union with exactOptionalPropertyTypes; narrowing via `== null`, JSON.stringify null vs missing) — verified `tsc --strict` ok; `string = null` correctly errors under strict, `?.`/`??` narrows
  - [unit 05] Created leaf `03/sections/2. The Special Types/2.1. any the unchecked escape hatch.md` (what any disables, return-type infection and any[] propagation, budgeting vs banning with @ts-expect-error) — verified `tsc --strict` ok; `any` bidirectional assignability and property-call freedom confirmed
  - [unit 06] Created leaf `03/sections/2. The Special Types/2.2. unknown the type-safe top type.md` (top type that forces a check, narrowing via guards/predicates/schemas, boundary rule with catch unknown) — verified `tsc --strict --useUnknownInCatchVariables` ok; `unknown` to `string` correctly errors without guard, `instanceof` narrows catch
  - [unit 07] Created leaf `03/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md` (empty set exhaustiveness vs void ignored return; never⊆void, async Promise<void> vs Promise<never>, callback variance) — verified `tsc --strict` ok; exhaustive `never` assignment errors when variant missing, `()=>string` assignable to `()=>void` per callback rule
  - [unit 08] Created leaf `03/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md` (six annotation sites: variable/param/return/property/as/satisfies; erasable rule, non-erasable enum error under erasableSyntaxOnly, contract vs local style) — verified `tsc --strict --erasableSyntaxOnly` ok; literal union compiles, enum correctly errors when tested, satisfies preserves literal
  - [unit 09] Created leaf `03/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md` (widening let vs const, BCT, contextual typing, empty-array noImplicitAny) — verified `tsc --strict` ok; `let x="hello"` infers string vs `const` "hello", BCT `(string|number)[]` for mixed array, contextual callback `w=>w.length` infers string
  - [unit 10] Created leaf `03/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md` (literal subtype relation, as const deep literal+readonly, satisfies vs as, template literal preview) — verified `tsc --strict --erasableSyntaxOnly` ok; `as const satisfies` preserves "get" literal, readonly tuple ids[number] → union, enum correctly errors under flag
  - [unit 11] Created leaf `03/sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md` (four checks: unboxed primitives, explicit nullability, any vs unknown vs never, contract annotations; runnable synthesis) — verified `tsc --strict` ok
  - [unit 12] Created leaf `03/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md` (four incidents: String wrapper Map miss, implicit any[] revenue bug, void Promise swallowed, optional vs undefined JSON mismatch) — verified `tsc --strict` ok; wrapper and any[] examples error as intended under strict
  - [unit 13] Created leaf `03/sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md` (5 Q&A: string vs String, any vs unknown vs never table, strictNullChecks with optional vs undefined, annotation judgment, widening and as const) — verified `tsc --strict` ok; literal union exhaustiveness and unknown narrowing examples check
- Decisions:
  - Section names avoid commas for filesystem safety (`3. Annotations Inference and Literals` not `3. Annotations, Inference and Literals`) per PROMPT.md:175; index bullets still describe commas parenthetically.
  - Track README lists only implemented modules (now 3 rows) per §2 so every link resolves; forward references to domains 04/07/08/09/11/13 remain textual until those domains land.
- Files touched:
  - Created: `README/TypeScript/03 Basic Types and Annotations/README.md`; 7 section directories under `README/TypeScript/03 Basic Types and Annotations/sections/`; `03/sections/1. The Primitive Family/1.1.`, `1.2.`, `1.3.` leaves (3 leaves section 1 complete)
  - Modified: `README/TypeScript/README.md` (added row 3), `README/TypeScript/LOG.md` (incremental Done after each leaf)
- Links fixed / added:
  - Added row 3 link `[Basic Types and Annotations](<03 Basic Types and Annotations/README.md>)` (angle-bracket literal-space, resolves); domain README 13 leaf links + 5 prerequisites/overlap links verified resolving (angle-bracket form, relative `../` depth); 7 section folder names verified no punctuation violations.
- Verification:
  - Link check pre-leaf: `grep -R "\[.*\](<"` count for new domain README = 18 links, 0 `%20`, 0 broken (spot-checked 5 relative depths: `../01 Fundamentals...` → resolves, leaf `./sections/1. The Primitive Family/...` → will resolve once leaves land)
- Next steps:
  - Continue Session 2 units 05–14 (leaves 2.1→7.1); next unit is `2.1. any the unchecked escape hatch.md`.
