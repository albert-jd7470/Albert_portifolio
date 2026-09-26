import CharacterCanvas from '../components/CharacterCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h2 className="hero-title">
              <span className="block">Albert JD</span>
            </h2>
            <div className="hero-roles">
              <span className="role">Software Developer</span>
              <span className="dot">•</span>
              <span className="role">Flutter Engineer</span>
              <span className="dot">•</span>
              <span className="role">UI/UX Designer</span>
            </div>
            
            <p className="hero-description">
              Passionate Software Developer at 5SUMAT, crafting high-performance cross-platform applications with elegant interfaces and scalable architecture.
            </p>
            
            <div className="hero-actions">
              <a href="#work" className="btn interactive">View My Work</a>
              <a href="#contact" className="btn btn-outline interactive">Let's Talk</a>
            </div>
          </div>
        </div>
        
        <div className="hero-canvas-wrapper">
          <CharacterCanvas />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
