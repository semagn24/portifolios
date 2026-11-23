'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Semagn,\n\nYou have received a message from your portfolio website:\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\n--\nSent from Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:semagnlegese@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatusMessage('Thank you! Your email client has been opened to finalize and send your message.');
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="fade-in-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Discuss New Opportunities</h2>
          <p className="section-desc">
            Available for software engineering roles, full-stack development contracts, and technical collaborations.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info Cards */}
          <div className="contact-info-panel">
            <div className="contact-cards-group">
              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h4>Primary Location</h4>
                  <p>Sidama Region, Ethiopia (UTC+3)</p>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h4>Direct Email</h4>
                  <p>semagnlegese@gmail.com</p>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h4>Work Status</h4>
                  <p>Open to Full-Time, Remote &amp; Freelance</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Connect Across Platforms
              </h4>
              <div className="social-buttons-grid">
                <a href="https://github.com/semagn24" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub Profile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>

                <a href="https://linkedin.com/in/semagn" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn Profile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>

                <a href="https://t.me/Semu_je" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Telegram Message">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <span>Telegram</span>
                </a>

                <a href="https://youtube.com/@semagnlegesemldaga376" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="YouTube Channel">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  <span>YouTube</span>
                </a>

                <a href="https://tiktok.com/@semagn_22" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  <span>TikTok</span>
                </a>

                <a href="https://instagram.com/semu.4423" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {statusMessage && (
                <div className="form-status success" role="alert">
                  {statusMessage}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    required
                    placeholder="Alex Mercer"
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    placeholder="alex@company.com"
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Project Details or Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                  placeholder="Describe your project, role opportunity, or timeline..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Launching Email...' : 'Send Message'}</span>
                <svg className="btn-icon btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
