## 1. Input schemas

### [1.1. Params query validation depth](<./sections/1. Input schemas/1.1. Params query validation depth.md>)

1. **Params coerce deliberately** (coerceTypes owning — strings typing, garbage rejecting)
2. **Queries constrain shapes** (objects bounding — arrays limiting, injection declining)
3. **Bodies nest completely** (depth validating — recursion bounding, trust earning)

---

### [1.2. Response schemas and filtering](<./sections/1. Input schemas/1.2. Response schemas and filtering.md>)

1. **Responses declare shapes** (outputs filtering — extras dropping, contracts bounding)
2. **Serializers compile speed** (fast-json-stringify generating — payloads flying, costs pricing)
3. **Statuses map per code** (2xx/4xx/5xx shaping — clients branching, never guessing)

---

## 2. Schema reuse

### [2.1. Shared schemas and composition](<./sections/2. Schema reuse/2.1. Shared schemas and composition.md>)

1. **addSchema dedupes** (shared defining — $ref linking, drift ending)
2. **Composition nests deliberately** (allOf merging — refs resolving, bloat declining)
3. **Versioning freezes shapes** (v1 locking — evolution planning, breakage declining)

---

### [2.2. Custom validators and formats](<./sections/2. Schema reuse/2.2. Custom validators and formats.md>)

1. **Formats extend vocabulary** (ajv-formats adding — customs defining, domains typing)
2. **Compilers swap engines** (setValidatorCompiler bridging — zod/yup integrating, lock-in declining)
3. **Coercion stays explicit** (rules stating — surprises ending, trust earning)

---

## 3. Error mapping

### [3.1. Error mapping from validation](<./sections/3. Error mapping/3.1. Error mapping from validation.md>)

1. **FST_ERR shapes clients** (400 structuring — details listing, fixes directing)
2. **Handlers translate centrally** (setErrorHandler mapping — formats unifying, drift ending)
3. **Messages stay safe** (details guiding — internals hiding, leaks preventing)

---

## 4. Mentor checklist

### [4.1. Schema checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Schema checklist mentors insist on.md>)

1. **Every input validates** (params/query/body proving — trust earning, never assuming)
2. **Every output filters** (responses declaring — extras dropping, never leaking)
3. **Every schema reuses** (shared defining — drift ending, never copying)

---

## 5. Interview QA

### [5.1. Common interview QA schemas](<./sections/5. Interview QA/5.1. Common interview QA schemas.md>)

1. **Validation live under pressure** (ajv, coercion, nesting — diagnosed with fixes, priced)
2. **Serialization live under pressure** (filtering, speed, statuses — judgment, not fashion)
3. **Reuse live under pressure** (sharing, compilers, errors — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Basics live in Domain 01** (routes, hooks, errors — the floor depth stands on)
2. **Types live in TypeScript** (static proving — linked, not repeated)
3. **Depth lives in Domains 03–04** (plugins, data — neighbors, not repeats)

---

[← Back to Fastify track](<../README.md>)
