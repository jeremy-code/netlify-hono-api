import type { AppEnv } from "../interfaces/api";
import type { Handler } from "hono/types";

const contextController: Handler<AppEnv, "/context"> = (context) => {
  const netlifyContext = context.env.context;

  return context.json({
    account: netlifyContext.account,
    deploy: netlifyContext.deploy,
    geo: netlifyContext.geo,
    ip: netlifyContext.ip,
    params: netlifyContext.params,
    requestId: netlifyContext.requestId,
    server: netlifyContext.server,
    site: netlifyContext.site,
    url: netlifyContext.url,
  });
};

export { contextController };
