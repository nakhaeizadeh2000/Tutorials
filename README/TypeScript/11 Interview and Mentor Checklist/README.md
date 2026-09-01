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

- **Whiteboard `Pick`/`ReturnType`** (explain before write — tests model, not memory)
- **Reject checklist** (ban `any`/`!`/`as` across boundary without validator, require `Zod` guard)
- **Teach JS→types** (start from runtime bug, add type that catches it — junior-first)

---

## 4. Common Pitfalls to Production Bugs

- **Pitfall** (starting with `infer` before primitives, over-engineering generic for single use)
- **Consequence** (audience lost, API noise)

---

## 5. Interview Q and A

- **Q: When generic?** A: only if reused across ≥3 call sites with different `T`
- **Q: Why `void` accepts `() => number`?** A: caller ignores return

---

## 6. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: All prior domains are prerequisites — this domain synthesizes interview/mentor, not new types.