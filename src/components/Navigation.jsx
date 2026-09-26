import './Navigation.css';

export default function Navigation() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="main-nav glass">
      <div className="nav-brand" onClick={() => scrollTo('hero')}>
        <span className="logo-bracket">&lt;</span>
        <span className="text-primary">JD</span>
        <span className="logo-bracket">/&gt;</span>
      </div>
      <div className="nav-links">
        <button onClick={() => scrollTo('work')} className="nav-link interactive">Work</button>
        <button onClick={() => scrollTo('about')} className="nav-link interactive">About</button>
        <button onClick={() => scrollTo('skills')} className="nav-link interactive">Skills</button>
        <button onClick={() => scrollTo('experience')} className="nav-link interactive">Experience</button>
        <button onClick={() => scrollTo('contact')} className="nav-link interactive">Contact</button>
        <a href="/assets/AlbertJDFlutterDeveloperResume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume-btn interactive">
          Resume
        </a>
      </div>
    </nav>
  );
}
