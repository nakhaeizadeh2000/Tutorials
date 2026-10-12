## 1. Delegates fundamentals (what they are, what they cost, when to use them)

### [1.1. Delegates mental model: type-safe function pointers + invocation list](<./sections/1. Delegates fundamentals/1.1. Delegates mental model type-safe function pointers invocation list.md>)

1. **What a delegate really is** (an object that stores a target + method; can be open/closed; can be null; supports `Invoke` + `BeginInvoke` is legacy)
2. **Where delegates shine** (callbacks, plug-in points, strategy selection, event notifications, pipeline composition)
3. **Performance framing** (delegate allocations, closure allocations, invocation overhead, inlining limits; “measure hot paths” rule)

### [1.2. Delegate variance, method groups, and overload resolution traps](<./sections/1. Delegates fundamentals/1.2. Delegate variance method groups overload resolution traps.md>)

1. **Variance** (`in`/`out` on generic delegates; why `Action<in T>` and `Func<out T>` exist)
2. **Method groups** (conversion rules; overload resolution ambiguity with lambdas/method groups)
3. **Correctness pitfalls** (accidentally binding to the wrong overload; `null` + lambdas; extension methods vs instance methods)

## 2. Creating delegates (custom delegates, `Func`/`Action`/`Predicate`, and caching)

### [2.1. Creating custom delegates: when you should (and should not)](<./sections/2. Creating delegates/2.1. Creating custom delegates when you should and should not.md>)

1. **When custom delegates are justified** (domain-specific naming, `ref`/`in`/`out` signatures, `ref struct` constraints, analyzers/clarity)
2. **When they are not** (most app code: prefer `Action`, `Func`, `Predicate`, `EventHandler<TEventArgs>`)
3. **API design** (name conveys intent; choose parameters that keep allocations low; avoid “god callback” signatures)

### [2.2. Using `Func`, `Action`, and `Predicate`: idioms and trade-offs](<./sections/2. Creating delegates/2.2. Using Func Action Predicate idioms trade-offs.md>)

1. **`Func` vs `Action` vs `Predicate`** (return vs no return vs boolean naming intent; `Predicate<T>` rarely needed in modern code but still appears in APIs)
2. **Nullability** (annotate delegate inputs/returns; treat callbacks as required/optional explicitly)
3. **Performance** (avoid per-call allocations; pass static lambdas; consider caching delegates for repeated subscriptions)

### [2.3. Anonymous methods and method group conversions](<./sections/2. Creating delegates/2.3. Anonymous methods and method group conversions.md>)

1. **Anonymous methods** (`delegate (...) { ... }`): legacy but still useful for explicit parameter typing or `ref`-like clarity in rare cases
2. **Modern default**: lambdas + method groups (clearer intent; better tooling; combine with `static` lambdas to prevent captures)
3. **Avoid subtle bugs** (capturing loop variables; capturing `this`; accidental lifetime extension)

## 3. Multicast delegates (combining, removing, ordering, and exceptions)

### [3.1. Multicast delegates: invocation lists and combination semantics](<./sections/3. Multicast delegates/3.1. Multicast delegates invocation lists combination semantics.md>)

1. **What “multicast” means** (delegate has an invocation list; `+`/`-` creates new combined delegates; immutability semantics)
2. **Ordering** (invocation happens in subscription order; avoid relying on order in public APIs unless documented)
3. **Return values** (only last return value is observed; prefer events for notification, not for aggregation)

### [3.2. Exception behavior and robustness patterns](<./sections/3. Multicast delegates/3.2. Multicast delegates exception behavior robustness patterns.md>)

1. **Exception propagation** (first thrown exception stops the rest unless you manually iterate invocation list)
2. **Robust delivery** (iterate `GetInvocationList()` when you need “best effort”; aggregate exceptions deliberately)
3. **Performance reality** (manual iteration has overhead; only do it when semantics require it)

## 4. Events in C# (idioms, auto-implemented events, and custom accessors)

### [4.1. Events vs delegates: the key encapsulation boundary](<./sections/4. Events in CSharp/4.1. Events vs delegates encapsulation boundary.md>)

