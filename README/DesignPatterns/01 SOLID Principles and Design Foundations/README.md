# SOLID Principles and Design Foundations

The principles every pattern in this track serves: single responsibility with cohesion, open-closed extension points, Liskov behavioral contracts, segregated interfaces with inverted dependencies, and composition with coupling budgets. TypeScript class mechanics live in the [TypeScript track](<../../TypeScript/06 Classes and Object-Oriented Types/README.md>); this domain teaches *design judgment with types* — principles that decide between patterns, not syntax that implements them.

## 0. Prerequisites

[TypeScript 06: Classes and Object-Oriented Types](<../../TypeScript/06 Classes and Object-Oriented Types/README.md>) (classes, interfaces, modifiers — mechanics assumed, priced in design terms here). This domain assumes working classes and spends its pages on principles, not syntax.

## 1. Responsibility and extension

### [1.1. Single responsibility and cohesion](<./sections/1. Responsibility and extension/1.1. Single responsibility and cohesion.md>)

1. **One reason to change per module** (SRP: axes of change, not duties counted — cohesion measured by shared reasons).
2. **Splitting by change cadence** (fast-moving validation apart from stable persistence — change rates cluster responsibilities).
3. **God objects billed on every edit** (merge conflicts, test blast radius, review sprawl — the invoices SRP prevents).

### [1.2. Open-closed with extension points](<./sections/1. Responsibility and extension/1.2. Open closed with extension points.md>)

1. **Open for extension, closed for modification** (new behavior via new code — strategy-shaped seams, not edited branches).
2. **Extension points designed, not discovered** (interfaces at variation axes — plugin seams placed where change arrives).
3. **Modification risk priced per edit** (tested code touched = tests re-earned — closed modules keep their proofs).

---

## 2. Substitution and dependencies

### [2.1. Liskov substitution and behavioral contracts](<./sections/2. Substitution and dependencies/2.1. Liskov substitution and behavioral contracts.md>)

1. **Subtypes honor supertype contracts** (preconditions weakenable-only, postconditions strengthen-only — behavioral, not nominal).
2. **Rectangle-square is the canonical trap** (mutator asymmetry breaks substitutability — inheritance refused where composition fits).
3. **Contracts enforced by types and tests** (branded parameters, invariant asserts, substitutability test matrices).

### [2.2. Interface segregation and dependency inversion](<./sections/2. Substitution and dependencies/2.2. Interface segregation and dependency inversion.md>)

1. **Small cohesive interfaces over fat ones** (ISP: depend on methods used — fat interfaces couple to unused surface).
2. **Depend on abstractions** (DIP: high-level policy owns interfaces — details plug in, never dictate).
3. **Inversion enables testing and swapping** (constructor-injected abstractions — fakes slide in, vendors swap out).

---

## 3. Composition and coupling

### [3.1. Composition over inheritance and coupling budgets](<./sections/3. Composition and coupling/3.1. Composition over inheritance and coupling budgets.md>)

1. **Compose behavior, inherit interface** (delegation over override — fragile-base-class incidents end here).
2. **Coupling budgeted per boundary** (afferent/efferent awareness — stable modules depended upon, volatile ones isolated).
3. **Inheritance reserved for substitutability** (is-a with contracts — leaf 2.1 decides; everything else composes).

---

## 4. Important points to remember (foundations)

### [4.1. Foundations checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Foundations checklist habits mentors insist on.md>)

1. **One reason to change, stated** (every module names its axis — review checks the name, not just the code).
2. **Extension without modification** (variation axes carry seams — new behavior lands in new files).
3. **Substitute provably, depend abstractly** (contracts tested, interfaces segregated, dependencies injected).

---

## 5. Interview questions and answers (foundations)

### [5.1. Common interview QA: SOLID and foundations](<./sections/5. Interview questions and answers/5.1. Common interview QA SOLID and foundations.md>)

1. **Refactor this god class — narrate axes** (the decomposition screen — change reasons, not duty counts).
2. **When would you violate SOLID?** (the judgment question — pragmatism with priced trade-offs, not dogma).
3. **Square-rectangle: inherit or compose?** (the substitutability trap — contracts decide, syntax obeys), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Language mechanics** (classes, modifiers, decorators syntax — TypeScript track owns the *how*; this track owns the *why*).
2. **Concrete patterns** (creational → 02; structural → 03; behavioral → 04–05; modern → 06 — principles applied there).
3. **Vocabulary naming** (principle names in meetings → IT Vocabulary; this track owns the engineering).
