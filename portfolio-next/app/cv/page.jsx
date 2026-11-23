'use client';

import Link from 'next/link';

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="cv-page-wrapper" style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh', padding: '3rem 1.5rem' }}>
      <main
        className="cv-container"
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          background: 'var(--bg-surface)',
          padding: '3.5rem',
          borderRadius: '16px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          color: 'var(--text-primary)',
        }}
      >
        <header style={{ borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1.75rem', marginBottom: '2.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.35rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                Semagn Legese Mildega
              </h1>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.25rem' }}>
                Software Engineering Student &bull; Full Stack Developer
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent-primary)' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Hawassa, Sidama Region, Ethiopia</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent-primary)' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+251 996506278</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent-primary)' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:semagnlegese@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>semagnlegese@gmail.com</a>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent-primary)' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <a href="https://github.com/semagn24" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>github.com/semagn24</a>
            </span>
          </div>
        </header>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '1.2rem' }}>
            Executive Summary
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Proactive Software Engineering student with proven proficiency in building modern web applications, scalable REST APIs, and responsive user interfaces. Experienced across the full development lifecycle from database design to client-side performance tuning. Seeking full-stack engineering roles to deliver tangible value through elegant, reliable software.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '1.2rem' }}>
            Technical Proficiencies
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React.js', 'Next.js', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'MongoDB & Mongoose', 'MySQL / SQL', 'PHP', 'Python', 'Java', 'RESTful APIs', 'Git & GitHub', 'Service Workers & PWA'].map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '1.2rem' }}>
            Featured Engineering Projects
          </h3>

          <div style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Food Ordering &amp; Delivery System</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>React &bull; Node.js &bull; MongoDB &bull; Express</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Engineered a comprehensive food ordering platform featuring interactive menu filtering, shopping cart state management, checkout validation, and real-time order lifecycle tracking.
            </p>
          </div>

          <div style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Hawassa Public Transit &amp; ETA Tracking</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>Node.js &bull; Express &bull; Mongoose &bull; Real-Time</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Created a public transport tracking system for Hawassa City including live bus coordinate monitoring, distance-based dynamic fare calculations, and a passenger feedback module.
            </p>
          </div>

          <div style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Employee Records &amp; Management Dashboard</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>React &bull; Node.js &bull; Express &bull; MongoDB</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Developed an administrative HR platform implementing full CRUD capabilities, department filtering, profile search, and secure record retention.
            </p>
          </div>

          <div style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>University Course Portal &amp; GPA Engine</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>PHP &bull; MySQL &bull; JavaScript</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Built an academic portal with dynamic course enrollment, prerequisites logic, automated transcript generation, and a real-time student GPA calculator.
            </p>
          </div>

          <div style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Cinematic Media Streaming Platform</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>React &bull; TMDB API &bull; CSS3</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Crafted a video streaming UI with genre exploration, personal watchlists, trailer popups, and mock subscription tiers with embedded playback.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '1.2rem' }}>
            Education
          </h3>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>B.Sc. in Software Engineering</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>In Progress</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Wachamo University &bull; Ethiopia</p>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Secondary &amp; Preparatory Education</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 500 }}>Completed</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Hawassa Tabour Secondary &amp; Preparatory School</p>
          </div>
        </section>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', justifyContent: 'center' }}>
          <button onClick={handlePrint} className="btn btn-primary" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print or Save as PDF</span>
          </button>
          <a href="/Semagn_Legese_Mildega_CV_Updated (1).pdf" download className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>Download Original PDF</span>
          </a>
          <Link href="/" className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 19"></polyline></svg>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
