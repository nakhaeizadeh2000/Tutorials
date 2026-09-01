## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Interview Patterns

### [1.1. Type Challenges and Whiteboard Patterns](<./sections/1. Interview Patterns/1.1. Type Challenges and Whiteboard Patterns.md>)

1. **Challenge** (Pick impl)
2. **Example** (live coding)
3. **Mistake** (over-engineer)

---

### [1.2. Code Review Checklist (what to reject)](<./sections/1. Interview Patterns/1.2. Code Review Checklist what to reject.md>)

1. **Checklist** (any, !, as)
2. **Example** (PR comment)
3. **Mentor** (teach vs gatekeep)

---

## 2. Mentor Playbook

### [2.1. How to Teach Types (from JS mental model)](<./sections/2. Mentor Playbook/2.1. How to Teach Types from JS mental model.md>)

1. **Approach** (JS → add types)
2. **Example** (workshop)
3. **Bad** (start with advanced)

---

### [2.2. Designing APIs with Types (when to generic)](<./sections/2. Mentor Playbook/2.2. Designing APIs with Types when to generic.md>)

1. **Guidance** (generic only if reused)
2. **Example** (API shape)
3. **Link** (to APIDesign track)

---

## 3. Important Points and Mentor Checklist

### [3.1. 3.1. Mentor Synthesis Checklist](<./sections/3. Important Points and Mentor Checklist/3.1. 3.1. Mentor Synthesis Checklist.md>)

1. **Definition** (whiteboard Pick/ReturnType, reject checklist, teach JS→types)
2. **Checklist** (PR gate: explain before write, ban any/!/as, junior-first)
3. **Mentor** (require lint rule as takeaway)

---

## 4. Common Pitfalls to Production Bugs

### [4.1. 4.1. Teaching Pitfalls](<./sections/4. Common Pitfalls to Production Bugs/4.1. 4.1. Teaching Pitfalls.md>)

1. **Pitfall** (starting with infer before primitives, over-generic)
2. **Consequence** (audience lost, API noise)
3. **Guard** (generic only if reused ≥3)

---

## 5. Interview Q and A

### [5.1. 5.1. Interview Synthesis](<./sections/5. Interview Q and A/5.1. 5.1. Interview Synthesis.md>)

1. **Q: Implement Pick?** (mapped)
2. **Q: When generic?** (reused)
3. **Q: void accepts number?** (ignore return)

---

## 6. Overlaps to Avoid

### [6.1. 6.1. Boundaries What Is Covered Elsewhere](<./sections/6. Overlaps to Avoid/6.1. 6.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — synthesis, not new types)
2. **Comparison** (all prior domains prerequisites)
3. **Link** (how to use)

---
