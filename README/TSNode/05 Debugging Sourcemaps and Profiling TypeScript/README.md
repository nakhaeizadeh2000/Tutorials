# Debugging Sourcemaps and Profiling TypeScript

Observability for hook-executed TypeScript: automatic sourcemaps naming `.ts` in traces, reading mapped stacks, the inspector against compiled code, CPU/memory profiles attributed to sources, and the triage order binding them. Map *mechanics* live in [JS 15/5.3](<../../JavaScript/15 Error Handling and Debugging/sections/5. Debugging toolkit/5.3. Source maps Node inspector DevTools workflow and flags.md>); this domain teaches the *TypeScript layer* — what ts-node maps, what profiles name, and which evidence comes first.

## 0. Prerequisites

[04/2.2. Editor and debugger integration](<../04 Development Workflow Watch REPL and Editors/sections/2. REPL and editors/2.2. Editor and debugger integration.md>) (launch wiring, `--inspect` proof — assumed; this domain reads what the inspector shows). [JS 15/5.3. Source maps workflow](<../../JavaScript/15 Error Handling and Debugging/sections/5. Debugging toolkit/5.3. Source maps Node inspector DevTools workflow and flags.md>) (`sourceMappingURL`, `--enable-source-maps`, DevTools flow — assumed, never re-taught). [NodeJS 06/1.2. CPU and memory profiles](<../../NodeJS/06 Debugging Configuring and Shipping/sections/1. Debugging and profiling/1.2. CPU and memory profiles with action.md>) (flame-first profiling discipline — assumed, applied to `.ts` here). This domain assumes a wired debugger and spends its pages on what TypeScript execution adds: maps, mapped traces, attributed profiles.

## 1. Sourcemaps

### [1.1. Sourcemaps under ts-node](<./sections/1. Sourcemaps/1.1. Sourcemaps under ts-node.md>)

1. **Maps ride along automatically** (bundled `source-map-support` remaps traces to `.ts` — both modes, no flags, verified).
2. **`--enable-source-maps` is redundant-but-harmless** (same mapped output with the flag — ts-node owns its maps, Node's flag covers emitted files).
3. **Transpile-only maps identically** (erasure preserves line fidelity — checking never owned mapping).

### [1.2. Reading mapped stack traces](<./sections/1. Sourcemaps/1.2. Reading mapped stack traces.md>)

1. **Frames name sources, not output** (`trace.ts:2:9` — file, line, column as authored, verified in both modes).
2. **Unmapped frames indict the pipeline** (a `.js`-looking frame inside a `.ts` run means maps dropped — find where, per checklist).
3. **Async stacks stitch through maps** (await chains + remapped frames compose — read top-down, trust the names).

---

## 2. Inspector and profiles

### [2.1. Inspector against compiled code](<./sections/2. Inspector and profiles/2.1. Inspector against compiled code.md>)

1. **Breakpoints bind through the maps** (`.ts` breakpoints, JS execution — the contract [04/2.2](<../04 Development Workflow Watch REPL and Editors/sections/2. REPL and editors/2.2. Editor and debugger integration.md>) wired, the maps fulfill).
2. **`--inspect` plus hook, proven again** (listener + output — the S4 proof, extended to stepping).
3. **Evaluate in source terms** (console/eval shows `.ts` positions — the inspector speaks sources, V8 runs output).

### [2.2. CPU and memory profiles of TS services](<./sections/2. Inspector and profiles/2.2. CPU and memory profiles of TS services.md>)

1. **`--cpu-prof` attributes to `.ts`** (valid profile, 5940 nodes, `hot` frames under `file:///.../busy.ts` — verified).
2. **`--heap-prof` writes alongside** (allocation story per source file — same command shape, second artifact).
3. **Flame-first discipline transfers unchanged** (hypothesis → profile → shape-fix → re-profile — NodeJS 06's method, `.ts` attribution free).

---

## 3. Production triage

### [3.1. Triage order for TS services](<./sections/3. Production triage/3.1. Triage order for TS services.md>)

1. **Logs first (mapped stacks), profiles second, hooks last** (each stage exonerates a layer — the order that prevents cross-layer debugging).
2. **Unmapped frames escalate immediately** (mapping failure poisons every downstream reading — fix maps before theorizing behavior).
3. **Artifacts profile like sources** (production runs `dist/` — maps shipped alongside keep traces/profiles source-named).

---

## 4. Important points to remember (observability)

### [4.1. Observability checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Observability checklist habits mentors insist on.md>)

1. **Traces name `.ts` or the pipeline is broken** (mapped-frame assertion in CI — the cheapest observability gate).
2. **Profiles exist before incidents** (prof commands rehearsed, flags pinned, output dirs known — profiling is a practiced motion).
3. **Triage order posted, not remembered** (logs→profiles→hooks on the runbook page — order under pressure comes from paper).

---

## 5. Interview questions and answers (observability)

### [5.1. Common interview QA: debugging](<./sections/5. Interview questions and answers/5.1. Common interview QA debugging.md>)

1. **"Stack shows compiled JS, not TS" — diagnose it** (map pipeline stages — where each can drop, how each proves itself).
2. **"Production is slow — profile what, how?"** (hypothesis-first, `--cpu-prof` on the path, `.ts`-attributed flames — the discipline recited).
3. **"Who owns a wrong line number?"** (checker? hook? maps? editor? — layer attribution drill), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Map/inspector/heap mechanics and service debugging** (protocol internals, GC numbers, server triage — JS 15/18/19/20 and NodeJS 06 own the *mechanics*; this domain owns the *TypeScript layer*).
2. **Deeper execution topics** (shipping → 06 — artifacts, map shipping, containers; synthesis → 07 — each owned there).
3. **Config, hooks, and workflow mechanics** (modes/scoping → 01–02; hook authorship → 03; loops/wiring/suites → 04; this domain observes all of them).
