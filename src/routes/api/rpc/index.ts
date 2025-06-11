import { createServerFileRoute } from "@tanstack/react-start/server";
import { methods } from "./$";

export const ServerRoute = createServerFileRoute("/api/rpc/").methods(methods);
