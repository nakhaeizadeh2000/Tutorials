## 1. Delegates fundamentals (what they are, what they compile to, and why you care)

### [1.1. What a delegate really is (type-safe function pointer + object + invocation list)](<./sections/1. Delegates fundamentals/1.1. What a delegate really is.md>)

1. **Mental model** (a reference type that can point to a method; may also carry a target instance)
2. **How invocation works** (single-cast vs multicast; exceptions and return values semantics)
3. **Performance framing** (indirection, allocations, captures; don’t guess—measure allocations and throughput)

### [1.2. Delegate variance: covariance and contravariance in real APIs](<./sections/1. Delegates fundamentals/1.2. Delegate variance covariance contravariance.md>)

1. **Why it exists** (plugging compatible handlers without adapter code)
2. **Common examples** (`Func<out TResult>`, `Action<in T>`, event handler signatures)
3. **Pitfalls** (overload resolution surprises; nullability contracts; generic inference)

### [1.3. Method groups vs lambdas vs anonymous methods (selection + overload resolution)](<./sections/1. Delegates fundamentals/1.3. Method groups vs lambdas vs anonymous methods.md>)

1. **Choosing the right form** (readability, capture needs, testability)
2. **Overload resolution** (why “ambiguous call” happens; explicit casts and target typing)
3. **Best practices** (prefer method groups for non-capturing handlers; keep lambdas small and intention-revealing)

## 2. Creating delegates (declarations, assignments, and invocation)

### [2.1. Creating custom delegate types (`delegate` keyword): when you actually need it](<./sections/2. Creating delegates/2.1. Creating custom delegate types.md>)

1. **When custom delegates make sense** (domain-named callback types; interoperability; attributes)
2. **When not to** (prefer `Func<>`/`Action<>` for internal code; reduce surface area)
3. **API design** (names, nullability, exception expectations, sync/async clarity)

### [2.2. Creating delegates from methods (static/instance, open/closed delegates)](<./sections/2. Creating delegates/2.2. Creating delegates from methods open vs closed.md>)

1. **Instance target binding** (how the target object is captured by the delegate)
2. **Open vs closed delegates** (advanced: shape affects allocation and call sites)
3. **Practical advice** (cache delegates when repeatedly subscribing; avoid per-call allocations in hot paths)

### [2.3. Invoking delegates safely and idiomatically (null checks, `?.Invoke`, and thread-safety)](<./sections/2. Creating delegates/2.3. Invoking delegates safely.md>)

1. **Idioms** (`handler?.Invoke(...)` and why it’s preferred)
2. **Thread-safety reality** (atomicity of read + call; unsubscribes during invocation; race considerations)
3. **Exception strategy** (when to let exceptions bubble vs isolating subscribers)

## 3. Multicast delegates (invocation lists, behavior, and pitfalls)

### [3.1. Multicast delegates: combining/removing and the semantics of return values](<./sections/3. Multicast delegates/3.1. Multicast combine remove return values.md>)

1. **Combine/remove** (`+`, `-`, `Delegate.Combine`, `Delegate.Remove`)
2. **Return value rules** (last delegate wins; why this is usually a design smell)
3. **Exceptions** (one subscriber throwing stops later subscribers unless you isolate)

### [3.2. Inspecting and invoking invocation lists (advanced + when not to)](<./sections/3. Multicast delegates/3.2. Invocation list inspection advanced.md>)

1. **`GetInvocationList()`** (allocations and cost; use sparingly)
2. **Per-subscriber isolation** (logging failures without breaking others)
3. **Design rule** (prefer events for fan-out notifications; avoid “multicast delegate return values” APIs)

## 4. Built-in delegate types: `Func`, `Action`, `Predicate`, and common patterns

### [4.1. `Func<>` and `Action<>`: the defaults for callbacks](<./sections/4. Built-in delegate types/4.1. Func and Action defaults.md>)

1. **Choosing `Func` vs `Action`** (return values and intent)
2. **Nullability** (what `Func<T?>` vs `Func<T>` communicates)
3. **Performance tips** (prefer method groups; avoid captures; consider caching)

### [4.2. `Predicate<T>`: legacy vs readability vs modern guidance](<./sections/4. Built-in delegate types/4.2. Predicate legacy vs Func.md>)

1. **Where it appears** (`List<T>.Find*`, `RemoveAll`, etc.)
2. **When to keep it** (API consistency with BCL; clarity at call sites)
3. **When to prefer `Func<T, bool>`** (general callback APIs; composability)

## 5. Events fundamentals (the “publish/subscribe” contract in C#)

