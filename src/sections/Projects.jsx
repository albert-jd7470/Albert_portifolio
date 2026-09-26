import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Decoration Shop Website',
    tags: ['HTML', 'CSS'],
    description: 'A beautiful and responsive website for a decoration shop, built with pure HTML and CSS.',
    image: '/project/project-1.png'
  },
  {
    title: 'Grocery Delivery App',
    tags: ['Flutter', 'Firebase'],
    description: 'A feature-rich grocery delivery application offering real-time tracking and easy order management.',
    image: '/project/project-2.png'
  },
  {
    title: 'E-Commerce Shopping App',
    tags: ['Flutter', 'Firebase', 'Google Auth', 'REST API', 'Provider'],
    description: 'A comprehensive shopping app with secure authentication, API integration, and robust state management.',
    image: '/project/project-3.png'
  },
  {
    title: 'Musium - Music App',
    tags: ['Flutter', 'Real Music API', 'Google Auth', 'State Management'],
    description: 'A fully working music streaming app integrated with real music APIs, user authentication, and smooth playback.',
    image: '/project/project-4.png'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="projects-section">
      <div className="section-container">
        
        <h2 className="section-title text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>
          Featured <span className="highlight">Projects</span>
        </h2>
        
        <div className="carousel-container">
          <button className="carousel-btn prev interactive" onClick={prevProject}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="carousel-view">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((proj, i) => (
                <div key={i} className="carousel-slide">
                  <div className="project-card interactive">
                    <div className="project-image-container">
                      <img src={proj.image} alt={proj.title} className="project-image" />
                    </div>
                    <div className="project-content">
                      <div className="project-tags">
                        {proj.tags.map((tag, j) => (
                          <span key={j} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      <h3 className="project-title">{proj.title}</h3>
                      <p className="project-desc">{proj.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next interactive" onClick={nextProject}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, i) => (
            <button 
              key={i} 
              className={`indicator interactive ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
