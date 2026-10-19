# Concurrency Messaging and Distributed Systems

Describe work across tasks, workers and machines with explicit timing and failure boundaries. Read the operating-system, network, API, data and design vocabulary first. This domain teaches interpretation and small controlled observations; runtime internals, distributed algorithms and production implementations remain deeper study.

This domain is in progress: 4 of 11 approved lessons are available.

## 1. Work and time

### [1.1. Synchronous asynchronous blocking and non-blocking](<sections/1. Work and time/1.1. Synchronous asynchronous blocking and non-blocking.md>)

1. **Separate completion order from an occupied execution resource:** Distinguish synchronous and asynchronous interfaces from thread blocking and non-blocking readiness attempts.
2. **Observe an unavailable result and a suspended task separately:** Run a local socket and coroutine example and explain why a task can wait while its thread performs a callback.
3. **Read an async claim across the full operation:** Identify caller, worker, completion and error boundaries rather than inferring system behavior from an async label.

### [1.2. Concurrency parallelism scheduling and event loops](<sections/1. Work and time/1.2. Concurrency parallelism scheduling and event loops.md>)

1. **Distinguish overlapping work from simultaneous execution:** Read explicit schedules and separate concurrent lifetimes from actual parallel computation.
2. **Identify what a scheduler and event loop can run:** Distinguish ready and waiting work, runtime and OS scheduling, and cooperative and preemptive relationships.
3. **Observe interleaving without claiming a CPU speedup:** Run sequential and grouped task traces, remove the yield and explain the ordering and thread-identity limits.

## 2. Coordination and hazards

### [2.1. Shared state atomicity races locks and deadlocks](<sections/2. Coordination and hazards/2.1. Shared state atomicity races locks and deadlocks.md>)

1. **Name the shared state and the operation that must stay together:** Trace a lost update and distinguish concurrent-operation atomicity from transactional acceptance and memory-model terminology.
2. **Observe a lost update and protect the complete critical section:** Run an explicit-yield task example and explain the shared lock, private observations and incorrect write-only protection.
3. **Distinguish exclusion from progress and wider coordination:** Read a task dependency cycle, separate safety and liveness and state why an in-process lock does not protect all application instances.

## 3. Messages and streams

### [3.1. Commands events messages queues brokers and pub-sub](<sections/3. Messages and streams/3.1. Commands events messages queues brokers and pub-sub.md>)

1. **Separate a message envelope from its intended meaning:** Distinguish communicated units, command requests, event announcements and response data with explicit identity and contract scopes.
2. **Distinguish distribution roles from storage and processing guarantees:** Interpret producers, consumers, brokers, queues, topics, subscriptions and RabbitMQ-specific routing roles.
3. **Trace copies and competing workers in a concrete topology:** Explain shared versus independent subscription inputs, worker allocations and missing-subscription history without assuming replay or successful processing.

[← Back to IT Vocabulary](<../README.md>)
