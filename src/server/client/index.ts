import { createORPCClient } from "@orpc/client";
import { createJsonifiedRouterClient } from "@orpc/openapi";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { createIsomorphicFn } from "@tanstack/react-start";
import { router } from "../routes";
import { getContext } from "@/server/context";

const getORPCClient = createIsomorphicFn()
  .server(() =>
    createJsonifiedRouterClient(router, {
      /**
       * Provide initial context if needed.
       *
       * Because this client instance is shared across all requests,
       * only include context that's safe to reuse globally.
       * For per-request context, use middleware context or pass a function as the initial context.
       */
      context: getContext,
    }),
  )
  .client((): JsonifiedClient<RouterClient<typeof router>> => {
    const link = new OpenAPILink(router, {
      url: `${window.location.origin}/api/openapi`,
    });

    return createORPCClient(link);
  });

export const client: JsonifiedClient<RouterClient<typeof router>> =
  getORPCClient();

export const orpc = createTanstackQueryUtils(client);