1. **Delegate field is not an event** (a public delegate field lets callers replace the invocation list; `event` prevents that)
2. **Events are a subscription API** (callers can add/remove handlers, but cannot invoke or assign the list)
3. **Design goal** (publish/subscribe with encapsulation; not a general callback registry)

### [4.2. Raising events correctly: patterns that scale and stay testable](<./sections/4. Events in CSharp/4.2. Raising events correctly patterns that scale.md>)

1. **Common pattern** (`protected virtual void OnXxx(...)` or internal raiser; keep raising logic centralized)
2. **Thread-safety** (copy delegate to local before invoking; consider concurrency semantics explicitly)
3. **Exception strategy** (define whether a handler exception should fail the operation or be isolated/logged)

### [4.3. Auto-implemented events vs explicit backing fields](<./sections/4. Events in CSharp/4.3. Auto-implemented events vs explicit backing fields.md>)

1. **Auto-implemented events** (simple: `public event EventHandler? Something;` backed by compiler-generated field)
2. **Explicit backing** (needed for custom semantics: weak subscriptions, filtering, throttling, synchronization)
3. **Versioning** (events are part of public surface; adding/removing/renaming affects consumers)

### [4.4. Custom event accessors: `add`/`remove` and advanced scenarios](<./sections/4. Events in CSharp/4.4. Custom event accessors add remove advanced scenarios.md>)

1. **Why custom accessors** (locking, custom storage, weak events, one-shot subscriptions, analytics, handler dedup)
2. **Correctness** (ensure `remove` matches `add`; avoid deadlocks; avoid invoking under locks)
3. **Performance** (contention vs throughput; use `Interlocked.CompareExchange` patterns when appropriate)

### [4.5. `EventHandler`, `EventHandler<T>`, and modern event-args design](<./sections/4. Events in CSharp/4.5. EventHandler EventHandlerT modern event args design.md>)

1. **Default choice**: `EventHandler` / `EventHandler<TEventArgs>` for public APIs (ecosystem familiarity)
2. **Prefer immutable event args** (records/readonly types where appropriate; avoid exposing mutable internal state)
3. **Avoid legacy** (`EventArgs.Empty` is fine; but avoid overly chatty events and huge payloads that amplify allocations)

## 5. Anonymous methods, lambda expressions, and inline lambdas (modern C# 15 guidance)

### [5.1. Lambda expressions: captures, closures, and the real allocation story](<./sections/5. Lambdas/5.1. Lambda expressions captures closures allocation story.md>)

1. **Capturing creates closures** (heap allocation + extended lifetimes; watch especially in loops and subscriptions)
2. **`static` lambdas** (prevent capturing by design; best default in hot paths and long-lived subscriptions)
3. **Avoid async pitfalls** (avoid `async void` except for event handlers; prefer `Task` returning callbacks when you control the delegate type)

### [5.2. Inline lambda expressions vs named methods: readability and debugging trade-offs](<./sections/5. Lambdas/5.2. Inline lambdas vs named methods readability debugging.md>)

1. **Inline lambdas** (great for small transformations, local policies, query operators; keep them small)
2. **Named methods** (better stack traces, reuse, testability; avoid “giant lambda” anti-pattern)
3. **Perf in practice** (don’t micro-optimize; optimize allocations and capture patterns where profiling shows pain)

### [5.3. Anonymous methods (`delegate`) vs lambdas: when anonymous is still useful](<./sections/5. Lambdas/5.3. Anonymous methods delegate vs lambdas when useful.md>)

1. **Use anonymous methods** when you need specific syntax (rare) or to emphasize “this is a delegate block” in legacy-heavy codebases
2. **Prefer lambdas** for modern code (clarity + tooling + composability)
3. **Interop reality** (some older APIs/examples use `delegate`; know it, but don’t default to it)

## 6. Expression trees (when you need “code as data”)

### [6.1. `Expression<TDelegate>`: building blocks and common use cases](<./sections/6. Expression trees/6.1. ExpressionTDelegate building blocks and use cases.md>)

