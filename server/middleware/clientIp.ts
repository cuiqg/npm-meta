export default defineEventHandler((event) => {
  const clientIp = getClientIp(event)
  event.context.clientIp = clientIp
});
