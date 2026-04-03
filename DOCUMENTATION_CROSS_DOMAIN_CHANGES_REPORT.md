# Documentation changes outside `Update CSharp 9`–`15` (report)

This report describes edits made **across the main C# tutorial domains** (everything under `README/CSharp/` **except** the seven `Update CSharp *` folders), why they were done, and **how to avoid regressions** (broken links, encoding damage, or “navigation-only” indexes drifting out of sync).

The **`Update CSharp 9` … `Update CSharp 15`** folders are intentionally **indexes**: they list language features by version and point into these topical domains. This document focuses on **those targets** and **shared infrastructure** (section `## 0`, cross-links, new section files).

**Perfection backlog & AI handoff:** [§10 Future tasks](#10-future-tasks-path-to-perfect-docs) · [§11 Authoring rules](#11-authoring-rules-extracted-for-ai-and-humans) · [§12 Prompt A (scaffold)](#12-prompt-a--scaffold-sections-from-a-domain-readmemd-copy-paste) · [§13 Prompt B (expand)](#13-prompt-b--expand-or-update-all-files-under-sections-copy-paste). When you tell an assistant to *continue* doc work, attach this file and point to **§10.3** plus the relevant prompt.

---

## 1. Shared navigation block: `## 0. Language version maps (C# 9–15)`

**What changed**

- Most domain `README.md` files under `README/CSharp/` gained (or already had) a leading section **`## 0. Language version maps (C# 9–15)`** with a single line of links to:
  - `Update CSharp 9/README.md` through `Update CSharp 15/README.md`
- **Relative paths** use the repo’s style: folder names with spaces, wrapped in `<...>` for Markdown links (e.g. `<../Update CSharp 13/README.md>`).
- Separators between links use a **middle dot** (`·`), not a broken placeholder character.

**Why**

- Readers can jump from any domain to the **per-version feature map** without hunting the tree.
- Keeps **deep content** in topical domains while version maps stay **thin indexes**.

**Future checks**

- After renaming a folder (e.g. `Update CSharp 10`), run a **repo-wide search** for `Update CSharp` and fix relative paths from each `README.md`.
- Prefer **one consistent spelling** in headings: `C# 9-15` (ASCII hyphen) in titles; avoid ambiguous characters that look like hyphens in some fonts.

---

## 2. `Fundamental Theories` (theory + evolution)

**What changed**

- **`README/CSharp/Fundamental Theories/README.md`**
  - Section **`7.3. Per-version feature indexes (C# 9–15)`** was added under the existing “C# versions” chapter, linking to all seven Update READMEs.
  - Section **`## 0`** and related lines were **cleaned** after encoding damage (replacement characters, wrong punctuation).
- **Intent**: theory chapters (**7.1–7.2**) stay conceptual; **7.3** is the bridge to **feature-by-version** navigation.

**Future checks**

- If you add a new “Update C# *” major index later, update **7.3** and every **`## 0`** line in domain READMEs in the same pass.

---

## 3. `Fields` vs `Properties` boundary (`field` keyword)

**What changed**

- **`README/CSharp/Fields/README.md`**
  - Short subsection explaining that the contextual **`field`** keyword (C# 13+, refined in C# 14) is documented under **Properties and Indexers**, not under Fields—because it refers to **compiler-generated backing storage in property accessors**, not a declared field declaration in the usual sense.
  - Prevents duplicate deep dives and sets reader expectations.

**Future checks**

- Any new doc for **`field`** should live in **Properties** first; **Fields** should only keep this **boundary note** unless you later add a dedicated “declared fields vs compiler artifacts” section.

---

## 4. `Methods` — `params` and C# 13+ collections

**What changed**

- **`README/CSharp/Methods/README.md`**
  - Under **`6.7`** (`params`), bullets were extended to reference **C# 13+ `params` collections** and the **Update C# 13** index.
- **Section file** (see below) contains a dedicated **§4** describing `params` beyond arrays.

**Future checks**

- When the compiler adds new `params` overload forms, update **§6.7 section file** first, then the **Methods README** bullet, then **Update C# 13** (if still the version that introduced the feature).

---

## 5. New or materially expanded *section* files (by domain)

These are **concrete topics** that the Update indexes link to. Paths are under `README/CSharp/…/sections/…`.

| Domain | Section file (representative) | Role |
|--------|-------------------------------|------|
| CSharp language basics | `1. Getting started/1.3. Command line arguments args Environment exit codes parsing.md` | CLI args, exit codes, parsing |
| CSharp language basics | `5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md` | Cross-version pattern catalog |
| Partial and Static Classes, Enumerations | `1. Partial types/1.4. Partial properties and indexers CSharp 13.md` | Partial property/indexer (C# 13) |
| Partial and Static Classes, Enumerations | `3. Static classes/3.4. Module initializers ModuleInitializer attribute trimming and AOT.md` | `[ModuleInitializer]` |
| Delegates and Events | `7. Anonymous methods and lambdas/7.5. Lambda explicit return type default parameters modifiers (CSharp 10 through 15).md` | Lambdas: return type, defaults, modifiers |
| String and DateTime and Math | `2. How String Objects are Created/2.4. Raw string literals CSharp 11 triple quotes.md` | Raw strings (C# 11) |
| String and DateTime and Math | `5. Formatting Strings/5.5. Constant interpolated strings compile time const contexts.md` | `const` interpolated strings |
| Arrays | `1. Arrays fundamentals/1.5. Index from end Range and slicing with Span.md` | `^`, `Range`, spans |
| Abstract Classes and Interfaces | `3. Interfaces/3.4. Interface member forms private static abstract sealed DIM overview.md` | Interface member “catalog” / overview |
| Properties and Indexers | `2. Creating properties/2.3. field keyword backing fields property accessors CSharp 13 14.md` | `field` keyword |
| Properties and Indexers | `4. Auto-properties with accessor accessibility/4.3. Implicit index access from end in object initializers CSharp 13.md` | `^` in object initializers |
| Structures | `1. Structures fundamentals/1.4. Auto default structs default T vs parameterless constructors.md` | `default(T)` vs struct ctors |
| Structures | `4. Readonly structs/4.3. ref fields scoped ref safety and CSharp 11.md` | `ref` fields / `scoped` |
| Methods | `6. Parameter modifiers and ref-like patterns/6.7. params parameters variable argument lists.md` | Extended with **§4** for C# 13+ `params` collections |

**Future checks**

- **Filename stability**: links from READMEs and Update indexes embed these paths. Renaming files requires **global search/replace** and a quick **link sanity pass**.
- **Single source of truth**: prefer **one** “catalog” file for patterns (e.g. **5.4**) and link from Update maps instead of duplicating long explanations in Update READMEs.

---

## 6. Domain `README.md` wiring (non-exhaustive list)

The following domains had **README** updates beyond **`## 0`**: new subsection bullets, reordered items, or pointers to the new section files above (examples include **CSharp language basics**, **Partial and Static…**, **Delegates and Events**, **String and DateTime and Math**, **Arrays**, **Abstract Classes and Interfaces**, **Properties and Indexers**, **Structures**, **Methods**).

**What to verify after any edit**

- Relative links resolve from each `README.md` (remember **`..` depth** differs per folder).
- **Overlaps** sections (“where this domain stops”) stay aligned with section files—**Properties** `8.1` was aligned with the same wording as the section file using **`→`** arrows for cross-domain pointers.

---

## 7. Encoding incident (what broke, how it was fixed)

**What went wrong**

- Bulk prepending or rewriting **`README.md`** with tools that did not preserve **UTF-8** consistently (e.g. PowerShell **`Set-Content`** defaults, wrong encoding) introduced:
  - **`?` / `???`** instead of apostrophes or punctuation,
  - **U+FFFD** (replacement character) instead of **middle dot** between links,
  - Broken sequences like **`C# 9?15`** or **`C# 9` + garbage + `15`** in titles.

**What we did**

- Replaced **link separators** with a real **middle dot** (`·`) or normalized punctuation.
- Restored **contractions and em dashes** where triple-`?` mojibake had appeared; repaired a few lines where an **over-aggressive regex** had misfired (then corrected manually using **section files** as the source of truth).
- Ran a pass to fix **`) [U+FFFD] [`** → **`) · [`** and **`(C# 9` + U+FFFD + `15)`** → **`(C# 9-15)`** across affected READMEs.

**Future prevention (mandatory for “perfect docs”)**

1. **Always save Markdown as UTF-8.** Prefer **UTF-8 without BOM** consistently (or BOM consistently—pick one for the repo and document it).
2. **Never use** raw **`Set-Content`** on `.md` without **`-Encoding utf8`** (and understand PowerShell 5.x vs 7+ UTF-8 behavior). Prefer **`dotnet`**, **Node**, or an editor **Find/Replace** for bulk edits.
3. **Before** any scripted multi-file rewrite: **`git commit`** or copy a **backup** of `README/CSharp/`.
4. **After** bulk edits: search for **`�`**, **`U+FFFD`**, **`???`**, and **`C# 9?15`**-style patterns.
5. **Avoid** blind “replace `???`” regex on prose; it can destroy **arrow** or **smart-quote** sequences. Prefer **character-level** fixes or **compare against** a sibling section file.

---

## 8. Process checklist (to prevent breaks)

| Area | Check |
|------|--------|
| **Links** | Click or search: `](<` and `../Update CSharp` — ensure targets exist after moves. |
| **Duplicates** | Update indexes should **link**, not copy, long explanations. |
| **Version story** | When adding a language feature doc, add a bullet under the right **Update** index *and* the right **domain README** + section file. |
| **Naming** | Keep section filenames readable; avoid churn renames unless necessary. |
| **Automation** | If you add CI later: optional step to **scan for** `README.md` + `U+FFFD` + broken `Update CSharp` paths. |
| **Review** | Any change touching **`## 0`** should be reviewed for **one blank line** after the intro paragraph if that’s the house style for the repo. |

---

## 9. Scope note

- **In scope for this report**: `README/CSharp/**` excluding `README/CSharp/Update CSharp */`.
- **Out of detail here**: the seven **`Update CSharp 9`–`15`** `README.md` files themselves—their role is **index-only** maintenance (link hygiene + pointing at Microsoft Learn when no section exists yet).

---

## 10. Future tasks (path to “perfect” docs)

Use this as a **backlog** until every domain reaches the quality bar: README ↔ `sections/` **1:1**, deep content **once**, English **only**, **C# 15** / modern .NET, no encoding or link regressions.

### 10.1 Structure and coverage

| Task | Done when |
|------|-----------|
| **Scaffold pass** | For every domain, every `README.md` link under `sections/` resolves; each file has `##` title + README outline (per Prompt A below). |
| **Expansion pass** | Every scaffolded file is expanded per Prompt B (mentor depth, examples, single-source rule). |
| **README ↔ section parity** | Nested bullets in each domain `README.md` match what the linked section file actually contains (no promises without content). |
| **Update index sync** | Each **Update C# 9–15** entry points to a real section *or* an explicit external doc; no stale TODOs. |
| **Cross-domain dedup** | For each major concept, one “canonical” section exists; all others use **See [domain / section X.Y / path…]** only. |
| **Encoding hardening** | No `U+FFFD`, no stray `???`, no `نکته` / non-English markers; UTF-8 save policy documented and enforced. |
| **Optional CI** | Script fails on broken `](<...>)` links under `README/CSharp/` and on forbidden mojibake patterns. |

### 10.2 Quality bar (mentor / C# 15)

- [ ] Prefer **current** language and BCL APIs; label **deprecated / legacy** patterns and point to **C# 15–era** replacements.
- [ ] Where relevant: **CPU**, **allocations**, **thread pool**, **async vs sync**, **memory**—at least one explicit “Performance note” or integrated paragraph per hot topic.
- [ ] Examples: **short, runnable**, `csharp` fenced; **thread-safe** or explicitly **not**.
- [ ] **UI-specific** guidance (WinForms, WPF, MAUI, UI thread) marked e.g. **(frontend)** in heading or first sentence.
- [ ] **SOLID**, minimal allocation, no filler.

### 10.3 How to resume work in an AI session

1. Attach or paste **`DOCUMENTATION_CROSS_DOMAIN_CHANGES_REPORT.md`** (this file).
2. Say which **domain** (`README/CSharp/<Domain Name>/`) and which **phase** (scaffold **or** expand).
3. Paste **Prompt A** or **Prompt B** from sections 12–13, with `<Domain Name here>` replaced.
4. Add: **“Continue until the task is completely done; follow sections 11–13.”**

---

## 11. Authoring rules (extracted for AI and humans)

These rules are **distilled** from the project’s scaffolding and expansion workflows. They are the **contract** for any new or updated section file.

### 11.1 Language and tone

- **English only** for body text, headings, and “Note / Good to know / Performance note” labels.
- **Senior C# mentor and architect** voice: definitions, when to use, trade-offs, mistakes.
- Audience: **junior through expert**—clear first, precise second.

### 11.2 C# / .NET version

- Target **modern C#**; default stance: **C# 15** and **latest .NET** assumed (e.g. **.NET 9+**) unless a section explicitly documents older TFMs.
- Call out **obsolete** APIs and prefer **current** replacements.

### 11.3 Single place for deep content (anti-duplication)

- Each concept is explained **in depth in exactly one** section file (or one README subsection, if that is the chosen canonical place).
- Everywhere else: **one sentence + link** to that place (e.g. “See *Domain* §*X.Y* / `path/to/file.md` for the full treatment.”).
- Spread **full** examples so each idea is taught **once** in full; elsewhere use **short** snippets or references only.

### 11.4 Structure when expanding a file

- **Keep** the existing `##` section title and the **same numbered outline** at the top.
- **Do not** remove or renumber the original list.
- Under each number: subheading or bold line, explanation, optional code, optional **Note:** / **Good to know:** / **Performance note:** (never non-English markers).
- Output replaces the file with the **expanded** version; the file stays **self-contained** for topics that **belong** there.

### 11.5 Scaffolding phase (before expansion)

- Mirror **`sections/`** tree to **every** link path in the domain `README.md` (**folder + file names 1:1**).
- Each new file contains **only**: `## <number>. <title>` matching the README link, then the **same 3–5 bullets** as in the README—**no** extra prose, code, or separators yet.
- Verify: **every README link resolves**, **no empty file**, headings and bullets **match** the README.

---

## 12. Prompt A — Scaffold `sections/` from a domain `README.md` (copy-paste)

Replace `<Domain Name here>` with the folder name under `README/CSharp/` (e.g. `Partial and Static Classes, Enumerations`).

```text
In the domain folder README/CSharp/<Domain Name here>/, scaffold the sections/ structure exactly like the other domains.

Requirements:
- Create all subfolders and .md files under sections/ exactly matching every link path in this domain’s README.md (folder names + file names must match 1:1).
- For each created section file, add only:
  - The section title heading as the first line, using the same text as in the domain README.md link title, formatted like:
    ## <section-number>. <section-title>
  - Immediately below it, copy the same numbered outline list that appears under that section in the domain README.md (the 3–5 bullet points).
- Do not add any extra explanations, paragraphs, code samples, or separators yet—this step is scaffolding only.

After generating everything, verify:
- Every link in the domain README.md resolves to an existing file.
- No section file is empty.
- The heading and outline bullets in each section file match the domain README.md.

Deliverable: a complete sections/ tree + all referenced .md files populated with (title heading + outline bullets only).

Continue until the task is completely done.
```

**Also attach:** `DOCUMENTATION_CROSS_DOMAIN_CHANGES_REPORT.md` §§10–11.

---

## 13. Prompt B — Expand (or update) all files under `sections/**` (copy-paste)

Replace `<Domain Name here>` with the domain folder name. Adjust the tutorial README path if your layout differs.

```text
You are a senior C# mentor and architect. Your job is to turn each subsection file into a complete, production-quality reference.

Context:
- This file is part of the <Domain Name here> tutorial (domain README at README/CSharp/<Domain Name here>/README.md).
- The file already has a ## heading and a numbered list of topics. Keep that structure and expand under it.

Requirements:
- Language: English only.
- Depth and audience: explain each numbered item in depth: definitions, when to use, trade-offs, common mistakes. Content should serve junior to expert. Include what a mentor would stress: pitfalls, performance, readability, maintainability.
- C# and .NET: use modern C# only; target C# 15 and the latest .NET runtime you assume (e.g. .NET 9+). Prefer current APIs; explicitly call out deprecated or legacy patterns and recommend C# 15–era replacements. Where relevant, address performance (CPU, threads, thread pool, allocations, async vs sync) and memory usage.
- Code and practices: include short, runnable C# examples where they clarify a topic (minimal, focused snippets). Follow SOLID, avoid unnecessary allocations, and keep examples thread-safe or clearly document when they are not. If a topic is UI/frontend-specific (e.g. WinForms, WPF, MAUI, async on UI thread), mark it clearly, e.g. (frontend) in the heading or right after the first sentence.
- Single place for in-depth explanation (no duplication): each concept must be explained in depth in exactly one place across the whole tutorial. In all other files, do not repeat that full explanation; instead reference that single place (“See section X.Y / path…/file.md for the full treatment”). When writing this file, if a topic is already covered in depth elsewhere, only give a short reminder and point to that domain/section/file. Add new deep content only for topics whose main explanation belongs in this file. Spread code examples so each concept is taught with a full example in one place; elsewhere use only brief snippets or references.
- Structure: keep the existing ## SectionTitle and the same numbered list at the top. Under each number, add: a short subheading or bold line, explanation in English, code or pseudo-code if useful, and optional Note: / Good to know: / Performance note. Do not remove or renumber the original list; only add content below it (or under each item). Use clear markdown: headings, lists, code blocks with csharp, bold for terms.
- Output: replace the current file content with the expanded version. Keep the file self-contained for the topics that belong here; for others, a short summary plus reference is enough.

Apply this to all files nested inside README/CSharp/<Domain Name here>/sections/**

After all files are expanded, recheck everything to match the project rules: no duplication, English only, C# 15 / modern .NET, links valid, encoding clean.

Continue until the task is completely done.
```

**Also attach:** `DOCUMENTATION_CROSS_DOMAIN_CHANGES_REPORT.md` §§10–11.

---

*Generated to document cross-domain documentation work and guardrails. Update this file when you add new section files or change the `## 0` / `Fundamental Theories` §7.3 convention. **§§10–13** are the canonical “perfection backlog” and AI prompts—keep them in sync when your rules evolve.*
