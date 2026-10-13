# TypeScript review addendum — revision 5

This report proposes three further correctness repairs from the basic-types required-section pass. Original [revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) P1–P7 remains approved; [revision 3](<DOCUMENTATION_REVIEW_2026-10-13_3.md>) N05–N07 is approved and repaired. Pending [revision 2](<DOCUMENTATION_REVIEW_2026-10-12_2.md>) and [revision 4](<DOCUMENTATION_REVIEW_2026-10-13_4.md>) are not acceptance of N11–N13. No lesson in this addendum was changed before approval.

## Inspected scope

Read completely: basic-types [checklist 03/4.1](<03 Basic Types and Annotations/sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md>), [pitfalls 03/5.1](<03 Basic Types and Annotations/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md>), [interview 03/6.1](<03 Basic Types and Annotations/sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md>), [overlaps 03/7.1](<03 Basic Types and Annotations/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) and the complete domain index. Five reproduction commands ran with TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13; scratch `/tmp/typescript-repairs/A005/results.json`. This is not a full track review.

## N11 — Blocker: the wrapper call is incorrectly labeled as compiling

Affected: 03/4.1, line 36.

The commented `greet(new String("Ada"))` is described as compiling but being flagged stylistically, while greet's parameter is lowercase string. Activating that exact call produces TS2345. The reverse direction—a primitive assigned to uppercase String—is a different compatibility case.

**Proposed repair:** show both directions with actual positive/negative checks; distinguish a rejected wrapper argument from an accepted broad wrapper type and the lint policy. Integrate the result into the checklist's required synthesis sections.

```typescript
function greet(name: string): void { console.log(`hi ${name}`); }
greet(new String("Ada"));
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit wrapper.ts` reports TS2345, exit 1. The diagnostic specifically distinguishes the primitive string parameter from the String wrapper.

## N12 — Blocker: noImplicitAny is said to reject every unannotated empty array

Affected: 03/5.1, line 21 and its blanket annotation checklist.

The page claims `let xs = []` necessarily errors under noImplicitAny and forces an annotation. The shown push sequence instead compiles under strict checking and can infer a mixed element type. An explicit number[] annotation is useful when that is the intended contract, but it should be justified by that invariant, not a diagnostic that does not occur in the shown program.

**Proposed repair:** demonstrate evolving inference with declared flags, a use where an unresolved implicit array type really causes a diagnostic, and an explicit numeric contract that rejects the string push. Explain the boundary between a permitted mixed array and the application's intended numeric-only collection.

Primary project discussion: [evolving-array QuickInfo](https://github.com/microsoft/TypeScript/issues/54414) describes recurring confusion when an evolving array is displayed as any[]. The proposed UI enhancement is not treated as a shipped compiler change; local 7.0.2 checking establishes this program's result.

```typescript
let xs = [];
xs.push(1);
xs.push("oops");
console.log(xs.join(","));
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir empty empty.ts` exits 0. `node empty/empty.js` prints `1,oops`, exit 0. This disproves the blanket rejection claim; it is not a claim about every empty-array context or compiler-option combination.

## N13 — Blocker: a required undefined-valued property is offered as a JSON wire-presence fix

Affected: 03/5.1, lines 46–51; direct misleading repetition in 03/6.1, line 61.

The recommendation offers `{ search: string | undefined }` as a wire type whose key will remain present. The property can be required in the TypeScript object and still disappear during JSON stringification when its value is undefined. exactOptionalPropertyTypes changes assignability, not JSON serialization. The interview answer also says JSON.stringify distinguishes a missing property from a property valued undefined; both stringify to the same omitted-key shape in this ordinary case.

**Proposed repair:** separate in-memory presence from the JSON contract. Compare property presence before/after serialization and use an agreed wire value such as null, or an omission rule, deliberately. Verify the client/server-compatible serialized shape rather than claiming a type annotation preserves a JSON key.

Primary evidence: [ECMA-262 JSON.stringify](https://tc39.es/ecma262/multipage/structured-data.html#sec-json.stringify) excludes object properties whose values lack JSON representation, including undefined.

```typescript
type Wire = { search: string | undefined };
const body: Wire = { search: undefined };
const encoded = JSON.stringify(body);
const decoded: unknown = JSON.parse(encoded);
console.log(encoded, typeof decoded === "object" && decoded !== null && "search" in decoded);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --exactOptionalPropertyTypes --outDir wire wire.ts` exits 0. `node wire/wire.js` prints `{} false`, exit 0. No HTTP/server integration was simulated or claimed.

## Proposed units

1. **A5.1 — 03/4.1:** repair N11 with actual primitive/wrapper direction probes and already approved required sections.
2. **A5.2 — 03/5.1:** repair N12/N13 with meaningful inference and serialized-consumer exercises; fulfill the existing pitfalls promises and required synthesis.
3. **A5.3 — 03/6.1:** repair the direct N13 repetition while verifying its existing interview examples and required sections.

Each unit includes affected ancestor promises, executed examples and immediate logging/commit. N11–N13 remain pending until explicitly accepted. Independent original work, including the basic-types overlap leaf, can continue; pending leaves are not counted as completed repairs.
