# TypeScript review addendum — revision 2

This addendum preserves [revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) and its approved P1–P7 repairs. These newly reproduced findings are **pending approval**. The approved repairs continue independently. No extra repair below has been implemented.

The new evidence is bounded: a syntax-aware scan of 285 published Markdown files and complete reads of the four named correctness leaves plus their indexes. This is not a full substantive track pass. Checks used TypeScript 7.0.2 and Node 20.20.2 on 2026-10-12. JavaScript's prediction/observation teaching benchmark exposes the gap between a claimed result and an executed one.

## N01 — Major: 42 additional malformed destinations bypass the old link scan

P3 repaired the four enumerated absent-track destinations and 11 raw-space index destinations; R006 had repaired the two originally enumerated declaration-space links. A broader scan now detects 42 additional raw or mismatched-angle destinations across 15 early leaves. Many also have the wrong relative depth. These were outside revision 1's enumerated repair manifest.

The scanner removes fenced/inline code before inspecting every `](` destination, checks matching angle delimiters for relative links, and checks local existence. Synthetic cases demonstrate that it detects raw-space destinations and a trailing `>` without an opening `<`, accepts a valid link, and ignores code such as `[]()`. It is a targeted navigation checker, not a complete Markdown parser or rendering audit.

**Repair N01:** normalize exactly the following destinations to the intended existing owners, using one coherent navigation unit, verify all changed links and the full scan, and keep all example fences unchanged. No track creation or path move is proposed.

| Source and line | Defective destination | Intended existing target |
|---|---|---|
| [02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md:88](<02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) |
| [02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md:94](<02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) |
| [02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md:65](<02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) | `../../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md` | [Open owner](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) |
| [02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md:107](<02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) | `../../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md` | [Open owner](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) |
| [02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md:107](<02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) | `../../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md:45](<02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md:86](<02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) | `../../15 Strictness Errors and Validation/README.md` | [Open owner](<15 Strictness Errors and Validation/README.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md:76](<02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md:77](<02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) | `../../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md` | [Open owner](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md:88](<02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) |
| [02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md:88](<02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) | `../../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md` | [Open owner](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:3](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../JavaScript/README.md` | [Open owner](<../JavaScript/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:5](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../JavaScript/03 Values Types and Coercion/README.md` | [Open owner](<../JavaScript/03 Values Types and Coercion/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:5](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../JavaScript/04 Variables Scope and Closures/README.md` | [Open owner](<../JavaScript/04 Variables Scope and Closures/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:5](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../JavaScript/06 Objects in Depth/README.md` | [Open owner](<../JavaScript/06 Objects in Depth/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:5](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../JavaScript/07 Prototypes and Classes/README.md` | [Open owner](<../JavaScript/07 Prototypes and Classes/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:7](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:9](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md` | [Open owner](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:11](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../09 Utility Types and Type Transformations/README.md` | [Open owner](<09 Utility Types and Type Transformations/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:15](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:17](<02 The Type System Core/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md` | [Open owner](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) |
| [02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md:33](<02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>) | `../../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md:36](<02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>) | `../../07 Unions Intersections and Narrowing/README.md` | [Open owner](<07 Unions Intersections and Narrowing/README.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md:82](<02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md:31](<02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md:95](<02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>) | `../../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md:95](<02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>) | `../../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md` | [Open owner](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) |
| [02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md:95](<02 The Type System Core/sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md:70](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) | `../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md:80](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) | `../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md:74](<01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md>) | `../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:17](<01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md:21](<01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>) | `../../14 Decorators and Metadata/README.md` | [Open owner](<14 Decorators and Metadata/README.md>) |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md:71](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md:77](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md:30](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) | `../12 Modules Namespaces and Declaration Files/README.md` | [Open owner](<12 Modules Namespaces and Declaration Files/README.md>) |
| [01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md:101](<01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) | `../12 Modules Namespaces and Declaration Files/README.md` | [Open owner](<12 Modules Namespaces and Declaration Files/README.md>) |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md:79](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) | `../../07 Unions Intersections and Narrowing/README.md` | [Open owner](<07 Unions Intersections and Narrowing/README.md>) |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md:79](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) | `../../03 Basic Types and Annotations/README.md` | [Open owner](<03 Basic Types and Annotations/README.md>) |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md:20](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) | `../../09 Utility Types and Type Transformations/README.md` | [Open owner](<09 Utility Types and Type Transformations/README.md>) |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md:51](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) | `../../09 Utility Types and Type Transformations/README.md` | [Open owner](<09 Utility Types and Type Transformations/README.md>) |
| [01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md:57](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) | `../../13 Configuration and Compiler Options/README.md` | [Open owner](<13 Configuration and Compiler Options/README.md>) |

