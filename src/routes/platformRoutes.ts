import { platformController } from "../controllers/platformController.ts";
import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api.ts";

const setupPlatformRoutes = (app: Hono<AppEnv>): void => {
  app.get("/platform", platformController);
};

export { setupPlatformRoutes };
