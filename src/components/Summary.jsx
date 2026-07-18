export default function Summary() {
  const highlights = [
    { icon: '🐍', title: 'Python Engineering', desc: 'Django, FastAPI, Flask — production-grade backend systems' },
    { icon: '🏗️', title: 'System Architecture', desc: 'Distributed microservices, API design, backend architecture' },
    { icon: '🗄️', title: 'Database Expertise', desc: 'PostgreSQL, MySQL, MongoDB, Oracle, Redis — design & optimisation' },
    { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, Jenkins, CI/CD pipelines' },
    { icon: '🤖', title: 'AI & ML Integration', desc: 'Machine learning pipelines, predictive analytics, AI tooling' },
    { icon: '🏦', title: 'Banking Domain', desc: 'Credit risk, Basel compliance, FX, OTC, Prime Brokerage' },
  ]

  return (
    <section id="summary">
      <div className="container">
        <div className="section-label">01 · Professional Summary</div>
        <div className="section-divider" />
        <h2 className="section-title">Who I Am</h2>

        <div className="summary-card">
          <p>
            I am a <strong style={{ color: 'var(--text-primary)' }}>Principal Software Engineer and Technical Lead</strong> with <strong style={{ color: 'var(--text-primary)' }}>8+ years of experience</strong> designing,
            developing, and delivering enterprise-scale Python backend systems, REST APIs, microservices, and full-stack applications
            across global financial services and technology companies.
          </p>
          <p>
            At <strong style={{ color: 'var(--accent)' }}>Cambridge Mobile Telematics</strong>, I lead the architecture and development of high-throughput Python FastAPI platforms
            processing millions of events daily. Previously at <strong style={{ color: 'var(--accent)' }}>Bank of America</strong>, I was a key engineer on the Counterparty Default Risk Technology
            (CDRT) platform — building mission-critical systems supporting Counterparty Credit Risk (CCR), Basel regulatory reporting,
            FX, Futures &amp; Options, OTC Clearing, Prime Brokerage, and Repo risk management.
          </p>
          <p>
            I am an <strong style={{ color: 'var(--text-primary)' }}>individual contributor and technical mentor</strong> who takes full ownership of systems from architecture through
            to production. My expertise spans <strong style={{ color: 'var(--text-primary)' }}>Python, Django, FastAPI, Flask</strong>, PostgreSQL, MongoDB, MySQL,
            asyncio, OAuth2/JWT security, machine learning integration, and cloud-native deployments on AWS with Docker and Kubernetes.
          </p>
        </div>

        <div className="summary-highlights">
          {highlights.map(h => (
            <div key={h.title} className="highlight-item">
              <div className="highlight-icon">{h.icon}</div>
              <div className="highlight-text">
                <strong>{h.title}</strong>
                <span>{h.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
