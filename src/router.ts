import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/inter-tight/wght.css";
import "./styles.css";

export function createRouter() {
  const queryClient = new QueryClient();

  const router = routerWithQueryClient(
    createTanStackRouter({
      context: { queryClient },
      defaultPreload: "intent",
      defaultPreloadStaleTime: 0,
      routeTree,
      scrollRestoration: true,
    }),
    queryClient
  );

  /**
   * Tanstack Query is the source of truth for loader data.
   * As a result, changes to the query cache will invalidate the router.
   */
  queryClient.getQueryCache().subscribe((event) => {
    if (event.type === "updated" && event.query.state.isInvalidated) {
      router.invalidate();
    }
  });

  return router;
}

declare module "@tanstack/react-router" {
  // biome-ignore lint/nursery/useConsistentTypeDefinitions: declaration merging
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
