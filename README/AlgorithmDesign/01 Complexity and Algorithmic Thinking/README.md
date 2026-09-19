# Complexity and Algorithmic Thinking

The lens every later domain looks through: what Big-O promises (and what it doesn't), how cases differ, how to analyze time and space on paper, and how to check the analysis against reality. Mechanics of specific algorithms live in [Domains 02–06](<../LOG.md>); this domain teaches the *measuring tape* — every later leaf quotes complexities without re-deriving what the notation means.

## 0. Prerequisites

Comfortable JavaScript (loops, functions, arrays, objects — the [JavaScript track](<../../JavaScript/README.md>), especially Domains 02, 05, and 08) and a version-controlled scratch repo ([Git Domain 01](<../../Git/01 Git Fundamentals and Mental Model/README.md>)). This domain assumes both and spends its pages on analysis, not syntax.

## 1. The notation

### [1.1. What Big-O actually promises](<./sections/1. The notation/1.1. What Big-O actually promises.md>)

1. **Upper bounds on growth, not stopwatches** (Big-O describes how cost scales with input size — the shape of the curve, never the seconds).
2. **Drop constants, keep the dominant term** (`3n² + 10n + 5` is `O(n²)` — the term that wins at scale is the only one that matters).
3. **The ladder you must feel** (`O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)` — each rung is a different universe of feasible inputs).

### [1.2. Best, worst, and average cases](<./sections/1. The notation/1.2. Best worst and average cases.md>)

1. **Worst case is the contract** (guarantees are made on the hardest input — everything else is commentary).
2. **Best case rarely matters** (optimistic bounds mislead — nobody provisions for the input that flatters).
3. **Average needs a distribution** (average over *what* inputs? — uniform assumptions smuggle in, real workloads differ).

---

## 2. Analyzing algorithms

### [2.1. Time analysis: loops, recurrence, and amortization](<./sections/2. Analyzing algorithms/2.1. Time analysis loops recurrence and amortization.md>)

1. **Count the dominant operation** (loops nest into products, sequences into sums — find what repeats and multiply).
2. **Recurrences describe divide-and-conquer** (`T(n) = 2T(n/2) + O(n)` unrolls to `O(n log n)` — the shape behind every efficient sort).
3. **Amortization averages over sequences** (occasional expensive ops spread across many cheap ones — dynamic arrays append in `O(1)` amortized).

### [2.2. Space analysis and the time-memory trade](<./sections/2. Analyzing algorithms/2.2. Space analysis and the time-memory trade.md>)

1. **Auxiliary vs total space** (input doesn't count against you — extra structures do; in-place means `O(1)` auxiliary).
2. **Call stacks are space** (recursion depth × frame size — elegant recursion ships a hidden `O(n)` stack).
3. **Trade deliberately, never accidentally** (memoization buys time with memory — budget both sides before choosing).

---

## 3. Measuring performance

### [3.1. Measuring what analysis predicts](<./sections/3. Measuring performance/3.1. Measuring what analysis predicts.md>)

1. **Time with harnesses, not vibes** (`performance.now()` deltas over repetitions — one run is noise, a thousand is signal).
2. **Confirm the curve, not the constant** (double the input, watch the ratio — `~2×` means linear, `~4×` quadratic, regardless of milliseconds).
3. **Constants strike back in production** (cache, JIT, and small-`n` regimes where `O(n²)` beats `O(n log n)` — analysis guides, measurement decides).

---

## 4. Important points to remember (complexity)

### [4.1. Complexity checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Complexity checklist habits mentors insist on.md>)

1. **Name time and space before coding** (both bounds stated up front — the design conversation starts from numbers, not code).
2. **Worst-case first, distribution second** (guarantee the bad input, then optimize the common one).
3. **Verify the curve empirically** (one doubling experiment per claim — analysis predicts, measurement confirms).

---

## 5. Interview questions and answers (complexity)

### [5.1. Common interview QA: complexity and analysis](<./sections/5. Interview questions and answers/5.1. Common interview QA complexity and analysis.md>)

1. **What's the complexity of this loop?** (the reading exercise — nested loops, early exits, and hidden costs).
2. **When is `O(n²)` acceptable?** (the judgment question — small `n`, simplicity budgets, and measured constants).
3. **Derive `O(n log n)` for halving work** (the recurrence answer — unroll once, see the pattern, generalize), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Language mechanics** (loops, closures, Array methods — the JavaScript track owns the *how*; this track owns the *how much*).
2. **Concrete algorithms and structures** (sorts, searches, graphs, DP → Domains 02–06 — this domain analyzes, they implement).
3. **Vocabulary naming** (what "Big-O" means in a meeting → IT Vocabulary; this track owns the mathematics).
