/* Stepped demo: reveals an ordered list one step at a time, only when the reader asks.
   Without JavaScript every step is visible, so the page reads as a plain list.
   Markup: [data-steps-demo] > ol[data-steps] > li, plus [data-start] [data-next] [data-reset]. */
(() => {
  'use strict';
  document.querySelectorAll('[data-steps-demo]').forEach((demo) => {
    const steps = Array.from(demo.querySelectorAll('[data-steps] > li'));
    const start = demo.querySelector('[data-start]');
    const next = demo.querySelector('[data-next]');
    const reset = demo.querySelector('[data-reset]');
    const status = demo.querySelector('[data-status]');
    if (!steps.length || !next) return;
    let shown = 0;

    function render() {
      steps.forEach((li, i) => {
        li.hidden = i >= shown;
        li.classList.toggle('is-current', i === shown - 1);
      });
      if (start) start.disabled = shown > 0;
      next.disabled = shown === 0 || shown >= steps.length;
      if (!status) return;
      if (shown === 0) status.textContent = 'nothing started yet.';
      else if (shown < steps.length) status.textContent = `step ${shown} of ${steps.length}: ${steps[shown - 1].querySelector('.step-name').textContent}.`;
      else status.textContent = `done. ${steps.length} steps, and the request itself returned at step 1.`;
    }

    if (start) start.addEventListener('click', () => { shown = 1; render(); steps[0].focus(); });
    next.addEventListener('click', () => { if (shown < steps.length) shown++; render(); });
    if (reset) reset.addEventListener('click', () => { shown = 0; render(); (start || next).focus(); });
    steps.forEach((li) => li.setAttribute('tabindex', '-1'));
    demo.querySelectorAll('.demo-controls').forEach((c) => { c.hidden = false; });
    if (!start) shown = 1;
    render();
  });
})();
