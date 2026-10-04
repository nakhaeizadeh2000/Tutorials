## 1. First app

### [1.1. What Express is and is not](<./sections/1. First app/1.1. What Express is and is not.md>)

1. **Thin routing over node:http** (app wrapping servers — URLs dispatched, boilerplate deleted)
2. **Middleware composes behavior** (functions chaining — auth/logging/parsing layered, never tangled)
3. **Unopinionated means owned** (no structure given — organization designed, never defaulted)

---

### [1.2. Hello API with routing](<./sections/1. First app/1.2. Hello API with routing.md>)

1. **Routes map method plus path** (GET/POST/params — requests reaching handlers, never switch statements)
2. **Routers split by resource** (express.Router mounting — files owning paths, never monoliths)
3. **Listen starts serving** (ports binding — apps running, shutdowns planned)

---

## 2. Core pipeline

### [2.1. Middleware pipeline](<./sections/2. Core pipeline/2.1. Middleware pipeline.md>)

1. **Order is execution** (use sequencing — requests flowing top-down, never jumping)
2. **next passes control** (calling forward — hanging declined, double-sending forbidden)
3. **Built-ins cover basics** (json/urlencoded/static — parsing serving, never hand-rolled)

---

### [2.2. Request response lifecycle](<./sections/2. Core pipeline/2.2. Request response lifecycle.md>)

1. **req carries input** (params/query/body — sources separated, never guessed)
2. **res sends once** (json/status/end — responses finishing, double-sends crashing)
3. **Async errors forward** (rejections reaching handlers — Express 5 catching, never swallowing)

---

## 3. First safety

### [3.1. Errors and 404s handled](<./sections/3. First safety/3.1. Errors and 404s handled.md>)

1. **404s are middleware too** (unmatched falling through — JSON answering, never hanging)
2. **Error handlers have four args** (err/req/res/next — central handling, never per-route try-catch)
3. **Leaks never reach clients** (messages generic — stacks logging, never exposing)

---

## 4. Mentor checklist

### [4.1. Express checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Express checklist mentors insist on.md>)

1. **Every route returns or forwards** (responses finishing — hangs scheduled never)
2. **Every input is sourced** (params/query/body named — guessing declined structurally)
3. **Every error is handled centrally** (four-arg catching — per-route try-catch retired)

---

## 5. Interview QA

### [5.1. Common interview QA Express foundations](<./sections/5. Interview QA/5.1. Common interview QA Express foundations.md>)

1. **Express vs raw http placed** (framework value stated — boilerplate priced, not feared)
2. **Middleware order live** (sequencing, next, errors — diagnosed with fixes, priced)
3. **Errors and 404s live** (central handling — leak-free answers, not trivia)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **HTTP lives in NodeJS** (servers, sockets, events — the floor patterns stand on)
2. **Depth lives in Domains 02–03** (advanced routing, validation, security — neighbors, not repeats)
3. **Data lives in ORM** (queries, transactions — linked, not repeated)

---

[← Back to Express track](<../README.md>)
