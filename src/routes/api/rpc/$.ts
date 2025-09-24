/** biome-ignore-all lint/style/useFilenamingConvention: tanstack-start */
/** biome-ignore-all lint/style/useNamingConvention: tanstack-start */
import { createFileRoute } from "@tanstack/react-router";
import { createContext } from "@/server/context";
import { handler } from "@/server/handler";

async function handle({ request }: { request: Request }) {
  const { response } = await handler.handle(request, {
    context: await createContext(),
    prefix: "/api/rpc",
  });

  return response ?? new Response("Not Found", { status: 404 });
}

export const Route = createFileRoute("/api/rpc/$")({
  server: {
    handlers: {
      DELETE: handle,
      GET: handle,
      HEAD: handle,
      PATCH: handle,
      POST: handle,
      PUT: handle,
    },
  },
});
