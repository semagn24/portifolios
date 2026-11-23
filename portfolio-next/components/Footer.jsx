'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="brand-logo">
            <div className="brand-badge">SL</div>
            <div>
              <span className="brand-title">Semagn Legese Mildega</span>
              <span className="brand-sub">Crafted with Next.js &amp; Precision</span>
            </div>
          </div>

          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#services">Capabilities</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link href="/cv">CV</Link></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Semagn Legese Mildega. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top" type="button">
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
