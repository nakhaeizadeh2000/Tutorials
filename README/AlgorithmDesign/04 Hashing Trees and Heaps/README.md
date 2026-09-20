# Hashing, Trees, and Heaps

The structures that buy speed with organization: hash maps with honest collision stories, prefix-sum patterns, binary search trees (and their degenerate shadow), traversals, heaps with priority queues, and tries for multi-pattern matching. Analysis lives in [Domain 01](<../01 Complexity and Algorithmic Thinking/README.md>); linear patterns in [Domain 03](<../03 Linear Structures and Two-Pointer Techniques/README.md>). This domain teaches `O(1)`-average power — and the worst cases hiding underneath.

## 0. Prerequisites

[Domain 01: Complexity and Algorithmic Thinking](<../01 Complexity and Algorithmic Thinking/README.md>) (average-vs-worst honesty, amortization — resizes amortize) and [Domain 02: Sorting and Searching](<../02 Sorting and Searching/README.md>) (lower bounds, heapsort teaser paying off here) plus JavaScript Map/Set/objects ([JavaScript 09](<../../JavaScript/09 Collections Map Set and Weak References/README.md>) — mechanics assumed, priced here).

## 1. Hashing

### [1.1. Hash maps: average `O(1)`, honest worst cases](<./sections/1. Hashing/1.1. Hash maps average O1 honest worst cases.md>)

1. **Hash, probe, resize** (buckets + load factor + doubling — the machinery behind the average).
2. **Collisions degrade adversarially** (crafted keys → `O(n)` chains — average assumes non-hostile hashing).
3. **Maps model relationships** (complements, groupings, caches-with-bounds — the `O(1)`-average workhorse).

### [1.2. Prefix sums and frequency patterns](<./sections/1. Hashing/1.2. Prefix sums and frequency patterns.md>)

1. **Prefix maps answer range queries** (subarray-sum-K in one pass — verified count 4 — where windows can't go).
2. **Frequency tables classify** (anagrams, first-unique, top-k-frequent — counting as a technique).
3. **Hashing trades space for passes** (`O(n)` table buys single-pass — budgeted per Domain 01 §2.2).

---

## 2. Trees

### [2.1. Binary search trees: ordered maps with a shadow](<./sections/2. Trees/2.1. Binary search trees ordered maps with a shadow.md>)

1. **Invariant orders everything** (left < node ≤ right — search/insert/delete by descent).
2. **Degenerate input builds a list** (sorted insertion → depth 10 at `n=10` verified — the quicksort collapse wearing bark).
3. **Balance is a separate structure** (AVL/red-black mechanics deferred to library use — state the guarantee, borrow the code).

### [2.2. Traversals: inorder, pre, post, and level](<./sections/2. Trees/2.2. Traversals inorder pre post and level.md>)

1. **Depth-first spells three ways** (inorder sorts BSTs; pre/post serialize and evaluate — recursion mirrors structure).
2. **Breadth-first needs a queue** (level order = FIFO discipline from Domain 03 — structure matches algorithm).
3. **Iterative twins bound the stack** (explicit stacks trade `RangeError` risk for visible heap — Domain 01 §2.2 applied).

---

## 3. Heaps and tries

### [3.1. Heaps, priority queues, and heapsort proper](<./sections/3. Heaps and tries/3.1. Heaps priority queues and heapsort proper.md>)

1. **Sift maintains the heap property** (push bubbles up, pop sifts down — verified extraction order `1,2,3,5,8,9`).
2. **Priority queues schedule by importance** (k-way merge, Dijkstra preview for Domain 05, task scheduling).
3. **Heapsort delivers the teaser promise** (guaranteed `n log n`, `O(1)` aux, unstable — Domain 02 §3.2's contract fulfilled).

### [3.2. Tries and multi-pattern matching](<./sections/3. Heaps and tries/3.2. Tries and multi-pattern matching.md>)

1. **Prefixes share nodes** (insert once per character — common prefixes compress naturally).
2. **Autocomplete walks the trie** (prefix descent + subtree enumeration — keystrokes to candidates).
3. **Aho-Corasick generalizes KMP** (failure links on trie nodes — Domain 03 §3.2's ancestor, multi-pattern descendant).

---

## 4. Important points to remember (structures)

### [4.1. Structures checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Structures checklist habits mentors insist on.md>)

1. **Average with distribution, worst with intent** (hashing honesty — uniform vs adversarial stated per use).
2. **Invariants before operations** (BST order, heap property, trie prefixes — structure truths precede code).
3. **Bounds on every cache and table** (eviction at birth — unbounded structures are incidents scheduled).

---

## 5. Interview questions and answers (structures)

### [5.1. Common interview QA: hashing, trees, and heaps](<./sections/5. Interview questions and answers/5.1. Common interview QA hashing trees and heaps.md>)

1. **Design a hash map** (the machinery screen — buckets, collisions, resize, honest bounds).
2. **Validate a BST, iteratively** (the invariant screen — bounds threading without recursion).
3. **Top-k streaming numbers** (the heap screen — `O(n log k)` beats sort-and-slice), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Analysis and linear patterns** (bounds/amortization → 01; sorting/searching → 02; pointers/windows → 03).
2. **Graphs and paradigms** (BFS/DFS/Dijkstra → 05; DP/memoization theory → 06; mechanics → JavaScript track).
3. **Vocabulary naming** (structure names in meetings → IT Vocabulary; this track owns the implementations).
