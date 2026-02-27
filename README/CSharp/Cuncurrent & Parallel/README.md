## 1. Core Terminology in Concurrency & Parallelism

### [1.1. High-level execution model concepts](<./sections/1. Core Terminology in Concurrency & Parallelism/1.1. High-level execution model concepts.md>)

1. **Concurrency vs Parallelism**
2. **Asynchrony vs Multi-threading**
3. **Synchronous vs Asynchronous**
4. **Blocking vs Non-Blocking**
5. **CPU-Bound vs IO-Bound**

### [1.2. Execution entities in .NET and their differences](<./sections/1. Core Terminology in Concurrency & Parallelism/1.2. Execution entities in .NET and their differences.md>)

1. **Process vs Thread**
2. **Thread vs Thread Pool Thread**
3. **Thread vs Task**
4. **Task vs ValueTask**
5. **Task vs IAsyncEnumerable**
6. **Foreground Thread vs Background Thread**

### [1.3. Asynchronous model in C# and async/await](<./sections/1. Core Terminology in Concurrency & Parallelism/1.3. Asynchronous model in CSharp and async, await.md>)

1. **async/await vs callback-based asynchrony**
2. **async/await vs Task.ContinueWith**
3. **async/await vs Begin/End (APM pattern)**
4. **async/await vs Event-based Asynchronous Pattern (EAP)**
5. **async/await vs Parallel.For / Parallel LINQ**

### [1.4. Synchronization patterns and primitives](<./sections/1. Core Terminology in Concurrency & Parallelism/1.4. Synchronization patterns and primitives.md>)

1. **lock keyword vs Monitor**
2. **Mutex vs Semaphore vs SemaphoreSlim**
3. **ReaderWriterLockSlim vs simple lock**
4. **SpinLock vs blocking locks**
5. **Interlocked vs lock**
6. **Volatile vs implicit memory barriers in lock**

### [1.5. Parallelism libraries in .NET](<./sections/1. Core Terminology in Concurrency & Parallelism/1.5. Parallelism libraries in .NET.md>)

1. **TPL (Task Parallel Library) vs manual threads**
2. **Parallel class (Parallel.For/ForEach/Invoke) vs PLINQ**
3. **PLINQ vs regular LINQ**
4. **Dataflow (TPL Dataflow) vs Channels**
5. **Parallelism vs vectorization (SIMD) in .NET**

### [1.6. Context and state management in async code](<./sections/1. Core Terminology in Concurrency & Parallelism/1.6. Context and state management in async code.md>)

1. **SynchronizationContext vs TaskScheduler**
2. **ConfigureAwait(true) vs ConfigureAwait(false)**
3. **Context capture vs context-free execution**

### [1.7. Common pitfalls and failure modes in concurrency](<./sections/1. Core Terminology in Concurrency & Parallelism/1.7. Common pitfalls and failure modes in concurrency.md>)

1. **Race condition vs data race**
2. **Deadlock vs livelock vs starvation**
3. **Thread-safety vs reentrancy-safety**
4. **Exception handling in Tasks vs Threads**
5. **Exception handling in Parallel.\*** (Parallel.For / Parallel.ForEach / Parallel.Invoke)
6. **Exception handling in PLINQ**

### [1.8. Concurrency-related design and architectural patterns](<./sections/1. Core Terminology in Concurrency & Parallelism/1.8. Concurrency-related design and architectural patterns.md>)

1. **Producer-Consumer vs Pipeline**
2. **Fan-out/Fan-in vs Map-Reduce**
3. **Actor Model vs shared-state concurrency**
4. **Message passing vs shared memory**

## 2. Execution Models & Runtime Building Blocks in .NET

### [2.1. Thread Pool and task scheduling](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.1. Thread Pool and task scheduling.md>)

1. **Overview of the .NET Thread Pool**
2. **Work items vs dedicated threads**
3. **Task-based scheduling on top of the Thread Pool**
4. **Work-stealing queues and load balancing between cores**
5. **Fairness, starvation, and throttling considerations**

### [2.2. TaskScheduler and custom scheduling strategies](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.2. TaskScheduler and custom scheduling strategies.md>)

