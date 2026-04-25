/* global:true */
// App.jsx — the root. Handles page routing + wires the fixed chrome.

const { useState, useCallback } = React;

function App() {
  const [page, setPage] = useState('home');

  const go = useCallback((target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const onLockClick = (e) => {
    e.preventDefault();
    const pin = window.prompt('enter pin to access vault:');
    if (pin === null) return;
    window.alert(pin === '1947' ? 'vault unlocked. (demo only.)' : 'wrong pin.');
  };

  let body = null;
  if (page === 'home')                body = <HomePage go={go} />;
  else if (page === 'projects')       body = <ProjectsPage go={go} />;
  else if (page === 'reflections')    body = <ReflectionsPage />;
  else if (page === 'resume')         body = <ResumePage go={go} />;
  else if (page === 'about')          body = <AboutPage />;
  else if (page === 'contact')        body = <ContactPage />;
  else if (page === 'explorer')       body = <ExplorerPage go={go} />;
  else if (page.startsWith('project:')) body = <ProjectDetailPage id={page.slice(8)} go={go} />;
  else body = <HomePage go={go} />;

  const topPage = page.startsWith('project:') ? 'projects' : page;

  return (
    <>
      <TopSlider onExplore={() => go('explorer')} />
      <SecretLock onClick={onLockClick} />
      <div id="container">
        <Header page={topPage} go={go} />
        {body}
        <Footer go={go} />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
