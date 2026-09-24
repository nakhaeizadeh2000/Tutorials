# Shipping Builds Dist and Containers

Turning TypeScript sources into deployable artifacts: the build tsconfig, emit verification, `dist/` layout that deploys, map shipping, multi-stage Docker images, and CI gates. The *decision* (artifacts over hooks) lives in [01/4.1](<../01 Execution Foundations and Mental Model/sections/4. Important points to remember/4.1. Execution checklist habits mentors insist on.md>); this domain teaches the *mechanics* — files, images, and gates that make the decision real.

## 0. Prerequisites

[01/4.1. Execution checklist](<../01 Execution Foundations and Mental Model/sections/4. Important points to remember/4.1. Execution checklist habits mentors insist on.md>) (hook-vs-artifact boundary — assumed; this domain builds the artifact side). [02/1.1. Base and delta tsconfigs](<../02 Configuration and tsconfig for Execution/sections/1. Config architecture/1.1. Base and delta tsconfigs.md>) (`extends` architecture — assumed; the build config is one more delta). [TypeScript 01/3.1. Compilation pipeline](<../../TypeScript/01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) (emit stages and artifact table — assumed, never restated). This domain assumes a tested service and spends its pages on shipping it, not developing it.

## 1. Build configs

### [1.1. The build tsconfig](<./sections/1. Build configs/1.1. The build tsconfig.md>)

1. **One delta for emission** (`outDir`/`rootDir`/`sourceMap`/`declaration` — the build context that differs from editor, runner, and checker).
2. **Self-contained inside the build context** (no `extends` across Docker boundaries — the verified `TS5083` that proves it).
3. **Types present where the builder compiles** (`@types/node` in the build — the verified `TS2580` that proves it).

### [1.2. Emit verification](<./sections/1. Build configs/1.2. Emit verification.md>)

1. **Emit is a checklist, not a hope** (`tsc -p` clean + file inventory (`js`+`map`, no `.ts`) + entry runs — verified).
2. **Parity probe against `dist/`** (throw fixture through `--enable-source-maps` — mapped `.ts` frames or the artifact pipeline is broken).
3. **Stale `dist/` never ships** (clean before emit — `dist/` gitignored, rebuilt per pipeline, never patched by hand).

---

## 2. Dist and containers

### [2.1. dist layout that deploys](<./sections/2. Dist and containers/2.1. dist layout that deploys.md>)

1. **`rootDir` shapes the tree** (mirrored `src/` under `dist/` — entry at a stable path, imports relative-stable).
2. **Only runtime files travel** (`js` + co-shipped `map`; sources optional, declarations for libraries — each audience priced).
3. **`package.json` points at the artifact** (`main: dist/main.js`, `files`, scripts running `node dist/` — the repo's execution contract flipped).

### [2.2. Docker multi-stage for TS](<./sections/2. Dist and containers/2.2. Docker multi-stage for TS.md>)

1. **Builder compiles, runtime executes** (deps+`tsc` in builder; `dist/` + prod deps in runtime — verified image, 245MB).
2. **Non-root, production env, pinned base** (`USER node`, `NODE_ENV=production`, `node:24-alpine` — the hardening trio).
3. **Mapped traces inside the image** (co-shipped maps name `.ts` positions though `src/` is absent — verified in-container).

---

## 3. CI gates

### [3.1. CI gates for TS services](<./sections/3. CI gates/3.1. CI gates for TS services.md>)

1. **Gates 1–6 merged into one pipeline** (execution, config, hooks, workflow, observability, shipping — twelve-plus stages, one workflow).
2. **Build-gate-build order** (typecheck → tests → emit → artifact probes — each stage gating the next, failures named).
3. **Artifacts verified, never assumed** (gate6 stages: exists, mapped, runs, traces — SHIP-GREEN or the stage number).

---

## 4. Important points to remember (shipping)

### [4.1. Shipping checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Shipping checklist habits mentors insist on.md>)

1. **No hook in production** (`start` runs `node dist/` — grep proves it; the boundary from 01, enforced).
2. **Maps ship with artifacts** (`.js.map` beside `.js` — blind production is a choice, choose sight).
3. **Every image runs before it ships** (container smoke: boot + mapped throw + exit codes — verified pattern).

---

## 5. Interview questions and answers (shipping)

### [5.1. Common interview QA: shipping](<./sections/5. Interview questions and answers/5.1. Common interview QA shipping.md>)

1. **"Why not run ts-node in production?" — answer with numbers** (cold-start ladder, determinism, blast radius — priced, not preached).
2. **"Docker build fails on extends" — diagnose it** (context boundaries — the verified `TS5083` autopsy).
3. **"How do you know the artifact works?" — trace the proof** (gates 60–63, container smoke, parity probe), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Emit/publish mechanics and container orchestration** (pipeline stages, declaration authoring, exports maps, Docker/K8s operation — TS 01/12/16/19 and Docker/NodeJS tracks own the *mechanics*; this domain owns the *service artifact*).
2. **Judgment synthesis** (architecture selection, review checklists, full-system drill → 07 — owned there).
3. **Development-side mechanics** (modes/hooks/loops/maps in dev → 01–05; this domain ships what they built).
