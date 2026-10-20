# Performance Observability and Reliability

Learn to interpret service measurements, operational evidence and reliability claims. Build on units, network and data vocabulary, distributed behavior, quality evidence and delivery boundaries. Examples declare their observation scopes; no deployed service or monitoring platform is assumed.

This domain is in progress: 3 of 13 approved lessons are available.

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

[← Back to IT Vocabulary](<../README.md>)
