## 1. Error design

### [1.1. Central error handling](<./sections/1. Error design/1.1. Central error handling.md>)

1. **Errors triage operationally** (respond vs crash — user mistakes answering, bugs alerting)
2. **Middleware translates uniformly** (status mapping once — formats holding, drift ending)
3. **Delegation respects headersSent** (streams yielding — double-sends declining, crashes ending)

---

### [1.2. Async errors and rejections](<./sections/1. Error design/1.2. Async errors and rejections.md>)

1. **Express 5 forwards natively** (rejections arriving — central receiving, versions advancing)
2. **Boundaries isolate failures** (domains scoping — blasts containing, cascades declining)
3. **Unhandled still kills** (process listening — last-resort logging, never serving half-dead)

---

## 2. Input armor

### [2.1. Input schemas and sanitization](<./sections/2. Input armor/2.1. Input schemas and sanitization.md>)

1. **Schemas prove payloads** (shapes declaring — correctness holding, trust earning)
2. **Sanitizers neutralize output** (escaping rendering — XSS declining, injection ending)
3. **Limits bound abuse** (sizes capping — payloads pricing, DoS declining)

---

### [2.2. Security headers and secrets](<./sections/2. Input armor/2.2. Security headers and secrets.md>)

1. **Headers harden browsers** (CSP/HSTS/framing — policies declaring, classes killing)
2. **Secrets never log** (redaction owning — rotation planning, exposure declining)
3. **Config validates at boot** (schemas gating — crashes earlying, serving proven)

---

## 3. Threat thinking

### [3.1. Threat modeling basics](<./sections/3. Threat thinking/3.1. Threat modeling basics.md>)

1. **Enumerate per route** (spoof/tamper/repudiate — threats listing, assumptions ending)
2. **Rate-limit the expensive** (windows capping — abuse pricing, service sustaining)
3. **Auth layers precede** (identity proving — permission deciding, confusion ending)

---

## 4. Mentor checklist

### [4.1. Security checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Security checklist mentors insist on.md>)

1. **Every error answers safely** (messages generalizing — stacks logging, never leaking)
2. **Every input proves shape** (schemas declaring — injection declining, trust earning)
3. **Every secret stays secret** (logging redacting — rotation dating, never hoping)

---

## 5. Interview QA

### [5.1. Common interview QA security](<./sections/5. Interview QA/5.1. Common interview QA security.md>)

1. **Errors live under pressure** (triage, translation, delegation — judgment, not trivia)
2. **Validation live under pressure** (schemas, sanitization, limits — diagnosed with fixes)
3. **Threats live under pressure** (modeling, limiting, layering — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Basics live in Domains 01–02** (routes, pipeline, validation — the floor depth stands on)
2. **Types live in TypeScript** (hierarchies, narrowing — linked, not repeated)
3. **Data lives in Domains 04 + ORM** (persistence, queries — neighbors, not repeats)

---

[← Back to Express track](<../README.md>)
