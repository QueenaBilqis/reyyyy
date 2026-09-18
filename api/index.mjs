import server from "../dist/server/server.js";

export default async function handler(request, response) {
  const host = request.headers.host ?? "localhost";
  const protocol = request.headers["x-forwarded-proto"] ?? "https";
  const url = `${protocol}://${host}${request.url ?? "/"}`;

  const headers = new Headers();
  for (const [name, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) {
      headers.set(name, value.join(", "));
    } else if (value !== undefined) {
      headers.set(name, value);
    }
  }

  const incomingRequest = new Request(url, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request,
    // Node requires this when a request stream is used as a fetch body.
    duplex: "half",
  });
  const result = await server.fetch(incomingRequest);

  response.statusCode = result.status;
  result.headers.forEach((value, name) => response.setHeader(name, value));
  response.end(Buffer.from(await result.arrayBuffer()));
}