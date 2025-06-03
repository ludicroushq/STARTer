import { contextOs } from "@/server";

export const getSession = contextOs.handler(async ({ context }) => {
  const { user } = context;

  if (user) {
    return {
      user,
    };
  }

  return null;
});
