# TypeScript review addendum — revision 22

This partial review covers complete [05/3.1 receiver typing](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>) and [05/3.2 callback variance](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>), plus the complete functions index. Eight actual commands used TypeScript7.0.2/Node20.20.2 on2026-10-14. Revisions18–21 remain pending; no lesson/index changed here.

Commands use `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then `node dist/FILE.js`. Negative checks replace --outDir dist with --noEmit. The detached fixture intentionally includes a parameter property and does not claim erasableSyntaxOnly/native-source compatibility.

## N62 — Blocker: this:void is treated as a ban on reading this or capturing an outer receiver

Affected: 05/3.1 parts1–2 and05/3.2 part3. Merely logging a void-typed this is legal; accessing a property on it is the meaningful rejected operation. Arrows can still capture a typed outer this while satisfying a this:void callable contract. The type describes the callable's receiver requirement, not a ban on closures. 05/3.1 also contradicts itself about `.call(ctx)`: its part2 says an object context still compiles, while strictBindCallApply rejects this for an explicitly void receiver.

Save void.ts:

```typescript
export {};
function observe(this: void, value: number): void { console.log(this, value); }
observe(1);
class Owner {
  name = "outer";
  make(): (this: void) => string { return () => this.name; }
}
console.log(new Owner().make()());
```

Build/run exit0; output `undefined 1` then `outer`. The arrow captures Owner even through the void receiver view. Save void-call.ts:

```typescript
export {};
function observe(this: void, value: number): void { console.log(this, value); }
observe.call({ id: 1 }, 1);
```

Check reports TS2345, exit1. The [primary callback guide](https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters-in-callbacks) distinguishes no required call receiver from an arrow's lexical capture. A this:void contract does not install runtime binding or prove purity.

**Repair:** distinguish logging versus property access, explicit dynamic receiver versus lexical capture, and actual host invocation. Show the rejected object .call context and accepted detached/bound/lexical cases with controlled outcomes; avoid a blanket claim that all callback hosts call in the same way.

## N63 — Blocker: the standard array forEach type is claimed to correlate callback this with thisArg

Affected: 05/3.1 part2 Definition/history and index promise. A custom forEachWithThis can relate two type positions. Current built-in Array.forEach does not do that: it accepts a callback without a correlated this parameter and has thisArg?:any.

Installed7.0.2 `lib.es5.d.ts` actual readonly and mutable signatures:

```typescript
forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
```

Save std.ts:

```typescript
export {};
function callback(this: { name: string }, value: number): void { console.log(this.name.toUpperCase(), value); }
for (const invoke of [() => [1].forEach(callback), () => [1].forEach(callback, { wrong: true })]) {
  try { invoke(); } catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
}
```

Build/run exit0; both calls are accepted statically and print controlled TypeError failures. The receiver is absent in one call and has the wrong shape in the other. Installed declaration source is primary evidence for this exact compiler; a hypothetical correlated library signature does not establish built-in behavior.

**Repair:** retain the custom correlated wrapper with its honest runtime `.call` implementation, distinguish it from standard forEach, and verify a wrong custom thisArg rejection. Do not promise that adding only an annotation to a callback validates every existing host's thisArg.

## N64 — Blocker: an unannotated class method's detached call is claimed to reject under noImplicitThis

Affected: 05/3.1 part3 detached example and advice to omit explicit method receivers universally. Inferring this inside a method does not automatically add a call-site receiver requirement to its extracted function type.

Save detached.ts:

```typescript
export {};
class User {
  constructor(public name: string) {}
  greet(greeting: string): string { return greeting + ", " + this.name; }
}
const user = new User("Ada");
const detached = user.greet;
try { console.log(detached("hi")); } catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
```

Strict build exits0; the detached call is accepted and Node prints caught TypeError, exit0. The [primary class receiver guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-parameters) shows adding an explicit this parameter to reject extraction followed by a receiverless call. Bind or a lexical wrapper changes actual invocation; an annotation alone remains checking information.

**Repair:** compare implicit receiver inference with an explicit receiver requirement, actual bind and arrow remedies. Provide a negative TS2684 call on the explicitly annotated method and observable normal/detached/bound outcomes. An explicit method this parameter can be purposeful.

## N65 — Blocker: strict callback parameter substitution is inverted

Affected: 05/3.2 title/promise1/Definition/first-fence comments and SafeStore comment; index repeats it. An Animal-capable handler can handle a supplied Dog. A Dog-only handler cannot serve a host that may supply another Animal. The old explanation states the reverse even while describing the actual Dog-handler-on-Cat hazard elsewhere.

Save variance.ts:

```typescript
export {};
type Animal = { kind: string };
type Dog = Animal & { bark(): void };
const animalHandler = (value: Animal): void => { console.log(value.kind); };
const dogHandler = (value: Dog): void => { value.bark(); };
const forDog: (value: Dog) => void = animalHandler;
forDog({ kind: "dog", bark() {} });
const forAnimal: (value: Animal) => void = dogHandler;
```

Check reports TS2322 only for forAnimal, exit1. The forDog assignment is accepted. The [primary2.6 variance example](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#strict-function-types) explicitly gives those two directions and the method exception. That historical feature introduction is corroborated with current7.0.2; no2.6 compiler ran.

**Repair:** trace who supplies a Dog or Cat and what the callback requires. Test both assignment directions, return covariance, method versus property behavior and a controlled method-body TypeError. Keep generic/brand safety advice bounded to checked inputs and actual contracts; do not claim typed callbacks eliminate boundary validation.

## Two additional units and verification limits

1. **A22.1 — 05/3.1 plus functions index:** repair N62–N64, integrate approved F10/F14/P6 and existingN21 receiver reminders. Verify explicit/missing/wrong receiver, .call/.bind, lexical capture, standard-versus-custom forEach and implicit-versus-explicit method extraction. One leaf/index/check/log/commit.
2. **A22.2 — 05/3.2 plus functions index:** repair N62 repetition andN65, integrate approved F10/F14/P6 andN10 method-variance/checked-brand reminders. Verify assignment directions, controlled method hazard, function-property remedy and bounded generic callback wiring. Separate leaf/index/check/log/commit.

Eight completed command/results are retained in `/tmp/typescript-repairs/A022/results.json`; all complete inputs are above. Installed declaration file and relevant callback/class/2.6 primary passages were read. Existing JavaScript receiver/callback observable-case calibration is reused. No native-source run, editor, lint, framework, network integration or performance benchmark ran. OriginalP1–P7 persists; N62–N65 needs explicit acceptance, with revisions18–21 still separately pending. No future standing authorization is inferred.
