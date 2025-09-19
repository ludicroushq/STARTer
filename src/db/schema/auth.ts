import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { shared } from "./shared";

export const users = pgTable("users", {
  ...shared,
  banExpires: timestamp({ withTimezone: true }),
  banned: boolean().default(false),
  banReason: text(),
  email: text().notNull().unique(),
  emailVerified: boolean().notNull(),
  image: text(),
  name: text().notNull(),
  role: text(),
});

export const sessions = pgTable("sessions", {
  ...shared,
  expiresAt: timestamp({ withTimezone: true }).notNull(),
  impersonatedBy: text(),
  ipAddress: text(),
  token: text().notNull().unique(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const accounts = pgTable("accounts", {
  ...shared,
  accessToken: text(),
  accessTokenExpiresAt: timestamp({ withTimezone: true }),
  accountId: text().notNull(),
  idToken: text(),
  password: text(),
  providerId: text().notNull(),
  refreshToken: text(),
  refreshTokenExpiresAt: timestamp({ withTimezone: true }),
  scope: text(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const verifications = pgTable("verifications", {
  ...shared,
  expiresAt: timestamp({ withTimezone: true }).notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
});
