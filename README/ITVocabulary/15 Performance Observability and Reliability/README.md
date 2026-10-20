# Performance Observability and Reliability

Learn to interpret service measurements, operational evidence and reliability claims. Build on units, network and data vocabulary, distributed behavior, quality evidence and delivery boundaries. Examples declare their observation scopes; no deployed service or monitoring platform is assumed.

This domain is in progress: 5 of 13 approved lessons are available.

## 1. Measuring behavior

### [1.1. Latency response time throughput utilization and saturation](<sections/1. Measuring behavior/1.1. Latency response time throughput utilization and saturation.md>)

1. **State which time and work rate a report measures:** Distinguish response and service boundaries arrival and completion rates outstanding counts and successful business throughput.
2. **Separate resource use from excess waiting work:** Interpret time and capacity utilization denominators saturation and snapshot versus interval scope without diagnosing from one percentage.
3. **Calculate rates and preserve the unresolved cause:** Analyze a synthetic request CPU and pool packet then explain why more completed timeout responses do not improve successful registrations.

### [1.2. Means medians percentiles distributions and tail latency](<sections/1. Measuring behavior/1.2. Means medians percentiles distributions and tail latency.md>)

1. **Distinguish a center from a distribution and its tail:** Explain mean median spread histogram buckets and slow observations without treating a favorable center as complete user evidence.
2. **Read a percentile with its calculation and aggregation limits:** Interpret percentile quantile and finite-sample methods while distinguishing pooled ranks from averaged worker summaries.
3. **Calculate a sample and expose a misleading worker summary:** Run exact nearest-rank calculations compare p99 with the maximum and explain how excluded requests change the report population.

## 2. Finding and comparing costs

### [2.1. Benchmarks baselines profiles bottlenecks and capacity](<sections/2. Finding and comparing costs/2.1. Benchmarks baselines profiles bottlenecks and capacity.md>)

1. **Define the comparison before interpreting a benchmark score:** State the workload reference configuration behavior and measurement boundary for a meaningful comparison.
2. **Use profiles to investigate a limiting path:** Distinguish sampled CPU or other activity hotspots and bottlenecks from full response time using a serial cost model.
3. **Read a capacity report against its workload and criteria:** Identify tested acceptable operating points and reject unsupported comparisons across workload and failure conditions.

### [2.2. Cold starts warmups caches hits misses TTLs and eviction](<sections/2. Finding and comparing costs/2.2. Cold starts warmups caches hits misses TTLs and eviction.md>)

1. **Identify which execution state is cold or warm:** Distinguish startup preparation code warmup cache population and reused state without attributing a changed duration to one unverified cause.
2. **Distinguish a usable cache result from a current source fact:** Explain hit miss refill ratio TTL invalidation and stampede while retaining the existing general expiration and eviction owner.
3. **Trace freshness lifetime and cost through explicit policies:** Analyze a fixed-expiry source-change timeline early eviction and serial cache costs then revise a claim when only warm-process evidence remains.

## 3. Telemetry and investigation

### [3.1. Monitoring observability instrumentation and telemetry](<sections/3. Telemetry and investigation/3.1. Monitoring observability instrumentation and telemetry.md>)

1. **Separate an activity a capability and the data supporting it:** Distinguish monitoring observability and telemetry through the questions supported rather than tool or data-type labels.
2. **Trace instrumentation collection and interpretation separately:** Explain observation points automatic instrumentation exporters collectors and backends while identifying support retention transport and query limits.
3. **Answer a business question from a limited telemetry packet:** Distinguish HTTP acceptance from a worker commit and update a claim only with correctly scoped delivered outcome evidence.

[← Back to IT Vocabulary](<../README.md>)
