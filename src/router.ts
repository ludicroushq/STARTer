import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/inter-tight/wght.css";
import "./styles.css";
import { NotFound } from "./routes/-components/not-found";

export function getRouter() {
  const queryClient = new QueryClient();

  const router = routerWithQueryClient(
    createTanStackRouter({
      context: { queryClient },
      defaultNotFoundComponent: NotFound,
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
