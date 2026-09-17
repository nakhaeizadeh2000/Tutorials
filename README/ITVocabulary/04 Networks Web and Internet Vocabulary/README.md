# Networks Web and Internet Vocabulary

How machines find and talk to each other: the words for messages in transit, names that become numbers, web requests and their answers, and the two speed words everyone confuses.

## 0. Prerequisites

[Domain 01 Core IT Concepts](<../01 Core IT Concepts and Professional Jargon/README.md>) — units and precision ([2.2](<../01 Core IT Concepts and Professional Jargon/sections/2. Core computing concepts/2.2. Data units bit byte and encoding basics.md>), [1.1](<../01 Core IT Concepts and Professional Jargon/sections/1. Learning vocabulary like a professional/1.1. Why precise vocabulary matters.md>)); [Domain 02](<../02 Hardware Infrastructure and Platforms/README.md>) client/server and round-trip ([1.2](<../02 Hardware Infrastructure and Platforms/sections/1. Inside the machine/1.2. Client vs server who serves whom.md>)) — this domain names what happens *between* the two ends.

## 1. How messages travel

### [1.1. Protocol, packet, and address](<./sections/1. How messages travel/1.1. Protocol packet and address.md>)

1. **Protocol is the agreed manners** (TCP, UDP, IP — rules both ends follow so bits become conversation).
2. **Packet is the envelope** (header + payload + size limits — why big things travel in many small pieces).
3. **Address tells where, port tells whom** (IP for the machine, port for the program — the two-part delivery address).

### [1.2. DNS: names to numbers](<./sections/1. How messages travel/1.2. DNS names to numbers.md>)

1. **DNS is the internet's phone book** (human names → IP numbers, resolved hierarchically).
2. **Records are entry types** (A, CNAME, MX in one line each — what each answers).
3. **Cache and TTL explain staleness** (why DNS changes "take time" — propagation is really cache expiry).

---

## 2. Web talk

### [2.1. HTTP: requests, verbs, and status codes](<./sections/2. Web talk/2.1. HTTP requests verbs and status codes.md>)

1. **Request asks, response answers** (method + URL + headers in, status + body out).
2. **Verbs say the intent** (GET, POST, PUT, PATCH, DELETE — read vs write vs remove, idempotent or not).
3. **Status codes say the outcome class** (2xx/3xx/4xx/5xx — whose fault by first digit).

### [2.2. Latency vs bandwidth, timeouts](<./sections/2. Web talk/2.2. Latency vs bandwidth and timeouts.md>)

1. **Latency is delay, bandwidth is width** (ping time vs pipe size — video call vs file download need opposite ones).
2. **Timeout bounds the wait** (how long before giving up — hanging forever is the alternative).
3. **Retry and backoff handle failure** (try again, but politely spaced — thundering herds come from retrying rudely).

---

## 4. Important points to remember (networking)

### [4.1. Networking vocabulary checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Networking vocabulary checklist mental models mentors insist on.md>)

1. **Name the leg** (DNS, connection, server work — in every slowness report).
2. **Name the speed word correctly** (latency vs bandwidth — never "the network is slow").
3. **Name the outcome class** (2xx/4xx/5xx — whose fault before whose fix).

---

## 5. Interview questions and answers (networking)

### [5.1. Common interview QA: networking vocabulary](<./sections/5. Interview questions and answers/5.1. Common interview QA networking vocabulary.md>)

1. **DNS in one paragraph** (what resolves, in what order, why it caches).
2. **HTTP status drills** (read the first digit — fault attribution out loud).
3. **Latency vs bandwidth** (the highway analogy, done right), plus rapid-fire drills (protocol, packet, port, timeout).

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Packet/socket mechanics** (TCP handshakes, TLS negotiation, raw sockets) — future Networks/System tracks, not here.
2. **API design depth** (REST modeling, GraphQL, auth schemes) — future API Design track; verbs/status stay here as words.
3. **Ops networking** (load balancers, CDNs, firewalls in practice) — Domain 06 and Cloud tracks; the vocabulary seeds are planted here.
