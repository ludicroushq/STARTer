import type { JsonifiedValue } from "@orpc/openapi-client";
import type { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import { router } from "../routes";

export type Inputs = JsonifiedValue<InferRouterInputs<typeof router>>;
export type Outputs = JsonifiedValue<InferRouterOutputs<typeof router>>;
