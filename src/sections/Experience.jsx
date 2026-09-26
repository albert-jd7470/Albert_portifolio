import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline">
          {/* Work Experience */}
          <div className="timeline-item glass interactive">
            <div className="timeline-meta">
              <span className="timeline-date">2026 – Present</span>
              <span className="timeline-tag">Work</span>
            </div>
            <div className="timeline-content">
              <h3>Software Developer</h3>
              <h4>5SUMAT company</h4>
              <p>
                Developing scalable cross-platform software solutions, collaborating with teams to build high-performance mobile applications, and driving innovation through clean code architecture and modern UI patterns.
              </p>
              <div className="timeline-tech">
                <span>Flutter</span>
                <span>Dart</span>
                <span>REST API</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
          
          {/* Training */}
          <div className="timeline-item glass interactive">
            <div className="timeline-meta">
              <span className="timeline-date">2025</span>
              <span className="timeline-tag">Training</span>
            </div>
            <div className="timeline-content">
              <h3>Flutter Development</h3>
              <h4>SMEC Labs</h4>
              <p>
                Completed advanced Flutter Development training covering UI/UX Design, Firebase integration, REST API consumption, and state management patterns like BLoC and Provider.
              </p>
              <div className="timeline-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>UI/UX</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item glass interactive">
            <div className="timeline-meta">
              <span className="timeline-date">2025</span>
              <span className="timeline-tag">Education</span>
            </div>
            <div className="timeline-content">
              <h3>BSc Computer Science</h3>
              <h4>MG University</h4>
              <p>
                Completed Bachelor's Degree in Computer Science, building strong foundations in algorithms, data structures, software engineering, and object-oriented programming principles.
              </p>
              <div className="timeline-tech">
                <span>Algorithms</span>
                <span>Data Structures</span>
                <span>OOP</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