1. **Default TaskScheduler and its relationship with the Thread Pool**
2. **TaskCreationOptions and TaskContinuationOptions impact on scheduling**
3. **Long-running tasks and dedicated threads**
4. **Custom TaskScheduler implementations (e.g., single-threaded, limited-concurrency)**
5. **Interaction with SynchronizationContext-aware code**

### [2.3. SynchronizationContext and application models](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.3. SynchronizationContext and application models.md>)

1. **UI SynchronizationContext (WinForms, WPF, MAUI) (frontend)**
2. **ASP.NET Core execution model and lack of UI SynchronizationContext**
3. **Console applications and Thread Pool-based execution**
4. **Library code vs application code: context-agnostic design**
5. **Context capture and its impact on responsiveness and deadlocks**

### [2.4. Async I/O architecture in .NET](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.4. Async I-O architecture in .NET.md>)

1. **Kernel-level async I/O primitives (I/O completion ports, etc.)**
2. **How async file and network operations integrate with Tasks**
3. **Difference between async I/O and background-thread I/O**
4. **Scalability benefits of async I/O for high-concurrency servers**
5. **Common pitfalls: sync-over-async and thread-pool exhaustion**

### [2.5. Scheduling semantics in async/await](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.5. Scheduling semantics in async, await.md>)

1. **Cooperative vs preemptive behavior in async code**
2. **Where continuations run by default (context vs Thread Pool)**
3. **ConfigureAwait and controlling continuation scheduling**
4. **Fire-and-forget tasks and their scheduling/risk profile**
5. **Interaction with timers, delays, and cancellation**

### [2.6. CPU utilization, cores, and affinity](<./sections/2. Execution Models & Runtime Building Blocks in .NET/2.6. CPU utilization, cores, and affinity.md>)

1. **Logical vs physical cores and hyper-threading**
2. **How the Thread Pool maps work to cores**
3. **CPU-bound workloads and Parallel.\* vs Tasks**
4. **Processor affinity and when (rarely) to care about it**
5. **Measuring and tuning CPU utilization in concurrent apps**

## 3. High-level Concurrency APIs & Patterns in C#

### [3.1. Task-based asynchronous programming](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.1. Task-based asynchronous programming.md>)

1. **Core Task and ValueTask usage patterns**
2. **Composing tasks with Task.WhenAll, Task.WhenAny, and continuations**
3. **TaskCompletionSource and bridging non-Task-based APIs**
4. **Error handling and cancellation patterns with Tasks**
5. **Async-friendly resource lifetime and IAsyncDisposable**

### [3.2. Data parallelism with Parallel and PLINQ](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.2. Data parallelism with Parallel and PLINQ.md>)

1. **Parallel.For and Parallel.ForEach basic usage**
2. **Parallel.Invoke and structured parallel regions**
3. **PLINQ query operators and partitioning strategies**
4. **Tuning degree of parallelism and merge options**
5. **When data parallelism is harmful (small workloads, UI, excessive contention)**

### [3.3. Pipelines and message-passing with queues, Channels, and Dataflow](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.3. Pipelines and message-passing with queues, Channels, and Dataflow.md>)

1. **Producer/Consumer with BlockingCollection and concurrent queues**
2. **Bounded vs unbounded Channels and backpressure**
3. **Basic TPL Dataflow blocks (BufferBlock, TransformBlock, ActionBlock)**
4. **Building multi-stage pipelines (fan-out/fan-in)**
5. **Choosing between Channels, Dataflow, and custom queues**

### [3.4. Streaming and reactive flows](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.4. Streaming and reactive flows.md>)

1. **Async streams with IAsyncEnumerable\<T\> and await foreach**
2. **Push-based vs pull-based streams**
3. **Bridging IAsyncEnumerable\<T\> and IObservable\<T\>**
4. **Backpressure and rate limiting in streaming scenarios**
5. **Common streaming use cases (I/O, UI events, telemetry, logging) (frontend)**

### [3.5. Coordination, throttling, and cancellation patterns](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.5. Coordination, throttling, and cancellation patterns.md>)

1. **Limiting concurrency with SemaphoreSlim**
2. **Using CancellationToken effectively (propagation, linked tokens)**
3. **Timeouts and cancellation scopes**
4. **Batching vs per-item processing for throughput**
5. **Graceful shutdown in servers and background services**

