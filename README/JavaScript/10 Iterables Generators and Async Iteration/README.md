# Iterables Generators and Async Iteration

The iteration protocols that make `for-of`, spread, destructuring, `Array.from`, `Map`/`Set` traversal, and generators work — how an object becomes iterable, how an iterator's `next`/`return`/`throw` drives consumption and closing, how `function*`/`yield`/`yield*` suspends and composes, and how `for await...of` and async generators extend the same contract across promises — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Arrays](<../08 Arrays/README.md>) for [what arrays are and Array.from/creation](<../08 Arrays/sections/1. Arrays are exotic objects/1.2. Creating arrays literals the Array constructor trap Array.of and Array.from.md>) and [holes and iteration costs](<../08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>); [Collections](<../09 Collections Map Set and Weak References/README.md>) for [Map/Set insertion-order iteration](<../09 Collections Map Set and Weak References/sections/1. Map deep dive/1.1. Map creation SameValueZero insertion order and iteration.md>) and [SameValueZero](<../09 Collections Map Set and Weak References/sections/1. Map deep dive/1.1. Map creation SameValueZero insertion order and iteration.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [property descriptors and enumeration order](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>) and [immutability shallow reality](<../06 Objects in Depth/sections/5. Integrity and immutability/5.1. Prevent extensions seal freeze and shallow immutability.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [function forms and closures](<../05 Functions Deep Dive/sections/1. Function forms and the function object/1.1. Function declarations expressions and hoisting.md>) and [first-class/HOF](<../05 Functions Deep Dive/sections/4. First-class and execution patterns/4.1. First-class functions callbacks higher-order functions and composition.md>); [Language Basics](<../02 Language Basics/README.md>) for [for-of vs for-in](<../02 Language Basics/sections/2. Control flow/2.3. for-of vs for-in iteration semantics and traps.md>).

---

## 1. Iterable and iterator protocols

### [1.1. Iterable vs iterator vs array-like and Symbol.iterator](<./sections/1. Iterable and iterator protocols/1.1. Iterable vs iterator vs array-like and Symbol.iterator.md>)

1. **Iterable is `Symbol.iterator` returning an iterator; iterator is `next()` returning `{value, done}`** (protocol table, well-known symbol, string/array/Map/Set/generator all iterable).
2. **Array-like vs iterable — dual nature and detection** (`length` + indices vs `Symbol.iterator`; `{0:"a", length:1}` is not iterable; arguments/NodeList dual).
3. **The iterator is itself iterable (`[Symbol.iterator](){return this}`)** (why `for-of` works on iterators and why spreading an iterator consumes it).

### [1.2. The iterator protocol next done value return throw and closing](<./sections/1. Iterable and iterator protocols/1.2. The iterator protocol next done value return throw and closing.md>)

1. **The three methods and their contracts** (`next()` drives, `return()` closes early, `throw()` injects — all return `{value, done}`; optional after ES2015).
2. **Completion record and `done:true` semantics** (`value` on done is not yielded — `for-of` discards it; explicit `next()` reveals it).
3. **IteratorClose — how break/throw/return trigger `return()` for cleanup** (try/finally in generators; resource-safe iterables need `return`).

---

## 2. Consumption for-of spread and interop

### [2.1. for-of mechanics iteration closing and break throw](<./sections/2. Consumption for-of spread and interop/2.1. for-of mechanics iteration closing and break throw.md>)

1. **Desugaring of `for-of` to GetIterator + loop + IteratorClose** (CreatePerIterationEnvironment, abrupt completion closes non-done iterators).
2. **Early exit paths — break continue return throw all close** (vs `for` index loop which never closes; try/finally firing in the producer).
3. **`for-of` vs `for-in` vs `forEach` — which protocol each uses** (iterable protocol vs enumeration vs callback; holes skipped or not).

### [2.2. Spread Array.from destructuring and interop with Map Set generators strings](<./sections/2. Consumption for-of spread and interop/2.2. Spread Array.from destructuring and interop with Map Set generators strings.md>)

1. **Spread `...iterable` and `Array.from(iterable, mapFn)` are iterable consumers** (iterable → array; `Array.from` handles both iterable and array-like; mapFn + thisArg).
2. **Destructuring `[a,b,...rest]` and `new Map(iterable)`/`new Set(iterable)` consume iteration** (order is insertion order; holes in arrays preserved or densified).
3. **String iteration is code-point not code-unit; generators and Map/Set are iterable factories** (emoji surrogate pair `..."👩‍🚀"`, `Map` yields entries, `Set` yields values, generator yields via `yield`).

---

## 3. Generators

### [3.1. Generator functions yield suspension and the Generator object](<./sections/3. Generators/3.1. Generator functions yield suspension and the Generator object.md>)

1. **`function*` creates a GeneratorFunction that returns a Generator (iterator + iterable)** (star position `function*`, `yield` pauses, caller resumes via `next()`).
2. **Execution is suspend-and-resume, not run-to-completion** (local state, params, try blocks frozen between yields; lazy evaluation).
3. **Generator object protocol — `next`/`return`/`throw` and `Symbol.iterator` self** (generator is both iterator and iterable; `yield` expression value is the next `next(arg)`).