## N02 — Blocker: duplicate aliases prevent two runnable fences from compiling

[Static/runtime 01/2.2](<01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>) declares `ApiUser` twice within its single runnable fence (lines 31 and 39). [Type/value 02/2.1](<02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) declares `Status` twice within its fourth fence (lines 67 and 71). Both extracted fences fail TS2300 with exit 1. This is different from the previously accepted declaration-space misconception: these examples already claim to demonstrate correct separate-space usage.

**Repair N02:** make each fence a complete program with one alias definition, demonstrate real valid/invalid behavior, and retain the conceptual owner. The type/value fence also names a script-level `Cache`, which can collide with DOM declarations; use a module-local scope or a specific name during the same runnable-example repair. Consolidate the existing required sections and correct the already approved namespace-space repetition in the 02/2.1 unit. Keep each leaf and its affected index in a separate commit.

## N03 — Blocker: the singleton demonstration always constructs fresh instances

[Dependency injection 14/3.3](<14 Decorators and Metadata/sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md>) says singleton registration retains one instance, but its three illustrative `Container2` implementations ignore that lifecycle. The third exact fence compiles, then prints `1 1`, despite line 88 leading with `1 2`. The inline admission that the container is simplified does not supply the promised behavior. The first implementation builds a caching closure and discards it; the third ignores the singleton argument entirely.

**Repair N03:** provide a complete bounded container that honors singleton/transient factories, runs identity/state and missing-token tests, and demonstrates constructor substitution. Explain what its decorator marker actually does or make the demonstration use real registration. Preserve the NestJS-first application boundary; this TypeScript leaf teaches a small mechanism and routes framework mastery to the planned track. Replace arbitrary universal adoption thresholds with reasoned conditions while consolidating its required sections. Verify output, not just compilation. This is one leaf/index unit.

## N04 — Blocker: decorator migration guidance treats a program flag as per-file syntax selection

[Legacy decorators 14/2.1](<14 Decorators and Metadata/sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md>) says standard decorators compile regardless of `experimentalDecorators` (line 70), suggests migrating a file while retaining the flag until the final file migrates, and repeatedly describes flag-off errors as parsing failures (lines 74 and 114).

The first exact standard-method fence checked with `--experimentalDecorators` fails TS1241/TS1270, exit 1. The flag changes checking and emit for the configured program; decorating a method with a standard signature in a legacy-configured program is not made safe by moving it to another file. Some deliberately compatible class decorators can accept both call forms, which is not a universal migration guarantee. The [5.0 primary release explanation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#differences-with-experimental-legacy-decorators) distinguishes the flag's two checking/emit behaviors and the possibility of intentionally supporting both.

**Repair N04:** build two explicit project configurations, exercise a standard and a legacy method wrapper separately, distinguish parsing/checking/emit, and show a migration boundary that really supports different compiler settings. Verify order-sensitive behavior under both models before claiming preserved behavior. Keep framework-version conditions explicit and reuse the current metadata owner. This is one leaf/index unit; no framework curriculum is added.

## Ordered additional repair plan

1. N01 exact navigation manifest in one verified unit.
2. N02 static/runtime 01/2.2, then type/value 02/2.1, one leaf per unit.
3. N04 legacy decorator migration 14/2.1, then N03 DI lifecycle 14/3.3, one leaf per unit.
4. Recheck these findings against actual repairs and append outcome evidence; preserve both reports.

Approval of this addendum covers only these named outcomes and necessary direct repetitions. It does not authorize undiscovered correctness changes. Original P1–P7 remain approved and retain their full scope.

## Reproduction inputs and observed results

Save each fence below under the stated filename in a directory without a `tsconfig.json`. Commands were actually executed. No API network request was sent by the static/runtime compile reproduction. Only the singleton fixture was executed as JavaScript.

### duplicate-status.ts

```typescript
// good — leverage dual declaration for typed factories
class Cache { constructor(public size: number) {} }
function makeCache(size: number): Cache { // return type refers to instance type
  return new Cache(size); // value refers to constructor
}

// bad — confusing spaces: trying to use a type as a value
type Status = "pending" | "done";
// const s = Status; // error TS2693: 'Status' only refers to a type, but is being used as a value here.
// fix: use value space
const StatusValues = { Pending: "pending", Done: "done" } as const;
type Status = typeof StatusValues[keyof typeof StatusValues]; // type query bridges value → type

// bad — confusing value as type
const config = { host: "localhost" };
// type T = config; // error: 'config' refers to a value, but is being used as a type here.
// fix: query the type of the value
type Config = typeof config; // { host: string } — type query lifts value shape to type
```

```sh
tsc --strict --target es2022 --module commonjs --noEmit --lib es2022 duplicate-status.ts
```

Observed checker exit 1.

```text
duplicate-status.ts(8,6): error TS2300: Duplicate identifier 'Status'.
duplicate-status.ts(12,6): error TS2300: Duplicate identifier 'Status'.
```

### duplicate-api.ts

```typescript
// bad — trusting an external boundary with 'as'
type ApiUser = { id: number; name: string };
async function fetchUserBad(id: number): Promise<ApiUser> {
  const res = await fetch(`https://api.example.com/users/${id}`);
  const data = (await res.json()) as ApiUser; // ❌ trusts the server — checker is silent, runtime may be { error: "not found" }
  return data; // caller does data.name.toUpperCase() — may throw "Cannot read property 'toUpperCase' of undefined"
}

