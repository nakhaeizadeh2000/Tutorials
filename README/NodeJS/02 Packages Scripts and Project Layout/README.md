# Packages, Scripts, and Project Layout

How Node programs are packaged, installed, and run: `package.json` as the install-and-load contract, versions and lockfiles for reproducible installs, npm scripts as the task layer, binaries and npx for execution, and the `node_modules` resolution walk that ties files to packages. Runtime identity lives in [Domain 01](<../01 Runtime Fundamentals and Mental Model/README.md>); this domain teaches the *packaging around the runtime* — how code arrives on disk and how commands find it, not the loop that runs it.

## 0. Prerequisites

[Domain 01: Runtime Fundamentals and Mental Model](<../01 Runtime Fundamentals and Mental Model/README.md>) (three-box runtime, pinned versions, CJS/ESM loaders — assumed throughout; this domain spends its pages on manifests, installs, and resolution, not execution).

## 1. Package identity and versions

### [1.1. package.json as install and load contract](<./sections/1. Package identity and versions/1.1. package.json as install and load contract.md>)

1. **One manifest, three audiences** (humans read name/description, npm reads dependencies/scripts, Node reads type/exports/main — each field serves its loader).
2. **Fields that decide loading** (`type`, `exports`, `main`, `engines` — the manifest as the second half of leaf 2.2's mapping rules).
3. **Contracts enforced, not wished** (`engineStrict`, validated names/versions — installs refuse loudly instead of drifting silently).

### [1.2. Versions, lockfiles, and reproducible installs](<./sections/1. Package identity and versions/1.2. Versions lockfiles and reproducible installs.md>)

1. **Semver ranges are promises** (`^`/`~`/exact — what each permits, what each risks; the promise priced per dependency).
2. **Lockfiles freeze the tree** (`package-lock.json` committed, `npm ci` in pipelines — identical trees on every machine, byte for byte).
3. **Reproduce means verify** (audits, `ls`, and funding checks as install-time evidence — trust installed, never assumed).

---

## 2. Scripts and binaries

### [2.1. npm scripts as the task layer](<./sections/2. Scripts and binaries/2.1. npm scripts as the task layer.md>)

1. **Scripts are the project's CLI** (`start`/`test`/custom — one vocabulary for humans and CI, no tribal shell knowledge).
2. **Lifecycle and env wiring** (`pre`/`post` hooks, `PATH` augmentation with `.bin`, `npm_package_*` env — what runs around your command).
3. **Composition over runners** (`&&` chains, `npm-run-all2` shapes, delegation to files — scripts stay readable as they grow).

### [2.2. Binaries, npx, and executed packages](<./sections/2. Scripts and binaries/2.2. Binaries npx and executed packages.md>)

1. **`bin` turns packages into commands** (manifest `bin` → `.bin` shims — how `node_modules/.bin/vitest` comes to exist).
2. **`npx` executes without installing** (one-shot runs, version-pinned exec — convenience with a supply-chain price).
3. **Global installs are the exception** (few, versioned, audited — project tools stay local, globals stay boring).

---

## 3. Layout and resolution

### [3.1. node_modules resolution and project layout](<./sections/3. Layout and resolution/3.1. node_modules resolution and project layout.md>)

1. **The lookup walk, stated plainly** (relative → path-joined; bare → `node_modules` upward; `node:` → builtins — leaf 2.2's resolver, applied to the disk).
2. **Layout conventions that scale** (`src/`, `test/`, separation of lib and app — structure that survives team growth).
3. **Hoisting, phantoms, and ghosts** (flattened trees, phantom deps, missing-entry failures — the failure modes of shared folders).

---

## 4. Important points to remember (packaging)

### [4.1. Packaging checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Packaging checklist habits mentors insist on.md>)

1. **Manifest complete, lockfile committed** (fields filled for all three audiences — installs reproduce from a clone).
2. **Scripts documented, binaries local** (every workflow a named script — onboarding reads `package.json`, not chat history).
3. **Resolution explicit, phantoms banned** (extensions written, deps declared — nothing resolves by accident).

---

## 5. Interview questions and answers (packaging)

### [5.1. Common interview QA: packages and layout](<./sections/5. Interview questions and answers/5.1. Common interview QA packages and layout.md>)

1. **"Where does this import resolve?" — trace the walk** (the resolution screen — bare vs relative vs `node:`, upward climb narrated).
2. **`npm ci` vs `npm install`: which in CI?** (the reproducibility judgment — frozen trees vs evolving trees, priced per pipeline).
3. **Phantom dependency: find and fix** (the layout debugging trace — undeclared but resolving, then banned), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Runtime mechanics** (loaders, phases, process lifecycle — Domain 01 owns the *execution*; this domain owns the *arrival*).
2. **Publishing and tooling depth** (package health/publint, upgrades, types publishing — TypeScript 16/12 own the *authoring*; this domain owns the *consuming*).
3. **Deeper Node topics** (files/streams → 03; networking/HTTP → 04; processes/workers → 05; debugging/shipping → 06 — each owned there).
