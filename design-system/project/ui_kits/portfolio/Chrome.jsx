/* global:true */
// Chrome.jsx — the global scaffolding: header/footer, fixed lock, top-slider.

const { useState } = React;

function Header({ page, go }) {
  const links = [
    ['home', 'home'],
    ['projects', 'projects'],
    ['reflections', 'reflections'],
    ['resume', 'resume'],
    ['about', 'about'],
    ['contact', 'contact'],
  ];
  return React.createElement('div', { id: 'header' },
    React.createElement('h1', null,
      React.createElement('a', { onClick: () => go('home') }, 'Dharun Ashokkumar')
    ),
    React.createElement('nav', null,
      React.createElement('ul', null,
        links.map(([id, label]) => React.createElement('li', { key: id },
          React.createElement('a', {
            className: page === id ? 'active-page' : '',
            onClick: () => go(id),
          }, label)
        ))
      )
    )
  );
}

function Footer({ go }) {
  const quick = [
    ['projects', 'projects'], ['reflections', 'reflections'],
    ['resume', 'resume'], ['about', 'about'], ['contact', 'contact'],
  ];
  return React.createElement('div', { id: 'footer' },
    React.createElement('nav', null,
      React.createElement('ul', null,
        quick.map(([id, label]) => React.createElement('li', { key: id },
          React.createElement('a', { onClick: () => go(id) }, label)
        ))
      )
    ),
    React.createElement('p', null, '© dharun ashokkumar · built in public · ',
      React.createElement('a', { href: '#', onClick: (e) => e.preventDefault() }, 'colophon'))
  );
}

function TopSlider({ onExplore }) {
  const [open, setOpen] = useState(false);
  return React.createElement('div', { className: 'top-slider' + (open ? ' open' : '') },
    React.createElement('div', { className: 'slider-content' },
      React.createElement('p', null, "i am currently exploring all 765 linux foundation projects. want to see what i've found so far?"),
      React.createElement('button', { className: 'slider-btn', onClick: onExplore }, 'explore it')
    ),
    React.createElement('div', { className: 'slider-tab', onClick: () => setOpen(o => !o) },
      React.createElement(TuxIcon),
      React.createElement('span', { className: 'tab-label' }, open ? 'push me up!' : 'pull me down!'),
      React.createElement('span', { className: 'tab-arrow' }, open ? '▲' : '▼')
    )
  );
}

function SecretLock({ onClick }) {
  return React.createElement('a', {
    id: 'secret-lock', title: 'secret vault', onClick,
  }, React.createElement(LockIcon));
}

function SocialRow() {
  return React.createElement('div', { className: 'social-links' },
    React.createElement('a', { href: 'https://github.com/dharunashokkumar', target: '_blank', rel: 'noopener', title: 'GitHub' }, React.createElement(GithubIcon)),
    React.createElement('a', { href: 'https://linkedin.com/in/dharunashokkumar', target: '_blank', rel: 'noopener', title: 'LinkedIn' }, React.createElement(LinkedinIcon)),
    React.createElement('a', { href: 'mailto:dharuna457@gmail.com', title: 'Email' }, React.createElement(MailIcon)),
    React.createElement('a', { href: 'https://instagram.com/dharun_._ashok', target: '_blank', rel: 'noopener', title: 'Instagram' }, React.createElement(InstagramIcon))
  );
}

Object.assign(window, { Header, Footer, TopSlider, SecretLock, SocialRow });
