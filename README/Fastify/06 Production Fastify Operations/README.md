## 1. Observe

### [1.1. Request metrics that matter](<./sections/1. Observe/1.1. Request metrics that matter.md>)

1. **RED per route** (rate/errors/duration — hooks timing, labels bounding)
2. **onResponse owns timing** (reply.elapsedTime reading — middleware declining, hooks serving)
3. **Cardinality stays bounded** (routeOptions.url templating — IDs excluding, series capping)

---

### [1.2. Request logging and correlation](<./sections/1. Observe/1.2. Request logging and correlation.md>)

1. **Pino ships built-in** (logger:true enabling — JSON streaming, transports linking out)
2. **Children scope requests** (req.log deriving — journeys joining, globals declining)
3. **IDs correlate journeys** (requestIdHeader/genReqId issuing — traces following, debugging easing)

---

## 2. Performance

### [2.1. Compression and payload budgets](<./sections/2. Performance/2.1. Compression and payload budgets.md>)

1. **Negotiation compresses smartly** (compress plugin offering — clients choosing, bytes shrinking)
2. **Thresholds skip small** (tiny declining — CPU pricing, latency winning)
3. **bodyLimit caps payloads** (sizes bounding — abuse costing, DoS declining)

---

### [2.2. Connection and event-loop health](<./sections/2. Performance/2.2. Connection and event-loop health.md>)

1. **Options bound servers** (keepAliveTimeout/connectionTimeout capping — hangs declining, resources freeing)
2. **Hooks watch slowness** (onTimeout/onRequestAbort firing — stalls surfacing, latency evidencing)
3. **Loops stay unblocked** (work yielding — mechanics living in NodeJS, linked not repeated)

---

## 3. Harden

### [3.1. Hardening at scale](<./sections/3. Harden/3.1. Hardening at scale.md>)

1. **Proxies trusted explicitly** (trustProxy counting — spoofing declining, rates keying right)
2. **Fingerprints minimized** (x-powered-by absent by default — versions hiding, recon denying)
3. **Dependencies audited** (advisories triaging — updates pricing, supply securing)

---

## 4. Mentor checklist

### [4.1. Operations checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Operations checklist mentors insist on.md>)

1. **Every route emits RED** (hooks timing — blindness ending, alerts firing)
2. **Every request correlates** (IDs issuing — journeys joining, debugging easing)
3. **Every deploy hardens** (proxies trusting — fingerprints cutting — audits dating)

---

## 5. Interview QA

### [5.1. Common interview QA operations](<./sections/5. Interview QA/5.1. Common interview QA operations.md>)

1. **Observability live under pressure** (metrics, logs, correlation — measured, not vibed)
2. **Performance live under pressure** (compression, connections, loops — diagnosed with fixes)
3. **Hardening live under pressure** (proxies, fingerprints, deps — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Runtime lives in NodeJS** (logging transports, loops, orchestration — linked, not repeated)
2. **Delivery lives in Domain 05** (tests, gates, drains — neighbors, not repeats)
3. **Mastery lives in Domain 07** (synthesis, judgment — neighbors, not repeats)

---

[← Back to Fastify track](<../README.md>)
