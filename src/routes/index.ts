import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api";
import { setupContextRoutes } from "./contextRoutes";
import { setupPlatformRoutes } from "./platformRoutes";

const setupRoutes = (app: Hono<AppEnv>): void => {
  app.get("/health", (context) => {
    return context.json({ status: "OK" });
  });
  setupContextRoutes(app);
  setupPlatformRoutes(app);
};

export { setupRoutes };
