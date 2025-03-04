export function getClientIp(event) {
  const forewardFor = event.node.req.headers["x-forwarded-for"]
  let clientIp: string;
  if (forewardFor) {
    clientIp = forewardFor.split(",")[0].trim()
  } else {
    clientIp = event.node.req.socket.remoteAddress
  }

  return clientIp
}
