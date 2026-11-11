/* Trade ticket: the full indian cost stack for one nse equity round trip.
   Mirrors the cost model in my backtester: each charge rounded to paise, half up,
   then summed. Rates: zerodha retail schedule, read 2026-08-10. */
(() => {
  'use strict';
  const demo = document.querySelector('[data-cost-ticket]');
  if (!demo) return;
  const RATES = {
    intraday: { brokerage: 0.0003, cap: 20, stt: 0.00025, sttSide: 'sell', stamp: 0.00003 },
    delivery: { brokerage: 0, cap: 0, stt: 0.001, sttSide: 'both', stamp: 0.00015 },
    exchange: 0.0000307, sebi: 0.000001, gst: 0.18,
  };
  const paise = (v) => Math.round((v + Number.EPSILON) * 100) / 100;
  const inr = (v) => (v < 0 ? '−' : '') + '₹' + Math.abs(v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const $ = (id) => demo.querySelector('#' + id);
  const out = demo.querySelector('[data-ticket-out]');

  function charges(buyValue, sellValue, product) {
    const r = RATES[product];
    const turnover = buyValue + sellValue;
    const leg = (v) => (v > 0 && r.brokerage ? Math.min(v * r.brokerage, r.cap) : 0);
    const brokerage = leg(buyValue) + leg(sellValue);
    const stt = (r.sttSide === 'sell' ? sellValue : turnover) * r.stt;
    const exchange = turnover * RATES.exchange;
    const sebi = turnover * RATES.sebi;
    const stamp = buyValue * r.stamp;
    const gst = (brokerage + exchange + sebi) * RATES.gst;
    const rows = [
      ['brokerage', brokerage], ['stt', stt], ['exchange transaction charges', exchange],
      ['sebi fees', sebi], ['stamp duty', stamp], ['gst', gst],
    ].map(([name, v]) => [name, paise(v)]);
    return { rows, total: paise(rows.reduce((s, [, v]) => s + v, 0)) };
  }

  function cell(tag, text, cls) {
    const el = document.createElement(tag);
    el.textContent = text;
    if (cls) el.className = cls;
    return el;
  }

  function render() {
    const buy = parseFloat($('t-buy').value);
    const sell = parseFloat($('t-sell').value);
    const qty = parseInt($('t-qty').value, 10);
    const product = $('t-prod').value;
    out.replaceChildren();
    if (!(buy > 0) || !(sell > 0) || !(qty > 0)) { out.append(cell('p', 'enter a buy price, a sell price and a quantity above zero.')); return; }
    const bv = buy * qty, sv = sell * qty;
    const gross = paise(sv - bv);
    const c = charges(bv, sv, product);
    const net = paise(gross - c.total);
    const table = document.createElement('table');
    const body = document.createElement('tbody');
    const row = (a, b, cls) => { const tr = document.createElement('tr'); if (cls) tr.className = cls; tr.append(cell('th', a), cell('td', b, 'num')); tr.firstChild.scope = 'row'; body.append(tr); };
    row('turnover', inr(paise(bv + sv)));
    row('gross profit', inr(gross));
    c.rows.forEach(([name, v]) => row('− ' + name, inr(v)));
    row('total charges', inr(c.total), 'total');
    row('net profit', inr(net), 'total');
    table.append(body);
    const be = (100 * charges(bv, bv, product).total) / bv;
    out.append(table, cell('p', `${net < 0 && gross > 0 ? 'a winning trade that loses money. ' : ''}the price has to move ${be.toFixed(3)}% just to cover costs on this size.`));
  }

  demo.querySelector('[data-ticket-form]').addEventListener('input', render);
  demo.querySelector('[data-ticket-form]').addEventListener('submit', (e) => e.preventDefault());
  render();
})();
