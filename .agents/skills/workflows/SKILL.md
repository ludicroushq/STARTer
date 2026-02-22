---
name: workflows
description: Upstash QStash workflow library for background jobs and durable execution. Activate when working with background jobs, async workflows, or task queues.
---

# Workflows

We use `@upstash/workflow` (QStash) for background jobs and durable execution.

Docs: https://upstash.com/docs/workflow/getstarted

Prefer keeping the number of steps shorter, but keep it reasonable and durable.

## Files

All workflows are API routes under `src/routes/api/workflows/`. For each workflow create a named folder with an `index.ts` that exports a TanStack Start file route using `serve()` from the TanStack adapter.

## Quick Reference

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { serve } from "@upstash/workflow/tanstack";

export const Route = createFileRoute("/api/workflows/example/")({
  server: {
    handlers: serve(async (context) => {
      const result = await context.run("step-name", () => ({
        data: "value",
      }));

      return result;
    }),
  },
});
```

Key APIs:
- `context.run("name", fn)` — run a step
- `context.sleep("name", seconds)` — sleep
- `context.call("name", { url, method, body })` — HTTP call as a step

## Environment Variables

Required: `QSTASH_TOKEN`, `QSTASH_URL`, `QSTASH_CURRENT_SIGNING_KEY`, `QSTASH_NEXT_SIGNING_KEY`
