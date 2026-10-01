import { PrismaClient } from "./cmpclient/default.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, bigint, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import pg from "pg";

const cfg = { host: "localhost", port: 5433, user: "postgres", password: "probe", database: "postgres" };
const results = {};

async function setup() {
  const c = new pg.Client(cfg);
  await c.connect();
  await c.query('DROP TABLE IF EXISTS "cmp_posts", "cmp_users"');
  await c.query('CREATE TABLE "cmp_users" (id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, email TEXT UNIQUE NOT NULL)');
  await c.query('CREATE TABLE "cmp_posts" (id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title TEXT NOT NULL, "authorId" BIGINT NOT NULL REFERENCES "cmp_users"(id) ON DELETE CASCADE)');
  for (let i = 0; i < 5; i++) {
    const r = await c.query("INSERT INTO \"cmp_users\" (email) VALUES ($1) RETURNING id", [`u${i}@x.io`]);
    for (let j = 0; j < 4; j++) await c.query('INSERT INTO "cmp_posts" (title, "authorId") VALUES ($1, $2)', [`t${j}`, r.rows[0].id]);
  }
  await c.end();
}

function counting(client) {
  let n = 0;
  const orig = client.query.bind(client);
  client.query = ((...a) => { n++; return orig(...a); });
  return () => n;
}

async function rawPg() {
  const c = new pg.Client(cfg);
  await c.connect();
  const count = counting(c);
  const users = (await c.query('SELECT * FROM "cmp_users"')).rows;
  for (const u of users) await c.query('SELECT * FROM "cmp_posts" WHERE "authorId" = $1', [u.id]);
  results["raw-loop"] = count();
  const c2 = new pg.Client(cfg);
  await c2.connect();
  const count2 = counting(c2);
  await c2.query('SELECT u.*, p.id AS pid FROM "cmp_users" u LEFT JOIN "cmp_posts" p ON p."authorId" = u.id');
  results["raw-join"] = count2();
  await c.end(); await c2.end();
}

const dzUsers = pgTable("cmp_users", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});
const dzPosts = pgTable("cmp_posts", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 200 }).notNull(),
  authorId: bigint("authorId", { mode: "number" }).notNull(),
});
const dzURel = relations(dzUsers, ({ many }) => ({ posts: many(dzPosts) }));
const dzPRel = relations(dzPosts, ({ one }) => ({
  author: one(dzUsers, { fields: [dzPosts.authorId], references: [dzUsers.id] }),
}));

async function drizzleRun() {
  const c = new pg.Client(cfg);
  await c.connect();
  const count = counting(c);
  const db = drizzle(c, { schema: { dzUsers, dzPosts, dzURel, dzPRel } });
  const before = count();
  await db.query.dzUsers.findMany({ with: { posts: true } });
  results["drizzle-with"] = count() - before;
  await c.end();
}

async function prismaRun() {
  const adapter = new PrismaPg({ connectionString: "postgresql://postgres:probe@localhost:5433/postgres" });
  const db = new PrismaClient({ adapter, log: [{ emit: "event", level: "query" }] });
  let n = 0;
  db.$on("query", () => { n++; });
  await db.cmpUser.findMany({ include: { posts: true } });
  results["prisma-include"] = n;
  n = 0;
  const users = await db.cmpUser.findMany();
  for (const u of users) await db.cmpPost.findMany({ where: { authorId: u.id } });
  results["prisma-loop"] = n;
  await db.$disconnect();
}

async function typeormRun() {
  const { DataSource } = await import("typeorm");
  const { CmpUser, CmpPost } = await import("./tout/cmp-entities.js");
  let n = 0;
  class CountLogger { logQuery() { n++; } logQueryError() {} logQuerySlow() {} logSchemaBuild() {} logMigration() {} log() {} }
  const ds = new DataSource({ type: "postgres", ...cfg, username: "postgres", password: "probe", entities: [CmpUser, CmpPost], synchronize: false, logging: true, logger: new CountLogger() });
  await ds.initialize();
  n = 0;
  await ds.getRepository(CmpUser).find({ relations: { posts: true } });
  results["typeorm-relations"] = n;
  await ds.destroy();
}

await setup();
await rawPg();
await drizzleRun();
await prismaRun();
await typeormRun();
console.log("STATEMENTS:" + JSON.stringify(results));
const cleanup = new pg.Client(cfg);
await cleanup.connect();
await cleanup.query('DROP TABLE "cmp_posts", "cmp_users"');
await cleanup.end();
