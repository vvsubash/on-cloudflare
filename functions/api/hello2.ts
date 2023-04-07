import { Fetcher, PagesFunction, Response } from "@cloudflare/workers-types";

interface Env {
    SERVICE: Fetcher;
  }
  
  export const onRequest: PagesFunction<Env> = async (context) => {

    const {request} =context
    
    console.log("hit hello2")
    return new Response(request?.cf?.colo ?? "dfds");
  }
  