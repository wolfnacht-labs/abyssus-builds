export async function onRequest(context) {
  const cache = caches.default;
  const cacheKey = new Request(context.request.url, context.request);

  let response = await cache.match(cacheKey);
  if (response) return response;

  const apiKey = 'AIzaSyCBpZluc0v2dxu1GhgQv8SucSKwmM2ESdU';
  const baseUrl = `https://firestore.googleapis.com/v1/projects/abyssus-builds/databases/(default)/documents/builds`;

  let allDocs = [];
  let pageToken = '';

  try {
    do {
      const url = `${baseUrl}?key=${apiKey}&pageSize=300${pageToken ? `&pageToken=${pageToken}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        // Don't cache errors — return them as-is so we can see what's wrong
        return new Response(JSON.stringify({ error: data.error }), {
          status: res.status,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      allDocs = allDocs.concat(data.documents || []);
      pageToken = data.nextPageToken || '';
    } while (pageToken);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const builds = allDocs.map(docToBuild);

  response = new Response(JSON.stringify(builds), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300'
    }
  });

  context.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}
