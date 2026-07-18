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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="mailto:harimsv007@gmail.com" title="Email">✉</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div className="hero-avatar" style={{ overflow: 'hidden', fontSize: 'unset' }}>
              <img
                src="/profile.jpg"
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
