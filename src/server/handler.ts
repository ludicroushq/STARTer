import { onError } from "@orpc/client";
import { RPCHandler } from "@orpc/server/fetch";
import { logger } from "@/lib/logtape";
import { router } from "@/server/routes";

export const handler = new RPCHandler(router, {
  interceptors: [
    onError((err) => {
      logger.error`${err}`;
    }),
  ],
});
