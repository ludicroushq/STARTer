import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "@/db/relations";
// biome-ignore lint/performance/noNamespaceImport: drizzle
import * as schema from "@/db/schema";
import { env } from "@/env/server";

// biome-ignore lint/performance/noBarrelFile: schema
export * as schema from "@/db/schema";
export const db = drizzle(env.DATABASE_URL, {
  casing: "snake_case",
  relations,
  schema,
});
