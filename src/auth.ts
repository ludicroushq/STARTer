import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { reactStartCookies } from "better-auth/react-start";
import ms from "ms";
import { ac, roles } from "./auth-permissions";
import { env } from "./config/env/server";
import { db, schema } from "./db";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
    usePlural: true,
  }),
  plugins: [
    admin({
      ac,
      roles,
    }),
    reactStartCookies(), // make sure this is the last plugin in the array
  ],
  session: {
    // biome-ignore lint/style/noMagicNumbers: milliseconds to seconds
    expiresIn: ms("180d") / 1000,
    // biome-ignore lint/style/noMagicNumbers: milliseconds to seconds
    updateAge: ms("1d") / 1000,
  },
  socialProviders: {
    ...(env.GOOGLE_CLIENT_ID &&
      env.GOOGLE_CLIENT_SECRET && {
        google: {
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
        },
      }),
  },
});
