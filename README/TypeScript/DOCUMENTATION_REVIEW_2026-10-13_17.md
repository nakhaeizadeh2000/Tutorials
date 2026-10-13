# TypeScript review addendum — revision 17

This partial review covers the complete [04/5.1 object-pitfalls lesson](<04 Objects Interfaces and Type Aliases/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by object type misunderstandings.md>) and its index during the original P4/P7 pass. N01–N44 are implemented; N45–N46 remain pending in revision 16. Two completed compiler commands used TypeScript 7.0.2 on 2026-10-13. No lesson/index changes in this report.

## N47 — Blocker: an index signature is said to widen an explicitly literal-valued kind

Affected: part 3 definition, guidance, LooseEvent explanation, Common confusion and owner-link description. The lesson says `[key: string]: unknown` floods a declared literal kind to string. It does not. The LooseEvent example explicitly declares `kind: string`; that independent choice permits the typo. An index signature permits additional keys but preserves compatible explicit member types.

Save `kind.ts`:

```typescript
export {};
type Tagged = { kind: "click" | "hover"; [key: string]: unknown };
const valid: Tagged = { kind: "click", extra: 1 };
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Kind = Expect<Equal<Tagged["kind"], "click" | "hover">>;
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit kind.ts` exits 0 with the live equality probe. Copy it to `typo.ts` and append:

```typescript
const typo: Tagged = { kind: "clikc" };
```

The same check on typo.ts rejects with TS2820, exit 1. The checker suggests click because the declared member remains the literal union. No runtime command was needed to establish this static distinction. The already consulted [primary object-type reference](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) describes compatible explicitly named members and index signatures; the current compiler supplies the concrete corroboration.

**Repair:** separate an open key domain from a broadened named-member value. Compare the original explicit `kind: string` with a preserved literal union and show the actual typo rejection. For correlated branch payloads, use the existing discriminated-union owner rather than claiming that a single kind union on one object proves every payload relationship. Do not suggest that an index signature itself erases all literal discriminants.

## One additional unit and limits

**A17.1 — 04/5.1 plus index:** repair N47's false causal claim and verify the open-key/literal-member contrast. Combine already approved N15 spread, N30 modifier-conflict, N29 scope, N41 required-member and F10/F14 repeated corrections; rebuild complete controlled failure/remedy examples without claimed real-service incidents. The required/optional merge conflict already has approved evidence in revision 11/R044, so it needs no new acceptance. One leaf/index → actual verification → immediate log → one commit.

Two completed inputs/results are retained in `/tmp/typescript-repairs/A017/results.json`; the reproduction bodies are complete above. JavaScript's observable-case teaching calibration is reused, with actual type probes for this static distinction. No editor, lint, service, production rate or performance benchmark ran. This is one new finding; it does not authorize future corrections or another curriculum. Original P1–P7 continues independently while additional approval is pending.
