# Async Types and Standard Library

Connect asynchronous execution with its TypeScript contracts: fulfilled values and thenable adoption, async return inference, combinator result shapes, cooperative cancellation, bounded starts, generator channels, library selection, scope cleanup and timer lifetimes. The worked lessons declare their tested compiler and runtime versions and separate static checks from actual behavior. Promise aggregation does not automatically cancel work or release resources.

[09 Utility Types](<../09 Utility Types and Type Transformations/README.md>) owns the conditional mechanics behind Awaited; this domain applies them to actual consumption. [17 Testing Types](<../17 Testing Types/README.md>) owns type-test tools, doubles and completion assertions. Keep those test mechanics there and use this domain for the asynchronous operation being tested.

## 0. Prerequisites

[05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [1.3. Return types](<../05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>) (`Promise<void>` vs `Promise<never>` callback contracts). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [2.3. infer pipelines](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>) (`Awaited` recursion mechanics). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [3.1. module pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) (runtimes whose async primitives differ). [17 Testing Types](<../17 Testing Types/README.md>) — [2.3. Async error paths](<../17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>) (rejection/float/abort testing this domain's evaluation enables).

## 1. Promise Types

### [1.1. Promise states and the Promise type anatomy](<./sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md>)

1. **Fulfillment and state:** observe synchronous construction, later reactions and adoption of a still-pending promise.
2. **Continuation outcomes:** check transformation/recovery types, preserved values, cleanup rejection and awaited cleanup.
3. **Constructor boundaries:** inspect resolve/reject typing and reproduce why an async executor can leave the outer promise pending.

### [1.2. Awaited recursive unwrapping and thenables](<./sections/1. Promise Types/1.2. Awaited recursive unwrapping and thenables.md>)

1. **Wrapped and consumed contracts:** apply Awaited without confusing it with runtime execution or recursive field traversal.
2. **Actual thenable adoption:** observe synchronous getter access, deferred calls, recursive consumption and the fuller PromiseLike API.
3. **Honest normalization:** test constructor-sensitive identity and expose a nested annotation whose callback type disagrees with runtime adoption.

### [1.3. async function return-type contracts](<./sections/1. Promise Types/1.3. async function return-type contracts.md>)

1. **Returned promises:** observe async adoption, promise identity and body rejection versus argument-evaluation errors.
2. **Actual return inference:** inspect emitted declarations, literal unions and a chosen annotation's implementation check.
3. **Completion contracts:** distinguish void, undefined and never payloads, callback ownership and a pending promise's lack of process keepalive.

---

## 2. Combinators and Cancellation

### [2.1. all race allSettled any typed precisely](<./sections/2. Combinators and Cancellation/2.1. all race allSettled any typed precisely.md>)

1. **Input-ordered aggregation:** check contextual tuples versus widened arrays, mutable outputs and siblings continuing after rejection.
2. **First outcome choices:** observe race's early rejection, any's later success and input-ordered AggregateError reasons.
3. **Settlement boundaries:** narrow member outcomes, test empty inputs and reproduce aggregate rejection when iteration fails.

### [2.2. AbortSignal propagation and cancellation contracts](<./sections/2. Combinators and Cancellation/2.2. AbortSignal propagation and cancellation contracts.md>)

1. **Actual propagation:** forward a signal through a loader to local HTTP fetch and test success, pre-abort and in-flight cancellation.
2. **Reason and type boundaries:** compare default/custom/composed reasons and prove that throwIfAborted is not an assertion signature.
3. **Cooperative deadlines:** run a real pending-request timeout and distinguish scheduled zero delay, invalid negative delay and resource ownership.

### [2.3. Sequential vs parallel patterns and tuple typing](<./sections/2. Combinators and Cancellation/2.3. Sequential vs parallel patterns and tuple typing.md>)

1. **Start versus consumption:** observe sequential starts and input-ordered consumption of already overlapping work.
2. **Explicit mapper contract:** validate limits and dense inputs, preserve result order and distinguish concurrency from pacing.
3. **Verified failure ownership:** measure the active-callback cap, stop admission after observed failure and drain started work before rejecting.

---

## 3. Standard Library in Practice

### [3.1. lib settings and built-in async types](<./sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **Declarations versus implementation:** compare isolated DOM/Node projects and compile async iteration for an older syntax target.
2. **Standard result contracts:** locate settled and aggregate declarations, validate arbitrary reasons and choose deliberate boundary mappings.
3. **Scope cleanup:** test reverse disposal order, early return, thrown failures and awaited cleanup while checking actual runtime APIs.

### [3.2. AsyncIterable generators and for-await](<./sections/3. Standard Library in Practice/3.2. AsyncIterable generators and for-await.md>)

1. **Three typed channels:** distinguish inferred versus defaulted types, ignored startup sends and done-based result narrowing.
2. **Consumption boundaries:** test synchronous fallback, async protocol preference, consumer pacing and awaited closing versus next failures.
3. **Deliberate collection shape:** validate page boundaries and choose synchronous, asynchronous or materialized results with explicit buffering limits.

### [3.3. Timers queues and the event-loop type view](<./sections/3. Standard Library in Practice/3.3. Timers queues and the event-loop type view.md>)

1. **Actual timer declarations:** check DOM, Node and mixed configurations, then observe that annotations do not convert or invalidate a runtime handle.
2. **Scheduling context:** test microtask-before-timer and immediate-before-timer inside actual I/O without inventing a universal phase ranking.
3. **Process lifetime:** execute child-process ref/unref/cancellation contrasts and distinguish timer lifetime from an application drain policy.

---

## 4. Important points to remember (async and stdlib)

### [4.1. Async checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Async checklist mental models mentors insist on.md>)

1. **Evidence for the contract:** choose wrapped/consumed type checks and actual outcome tests with explicit limits.
2. **Cooperative cancellation:** follow signals to the operation and test reason and cleanup policies.
3. **Deliberate starts and ownership:** choose ordering, admission capacity and behavior after failure.
4. **Separate implementation boundaries:** verify selected declarations, emitted syntax, runtime APIs and cleanup independently.

---

## 5. Common pitfalls → production bugs (async and stdlib)

### [5.1. Real production bugs caused by async misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by async misunderstandings.md>)

1. **Lost completion ownership:** observe detached versus returned aggregate work without mistaking it for serialized starts.
2. **Premature winner cancellation:** reproduce aborted response-body reading and consume complete text before cancelling remaining requests.
3. **Incorrect timer diagnosis:** follow the actual runtime handle and cancellation path rather than assuming annotations convert values.
4. **Rejection boundary assumptions:** compare local class identity with validated serialized data and arbitrary reasons.

---

## 6. Interview questions and answers (async and stdlib)

### [6.1. Common interview QA — async types and standard library](<./sections/6. Interview questions and answers/6.1. Common interview QA async types and standard library.md>)

1. **Promise and consumed contracts:** explain fulfilled types, adoption, inference and the limits of type-only evidence.
2. **Combinator selection:** distinguish result shapes, member failures, empty input and iterator failure without transaction or cancellation claims.
3. **Cancellation ownership:** trace actual cooperation and explain why abort can still affect a winning response body.
4. **Timer environment:** inspect selected declarations, unchanged runtime identity, ref/unref and context-specific order.
5. **Scheduling decisions:** justify dependency, capacity and failure policy before choosing starts and result shapes.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Transformations and operations:** locate conditional evaluation separately from observed adoption, generator channels and synchronous iterator helpers.
2. **Verification evidence:** choose actual type-test tools, completion tests, doubles and declaration-consumer checks.
3. **Callable boundaries:** distinguish accepted callbacks, returned completion, receivers and cancellation seams.
4. **Programs and artifacts:** route selected declarations, syntax transforms, scope cleanup, runtime APIs and source/output graph failures.
5. **Measurement boundaries:** separate application scheduling from published compiler/build scaling owners.

[← Back to track](<../README.md>)
