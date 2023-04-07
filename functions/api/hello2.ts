import "@cloudflare/workers-types"
import { KVNamespace, PagesFunction } from "@cloudflare/workers-types"

interface Env {
  KV: KVNamespace
}

export const onRequest:PagesFunction<Env> (async(context: { request: any }) => {

  const {request} = context

  return new Response(request.cf.colo)

})