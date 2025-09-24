/** biome-ignore-all lint/style/useNamingConvention: environment variables */
import { createEnv } from "@t3-oss/env-core";
import { type } from "arktype";

export const env = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
  server: {
    BETTER_AUTH_SECRET: type("string"),
    BETTER_AUTH_URL: type("string.url"),
    DATABASE_URL: type("string.url"),
    GOOGLE_CLIENT_ID: type("string"),
    GOOGLE_CLIENT_SECRET: type("string"),
  },
  skipValidation: process.env.NODE_ENV === "test",
});
