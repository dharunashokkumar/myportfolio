/* global:true */
// Pages.jsx — the five main surfaces of the portfolio.
// Copy is lifted verbatim from the reference/*.html where possible.

function HomePage({ go }) {
  return (
    <div id="content">
      <h2>hello, i'm dharun ashokkumar</h2>
      <p>
        software developer and open source contributor from india. i build things that solve real problems — from <a onClick={() => go('projects')}>cloud lab platforms</a> to <a onClick={() => go('projects')}>linux system administration</a> to <a onClick={() => go('projects')}>web applications</a>.
        {' '}currently pursuing btech computer science at{' '}
        <span className="lpu-inline-badge">
          <img src="../../assets/lpulogo.jpeg" alt="" className="lpu-inline-logo" />
          <a href="https://www.lpu.in/" target="_blank" rel="noreferrer" className="lpu-inline-link">lovely professional university</a>
        </span>
        , punjab. i contribute to open source and believe in building in public.
      </p>
      <p>
        i <a onClick={() => go('projects')}>make</a>,{' '}
        <a onClick={() => go('reflections')}>reflect</a>, and{' '}
        <a onClick={() => go('resume')}>learn</a>.
      </p>
      <p>see my <span className="highlight"><a onClick={() => go('projects')}>open source contributions</a></span> here.....</p>
      <p><img src="../../assets/main.webp" title="image credit: meret vollenweider and sam nguyen, 201510" alt="Dharun Ashokkumar" /></p>
      <p>i work with docker, linux, rabbitmq, mongodb, and devops tools. my interests span web development, cloud infrastructure, cybersecurity, and machine learning.</p>
      <p>also: <a href="#" onClick={(e) => e.preventDefault()}>my old archive</a>, <a onClick={() => go('explorer')}>my explorer</a></p>
      <p><a onClick={() => go('reflections')}>read my thoughts</a>, or <a href="mailto:dharuna457@gmail.com">say hello</a>.</p>
      <SocialRow />
    </div>
  );
}

const PROJECTS = [
  { id: 'lpulabs',  title: 'lpu labs',      excerpt: 'cloud lab platform for students — self-hosted jupyter + ssh sandboxes',  date: '2026', tags: 'web development, docker', featured: true },
  { id: 'sysadmin', title: 'linux sysadmin', excerpt: 'managing + maintaining linux servers for campus and personal infra',   date: '2026', tags: 'ops, linux, ansible' },
  { id: 'dadscloud', title: 'dadscloud',    excerpt: 'india-based alternative to aws / gcp — affordable, regional',            date: '2024', tags: 'infrastructure' },
  { id: 'lfp',      title: 'lf projects explorer', excerpt: 'exploring all 765 linux foundation projects, one at a time',      date: '2025', tags: 'open source, writing' },
  { id: 'iotgarden', title: 'iot garden',   excerpt: 'rabbitmq + mongodb pipeline feeding soil/humidity sensors into a dash',   date: '2024', tags: 'iot, rabbitmq, mongodb' },
  { id: 'seclab',   title: 'seclab writeups', excerpt: 'ctf writeups and vulnerability research from campus security club',    date: '2023 — present', tags: 'cybersecurity' },
];

