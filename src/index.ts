import type { Context, Config } from "@netlify/edge-functions";

import { Hono } from "hono";
import { handle } from "hono/netlify";
import type { AppEnv } from "./interfaces/api";
import { setupRoutes } from "./routes";
import { secureHeaders } from "hono/secure-headers";
import { logger } from "hono/logger";
import { every } from "hono/combine";

export default (req: Request, context: Context) => {
  const app = new Hono<AppEnv>();
  app.use("*", every(secureHeaders(), logger()));
  setupRoutes(app);

  return handle(app)(req, context);
};

export const config: Config = {
  path: ["/*"],
};
