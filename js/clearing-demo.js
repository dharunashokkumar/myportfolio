/* An illustrative cash-netting walkthrough; independent of the Rust engine. */
(() => {
  'use strict';
  const demo = document.querySelector('[data-clearing-demo]');
  if (!demo) return;
  const scenarios = {
    uneven: [['a', 'b', 100], ['b', 'c', 70], ['c', 'a', 40]],
    balanced: [['a', 'b', 100], ['b', 'c', 100], ['c', 'a', 100]]
  };
  const stage = demo.querySelector('[data-stage]');
  const previous = demo.querySelector('[data-previous]');
  const next = demo.querySelector('[data-next]');
  const select = demo.querySelector('select');
  let step = 0;

  function render() {
    const trades = scenarios[select.value];
    const balances = { a: 0, b: 0, c: 0 };
    trades.forEach(([from, to, amount]) => {
      balances[from] -= amount;
      balances[to] += amount;
    });
    const gross = trades.reduce((sum, trade) => sum + trade[2], 0);
    const net = Object.values(balances).reduce((sum, value) => sum + Math.max(value, 0), 0);
    const titles = ['the original obligations', 'put a clearing house in the middle', 'net each member’s position', 'settle the remaining balances'];
    let content = '';
    if (step === 0) {
      content = '<ol>' + trades.map(([from, to, amount]) => `<li>member ${from} owes member ${to} ${amount} units.</li>`).join('') + '</ol>' +
        `<p class="demo-total">${gross} units in original obligations.</p>`;
    } else if (step === 1) {
      content = '<p>replace each bilateral obligation with two legs through the clearing house.</p><ol>' +
        trades.map(([from, to, amount]) => `<li>member ${from} → clearing house → member ${to}: ${amount} units on each leg.</li>`).join('') +
        '</ol><p>the amounts have not been netted yet. the clearing house is now the counterparty on each side.</p>';
    } else if (step === 2) {
      content = '<p>for each member, subtract what they owe from what they are owed.</p><table><caption>net cash positions</caption><thead><tr><th scope="col">member</th><th scope="col">net position</th></tr></thead><tbody>' +
        Object.entries(balances).map(([name, balance]) => `<tr><th scope="row">member ${name}</th><td>${balance < 0 ? 'pays ' + -balance : balance > 0 ? 'receives ' + balance : 'settled: 0'} units</td></tr>`).join('') +
        '</tbody></table><p class="small-note">the positions sum to zero: every unit paid is a unit received.</p>';
    } else {
      const remaining = Object.entries(balances).filter(([, balance]) => balance !== 0);
      content = remaining.length ? '<ul>' + remaining.map(([name, balance]) => `<li>${balance < 0 ? 'member ' + name + ' pays the clearing house ' + -balance : 'the clearing house pays member ' + name + ' ' + balance} units.</li>`).join('') + '</ul>' : '<p>every member’s net position is zero. no cash transfers remain.</p>';
      content += `<p class="demo-total">${gross} units gross → ${net} units payable after netting.<br>${gross - net} units offset.</p><p class="small-note">the payable total counts incoming payments once; the clearing house pays out the same amount.</p>`;
    }
    // Only fixed local scenarios and numeric calculations are interpolated.
    stage.innerHTML = `<p class="eyebrow">step ${step + 1} of 4</p><h3>${titles[step]}</h3>${content}`;
    previous.disabled = step === 0;
    next.disabled = step === 3;
  }
  previous.addEventListener('click', () => { if (step > 0) step--; render(); });
  next.addEventListener('click', () => { if (step < 3) step++; render(); });
  demo.querySelector('[data-reset]').addEventListener('click', () => { step = 0; render(); });
  select.addEventListener('change', () => { step = 0; render(); });
  demo.querySelectorAll('.demo-controls').forEach(control => { control.hidden = false; });
  render();
})();
