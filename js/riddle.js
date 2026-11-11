/* The lock in the corner. It is a toy, not security: the answer's hash is right here,
   the vault page only checks sessionStorage, and anyone reading this can walk in.
   The answer is a word printed on this site, in the home server reflection.
   Rotate it by replacing ANSWER_SHA256 with the SHA-256 hex of a new lowercase answer. */
(() => {
  'use strict';
  const ANSWER_SHA256 = '74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b';
  const lock = document.querySelector('[data-riddle-open]');
  if (!lock || !window.crypto?.subtle) return;
  let box;

  async function sha256(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  function build() {
    box = document.createElement('form');
    box.className = 'riddle';
    box.setAttribute('aria-label', 'a riddle');
    const q = document.createElement('p');
    q.textContent = 'the server once lost a file that holds nothing, and ssh went with it. name the file.';
    const label = document.createElement('label');
    label.htmlFor = 'riddle-answer';
    label.textContent = 'answer';
    const input = document.createElement('input');
    input.id = 'riddle-answer';
    input.type = 'text';
    input.autocomplete = 'off';
    const go = document.createElement('button');
    go.type = 'submit';
    go.textContent = 'try';
    const out = document.createElement('p');
    out.setAttribute('role', 'status');
    box.append(q, label, input, go, out);
    box.addEventListener('submit', async (e) => {
      e.preventDefault();
      const guess = input.value.trim().toLowerCase().replace(/^\/?dev\//, '');
      if (await sha256(guess) === ANSWER_SHA256) {
        try { sessionStorage.setItem('vault_access', 'granted'); } catch (err) { /* private mode: the door stays shut */ }
        window.location.href = '/vault';
      } else {
        out.textContent = guess ? 'not that. it\'s in a reflection about a server.' : 'type something first.';
      }
    });
    box.addEventListener('keydown', (e) => { if (e.key === 'Escape') { box.hidden = true; lock.focus(); } });
    document.body.append(box);
  }

  lock.addEventListener('click', (e) => {
    e.preventDefault();
    if (!box) build();
    else box.hidden = !box.hidden;
    if (!box.hidden) box.querySelector('input').focus();
  });
})();
