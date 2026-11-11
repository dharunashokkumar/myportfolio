// Terminal mode. Command-line clients (curl, wget, httpie) get the plain-text twin
// of a page instead of the HTML; browsers are untouched. The text files are
// hand-written in /txt/ and /explainers/*.txt. _routes.json keeps this off assets.
const TEXT_CLIENT = /^(curl|wget|httpie)\//i;

const PAGES = {
  '': 'index', '/projects': 'projects', '/projects/ds-labs': 'ds-labs', '/homelab': 'homelab',
  '/explainers': 'explainers', '/reflections': 'reflections', '/now': 'now', '/uses': 'uses',
  '/changelog': 'changelog', '/colophon': 'colophon', '/about': 'man-dharun',
};

export async function onRequest({ request, env, next }) {
  const ua = request.headers.get('user-agent') || '';
  if (!TEXT_CLIENT.test(ua) || !['GET', 'HEAD'].includes(request.method)) return next();

  const url = new URL(request.url);
  const path = url.pathname.replace(/\.html$/, '').replace(/\/+$/, '');
  let file = null;
  if (path in PAGES) file = `/txt/${PAGES[path]}.txt`;
  else if (/^\/explainers\/[a-z0-9-]+$/.test(path)) file = `${path}.txt`;
  if (!file) return next();

  const res = await env.ASSETS.fetch(new URL(file, url.origin));
  if (!res.ok) return next();
  return new Response(request.method === 'HEAD' ? null : res.body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'vary': 'user-agent',
      'x-robots-tag': 'noindex',
    },
  });
}