### [3.2. yield* delegation and composition](<./sections/3. Generators/3.2. yield delegation and composition.md>)

1. **`yield* iterable` delegates to that iterable's iterator** (forwards `next`/`return`/`throw` and captures the inner `return` value).
2. **Composition of iterables and recursive flattening via `yield*`** (vs manual `for-of` loop + `yield`; `yield*` propagates closing).
3. **When to use `yield*` vs `yield` vs direct iteration** (delegation preserves completion value and closing semantics; `yield array` yields the array as one value).

### [3.3. Communicating with generators next throw return](<./sections/3. Generators/3.3. Communicating with generators next throw return.md>)

1. **`gen.next(v)` sends `v` as the value of the paused `yield`** (first `next()` arg ignored; subsequent args become yield results).
2. **`gen.throw(err)` injects at the pause point; `gen.return(v)` closes early** (try/catch inside generator catches throws; `return` triggers finally and yields `done:true`).
3. **Control-flow patterns — two-way channel, error injection, cooperative cancellation** (injecting validation errors, early termination from consumer).

### [3.4. Custom iterables infinite sequences and early termination](<./sections/3. Generators/3.4. Custom iterables infinite sequences and early termination.md>)

1. **Making any object iterable via `[Symbol.iterator]`** (factory returning fresh iterator; class vs literal; fresh iterator per consumption).
2. **Infinite and lazy sequences — range/fibonacci/take and resource cleanup** (`while(true) yield` + consumer `break` triggers `return()` → finally).
3. **Early termination contract — `return()` + try/finally for resources** (file/DB cursor/iterator helpers; why iterables that hold resources must implement `return`).

---

## 4. Async iteration

### [4.1. Async iterables Symbol.asyncIterator and for await...of](<./sections/4. Async iteration/4.1. Async iterables Symbol.asyncIterator and for await...of.md>)

1. **`[Symbol.asyncIterator]` returns a promise-of-`{value,done}` async iterator** (vs sync iterator; async iterable may also be sync iterable).
2. **`for await...of` works on both sync and async iterables — awaiting each step** (works on `Array`/`Map`/`Set`/`string` as sync — wraps; true async sources are streams/queues).
3. **Closing semantics and error propagation for async iteration** (break/throw triggers async `return()`; `await` ordering and backpressure).

### [4.2. Async generators async yield and composition](<./sections/4. Async iteration/4.2. Async generators async yield and composition.md>)

1. **`async function*` returns an AsyncGenerator (async iterator + async iterable)** (`await` inside + `yield`; caller `await next()` or `for await`).
2. **`yield*` and `await` composition across async/sync boundaries** (`yield* asyncIterable` delegates, `yield* syncIterable` also works inside async generator).
3. **Patterns — async queue/stream, paginated fetch, and cancellation via `return()`** (push vs pull; `try/finally` for cleanup; `AbortSignal` bridge).

---

## 5. Important points to remember (iteration)

### [5.1. Iteration checklist reflex rules mentors screen for](<./sections/5. Important points to remember/5.1. Iteration checklist reflex rules mentors screen for.md>)

1. **Iterable vs iterator vs array-like — three questions before any consumer** (has `Symbol.iterator`? has `next`? has `length`?).
2. **Completion `done` value is not yielded; `return()` must clean up** (the two most-missed closing contracts).
3. **The review grep list** (`for-in` on arrays, `yield` without `*`, `next(arg)` on first call, spread on non-iterable, missing `return` on resource iterable).

---

## 6. Common pitfalls → production bugs

### [6.1. Real production bugs caused by iteration mistakes](<./sections/6. Common pitfalls to production bugs/6.1. Real production bugs caused by iteration mistakes.md>)

1. **Spreading/destructuring a non-iterable or null — TypeError ships** (array-like without iterator, `...null` guard, `Array.from` fallback).
2. **Infinite generator without closing — memory/CPU leak or un-released handle** (forgot `return()`/break path, finally never runs).
3. **`for-await` on sync iterable without await handling and swallowed async close** (mixing sync/async contracts, un-awaited `return()`).

---

## 7. Interview questions and answers (iteration)

### [7.1. Common interview Q&A iterables generators and async iteration](<./sections/7. Interview questions and answers/7.1. Common interview QA iterables generators and async iteration.md>)

1. **The classics with mechanism-level answers** (protocols, closing, `yield*` vs `yield`, async iteration ordering).
2. **What interviewers actually probe for** (narrating suspend/resume and IteratorClose, not reciting syntax).
3. **Grading guidance** (junior/mid/senior signals, red flags like "generator runs immediately" or "`for-of` uses `Object.keys`").

---

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries what is covered elsewhere](<./sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md>)

1. **Map/Set/WeakMap iteration semantics and ordering** — Collections domain; array holes and length — Arrays domain.
2. **Function forms, closures, and `this` binding — Functions/Variables domains;** class iterables and private state — Prototypes/Objects.
3. **Promises, event loop, microtasks, and `using`/`Symbol.dispose` — Async / Error Handling / Memory domains.**

---

[← Back to JavaScript track](<../README.md>)
