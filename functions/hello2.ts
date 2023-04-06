import { Fetcher, PagesFunction } from "@cloudflare/workers-types";

interface Env {
    SERVICE: Fetcher;
  }
  
  export const onRequest: PagesFunction<Env> = async (context) => {
    return context.env.SERVICE.fetch(context.request);
  }
  