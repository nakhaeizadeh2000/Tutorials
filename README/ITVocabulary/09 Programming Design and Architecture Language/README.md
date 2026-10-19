# Programming Design and Architecture Language

Understand program and architecture discussions through concrete responsibilities, boundaries and evidence. The preceding software, API and data domains supply the prerequisites. This domain explains design language and trade-offs; full algorithm, pattern, framework and system implementations remain deeper study. Small examples state their tested environment and do not require a backend framework.

This domain is complete: all 11 approved lessons are available.

## 1. Reasoning about programs

### [1.1. Algorithms data structures complexity and invariants](<sections/1. Reasoning about programs/1.1. Algorithms data structures complexity and invariants.md>)

1. **Separate a procedure from the structures it operates on:** interpret algorithms, data structures, interfaces and common collection organizations without imposing one language representation.
2. **Count work while preserving the search contract:** run a complete linear-search example and explain first-match, absence, empty-input and loop-invariant reasoning.
3. **Read complexity with an operation case and cost model:** distinguish growth bounds, cases, auxiliary memory and full-operation costs from actual measured duration.

### [1.2. Imperative declarative functional and object-oriented styles](<sections/1. Reasoning about programs/1.2. Imperative declarative functional and object-oriented styles.md>)

1. **Distinguish explicit steps from a stated result:** interpret imperative, procedural and declarative language while recognizing that programs can mix approaches.
2. **Identify data flow objects and effects:** explain functional programming, pure functions, side effects and object-associated state and methods.
3. **Compare the same calculation without changing its contract:** run a complete comparison and distinguish private bookkeeping from changed inputs and external effects.

## 2. Managing dependencies

### [2.1. Abstraction encapsulation interfaces coupling and cohesion](<sections/2. Managing dependencies/2.1. Abstraction encapsulation interfaces coupling and cohesion.md>)

1. **Name the operation contract and the detail it hides:** distinguish abstraction, interfaces, representation independence and indirection through a small roster contract.
2. **Protect the owner’s rules across the exposed interface:** run a snapshot example and explain how a mutable-reference leak bypasses controlled operations.
3. **Assess dependencies and responsibility through a concrete change:** use coupling and cohesion to judge a representation change rather than relying on class counts or slogans.

### [2.2. Dependency injection inversion of control and dependency inversion](<sections/2. Managing dependencies/2.2. Dependency injection inversion of control and dependency inversion.md>)

1. **Separate supplying dependencies from controlling execution:** distinguish DI, constructor injection, composition roots, containers, service locators and IoC.
2. **Read source dependencies separately from runtime calls:** explain DIP using a policy-owned contract and separate dependency and invocation sketches.
3. **Classify a wiring claim and its remaining obligations:** identify Nest provider/token roles and reason about substitution, lifetime and integration limits without assuming container use proves architecture quality.

## 3. Principles and refactoring

### [3.1. SOLID DRY KISS YAGNI patterns and antipatterns](<sections/3. Principles and refactoring/3.1. SOLID DRY KISS YAGNI patterns and antipatterns.md>)

1. **Interpret the five SOLID principles through their intended boundaries:** expand the names and evaluate responsibility, extension, substitution and consumer contracts without class-count rules.
2. **Distinguish duplicated knowledge from similar-looking text:** trace independent refund and invitation rules and identify when shared policy knowledge needs one authoritative representation.
3. **Use simplicity and pattern names to justify a specific decision:** apply KISS, YAGNI and pattern vocabulary to a concrete proposal with explained trade-offs.

### [3.2. Refactoring rewrites technical debt and legacy systems](<sections/3. Principles and refactoring/3.2. Refactoring rewrites technical debt and legacy systems.md>)

1. **Separate behavior-preserving restructuring from a changed requirement:** run a before/after extraction and distinguish preserved values/errors from an altered seat-count rule.
2. **Describe the future cost behind a debt claim:** identify principal, interest and deliberate or discovered burdens without equating age, bugs or missing features with debt.
3. **Judge replacement and legacy claims without an age shortcut:** classify rewrites, modernization and gradual replacement and ask for compatibility and migration evidence.

## 4. Architectural boundaries

### [4.1. Layers tiers modules components monoliths and microservices](<sections/4. Architectural boundaries/4.1. Layers tiers modules components monoliths and microservices.md>)

1. **Separate logical organization from deployment placement:** interpret layers, tiers and source/runtime arrows with an explicit diagram scope.
2. **Distinguish modules and components from independent services:** compare language/framework organization, monoliths, modular monoliths and microservice deployment boundaries.
3. **Read a boundary claim against concrete change evidence:** classify four deployment packets and explain independent-change, compatibility and operational trade-offs.

### [4.2. Clean hexagonal DDD CQRS and event sourcing](<sections/4. Architectural boundaries/4.2. Clean hexagonal DDD CQRS and event sourcing.md>)

1. **Recognize policy boundaries in Clean and hexagonal architecture:** explain inward source dependencies, use cases, ports and technology adapters without a fixed circle or port count.
2. **Place DDD around shared understanding and an explicit model boundary:** interpret Domain-Driven Design, ubiquitous language and bounded contexts through an original customer-meaning disagreement.
3. **Separate read/write models from an authoritative event history:** distinguish CQRS, event sourcing and publication using a worked history and four design variants.

## 5. Models and representations

### [5.1. Domains entities value objects aggregates and architecture diagrams](<sections/5. Models and representations/5.1. Domains entities value objects aggregates and architecture diagrams.md>)

1. **Distinguish domain identity from equal values and memory identity:** interpret domains, models, entities and value objects through booking and seat-selection cases.
2. **Read an aggregate as a rule-enforcement boundary:** identify the root and local invariant while exposing a separate workshop-capacity coordination question.
3. **Select a diagram view and read its claims within that scope:** recognize UML and C4 views, interpret a labeled interaction sketch and reject unsupported deployment or performance conclusions.

## 6. Applied design review

### [6.1. Review a proposal that hides decisions behind pattern names](<sections/6. Applied design review/6.1. Review a proposal that hides decisions behind pattern names.md>)

1. **Expand the names into requirements and boundaries:** Identify the product rules and concrete design obligations hidden behind a pattern-heavy proposal.
2. **Separate established facts from unsupported conclusions:** Trace inspected source, deployment, calculation, identity and model evidence to scoped conclusions.
3. **Request discriminating evidence and give usable feedback:** Write technical and product feedback, revise conclusions when evidence changes and explain an interview answer.

## 7. Overlaps to avoid

### [7.1. Boundaries of design vocabulary](<sections/7. Overlaps to avoid/7.1. Boundaries of design vocabulary.md>)

1. **Keep each design question with its conceptual owner:** Route algorithm, dependency, behavior, deployment and model questions to their precise existing explanations.
2. **Choose deeper study from the missing implementation skill:** Distinguish vocabulary competence from algorithm, pattern, architecture and framework implementation practice.
3. **Hand off a mixed design claim without losing the requirement:** Separate capacity, adapter compatibility and report-cost claims and update only conclusions supported by new evidence.

[← Back to IT Vocabulary](<../README.md>)
