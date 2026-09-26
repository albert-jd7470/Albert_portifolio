import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        
        <div className="about-header text-center">
          <span className="about-badge">ABOUT ME</span>
          <h2 className="about-title">
            Crafting Code,<br/>
            <span className="highlight">Shaping Experiences</span>
          </h2>
        </div>
        
        <div className="about-layout">
          {/* Left Column */}
          <div className="about-left">
            <div className="about-text-content">
              <p>
                I'm <strong>Albert JD</strong>, a software developer currently working at <strong>5SUMAT</strong>. I specialize in building cross-platform mobile applications using Flutter and Dart, with strong foundations in REST APIs, Firebase, and UI/UX design principles.
              </p>
              <p>
                I hold a <strong>BSc in Computer Science</strong> from MG University and completed advanced Flutter development training at SMEC Labs. My passion lies in delivering clean, performant, and visually stunning applications.
              </p>
            </div>
            
            <div className="about-info-cards">
              <div className="info-card">
                <div className="info-card-icon">💼</div>
                <div className="info-card-text">
                  <span className="info-card-title">Current Role</span>
                  <span className="info-card-desc">Software Developer @ 5SUMAT</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-card-icon">🎓</div>
                <div className="info-card-text">
                  <span className="info-card-title">Education</span>
                  <span className="info-card-desc">BSc Computer Science, MG University</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-card-icon">📍</div>
                <div className="info-card-text">
                  <span className="info-card-title">Location</span>
                  <span className="info-card-desc">Kerala, India</span>
                </div>
              </div>
            </div>
            
            <a href="/assets/AlbertJDFlutterDeveloperResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume-download interactive">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>
          </div>
          
          {/* Right Column */}
          <div className="about-right">
            <div className="developer-card">
              <div className="developer-image-wrapper">
                <img src="/project/maleDevelpoer.png" alt="Developer Illustration" className="developer-illustration" />
              </div>
              <div className="developer-card-footer">
                <h3 className="developer-name">Albert JD</h3>
                <span className="developer-role">Software Developer</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
