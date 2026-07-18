export default function Awards() {
  const awards = [
    { icon: '🏆', title: '"Ms. Confident of UIT"', sub: 'United Institute of Technology · 2016', desc: 'Recognised for leadership, confidence, and academic excellence during undergraduate studies.' },
    { icon: '⭐', title: '"Social Star Performer"', sub: 'Industry Recognition · 2018', desc: 'Awarded for outstanding collaboration, teamwork, and impactful contributions within professional and academic communities.' },
    { icon: '🎯', title: 'Production Excellence', sub: 'Bank of America · 2024', desc: 'Recognised for zero-incident Basel regulatory reporting delivery across multiple audit cycles at the CDRT platform.' },
    { icon: '🚀', title: 'Technical Leadership', sub: 'Cambridge Mobile Telematics · 2025', desc: 'Principal-level ownership of the telematics data engineering platform, mentoring junior engineers and driving architectural decisions.' },
  ]

  return (
    <section id="awards">
      <div className="container">
        <div className="section-label">14 · Awards & Recognition</div>
        <div className="section-divider" />
        <h2 className="section-title">Recognition</h2>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div key={i} className="card award-card">
              <span className="award-icon">{a.icon}</span>
              <div>
                <div className="award-title">{a.title}</div>
                <div className="award-sub" style={{ color: 'var(--accent)', marginBottom: 6 }}>{a.sub}</div>
                <p style={{ fontSize: '0.85rem' }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
