/** biome-ignore-all lint/performance/noBarrelFile: db */
import { drizzle } from "drizzle-orm/node-postgres";
import { Define } from "within-ts";
import { serverEnv } from "@/config/env/server";
import { relations } from "@/db/relations";
// biome-ignore lint/performance/noNamespaceImport: drizzle
import * as schema from "@/db/schema";

export * as schema from "@/db/schema";

export class Database extends Define.Service("Database", () =>
  drizzle({
    casing: "snake_case",
    connection: serverEnv.DATABASE_URL,
    relations,
    schema,
  })
) {}
