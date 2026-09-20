# Production Pattern Use and Interview Mastery

The capstone: selecting patterns under production constraints, evolving designs via stranglers, reviewing pattern code with checklists, designing APIs that invite correct use, composing patterns into architectures (MVC and friends), and performing pattern interviews with narration. Every pattern lives in [Domains 01–06](<../01 SOLID Principles and Design Foundations/README.md>); this domain teaches *judgment under pressure* — the meta-skills converting pattern knowledge into shipped systems and offers.

## 0. Prerequisites

All Domains 01–06 (principles, creational, structural, behavioral I+II, modern wiring) plus measured practice ([Domain 01 §4.1](<../01 SOLID Principles and Design Foundations/sections/4. Important points to remember/4.1. Foundations checklist habits mentors insist on.md>) — checklists reused here as review gates). This domain assumes the full catalog and spends its pages on judgment, not mechanics.

## 1. Production judgment

### [1.1. Selecting patterns under constraints](<./sections/1. Production judgment/1.1. Selecting patterns under constraints.md>)

1. **Constraints pick patterns** (team size, latency budgets, change rates — selection by context, never by fashion).
2. **Boring wins ties** (simplest sufficient structure — patterns earn places by beating plain code measurably).
3. **Document the decision** (ADRs per significant choice — context, options, trade-offs, review date).

### [1.2. Evolving designs: stranglers and YAGNI](<./sections/1. Production judgment/1.2. Evolving designs stranglers and YAGNI.md>)

1. **Strangle, don't rewrite** (verified 20→18 migration — old/new behind one seam, traffic moves incrementally).
2. **YAGNI with teeth** (build for current variation — speculative seams deleted on sight, not maintained).
3. **Retire on schedule** (strangled old paths removed — migration completes, carcass deleted, never fossilized).

---

## 2. Review and API design

### [2.1. Reviewing pattern code](<./sections/2. Review and API design/2.1. Reviewing pattern code.md>)

1. **Checklists per pattern family** (seams counted, lifecycles paired, intents named — review gates from Domains 01–06).
2. **Smells named with routings** (catalog terms per finding — actionable critique, never vague discomfort).
3. **Tests prove the pattern** (contract suites per seam — behavior verified, not hoped).

### [2.2. API design that invites correct use](<./sections/2. Review and API design/2.2. API design that invites correct use.md>)

1. **Pit-of-success naming** (obvious path correct — signatures guide toward seams, away from concretes).
2. **Invalid states unrepresentable** (types forbid misuse — optional-to-required gradients, builders for complexity).
3. **Errors guide repair** (messages naming fixes — "did you mean" over "invalid input", recovery paths attached).

---

## 3. Pattern composition

### [3.1. MVC, MVP, MVVM, and common stacks](<./sections/3. Pattern composition/3.1. MVC MVP MVVM and common stacks.md>)

1. **MVC composes three patterns** (verified observer pair — Observer views + Strategy controllers + Composite trees).
2. **MVP/MVVM shift the seams** (presenter/view-model intermediation — testability vs reactivity trade stated).
3. **Stacks, not silver bullets** (frameworks compose catalog patterns — recognize the pieces, evaluate the wiring).

---

## 4. Important points to remember (mastery)

### [4.1. Mastery checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Mastery checklist habits mentors insist on.md>)

1. **Select by constraints, evolve by strangler** (context picks patterns; migrations proceed incrementally).
2. **Review by checklist, design pit-of-success** (gates per family; APIs guiding toward correct use).
3. **Compose knowingly, narrate audibly** (stacks recognized; reasoning performed wherever scored).

---

## 5. Interview questions and answers (mastery)

### [5.1. Common interview QA: judgment, synthesis, teaching](<./sections/5. Interview questions and answers/5.1. Common interview QA judgment synthesis teaching.md>)

1. **Design a URL shortener, narrated** (the systems screen — seams, stores, scale, trade-offs in fifteen minutes).
2. **Refactor this live** (the judgment screen — smells named, fixes routed, equivalence kept).
3. **Teach a pattern in five minutes** (the mastery screen — explanation *is* understanding), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Every pattern underneath** (principles → 01 through modern → 06 — this domain orchestrates, never re-teaches).
2. **Platform and language specifics** (framework docs, engine behavior → documented per platform; JS/TS mechanics → their tracks).
3. **Vocabulary naming** (process words in meetings → IT Vocabulary; this track owns the implementations).
