# TypeScript review addendum — revision 20

This partial review covers the complete [parameter lesson](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.2. Parameters optional default rest and destructuring.md>) and [return/context lesson](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>) and the complete functions index during P4/P7. N01–N47 are implemented; revisions 18 and 19 remain pending. Ten completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-14. Lessons and published indexes are unchanged.

## N53 — Blocker: exact optional property checking is applied to optional parameters

Affected: 05/1.2 part 1 Definition. It says `?:` rejects explicit undefined under exactOptionalPropertyTypes while discussing parameters. The flag concerns optional properties. An optional parameter still accepts undefined. This contradicts the leaf's own greet(undefined) call and would give the learner a false call-site diagnostic.

## N54 — Blocker: every default parameter is described as an optional parameter

Affected: 05/1.2 part 1 Definition and arity discussion. The default-as-optional explanation omits its position condition. A default before a required parameter remains a required positional slot, with undefined permitted to request its fallback. The [primary function guide](https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters) explicitly distinguishes trailing defaults from defaults before required parameters.

Save parameters.ts:

```typescript
export {};
function optional(value?: string) { return value ?? "guest"; }
function required(value: string | undefined) { return value ?? "guest"; }
function leading(value = "guest", suffix: string) { return value + suffix; }
console.log(optional(), optional(undefined), required(undefined));
console.log(leading(undefined, "!"));
```

Compile with `tsc --strict --target es2022 --module commonjs --lib es2022,dom --exactOptionalPropertyTypes --outDir dist parameters.ts`: exit 0. `node dist/parameters.js` prints `guest guest guest` then `guest!`, exit 0. Checking the same file without exactOptionalPropertyTypes also exits 0.

Save property.ts:

```typescript
export {};
const options: { title?: string } = { title: undefined };
```

With the same flags plus --noEmit (instead of --outDir dist), the property file reports TS2375, exit 1. Without exactOptionalPropertyTypes, it exits 0. The [option reference](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html) establishes the property scope. The parameter's behavior and the property's behavior must be taught separately.

Save arity.ts:

```typescript
export {};
function leading(value = "guest", suffix: string) { return value + suffix; }
leading("Ada");
```

The same exact-mode noEmit check reports TS2554, Expected 2 arguments but got 1, exit 1. The value occupying the leading position can be undefined; the position cannot disappear.

**Repair N53–N54:** show optional versus required-undefined versus trailing default versus leading default. Include both flag modes for the parameter/property contrast and the accepted/rejected arity calls. Preserve rest/destructuring scope and explain defaults on the whole argument versus a property binding.

## N55 — Blocker: void callback assignment rejects valid async and annotated value-returning functions

Affected: 05/1.3 part 1 asyncVoid example and part 3 forEachVoid example. Both comments claim errors for assignments/calls accepted by the checker. A void callback contract permits the caller to ignore a returned value, including a Promise. A string return annotation on a passed callback does not remove that permission. An explicit void annotation on the implementation body is a different restriction.

Save void.ts:

```typescript
export {};
async function job(): Promise<void> { console.log("called"); }
const callback: () => void = job;
const annotated: (text: string) => string = text => text.toUpperCase();
function each(cb: (text: string) => void) { cb("hi"); }
each(annotated);
each((text: string): string => text.toUpperCase());
const result: unknown = callback();
console.log(result instanceof Promise);
```

Build with the same exact-mode flags: exit 0. `node dist/void.js` prints `called` then `true`, exit 0. Both annotated string-returning callbacks are accepted. The [primary void-assignability explanation](https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void) separates callback contracts from explicitly void-returning implementations. The promise remains a runtime promise; acceptance does not mean the callback host handles asynchronous completion or rejection.

**Repair:** contrast legal synchronous-discard and async-discard assignments with an actual Promise-aware host. Observe a controlled asynchronous failure without leaving an unhandled rejection; reject the genuinely invalid return/body and Promise<void> assignments separately. Replace false diagnostic comments and bound event-handler advice to the host's contract.

## N56 — Blocker: the shown string-literal return branches are said to infer string

Affected: 05/1.3 part 2 Definition and makeTag/parseStatus commentary. The exact boolean conditional expressions infer unions of the returned string literals. Annotation can publish a chosen contract, but it is not necessary to obtain these particular inferred unions.

Save literals.ts:

```typescript
export {};
type Equal<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
function flag(x: boolean) { return x ? "a" : "b"; }
export function parseStatus(raw: string) { return raw === "ok" ? "ok" : "error"; }
type A = Expect<Equal<ReturnType<typeof flag>, "a" | "b">>;
type B = Expect<Equal<ReturnType<typeof parseStatus>, "ok" | "error">>;
console.log(flag(true), parseStatus("bad"));
```

The same exact-mode build accepts both active Equal assertions, exit 0. `node dist/literals.js` prints `a error`, exit 0. These assertions check the exact reported claims rather than relying on hover or a comment. This finding does not claim that every return expression preserves literals: concatenation or an already widened source can change the outcome.

**Repair:** show exact inferred unions, an actually widened expression, explicit boundary annotation and the distinction between a checked narrow returned object and an annotated broader function return. Retain the contextual-typing example with active type assertions and a genuine detached-parameter failure.

## Two additional units and verification limits

1. **A20.1 — 05/1.2 plus functions index:** repair N53–N54 with approved F10 required sections/F14 bounded costs/P6 current baseline. Verify complete optional/default/rest/destructuring examples, arity failures and both property modes. One leaf and affected index, then verification/log/commit.
2. **A20.2 — 05/1.3 plus functions index:** repair N55–N56 with approved F10/F14/P6 and accepted N16 inference reminders. Verify actual callback behavior, controlled async outcome, inferred/annotated return types and contextual typing. Commit independently after A20.1.

Ten completed command/results are in `/tmp/typescript-repairs/A020/results.json`; all complete inputs are above. Relevant primary optional/default/void passages were read; local probes corroborate current behavior. Existing JavaScript observable-case calibration is reused. No old compiler, editor, lint, bundler, HTTP integration or performance benchmark ran. The first harness launch used unavailable `python`; it executed no probes. `python3` then completed all ten checks.

Original approved P1–P7 remains active; these four new material findings need additional acceptance. Revisions 18 and 19 remain separate pending gates. No lesson/index changes or future standing authorization are inferred from this report.
