import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createRouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { createIsomorphicFn } from "@tanstack/react-start";
import { routes } from "../routes";

const getORPCClient = createIsomorphicFn()
  .server(() => createRouterClient(routes))
  .client((): RouterClient<typeof routes> => {
    const link = new RPCLink({
      url: `${window.location.origin}/api/rpc`,
    });

    return createORPCClient(link);
  });

export const orpcClient: RouterClient<typeof routes> = getORPCClient();

export const orpcTanstackQueryClient = createTanstackQueryUtils(orpcClient);
