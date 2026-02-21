import type { InferSelectModel } from "drizzle-orm";
import { Define } from "within-ts";
import type { users } from "@/db/schema";

type UserFields = InferSelectModel<typeof users>;

export class User extends Define.Entity<UserFields>() {}
