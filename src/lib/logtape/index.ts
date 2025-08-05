import { configureSync, getConsoleSink, getLogger } from "@logtape/logtape";

// Use synchronous configuration with minimal setup
const isDevelopment = process.env.NODE_ENV !== "production";

configureSync({
  sinks: {
    console: getConsoleSink(),
  },
  filters: {},
  loggers: [
    {
      category: [],
      lowestLevel: isDevelopment ? "debug" : "info",
      sinks: ["console"],
    },
  ],
  reset: true,
});

export const logger = getLogger();
