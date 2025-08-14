import { createMessageBuilder } from 'zod-validation-error';

export const messageBuilder = createMessageBuilder({
  includePath: false,
  maxIssuesInMessage: 1,
  prefix: null,
});
