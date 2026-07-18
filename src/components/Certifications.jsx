export default function Certifications() {
  const certs = [
    { icon: '☁️', name: 'AWS Certified', issuer: 'Amazon Web Services', color: 'var(--orange)', desc: 'Cloud architecture, services, and deployment best practices on AWS.' },
    { icon: '🤖', name: 'Automation Anywhere — Advanced RPA Professional', issuer: 'Automation Anywhere', color: 'var(--accent)', desc: 'Advanced robotic process automation design and implementation.' },
    { icon: '🐍', name: 'Advanced Python for Web Applications', issuer: 'Professional Certification', color: 'var(--green)', desc: 'Advanced Python web application development, frameworks, and deployment patterns.' },
    { icon: '🗣️', name: 'Amazon Lex', issuer: 'Amazon Web Services', color: 'var(--orange)', desc: 'Building conversational interfaces using AWS Lex for chatbots and voice applications.' },
    { icon: '💡', name: 'PL-900: Microsoft Power Platform Fundamentals', issuer: 'Microsoft', color: 'var(--accent)', desc: 'Power Platform concepts, capabilities, and integration with Microsoft services.' },
  ]

  return (
    <section id="certifications" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">15 · Certifications</div>
        <div className="section-divider" />
        <h2 className="section-title">Professional Certifications</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {certs.map((c, i) => (
            <div key={i} className="card" style={{ borderLeft: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '1.6rem' }}>{c.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{c.name}</div>
                  <div style={{ fontSize: '0.78rem', color: c.color }}>{c.issuer}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
