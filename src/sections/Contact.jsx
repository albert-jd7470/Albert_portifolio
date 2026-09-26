import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }

    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/916235637470?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        
        <div className="contact-header">
          <h2 className="contact-title">
            Let's <span className="highlight">Work Together</span>
          </h2>
          <p className="contact-subtitle">
            Got a project in mind? Let's build something amazing together.
          </p>
        </div>
        
        <div className="contact-layout">
          {/* Left Column */}
          <div className="contact-left">
            <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <a href="tel:+916235637470" className="info-value interactive">+91 6235637470</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:albertjd7470@gmail.com" className="info-value interactive">albertjd7470@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Kerala, India</span>
                </div>
              </div>
            </div>
            
            <div className="contact-socials">
              <a href="https://instagram.com/albert_jd_" target="_blank" rel="noopener noreferrer" className="social-icon interactive">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/albert-jd" target="_blank" rel="noopener noreferrer" className="social-icon interactive">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://youtube.com/@albertjd7470?si=yrP5Y-x6tY0vy_96" target="_blank" rel="noopener noreferrer" className="social-icon interactive">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.567!2d76.6046!3d9.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMTMuMyJOIDc2wrAzNicxNi42IkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          
          {/* Right Column (Form) */}
          <div className="contact-right">
            <div className="contact-form-card">
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>YOUR NAME</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleChange}
                      className="interactive"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className="interactive"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>SUBJECT</label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Project Discussion" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="interactive"
                  />
                </div>
                
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea 
                    name="message"
                    rows="6" 
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="interactive"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-submit interactive">
                  Send Message 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
