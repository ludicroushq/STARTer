import { createFileRoute } from "@tanstack/react-router";
import { serve } from "@upstash/workflow/tanstack";

export const Route = createFileRoute("/api/workflows/hello-world/")({
  server: {
    handlers: serve(async (context) => {
      const result = await context.run("hello-world", () => ({
        message: "hello world",
      }));

      return result;
    }),
  },
});
