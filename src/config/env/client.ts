import { createEnv } from "@t3-oss/env-core";

export const clientEnv = createEnv({
  client: {
    // VITE_...
  },
  clientPrefix: "VITE_",
  runtimeEnv: process.env,
});
