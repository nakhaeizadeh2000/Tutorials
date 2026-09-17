# Hardware Infrastructure and Platforms

Where your code physically (and virtually) runs: the machine under your programs, who serves whom, the environments code travels through, and the cloud words every job post assumes you know.

## 0. Prerequisites

[Domain 01 Core IT Concepts](<../01 Core IT Concepts and Professional Jargon/README.md>) — especially the layer stack ([2.1](<../01 Core IT Concepts and Professional Jargon/sections/2. Core computing concepts/2.1. Hardware software OS and platform.md>)) and program/process/thread ([2.3](<../01 Core IT Concepts and Professional Jargon/sections/2. Core computing concepts/2.3. Programs processes compile vs interpret.md>)). This domain names the infrastructure those layers run on.

## 1. Inside the machine

### [1.1. CPU, RAM, and storage (the working trio)](<./sections/1. Inside the machine/1.1. CPU RAM and storage the working trio.md>)

1. **CPU computes, RAM holds the working set, storage keeps everything** (speed vs capacity ladder: registers → cache → RAM → SSD → HDD → network).
2. **Bottleneck vocabulary** (CPU-bound vs memory-bound vs I/O-bound — three words that locate any slowness report).
3. **Specs decode to behavior** (cores/threads, GB RAM, SSD vs HDD — what each number predicts about your program).

### [1.2. Client vs server (who serves whom)](<./sections/1. Inside the machine/1.2. Client vs server who serves whom.md>)

1. **Roles, not machines** (client asks, server answers — one laptop plays both roles daily).
2. **Frontend vs backend follows the split** (UI on the client, truth and rules on the server — and why "server" also means the program, not just the box).
3. **The request round-trip in one paragraph** (client → network → server → work → response — the sentence every later domain assumes).

---

## 2. Where code lives and runs

### [2.1. Localhost, staging, and production (environments)](<./sections/2. Where code lives and runs/2.1. Localhost staging and production environments.md>)

1. **Localhost is your machine talking to itself** (`localhost`/`127.0.0.1` — development's private loopback, no network involved).
2. **Staging mirrors prod, production serves users** (pre-prod dress rehearsal vs the only environment that costs money when broken).
3. **"Works locally" is the start, not the verdict** (environment parity — why staging exists and what "it works on staging" actually promises).

### [2.2. Cloud words: region, zone, instance, and managed](<./sections/2. Where code lives and runs/2.2. Cloud words region zone instance and managed.md>)

1. **Region and zone are failure boundaries** (geographic area vs isolated datacenter — multi-zone is the cheapest resilience money buys).
2. **Instance, VM, and container in one line each** (rented machine vs virtual machine vs process-level packaging — names only, mechanics elsewhere).
3. **Managed means "they operate it"** (managed database vs self-hosted — the trade is control against on-call burden).

---

## 4. Important points to remember (infrastructure)

### [4.1. Infrastructure checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Infrastructure checklist mental models mentors insist on.md>)

1. **Name the bottleneck class** (CPU-bound, memory-bound, or I/O-bound — before any fix).
2. **Name the environment** (localhost, staging, or production — in every report).
3. **Name the failure boundary** (zone, region — in every resilience claim).

---

## 5. Interview questions and answers (infrastructure)

### [5.1. Common interview QA: infrastructure vocabulary](<./sections/5. Interview questions and answers/5.1. Common interview QA infrastructure vocabulary.md>)

1. **Client vs server** (roles-not-machines answer with a round-trip sentence).
2. **What happens when you visit a URL** (the beloved mega-question — answered as vocabulary choreography, mechanics linked out).
3. **Staging vs production** (why both exist — the one-paragraph answer), plus rapid-fire drills (CPU/RAM/storage, region/zone, managed).

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Networks deep vocab** (DNS, HTTP, TCP, latency) — Domain 04, not here.
2. **How servers/VMs/containers work** — future Linux, Docker, and Cloud tracks own the mechanics.
3. **Software-engineering terms** (repo, CI/CD, deploy pipelines) — Domain 03 and Domain 06 territory.
