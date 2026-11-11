/* A virtual machine's states and the libvirt calls that move it. Runs in the browser only.
   Without JavaScript the table of legal moves above the buttons is the whole demo. */
(() => {
  'use strict';
  const demo = document.querySelector('[data-vm-demo]');
  if (!demo) return;
  const calls = {
    virDomainDefineXML: { from: ['not defined'], to: 'shut off', says: 'the xml is stored. libvirt now knows the machine, but nothing runs.' },
    virDomainCreate: { from: ['shut off'], to: 'running', says: 'qemu starts and the guest boots.' },
    virDomainSuspend: { from: ['running'], to: 'paused', says: 'the vcpus stop. memory stays where it is, so resuming is instant.' },
    virDomainResume: { from: ['paused'], to: 'running', says: 'the vcpus carry on from the exact instruction they stopped at.' },
    virDomainShutdown: { from: ['running'], to: 'shut off', says: 'the guest is asked to shut down, through acpi. a guest that ignores it keeps running; vmmanager treats this as a request, not a result.' },
    virDomainDestroy: { from: ['running', 'paused'], to: 'shut off', says: 'qemu is killed. nothing is written back, the same as pulling the plug. the name is scarier than the call: the definition survives.' },
    virDomainUndefine: { from: ['shut off'], to: 'not defined', says: 'the definition is removed. the disk image stays on disk unless you delete it yourself.' },
  };
  // only errors libvirt really gives for these calls are quoted; the rest says it's outside this model.
  function refusal(name, state) {
    if (state === 'shut off' && ['virDomainSuspend', 'virDomainShutdown', 'virDomainDestroy', 'virDomainResume'].includes(name)) return 'libvirt: requested operation is not valid: domain is not running.';
    if ((state === 'running' || state === 'paused') && name === 'virDomainCreate') return 'libvirt: requested operation is not valid: domain is already running.';
    if (state === 'not defined') return 'there is no domain by that name yet. define it first.';
    return `that isn't a move from "${state}" in this simplified model.`;
  }

  let state = 'not defined';
  const box = demo.querySelector('[data-vm-buttons]');
  const out = demo.querySelector('[data-vm-state]');
  Object.keys(calls).forEach((name) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.style.textTransform = 'none';
    b.addEventListener('click', () => {
      const c = calls[name];
      if (c.from.includes(state)) {
        const was = state;
        state = c.to;
        out.textContent = `${name}: ${was} → ${state}. ${c.says}`;
      } else {
        out.textContent = `${name} refused while ${state}. ${refusal(name, state)}`;
      }
    });
    box.append(b);
  });
  box.hidden = false;
  out.textContent = 'state: not defined. start with virDomainDefineXML.';
})();
