# TypeScript review addendum — revision 28

Complete reads: [mixin lesson](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>), [class-query lesson](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.3. Class type queries InstanceType and constructor signatures.md>) and class-domain index. This is a partial track review. Ten completed compiler/runtime commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-15. No reviewed lesson or published index changes here. Reports26/27 are now repaired;18/19/24 remain pending.

## Findings and learner consequences

**N85 — Blocker, 06/3.2 part1 static example:** the comment says MixedStatic.kind is rejected unless a static-side intersection is added. The inferred generic class-expression result actually preserves the base static kind and original constructor argument. Removing useful inference or adding casts would make this example worse. Repair with actual static/constructor checks and a deliberately widened view only when illustrating lost information.

**N86 — Blocker, 06/3.2 part1 confusion/part3 guidance:** saying instanceof needs the mixed constructor rather than the original base is false for the shown inheritance pattern. The original base and actual mixed constructor both match. A separately evaluated mixin application produces a different class identity. Teach those three comparisons separately.

**N87 — Major, 06/3.2 part3 trade-offs and matching index promise:** repeated mixin calls are described as duplicating emitted trait methods per composition site. The probe emits one Tagged function containing one tag method definition; calling it twice creates distinct runtime classes/functions. Distinguish emitted source representation from runtime allocation. Do not infer a bundler size or speed result from either observation.

**N88 — Blocker, 06/3.2 opening abstract Constructor definition:** the definition permits abstract constructor inputs while the described anonymous concrete class-expression pattern lacks the required abstract returned subclass. The analogous generic abstract constraint rejects TS2797. Use a concrete constraint for the concrete pattern, or return an explicitly abstract local class and require the final concrete subclass to implement inherited hooks. The [4.2 primary notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures) explain that obligation; current probes below corroborate it.

**N89 — Blocker, 06/3.2 part3 decorator comparison:** decorators are called metadata-only and treated as unable to add runtime members. The configured standard class decorator below returns a subclass with a real decorated field, observed through Reflect.get. Runtime replacement and the statically exposed decorated-class type are different questions. Correct the comparison briefly and link the existing decorator owners; do not duplicate their full setup. The [5.0 primary decorator explanation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators) explicitly includes subclassing and runtime method replacement.

**N90 — Blocker, 06/3.3 part2 history and factories/registry:** a concrete Dog extending an abstract Animal is claimed to be rejected by a concrete constructor contract. It is accepted; the abstract base is rejected. The abstract-accepting build/adopt/registry assertions also repeat the explicitly identified N69 construction mistake: register Animal, force construction and its missing hook is undefined. Repair factories/registries to require concrete matching construction contracts, reserving abstract inputs for operations that do not instantiate. Acceptance of this unit includes that N69 repetition in06/3.3; it does not approve the separately gated06/1.1 unit.

**N91 — Blocker, 06/3.3 part2 second fence:** InstanceType<abstract new () => Animal> is commented as invalid, but its equality with Animal passes. A type query does not require a concrete runtime constructor value. Current installed lib.es5.d.ts defines both InstanceType and ConstructorParameters with abstract constructor constraints; the [utility reference](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetype) describes their query roles. Separate accepted query computation from rejected abstract invocation.

Existing approved F05 repetitions also occur in06/3.3's claimed erasable fixtures: parameter properties reject the stated gate, and declaration-only output cannot establish JavaScript erasure. Integrate those accepted corrections with the proposed query unit rather than treating an unexecuted comment as a successful run.

## Executable evidence