// good — validating at the boundary with a type predicate (erasable, but bridges to runtime)
type ApiUser = { id: number; name: string };

function isApiUser(value: unknown): value is ApiUser {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    typeof (value as Record<string, unknown>).id === "number" &&
    typeof (value as Record<string, unknown>).name === "string"
  );
}

async function fetchUserGood(id: number): Promise<ApiUser> {
  const res = await fetch(`https://api.example.com/users/${id}`);
  const data: unknown = await res.json(); // unknown forces validation
  if (!isApiUser(data)) throw new Error("Invalid API response shape");
  return data; // now proven ApiUser — checker and runtime agree
}

// good with zod (idiomatic in 2026):
// import { z } from "zod";
// const ApiUserSchema = z.object({ id: z.number(), name: z.string() });
// const data = ApiUserSchema.parse(await res.json()); // throws if shape mismatches, returns typed ApiUser
```

```sh
tsc --strict --target es2022 --module commonjs --noEmit --lib es2022,dom duplicate-api.ts
```

Observed checker exit 1.

```text
duplicate-api.ts(2,6): error TS2300: Duplicate identifier 'ApiUser'.
duplicate-api.ts(10,6): error TS2300: Duplicate identifier 'ApiUser'.
```

### singleton.ts

```typescript
// good — singleton vs transient marked per registration (lifecycle explicit, not assumed)
class Container2 { // re-declared: fences compile standalone (minimal token map)
  private bound = new Map<string, new (...args: never[]) => object>();
  bind<T>(token: string, ctor: new (...args: never[]) => T, _singleton: boolean): void {
    this.bound.set(token, ctor as unknown as new (...args: never[]) => object);
  }
  get<T>(token: string): T {
    const C = this.bound.get(token);
    if (!C) throw new Error(`unbound:${token}`);
    return new (C as new () => T)();
  }
}
class Counter7 {
  count = 0;
  next(): number { return ++this.count; }
}
const cc3 = new Container2();
cc3.bind("cnt", Counter7, true); // singleton: one instance per container (stateful services)
console.log(cc3.get<Counter7>("cnt").next(), cc3.get<Counter7>("cnt").next()); // 1 2 — wait, get() news each time here (simplified container: production singletons cache per token — lifecycle marked at bind, honored by full containers)
// bad — unmarked lifecycles (singleton assumed for stateful, transient assumed for stateless — assumptions splitting per consumer)
// fix — lifecycle parameter at bind (marked per registration — documented, auditable, testable both ways)
```

```sh
tsc --strict --target es2022 --module commonjs --outDir dist --lib es2022,dom singleton.ts
```

Observed checker exit 0.

```text
(no diagnostics)
```

`node dist/singleton.js`: exit 0; observed output `1 1`.

### decorator.ts

```typescript
// good — standard method wrapper (no flag; value + context; same-kind return)
function timedStd<This, Args extends unknown[], Ret>(
  fn: (this: This, ...args: Args) => Ret,
): (this: This, ...args: Args) => Ret {
  return function (this: This, ...args: Args): Ret { return fn.apply(this, args); };
}
class SvcStd {
  @timedStd
  work(n: number): number { return n * 2; }
}
console.log(new SvcStd().work(21).toFixed(0)); // 42 — standard form (flag-free, portable)
```

```sh
tsc --strict --target es2022 --module commonjs --noEmit --lib es2022,dom --experimentalDecorators decorator.ts
```

Observed checker exit 1.

```text
decorator.ts(8,4): error TS1241: Unable to resolve signature of method decorator when called as an expression.
  The runtime will invoke the decorator with 3 arguments, but the decorator expects 1.
decorator.ts(8,4): error TS1270: Decorator function return type '(this: unknown, ...args: unknown[]) => unknown' is not assignable to type 'void | TypedPropertyDescriptor<(n: number) => number>'.
```
