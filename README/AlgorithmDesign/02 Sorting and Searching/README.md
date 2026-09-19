# Sorting and Searching

The first algorithms worth analyzing: why quadratic sorts survive, how merge sort earns linearithmic, why quicksort dominates (and when it collapses), how binary search halves, and what selection costs. The analysis vocabulary lives in [Domain 01](<../01 Complexity and Algorithmic Thinking/README.md>); this domain spends it on the classics — every bound here derives from that domain's leaves, linked rather than re-derived.

## 0. Prerequisites

[Domain 01: Complexity and Algorithmic Thinking](<../01 Complexity and Algorithmic Thinking/README.md>) (notation, cases, recurrence, measurement) and working JavaScript arrays ([JavaScript 08](<../../JavaScript/08 Arrays/README.md>) — method mechanics assumed, priced here). This domain assumes both and spends its pages on algorithms, not syntax.

## 1. Quadratic sorts

### [1.1. Insertion, selection, and bubble — why they survive](<./sections/1. Quadratic sorts/1.1. Insertion selection and bubble why they survive.md>)

1. **Small-`n` champions with different virtues** (insertion: adaptive, stable, online; selection: minimal writes; bubble: the pedagogical baseline nobody ships).
2. **Best cases differ, worst cases agree** (insertion `O(n)` on sorted — verified 0 shifts; all three `O(n²)` worst — verified 4950 on reversed 100).
3. **Hybrids keep them employed** (merge/quick fall back to insertion below ~32 — the crossover measured, not theorized).

## 2. Linearithmic sorts

### [2.1. Merge sort: the divide-and-conquer flagship](<./sections/2. Linearithmic sorts/2.1. Merge sort the divide-and-conquer flagship.md>)

1. **Halve, sort, merge — `T(n) = 2T(n/2) + O(n)`** (the recurrence from Domain 01 unrolled live: `log n` levels × `n` work).
2. **Stable and predictable, never in-place** (`O(n)` auxiliary is the price of the guarantee — worst case *is* `n log n`).
3. **External sorting's only choice** (sequential access patterns survive disks and tapes where quicksort's random jumps die).

### [2.2. Quicksort: partition, pivots, and the worst case](<./sections/2. Linearithmic sorts/2.2. Quicksort partition pivots and the worst case.md>)

1. **Partition around a pivot, recurse both sides** (Lomuto vs Hoare shapes — the invariant that makes it correct).
2. **Pivots decide the rung** (random/median-of-three keeps `O(n log n)` expected; naive last-pivot on sorted input degenerates — verified depth 199 on sorted 200).
3. **Average-case royalty, worst-case liability** (shuffle or introspect — engineering keeps the crown without the collapse).

---

## 3. Searching and selection

### [3.1. Binary search and its bound variants](<./sections/3. Searching and selection/3.1. Binary search and its bound variants.md>)

1. **Halve the range on sorted data** (`T(n) = T(n/2) + O(1)` → `O(log n)` — 30 steps devour billions).
2. **Invariants, not indices** (the loop invariant that prevents the off-by-one graveyard — `<` vs `<=`, `mid` bias, empty ranges).
3. **Lower and upper bounds generalize it** (first-`true` predicates — insertion points, ranges, and peaks all reduce to bounds).

### [3.2. Selection, heapsort preview, and the sort lower bound](<./sections/3. Searching and selection/3.2. Selection heapsort preview and the sort lower bound.md>)

1. **Quickselect finds k-th in `O(n)` average** (partition, keep one side — sorting to select is overpaying).
2. **Comparison sorts can't beat `n log n`** (decision-tree lower bound — `n!` leaves need `log(n!) = Ω(n log n)` comparisons).
3. **Heapsort teaser, heaps in Domain 04** (guaranteed `n log n` in-place — the full structure deferred, the promise recorded).

---

## 4. Important points to remember (sorting and searching)

### [4.1. Sorting checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Sorting checklist habits mentors insist on.md>)

1. **Stability is a requirement, not a feature** (equal keys keep order — verified V8 stability — or downstream logic silently reorders).
2. **Know your input before your algorithm** (sortedness, size, memory budget — the three answers that pick the sort).
3. **Standard library first, custom second** (`Array.prototype.sort` is TimSort-class engineering — beat it with measurement, not ambition).

---

## 5. Interview questions and answers (sorting and searching)

### [5.1. Common interview QA: sorts, searches, and bounds](<./sections/5. Interview questions and answers/5.1. Common interview QA sorts searches and bounds.md>)

1. **Sort this by hand, narrating costs** (the mechanics screen — partition once, merge once, count honestly).
2. **Binary search with duplicates — first occurrence?** (the invariant screen — bound variants under pressure).
3. **Why can't we sort faster than `n log n`?** (the lower-bound answer — decision trees in ninety seconds), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Analysis machinery** (notation, recurrences, amortization → Domain 01; this domain applies, never re-derives).
2. **Structures and paradigms** (heaps → 04; string matching → 03; divide-and-conquer at scale → 06; language mechanics → JavaScript track).
3. **Vocabulary naming** (what sort names mean in meetings → IT Vocabulary; this track owns the algorithms).
