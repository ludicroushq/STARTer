import { createMessageBuilder } from "zod-validation-error";

export const messageBuilder = createMessageBuilder({
  maxIssuesInMessage: 1,
  prefix: null,
});
