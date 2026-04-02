## 1. Garbage Collection in .NET (what it does, what it does NOT do)

### [1.1. The GC’s job: managed memory reachability, not “resource cleanup”](<./sections/1. Garbage Collection in .NET/1.1. GC job managed memory reachability not resource cleanup.md>)

1. **Reachability and object graphs** (roots, references, cycles, “leaks” as unintended reachability)
2. **Memory vs resources** (handles/sockets/native memory are not freed by “waiting for GC”)
3. **Performance framing** (allocation rate, survival rate, working set; avoid superstition—measure)

### [1.2. Generations (Gen0/1/2), pauses, and why “Gen2” is a big deal](<./sections/1. Garbage Collection in .NET/1.2. GC generations pauses and why Gen2 matters.md>)

1. **Why generational GC exists** (most objects die young; promotion is the real tax)
2. **Pause model basics** (STW, background GC; throughput vs latency)
3. **What to watch** (allocations/sec, collection counts, % time in GC, p95/p99 latency)

### [1.3. LOH, pinning, and fragmentation (the non-obvious GC pain points)](<./sections/1. Garbage Collection in .NET/1.3. LOH pinning fragmentation pain points.md>)

1. **Large Object Heap basics** (big buffers/arrays; fragmentation risk; compaction realities)
2. **Pinning costs** (interop, fixed buffers, long-lived pinned arrays; why it blocks compaction)
3. **Practical guidance** (`ArrayPool<T>`, `MemoryPool<T>`, `Span<T>`/`Memory<T>`; when pooling hurts)

### [1.4. GC configuration you should understand (server vs workstation, latency modes)](<./sections/1. Garbage Collection in .NET/1.4. GC configuration server workstation latency modes.md>)

1. **Server vs Workstation GC** (throughput vs interactive; containers/ASP.NET Core defaults)
2. **Latency modes** (what they can/can’t do; “critical sections” vs inevitable debt)
3. **Tuning rules** (optimize allocation + object lifetimes first; config is second-order)

### [1.5. Diagnosing GC and memory problems (tools + mental model)](<./sections/1. Garbage Collection in .NET/1.5. Diagnosing GC and memory problems tools mental model.md>)

1. **First-line tools** (`dotnet-counters`, `dotnet-trace`, dumps; allocation profiling)
2. **Common signals** (Gen2 frequency, LOH growth, pinned object count, high GC CPU)
3. **Root-cause patterns** (unbounded caches, event subscriptions, timers, large graphs, sync-over-async)

## 2. Destructors / Finalizers (what they are, when they exist, and why they are dangerous)

### [2.1. Destructor syntax vs runtime reality: the finalization queue](<./sections/2. Destructors and Finalizers/2.1. Destructor syntax vs runtime finalization queue.md>)

1. **What `~Type()` compiles to** (finalizer; not deterministic; not on your thread)
2. **Finalization pipeline** (finalization queue + finalizer thread; resurrection hazards)
3. **Cost model** (finalizable objects are more expensive; they survive longer by design)

### [2.2. When a finalizer is justified (and when it is a code smell)](<./sections/2. Destructors and Finalizers/2.2. When a finalizer is justified and code smell.md>)

1. **Legit case** (wrapping native resources where a safety net is required)
2. **Code smell cases** (managed-only resources; “just in case”; business logic in finalizers)
3. **Modern guidance** (prefer `SafeHandle`; prefer composition; keep finalizers tiny)

### [2.3. Finalizers and performance/latency (throughput vs p99 vs tail-risk)](<./sections/2. Destructors and Finalizers/2.3. Finalizers and performance latency tail risk.md>)

1. **Why finalizers hurt** (extra GC bookkeeping; delayed reclamation; promotion pressure)
2. **Why finalizers are unreliable** (process termination, crashes, time constraints, ordering)
3. **Operational impact** (handle exhaustion, socket depletion, slower steady-state under load)

## 3. `IDisposable` (deterministic cleanup, ownership, and correctness)

### [3.1. What `IDisposable` means (determinism, ownership, and “what must be disposed”)](<./sections/3. IDisposable/3.1. IDisposable meaning determinism ownership what must be disposed.md>)

1. **Dispose is a contract** (idempotency, safe to call multiple times, “object after dispose” policy)
2. **Typical disposables** (streams, `HttpResponseMessage`, enumerators with resources, timers, CTS, pooled buffers)
3. **Ownership rules** (creator owns by default; borrowing must be explicit; avoid double-dispose)

### [3.2. The dispose pattern in modern .NET (without cargo-culting)](<./sections/3. IDisposable/3.2. Dispose pattern in modern NET without cargo culting.md>)

1. **Most types don’t need finalizers** (managed-only: implement `IDisposable` without finalizer)
2. **If you have a finalizer** (use `Dispose(bool)` + `GC.SuppressFinalize(this)` correctly)
3. **Prefer `SafeHandle`** for native handles (avoid writing your own fragile finalizer logic)

### [3.3. `IAsyncDisposable` and `await using` (async cleanup done right)](<./sections/3. IDisposable/3.3. IAsyncDisposable and await using async cleanup.md>)

1. **When async disposal is real** (flush/close requiring I/O; async streams; network protocols)
2. **`await using` scope** (avoid sync-over-async during cleanup)
3. **Mixing sync/async** (choose a primary cleanup path; don’t hide blocking in `Dispose()`)

