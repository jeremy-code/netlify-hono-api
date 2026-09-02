import { contextController } from "../controllers/contextController.ts";
import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api.ts";

const setupContextRoutes = (app: Hono<AppEnv>): void => {
  app.get("/context", contextController);
};

export { setupContextRoutes };
