import { createClient } from "pg-bossman";
import { env } from "@/env/server";
import type { bossman } from ".";

export const bossmanClient = createClient<typeof bossman>({
  connectionString: env.DATABASE_URL,
});
