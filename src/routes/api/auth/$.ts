/** biome-ignore-all lint/style/useFilenamingConvention: tanstack-start */
/** biome-ignore-all lint/style/useNamingConvention: tanstack-start */
import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/auth";

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => auth.handler(request),
      POST: ({ request }) => auth.handler(request),
    },
  },
});
