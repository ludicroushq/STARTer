import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "@/config/env/server";

export default defineConfig({
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: "postgresql",
  migrations: {
    prefix: "timestamp",
  },
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
});
