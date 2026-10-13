# TypeScript review addendum — revision 4

This report proposes N08–N10, found during the approved required-section pass. [Revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) remains the approved P1–P7 reference. [Revision 2](<DOCUMENTATION_REVIEW_2026-10-12_2.md>) N01–N04 is pending. [Revision 3](<DOCUMENTATION_REVIEW_2026-10-13_3.md>) N05–N07 was explicitly approved and repaired in units R019/R020; their evidence is in [LOG](<LOG.md>). No N08–N10 lesson repair has started.

## Inspected scope and limits

Read completely: type-system-core [5.1 pitfalls](<02 The Type System Core/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md>), [6.1 interview answers](<02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>), [7.1 boundaries](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) and the complete domain index. Reproductions ran on TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13, in `/tmp/typescript-repairs/A004`. Seven commands completed. This is a bounded additional review, not a whole-track correctness pass.

## N08 — Blocker: the mutation incident begins with a rejected readonly conversion

Affected: 02/5.1, line 11.

The story returns `readonly Dog[]`, assigns it to mutable `Animal[]`, then mutates it without mentioning a cast or a remaining mutable alias. That assignment is rejected with TS4104. Mutable array covariance is a real hazard, but this particular starting contract does not reproduce the claimed unchecked path.

**Proposed repair:** show the actual mutable Dog[] → Animal[] hazard, then a readonly reader boundary and a rejected readonly-to-mutable conversion. Explain that readonly is a view and does not freeze another alias. Execute both diagnostic and mutation consequences, without a fabricated production incident rate.

Primary evidence: [ReadonlyArray and assignability](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type). Existing JavaScript holes/prediction-observation calibration guides contrasting one condition; no engine-speed claim is imported.

```typescript
interface Animal { name: string }
interface Dog extends Animal { breed: string }
const dogs: readonly Dog[] = [{ name: "Rex", breed: "lab" }];
const animals: Animal[] = dogs;
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit readonly.ts` reports TS4104, exit 1. No mutation runtime was claimed for this rejected source.

## N09 — Blocker: the literal-widening incident omits the runtime cause and suggests a non-narrowing type

Affected: 02/5.1, lines 28–30.

Removing as const can change the inferred type, but the assertion itself erases. Holding the actual initializer and runtime branch constant, both versions emit identical JavaScript and return the same port. A new mutation or changed value could cause fall-through, but the incident does not show that transition. Its suggested `{ host: "localhost" | string }` also collapses the host type to string and restores no literal precision.

**Proposed repair:** distinguish an inferred-type change from an actual runtime value change. Use a complete fixture to demonstrate the consequence the page intends, and select a literal union or annotation that really expresses the required contract. Test the proposed type-level result and runtime branch separately. Avoid describing as const as runtime freezing.

Primary evidence: [TypeScript const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions); the identity assertions and byte comparison below provide direct evidence on the tested compiler.

Save `narrow.ts`:

```typescript
const defaultConfig = { host: "localhost" } as const;
type Config = typeof defaultConfig;
console.log(defaultConfig.host === "localhost" ? 5432 : 0);
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Wide = Expect<Equal<"localhost" | string, string>>;
```

Save `wide.ts` with only ` as const` removed from the first line. Compile each separately with `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir narrow narrow.ts` / `--outDir wide wide.ts`. Both exit 0; the emitted files compare byte-identical. Running each with Node prints `5432`, exit 0. The live identity assertion confirms the suggested union is string.

## N10 — Blocker: the variance answer predicts a nonexistent diagnostic for its method example

Affected: 02/6.1, line 25; domain index line 59's introduction version.

The answer says `type Box<out T> = { write(v: T): void }` must fail with a quoted TS2717 message. The exact alias compiles, exit 0. A function-property version, `{ write: (v: T) => void }`, instead fails with TS2636. The method exception matters to this example; annotations are not a universal syntactic ban on using T in a parameter. The index also labels variance annotations as a 5.8 feature, while the primary 4.7 notes introduce them.

**Proposed repair:** teach a verified producer/consumer direction, compare the method and function-property cases, and report the actual diagnostic with its version. Correct the introduction-version promise in the same affected index unit. Do not infer that an accepted annotation makes a method API runtime-safe.

Primary evidence: [4.7 variance annotations](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#optional-variance-annotations-for-type-parameters), [strictFunctionTypes method exception](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#strict-function-types).

```typescript
type Box<out T> = { write(v: T): void };
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit variance.ts` exits 0.

```typescript
type Box<out T> = { write: (v: T) => void };
```

The same command on `variance-property.ts` reports TS2636, exit 1. These are separate input programs; no conflicting alias declarations were combined.

## Proposed additional units

1. **A4.1 — 02/5.1:** repair N08/N09 in one leaf alongside its already approved required-section work and accepted predicate-risk corrections. Verify complete freshness/mutation/predicate/literal fixtures and update its promises.
2. **A4.2 — 02/6.1 plus domain index:** repair N10 alongside required sections and verified interview probes; coordinate its existing malformed link with N01 if that pending manifest is also approved.

N01–N04 repairs remain the five-unit plan in revision 2. N08–N10 require acceptance of this addition. Independent approved work can continue while these leaves remain outstanding. No report-only artifact is approval, and no full-track quality pass is claimed.
