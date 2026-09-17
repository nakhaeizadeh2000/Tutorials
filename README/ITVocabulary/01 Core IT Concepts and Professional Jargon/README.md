# Core IT Concepts and Professional Jargon

The foundation of the whole track: how to learn technical vocabulary like a professional, the core computing concepts every later domain assumes, and the everyday acronyms and meeting jargon you will hear from day one.

## 0. Prerequisites

None — this is the entry point of the IT Vocabulary track. If you already work in tech, skim sections 1–2 for the conventions used across the track, then jump ahead to section 3 or the next domain.

## 1. Learning vocabulary like a professional

### [1.1. Why precise vocabulary matters](<./sections/1. Learning vocabulary like a professional/1.1. Why precise vocabulary matters.md>)

1. **Precision prevents incidents** (saying "the server is down" when you mean "the app returns 500" sends responders to the wrong layer).
2. **Terms are compressed models** (each word like "cache" or "deploy" carries an agreed mental model — using it correctly signals you share it).
3. **Imprecision compounds in teams** (one vague word in a ticket becomes three wrong assumptions downstream).

### [1.2. How to decode unknown terms](<./sections/1. Learning vocabulary like a professional/1.2. How to decode unknown terms.md>)

1. **Decompose before you search** (prefixes, roots, and suffixes — "micro-service", "de-ploy" — guess the shape first, then verify).
2. **Ask for the referent, not the definition** ("what does it point to in our system?" beats "what does it mean?" in a new codebase).
3. **Build a personal glossary habit** (write each new term in your own words within 24 hours or it evaporates).

---

## 2. Core computing concepts

### [2.1. Hardware, software, OS, and platform](<./sections/2. Core computing concepts/2.1. Hardware software OS and platform.md>)

1. **Hardware executes, software instructs** (the physical machine vs the programs that tell it what to do).
2. **The OS is the broker** (kernel, drivers, processes — it multiplexes one machine among many programs).
3. **Platform means "what you build on"** (OS + runtime + services together; "it works on my machine" is a platform mismatch confession).

### [2.2. Data units: bit, byte, and encoding basics](<./sections/2. Core computing concepts/2.2. Data units bit byte and encoding basics.md>)

1. **Bit vs byte vs octet** (one binary digit vs eight of them; "octet" is the unambiguous word networking people prefer).
2. **KB vs KiB is a real distinction** (decimal SI prefixes vs binary IEC prefixes — storage marketing lives in this gap).
3. **Encoding turns symbols into bytes** (ASCII, UTF-8: text is not bytes until an encoding says which bytes).

### [2.3. Programs, processes, compile vs interpret](<./sections/2. Core computing concepts/2.3. Programs processes compile vs interpret.md>)

1. **Program vs process vs thread** (a file on disk vs a running instance vs a thread of execution inside it).
2. **Compile vs interpret vs JIT** (ahead-of-time translation vs line-by-line execution vs the hybrid modern engines use).
3. **Runtime is where it actually runs** ("runtime error" means the failure happened during execution, not during writing or compiling).

---

## 3. Everyday professional jargon

### [3.1. Core acronyms: API, SDK, SLA, KPI, and friends](<./sections/3. Everyday professional jargon/3.1. Core acronyms API SDK SLA KPI and friends.md>)

1. **Interface words: API, SDK, CLI** (how programs, developers, and humans respectively talk to a system).
2. **Agreement words: SLA, SLO, SOW** (promises about uptime and scope — know which one is contractual).
3. **Measurement words: KPI, OKR, metric vs KPI** (a metric becomes a KPI only when a decision rides on it).

### [3.2. Meeting jargon: standup, sync, blockers, and shipped](<./sections/3. Everyday professional jargon/3.2. Meeting jargon standup sync blockers and shipped.md>)

1. **Sync words: standup, sync, retro** (each meeting has a contract — saying the name commits you to its format).
2. **Progress words: blocked, WIP, shipped** ("blocked" is a request for help with an owner; "shipped" means users can touch it).
3. **Soft words that harden meaning: ASAP, EOD, ping** (vague urgency creates conflict — attach a timezone and a reason).

---

## 4. Important points to remember (core concepts)

### [4.1. Core concepts checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Core concepts checklist mental models mentors insist on.md>)

1. **Layer vocabulary** (name the layer before the symptom — hardware, OS, runtime, app).
2. **Unit discipline** (bits vs bytes, decimal vs binary — state the unit every time).
3. **Acronym hygiene** (expand on first use, never invent competing meanings).

---

## 5. Interview questions and answers (core concepts)

### [5.1. Common interview QA: core IT vocabulary](<./sections/5. Interview questions and answers/5.1. Common interview QA core IT vocabulary.md>)

1. **Hardware vs software vs OS** (the classic opener — answer in one layer-stack sentence).
2. **Compile vs interpret** (what the interviewer is really testing: mental model of execution).
3. **API vs SDK** (the most-asked acronym pair — answer with who consumes what), plus rapid-fire acronym drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Networks, databases, security, cloud, agile deep dives** — future domains 02–07 of this track, not here.
2. **Language and tooling mechanics** — JavaScript, TypeScript, and Git tracks own the technology; this track owns only the words.
3. **Execution internals** (event loop, JIT tiers, GC) — JavaScript track domains, linked rather than repeated.
