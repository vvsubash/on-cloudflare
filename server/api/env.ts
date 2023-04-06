import {KVNamespace} from "@cloudflare/workers-types"

export default defineEventHandler(async({context}) => {
    const onclf:KVNamespace = context.cloudflare.env.onclf

    onclf.put("key", "initialvalue")

    return {
        key: 'data'
    }
})