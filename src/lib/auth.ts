import { createId } from "@paralleldrive/cuid2";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { Define } from "within-ts";
import { appName } from "@/config/app";
import { serverEnv } from "@/config/env/server";
import { Database } from "@/db";
// biome-ignore lint/performance/noNamespaceImport: drizzle
import * as schema from "@/db/schema";

export class Auth extends Define.Service("Auth", () => {
  const db = new Database();

  return betterAuth({
    advanced: {
      database: {
        generateId: () => createId(),
      },
    },
    appName,
    database: drizzleAdapter(db, {
      provider: "pg",
      schema,
      usePlural: true,
    }),
    plugins: [tanstackStartCookies()],
    socialProviders: {
      google: {
        clientId: serverEnv.GOOGLE_CLIENT_ID ?? "",
        clientSecret: serverEnv.GOOGLE_CLIENT_SECRET ?? "",
      },
    },
  });
}) {}

export const auth = new Auth();
