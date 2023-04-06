import { Fetcher, PagesFunction, Response } from "@cloudflare/workers-types";

interface Env {
    SERVICE: Fetcher;
  }
  
  export const onRequest: PagesFunction<Env> = async (context) => {
    return new Response("hi");
  }
  