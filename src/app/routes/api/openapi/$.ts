import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { ZodToJsonSchemaConverter } from "@orpc/zod";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { getContext } from "@/server/context";
import { router } from "@/server/routes";
import { config } from "@/config";

const handler = new OpenAPIHandler(router, {
  plugins: [
    new OpenAPIReferencePlugin({
      schemaConverters: [new ZodToJsonSchemaConverter()],
      specGenerateOptions: {
        info: {
          title: config.name,
          version: "0.0.0",
        },
      },
    }),
  ],
});

async function handle({ request }: { request: Request }) {
  const { response } = await handler.handle(request, {
    context: await getContext(),
    prefix: "/api/openapi",
  });

  return response ?? new Response("Not Found", { status: 404 });
}

export const APIRoute = createAPIFileRoute("/api/openapi/$")({
  DELETE: handle,
  GET: handle,
  HEAD: handle,
  PATCH: handle,
  POST: handle,
  PUT: handle,
});
