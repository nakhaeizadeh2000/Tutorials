# Dynamic Programming, Greedy, and Backtracking

The paradigms that solve what data structures can't: overlapping subproblems memoized or tabulated, optimal substructure built bottom-up, greedy choices proven by exchange, and backtracking search pruned to feasibility. Recurrence thinking lives in [Domain 01 §2.1](<../01 Complexity and Algorithmic Thinking/sections/2. Analyzing algorithms/2.1. Time analysis loops recurrence and amortization.md>); DAG order in [Domain 05 §1.2](<../05 Graphs/sections/1. Traversal/1.2. DFS components cycles and topological order.md>). This domain teaches *optimality thinking* — every leaf proves why its answer can't be beaten (or states exactly when it can).

## 0. Prerequisites

[Domain 01: Complexity and Algorithmic Thinking](<../01 Complexity and Algorithmic Thinking/README.md>) (recurrences, memoization costs, space budgeting), [Domain 03: Linear Structures and Two-Pointer Techniques](<../03 Linear Structures and Two-Pointer Techniques/README.md>) (windows/sliding foundations DP generalizes), and [Domain 05: Graphs](<../05 Graphs/README.md>) (topological order, DAG shortest paths — DP's graph home). This domain assumes all three and spends its pages on paradigms, not mechanics.

## 1. DP foundations

### [1.1. Memoization vs tabulation](<./sections/1. DP foundations/1.1. Memoization vs tabulation.md>)

1. **Overlapping subproblems invite memo tables** (naive fib(25): 242,785 calls verified — memo: 49 calls + 24 entries — same answers, five orders apart).
2. **Top-down asks, bottom-up builds** (recursion + cache vs iteration + table — identical complexity, opposite control flow).
3. **State defines the table** (dimensions = subproblem parameters; size = state count — the analysis before the code).

### [1.2. Classic 1D DP: stairs, robbery, and partitions](<./sections/1. DP foundations/1.2. Classic 1D DP stairs robbery and partitions.md>)

1. **Stairs count compositions** (1/2-steps → tribonacci-shaped recurrence — verified counts, `O(1)` space rolling).
2. **Robbery forbids adjacency** (include-vs-skip recurrence — verified 12 on `[2,7,9,3,1]` — two variables, no table).
3. **Partitions split optimally** (palindrome cuts, word breaks — the decision-at-every-position shape).

---

## 2. Two dimensions

### [2.1. Grid DP: paths and obstacles](<./sections/2. Two dimensions/2.1. Grid DP paths and obstacles.md>)

1. **Paths sum from top and left** (3×7 grid → 28 verified — right/down moves only, `O(mn)` time).
2. **Obstacles zero out cells** (blocked = unreachable — propagate around, don't special-case).
3. **Compress to one row** (`O(n)` space — previous row suffices; rolling arrays generalize the trick).

### [2.2. DAG DP and shortest-path variants](<./sections/2. Two dimensions/2.2. DAG DP and shortest-path variants.md>)

1. **Topological order linearizes DP** (process in topo order — `O(V+E)` shortest/longest paths on DAGs, no heap needed).
2. **Edit distance aligns optimally** (insert/delete/substitute recurrence — KMP's cousin from Domain 03, DP-dressed).
3. **LCS finds common structure** (longest common subsequence — diff tools' engine, `O(nm)` table).

---

## 3. Greedy and backtracking

### [3.1. Greedy choices and exchange arguments](<./sections/3. Greedy and backtracking/3.1. Greedy choices and exchange arguments.md>)

1. **Greedy needs a proof, not a hope** (exchange argument: an optimal solution survives swapping in the greedy choice).
2. **Activity selection is canonical** (earliest-finish-first — optimal by exchange, `O(n log n)` for the sort).
3. **Greedy fails instructively** (coin systems, knapsack fractions-vs-whole — know the boundary, route to DP).

### [3.2. Backtracking with pruning](<./sections/3. Greedy and backtracking/3.2. Backtracking with pruning.md>)

1. **Search with undo** (choose → recurse → unchoose — permutations, subsets, N-queens skeletons).
2. **Prune with constraints** (feasibility checks kill subtrees early — constraint propagation beats raw enumeration).
3. **Complexity is output-sensitive** (answer-sized search — pruning quality decides the rung, not the code shape).

---

## 4. Important points to remember (paradigms)

### [4.1. Paradigm checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Paradigm checklist habits mentors insist on.md>)

1. **Optimal substructure first** (optimal answers built from optimal subanswers — the DP admission ticket).
2. **Greedy proven or DP'd** (exchange argument written, or table built — hope is not a paradigm).
3. **State, transition, base, order** (the four DP slots filled before code — recurrence before implementation).

---

## 5. Interview questions and answers (paradigms)

### [5.1. Common interview QA: DP, greedy, and backtracking](<./sections/5. Interview questions and answers/5.1. Common interview QA DP greedy backtracking.md>)

1. **Climbing stairs, three variants** (recurrence screen — count, min-cost, and k-steps narrated).
2. **Coin change: greedy or DP?** (the judgment screen — canonical systems vs arbitrary denominations).
3. **Solve N-queens sketch** (the backtracking screen — place, constrain, undo), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Recurrence and memoization costs** (trees → 01; memo tables priced in 01 §2.2; this domain formulates).
2. **Graphs and strings underneath** (topo/Dijkstra → 05; KMP/prefix reasoning → 03; this domain consumes both).
3. **Vocabulary naming** (paradigm names in meetings → IT Vocabulary; this track owns the implementations).
