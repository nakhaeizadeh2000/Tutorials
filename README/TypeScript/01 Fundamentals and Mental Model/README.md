# Fundamentals and Mental Model

This domain builds the first checked-contract and execution model for JavaScript readers. Actual examples distinguish a rejected argument from a runtime failure, inspect erased and transformed artifacts, query the native language service, consume source maps and compare runner/checking responsibilities. The verified compiler baseline is TypeScript 7.0.2; examples state their tested runtimes and dates. The [current learning route](<../25 Update TypeScript 7.0/sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>) connects returning readers to affected owners. JavaScript remains the runtime foundation; use its [track](<../../JavaScript/README.md>) for language prerequisites. A successful check, source run or editor query has a declared scope and does not replace the others.

## 0. Prerequisites

JavaScript fundamentals (values, scope, closures, prototypes, async) — covered in [JavaScript 01 Fundamentals](<../../JavaScript/01 Fundamentals and Mental Model/README.md>) through [JavaScript 05 Functions Deep Dive](<../../JavaScript/05 Functions Deep Dive/README.md>). No prior TypeScript knowledge required.

## 1. What TypeScript is

### [1.1. From JavaScript to TypeScript — history, superset claim, and why it exists](<./sections/1. What TypeScript is/1.1. From JavaScript to TypeScript history superset claim and why it exists.md>)

1. **Checked JavaScript contracts:** run plain and annotated examples, then distinguish a compiler-rejected argument from an actual runtime failure.
2. **Causal history and current baseline:** connect the original 2012/2014 releases to large-application tooling while routing current changes to their owners.
3. **Adoption judgment:** explain useful signatures, tooling and remaining runtime/build work without universal safety or performance claims.

### [1.2. Design goals and non-goals — what TypeScript intentionally does not do](<./sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md>)

1. **Design intentions:** distinguish likely-error detection and tooling goals from guarantees about every accepted program.
2. **Concrete non-goals:** run a false asserted JSON contract and a runtime field check, separating declared types from validation.
3. **Deliberate pipeline policy:** choose checking, emission and execution responsibilities without universal syntax, soundness or speed promises.

### [1.3. Superset, soundness, and the type system flavor](<./sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>)

1. **Directional compatibility:** distinguish required shape, fresh-literal checks, runtime identity and declaration-origin exceptions.
2. **Observed soundness limits:** reproduce a shared mutable-array failure and explain why a later readonly view does not repair it.
3. **Deliberate gradual checking:** choose meaningful contracts and unknown boundaries without a required migration ladder or safety-by-count claim.

---

## 2. How TypeScript (doesn't) execute

### [2.1. Type erasure — what survives compilation](<./sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>)

1. **Executable versus descriptive artifacts:** inspect erased JavaScript and retained declarations for the same typed source.
2. **Actual value transformations:** run enum, runtime namespace and parameter-property emit while reproducing syntax-gate and native-stripping rejection.
3. **Bounded erasure promises:** distinguish ordinary JavaScript downleveling, host support and absent-name typeof from type removal.

### [2.2. Static checking vs runtime reality — trust but verify](<./sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>)

1. **Checked contracts:** distinguish compiler diagnostics, trusted assertions and runtime evidence without claiming full soundness.
2. **Boundary verification:** run valid and malformed responses through one complete asserted-versus-checked program.
3. **Assumption review:** demonstrate a predicate body the checker trusts despite an incomplete field check, and identify mutation/integration limits.

### [2.3. The language server — editor superpowers that justify TypeScript](<./sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>)

1. **Actual provider and operation:** distinguish native LSP, historical tsserver, editor presentation and the program being queried.
2. **Observed service results:** compare real hover/definition/rename requests with static probes and execution of the applied edit.
3. **Meaning and scope:** read types alongside documentation and diagnose provider/project/document differences without performance or refactoring guarantees.

---

## 3. Running TypeScript today

### [3.1. The compilation pipeline — tsc, emit, declarations, and source maps](<./sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>)

1. **Actual artifacts:** compare checking, full emission and declaration-only output in a complete configured project.
2. **Maps through a consumer:** inspect source/declaration maps and observe real Node stack mapping without assuming editor navigation.
3. **Separate-tool failure policy:** run a pinned emitter and smoke gate, preserve type/behavior failures and review inherited configuration scope.

### [3.2. Executing TypeScript — tsc plus node, tsx, ts-node, and native Node stripping](<./sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>)

1. **The classic path** (check/emit, inspect the JavaScript artifact and run it with the intended runtime).
2. **Just-in-time execution** (pinned runner/compiler combinations and explicit checking responsibilities).
3. **Native type stripping** (Node 22.18.0 unflagged execution; distinguish type errors, supported transforms and unsupported decorators).

### [3.3. Choosing erasable syntax — the zero-cost interop rule](<./sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)

1. **Declared execution contracts:** choose erasable syntax and actual import/host support without universal executor or runtime-cost claims.
2. **Representation decisions:** review enum, namespace and provider changes for preserved consumer behavior rather than assuming mechanical equivalence.
3. **Optional declaration restrictions:** extend the complete source/output graph to compare accepted simple inference, a rejected exported call return and its annotation repair.

---

## 4. Important points to remember (fundamentals)

### [4.1. Fundamentals checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>)

1. **Types don't exist at runtime** (erasure is the single most important fact).
2. **Superset means syntax-compatible, not semantics-identical** (well-typed ≠ bug-free; unsound holes remain).
3. **Validation at the boundary** (parse, don't assert: `unknown` → validated → typed).
4. **Tooling is the payoff** (rename, navigation, and refactoring confidence justify the cost).

---

## 5. Common pitfalls → production bugs (fundamentals)

### [5.1. Real production bugs caused by misunderstanding fundamentals](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by misunderstanding fundamentals.md>)

1. **Boundary evidence:** reproduce valid/malformed User responses and verify every required field.
2. **Execution contracts:** compare an enum rejection with an erasable string-status alternative on a pinned native runtime.
3. **Array and any failures:** reject mixed/sparse values, observe explicit-any failure and build an independently checked copy.
4. **Artifact freshness:** observe default emit, blocked emit with stale output and a pipeline that stops after failure.

---

## 6. Interview questions and answers (fundamentals)

### [6.1. Common interview Q&A — fundamentals of TypeScript](<./sections/6. Interview questions and answers/6.1. Common interview QA fundamentals of TypeScript.md>)

1. **Language and execution:** distinguish static contracts from transformation and runtime behavior.
2. **Erased names:** observe the TypeScript diagnostic, emitted typeof result and direct-read failure separately.
3. **Compatibility and soundness:** explain public-member shape, trusted assertions and callback/mutation hazards.
4. **Runtime boundaries:** justify runner checking responsibilities and complete malformed-input validation.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Runtime route:** locate JavaScript values, closures, object mechanics, scheduling and module behavior.
2. **Static route:** distinguish core compatibility/declaration spaces from later generic and utility transformations.
3. **Pipeline route:** choose published configuration and current source/emit/tool guidance for the actual consumer.
4. **Decorator route:** locate signature-model and metadata producer/runtime prerequisites.
5. **Debugging practice:** route a malformed response and an unresolved runtime import with a concrete reason.
