import {KVNamespace} from "@cloudflare/workers-types"

export default defineEventHandler(async ({context}) => {
    const onclf:KVNamespace = context.cloudflare.env.onclf

   await onclf.put("key", "initialvalue")

   const newData = async() =>   await onclf.get("key")

   console.log(newData)
    return newData ?? "nodata"

 
})