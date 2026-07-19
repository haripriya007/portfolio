export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Principal Software Engineer · 8+ Years</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-name">Haripriya</span>{' '}
              <span className="hero-title-accent">M</span>
            </h1>

            <p className="hero-subtitle">
              Principal Software Engineer · Python Full-Stack Developer · Technical Lead
            </p>

            <p className="hero-description">
              Senior Python Backend Engineer with 8+ years of experience building scalable backend systems, cloud-native applications, and high-performance APIs using Python, FastAPI, Django, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, and Microservices. Open to new opportunities.
            </p>

            <div className="hero-badges">
              {['Python', 'Django', 'FastAPI', 'Flask', 'REST APIs', 'Microservices', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Machine Learning'].map(t => (
                <span key={t} className="badge accent">{t}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary">View Experience</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">8+</div>
                <div className="hero-stat-label">Years Exp.</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">6</div>
                <div className="hero-stat-label">Companies</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">5</div>
                <div className="hero-stat-label">Certifications</div>
              </div>
            </div>

            <div className="hero-social mt-16">
              <a href="https://linkedin.com/in/hari1612" target="_blank" rel="noreferrer" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/haripriya007" target="_blank" rel="noreferrer" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:harimsv007@gmail.com" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div className="hero-avatar" style={{ overflow: 'hidden', fontSize: 'unset' }}>
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Haripriya M — Principal Software Engineer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={e => { e.target.style.display = 'none'; e.target.parentElement.textContent = '👩‍💻'; }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>Haripriya M</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>📍 India · Open to Relocation</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--accent)', marginTop: 2 }}>🌍 Dubai · Poland · Europe · Remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
