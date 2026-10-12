# Tutorial quality guide

## 1. Calibrate against actual JavaScript lessons

Before proposing a curriculum, authoring, or reviewing, read the
[JavaScript index](<../README/JavaScript/README.md>) and representative lessons.
At initial calibration use the samples below; for each later unit also choose a
JavaScript leaf with a comparable teaching challenge. Record the selected paths
and the qualities being transferred in the active log. Reuse calibration within
a session, but read additional samples when the kind of lesson changes.

| Reference | What to learn from it |
|---|---|
| [Fundamentals index](<../README/JavaScript/01 Fundamentals and Mental Model/README.md>) | Organize prerequisite concepts before daily use and advanced reasoning. |
| [Engines, runtimes and hosts](<../README/JavaScript/01 Fundamentals and Mental Model/sections/1. What JavaScript is/1.2. Engines runtimes and hosts V8 SpiderMonkey JavaScriptCore Node Deno Bun.md>) | Give concrete meaning to neighboring terms and diagnose the learner's confusion. |
| [Holes and undefined](<../README/JavaScript/08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>) | Turn a subtle distinction into small observable examples, then compare operations and consequences. |
| [Promise chaining](<../README/JavaScript/13 Async Event Loop and Promises/sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md>) | Trace values and failures across steps, then connect the mechanics to debugging and review. |

These are editorial references, **not verified technical specifications**. Some
legacy passages contain compressed prose, stale claims, imperfect links or
self-corrections. Preserve their useful pedagogical moves while following current
sources and the user's readability requirements. Do not copy those defects or
change JavaScript itself merely because it was read as a reference.

## 2. Design coverage before counting pages

Research the subject's current official guides/reference, important production
failure modes and relevant roadmap.sh material. Map concepts to learner outcomes,
prerequisites and their canonical owners. Explain each proposed domain's purpose
and why that boundary makes teaching easier. Give advanced work enough space;
never hide several substantial subjects in a catch-all “advanced” domain.

A proposal covers foundations, everyday application, failure diagnosis, design,
production concerns, deep mechanisms and teaching/review where relevant. Include
what is deliberately out of scope and existing cross-track prerequisites. The
mapping may reveal two domains or dozens; neither is a target. Do not reuse old
seven-domain plans or impose JavaScript's 24-module shape.

Distinguish meaningful mastery from vocabulary exposure. Master-level work asks
the learner to integrate techniques in an unfamiliar problem; expert work asks
for defensible reasoning about mechanisms and limits; mentor work asks for an
explanation, critique or feedback that helps someone else learn. A few interview
answers do not substitute for those outcomes.

## 3. Build an explanation a student can follow

For each main concept, establish what it means and why the reader needs it.
Introduce a small, complete example. Explain its result and causal mechanism.
Then vary one important condition, show a common mistake, and discuss the limits
of the model. Add advanced implications only after the prerequisites are clear.
Adapt this sequence to the subject instead of printing identical labels everywhere.

Make the subject and purpose of each sentence explicit. Use consistent terms.
Explain abbreviations on first use. Keep necessary qualifications in the main
sentence or the next paragraph. Parentheses work for a short secondary detail;
an em dash works for a deliberate interruption. Several interleaved asides often
mean the passage needs restructuring, not a different punctuation mark.

For example, an invented explanation of a retry design might start poorly:

> **Retries** (bounded/idempotent — backoff/jitter) — transient only (budgets).

A teachable version says:

> A retry gives a temporarily failed operation another chance to succeed. Limit
> the number of attempts so a failing dependency does not keep the request alive
> indefinitely. Before retrying a write, establish whether repeating it can create
> a duplicate result. Later in this lesson, we will build a bounded retry policy
> and examine that duplicate-write failure.

The second version explains the problem and the sequence of reasoning. It is
not better merely because it is longer. Follow it with a worked example rather
than leaving it as a slogan. Do not turn all prose into bullets or a glossary.

## 4. Make examples and practice earn their space

State the runtime/toolchain, exact relevant versions, files, installation and run
commands needed for examples. Show expected output or an assertion. Explain the
important transitions. Add a contrasting failure only if it teaches a distinct
misconception; identify the consequence and the repair.

Separate executable examples from illustrative fragments and pseudocode. A
comment-only fence is not a runnable demonstration. Validate asynchronous output
and failures rather than guessing their order. Performance claims need a suitable
measurement or authoritative evidence, with limits disclosed.

Exercises are useful when they test an outcome: predict behavior, diagnose a bug,
implement a small change, compare designs or justify a trade-off. Supply an
explained solution or clear evaluation criteria. A later integrative project can
connect mastered ideas without reteaching their full mechanics. Add practice in
the curriculum where it helps, not as mandatory filler in every leaf.

## 5. Review dimensions and evidence

| Dimension | Questions a reviewer must answer |
|---|---|
| Clarity and flow | Can a junior identify the problem, follow each sentence and explain the example's result? Are essential ideas hidden in asides? |
| Prerequisites | Are terms and assumptions introduced before use? Are links useful rather than a substitute for explanation? |
| Coverage | Does the subject get its needed breadth and depth? Are domain boundaries justified rather than copied from a quota? |
| Progression | Do tasks build from use to design, integration, internals and teaching? Is advanced material earned? |
| Correctness and currency | Are claims supported by current primary sources and the actual runtime? Does current stable behavior appear in the right topic? |
| Examples and practice | Can the reader reproduce the result and explain the failure? Are solutions reasoned and tests actually run? |
| Judgment | Are trade-offs, conditions and consequences explained instead of universal slogans? |
| Reuse and navigation | Does each concept have an owner? Are links, indexes, filenames and update routes accurate? |

Report exact paths/locations, brief examples of problematic writing, learner impact,
the proposed fix, and severity. Classify correctness or misleading instructions
as blockers; missing coverage, prerequisite leaps and unreadable explanation as
major issues; optional polish as minor. A punctuation count or file count can
locate candidates but cannot establish a defect or pass quality.

Inventory all files in the requested review scope. State which were read and
which checks were run. If sampling, label it explicitly and leave full review
outstanding. After approval, repair one unit at a time and re-evaluate the affected
reasoning, examples and navigation. Do not declare success because formatting
became uniform. The quality bar is a reader who can understand and apply the idea.
