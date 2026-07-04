export async function onRequest(context) {
  const kv = context.env.BUILDS_KV;
  const cacheKeyName = 'builds-data';

  // KV first
  const cached = await kv.get(cacheKeyName, { type: 'json' });
  if (cached) {
    return new Response(JSON.stringify(cached), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      }
    });
  }

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

  // Store in KV, 5 min expiration time
  context.waitUntil(
    kv.put(cacheKeyName, JSON.stringify(builds), { expirationTtl: 300 })
  );

  return new Response(JSON.stringify(builds), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300'
    }
  });
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
