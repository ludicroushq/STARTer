/** biome-ignore-all lint/style/useFilenamingConvention: tanstack-start */
import { createServerFileRoute } from "@tanstack/react-start/server";
import { createContext } from "@/server/context";
import { handler } from "@/server/handler";

async function handle({ request }: { request: Request }) {
  const { response } = await handler.handle(request, {
    context: await createContext(),
    prefix: "/api/rpc",
  });

  return response ?? new Response("Not Found", { status: 404 });
}

export const methods = {
  DELETE: handle,
  GET: handle,
  HEAD: handle,
  PATCH: handle,
  POST: handle,
  PUT: handle,
};

export const ServerRoute = createServerFileRoute("/api/rpc/$").methods(methods);
