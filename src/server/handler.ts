import { onError } from "@orpc/client";
import { RPCHandler } from "@orpc/server/fetch";
import { router } from "@/server/routes";

export const handler = new RPCHandler(router, {
  interceptors: [
    onError((err) => {
      console.error(err);
    }),
  ],
});
