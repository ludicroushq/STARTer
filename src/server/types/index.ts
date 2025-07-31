import type { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import type { router } from "../routes";

export type Inputs = InferRouterInputs<typeof router>;
export type Outputs = InferRouterOutputs<typeof router>;
