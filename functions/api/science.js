// GET /api/science — public Folding@home donor stats for the /science page.
//
// The browser can't ask api.foldingathome.org directly: it sends no
// Access-Control-Allow-Origin for other sites. So this asks on the page's behalf,
// keeps only the fields the page shows, and caches the answer at the edge for
// 30 minutes (F@h itself only updates every few hours). Nothing here talks to the
// home server: the numbers are F@h's public ones, so they're right even while
// the science container is switched off.
const DONOR = 'dharun.dak';
const UPSTREAM = `https://api.foldingathome.org/user/${encodeURIComponent(DONOR)}`;
const TTL = 1800;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${TTL}`,
      'access-control-allow-origin': '*',
      'x-robots-tag': 'noindex',
    },
  });
}

async function fetchDonor() {
  const res = await fetch(UPSTREAM, { headers: { accept: 'application/json' }, cf: { cacheTtl: TTL } });
  if (res.status === 404) return { status: 'not-yet', donor: DONOR, fah: null };
  if (!res.ok) throw new Error(`upstream ${res.status}`);
  const u = await res.json();
  return {
    status: 'ok',
    donor: DONOR,
    fah: {
      id: u.id ?? null,
      score: u.score ?? 0,
      wus: u.wus ?? 0,
      rank: u.rank ?? null,
      donors: u.users ?? null,
      // F@h reports "yyyy-mm-dd hh:mm:ss" in UTC.
      last: u.last ? `${u.last.replace(' ', 'T')}Z` : null,
      active_7: u.active_7 ?? 0,
      active_50: u.active_50 ?? 0,
    },
  };
}

export async function onRequestGet({ request, waitUntil }) {
  const cache = caches.default;
  const key = new Request(new URL('/api/science', request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  let res;
  try {
    res = json({ ...(await fetchDonor()), fetched: new Date().toISOString() });
  } catch {
    // Don't cache a failure for long; the page shows its static fallback.
    return new Response(JSON.stringify({ status: 'error', donor: DONOR, fah: null }), {
      status: 502,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'access-control-allow-origin': '*' },
    });
  }
  waitUntil(cache.put(key, res.clone()));
  return res;
}
