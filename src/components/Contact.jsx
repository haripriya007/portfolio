export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">18 · Contact</div>
        <div className="section-divider" style={{ margin: '0 auto 16px' }} />
        <h2 className="section-title">Let's Connect</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 540, margin: '0 auto 8px' }}>
          Open to Senior Software Engineer, Principal Software Engineer, and Technical Lead roles
          at international companies in Dubai, Poland, Europe, and globally.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 0 }}>
          Available for relocation · Remote · Contract or Permanent
        </p>

        <div className="contact-links">
          <a href="mailto:harimsv007@gmail.com" className="contact-link">
            <span className="contact-link-icon">✉️</span>
            harimsv007@gmail.com
          </a>
          <a href="https://linkedin.com/in/hari1612" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            linkedin.com/in/hari1612
          </a>
          <a href="https://github.com/haripriya007" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </span>
            github.com/haripriya007
          </a>
          <a href="tel:+919600524541" className="contact-link">
            <span className="contact-link-icon">📞</span>
            +91 9600524541
          </a>
        </div>

        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          {['Python', 'Django', 'FastAPI', 'Flask', 'Microservices', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Machine Learning'].map(t => (
            <span key={t} className="badge accent">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
