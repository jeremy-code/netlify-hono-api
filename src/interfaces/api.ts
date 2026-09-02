import type { Context } from "@netlify/functions";

interface AppEnv {
  Bindings: {
    context: Context;
  };
}

export type { AppEnv };
