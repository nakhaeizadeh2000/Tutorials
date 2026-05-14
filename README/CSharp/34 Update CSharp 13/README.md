## Update C# 13 (feature map + where it lives in this repo)

This domain is an **index** for C# 13-era features. Deep dives are in the linked sections below.

## 1. Method parameters and call-site ergonomics

### [1.1. `params` collections (C# 13+)](<../05 Methods/sections/6. Parameter modifiers and ref-like patterns/6.7. params parameters variable argument lists.md>)

1. **`params` ReadOnlySpan<T>**, **`params IEnumerable<T>`**, etc.—see **§4** inside the linked file
2. **Perf**: overload resolution + allocation behavior changed—measure hot call sites
3. **Domain map**: [Methods](<../05 Methods/README.md>) §6.7

## 2. Properties and indexers

### [2.1. Partial properties and indexers](<../12 Partial and Static Classes, Enumerations/sections/1. Partial types/1.4. Partial properties and indexers CSharp 13.md>)

1. **Source generators** and split implementation files
2. **Pair with**: [Properties and Indexers](<../08 Properties and Indexers/README.md>) for accessor semantics

### [2.2. Implicit index access in object initializers (`^`)](<../08 Properties and Indexers/sections/4. Auto-properties with accessor accessibility/4.3. Implicit index access from end in object initializers CSharp 13.md>)

1. **`^`** in initializers for indexable collections
2. **Perf**: syntax sugar; collection growth/allocation dominates

## 3. Fields and backing storage

### [3.1. `field` contextual keyword (property backing field)](<../08 Properties and Indexers/sections/2. Creating properties/2.3. field keyword backing fields property accessors CSharp 13 14.md>)

1. **Unifies** auto-property backing field access in accessors (C# 13+; extended in C# 14)
2. **Boundary**: conceptual “field” story also in [Fields](<../04 Fields/README.md>)—**keyword** details live under Properties
3. **See**: [Update C# 14](<../35 Update CSharp 14/README.md>) for C# 14 `field` refinements

## 4. “Other stuff new in version 13”

### 4.1. C# 13 feature pointers (index)

1. **`lock` on `ref`/`ReadOnlySpan`**, **`Escape`/`Unscoped` ref safety**: language/runtime ref-safety evolution—pair with `Structures` / `Fundamental Theories` as you add sections
2. **`params` collections** and **`field`**: linked above; **partial properties**: linked above
3. **Upstream**: Microsoft Learn “What’s new in C# 13” for the authoritative feature list

## 5. Overlaps to avoid

1. **`params` and overload resolution** live primarily in `Methods`.
2. **Property/indexer mechanics** live in `Properties and Indexers`.
3. **Partial composition semantics** live in `Partial and Static Classes, Enumerations`.
