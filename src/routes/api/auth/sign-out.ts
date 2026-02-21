import { createFileRoute, redirect } from "@tanstack/react-router";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { Auth } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/sign-out")({
  server: {
    handlers: {
      GET: async () => {
        const auth = new Auth();
        await auth.api.signOut({
          headers: await getRequestHeaders(),
        });
        return redirect({ to: "/" });
      },
    },
  },
});
