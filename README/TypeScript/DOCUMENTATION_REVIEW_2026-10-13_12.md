# TypeScript review addendum — revision 12

This partial review records two additional correctness findings from the complete [04/2.3 object-query lesson](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>) and its index, read during the original P4/P7 pass. No lesson/index changed. Three completed commands used TypeScript 7.0.2 and Node 20.20.2 on 2026-10-13. Addendum 11 is separately pending; approved N01–N28 are implemented.

## N33 — Blocker: keyof is equated with own runtime keys and a numeric literal key is generalized to number

Affected: part 1's definition and Common confusion. The text calls keyof a list of own property names and says `{ 0: string }` contributes number. A declared numeric member instead contributes the literal 0, while a class instance type includes its declared prototype method:

```typescript
export {};
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type NumericKey = Expect<Equal<keyof { 0: string }, 0>>;
class Example { value = 1; method(): void {} }
type ClassKeys = Expect<Equal<keyof Example, "value" | "method">>;
const value = new Example();
console.log(Object.keys(value).join(","), Object.hasOwn(value, "method"), "method" in value);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out keys.ts` exits 0, including both live equality assertions. `node out/keys.js` exits 0 and prints `value false true`: the method is in the instance type's key union but is not an own property. The [primary keyof reference](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) distinguishes literal keys and broad index signatures; the runtime property observation establishes the own-key limitation.

**Repair:** distinguish the static key union from runtime own/enumerable/inherited keys. Verify numeric literal, numeric index signature and class-member cases. Retain correlated T[K] access without promising exhaustive runtime enumeration from keyof.

## N34 — Blocker: Object.values is described as returning unknown[] without a helper

Affected: part 1's modern-guidance value-union bullet. These ordinary calls already infer useful element types:

```typescript
export {};
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
const homogeneous = Object.values({ a: 1, b: 2 });
type Numbers = Expect<Equal<typeof homogeneous, number[]>>;
const mixed = Object.values({ a: 1, b: "x" });
type Mixed = Expect<Equal<typeof mixed, (number | string)[]>>;
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit values.ts` exits 0. The actual compiler 7.0.2 distribution's `lib.es2017.object.d.ts` was read: ObjectConstructor has a generic values<T>(dictionary-or-ArrayLike<T>): T[] signature and a values({}): any[] fallback. It does not declare a universal unknown[] return. Primary evidence is the installed Microsoft compiler declaration, corroborated by the probes; attempted current GitHub source URLs returned 404 and are not claimed as read.

**Repair:** explain the actual typed overloads and fallback limits, compare the type-level indexed union with the runtime enumerable-own-value operation, and avoid adding assertions merely to restore precision the call already has.

## Accepted repetitions and one additional unit

The last erasure example's ambient userInput read repeats approved N14; its overly broad in-based status guard repeats approved F01's unproved-predicate mechanism. The const/satisfies precision reminders can reuse approved N16/N17 owners. Unsupported speed/hover thresholds, required sections, old baseline and isolatedDeclarations ownership are already within P4/P6. These direct accepted issues remain untouched while the combined new correctness scope is pending.

**A12.1 — 04/2.3 plus index:** repair N33–N34 and the identified accepted repetitions, retaining object-specific derivation/correlation/capture/emit outcomes. Verify complete examples, literal/index key assertions, Object.values behavior, runtime enumeration and meaningful rejections. One leaf/index → verification → immediate log → one commit.

The three completed command outputs are retained in `/tmp/typescript-repairs/A012/results.json`; complete probe inputs are above. No editor, lint, framework or performance integration ran. JavaScript's prediction/observation benchmark is reused without copying its historical claims. Full original P1–P7 scope persists; previously unsampled review remains outstanding. Pending findings do not approve additional repairs or curricula.
