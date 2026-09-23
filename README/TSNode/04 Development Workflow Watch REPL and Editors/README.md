# Development Workflow Watch REPL and Editors

The daily loop around ts-node: restart strategies that compose with hooks, the TypeScript REPL, editor/debugger wiring for `.ts`, and test runners executing TypeScript. Restart *primitives* live in the [JavaScript track](<../../JavaScript/01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.2. Node.js essentials running files REPL and version discipline.md>); this domain teaches ts-node *inside* those loops — which watcher, which flags, which wiring, and the two gotchas that bite each.

## 0. Prerequisites

[01/2.1. Transpile-only versus full typechecking](<../01 Execution Foundations and Mental Model/sections/2. Modes and configuration/2.1. Transpile-only versus full typechecking.md>) (mode split — assumed; watch loops run transpile-only, never full). [02/1.2. Monorepo configs and project scoping](<../02 Configuration and tsconfig for Execution/sections/1. Config architecture/1.2. Monorepo configs and project scoping.md>) (config scoping — assumed; watched entries resolve their projects the same way). [JavaScript 20: Testing Essentials](<../../JavaScript/20 Testing and Tooling Essentials/README.md>) (`node:test` runner mechanics — assumed, never re-taught). This domain assumes a running ts-node install and spends its pages on the loop around it, not the runner itself.

## 1. Watch and restart

### [1.1. Watch mode that restarts right](<./sections/1. Watch and restart/1.1. Watch mode that restarts right.md>)

1. **`node --watch` plus the hook** (stdlib restart — run, `Restarting`, re-run, all verified with `-r ts-node/register`).
2. **Watch the entry's whole graph** (restarts trigger on dependency changes too — save in a helper, watch the server bounce).
3. **Transpile-only inside every loop** (full mode per restart re-pays the checker — the mode rule from 01, enforced here).

### [1.2. Nodemon and restarter discipline compared](<./sections/1. Watch and restart/1.2. Nodemon and restarter discipline compared.md>)

1. **Nodemon watches extensions, not intentions** (default exts miss `.ts` — verified no-restart; `-e ts` restarts).
2. **Three restarters, one decision rule** (`node --watch` vs nodemon vs ts-node-dev — process model decides, not fashion).
3. **Restart commands are pinned like any config** (exec line + ext list + project scope in scripts — reviewable, diffable).

---

## 2. REPL and editors

### [2.1. The ts-node REPL](<./sections/2. REPL and editors/2.1. The ts-node REPL.md>)

1. **Pipe evaluates, terminal explores** (piped stdin runs and exits 0 — verified; interactive terminal for typed experiments).
2. **REPL shares the project config** (same tsconfig discovery as scripts — type errors surface identically).
3. **Scripts outgrow the REPL fast** (two-liner probes yes, anything reusable becomes a file — the promotion rule).

### [2.2. Editor and debugger integration](<./sections/2. REPL and editors/2.2. Editor and debugger integration.md>)

1. **Launch configs execute, not just attach** (`runtimeExecutable` + `-r` wiring — the entry boots through the hook under the debugger).
2. **`--inspect` proves the wiring without the editor** (`Debugger listening` + program output — verified, editor-independent).
3. **Mechanics live elsewhere** (inspector protocol, breakpoints, source maps — JS 15/NodeJS 06 own the *how*; this domain owns the *wiring*).

---

## 3. Test wiring

### [3.1. Test runners executing TypeScript](<./sections/3. Test wiring/3.1. Test runners executing TypeScript.md>)

1. **`node --test` plus the hook** (TAP green on `.ts` — verified; runner mechanics assumed from JS 20).
2. **Test trees get their own delta** (`esModuleInterop` and friends live in the test tsconfig — the verified `TS1259` that proves it).
3. **One runner per repo, wired once** (flags in scripts/NODE_OPTIONS — workers and watchers inherit, never re-declare).

---

## 4. Important points to remember (workflow)

### [4.1. Workflow checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Workflow checklist habits mentors insist on.md>)

1. **Restart proven per entry** (edit → bounce → new output observed before trusting any loop).
2. **Doors composed, never assumed** (watcher flags + hook flags + project scope — all three visible in the command).
3. **Feedback split by clock** (instant reruns, watch-mode types, gated merges — the three clocks from 01, wired here).

---

## 5. Interview questions and answers (workflow)

### [5.1. Common interview QA: workflow](<./sections/5. Interview questions and answers/5.1. Common interview QA workflow.md>)

1. **"Nodemon ignores .ts changes" — diagnose it** (extension watchlist — evidence, fix, prevention in thirty seconds).
2. **"Dev loop is slow" — profile the loop** (mode first, watcher second, engine third — the measurement sequence).
3. **"How do tests run TypeScript here?" — trace the wiring** (runner + hook + delta, named per repo), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Restart primitives and runner mechanics** (`node --watch`, inspector protocol, `node:test` grammar — JS track owns the *mechanism*; this domain owns ts-node *inside* them).
2. **Deeper execution topics** (debugging/sourcemaps → 05; shipping → 06 — each owned there).
3. **Config and hook mechanics** (modes/scoping/bridges → 01–02; hook authorship → 03; this domain owns the loop around them).
