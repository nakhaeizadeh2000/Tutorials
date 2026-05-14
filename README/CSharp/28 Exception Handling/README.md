# Exception Handling

## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).

## 1. Exception Handling mental model (C# 15 mindset)

### [1.1 Exceptions as contract signals: prevent vs handle](<./sections/1. Exception Handling mental model/1.1 Exceptions as contract signals prevent vs handle.md>)

1. **Contract framing**: decide what is a programmer error (preconditions) vs a runtime fault (IO/network/data corruption).
2. **Control-flow principle**: avoid exceptions for normal/expected paths; prefer `Try*` patterns or validation before risky work.
3. **Performance reality**: exception creation + stack trace capture is expensive; treat exceptions as cold-path signals.
4. **Correctness-first**: after failure, decide what must be true (cleanup, rollback, retry decision, error reporting).

---

## 2. Try-Catch-Finally (mechanics + best practices)

### [2.1 Try-Catch-Finally fundamentals: keep try small, order catches](<./sections/2. Try-Catch-Finally/2.1 Try-Catch-Finally fundamentals keep try small order catches.md>)

1. **`try` size**: keep the `try` block as small as practical so you don’t accidentally catch unrelated failures.
2. **Catch specificity**: catch the most specific exception types you can handle meaningfully.
3. **Ordering rule**: more specific `catch` blocks before broader ones like `System.Exception`.
4. **`finally` guarantee**: `finally` runs whether you return or throw; use it for cleanup that must always happen.
5. **Rethrow correctly**: prefer `throw;` to preserve the original `Stack Trace`.
6. **Wrap vs rethrow**: rethrow when you add no meaning; wrap when you add domain context and preserve `Inner Exception`.

---

## 3. Catch When (or) Exception Filters

### [3.1 Exception Filters: selective handling with `catch when`](<./sections/3. Catch When or Exception Filters/3.1 Exception Filters selective handling with catch when.md>)

1. **Syntax**: use `catch (ExceptionType ex) when (filterCondition)` to select handlers based on extra info.
2. **Why filters**: filters can reduce unnecessary handler execution for exceptions you don’t actually want to handle.
3. **Evaluation timing**: filter is evaluated when the exception is thrown, before committing to the handler.
4. **Performance rule**: keep filter expressions cheap (no heavy work, no allocations).
5. **Business logic encoding**: use filters to encode rules like “handle this only for user-input parsing failures”.

---

## 4. System.Exception, Inner Exception, and Stack Trace

### [4.1 `System.Exception` introspection: what to read and when](<./sections/4. System.Exception introspection/4.1 System.Exception introspection what to read and when.md>)

1. **`System.Exception`**: base type for most .NET exceptions; use it only as a last fallback, not as the first choice.
2. **`Message` vs diagnostics**: `Message` is human-facing; deep debugging value is typically `Stack Trace`, `TargetSite`, and `Inner Exception`.
3. **Inner Exception**: preserve root cause by wrapping with `new CustomException(message, innerException)`.
4. **Stack Trace**: understand stack traces can be shaped by observation points (especially with async continuations).

---

## 5. Required built-in exceptions (recognition + handling intent)

### [5.1 Common exception types you must recognize](<./sections/5. Required built-in exceptions/5.1 Common exception types you must recognize.md>)

1. **NullReferenceException**: treat as a correctness bug (broken null contract or missing guard); fix the root cause.
2. **FormatException**: parsing/format mismatch; for user input prefer `TryParse`-style patterns.
3. **IndexOutOfRangeException**: invalid indexing; validate indices/lengths and model bounds explicitly.
4. **ArgumentNullException**: caller passed `null` for a non-null parameter; validate at boundaries and throw immediately.
5. **ArgumentException**: invalid argument shape/semantics; include clear message and correct parameter naming.
6. **ArgumentOutOfRangeException**: numeric/range violation; include actual value and expected range when appropriate.
7. **InvalidOperationException**: operation not allowed in the current object state (lifecycle stage/state machine transition).
8. **System.Exception**: last-resort fallback; prefer specific exceptions for actionable error handling.

---

## 6. Custom Exceptions

### [6.1 Designing Custom Exceptions for domain-level handling](<./sections/6. Custom Exceptions/6.1 Designing Custom Exceptions for domain-level handling.md>)

1. **Purpose**: represent domain failure states so callers can handle failures intentionally.
2. **Naming**: name exceptions after the business/operation concept, not internal implementation details.
3. **Constructors**: provide `(string message)` and `(string message, Exception innerException)` when wrapping is meaningful.
4. **Cause preservation**: always pass the original failure as `Inner Exception` when you wrap.
5. **Stack trace discipline**: don’t tamper with stack traces; use correct rethrow (`throw;`) or wrapping via inner exception.

---

## 7. Exception Logger (logging strategy + correctness)

### [7.1 Exception Logger: log policy and structured diagnostics](<./sections/7. Exception Logger/7.1 Exception Logger log policy structured diagnostics.md>)

