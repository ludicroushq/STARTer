import { createId } from '@paralleldrive/cuid2';
import { text, timestamp } from 'drizzle-orm/pg-core';

export const shared = {
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  id: text()
    .primaryKey()
    .$defaultFn(() => createId()),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};
