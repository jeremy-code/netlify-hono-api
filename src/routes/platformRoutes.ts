import { platformController } from "../controllers/platformController";
import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api";

export function setupPlatformRoutes(app: Hono<AppEnv>): void {
  app.get("/platform", platformController);
}
