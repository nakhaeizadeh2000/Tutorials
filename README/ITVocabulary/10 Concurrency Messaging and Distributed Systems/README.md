# Concurrency Messaging and Distributed Systems

Describe work across tasks, workers and machines with explicit timing and failure boundaries. Read the operating-system, network, API, data and design vocabulary first. This domain teaches interpretation and small controlled observations; runtime internals, distributed algorithms and production implementations remain deeper study.

This domain is in progress: 7 of 11 approved lessons are available.

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

### [3.2. Streams batches consumers acknowledgments and dead-letter queues](<sections/3. Messages and streams/3.2. Streams batches consumers acknowledgments and dead-letter queues.md>)

1. **Separate a flow of records from a bounded processing group:** Interpret stream and batch work, retained logs, partition offsets and consumer groups without assuming permanent history.
2. **Read acknowledgments and checkpoints at their actual boundary:** Distinguish publisher confirms, consumer acknowledgments, fetched positions and committed progress through a failed-batch packet.
3. **Treat failed-message isolation as the start of recovery:** Explain DLQs, DLXs and poison-message investigation and identify evidence for actual business recovery.

## 4. Failure and flow control

### [4.1. Timeouts retries backoff jitter and circuit breakers](<sections/4. Failure and flow control/4.1. Timeouts retries backoff jitter and circuit breakers.md>)

1. **Name the waiting limit and preserve an unknown outcome:** Distinguish timeout stages, whole-operation deadlines, cancellation and evidence of a remote effect.
2. **Bound repeated attempts and distinguish backoff from jitter:** Read attempt counts, capped delay ceilings, jittered values, total budgets and nested retry amplification.
3. **Read a circuit breaker as a stateful admission decision:** Explain closed, open and half-open behavior without treating probes, rejections or retries as earlier business recovery.

### [4.2. Backpressure buffering throttling and load shedding](<sections/4. Failure and flow control/4.2. Backpressure buffering throttling and load shedding.md>)

1. **Separate retained work from feedback that regulates its source:** Identify buffers, backlogs and actual upstream demand propagation without hiding another unbounded queue.
2. **Distinguish throttling from rejecting excess work:** Read pacing, admission and overload policies with explicit outcomes and accepted-work obligations.
3. **Account for a growing backlog and change one policy:** Explain a bounded-buffer accounting model, four policy variations and a limited drain estimate.

[← Back to IT Vocabulary](<../README.md>)
