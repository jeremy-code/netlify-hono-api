import { HTTPException } from "hono/http-exception";
import type { AppEnv } from "../interfaces/api";
import type { Handler } from "hono/types";

const platformController: Handler<AppEnv, "/context"> = (context) => {
  let platform: Record<string, unknown> | undefined;

  if (globalThis.process?.env !== undefined) {
    platform = {
      ...platform,
      "process.env": process.env,
    };
  }

  if ("Deno" in globalThis) {
    platform = {
      ...platform,
      Deno: (globalThis as any).Deno,
    };
  }

  if ("Netlify" in globalThis) {
    platform = {
      ...platform,
      Netlify: (globalThis as any).Netlify,
    };
  }

  if (globalThis instanceof WorkerGlobalScope) {
    const workerGlobalScope = globalThis as unknown as WorkerGlobalScope;
    const { location, navigator } = workerGlobalScope;

    platform = {
      ...platform,
      globalThis: "WorkerGlobalScope",
      location: {
        hash: location.hash,
        host: location.host,
        hostname: location.hostname,
        href: location.href,
        origin: location.origin,
        pathname: location.pathname,
        port: location.port,
        protocol: location.protocol,
        search: location.search,
      },
      navigator: {
        mediaCapabilities: navigator.mediaCapabilities,
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        product: navigator.product,
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages,
        onLine: navigator.onLine,
      },
    };
  }

  if (globalThis instanceof DedicatedWorkerGlobalScope) {
    const dedicatedWorkerGlobalScope =
      globalThis as unknown as DedicatedWorkerGlobalScope;

    platform = {
      name: dedicatedWorkerGlobalScope.name,
      ...platform,
      globalThis: "SharedWorkerGlobalScope",
    };
  }

  if (platform === undefined) {
    throw new HTTPException(500, {
      message: "Could not find platform information",
    });
  }

  return context.json(platform);
};

export { platformController };
