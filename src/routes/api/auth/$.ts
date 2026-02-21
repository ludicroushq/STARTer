import { createFileRoute } from "@tanstack/react-router";
import { Auth } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      ANY: ({ request }) => {
        const auth = new Auth();
        return auth.handler(request);
      },
    },
  },
});