### [3.4. Designing APIs with explicit ownership (borrow vs own, factories, and DI lifetimes)](<./sections/3. IDisposable/3.4. Designing APIs with explicit ownership borrow vs own.md>)

1. **Borrowing vs owning parameters** (bool flag, wrapper types, or “factory in / instance out”)
2. **Factories as ownership boundaries** (`Func<T>`, `IServiceScopeFactory`, “create per operation”)
3. **DI interactions** (container disposes scopes; don’t manually dispose DI-owned instances)

## 4. `using` (statement, declaration, and patterns you should prefer in modern C#)

### [4.1. `using` statement vs `using var` declaration (scope and readability)](<./sections/4. using and scopes/4.1. using statement vs using declaration scope readability.md>)

1. **Scope control** (block-scoped vs enclosing-scope; be intentional about lifetime)
2. **Exception safety** (`using` is `try/finally`; deterministic even on exceptions)
3. **Performance** (shorter lifetimes reduce handle pressure; avoid keeping disposables alive “by accident”)

### [4.2. `await using` and async scope management (correct cleanup without deadlocks)](<./sections/4. using and scopes/4.2. await using and async scope management.md>)

1. **Why `await using` exists** (async cleanup is not optional for some resources)
2. **Pitfalls** (forgetting `await` on `DisposeAsync`; mixing with `ConfigureAwait` in libraries)
3. **Guidelines** (async all the way; no sync-over-async in cleanup paths)

### [4.3. Nested disposables and partial construction failure (robust patterns)](<./sections/4. using and scopes/4.3. Nested disposables and partial construction failure patterns.md>)

1. **Multiple resources** (acquire in order; dispose in reverse; avoid leaks on exceptions)
2. **Factory methods** (when constructors can’t express safe acquisition)
3. **High-perf note** (avoid excessive allocations; prefer structured ownership)

## 5. Important points to remember (mentor-grade checklist)

### [5.1. Correctness checklist (leaks, finalizers, ownership, and lifetime boundaries)](<./sections/5. Important points/5.1. Correctness checklist leaks finalizers ownership.md>)

1. **GC is not cleanup** (it frees managed memory, not “your resources”)
2. **Finalizers are last resort** (and a performance tax)
3. **Ownership must be explicit** (who disposes; DI + scopes; events/timers as “lifetime glue”)

### [5.2. Performance checklist (allocation rate, survival, LOH/pinning, pooling trade-offs)](<./sections/5. Important points/5.2. Performance checklist allocations LOH pinning pooling.md>)

1. **Optimize allocations before GC tuning** (bytes/sec and survival rate drive cost)
2. **Prefer smaller/shorter-lived graphs** (object graph shape beats micro-optimizations)
3. **Pool carefully** (`ArrayPool<T>` can help; can also increase working set and bugs)

### [5.3. Reliability checklist (handle exhaustion, socket leaks, shutdown, and cancellation)](<./sections/5. Important points/5.3. Reliability checklist handles sockets shutdown cancellation.md>)

1. **Dispose promptly under load** (handles are finite; “eventually” becomes outage)
2. **Cancellation and timeouts** (infinite waits keep resources alive forever)
3. **Shutdown semantics** (background work + disposal ordering; avoid relying on finalization at exit)

## 6. Interview questions and answers (GC, finalizers, and `IDisposable`, C# 15 era)

### [6.1. Interview Q&A: GC generations, allocations, LOH, and pinning](<./sections/6. Interview Q and A/6.1. Interview questions about GC generations LOH pinning.md>)

1. **Explain Gen0/1/2 and promotion** (and what causes Gen2 pressure)
2. **What is the LOH and why do we care?** (fragmentation, large buffers, pooling)
3. **What is pinning?** (why it hurts compaction and increases GC work)

### [6.2. Interview Q&A: finalizers/destructors and `GC.SuppressFinalize`](<./sections/6. Interview Q and A/6.2. Interview questions about finalizers and SuppressFinalize.md>)

1. **What does a destructor do in C#?** (finalizer semantics + thread + timing)
2. **Why are finalizers expensive?** (queue + longer lifetimes + extra collections)
3. **When do you call `GC.SuppressFinalize`?** (only when you have a finalizer and you cleaned up)

### [6.3. Interview Q&A: `IDisposable` patterns, `using var`, and `await using`](<./sections/6. Interview Q and A/6.3. Interview questions about IDisposable using await using.md>)

1. **When should a type implement `IDisposable`?** (owning resources; not “because best practice”)
2. **`using` statement vs `using var`** (scope and lifetime)
3. **`IDisposable` vs `IAsyncDisposable`** (async cleanup; avoid sync-over-async)

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries: what is covered elsewhere in this repo](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **GC basics overview** exists in `Fundamental Theories` (this domain goes deeper on finalizers + disposal patterns)
2. **OOP ownership framing** exists in `CSharp Basic Object Oriented Programming` (this domain focuses on correct patterns + runtime costs)
3. **Threading/memory model** is in `Cuncurrent & Parallel` (only referenced here for perf diagnostics and tail latency context)
4. **Interfaces in general** are in `Abstract Classes and Interfaces` (only `IDisposable`/`IAsyncDisposable` specifics live here)

