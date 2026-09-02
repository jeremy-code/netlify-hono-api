import { contextController } from "../controllers/contextController";
import { Hono } from "hono";
import type { AppEnv } from "../interfaces/api";

export function setupContextRoutes(app: Hono<AppEnv>): void {
  app.get("/context", contextController);
}
