import { createId } from "@paralleldrive/cuid2";
import { text, timestamp } from "drizzle-orm/pg-core";

export const shared = {
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  id: text()
    .primaryKey()
    .$defaultFn(() => createId()),
  updatedAt: timestamp({ mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};
