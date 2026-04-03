## Update C# 12 (feature map + where it lives in this repo)

This domain is an **index** for C# 12-era features. Deep dives are in the linked sections below.

## 1. Constructors and initialization

### [1.1. Primary constructors in classes (and how they compose with `required`)](<../Constructors/sections/2. Constructor kinds/2.2. Primary constructors and required members.md>)

1. **When they shine**: small stable types where boilerplate reduction improves clarity
2. **Avoid when**: complex initialization logic would become hidden/implicit
3. **Perf note**: syntax-only; performance comes from what you do inside initialization

## 2. Collections and literals

### [2.1. Collection expressions (modern literal-style construction)](<../Arrays/sections/2. Creating Arrays/2.1. Creating arrays initialization forms including modern collection expressions.md>)

1. **Use for**: clear literals and spread (`[.. source]`) where supported
2. **Perf note**: understand allocation behavior (array/list creation vs span-based alternatives)
3. **Best practice**: keep it readable; don’t compress complex construction into one line

## 3. Lambdas

### [3.1. Default parameters in lambda expressions](<../Delegates and Events/sections/7. Anonymous methods and lambdas/7.5. Lambda explicit return type default parameters modifiers (CSharp 10 through 15).md>)

1. **Defaults** on lambdas; overload resolution with delegate conversions
2. **Perf**: default parameters do not add captures; accidental captures still allocate
3. **Also**: explicit return types and modifiers—same file

## 4. Namespaces and aliases

### [4.1. Alias any type (global using aliases as a large-solution tool)](<../Namespaces/sections/5. Using aliases/5.2. Global using aliases and hygiene.md>)

1. **Use for**: collision resolution and clarity across large solutions
2. **Maintainability**: keep alias lists small and justified
3. **Team guidance**: treat alias changes like API changes (they affect many files)
4. **Overlap guardrail**: pair this with [Update C# 10](<../Update CSharp 10/README.md>) for **file-scoped namespaces + global usings**—this C# 12 map focuses on **alias-any-type** ergonomics and large-solution navigation.

## 5. “Other stuff new in version 12”

### 5.1. C# 12 feature pointers (index)

1. **Primary constructors** (classes/structs): [Constructors 2.2](<../Constructors/sections/2. Constructor kinds/2.2. Primary constructors and required members.md>); **collection expressions**: [Arrays 2.1](<../Arrays/sections/2. Creating Arrays/2.1. Creating arrays initialization forms including modern collection expressions.md>)
2. **Inline arrays** (`[InlineArray]`), **`ref readonly` parameters**: extend topical domains when you add dedicated sections; see Microsoft Learn “What’s new in C# 12” for the full list
3. **Rule**: this README stays navigational only

## 6. Overlaps to avoid

1. **Construction and initialization** deep dives live in `Constructors` and `Properties and Indexers`.
2. **Collections** deep dives live in `Arrays` and `Collections`.
3. **Namespaces/aliases** deep dives live in `Namespaces`.
