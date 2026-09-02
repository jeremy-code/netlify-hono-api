import type { Context } from "@netlify/edge-functions";

interface AppEnv {
  Bindings: {
    context: Context;
  };
}

export type { AppEnv };
