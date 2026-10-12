# Socket.IO track (recommended order, October 2026 era)

Realtime messaging from handshake to production: WebSocket upgrades, frame streaming, event naming, room scoping, reconnect survival, NestJS gateways, presence, scale-out adapters, backpressure, and judgment — from zero to hero and beyond (junior to mentor depth). This track teaches *push under constraints*: upgrade deliberately, name every message, scope every audience, survive every drop, and prove it. In-process event *mechanics* live in [NodeJS 04/1.1](<../NodeJS/04 Events Networking and HTTP/sections/1. Events/1.1. EventEmitter subscribe and error.md>) (emit timing, error channels — linked, never re-taught); event *design* lives in [Design Patterns 04/2.1](<../DesignPatterns/04 Behavioral Patterns Command and Control/sections/2. Requests and notifications/2.1. Observer subscribe and notify.md>) (decoupling, fan-out — linked, never re-taught); socket and HTTP *substrates* live in [NodeJS 04/2.1](<../NodeJS/04 Events Networking and HTTP/sections/2. Networking/2.1. TCP sockets with net.md>) and [NodeJS 04/3.1](<../NodeJS/04 Events Networking and HTTP/sections/3. HTTP without frameworks/3.1. Bare nodehttp servers and clients.md>) (TCP roles, bare HTTP — linked, never re-taught). Examples are NestJS gateway slices (`@WebSocketGateway` + `@SubscribeMessage`, socket.io driver — never bare `ws`, never bare Express/Fastify) on the default Fastify adapter; gateways are adapter-agnostic. Version-sensitive claims are labeled (as of October 2026: socket.io 4.8.4; NestJS 12.1.2; TypeScript 5.9).

| # | Module |
|---|--------|
| 1 | [Realtime Foundations and Mental Model](<01 Realtime Foundations and Mental Model/README.md>) |
| 2 | [NestJS Gateways and Lifecycle](<02 NestJS Gateways and Lifecycle/README.md>) |

Domain folders in this directory use the same `NN …` prefix so the on-disk order matches this curriculum. The full planned curriculum (all future modules, domains 02–07) is recorded in [LOG.md](<LOG.md>) — domains are listed here as they are implemented, so every link on this page resolves.

[← Back to Tutorials](<../../README.md>)
