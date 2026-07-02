export async function onRequest(context) {
  const cache = caches.default;
  const cacheKey = new Request(context.request.url, context.request);

  // Serve from Cloudflare's edge cache
  let response = await cache.match(cacheKey);
  if (response) return response;

  const apiKey = 'AIzaSyCBpZluc0v2dxu1GhgQv8SucSKwmM2ESdU';
  const baseUrl = `https://firestore.googleapis.com/v1/projects/abyssus-builds/databases/(default)/documents/builds`;

  let allDocs = [];
  let pageToken = '';

  do {
    const url = `${baseUrl}?key=${apiKey}&pageSize=300${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const res = await fetch(url);
    const data = await res.json();
    allDocs = allDocs.concat(data.documents || []);
    pageToken = data.nextPageToken || '';
  } while (pageToken);

  const builds = allDocs.map(docToBuild);

  response = new Response(JSON.stringify(builds), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300' // cache for 5 minutes
    }
  });

  context.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

function docToBuild(doc) {
  const id = doc.name.split('/').pop();
  const out = { firebaseId: id };
  for (const [key, value] of Object.entries(doc.fields || {})) {
    out[key] = parseValue(value);
  }
  return out;
}

function parseValue(value) {
  if (value.stringValue !== undefined) return value.stringValue;
  if (value.integerValue !== undefined) return parseInt(value.integerValue, 10);
  if (value.doubleValue !== undefined) return value.doubleValue;
  if (value.booleanValue !== undefined) return value.booleanValue;
  if (value.timestampValue !== undefined) return value.timestampValue;
  if (value.arrayValue !== undefined) return (value.arrayValue.values || []).map(parseValue);
  if (value.nullValue !== undefined) return null;
  return null;
}
