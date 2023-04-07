export const onRequest = async(context: { request: any }) => {

  const {request} = context

  return new Response("request is being serverd from " + request.cf.colo)

}