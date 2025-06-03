import { text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const shared = {
  createdAt: timestamp().defaultNow(),
  id: text()
    .primaryKey()
    .$defaultFn(() => createId()),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date()),
};
