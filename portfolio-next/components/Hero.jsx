'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = 'semagnlegese@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const el = document.createElement('textarea');
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow-container">
            <span className="hero-eyebrow">Full Stack Developer &bull; Sidama, Ethiopia</span>
          </div>

          <h1 className="hero-title">
            Engineering High-Performance Web Applications &amp;{' '}
            <span className="highlight">Scalable Systems.</span>
          </h1>

          <p className="hero-lead">
            Hi, I'm Semagn Legese Mildega. A Software Engineering student and Full Stack Developer. I build
            resilient, accessible, end-to-end web applications with modern React, Node.js, and efficient
            database architectures.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              <span>Explore Featured Work</span>
              <svg className="btn-icon btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <Link href="/cv" className="btn btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>View CV</span>
            </Link>

            <button
              onClick={copyEmail}
              className="copy-email-btn"
              title="Click to copy email address"
              type="button"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>semagnlegese@gmail.com</span>
              <span className={`copy-tooltip ${copied ? 'show' : ''}`}>
                Copied to clipboard!
              </span>
            </button>
          </div>

          {/* Proof Numbers Row */}
          <div className="hero-proof-bar">
            <div className="proof-item">
              <span className="proof-number">5+</span>
              <span className="proof-label">Live Systems</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">10+</span>
              <span className="proof-label">Core Stacks</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">100%</span>
              <span className="proof-label">Responsive</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">&lt; 24h</span>
              <span className="proof-label">Direct Response</span>
            </div>
          </div>
        </div>

        {/* Avatar Visual */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-frame">
              <img
                src="/profile.jpg"
                alt="Semagn Legese Mildega"
                className="avatar-image"
              />
            </div>

            <div className="floating-chip chip-top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>Full-Stack Engineering</span>
            </div>

            <div className="floating-chip chip-bottom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Sidama, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
