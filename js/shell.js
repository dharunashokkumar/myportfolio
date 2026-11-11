/* In-page shell. Press ` (or follow the footer "terminal" link, or type "sudo" anywhere)
   to open a plain panel with a prompt. Output is written with textContent only.
   Without JavaScript the footer link goes to /txt/, the same content as plain files.
   The page list is hand-kept in /txt/index.json. */
(() => {
  'use strict';
  console.log("dharun ashokkumar builds systems software in rust, go and c, and runs d's labs: browser lab environments served from a server at home.\nthe source is the documentation. press ` for a terminal.");
  const PROMPT = 'guest@dharun.dev:~$';
  let index = null;
  let panel, out, input;
  const history = [];
  let hpos = 0;

  async function loadIndex() {
    if (index) return index;
    try {
      const res = await fetch('/txt/index.json', { cache: 'no-cache' });
      index = await res.json();
    } catch (e) {
      index = { pages: [] };
    }
    return index;
  }

  function print(text) {
    out.textContent += text + '\n';
    out.scrollTop = out.scrollHeight;
  }

  function build() {
    panel = document.createElement('section');
    panel.className = 'shell';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'terminal');
    const bar = document.createElement('div');
    bar.className = 'shell-bar';
    const name = document.createElement('span');
    name.textContent = 'terminal · type help';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'close';
    close.addEventListener('click', hide);
    bar.append(name, close);
    out = document.createElement('pre');
    out.setAttribute('role', 'log');
    out.setAttribute('aria-live', 'polite');
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.htmlFor = 'shell-input';
    label.textContent = PROMPT;
    input = document.createElement('input');
    input.id = 'shell-input';
    input.type = 'text';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('autocapitalize', 'off');
    form.append(label, input);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const line = input.value.trim();
      input.value = '';
      print(PROMPT + ' ' + line);
      if (line) { history.push(line); hpos = history.length; run(line); }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && hpos > 0) { hpos--; input.value = history[hpos]; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { hpos = Math.min(history.length, hpos + 1); input.value = history[hpos] || ''; e.preventDefault(); }
      else if (e.key === 'Escape') hide();
      else if (e.key === 'Tab' && input.value.trim()) { e.preventDefault(); complete(); }
    });
    panel.append(bar, out, form);
    (document.querySelector('#container') || document.body).append(panel);
    print('dharun.dev, as text. type help for commands, exit to close.');
  }

  function show() {
    if (!panel) build();
    panel.hidden = false;
    input.focus();
  }

  function hide() {
    if (panel) panel.hidden = true;
  }

  const COMMANDS = ['help', 'ls', 'cat', 'open', 'cd', 'pwd', 'whoami', 'uptime', 'man', 'clear', 'exit'];

  // Tab completes a command, or a page name after one. Several matches are listed.
  async function complete() {
    await loadIndex();
    const parts = input.value.split(/\s+/);
    const last = parts[parts.length - 1].toLowerCase();
    let pool = COMMANDS;
    if (parts.length > 1) {
      pool = parts[0] === 'man' ? ['dharun'] : index.pages.map((p) => p.name);
      if (parts[0] === 'ls') pool = ['projects', 'reflections', 'explainers'];
    }
    const hits = pool.filter((name) => name.startsWith(last));
    if (hits.length === 1) { parts[parts.length - 1] = hits[0]; input.value = parts.join(' ') + ' '; }
    else if (hits.length > 1) print(hits.join('  '));
  }

  function find(name) {
    const key = (name || '').replace(/^\/+|\/+$/g, '').replace(/\.(html|txt)$/, '').toLowerCase();
    return index.pages.find((p) => p.name === key || p.path === '/' + key || p.aliases?.includes(key));
  }

  async function run(line) {
    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(' ');
    await loadIndex();
    switch (cmd.toLowerCase()) {
      case 'help':
        print([
          'help              this list',
          'ls [section]      list pages (sections: projects, reflections, explainers)',
          'cat <page>        print a page as plain text',
          'open <page>       go to a page (cd works too)',
          'whoami            who runs this site',
          'uptime            how the home server is doing',
          'man dharun        the about page, as a man page',
          'clear             clear the screen',
          'tab               complete a command or a page name',
          'exit              close this panel',
        ].join('\n'));
        break;
      case 'ls': {
        const section = arg.replace(/\/$/, '');
        const rows = index.pages.filter((p) => (section ? p.section === section : !p.section));
        if (!rows.length) { print(`ls: ${arg}: no such section. try ls projects`); break; }
        rows.forEach((p) => print(p.name.padEnd(30) + p.title));
        if (!section) print('\nprojects/  reflections/  explainers/');
        break;
      }
      case 'cat': {
        const page = find(arg);
        if (!page) { print(`cat: ${arg || '(nothing)'}: no such page. try ls`); break; }
        if (!page.txt) { print(`cat: ${page.name}: no plain-text version yet. open ${page.name} instead.`); break; }
        try {
          const res = await fetch(page.txt);
          if (!res.ok) throw new Error(res.status);
          print(await res.text());
        } catch (e) {
          print(`cat: ${page.name}: could not fetch ${page.txt}`);
        }
        break;
      }
      case 'open':
      case 'cd': {
        if (!arg || arg === '~' || arg === '/') { window.location.href = '/'; break; }
        if (arg === '..') { window.history.back(); break; }
        const page = find(arg);
        if (!page) {
          const section = index.pages.some((p) => p.section === arg.replace(/\/$/, ''));
          if (section) { window.location.href = '/' + arg.replace(/\/$/, ''); break; }
          print(`${cmd}: ${arg}: no such page`);
          break;
        }
        window.location.href = page.path;
        break;
      }
      case 'pwd':
        print(window.location.pathname);
        break;
      case 'whoami':
        print(index.whoami || 'dharun ashokkumar.');
        break;
      case 'uptime':
        print(index.uptime || 'no live status yet. the machine is described at /homelab.');
        break;
      case 'man':
        if (arg !== 'dharun') { print(`no manual entry for ${arg || '(nothing)'}. try man dharun`); break; }
        try { print(await (await fetch('/txt/man-dharun.txt')).text()); } catch (e) { print('man: could not fetch the page.'); }
        break;
      case 'sudo':
        print('dharun is not in the sudoers file. this incident will be reported.');
        break;
      case 'clear':
        out.textContent = '';
        break;
      case 'exit':
      case 'logout':
        hide();
        break;
      case 'echo':
        print(arg);
        break;
      default:
        print(`${cmd}: command not found. type help`);
    }
  }

  function typing(target) {
    return target && (target.isContentEditable || /^(input|textarea|select)$/i.test(target.tagName));
  }

  let typed = '';
  document.addEventListener('keydown', (e) => {
    if (typing(e.target) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '`') { e.preventDefault(); if (panel && !panel.hidden) hide(); else show(); return; }
    if (e.key.length === 1) {
      typed = (typed + e.key.toLowerCase()).slice(-4);
      if (typed === 'sudo') { typed = ''; show(); }
    }
  });
  document.querySelectorAll('[data-shell-open]').forEach((a) => {
    a.addEventListener('click', (e) => { e.preventDefault(); show(); });
  });
})();
