# Creational Patterns

Who makes objects, and how callers stay ignorant: disciplined singletons, factory methods deferring instantiation, abstract factories swapping families, builders assembling stepwise, and prototypes cloning. SOLID foundations live in [Domain 01](<../01 SOLID Principles and Design Foundations/README.md>); this domain spends them on creation — every pattern here answers "where does `new` belong?" so callers never ask.

## 0. Prerequisites

[Domain 01: SOLID Principles and Design Foundations](<../01 SOLID Principles and Design Foundations/README.md>) (SRP splitting, OCP seams, DIP injection — creation flows through all three) plus TypeScript construction mechanics ([TypeScript 06 §1.2](<../../TypeScript/06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md>) — constructors, `private`, factories as typing). This domain assumes both and spends its pages on patterns, not syntax.

## 1. Singletons and factories

### [1.1. Singleton: discipline, not default](<./sections/1. Singletons and factories/1.1. Singleton discipline not default.md>)

1. **One instance with a global address** (private constructor + static accessor — verified identity; second argument ignored).
2. **Shared mutable state is the liability** (test pollution, hidden coupling, concurrency hazards — strangers sharing a toothbrush).
3. **Legitimate singletons are rare and boring** (immutable config, single hardware handle — stateless or frozen, never convenient).

### [1.2. Factory Method: defer instantiation](<./sections/1. Singletons and factories/1.2. Factory Method defer instantiation.md>)

1. **Creators declare, subclasses decide** (abstract `make()` — verified `render:pdf`/`render:html` — framework calls, extensions supply).
2. **Callers depend on products, never concretes** (return abstractions — `new` lives in exactly one place per kind).
3. **Static factories are the pragmatic cousin** (overloads + named constructors — validation and caching without subclasses).

---

## 2. Families and builders

### [2.1. Abstract Factory: swap whole families](<./sections/2. Families and builders/2.1. Abstract Factory swap whole families.md>)

1. **Interfaces per product, factory per family** (buttons + checkboxes × light/dark — consistent suites, no mixed themes).
2. **Family swaps are one-line composition changes** (inject the factory — entire product lines pivot together).
3. **New products cost across families** (adding a product touches every factory — the trade openly priced).

### [2.2. Builder: assemble stepwise](<./sections/2. Families and builders/2.2. Builder assemble stepwise.md>)

1. **Fluent steps replace telescoping constructors** (chained setters — readable at 6+ parameters where positionals collapse).
2. **Validation at `build()` time** (incomplete objects unbuildable — invariants enforced once, at the gate).
3. **Directors encode recipes** (preset configurations as named methods — common builds one call away).

---

## 3. Cloning

### [3.1. Prototype: clone, don't rebuild](<./sections/3. Cloning/3.1. Prototype clone do not rebuild.md>)

1. **Clone configured exemplars** (deep-copy the prototype — expensive setup amortized across copies).
2. **Shallow vs deep is the whole question** (shared references leak across clones — depth decided per field).
3. **Registries name the prototypes** (clone-by-key — configuration catalogs without construction logic).

---

## 4. Important points to remember (creational)

### [4.1. Creational checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Creational checklist habits mentors insist on.md>)

1. **`new` lives behind seams** (callers receive abstractions — construction sites counted, each justified).
2. **Singletons justified, never defaulted** (global state with a written reason — or injected instead).
3. **Builders past four parameters** (telescoping constructors banned — fluent or options-object at threshold).

---

## 5. Interview questions and answers (creational)

### [5.1. Common interview QA: creational patterns](<./sections/5. Interview questions and answers/5.1. Common interview QA creational patterns.md>)

1. **Singleton vs static vs DI-singleton?** (the lifetime screen — three "one instance" shapes, different testability).
2. **Factory Method vs Abstract Factory?** (the scope screen — one product vs families, subclass vs composition).
3. **Builder vs telescoping constructor?** (the readability screen — fluent validation at the gate), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Principles underneath** (SRP/OCP/DIP → Domain 01; this domain applies, never re-derives).
2. **Structural/behavioral/modern** (wrapping/decorating → 03; strategies/observers → 04–05; DI containers → 06).
3. **Language mechanics** (constructors, modifiers → TypeScript track; this track owns pattern judgment).
