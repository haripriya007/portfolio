const PROJECTS = [
  {
    icon: '📡',
    title: 'High-Throughput Telematics Backend Platform',
    subtitle: 'Cambridge Mobile Telematics · 2025–Present',
    desc: 'Scalable Python FastAPI microservices platform processing millions of GPS and IoT sensor events daily for driver behaviour analytics, insurance risk scoring, and fleet management.',
    problem: 'Legacy synchronous services caused high latency and frequent timeouts under peak IoT event load. GPS data enrichment failed quality checks ~15% of the time.',
    arch: 'FastAPI microservices → asyncio workers → PostgreSQL/MongoDB storage → Redis cache → Analytics REST API layer',
    contrib: 'Led full architecture design, built all FastAPI services, implemented JWT/OAuth2 security, tuned asyncio concurrency for throughput',
    tech: ['Python', 'FastAPI', 'asyncio', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Docker', 'Kubernetes', 'AWS', 'JWT/OAuth2', 'Pytest'],
    impact: '~40% throughput improvement · API latency reduced to <200ms P95 · 99.8% data quality pass rate',
  },
  {
    icon: '🏦',
    title: 'Counterparty Default Risk Technology (CDRT)',
    subtitle: 'Bank of America · 2022–2025',
    desc: 'Mission-critical risk management platform for Counterparty Credit Risk (CCR) across FX, Futures & Options, OTC Clearing, Prime Brokerage, and Repo — aligned to the MRA4 Framework and Basel III/IV requirements.',
    problem: 'Fragmented risk data across asset classes with manual aggregation. Basel regulatory reporting was slow and error-prone, impacting audit readiness.',
    arch: 'Django/Flask microservices → risk aggregation engine → Oracle/PostgreSQL → Redis cache → React dashboards → CI/CD Jenkins deploy',
    contrib: 'Lead engineer on MRA4 framework integration, risk aggregation API design, query optimisation, and OAuth2/JWT security hardening',
    tech: ['Python', 'Django', 'Flask', 'Oracle', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'React', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'OAuth2/JWT'],
    impact: 'Regulatory reporting time cut by 60% · 100% MRA4 compliance · Zero audit findings across 3 consecutive reviews',
  },
  {
    icon: '🔌',
    title: 'Enterprise Backend Service Framework',
    subtitle: 'Cognizant · 2021–2022',
    desc: 'Reusable Python backend service framework for enterprise clients with configurable REST API scaffolding, authentication, data access patterns, and integrated CI/CD delivery.',
    problem: 'Every project started from scratch with inconsistent patterns. Code quality and security varied widely across teams and deliverables.',
    arch: 'FastAPI base layer → SQLAlchemy ORM → JWT/OAuth2 auth → Pytest test suite → Jenkins CI pipeline',
    contrib: 'Designed framework core, ORM integration, auth middleware, and CI/CD pipeline templates adopted across team',
    tech: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Docker', 'Jenkins', 'Pytest', 'JWT'],
    impact: 'Development setup time reduced 50% · Consistent security patterns enforced · Adopted across 6 client projects',
  },
  {
    icon: '🤖',
    title: 'ML Model Serving & Prediction API',
    subtitle: 'Lakeba IT Solutions · 2019–2020',
    desc: 'Python backend platform for serving machine learning models as production REST APIs with async inference, feature pipeline integration, and Redis-backed prediction caching.',
    problem: 'No standard path to deploy trained ML models. Synchronous inference caused high latency under concurrent prediction load.',
    arch: 'FastAPI model serving → async inference workers → Redis prediction cache → JWT-secured API gateway',
    contrib: 'Built serving layer, async inference pipeline, feature backend integration, and JWT auth for ML API endpoints',
    tech: ['Python', 'FastAPI', 'Flask', 'Redis', 'Docker', 'JWT', 'REST APIs', 'Machine Learning', 'asyncio'],
    impact: 'Inference latency reduced 3× · Model deployment time from days to hours · Concurrent prediction load handled without degradation',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">05 · Key Projects</div>
        <div className="section-divider" />
        <h2 className="section-title">Flagship Projects</h2>
        <p className="section-subtitle">Enterprise-scale systems built for reliability, scalability, and measurable business impact</p>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="card project-card">
              <div className="project-header">
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="project-icon">{p.icon}</div>
                  <div>
                    <div className="project-title">{p.title}</div>
                    <div className="project-subtitle">{p.subtitle}</div>
                  </div>
                </div>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-meta">
                <div className="project-meta-row">
                  <span className="project-meta-label">Problem:</span>
                  <span className="project-meta-val">{p.problem}</span>
                </div>
                <div className="project-meta-row">
                  <span className="project-meta-label">Architecture:</span>
                  <span className="project-meta-val">{p.arch}</span>
                </div>
                <div className="project-meta-row">
                  <span className="project-meta-label">My Role:</span>
                  <span className="project-meta-val">{p.contrib}</span>
                </div>
              </div>
              <div className="flex-wrap">
                {p.tech.map(t => <span key={t} className="badge accent">{t}</span>)}
              </div>
              <div className="project-impact">📈 {p.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
