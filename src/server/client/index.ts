import { createORPCClient, ORPCError, onError } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import { createRouterClient } from '@orpc/server';
import { createTanstackQueryUtils } from '@orpc/tanstack-query';
import { createIsomorphicFn } from '@tanstack/react-start';
import toast from 'react-hot-toast';
import { logger } from '@/lib/logtape';
import { createContext } from '@/server/context';
import { router } from '@/server/routes';

const getORPCClient = createIsomorphicFn()
  .server(() =>
    createRouterClient(router, {
      /**
       * Provide initial context if needed.
       *
       * Because this client instance is shared across all requests,
       * only include context that's safe to reuse globally.
       * For per-request context, use middleware context or pass a function as the initial context.
       */
      context: createContext,
    })
  )
  .client((): RouterClient<typeof router> => {
    const link = new RPCLink({
      interceptors: [
        onError((error) => {
          if (error instanceof Error && error.name === 'AbortError') {
            return;
          }

          if (error instanceof ORPCError) {
            toast.error(error.message);
            return;
          }

          logger.error`${error}`;
          toast.error('An unexpected error occurred.');
        }),
      ],
      url: `${window.location.origin}/api/rpc`,
    });

    return createORPCClient(link);
  });

export const client: RouterClient<typeof router> = getORPCClient();

export const orpc = createTanstackQueryUtils(client);
