'use client';

import { useState } from 'react';

const projectsData = [
  {
    id: 'food-ordering',
    title: 'Food Ordering & Delivery System',
    slug: 'projects/food-ordering',
    badge: 'Production Ready',
    category: 'fullstack',
    image: '/images/food-ordering.png',
    description:
      'End-to-end food ordering platform featuring dynamic menu browsing, shopping cart state management, checkout validation, and interactive order simulation.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: '/projects/food-ordering.html',
    sourceUrl: 'https://github.com/semagn24/portfolio',
  },
  {
    id: 'transport-tracking',
    title: 'Hawassa Public Transit & ETA Tracking',
    slug: 'projects/hawassa-transit',
    badge: 'Geo • Real-Time',
    category: 'realtime fullstack',
    image: '/images/transport-tracking.png',
    description:
      'Transit monitoring system for Hawassa City featuring real-time vehicle route tracking, a Dynamic Fare Calculator based on distance, and an integrated passenger feedback portal.',
    tags: ['Node.js', 'Express', 'Mongoose', 'Real-Time ETA'],
    demoUrl: '/projects/transport-tracking.html',
    sourceUrl: 'https://github.com/semagn24/portfolio',
  },
  {
    id: 'employee-management',
    title: 'Employee Records & Payroll System',
    slug: 'projects/employee-mgmt',
    badge: 'REST API',
    category: 'fullstack enterprise',
    image: '/images/employee-management.png',
    description:
      'Corporate HR platform providing comprehensive CRUD functionality, staff directory filtering, role assignments, salary records, and department analytics.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: '/projects/employee-management.html',
    sourceUrl: 'https://github.com/semagn24/portfolio',
  },
  {
    id: 'course-registration',
    title: 'University Course Portal & GPA Engine',
    slug: 'projects/course-reg',
    badge: 'Academic Engine',
    category: 'enterprise',
    image: '/images/course-registration.png',
    description:
      'Academic portal featuring dynamic course enrollments, prerequisites validation, student transcript generator, automated GPA calculations, and administrative curriculum control.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'GPA Engine'],
    demoUrl: '/projects/course-registration.html',
    sourceUrl: 'https://github.com/semagn24/portfolio',
  },
  {
    id: 'movie-streaming',
    title: 'Cinematic Media Streaming Platform',
    slug: 'projects/cinematic-stream',
    badge: 'Multimedia',
    category: 'fullstack',
    image: '/images/movie-streaming.png',
    description:
      'Entertainment application showcasing catalog filtering by genre, watchlist persistence, trailer modal integration, and a premium tier membership model with embedded playback.',
    tags: ['React', 'Media API', 'CSS3', 'Video Player'],
    demoUrl: '/projects/movie-streaming.html',
    sourceUrl: 'https://github.com/semagn24/portfolio',
  },
];

export default function Projects({ onOpenPreview }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="portfolio" className="fade-in-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Production Portfolio</span>
          <h2 className="section-title">Each Project is an Engineered Solution</h2>
          <p className="section-desc">
            Explore five fully functional systems built with purpose, ranging from real-time transit telemetry
            to transactional commerce and academic management.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-bar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            type="button"
          >
            All Projects (5)
          </button>
          <button
            onClick={() => setActiveFilter('fullstack')}
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            type="button"
          >
            Full-Stack Apps (3)
          </button>
          <button
            onClick={() => setActiveFilter('realtime')}
            className={`filter-btn ${activeFilter === 'realtime' ? 'active' : ''}`}
            type="button"
          >
            Real-Time &amp; Geo (1)
          </button>
          <button
            onClick={() => setActiveFilter('enterprise')}
            className={`filter-btn ${activeFilter === 'enterprise' ? 'active' : ''}`}
            type="button"
          >
            Enterprise &amp; University (2)
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="mockup-dot dot-red"></span>
                  <span className="mockup-dot dot-yellow"></span>
                  <span className="mockup-dot dot-green"></span>
                </div>
                <span className="mockup-slug">{p.slug}</span>
                <span className="mockup-badge">{p.badge}</span>
              </div>

              <div className="project-media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={p.demoUrl}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <svg className="btn-icon btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>

                  <button
                    onClick={() => onOpenPreview(p.demoUrl, p.title)}
                    className="btn btn-outline btn-sm btn-preview"
                    type="button"
                  >
                    <span>Quick Preview</span>
                  </button>

                  <a
                    href={p.sourceUrl}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} source code on GitHub`}
                  >
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
