export default defineEventHandler(async ({ context }) => {
  const onclf: KVNamespace = context.cloudflare.env.onclf;
  const data = await onclf.get("one");
  return {
    hello: data,
  };
});
