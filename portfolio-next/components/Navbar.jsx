'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;
      let currentId = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = section.getAttribute('id');
        }
      });
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyTheme = (newTheme) => {
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="#home" className="brand-logo" aria-label="Semagn Legese Homepage">
          <div className="brand-badge">SL</div>
          <div>
            <span className="brand-title">Semagn Legese</span>
            <span className="brand-sub">Software Engineer</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
              Capabilities
            </a>
          </li>
          <li>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Nav Actions */}
        <div className="nav-actions">
          <div className="status-pill" title="Status: Active and seeking opportunities">
            <span className="status-dot"></span>
            <span>Available for Hire</span>
          </div>

          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <a href="#home" onClick={() => setIsMobileOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileOpen(false)}>About</a>
        <a href="#portfolio" onClick={() => setIsMobileOpen(false)}>Featured Projects</a>
        <a href="#services" onClick={() => setIsMobileOpen(false)}>Capabilities</a>
        <a href="#skills" onClick={() => setIsMobileOpen(false)}>Technical Skills</a>
        <a href="#testimonials" onClick={() => setIsMobileOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setIsMobileOpen(false)}>Contact Me</a>
        <Link href="/cv" onClick={() => setIsMobileOpen(false)}>Curriculum Vitae</Link>
      </nav>
    </header>
  );
}
