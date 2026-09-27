import './Skills.css';

const skills = [
  {
    name: 'Flutter & Dart',
    percent: '90%',
    description: 'Cross-platform mobile development with beautiful, natively compiled apps.'
  },
  {
    name: 'Figma to Flutter',
    percent: '95%',
    description: 'Pixel-perfect replication of Figma UI designs into responsive cross-platform apps.'
  },
  {
    name: 'REST APIs',
    percent: '88%',
    description: 'Integration of third-party APIs, payment gateways, and custom backends.'
  },
  {
    name: 'Firebase',
    percent: '85%',
    description: 'Real-time database, authentication, cloud functions, and hosting.'
  },
  {
    name: 'UI/UX Design',
    percent: '82%',
    description: 'Designing elegant, user-centric interfaces with modern design systems.'
  },
  {
    name: 'State Management',
    percent: '80%',
    description: 'BLoC, Provider, GetX patterns for scalable app architecture.'
  },
  {
    name: 'Git & DevOps',
    percent: '78%',
    description: 'Version control, CI/CD pipelines, and collaborative development workflows.'
  },
  {
    name: 'React.js',
    percent: '70%',
    description: 'Building interactive web interfaces with modern React, Hooks, and Vite.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <p className="skills-intro">
          The following represents my self-assessed proficiency and experience level across key domains.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass interactive">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percent">{skill.percent}</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: skill.percent }}
                ></div>
              </div>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
