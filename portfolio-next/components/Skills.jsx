export default function Skills() {
  return (
    <section id="skills" className="fade-in-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Proficiencies</span>
          <h2 className="section-title">Technical Skills Matrix</h2>
          <p className="section-desc">
            Core toolkits, languages, and frameworks employed in day-to-day software engineering.
          </p>
        </div>

        <div className="skills-matrix">
          {/* Frontend */}
          <div className="skill-cluster">
            <h3 className="cluster-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>Frontend</span>
            </h3>
            <div className="skill-badges">
              <div className="skill-row"><span>React.js / Next.js</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>JavaScript (ES6+)</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>HTML5 &amp; Modern CSS3</span><span className="skill-level-badge">Expert</span></div>
              <div className="skill-row"><span>Tailwind CSS</span><span className="skill-level-badge">Proficient</span></div>
              <div className="skill-row"><span>Responsive Web Design</span><span className="skill-level-badge">Expert</span></div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-cluster">
            <h3 className="cluster-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect></svg>
              <span>Backend &amp; APIs</span>
            </h3>
            <div className="skill-badges">
              <div className="skill-row"><span>Node.js</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Express.js</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>RESTful API Design</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Python</span><span className="skill-level-badge">Proficient</span></div>
              <div className="skill-row"><span>PHP &amp; Java</span><span className="skill-level-badge">Intermediate</span></div>
            </div>
          </div>

          {/* Database */}
          <div className="skill-cluster">
            <h3 className="cluster-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              <span>Data &amp; Storage</span>
            </h3>
            <div className="skill-badges">
              <div className="skill-row"><span>MongoDB</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Mongoose ORM</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>MySQL / SQL</span><span className="skill-level-badge">Proficient</span></div>
              <div className="skill-row"><span>JSON File Datastores</span><span className="skill-level-badge">Expert</span></div>
              <div className="skill-row"><span>Database Normalization</span><span className="skill-level-badge">Proficient</span></div>
            </div>
          </div>

          {/* Tooling */}
          <div className="skill-cluster">
            <h3 className="cluster-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              <span>DevOps &amp; Tools</span>
            </h3>
            <div className="skill-badges">
              <div className="skill-row"><span>Git &amp; GitHub</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Postman API Testing</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Vite &amp; NPM Ecosystem</span><span className="skill-level-badge">Advanced</span></div>
              <div className="skill-row"><span>Service Workers / PWA</span><span className="skill-level-badge">Proficient</span></div>
              <div className="skill-row"><span>Linux / CLI Scripting</span><span className="skill-level-badge">Proficient</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
