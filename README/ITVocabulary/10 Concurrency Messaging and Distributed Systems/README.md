# Concurrency Messaging and Distributed Systems

Describe work across tasks, workers and machines with explicit timing and failure boundaries. Read the operating-system, network, API, data and design vocabulary first. This domain teaches interpretation and small controlled observations; runtime internals, distributed algorithms and production implementations remain deeper study.

This domain is in progress: 1 of 11 approved lessons is available.

## 1. Work and time

### [1.1. Synchronous asynchronous blocking and non-blocking](<sections/1. Work and time/1.1. Synchronous asynchronous blocking and non-blocking.md>)

1. **Separate completion order from an occupied execution resource:** Distinguish synchronous and asynchronous interfaces from thread blocking and non-blocking readiness attempts.
2. **Observe an unavailable result and a suspended task separately:** Run a local socket and coroutine example and explain why a task can wait while its thread performs a callback.
3. **Read an async claim across the full operation:** Identify caller, worker, completion and error boundaries rather than inferring system behavior from an async label.

[← Back to IT Vocabulary](<../README.md>)
