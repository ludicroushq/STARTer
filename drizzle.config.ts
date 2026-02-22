import { defineConfig } from "drizzle-kit";
import { serverEnv } from "@/config/env/server";

export default defineConfig({
  casing: "snake_case",
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
  dialect: "postgresql",
  migrations: {
    prefix: "timestamp",
  },
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
});
