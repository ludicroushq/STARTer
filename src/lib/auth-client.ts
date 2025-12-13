import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { createAuthClient } from "better-auth/react";
import { serverEnv } from "@/config/env/server";

const authClientFn = createIsomorphicFn()
  .server(() =>
    createAuthClient({
      baseURL: serverEnv.BETTER_AUTH_URL,
      fetchOptions: {
        headers: getRequestHeaders(),
      },
    })
  )
  .client(() => createAuthClient({}));

export const authClient = authClientFn;
