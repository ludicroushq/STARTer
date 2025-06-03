import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/env/server";
import * as schema from "@/db/schema";
import { relations } from "@/db/relations";

export const db = drizzle(env.DATABASE_URL, {
  casing: "snake_case",
  relations,
  schema,
});
