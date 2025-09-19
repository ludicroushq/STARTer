/** biome-ignore-all lint/style/useFilenamingConvention: tanstack-start */

import { createServerFileRoute } from "@tanstack/react-start/server";
import { createDashboard } from "pg-bossman";
import { auth } from "@/auth";
import { bossmanClient } from "@/worker/client";

const dashboard = createDashboard({
  basePath: "/admin/worker",
  client: bossmanClient,
});

async function handle({ request }: { request: Request }) {
  try {
    const hasPermission = await auth.api.userHasPermission({
      body: {
        permissions: {
          admin: ["access"],
        },
      },
      headers: request.headers,
    });

    if (!hasPermission.success) {
      return new Response("Unauthorized", { status: 401 });
    }
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }

  return dashboard(request);
}

export const ServerRoute = createServerFileRoute("/admin/worker/$").methods({
  DELETE: handle,
  GET: handle,
  HEAD: handle,
  OPTIONS: handle,
  PATCH: handle,
  POST: handle,
  PUT: handle,
});