### [5.1. What an event is (restricted multicast delegate + encapsulation boundary)](<./sections/5. Events fundamentals/5.1. What an event is.md>)

1. **Why events exist** (prevent external code from overwriting the invocation list)
2. **Access rules** (subscribe/unsubscribe outside; raise inside)
3. **Key correctness idea** (events are an API boundary; lifetime management matters)

### [5.2. EventHandler patterns: `EventHandler`, `EventHandler<TEventArgs>`, and modern alternatives](<./sections/5. Events fundamentals/5.2. EventHandler patterns modern.md>)

1. **Classic .NET pattern** (`sender`, `EventArgs`, naming conventions)
2. **Modern guidance** (avoid `EventArgs` inheritance when it adds no value; consider plain record payloads for internal code)
3. **Interop** (UI frameworks, legacy libraries, and why `EventHandler` still matters)

## 6. Implementing events (explicit, auto-implemented, custom add/remove)

### [6.1. Declaring events with backing delegates (explicit event field pattern)](<./sections/6. Implementing events/6.1. Declaring events explicit backing field.md>)

1. **Standard form** (`public event EventHandler SomethingHappened;`)
2. **Raising correctly** (`?.Invoke`; ordering; nullability)
3. **Reentrancy considerations** (subscribers can call back into publisher; invariants must hold)

### [6.2. Auto-implemented events (what they mean, and why they’re “default good”)](<./sections/6. Implementing events/6.2. Auto-implemented events.md>)

1. **What the compiler provides** (hidden backing field)
2. **When they’re enough** (most cases)
3. **When they’re not** (custom storage, weak events, synchronization, or instrumentation)

### [6.3. Custom event accessors (`add`/`remove`): locking, performance, and correctness](<./sections/6. Implementing events/6.3. Custom event accessors add remove.md>)

1. **Why you’d do it** (thread-safe storage, custom subscription logic, bridging to other sources)
2. **Correctness traps** (deadlocks, reentrancy, forgetting to remove, memory leaks)
3. **Performance reality** (locks vs lock-free; contention; don’t over-engineer without a reason)

## 7. Anonymous methods, lambda expressions, and inline lambdas (modern callback ergonomics)

### [7.1. Anonymous methods (`delegate {}`) vs lambdas (`() => {}`): when each is useful](<./sections/7. Anonymous methods and lambdas/7.1. Anonymous methods vs lambdas.md>)

1. **Historical note** (anonymous methods exist for compatibility; lambdas are the modern default)
2. **Behavior differences** (rare edge cases like parameter typing/inference; readability)
3. **Guidance** (prefer lambdas unless you’re targeting a specific shape or porting old code)

### [7.2. Lambda captures and closures (the #1 performance and memory pitfall)](<./sections/7. Anonymous methods and lambdas/7.2. Captures closures allocations.md>)

1. **What capture means** (extending lifetimes; heap allocations; hidden state machines)
2. **Common capture bugs** (loop variable capture, large object capture, capturing `this`)
3. **Modern best practices** (prefer method groups; use `static` lambdas when you don’t need captures)

### [7.3. Inline lambda expressions at call sites (readability rules + avoiding “lambda soup”)](<./sections/7. Anonymous methods and lambdas/7.3. Inline lambdas readability rules.md>)

1. **When inline is great** (small predicates/projections; local policies)
2. **When to name it** (reused logic; unit testing; complex behavior; better stack traces)
3. **Performance note** (naming doesn’t fix captures—design does)

### [7.4. `static` lambdas (C# 9+) and how they prevent accidental allocations](<./sections/7. Anonymous methods and lambdas/7.4. static lambdas prevent captures.md>)

1. **Guarantee** (no captures; forces explicit parameters)
2. **Hot-path pattern** (callbacks in loops; event subscriptions; LINQ alternatives)
3. **Mentor rule** (default to `static` when feasible; it encodes intent)

## 8. Expression trees (code-as-data) vs delegates (code-as-execution)

### [8.1. `Expression<TDelegate>` vs `Func<>`: what’s compiled, what’s inspected](<./sections/8. Expression trees/8.1. Expression vs Func mental model.md>)

1. **Use cases** (LINQ providers/ORMs, query translation, rules engines)
2. **Costs** (allocation-heavy graphs; compilation cost; caching requirements)
3. **Guidance** (keep expression APIs narrow; don’t expose expressions “because it’s cool”)

### [8.2. Building and composing expression trees (performance + caching)](<./sections/8. Expression trees/8.2. Building composing expression trees caching.md>)

1. **Composition patterns** (parameter rebinding; avoiding accidental closures)
2. **Compile vs interpret** (trade-offs; caching compiled delegates)
3. **AOT/trimming considerations** (prefer explicit expression shapes; avoid heavy reflection)

