# Microservices track (recommended order, October 2026 era)

Independent deployables from foundations to production: service identity, boundary decomposition, synchronous and asynchronous communication, resilience, operations, and interview-grade judgment — from zero to hero and beyond (junior to mentor depth). Runs on **NestJS (Fastify adapter by default)** throughout this track — the same NestJS engine as the [NestJS track](<../NestJS/README.md>) (modules, providers, microservice transports, inject testing carry over; framework mechanics are never re-taught here). Service-contract *design* lives in the [API Design track](<../APIDesign/README.md>) (style selection, versioning, envelopes — linked, never re-taught); language *boundaries* live in [Clean Architecture 04](<../CleanArchitecture/04 DDD Tactical Modeling/README.md>) (bounded contexts, aggregates — linked, never re-taught); persistence *coordination* lives in [Database Design 06](<../DatabaseDesign/README.md>) (outbox, sagas data-side — linked, never re-taught). This track assumes working TypeScript + NestJS basics and teaches *services*: what each service owns, how services talk, and what production forgives. Version-sensitive claims are labeled (as of October 2026: NestJS 12.x, verified 12.1.2; @nestjs/microservices 12.x, verified 12.1.2; TypeScript 5.9; TCP transport for first slices, broker transports later).

| # | Module |
|---|--------|
| 1 | [Microservices Foundations and Mental Model](<01 Microservices Foundations and Mental Model/README.md>) |
| 2 | [Service Boundaries and Decomposition](<02 Service Boundaries and Decomposition/README.md>) |
| 3 | [Synchronous Communication](<03 Synchronous Communication/README.md>) |
| 4 | [Asynchronous Events and Messaging](<04 Asynchronous Events and Messaging/README.md>) |
| 5 | [Resilience Patterns](<05 Resilience Patterns/README.md>) |
| 6 | [Service Operations and Deployment](<06 Service Operations and Deployment/README.md>) |

Domain folders in this directory use the same `NN …` prefix so the on-disk order matches this curriculum. The full planned curriculum (all future modules, domains 02–07) is recorded in [LOG.md](<LOG.md>) — domains are listed here as they are implemented, so every link on this page resolves.

[← Back to Tutorials](<../../README.md>)
