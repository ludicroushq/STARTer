import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { shared } from "./shared";

export const users = pgTable("users", {
  ...shared,
  email: text().notNull().unique(),
  emailVerified: boolean().notNull(),
  image: text(),
  name: text().notNull(),
});

export const sessions = pgTable("sessions", {
  ...shared,
  expiresAt: timestamp().notNull(),
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
  accessTokenExpiresAt: timestamp(),
  accountId: text().notNull(),
  idToken: text(),
  password: text(),
  providerId: text().notNull(),
  refreshToken: text(),
  refreshTokenExpiresAt: timestamp(),
  scope: text(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const verifications = pgTable("verifications", {
  ...shared,
  expiresAt: timestamp().notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
});