## 9. Expression-bodied members and switch expressions (modern syntax that often pairs with callbacks)

### [9.1. Expression-bodied members: readability and debugging trade-offs](<./sections/9. Expression-bodied and switch expressions/9.1. Expression-bodied members trade-offs.md>)

1. **Where they help** (tiny wrappers, pure computed properties, guard clauses)
2. **Where they hurt** (complex logic; debugging; hidden allocations in “one-liners”)
3. **Delegate relevance** (avoid hiding captures and allocations behind terse syntax)

### [9.2. Switch expressions: mapping inputs to callbacks and strategies](<./sections/9. Expression-bodied and switch expressions/9.2. Switch expressions mapping to delegates.md>)

1. **Pattern** (choose a strategy `Func<>`/`Action<>` based on input)
2. **Correctness** (exhaustiveness; default case; nullability)
3. **Performance** (avoid allocating lambdas repeatedly; cache strategy delegates)

## 10. Performance, memory, and scalability (mentor-grade guidance for delegates/events)

### [10.1. Allocation sources: captures, delegate creation, and invocation list churn](<./sections/10. Performance memory scalability/10.1. Allocation sources captures delegate creation.md>)

1. **What allocates** (closures, expression trees, sometimes delegate instances; `GetInvocationList()` always allocates)
2. **What usually doesn’t** (method groups often avoid captures; trivial wrappers can inline)
3. **Rule of thumb** (avoid per-iteration handler creation; prefer caching and `static` lambdas)

### [10.2. Events and memory leaks (subscription lifetimes, strong references, and disposal patterns)](<./sections/10. Performance memory scalability/10.2. Events memory leaks subscription lifetimes.md>)

1. **Why leaks happen** (publisher holds strong refs to subscribers)
2. **Mitigations** (unsubscribe deterministically; tie to `IDisposable`; weak-event patterns where justified)
3. **Architectural guidance** (prefer scoped subscriptions; avoid “global event buses” without lifecycle control)

### [10.3. Thread-safety and reentrancy with events (real-world hazards)](<./sections/10. Performance memory scalability/10.3. Thread-safety reentrancy events.md>)

1. **Reentrancy** (subscriber calls back into publisher; invariants and ordering)
2. **Concurrency** (subscribe/unsubscribe races; raising from background threads)
3. **Practical patterns** (immutable snapshots; minimal locks; don’t block in event handlers)

## 11. Important points to remember (checklist: correctness + best practices + performance)

### [11.1. Checklist: delegates and events you should not forget](<./sections/11. Important points/11.1. Checklist delegates events.md>)

1. **Prefer events for fan-out notifications; avoid multicast return-value APIs**
2. **Prefer method groups or `static` lambdas to avoid captures**
3. **Always treat event subscriptions as a lifetime/ownership concern**
4. **Never block or do heavy work in event handlers—offload intentionally**
5. **Use expression trees only when you truly need inspection/translation**

## 12. Interview questions and answers (delegates, events, lambdas; C# 15 era)

### [12.1. Common interview Q&A: delegates and events](<./sections/12. Interview Q and A/12.1. Interview questions delegates events.md>)

1. **What’s the difference between a delegate and an event?**
2. **What is a multicast delegate and what are its return-value/exception semantics?**
3. **What is a closure and why can it allocate? How do `static` lambdas help?**
4. **Why do events cause memory leaks and how do you prevent them?**
5. **`Func` vs `Action` vs `Predicate` vs custom delegate—how do you choose?**
6. **Expression trees vs delegates—when do you need each?**
7. **Thread-safety and reentrancy: what can go wrong when raising events?**

## 13. Overlaps to avoid (where this domain stops)

### [13.1. Boundaries: what is covered elsewhere in this repo](<./sections/13. Overlaps to avoid/13.1. Boundaries what is covered elsewhere.md>)

1. **General overload resolution and method design** lives in `Methods` (this domain focuses on delegate-specific resolution and callback pitfalls)
2. **Switch statements/expressions (intro level)** live in `CSharp language basics/5.3` (here: switch-as-strategy for delegates)
3. **Async/await and callback-based asynchrony** live in `Cuncurrent & Parallel` (here: events/delegates as a callback mechanism, not the async model itself)
4. **Encapsulation and invariants (OOP big picture)** live in `CSharp Basic Object Oriented Programming` (here: event as an encapsulation boundary)
5. **Allocation theory and GC deep dive** live in `Fundamental Theories` and `GC and Destructors and IDisposable` (here: practical allocation sources from closures/events)