Save each file in a fresh directory without tsconfig.json. Positive inputs use `tsc --strict --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then `node dist/FILE.js`. Negative checks replace --outDir dist with --noEmit. Standard decorators here use the default decorator mode and emitted JavaScript; no direct source or framework execution is claimed.

### mixin.ts

```typescript
export {};
type Constructor = new (...args: any[]) => object;
function Tagged<B extends Constructor>(Base: B) {
  return class extends Base { tag(): string { return "tag"; } };
}
class Base {
  static kind = "base" as const;
  value: number;
  constructor(value: number) { this.value = value; }
}
const First = Tagged(Base);
const Second = Tagged(Base);
const first = new First(7);
console.log(First.kind, first.value, first.tag());
console.log(first instanceof Base, first instanceof First, first instanceof Second);
console.log(First === Second, first.tag === new Second(7).tag);
```

Build/runtime exit0: base 7 tag; true true false; false false. The emitted file contains one Tagged function and one tag method definition. Inferred static/constructor access succeeds; ancestry and separately generated identity are observed.

### abstract-good.ts

```typescript
export {};
type AbstractConstructor = abstract new (...args: any[]) => object;
function Tagged<B extends AbstractConstructor>(Base: B) {
  abstract class TaggedClass extends Base { tag = "tag"; }
  return TaggedClass;
}
abstract class Base { abstract run(): string; }
class Concrete extends Tagged(Base) { run(): string { return "done"; } }
console.log(new Concrete().run(), new Concrete().tag);
```

Build/runtime exit0: done tag. The returned class is explicitly abstract and the final concrete class supplies run.

### abstract-bad.ts

```typescript
export {};
type AbstractConstructor = abstract new (...args: any[]) => object;
function Tagged<B extends AbstractConstructor>(Base: B) {
  return class extends Base { tag = "tag"; };
}
```

NoEmit rejects TS2797, exit1. No runtime run.

### decorator.ts

```typescript
export {};
function addFlag<T extends new (...args: any[]) => object>(Base: T) {
  return class extends Base { decorated = true; };
}
@addFlag
class Example {}
console.log(Reflect.get(new Example(), "decorated"));
```

Default standard-decorator build/runtime exit0: true. The replacement class supplies a real runtime field.

### queries.ts

```typescript
export {};
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
abstract class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  abstract speak(): string;
}
class Dog extends Animal { speak(): string { return "woof"; } }
type AbstractResult = Expect<Equal<InstanceType<abstract new () => Animal>, Animal>>;
type AbstractArgs = Expect<Equal<ConstructorParameters<typeof Animal>, [name: string]>>;
function concrete(Ctor: new (name: string) => Animal): Animal { return new Ctor("Rex"); }
console.log(concrete(Dog).speak());
// NEG: concrete(Animal);
type AbstractCtor = abstract new (name: string) => Animal;
const registry = new Map<string, AbstractCtor>([["base", Animal]]);
const Ctor = registry.get("base");
if (Ctor) {
  const value = new (Ctor as new (name: string) => Animal)("forced");
  console.log(value instanceof Animal, typeof value.speak);
  try { value.speak(); }
  catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
}
```

Build/runtime exit0: woof; true undefined; TypeError. Both equality assertions pass. Activate NEG in a separate copy and noEmit rejects TS2345, exit1, because Animal is abstract; concrete Dog was accepted.

## Ordered additional repair plan and limits

**A28.1 — 06/3.2 plus class-domain index:** repairN85–N89, combining already-approved required-section/editorial/current-baseline outcomes. Use deterministic stacking with real inherited static/constructor/instance members, actual ancestry versus generated identity, concrete-versus-abstract subclass requirements and bounded emitted-code/runtime-allocation observations. Keep decorator mechanics at their existing owner and remove unsupported hierarchy-count/speed quotas. Verify missing members and constructor arguments as well as successful calls.

**A28.2 — 06/3.3 plus class-domain index:** repairN90–N91 and this explicitly identified N69 repetition, with already-approved erasure/gate corrections. Show actual constructor/instance tuples, concrete factory/registry bodies, non-instantiating abstract query/inspection and isolated rejected abstract construction. Verify emitted JavaScript separately from declaration output; ordinary field assignments can satisfy the declared syntax gate.

Each leaf/index is one verified, immediately logged and committed unit after approval. OriginalP1–P7 continues independently. Complete JS07/3.2 and3.4 were read this session for chain/order prediction techniques; their inaccurate super/arrow and unmeasured engine claims are not copied. Primary mixin class-expression guidance was read;4.2 abstract-subclass and5.0 decorator passages were actually consulted2026-10-15. Current installed utility declarations were inspected. The sources' worked contrasts supply teaching input; local executions establish the exact current results. No old compiler, bundler, native source, editor, lint, framework, network service or performance benchmark was run. Scratch /tmp/typescript-repairs/A028/results.json retains all ten results. An initial emit-counter check accidentally counted a tag call as a definition; corrected the inspection predicate and reran all ten commands before saving this report.