function ProjectsPage({ go }) {
  return (
    <div id="content">
      <h2>projects</h2>
      <p>a small sampling of what i've built — grouped into web, ops, iot and writing. hit <a onClick={() => go('contact')}>contact</a> if any of these spark something.</p>
      <ul className="archive thumblist">
        {PROJECTS.map(p => (
          <li key={p.id}>
            <a className="thumb-link" onClick={() => go('project:' + p.id)}>
              <span className="thumb" />
            </a>
            <p>
              <span className="title">{p.title}</span>
              <span className="excerpt">
                {p.excerpt} (<span className="date">{p.date}</span>
                {p.featured ? <> · <span className="featured_post">featured</span></> : null})
              </span>
              <span className="tags">{p.tags}</span>
            </p>
            <span className="arrow">↗</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReflectionsPage() {
  return (
    <div id="content">
      <h2>reflections</h2>
      <div className="disclaimer-panel">
        <p><strong>the archive is being rebuilt.</strong></p>
        <p>no reflection posts are published right now. this page is reserved for future writing — short essays on linux, infrastructure, and the craft of keeping things simple.</p>
        <p>some writings will land unpolished. that's intentional.</p>
      </div>
      <hr className="dotted" />
      <h3>planned pieces</h3>
      <ul>
        <li>&rarr; "why i run my own mail server in 2026" (draft)</li>
        <li>&rarr; notes from the linux foundation deep-read</li>
        <li>&rarr; a love letter to rabbitmq</li>
      </ul>
    </div>
  );
}

function ResumePage({ go }) {
  return (
    <div id="content">
      <h2>resume</h2>
      <p>the full editorial resume lives on its own page — larger type, handwritten annotations, the works. treat it as a stand-alone document.</p>
      <p><a href="#" onClick={(e) => e.preventDefault()}>open editorial resume ↗</a> &nbsp;·&nbsp; <a href="#" onClick={(e) => e.preventDefault()}>download pdf</a></p>
      <hr />
      <h3>tl;dr</h3>
      <ul>
        <li><strong>btech computer science</strong>, lovely professional university (2022 — 2026)</li>
        <li><strong>open source</strong>: cncf, apache, and small self-hosted tools</li>
        <li><strong>stack</strong>: docker, linux, rabbitmq, mongodb, node, python, go</li>
        <li><strong>interests</strong>: cloud infra, cybersecurity, iot</li>
      </ul>
      <p>for more context see <a onClick={() => go('about')}>about</a>, or <a onClick={() => go('contact')}>say hello</a>.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div id="content">
      <div className="about-wrapper">
        <div className="about-body">
          <h1 className="wiki-title">dharun ashokkumar</h1>
          <p><strong>dharun ashokkumar</strong> (born in india) is an india-based software developer, open-source contributor, and student of computer science at lovely professional university. his work spans web development, iot systems, linux infrastructure, and cybersecurity research.</p>
          <h3>early life and education</h3>
          <p>dharun's interest in technology began in high school with a battered thinkpad and a copy of ubuntu. he went on to enroll at <span className="lpu-inline-badge"><img src="../../assets/lpulogo.jpeg" alt="" className="lpu-inline-logo" /><a href="https://www.lpu.in/" target="_blank" rel="noreferrer" className="lpu-inline-link">lovely professional university</a></span> in 2022, pursuing a btech in computer science.</p>
          <h3>work</h3>
          <p>his notable projects include <em>lpu labs</em>, a browser-based cloud lab for students, and <em>dadscloud</em>, a small regional cloud provider experiment. he maintains a public writing archive at <a href="#" onClick={(e) => e.preventDefault()}>his portfolio</a> and contributes to open source under <a href="https://github.com/dharunashokkumar" target="_blank" rel="noreferrer">github.com/dharunashokkumar</a>.</p>
          <h3>philosophy</h3>
          <p>dharun advocates for <em>building in public</em> — shipping small things and reflecting on them openly, rather than announcing finished products. his site deliberately uses no frameworks, no emoji, and a single serif typeface.</p>
        </div>
        <aside className="wiki-infobox">
          <div className="infobox-image">
            <img src="../../assets/main.webp" alt="Dharun" />
            <div className="infobox-caption">watercolor portrait, 2024</div>
          </div>
          <table>
            <tbody>
              <tr><th colSpan={2} className="infobox-header">dharun ashokkumar</th></tr>
              <tr><td className="infobox-label">born</td><td>india</td></tr>
              <tr><td className="infobox-label">occupation</td><td>software developer</td></tr>
              <tr><td className="infobox-label">education</td><td>btech, computer science<br/>lovely professional univ.</td></tr>
              <tr><td className="infobox-label">known for</td><td>open source, linux, iot, cybersecurity</td></tr>
              <tr><td className="infobox-label">website</td><td><a href="https://dharunashokkumar.com" target="_blank" rel="noreferrer">dharunashokkumar.com</a></td></tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
}

const CONTACTS = [
  { h: 'github',    sub: 'source code, open-source contributions, and project repositories.', link: 'github.com/dharunashokkumar',      href: 'https://github.com/dharunashokkumar' },
  { h: 'linkedin',  sub: 'professional profile, work experience, and networking.',             link: 'linkedin.com/in/dharunashokkumar', href: 'https://linkedin.com/in/dharunashokkumar' },
  { h: 'email',     sub: 'for general inquiries, collaborations, and longer conversations.',   link: 'dharuna457@gmail.com',              href: 'mailto:dharuna457@gmail.com' },
  { h: 'instagram', sub: 'behind-the-scenes, personal updates, and photo posts.',              link: 'instagram.com/dharun_._ashok',     href: 'https://instagram.com/dharun_._ashok' },
];

function ContactPage() {
  return (
    <div id="content">
      <h2>contact</h2>
      <p>the fastest way to reach me is <a href="mailto:dharuna457@gmail.com">email</a>. for anything async, github issues work great too.</p>
      <div className="contact-grid">
        {CONTACTS.map(c => (
          <div className="contact-card" key={c.h}>
            <h3>{c.h}</h3>
            <p>{c.sub}</p>
            <a href={c.href} target="_blank" rel="noreferrer">{c.link}</a>
          </div>
        ))}
      </div>
      <hr className="dotted" />
      <p style={{ fontStyle: 'italic', opacity: .7 }}>response times: 24–48h during the week, longer on weekends.</p>
    </div>
  );
}

function ProjectDetailPage({ id, go }) {
  const p = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  return (
    <div id="content">
      <h6><a onClick={() => go('projects')}>← back to projects</a></h6>
      <h2>{p.title}</h2>
      <p><em>{p.excerpt}</em> ({p.date})</p>
      <p><img src="../../assets/linecube.png" alt="" /></p>
      <h3>what it is</h3>
      <p>a placeholder writeup — this kit stubs detail pages so you can see how the back-link + hero image + long-form copy fit together. swap this body for a real postmortem.</p>
      <h3>stack</h3>
      <ul>
        <li>tags: <em>{p.tags}</em></li>
        <li>status: <span className="featured_post">in progress</span></li>
      </ul>
      <p>for the full repo and commit history, see <a href="https://github.com/dharunashokkumar" target="_blank" rel="noreferrer">github</a>.</p>
    </div>
  );
}

function ExplorerPage({ go }) {
  return (
    <div id="content">
      <h2>lf projects explorer</h2>
      <p>all 765 linux foundation projects, read and catalogued one at a time. this is a placeholder stub — the live page is a separate mini-app under <code>/lfprojects/</code>.</p>
      <p><a onClick={() => go('home')}>← back home</a></p>
    </div>
  );
}

Object.assign(window, { HomePage, ProjectsPage, ReflectionsPage, ResumePage, AboutPage, ContactPage, ProjectDetailPage, ExplorerPage });
