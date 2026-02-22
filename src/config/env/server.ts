import dotenvx from "@dotenvx/dotenvx";
import { createEnv } from "@t3-oss/env-core";
import { OPTIONAL_STRING, REQUIRED_STRING, REQUIRED_URL } from "./utils";

dotenvx.config({
  convention: "nextjs",
  ignore: ["MISSING_ENV_FILE"],
  quiet: true,
});

export const serverEnv = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
  server: {
    BETTER_AUTH_SECRET: REQUIRED_STRING,
    BETTER_AUTH_URL: REQUIRED_URL,
    DATABASE_URL: REQUIRED_URL,
    GOOGLE_CLIENT_ID: OPTIONAL_STRING,
    GOOGLE_CLIENT_SECRET: OPTIONAL_STRING,
  },
});
