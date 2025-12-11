import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { logger } from "@/lib/logtape";
import { routes } from "./routes";

export const handler = new RPCHandler(routes, {
  interceptors: [
    onError((error) => {
      logger.error(String(error));
    }),
  ],
});
