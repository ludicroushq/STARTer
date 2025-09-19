import "dotenv/config";
import { logger } from "@/lib/logtape";
import { bossman } from ".";

async function run() {
  await bossman.start();
}

run().catch((err) => {
  logger.error(err);
  process.exit(1);
});
