## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. Anonymous Types (compiler-generated structural types)

### [1.1. What anonymous types are (creation, shape identity, and why you can’t name them)](<./sections/1. Anonymous types fundamentals/1.1. What anonymous types are creation shape identity and why you cant name them.md>)

1. **Definition**: compiler-generated reference types created with `new { ... }`
2. **Type identity is the shape**: property *names*, *types*, and *order* define the generated type
3. **Strong typing without a name**: you typically hold them in `var`/inferred locals because the compiler name is not expressible in source

### [1.2. Property naming rules (`x` vs `X = expr`) and inference impacts](<./sections/1. Anonymous types fundamentals/1.2. Property naming rules and type inference impacts.md>)

1. **Implicit members**: `new { Id, Name }` uses identifiers as property names
2. **Explicit rename**: `new { Id = source.Id }` changes the property name (and therefore the shape)
3. **Inference side-effects**: conditional/null-coalescing expressions can change the inferred member type (and thus the shape)

### [1.3. Immutability + generated behavior (`Equals`, `GetHashCode`, `ToString`, deconstruction)](<./sections/1. Anonymous types fundamentals/1.3. Immutability generated members equals gethashcode tostring deconstruction.md>)

1. **Immutability**: generated properties are get-only; no “partial mutation” of the anonymous object itself
2. **Structural/value equality**: equality and hashing are generated from property values (shape + member values)
3. **Deconstruction/debugger support**: generated members make anonymous snapshots easier to inspect

### [1.4. `with` expressions for anonymous types (non-destructive snapshot updates)](<./sections/1. Anonymous types fundamentals/1.4. with expressions on anonymous types.md>)

1. **`with` produces a new instance**: it’s non-destructive; treat it as “allocate another snapshot”
2. **Only specified members change**: other property values come from the original instance
3. **Shared reference values**: nested reference-typed property values are not deep-copied automatically

## 2. Nested Anonymous Types

### [2.1. Nested anonymous objects (`new { Outer = new { ... } }`) and readability boundaries](<./sections/2. Nested anonymous types/2.1. Nested anonymous objects and readability.md>)

1. **Nesting is just a property value**: the inner anonymous type instance sits inside an outer anonymous type property
2. **Shape stacking**: changing the inner shape changes the entire outer shape
3. **Maintainability rule**: keep nested shapes small; switch to `record`/DTO when the projection becomes a real contract

### [2.2. Nested anonymous types in LINQ projections (allocation + complexity framing)](<./sections/2. Nested anonymous types/2.2. Nested anonymous types in LINQ projections and groupings.md>)

1. **Allocation reality**: each projection element allocates an anonymous instance; nesting multiplies per-row allocations
2. **Stability rule**: ensure the nested shape is consistent across query stages
3. **Performance guidance**: prefer streaming until you need materialization; avoid repeated `ToList`/`ToArray` boundaries inside pipelines

### [2.3. Equality + hashing with nested shapes (deep structural behavior)](<./sections/2. Nested anonymous types/2.3. Nested equality hashing structural behavior.md>)

1. **Deep structural equality**: outer equality incorporates nested anonymous equality (at every nested level)
2. **Dictionary key correctness**: safe only if the values that participate in equality behave consistently (reference-typed properties can still be mutable)
3. **Order sensitivity**: property order contributes to identity; keep projection order consistent

## 3. Anonymous Arrays (arrays of anonymous type instances)

### [3.1. Creating arrays of anonymous types (`new[] { new { ... } }`) and element type inference](<./sections/3. Anonymous arrays/3.1. Creating arrays of anonymous types and element type inference.md>)

1. **Single-shape arrays**: all elements must share the same anonymous shape
2. **Mixed-shape arrays**: differing property names/types/order prevent a single inferred element type
3. **Mentor rule**: if the array element shape becomes reusable across methods, use a named `record`/DTO

### [3.2. Anonymous arrays vs `object[]`/`dynamic[]` (type-safety and tooling trade-offs)](<./sections/3. Anonymous arrays/3.2. Anonymous arrays vs object dynamic and type safety loss.md>)

1. **Avoid “erasing” the shape**: `object[]`/`dynamic[]` removes compile-time property access and increases runtime risk
2. **Use explicit projection consistency**: identical property sets across elements keep strong typing intact
3. **Hot-path caution**: repeated anonymous array materialization inside loops increases GC pressure

### [3.3. Materialization boundaries (when arrays are the wrong final form)](<./sections/3. Anonymous arrays/3.3. Materialization boundaries arrays vs streaming.md>)

1. **Latency vs memory**: arrays require immediate allocation; streaming defers work and reduces peak memory
2. **Batching guidance**: if you must materialize, materialize once at a clear boundary and reuse results
3. **Avoid accidental N+1 projection allocations**: watch for nested enumerations that rebuild anonymous arrays repeatedly

## 4. IMP points to remember about Anonymous Types

### [4.1. Checklist: correctness, maintainability, and performance](<./sections/4. IMP points/4.1. Checklist correctness maintainability and performance.md>)

