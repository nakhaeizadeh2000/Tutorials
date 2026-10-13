# TypeScript review addendum — revision 13

During independent approved P5 upsert-owner research, the complete [10/3.1 Map and Set lesson](<10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>) and collection index were read. Two new correctness findings require acceptance before the combined owner repair. No lesson/index changed. Three completed probes used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13; this is a partial review. Approved N01–N28 are implemented; reports 11 and 12 remain pending separately.

## N35 — Blocker: bare new Map() is described as a checked unknown map

Affected: part 1 modern guidance and Common confusion. The text says bare new Map() is permanently Map<unknown, unknown>. The current no-argument constructor instead supplies Map<any, any>, so its read is unchecked:

```typescript
export {};
type IsAny<T> = 0 extends (1 & T) ? true : false;
type Expect<T extends true> = T;
const map = new Map();
const value = map.get("missing");
type ValueIsAny = Expect<IsAny<typeof value>>;
map.set(1, "x");
map.set("other", 2);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit inference.ts` exits 0. Its live IsAny assertion passes and both heterogeneous writes are accepted. The actual compiler 7.0.2 distribution's primary `lib.es2015.collection.d.ts` was inspected: the no-argument constructor returns Map<any, any>. Its has signature returns boolean, not an assertion-style guard. Thus the definition's has-narrowing suggestion also conflicts with both the primary signature and its own later correct reminder.

**Repair:** distinguish explicit, entry-inferred and bare construction. Demonstrate typed key/value rejections, retain get's absence handling, and describe has as membership testing rather than proof that a later get is narrowed. Do not claim analogous Set inference from this Map probe.

## N36 — Blocker: Object.fromEntries and JSON symbol-key loss are conflated

Affected: part 3 guidance and Common confusion. The text says fromEntries drops symbol keys. The conversion preserves one, while subsequent JSON serialization omits it:

```typescript
export {};
const token = Symbol("token");
const map = new Map<PropertyKey, number>([[1, 10], [token, 20]]);
const object = Object.fromEntries(map);
console.log(object["1"], Reflect.get(object, token), Object.hasOwn(object, token));
console.log(Reflect.ownKeys(object).length, JSON.stringify(object));
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out entries.ts` exits 0. `node out/entries.js` exits 0 and prints `10 20 true` then `2 {"1":10}`. The object owns both keys; JSON includes only the numeric key's string form. Reflect.get is used to observe the symbol value because the library's inferred string-index result does not expose that exact symbol index directly. The [primary Object.fromEntries algorithm](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.fromentries) converts through ToPropertyKey and creates properties, preserving symbol keys.

**Repair:** separate Map-to-object key conversion, library typing limits and JSON serialization. Verify numeric/string key collisions or explain their conversion boundary, and require a deliberate serialization policy rather than ban all non-string object keys on the basis of a false fromEntries claim.

## One combined owner unit and evidence limits

**A13.1 — 10/3.1 plus collection/update indexes as needed:** repair N35–N36 alongside already-approved P5's worked getOrInsert/getOrInsertComputed owner, current declaration/runtime support evidence and F10/F14 required-section/cost repairs. Verify complete Map/Set/entry/upsert examples and meaningful rejections. One leaf and affected indexes → actual checks → immediate log → one commit. Current update-index routes may be aligned in that same owner unit; unrelated feature claims remain review work.

The three completed commands and outputs are retained in `/tmp/typescript-repairs/A013/results.json`. An initial broader draft probe incorrectly assumed bare Set iteration was any; it failed and was removed because the lesson's identified construction claim concerns Map. An initial direct symbol-index observation failed TS2538; Reflect.get replaced that observation before the three successful probes. Neither failed draft establishes a Set finding or an unchecked claim about library symbol-index precision.

Primary installed compiler declarations and the ECMA algorithm establish behavior. JavaScript's condition/prediction/observation benchmark is reused; no speed or asymptotic benchmark ran. No framework, editor, lint or current upsert polyfill integration was executed in this report. The earlier verified R009 evidence remains distinct from this report's actual checks. Full original P1–P7 scope and pending gates persist; no new track or curriculum is authorized.
