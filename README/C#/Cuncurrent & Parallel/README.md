## 1. Core Terminology in Concurrency & Parallelism

### 1.1. High-level execution model concepts

1. **Concurrency vs Parallelism**
2. **Asynchrony vs Multi-threading**
3. **Synchronous vs Asynchronous**
4. **Blocking vs Non-Blocking**
5. **CPU-Bound vs IO-Bound**

### 1.2. Execution entities in .NET and their differences

1. **Process vs Thread**
2. **Thread vs Thread Pool Thread**
3. **Thread vs Task**
4. **Task vs ValueTask**
5. **Task vs IAsyncEnumerable**
6. **Foreground Thread vs Background Thread**

### 1.3. Asynchronous model in C# and async/await

1. **async/await vs callback-based asynchrony**
2. **async/await vs Task.ContinueWith**
3. **async/await vs Begin/End (APM pattern)**
4. **async/await vs Event-based Asynchronous Pattern (EAP)**
5. **async/await vs Parallel.For / Parallel LINQ**

### 1.4. Synchronization patterns and primitives

1. **lock keyword vs Monitor**
2. **Mutex vs Semaphore vs SemaphoreSlim**
3. **ReaderWriterLockSlim vs simple lock**
4. **SpinLock vs blocking locks**
5. **Interlocked vs lock**
6. **Volatile vs implicit memory barriers in lock**

### 1.5. Parallelism libraries in .NET

1. **TPL (Task Parallel Library) vs manual threads**
2. **Parallel class (Parallel.For/ForEach/Invoke) vs PLINQ**
3. **PLINQ vs regular LINQ**
4. **Dataflow (TPL Dataflow) vs Channels**
5. **Parallelism vs vectorization (SIMD) in .NET**

### 1.6. Context and state management in async code

1. **SynchronizationContext vs TaskScheduler**
2. **ConfigureAwait(true) vs ConfigureAwait(false)**
3. **Context capture vs context-free execution**

### 1.7. Common pitfalls and failure modes in concurrency

1. **Race condition vs data race**
2. **Deadlock vs livelock vs starvation**
3. **Thread-safety vs reentrancy-safety**
4. **Exception handling in Tasks vs Threads**
5. **Exception handling in Parallel.\*** (Parallel.For / Parallel.ForEach / Parallel.Invoke)
6. **Exception handling in PLINQ**

### 1.8. Concurrency-related design and architectural patterns

1. **Producer-Consumer vs Pipeline**
2. **Fan-out/Fan-in vs Map-Reduce**
3. **Actor Model vs shared-state concurrency**
4. **Message passing vs shared memory**

## 2. Execution Models & Runtime Building Blocks in .NET

### 2.1. Thread Pool and task scheduling

1. **Overview of the .NET Thread Pool**
2. **Work items vs dedicated threads**
3. **Task-based scheduling on top of the Thread Pool**
4. **Work-stealing queues and load balancing between cores**
5. **Fairness, starvation, and throttling considerations**

### 2.2. TaskScheduler and custom scheduling strategies

1. **Default TaskScheduler and its relationship with the Thread Pool**
2. **TaskCreationOptions and TaskContinuationOptions impact on scheduling**
3. **Long-running tasks and dedicated threads**
4. **Custom TaskScheduler implementations (e.g., single-threaded, limited-concurrency)**
5. **Interaction with SynchronizationContext-aware code**

### 2.3. SynchronizationContext and application models

1. **UI SynchronizationContext (WinForms, WPF, MAUI)**
2. **ASP.NET Core execution model and lack of UI SynchronizationContext**
3. **Console applications and Thread Pool-based execution**
4. **Library code vs application code: context-agnostic design**
5. **Context capture and its impact on responsiveness and deadlocks**

### 2.4. Async I/O architecture in .NET

1. **Kernel-level async I/O primitives (I/O completion ports, etc.)**
2. **How async file and network operations integrate with Tasks**
3. **Difference between async I/O and background-thread I/O**
4. **Scalability benefits of async I/O for high-concurrency servers**
5. **Common pitfalls: sync-over-async and thread-pool exhaustion**

### 2.5. Scheduling semantics in async/await

1. **Cooperative vs preemptive behavior in async code**
2. **Where continuations run by default (context vs Thread Pool)**
3. **ConfigureAwait and controlling continuation scheduling**
4. **Fire-and-forget tasks and their scheduling/risk profile**
5. **Interaction with timers, delays, and cancellation**

### 2.6. CPU utilization, cores, and affinity

1. **Logical vs physical cores and hyper-threading**
2. **How the Thread Pool maps work to cores**
3. **CPU-bound workloads and Parallel.\* vs Tasks**
4. **Processor affinity and when (rarely) to care about it**
5. **Measuring and tuning CPU utilization in concurrent apps**
