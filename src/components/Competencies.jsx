const COMPETENCIES = [
  { icon: '🐍', title: 'Python Engineering', desc: 'Expert-level Python development: Django, FastAPI, Flask, asyncio, OOP, design patterns, and production-quality code at scale.' },
  { icon: '🏗️', title: 'Backend Architecture', desc: 'Designing distributed microservices, RESTful APIs, event-driven systems, and scalable backend platforms for enterprise applications.' },
  { icon: '🗄️', title: 'Database Mastery', desc: 'Deep expertise in PostgreSQL, MySQL, MongoDB, Oracle, and Redis — schema design, optimisation, ORM, and migration management.' },
  { icon: '🔐', title: 'Security Engineering', desc: 'OAuth 2.0, JWT, RBAC, API Gateway, encryption, and compliance-driven security architecture for banking-grade systems.' },
  { icon: '🤖', title: 'AI & ML Integration', desc: 'Building Python backend services that integrate machine learning models, feature pipelines, and predictive analytics into production APIs.' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS (EC2, S3, Lambda, RDS), Docker, Kubernetes, and CI/CD automation — from development to production delivery.' },
  { icon: '👩‍🏫', title: 'Technical Leadership', desc: 'Individual contributor and lead — mentoring engineers, driving architecture decisions, and owning production releases end-to-end.' },
  { icon: '🏦', title: 'Banking Domain Expertise', desc: 'Counterparty Credit Risk, Basel regulatory compliance, FX, F&O, OTC Clearing, Prime Brokerage, and trade processing systems.' },
]

export default function Competencies() {
  return (
    <section id="competencies">
      <div className="container">
        <div className="section-label">03 · Core Competencies</div>
        <div className="section-divider" />
        <h2 className="section-title">What I Do Best</h2>
        <p className="section-subtitle">Expertise developed across financial services, connected mobility, and enterprise software engineering</p>

        <div className="competencies-grid">
          {COMPETENCIES.map(c => (
            <div key={c.title} className="card competency-card">
              <div className="competency-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
