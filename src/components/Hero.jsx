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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-[...]
              </a>
              <a href="mailto:harimsv007@gmail.com" title="Email">✉</a>
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
