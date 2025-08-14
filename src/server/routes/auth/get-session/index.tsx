import { contextOs } from '@/server';

export const getSession = contextOs.handler(({ context }) => {
  const { user } = context;

  if (user) {
    return {
      user,
    };
  }

  return null;
});