1. **Keep anonymous types local**: short-lived projections inside a method are the safest sweet spot
2. **Treat shape changes as breaking**: rename/reorder/add a property changes the generated type identity
3. **Avoid cross-boundary leakage**: don’t “smuggle” anonymous shapes via `object`/`dynamic` out of the method layer
4. **Allocation awareness**: anonymous instances are heap allocations; large projections amplify GC churn
5. **Structural equality**: equality and hashing are driven by shape + member values; nested equality is deep

### [4.2. Quick performance heuristics (CPU + RAM + GC)](<./sections/4. IMP points/4.2. Performance heuristics cpu ram gc.md>)

1. **Equality cost grows with shape**: many properties can increase comparison cost
2. **`with` amplifies allocations**: treat `with` as “new snapshot” and avoid chaining in hot loops
3. **Nested shapes cost more**: nesting increases per-element allocation and object graph size
4. **Materialize intentionally**: choose one materialization boundary instead of repeatedly rebuilding arrays/lists

## 5. Common pitfalls and production gotchas

### [5.1. “Same idea, different type” bugs (order/name/type drift)](<./sections/5. Pitfalls/5.1. Property order name differences and type drift.md>)

1. **Order matters**: property order participates in identity
2. **Renames change the shape**: `Id` vs `Identifier` produces a different anonymous type
3. **Avoid drift**: centralize the projection or switch to named types when multiple query paths must match

### [5.2. Inference surprises (nullable/conditional expressions)](<./sections/5. Pitfalls/5.2. Nullable conditional expressions inferred property types.md>)

1. **Nullability can widen/narrow**: `string` vs `string?` influences inferred member types
2. **Ternary/`??` influence**: conditional results can change member type (and thus the shape)
3. **Interview takeaway**: the compiler’s inference rules determine the anonymous type shape

### [5.3. Allocation traps in LINQ-heavy code](<./sections/5. Pitfalls/5.3. Allocations from projections and query materialization.md>)

1. **Projection allocations add up**: each produced element allocates an anonymous instance
2. **Materialization allocates containers**: `ToArray`/`ToList` adds container allocation on top of element allocations
3. **Mitigation**: prefer streaming (`IEnumerable`/`IAsyncEnumerable`) until you must materialize; measure with a profiler

## 6. Interview Questions and Answers (Anonymous Types)

### [6.1. High-frequency interview Q&A (anonymous, nested, arrays)](<./sections/6. Interview Q and A/6.1. Interview Q&A anonymous types nested and arrays.md>)

1. **Q: What makes an anonymous type “type-safe” if you can’t name it?**
   1. **A:** The compiler generates a strongly-typed structural type; you access members via compile-time inference (`var`/inferred locals)
2. **Q: When do two anonymous types become incompatible?**
   1. **A:** When the property *sequence* differs (names, types, and order define identity)
3. **Q: How does nesting affect equality and identity?**
   1. **A:** Nested anonymous types participate in structural equality; changing inner shape changes the outer generated type shape
4. **Q: How do you create an array of anonymous types?**
   1. **A:** Use `new[] { new { ... }, new { ... } }` with a consistent anonymous element shape across all elements
5. **Q: Why should you avoid returning anonymous types from public APIs?**
   1. **A:** The type name can’t be written in method signatures; you end up using `object`/`dynamic` and lose tooling/refactor safety
6. **Q: Anonymous type vs `record`—what are the key differences?**
   1. **A:** `record` has a stable named contract across boundaries; anonymous types are local projections with stronger “shape locality” assumptions
7. **Q: What are the biggest performance risks in real code?**
   1. **A:** Allocation pressure from projections/materialization, increased object graph size from nesting, and `with` snapshot churn

### [6.2. Mentor-grade follow-ups (correctness + performance)](<./sections/6. Interview Q and A/6.2. Mentor-grade interview followups anonymous types.md>)

1. **Q: Can anonymous types be dictionary keys?**
   1. **A:** Yes, because hashing/equality are generated structurally, but be careful if reference-typed property values are mutable
2. **Q: Are anonymous types immutable?**
   1. **A:** The anonymous type’s properties are read-only; however, reference-typed property values can still be mutated externally
3. **Q: What does `with` do to an anonymous type?**
   1. **A:** It creates a new anonymous instance (another allocation) with one or more members changed
4. **Q: How do you pattern match nested anonymous types?**
   1. **A:** Use property patterns that mirror the nested shape (e.g., `{ Outer: { Inner: ... } }`)

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries: what is covered elsewhere in this repo](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **`var` introduction + basic anonymous-type mention** is covered under [4.1. var rules legality inference anonymous types](<../17 Extension Methods and others/sections/4. Implicitly typed variables var/4.1. var rules legality inference anonymous types.md>)
2. **General LINQ fundamentals** (enumeration/projection mechanics) live in [21 Collections](<../21 Collections/README.md>)
3. **Runtime allocation/GC deep theory** lives in [01 Fundamental Theories](<../01 Fundamental Theories/README.md>) and [18 GC and Destructors and IDisposable](<../18 GC and Destructors and IDisposable/README.md>)
4. **Records/named DTO contracts** should be used when anonymous shapes must cross boundaries; those guidance pieces live in their respective domains