### [3.6. Timers, background work, and scheduling](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.6. Timers, background work, and scheduling.md>)

1. **System.Threading.Timer vs PeriodicTimer**
2. **Scheduling recurring work in ASP.NET Core (IHostedService, BackgroundService)**
3. **Delayed execution with Task.Delay and timers**
4. **Avoiding timer drift and overlapping executions**
5. **Scheduling pitfalls (clock skew, long-running callbacks)**

### [3.7. Actor-style and isolated-state concurrency](<./sections/3. High-level Concurrency APIs & Patterns in CSharp/3.7. Actor-style and isolated-state concurrency.md>)

1. **Actor model concepts in the .NET ecosystem**
2. **Using Channels or Dataflow for mailbox-style processing**
3. **Single-threaded TaskScheduler and event-loop style executors**
4. **State confinement vs locking for thread safety**
5. **When actor-style concurrency is beneficial (high contention, complex invariants)**

## 4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code

### [4.1. Reasoning about correctness in concurrent programs](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.1. Reasoning about correctness in concurrent programs.md>)

1. **Data races vs higher-level race conditions**
2. **Shared mutable state vs ownership and confinement**
3. **Invariants, pre/post-conditions, and representation consistency**
4. **Ordering guarantees (happens-before, visibility, publication)**
5. **Idempotency, commutativity, and associativity in concurrent operations**

### [4.2. .NET memory model and visibility](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.2. .NET memory model and visibility.md>)

1. **The .NET memory model at a high level**
2. **Reordering, visibility, and tearing**
3. **Where lock introduces memory fences**
4. **volatile and Interlocked and when they are appropriate**
5. **False sharing and cache line effects in parallel code**

### [4.3. Testing async and concurrent code](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.3. Testing async and concurrent code.md>)

1. **Unit testing async methods with Task and async/await**
2. **Avoiding async void in testable code**
3. **Controlling time: fake/virtual clocks and timers**
4. **Testing code using Parallel.\* and PLINQ**
5. **Dealing with flakiness and nondeterminism in tests**

### [4.4. Testing concurrency-specific behavior](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.4. Testing concurrency-specific behavior.md>)

1. **Stress testing and randomization of schedules**
2. **Injecting delays, yields, and context switches to expose races**
3. **Using custom schedulers/executors in tests**
4. **Simulating failures and cancellations in async flows**
5. **Property-based testing for concurrent invariants**

### [4.5. Diagnosing deadlocks, livelocks, and starvation](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.5. Diagnosing deadlocks, livelocks, and starvation.md>)

1. **Common deadlock patterns (lock ordering, sync-over-async, UI thread blocking) (frontend)**
2. **Detecting lock contention and hot locks**
3. **Recognizing livelock and priority inversion**
4. **ThreadPool starvation: symptoms and root causes**
5. **Diagnosing deadlocks in UI apps vs server apps (frontend)**

### [4.6. Debugging tools and techniques for async and parallel code](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.6. Debugging tools and techniques for async and parallel code.md>)

1. **Visual Studio async debugging, Tasks window, and Parallel Stacks**
2. **Inspecting logical call stacks with async/await**
3. **Debugging PLINQ and Parallel.\* workloads**
4. **Stepping through IAsyncEnumerable\<T\> and streams**
5. **Debugging deadlocks and hangs (dump analysis basics)**

### [4.7. Tracing, logging, and observability for concurrent systems](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.7. Tracing, logging, and observability for concurrent systems.md>)

1. **Structured logging with correlation IDs and activity IDs**
2. **Tracing async flows across threads and processes**
3. **EventSource, ETW, and Activity integration**
4. **Using dotnet-trace, dotnet-counters, and dotnet-dump**
5. **Designing logs that help debug concurrency issues (not make them worse)**

### [4.8. Performance profiling and contention analysis](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.8. Performance profiling and contention analysis.md>)

1. **Sampling vs instrumenting profilers**
2. **Using PerfView / Visual Studio Profiler for async and parallel code**
3. **Identifying synchronization bottlenecks and excessive locking**
4. **Measuring CPU vs I/O wait time in concurrent workloads**
5. **Interpreting ThreadPool and GC metrics for tuning**

