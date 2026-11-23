export default function Services() {
  return (
    <section id="services" className="fade-in-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Services &amp; Expertise</span>
          <h2 className="section-title">Architectural &amp; Engineering Capabilities</h2>
          <p className="section-desc">
            Structured development practices translating ideas into production-ready software solutions.
          </p>
        </div>

        <div className="services-grid">
          {/* Capability 1 */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>Modern Frontend Engineering</h3>
            <p>
              Architecting modular, component-driven client applications in React.js and Next.js with strict state
              management and responsive precision.
            </p>
            <ul className="service-deliverables">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Single Page Applications &amp; Next-Gen Interfaces</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Mobile-First Responsive Layouts &amp; Micro-Interactions</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>WCAG 2.1 AA Accessibility &amp; Core Web Vitals Optimization</span>
              </li>
            </ul>
          </div>

          {/* Capability 2 */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3>Backend &amp; RESTful API Systems</h3>
            <p>
              Designing scalable server environments using Node.js, Express, PHP, and Python with clean MVC
              separation and token-based authentication.
            </p>
            <ul className="service-deliverables">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>RESTful API Development with Express &amp; Middleware</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Authentication (JWT, bcrypt), Role-Based Access Control</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Real-Time Events &amp; WebSockets Communication</span>
              </li>
            </ul>
          </div>

          {/* Capability 3 */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3>Database Architecture &amp; Modeling</h3>
            <p>
              Formulating relational SQL schemas and document-oriented MongoDB structures with normalization,
              indexing, and data integrity safeguards.
            </p>
            <ul className="service-deliverables">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>MongoDB &amp; Mongoose Aggregation Pipelines</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>MySQL Relational Schemas &amp; Foreign Key Constraints</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Data Sanitization &amp; Injection Defense</span>
              </li>
            </ul>
          </div>

          {/* Capability 4 */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
            </div>
            <h3>Full-Cycle Deployment &amp; Performance</h3>
            <p>
              Transforming local prototypes into live internet services through automated builds, PWA caching
              strategies, and asset minification.
            </p>
            <ul className="service-deliverables">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Continuous Deployment (Vercel, Netlify, Render, GitHub Pages)</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Progressive Web Apps (PWA) with Offline Service Workers</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Git &amp; GitHub Branching &amp; Collaborative Workflows</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
