# Clean Architecture track (recommended order, October 2026 era)

Enterprise layering on TypeScript — Clean Architecture, Hexagonal ports-and-adapters, DDD tactical modeling, and CQRS slices from foundations to production: dependency rule, use cases, entities, ports, adapters, persistence isolation, and interview-grade judgment — from zero to hero and beyond (junior to mentor depth). Runs on **NestJS (Fastify adapter by default)** throughout this track — the same NestJS engine as the [NestJS track](<../NestJS/README.md>) (controllers, providers, modules, inject testing carry over; framework mechanics are never re-taught here). Principle *mechanics* (SOLID, DIP) live in the [Design Patterns track](<../DesignPatterns/README.md>); persistence *mechanics* live in the [ORM track](<../ORM/README.md>) (repository seam, mappers, N+1). This track assumes working TypeScript + NestJS basics and teaches *layering*: what each layer owns, costs, and deserves. Version-sensitive claims are labeled (as of October 2026: NestJS 12.x, verified 12.1.2; TypeScript 5.9; Fastify 5.x under the adapter, verified 5.12.5).

| # | Module |
|---|--------|
| 1 | [Clean Foundations and Mental Model](<01 Clean Foundations and Mental Model/README.md>) |
| 2 | [Use Cases and Application Services](<02 Use Cases and Application Services/README.md>) |
| 3 | [Hexagonal Ports and Adapters](<03 Hexagonal Ports and Adapters/README.md>) |
| 4 | [DDD Tactical Modeling](<04 DDD Tactical Modeling/README.md>) |
| 5 | [CQRS and Event-Driven Slices](<05 CQRS and Event-Driven Slices/README.md>) |

Domain folders in this directory use the same `NN …` prefix so the on-disk order matches this curriculum. The full planned curriculum (all future modules, domains 02–07) is recorded in [LOG.md](<LOG.md>) — domains are listed here as they are implemented, so every link on this page resolves.

[← Back to Tutorials](<../../README.md>)
