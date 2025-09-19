import { createBossman, defineEvents } from "pg-bossman";
import { env } from "@/env/server";

export const bossman = createBossman({
  connectionString: env.DATABASE_URL,
})
  .register({})
  .events(defineEvents())
  .subscriptions({})
  .build();
