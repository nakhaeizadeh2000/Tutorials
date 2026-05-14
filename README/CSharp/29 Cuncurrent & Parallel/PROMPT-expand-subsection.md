# Prompt: Expand Subsection File (Concurrency & Parallelism)

Use this prompt when you want to expand a single subsection file (e.g. `1.1. High-level execution model concepts.md`). Paste the file path and, optionally, the current file content at the end.

---

You are a senior C# mentor and architect. Your job is to turn this subsection file into a complete, production-quality reference.

**Context**

- This file is part of a **Concurrency & Parallelism** tutorial (README at `README/CSharp/29 Cuncurrent & Parallel/README.md`).
- The file already has a `##` heading and a numbered list of topics. Keep that structure and expand under it.

**Requirements**

1. **Language**
   - Main explanatory text: **Persian (فارسی)**.
   - Code snippets, type names, API names, and technical terms: **English** (as in the existing list).
   - Optional: one-line English subtitle after the main heading if useful.

2. **Depth and audience**
   - Explain each numbered item in the list in depth: definitions, when to use, trade-offs, common mistakes.
   - Content should serve **junior to expert**: clear for learners, precise and complete for experienced developers.
   - Include what a mentor would stress: pitfalls, performance, readability, maintainability.

3. **C# and .NET**
   - Use **modern C#** only; target **C# 15** and the latest .NET runtime you assume (e.g. .NET 9+).
   - Prefer current APIs; explicitly call out **deprecated or legacy** patterns and recommend their C# 15–era replacements.
   - Where relevant, address **performance** (CPU, threads, thread pool, allocations, async vs sync) and **memory** usage.

4. **Code and practices**
   - Include **short, runnable C# 15 examples** where they clarify a topic (minimal, focused snippets).
   - Follow **SOLID**, avoid unnecessary allocations, and keep examples **thread-safe** or clearly document when they are not.
   - If a topic is **UI/frontend-specific** (e.g. WinForms, WPF, MAUI, async on UI thread), mark it clearly, e.g. `(frontend)` in the heading or right after the first sentence.

5. **Single place for in-depth explanation (no duplication)**
   - **Each concept/topic must be explained in depth in exactly one place** across the whole tutorial (one section or subsection file). In all other files, **do not repeat that full explanation**; instead **reference** that single place (e.g. «برای توضیح عمیق‌تر به [بخش X.Y / فایل …] مراجعه کنید» or «See section X.Y for the full treatment»).
   - When writing this file, if a topic is already covered in depth elsewhere (e.g. in another subsection or in the README), only give a **short reminder** and **point to that section/file**. Add new **deep** content only for topics whose **main** explanation belongs in this file.
   - Spread code examples so that **each concept is taught with a full example in one place**; elsewhere use only brief snippets or references to avoid duplication.

6. **Structure of the file**
   - Keep the existing `## SectionTitle` and the **same numbered list** at the top.
   - Under each number, add: a short subheading or bold line, explanation in Persian, code or pseudo-code if useful, and optional «نکته» / «Good to know» / «Performance note».
   - Do not remove or renumber the original list; only add content below it (or under each item).
   - Use clear markdown: headings, lists, code blocks with `csharp`, bold for terms.

7. **Output**
   - Replace the current file content with the expanded version.
   - Keep the file self-contained for the topics that **belong** here; for others, a short summary + reference is enough.

**Example of “one place deep, elsewhere reference”**

- In **one** file (e.g. «Concurrency vs Parallelism»): full definition, comparison, when to use which, C# 15 example, performance note.
- In **another** file that uses the same idea: one sentence like «Concurrency و Parallelism در بخش ۱.۱ به‌طور کامل توضیح داده شده‌اند» + only the minimal code or context needed for that subsection.

---

**Apply this to the following file:**

`[PASTE FILE PATH HERE]`

Optional: `[PASTE CURRENT FILE CONTENT IF YOU WANT TO REFINE EXISTING TEXT]`
