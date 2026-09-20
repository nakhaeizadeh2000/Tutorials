# Linear Structures and Two-Pointer Techniques

The interview workhorses: two pointers on arrays and linked lists, sliding windows fixed and variable, monotonic stacks, queues, and string matching without the naive scan. Analysis vocabulary lives in [Domain 01](<../01 Complexity and Algorithmic Thinking/README.md>); sorting context in [Domain 02](<../02 Sorting and Searching/README.md>). This domain teaches linear-time patterns — every leaf runs in `O(n)` time on structures you already own.

## 0. Prerequisites

[Domain 01: Complexity and Algorithmic Thinking](<../01 Complexity and Algorithmic Thinking/README.md>) (bounds, amortization — windows amortize) and [Domain 02: Sorting and Searching](<../02 Sorting and Searching/README.md>) (binary search contrast — pointers vs halving) plus JavaScript arrays/objects ([JavaScript 08](<../../JavaScript/08 Arrays/README.md>)). Two pointers assume sorted-or-structured input — sorting first is often step zero.

## 1. Two pointers

### [1.1. Opposite-ends and same-direction patterns](<./sections/1. Two pointers/1.1. Opposite-ends and same-direction patterns.md>)

1. **Converge on sorted data** (two-sum in one pass — verified pair in 4 steps — palindromes, container water).
2. **Chase with fast and slow** (dedupe in place, remove-element — one pass, `O(1)` extra, order preserved).
3. **Sortedness is the admission ticket** (pointers need structure — unsorted input pays sorting first or hashing instead).

### [1.2. Linked-list pointers: fast-slow, reversal, merge](<./sections/1. Two pointers/1.2. Linked-list pointers fast-slow reversal merge.md>)

1. **Tortoise and hare find cycles** (Floyd — meeting proves the loop, entrance needs one more pass).
2. **Reverse and merge in place** (three-pointer reversal, dummy-head merge — pointer surgery with `O(1)` extra).
3. **Lists trade access for splicing** (`O(1)` insert/delete at a known node vs `O(n)` indexing — pick by operation mix).

---

## 2. Sliding windows

### [2.1. Fixed windows: sums in one pass](<./sections/2. Sliding windows/2.1. Fixed windows sums in one pass.md>)

1. **Add one, drop one** (k-consecutive maximum — each element enters and exits once: `O(n)` total).
2. **Windows amortize to linear** (every index moves monotonically — Domain 01 §2.1's amortization wearing work clothes).
3. **Fixed size, fixed discipline** (window invariants stated before code — what the window *means* at every step).

### [2.2. Variable windows: longest and shortest](<./sections/2. Sliding windows/2.2. Variable windows longest and shortest.md>)

1. **Expand right, shrink left** (longest substring without repeats — verified 3/1/0 — at most `2n` pointer moves).
2. **Count valid, then contract** (minimum window substring — shrink while valid, record the best).
3. **Monotonicity is the admission ticket** (shrinking must preserve decidability — windows need one-directional truth).

---

## 3. Stacks, queues, and strings

### [3.1. Monotonic stacks and queue discipline](<./sections/3. Stacks queues and strings/3.1. Monotonic stacks and queue discipline.md>)

1. **Next-greater in one pass** (monotone decreasing stack — verified `[4,1,2,5,3]` → `[5,2,5,-1,-1]` — each element pushed/popped once).
2. **Queues order, deques slide** (BFS preview for Domain 05; sliding-window maximum with a deque — amortized `O(1)` per element).
3. **LIFO/FIFO as design tools** (parentheses, call-stack simulation, undo — structure matches problem shape).

### [3.2. String matching without the naive scan](<./sections/3. Stacks queues and strings/3.2. String matching without the naive scan.md>)

1. **Naive matching is quadratic** (`O(n·m)` worst — verified failure shape on repetitive text — the baseline to beat).
2. **KMP prefixes never re-scan** (prefix table — verified `[0,0,1,2,3,0,1]` — `O(n+m)` guaranteed, `O(m)` table).
3. **Rabin-Karp hashes the window** (rolling hash turns compares into arithmetic — average `O(n+m)`, verification on hits).

---

## 4. Important points to remember (linear techniques)

### [4.1. Linear-techniques checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Linear-techniques checklist habits mentors insist on.md>)

1. **Structure first, pointers second** (sorted? monotonic? linked? — the pattern follows the structure's guarantees).
2. **State the invariant before the loop** (what the window/pair/stack *means* — bugs live where invariants go unstated).
3. **Amortize explicitly** (each index moves `O(1)` times total — the linearity proof reviewers check).

---

## 5. Interview questions and answers (linear techniques)

### [5.1. Common interview QA: pointers, windows, and strings](<./sections/5. Interview questions and answers/5.1. Common interview QA pointers windows and strings.md>)

1. **Two-sum, three variants** (sorted, unsorted, counting pairs — the pattern screen: structure picks the tool).
2. **Longest substring, narrated** (the window screen — expand/shrink invariants aloud under pressure).
3. **Why is KMP linear?** (the prefix-table answer — never re-scan, table pays once), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Analysis machinery** (bounds, amortization → Domain 01; sorting/searching → Domain 02; this domain applies both).
2. **Heavier structures and paradigms** (hashing/trees/heaps → 04; graphs/BFS → 05; DP on windows → 06; mechanics → JavaScript track).
3. **Vocabulary naming** (pattern names in meetings → IT Vocabulary; this track owns the implementations).
