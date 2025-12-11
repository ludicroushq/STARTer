import { createId } from "@paralleldrive/cuid2";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import ms from "ms";
import { serverEnv } from "@/config/env/server";
import { db, schema } from "../db";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: () => createId(),
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
    usePlural: true,
  }),
  plugins: [tanstackStartCookies()],
  session: {
    expiresIn: ms("180d") / 1000,
    updateAge: ms("1d") / 1000,
  },
  socialProviders: {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID ?? "",
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET ?? "",
    },
  },
});
