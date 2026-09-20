# Production Problem Solving and Interview Mastery

The capstone: solving methodically under constraints, verifying with oracles and stress tests, debugging the verdict classes (WA/TLE/MLE), and executing interviews with narration that proves thinking. Every technique lives in [Domains 01–06](<../01 Complexity and Algorithmic Thinking/README.md>); this domain teaches *performance under pressure* — the meta-skills that convert knowledge into accepted solutions and offers.

## 0. Prerequisites

All Domains 01–06 (analysis, sorting/searching, linear techniques, structures, graphs, paradigms) plus measured practice ([Domain 01 §3.1](<../01 Complexity and Algorithmic Thinking/sections/3. Measuring performance/3.1. Measuring what analysis predicts.md>) — harnesses reused here for stress testing). This domain assumes the full toolkit and spends its pages on method, verification, and execution.

## 1. Solving method

### [1.1. Clarify, plan, code, test](<./sections/1. Solving method/1.1. Clarify plan code test.md>)

1. **Examples before algorithms** (hand-run samples — input/output pairs reveal the structure the statement hides).
2. **Constraints pick the paradigm** (limits bound the rung — `n ≤ 20` enumerates, `n ≤ 10⁵` demands linearithmic or better).
3. **Edges enumerated, not discovered** (empty, single, duplicate, extreme — the matrix written before code, not after WA).

### [1.2. Constraints-first design](<./sections/1. Solving method/1.2. Constraints-first design.md>)

1. **Read limits as specifications** (`10⁵` + 1s budget → `O(n log n)` ceiling — the ladder (Domain 01 §1.1) applied to budgets).
2. **200k-scan sanity checks** (linear passes cost milliseconds — verified 3.99ms — estimate before optimizing).
3. **Two-solution strategy** (brute force first for truth, optimized second for performance — correctness banked early).

---

## 2. Verification and debugging

### [2.1. Stress testing against brute force](<./sections/2. Verification and debugging/2.1. Stress testing against brute force.md>)

1. **Oracles decide truth** (slow-but-obviously-right vs fast-candidate — disagreement locates bugs mechanically).
2. **Randomized agreement at scale** (verified 500/500 agreement — hundreds of tiny cases beat dozens of hand-picked).
3. **Shrink failures minimally** (delta-debugging by hand — smallest failing input teaches the most).

### [2.2. Diagnosing WA, TLE, and MLE](<./sections/2. Verification and debugging/2.2. Diagnosing WA TLE and MLE.md>)

1. **WA is logic or modeling** (wrong recurrence, missed edge, misread statement — bisect by stress-shrunk case).
2. **TLE is complexity or constants** (rung audit first — ladder violation vs constant blowup decided by doubling).
3. **MLE is table unbounded** (state count × entry size — roll, compress, or stream; bounds at birth).

---

## 3. Interview execution

### [3.1. Narrating solutions under pressure](<./sections/3. Interview execution/3.1. Narrating solutions under pressure.md>)

1. **Think aloud in structure** (restate → examples → bound → approach → code → test — the six-beat narration).
2. **Recover visibly from stuck** (state assumptions, try small cases, name what's missing — stuck silently fails).
3. **Close with verification** (trace the sample, state bounds, name trade-offs — finished means proven).

---

## 4. Important points to remember (mastery)

### [4.1. Mastery checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Mastery checklist habits mentors insist on.md>)

1. **Method before code, always** (clarify → constrain → select → verify — the loop that prevents all three verdicts).
2. **Oracle everything shippable** (stress harness beside every non-trivial solution — truth automated).
3. **Narrate to prove thinking** (interviews screen reasoning aloud — silence is unscored).

---

## 5. Interview questions and answers (mastery)

### [5.1. Common interview QA: meta-skills and synthesis](<./sections/5. Interview questions and answers/5.1. Common interview QA meta-skills and synthesis.md>)

1. **Walk me through a problem you failed** (the honesty screen — diagnosis narrated, lesson priced).
2. **Estimate this system's complexity** (the synthesis screen — full-stack bounding across the track).
3. **Teach me an algorithm in five minutes** (the mastery screen — explanation *is* understanding), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Every technique underneath** (analysis → 01 through paradigms → 06 — this domain orchestrates, never re-teaches).
2. **Platform and language specifics** (judge mechanics, engine behavior → documented per platform; JS mechanics → JavaScript track).
3. **Vocabulary naming** (process words in meetings → IT Vocabulary; this track owns the implementations).
