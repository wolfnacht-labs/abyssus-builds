export async function onRequest(context) {
  const kv = context.env.BUILDS_KV;
  const cacheKey = 'builds-data';
  const fallbackKey = 'builds-data-fallback';

  // fresh cache
  const cached = await kv.get(cacheKey, { type: 'json' });
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
        // permanent fallback copy in case of firebase failure/exceeding quota
        const fallback = await kv.get(fallbackKey, { type: 'json' });
        if (fallback) {
          return new Response(JSON.stringify(fallback), {
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'X-Data-Source': 'stale-fallback'
            }
          });
        }
        // no fallback, return error
        return new Response(JSON.stringify({ error: data.error }), {
          status: res.status,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      allDocs = allDocs.concat(data.documents || []);
      pageToken = data.nextPageToken || '';
    } while (pageToken);
  } catch (err) {
    // network failure
    const fallback = await kv.get(fallbackKey, { type: 'json' });
    if (fallback) {
      return new Response(JSON.stringify(fallback), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'X-Data-Source': 'stale-fallback'
        }
      });
    }
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const builds = allDocs.map(docToBuild);

  // success, update both
  context.waitUntil(kv.put(cacheKey, JSON.stringify(builds), { expirationTtl: 300 }));
  context.waitUntil(kv.put(fallbackKey, JSON.stringify(builds))); // no expiration

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
