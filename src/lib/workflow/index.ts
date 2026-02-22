import { Client } from "@upstash/workflow";
import { Define } from "within-ts";
import { appUrl } from "@/config/app";
import { serverEnv } from "@/config/env/server";

export class Workflow extends Define.Service(
  "Workflow",
  () =>
    new Client({
      baseUrl: `${appUrl}/api/workflows`,
      token: serverEnv.QSTASH_TOKEN ?? "",
    })
) {}
