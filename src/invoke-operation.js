export function invokeOperation({ resolveClient, operationId, parameters }) {
  return resolveClient.then((client) =>
    client
      .execute({ operationId, parameters })
      .then(({ data }) => new Response(data).text())
      .then((data) => ({ data: JSON.parse(data) }))
  );
}
