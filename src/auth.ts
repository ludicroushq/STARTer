import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { reactStartCookies } from 'better-auth/react-start';
import ms from 'ms';
import { db, schema } from './db';
import { env } from './env/server';

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
    },
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
    usePlural: true,
  }),
  plugins: [
    reactStartCookies(), // make sure this is the last plugin in the array
  ],
  session: {
    expiresIn: ms('180d') / 1000,
    updateAge: ms('1d') / 1000,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
