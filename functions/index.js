export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const buildId = url.searchParams.get('build');

  // Get the normal static index.html first
  const response = await env.ASSETS.fetch(request);
  let html = await response.text();

  if (buildId) {
    try {
      const firestoreUrl = `https://firestore.googleapis.com/v1/projects/abyssus-builds/databases/(default)/documents/builds/${buildId}`;
      const res = await fetch(firestoreUrl);

      if (res.ok) {
        const data = await res.json();
        const buildName = data.fields?.buildname?.stringValue;

        if (buildName) {
          const title = `${escapeHtml(buildName)} - Abyssus Builds`;
          const ogUrl = `https://abyssusbuilds.pages.dev/?build=${buildId}`;

          html = html
            .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
            .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
            .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${ogUrl}$2`);
        }
      }
    } catch (err) {
      console.error('OG tag fetch failed:', err);
      // Falls through and just serves the default HTML
    }
  }

  return new Response(html, { headers: response.headers });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
