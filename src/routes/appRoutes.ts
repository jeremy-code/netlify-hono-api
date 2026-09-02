import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api.ts";
import { setupContextRoutes } from "./contextRoutes.ts";
import { setupPlatformRoutes } from "./platformRoutes.ts";

const setupAppRoutes = (app: Hono<AppEnv>): void => {
  app.get("/health", (context) => {
    return context.json({ status: "OK" });
  });
  setupContextRoutes(app);
  setupPlatformRoutes(app);
};

export { setupAppRoutes };
