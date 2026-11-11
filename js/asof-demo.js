/* As-of slider: strike through every row not yet published on the chosen date. */
(() => {
  'use strict';
  const demo = document.querySelector('[data-asof-demo]');
  if (!demo) return;
  const range = demo.querySelector('#asof-range');
  const label = demo.querySelector('[data-asof-label]');
  const status = demo.querySelector('[data-asof-status]');
  const rows = Array.from(demo.querySelectorAll('[data-asof-rows] tr'));
  function render() {
    const day = parseInt(range.value, 10); // 0 = 1 july
    label.textContent = `${day + 1} july`;
    let known = 0;
    rows.forEach((tr) => {
      const future = parseInt(tr.dataset.pub, 10) > day;
      tr.classList.toggle('struck', future);
      if (!future) known++;
    });
    status.textContent = `on ${day + 1} july a backtest may use ${known} of ${rows.length} rows. the struck ones are the future. the rows are illustrative.`;
  }
  range.hidden = false;
  range.addEventListener('input', render);
  render();
})();
