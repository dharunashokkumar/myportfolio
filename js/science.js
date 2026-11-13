// /science: fills the live folding@home rows from /api/science (a pages function
// that reads f@h's public donor stats). Without javascript, or if the call fails,
// the static text written in the html stays. Output goes in with textContent only.
(function () {
  var box = document.querySelector('[data-sci]');
  if (!box || !window.fetch) return;

  function set(name, text) {
    var el = box.querySelector('[data-sci-' + name + ']');
    if (el) el.textContent = text;
  }
  function num(n) { return Number(n).toLocaleString('en-GB'); }
  function ago(iso) {
    var s = (Date.now() - Date.parse(iso)) / 1000;
    if (!(s >= 0)) return null;
    if (s < 3600) return 'under an hour ago';
    if (s < 86400) { var h = Math.round(s / 3600); return h + (h === 1 ? ' hour ago' : ' hours ago'); }
    var d = Math.round(s / 86400); return d + (d === 1 ? ' day ago' : ' days ago');
  }

  fetch('/api/science', { headers: { accept: 'application/json' } })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.status === 'not-yet') {
        set('status', 'folding, but the first work unit hasn’t been credited yet. folding@home publishes stats every few hours.');
        return;
      }
      if (data.status !== 'ok' || !data.fah) return;
      var f = data.fah, when = f.last ? ago(f.last) : null;
      var recent = f.last && (Date.now() - Date.parse(f.last)) < 2 * 86400 * 1000;
      set('status', when
        ? (recent ? 'on recently: the last work unit came back ' : 'switched off for now: the last work unit came back ') + when + '.'
        : 'no work units returned yet.');
      set('score', num(f.score) + ' points');
      set('wus', num(f.wus));
      if (f.rank && f.donors) set('rank', num(f.rank) + ' of ' + num(f.donors) + ' donors');
      if (f.id) {
        var a = box.querySelector('[data-sci-link]');
        if (a) a.href = 'https://stats.foldingathome.org/donor/id/' + encodeURIComponent(f.id);
      }
      if (data.fetched) set('fetched', 'numbers from folding@home, checked ' + (ago(data.fetched) || 'just now') + '.');
    })
    .catch(function () {});
})();
