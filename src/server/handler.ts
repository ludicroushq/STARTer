import { onError } from "@orpc/client";
import { RPCHandler } from "@orpc/server/fetch";
import { router } from "@/server/routes";
import { logger } from "@/lib/logtape";

export const handler = new RPCHandler(router, {
  interceptors: [
    onError((err) => {
      logger.error`${err}`;
    }),
  ],
});
