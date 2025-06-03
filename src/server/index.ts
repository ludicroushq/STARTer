import { ORPCError, os } from "@orpc/server";
import type { getContext } from "./context";

export const contextOs = os.$context<Awaited<ReturnType<typeof getContext>>>();

export const unauthenticatedOs = contextOs.use(async ({ context, next }) => {
  const { user, session } = context;

  if (user || session) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      ...context,
      session,
      user,
    },
  });
});

export const authenticatedOs = contextOs.use(async ({ context, next }) => {
  const { user, session } = context;

  if (!user || !session) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      ...context,
      session,
      user,
    },
  });
});
