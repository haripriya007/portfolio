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
              8+ years building enterprise-scale Python backend systems, distributed microservices,
              and full-stack applications for global financial and technology companies.
              Open to senior engineering roles at Revolut, Booking.com, Amazon, Google, Stripe,
              Adyen, Emirates NBD, Careem, Noon, and other international product companies.
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.914 1.186.092-.923.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12.017 22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="mailto:harimsv007@gmail.com" title="Email">✉</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div className="hero-avatar" style={{ overflow: 'hidden', fontSize: 'unset' }}>
              <img
                src="/portfolio/profile.jpg"
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
