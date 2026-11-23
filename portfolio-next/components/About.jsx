import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="fade-in-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Professional Background</span>
          <h2 className="section-title">Built with Passion, Driven by Purpose</h2>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              I am <strong>Semagn Legese Mildega</strong>, based in the Sidama Region of Ethiopia. Currently
              pursuing a degree in Software Engineering, I combine theoretical foundations with hands-on
              full-stack development to solve genuine challenges.
            </p>
            <p>
              My engineering philosophy centers on delivering clean architecture, performant code, and
              intuitive user experiences. I work extensively across the entire web stack: from designing
              relational and NoSQL schemas to building RESTful backend microservices and crafting fluid,
              accessible user interfaces with React.
            </p>
            <p>
              Whether implementing live transport ETA calculations or multi-tenant database systems, I
              prioritize production reliability, security, and responsive performance across every screen size.
            </p>
            <div>
              <Link href="/cv" className="btn btn-secondary btn-sm">
                <span>Read Full Resume &amp; Academic Timeline</span>
                <svg className="btn-icon btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3>R &amp; D &bull; Analysis</h3>
              <p>Rigorous problem framing, requirement mapping, and software architecture exploration before code is written.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3>Full-Stack Craft</h3>
              <p>Seamless integration between reactive UI components, robust middleware, and optimized data layers.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Quality &amp; Testing</h3>
              <p>Defensive validation, clean error handling, resilient network fallbacks, and WCAG accessibility standards.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3>Maintainability</h3>
              <p>Modular component hierarchies, clear commit conventions, and predictable data flow patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