1. **What expression trees are** (an AST representation, not executable code by default)
2. **Common uses** (LINQ providers, dynamic query composition, policy generation, source-generation inputs, diagnostics)
3. **Trade-offs** (more allocations; more complexity; prefer direct delegates when you don’t need inspection)

### [6.2. Compiling expression trees and performance realities](<./sections/6. Expression trees/6.2. Compiling expression trees performance realities.md>)

1. **`Compile()` cost** (can be expensive; cache compiled delegates if reused)
2. **Interpreted vs compiled** (choose consciously; avoid compiling per request in server code)
3. **AOT/trimming considerations** (dynamic codegen constraints; prefer source generators where applicable)

## 7. Expression-bodied members and switch expressions (delegate/event-adjacent idioms)

### [7.1. Expression-bodied members for small delegate/event helpers](<./sections/7. Modern syntax patterns/7.1. Expression-bodied members for delegate event helpers.md>)

1. **Good use** (tiny adapters like `OnXxx(...) => Xxx?.Invoke(...)` when it stays readable)
2. **Avoid abuse** (don’t hide complex logic in a single expression; keep event raising explicit when it matters)
3. **Debuggability** (prefer clarity in production code over “one-liner aesthetic”)

### [7.2. Switch expressions in dispatch and handler routing](<./sections/7. Modern syntax patterns/7.2. Switch expressions in dispatch and handler routing.md>)

1. **Use case** (dispatching by state/type; mapping events to handlers; reducing nested `if`/`switch` boilerplate)
2. **Correctness** (exhaustiveness matters; use discard `_` arm intentionally; don’t swallow unknown cases silently)
3. **Performance** (often fine; focus on avoiding allocations and repeated conversions inside hot dispatch loops)

## 8. Important points to remember (mentor-grade checklist for delegates & events)

### [8.1. Delegates & events checklist: correctness, API design, and performance](<./sections/8. Important points/8.1. Delegates and events checklist correctness API design performance.md>)

1. **Avoid memory leaks** (events keep subscribers alive; unsubscribe; consider weak patterns only when justified)
2. **Avoid accidental captures** (`static` lambdas; don’t capture large objects; beware `this` in long-lived handlers)
3. **Threading model** (define where handlers run; don’t assume UI thread; don’t invoke under locks; decide exception policy)
4. **Prefer events for notifications** (don’t use multicast delegates for “return value aggregation” semantics)
5. **Library-quality defaults** (`EventHandler<T>`; immutable args; nullability annotations; clear naming: `XxxChanged`, `XxxRequested`)

## 9. Common pitfalls and production bugs (what bites real systems)

### [9.1. Pitfalls: capturing loop variables, handler identity, and unsubscribing correctly](<./sections/9. Common pitfalls/9.1. Pitfalls capturing loops handler identity unsubscribing.md>)

1. **Loop capture bugs** (understand what you capture; use local copies intentionally)
2. **Unsubscribe requires the same delegate instance** (method group vs lambda; store handler references for `-=`)
3. **Leaky lifetimes** (publisher outlives subscriber; static events; event aggregators; long-lived caches)

### [9.2. Pitfalls: reentrancy, recursive events, and infinite notification loops](<./sections/9. Common pitfalls/9.2. Pitfalls reentrancy recursive events infinite loops.md>)

1. **Reentrancy** (handlers calling back into the publisher can violate invariants)
2. **Guard patterns** (state machines, reentrancy guards, or queueing notifications)
3. **Correctness first** (make invariants explicit; test with adversarial handlers)

## 10. Interview questions and answers (delegates & events, modern C#)

### [10.1. Common interview questions and answers about delegates and events](<./sections/10. Interview Q and A/10.1. Interview questions delegates and events.md>)

1. **Delegate vs event** (encapsulation, invocation rights, assignment semantics)
2. **Multicast semantics** (ordering, return values, exception behavior)
3. **Closures and allocations** (what allocates, what doesn’t; `static` lambdas; capturing `this`)
4. **Event patterns** (`EventHandler<T>`; raising patterns; thread-safety; why events can cause memory leaks)
5. **Expression trees vs delegates** (inspection vs execution; caching compiled expressions; when to avoid)

