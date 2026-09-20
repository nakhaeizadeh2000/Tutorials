# Graphs

Relationships as structure: breadth-first levels with shortest-hop guarantees, depth-first orderings (components, cycles, topological sorts), Dijkstra's weighted frontier on heaps, union-find connectivity, and modeling recipes that turn statements into adjacency. Traversal discipline lives in [Domains 03–04](<../03 Linear Structures and Two-Pointer Techniques/README.md>); priority queues in [Domain 04 §3.1](<../04 Hashing Trees and Heaps/sections/3. Heaps and tries/3.1. Heaps priority queues and heapsort proper.md>). This domain teaches connectivity thinking — every leaf answers "what reaches what, and cheapest?"

## 0. Prerequisites

[Domain 01: Complexity and Algorithmic Thinking](<../01 Complexity and Algorithmic Thinking/README.md>) (bounds), [Domain 03: Linear Structures and Two-Pointer Techniques](<../03 Linear Structures and Two-Pointer Techniques/README.md>) (queue/stack discipline — BFS/DFS are those disciplines on graphs), and [Domain 04: Hashing, Trees, and Heaps](<../04 Hashing Trees and Heaps/README.md>) (heap frontiers, adjacency as Map-of-lists). This domain assumes all three and spends its pages on graphs, not mechanics.

## 1. Traversal

### [1.1. BFS: levels with shortest-hop guarantees](<./sections/1. Traversal/1.1. BFS levels with shortest-hop guarantees.md>)

1. **First visit is shortest** (unweighted hops — FIFO levels prove it; verified distances `1:0,2:1,3:1,4:2`).
2. **Visited sets prevent rework** (mark-on-enqueue, not on-dequeue — the duplicate that corrupts counts).
3. **Levels structure the answer** (length-snapshot loops — shortest paths, views, bipartite checks).

### [1.2. DFS: components, cycles, and topological order](<./sections/1. Traversal/1.2. DFS components cycles and topological order.md>)

1. **Three colors find cycles** (white/gray/black — gray re-entry proves the loop, black skips finished work).
2. **Postorder reversed topologically sorts** (DAG linearizations — verified order `[4,5,0,2,3,1]`, cycle flag clean).
3. **Components fall out free** (unvisited restarts count islands — flood fill is DFS wearing paint).

---

## 2. Paths and components

### [2.1. Dijkstra: weighted shortest paths](<./sections/2. Paths and components/2.1. Dijkstra weighted shortest paths.md>)

1. **Cheapest-unsettled-first is optimal** (nonnegative weights — settling order proves distances; verified `1:0,2:3,3:2,4:6`).
2. **Heaps serve the frontier** (`O((V+E) log V)` with binary heaps — Domain 04 §3.1's PQ at work).
3. **Negatives need Bellman-Ford** (reweighting fails below zero — know the boundary, route around it).

### [2.2. Union-find: connectivity in near-constant time](<./sections/2. Paths and components/2.2. Union-find connectivity in near-constant time.md>)

1. **Union by rank, find with compression** (trees stay flat — inverse-Ackermann amortized, effectively constant).
2. **Connectivity and cycle questions collapse** (same-set checks — verified union/find/false-repeat — Kruskal's edge engine).
3. **Dynamic connectivity's only structure** (online merges — offline alternatives need divide-and-conquer).

---

## 3. Graph modeling

### [3.1. Representations and modeling recipes](<./sections/3. Graph modeling/3.1. Representations and modeling recipes.md>)

1. **Lists for sparse, matrices for dense** (adjacency `O(V+E)` vs `O(V²)` — representation follows density).
2. **Model statements into vertices and edges** (grids, words, states — the translation skill interviews screen).
3. **Implicit graphs search without building** (neighbors generated on demand — memory for infinite state spaces).

---

## 4. Important points to remember (graphs)

### [4.1. Graphs checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Graphs checklist habits mentors insist on.md>)

1. **Weighted? Directed? Cyclic?** (three questions pick the algorithm — BFS/Dijkstra/Bellman-Ford/topological).
2. **Visited discipline stated** (mark-on-enqueue for BFS, three colors for DFS — rework and false cycles prevented).
3. **Model before code** (vertices, edges, weights explicit — translation errors outnumber algorithm errors).

---

## 5. Interview questions and answers (graphs)

### [5.1. Common interview QA: traversals, paths, and modeling](<./sections/5. Interview questions and answers/5.1. Common interview QA traversals paths and modeling.md>)

1. **Shortest path in a grid with obstacles?** (the modeling screen — BFS on implicit graphs, visited discipline).
2. **Course schedule — can you finish?** (the cycle screen — three colors vs indegree peeling).
3. **Network delay time?** (the Dijkstra screen — frontier narration with settling proof), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Traversal discipline and heaps** (queues/stacks → 03; priority queues → 04; this domain composes both).
2. **Paradigms on graphs** (DP on DAGs/shortest-paths → 06; MST detail → spanning literature via Kruskal sketch).
3. **Vocabulary naming** (graph words in meetings → IT Vocabulary; this track owns the algorithms).
