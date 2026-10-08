# API Design track (recommended order, October 2026 era)

REST, GraphQL, and gRPC API design from foundations to production: style selection, contract-first design, versioning, error envelopes, operations, and interview-grade judgment — from zero to hero and beyond (junior to mentor depth). Runs on **NestJS (Fastify adapter by default)** throughout this track — the same NestJS engine as the [NestJS track](<../NestJS/README.md>) (controllers, providers, modules, inject testing carry over; framework mechanics are never re-taught here). Style *mechanics* for the minimal frameworks live in the [Express track](<../Express/README.md>) and the [Fastify track](<../Fastify/README.md>) (linked, never re-taught); service-contract *guidance* lives in the [Node.js track](<../NodeJS/README.md>) (NodeJS 07/2.2 — envelopes, path versioning, cursor pagination). This track assumes working TypeScript + NestJS basics and teaches *API design*: what each style owns, costs, and deserves. Version-sensitive claims are labeled (as of October 2026: NestJS 12.x, verified 12.1.2; TypeScript 5.9; Fastify 5.x under the adapter, verified 5.12.5; GraphQL October 2021 spec era; proto3).

| # | Module |
|---|--------|
| 1 | [API Design Foundations and Mental Model](<01 API Design Foundations and Mental Model/README.md>) |
| 2 | [REST Depth](<02 REST Depth/README.md>) |

Domain folders in this directory use the same `NN …` prefix so the on-disk order matches this curriculum. The full planned curriculum (all future modules, domains 02–07) is recorded in [LOG.md](<LOG.md>) — domains are listed here as they are implemented, so every link on this page resolves.

[← Back to Tutorials](<../../README.md>)