1. **Log at the boundary**: log once where you decide severity and user impact.
2. **Structured logging**: pass the exception object so `Stack Trace` is captured by the logging pipeline.
3. **Avoid expensive formatting**: don’t allocate large strings or run heavy formatting work in error paths.
4. **Context enrichment**: add correlation IDs/operation IDs and safe (non-PII) key parameters.
5. **Cancellation policy**: treat cancellation as expected when it reflects user/system cancellation (don’t spam error logs).
6. **Failure-resistant logging**: logging itself must not throw and break the original failure path.

---

## 8. Stack Trace and Inner Exception handling patterns

### [8.1 Preserving causality: rethrow vs wrap patterns](<./sections/8. Stack Trace and Inner Exception patterns/8.1 Preserving causality rethrow vs wrap patterns.md>)

1. **Rethrow pattern**: rethrow inside the same catch with `throw;` to keep the original `Stack Trace`.
2. **Wrap pattern**: when adding context, keep the original as `Inner Exception` so diagnostics point to the root cause.
3. **Async reality**: treat observed stack traces as shaped by continuations; log enough context to reconstruct flow.
4. **No root-cause replacement**: don’t replace the root failure with a generic exception without preserving `Inner Exception`.

---

## 9. IMP points to remember about Exception Handling (checklist)

### [9.1 Exception Handling checklist mentors insist on](<./sections/9. IMP points/9.1 Exception Handling checklist mentors insist on.md>)

1. **Catch only what you can handle**; don’t “log and ignore” unless your design supports it.
2. **Prefer specific exceptions** over `System.Exception` for correctness and caller messaging.
3. **Use Exception Filters (`catch when`)** to keep handler selection correct and cheap.
4. **Keep `try` small** to avoid accidentally catching unrelated bugs.
5. **Use `throw;` for rethrow** to preserve the original `Stack Trace`.
6. **Wrap with inner exception** when adding domain context so `Inner Exception` retains the cause chain.
7. **Avoid exceptions for control flow**; validate up front or use `Try*` patterns.
8. **Cancellation isn’t automatically an error**; propagate cancellation appropriately.
9. **Logging is policy**: log once, with structured context, and never at the cost of reliability.

---

## 10. Overlaps to avoid (boundaries in your repo)

### [10.1 Where this domain stops](<./sections/10. Overlaps to avoid/10.1 Where this domain stops.md>)

1. **Null correctness vs exception handling**: overlaps with `Handling Null`; here we cover what to do when null-related violations surface as exceptions.
2. **API contract validation**: overlaps with API design domains; here we focus on consistent throw/handle strategy.
3. **Concurrency diagnostics**: overlaps with `Cuncurrent & Parallel`; here we focus on exception semantics, filtering, logging, and root-cause preservation.

---

## 11. questions and answers for interviews (Exception Handling)

### [11.1 Interview Q&A: exception semantics, filters, and logging](<./sections/11. Interview Q and A/11.1 Interview Q&A exception semantics filters logging.md>)

1. **Q: When should you use `catch when` (Exception Filters) instead of multiple `catch` blocks?**
   1. **A:** use filters when handler selection depends on extra exception details so you avoid committing to a handler you shouldn’t handle.
   2. **A:** use filters to separate “ignore and keep searching” from “handle here” for correctness and often better performance.
2. **Q: What is the difference between `throw;` and `throw ex;`?**
   1. **A:** `throw;` preserves the original `Stack Trace`, while `throw ex;` resets it to the current throw site (common rethrow misuse).
3. **Q: When wrapping exceptions, what should you do with the original failure?**
   1. **A:** keep it as `Inner Exception` so the root cause remains discoverable in logs/debugging.
   2. **A:** include domain context in your wrapper message while preserving the original exception as the cause.
4. **Q: Why is using exceptions for control flow considered a bad practice?**
   1. **A:** exceptions are expensive (stack capture + unwinding), harming CPU/latency and potentially increasing GC pressure.
   2. **A:** prefer pre-validation or `Try*` patterns for expected outcomes.
5. **Q: How do you choose between `ArgumentException`, `ArgumentOutOfRangeException`, and `InvalidOperationException`?**
   1. **A:** `ArgumentNullException`/`ArgumentException` for invalid caller inputs; `ArgumentOutOfRangeException` for numeric/range violations; `InvalidOperationException` for “state/lifecycle” violations.
6. **Q: What exception types should you treat as “expected” in some systems?**
   1. **A:** cancellation (e.g., `OperationCanceledException`) may be expected in cooperative cancellation flows; handle it as a normal outcome when cancellation is requested.
7. **Q: What makes `NullReferenceException` a red flag?**
   1. **A:** it typically indicates a broken null contract or missing guard; treat it as a correctness bug and fix validation/flow.
8. **Q: What do you log for good diagnostics with an Exception Logger?**
   1. **A:** log the exception object (so `Stack Trace` is captured) and add structured context (operation name, correlation ID, safe parameter identifiers).
