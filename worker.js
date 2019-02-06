self.importScripts('https://unpkg.com/typescript@3.3.1/lib/typescript.js');

self.addEventListener('fetch', function(event) {
  event.respondWith(fly(event.request));
});

async function fly(request) {
  const response = await fetch(request);
  if (!request.url.endsWith('.ts')) {
    return response;
  }

  let content = await response.text();
  if (response.ok) {
    try {
      content = ts.transpileModule(content, { compilerOptions: { target: 'esnext' } }).outputText;
      console.log('Transpiled', request.url);
    } catch (error) {
      debugger;
    }
  }

  return new Response(content, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...response.headers,
      'Content-Type': 'text/javascript',
    }
  });
}