### [4.9. Making concurrent code more testable and diagnosable](<./sections/4. Correctness, Testing, Diagnostics & Debugging in Concurrent Code/4.9. Making concurrent code more testable and diagnosable.md>)

1. **Injecting schedulers, clocks, and executors instead of using static APIs**
2. **Abstracting timers, delays, and background work**
3. **Designing APIs for deterministic tests (no hidden threads/tasks)**
4. **Separating orchestration from core logic**
5. **Adding diagnostic hooks safely (counters, events, probes)**

## 5. Practical Usage Recipes for Concurrency & Parallelism in C#

### [5.1. CPU-bound work on a single machine](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.1. CPU-bound work on a single machine.md>)

1. **Basic loop parallelization with Parallel.For and Parallel.ForEach**
2. **Data-parallel queries with PLINQ**
3. **Choosing between Parallel.\* and Task.Run + Task.WhenAll**
4. **Partitioning data for better cache locality**
5. **Detecting when parallelization hurts more than helps**

### [5.2. High-concurrency I/O (files, HTTP, DB, sockets)](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.2. High-concurrency I-O (files, HTTP, DB, sockets).md>)

1. **Using async I/O APIs with async/await end-to-end**
2. **Coordinating many concurrent I/O operations with Task.WhenAll**
3. **Throttling I/O concurrency with SemaphoreSlim**
4. **Per-request timeouts and cancellation patterns**
5. **Retries, backoff, and circuit breakers in concurrent I/O flows**

### [5.3. Background jobs and recurring tasks](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.3. Background jobs and recurring tasks.md>)

1. **Fire-and-forget patterns that are actually safe in ASP.NET Core**
2. **Implementing recurring work with PeriodicTimer**
3. **Scheduling background jobs with IHostedService / BackgroundService**
4. **Queue-based background processing with Channels**
5. **Graceful shutdown: draining queues and cancelling work**

### [5.4. Producer-consumer and pipelines](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.4. Producer-consumer and pipelines.md>)

1. **Simple producer-consumer with BlockingCollection**
2. **Bounded channels for backpressure and load shedding**
3. **Multi-stage pipeline with TPL Dataflow (TransformBlock, ActionBlock)**
4. **Combining CPU-bound and I/O-bound stages in a pipeline**
5. **Error handling and retries inside pipeline stages**

### [5.5. UI and frontend concurrency patterns (frontend)](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.5. UI and frontend concurrency patterns (frontend).md>)

1. **Offloading CPU work from the UI thread with Task.Run (frontend)**
2. **Responsive UI with async commands and cancellation (frontend)**
3. **Throttling / debouncing UI events with async patterns (frontend)**
4. **Using async streams to consume event streams (frontend)**
5. **Avoiding deadlocks with ConfigureAwait and sync context (frontend)**

### [5.6. Streaming data and event processing](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.6. Streaming data and event processing.md>)

1. **Consuming async streams (IAsyncEnumerable\<T\>) from I/O sources**
2. **Transforming, filtering, and aggregating streaming data**
3. **Bridging event sources to async streams and/or IObservable\<T\>**
4. **Applying backpressure and rate limiting in streaming pipelines**
5. **Long-lived streaming scenarios (telemetry, log ingestion, real-time feeds)**

### [5.7. Actor-style components and isolated state](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.7. Actor-style components and isolated state.md>)

1. **Single-writer / mailbox pattern with Channels**
2. **Encapsulating mutable state behind an actor loop**
3. **Command-processing and workflow orchestration in actors**
4. **Scaling out actors: sharding and routing messages**
5. **When to choose actors over locks or transactional structures**

### [5.8. Coordination across multiple async operations](<./sections/5. Practical Usage Recipes for Concurrency & Parallelism in CSharp/5.8. Coordination across multiple async operations.md>)

1. **First result wins with Task.WhenAny and cancellation of losers**
2. **Fan-out/fan-in patterns with Task.WhenAll**
3. **Batching many small operations for throughput**
4. **Handling partial failures and compensating actions**
5. **Coordinating multiple services / APIs concurrently in a single request**
