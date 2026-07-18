const CASES = [
  {
    num: '01',
    title: 'High-Throughput Telematics Backend',
    company: 'Cambridge Mobile Telematics',
    domain: 'Connected Mobility · IoT',
    challenge: 'Legacy synchronous Python services were unable to handle peak IoT event volumes. GPS data enrichment failed quality checks for ~15% of records, causing unreliable analytics downstream.',
    solution: 'Redesigned to async FastAPI microservices with asyncio workers for non-blocking I/O. Built a configurable data quality validation layer with inline enrichment against reference data APIs.',
    tech: ['FastAPI', 'asyncio', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    impact: '40% throughput increase · Latency reduced significantly · 99.8% quality pass rate',
  },
  {
    num: '02',
    title: 'Basel Regulatory Reporting Platform',
    company: 'Bank of America · CDRT',
    domain: 'Banking · Counterparty Credit Risk',
    challenge: 'Manual aggregation of CCR exposure across FX, F&O, OTC, and Prime Brokerage was error-prone. Reporting ran for 18+ hours. Audit readiness was a persistent compliance risk.',
    solution: 'Automated the aggregation pipeline with MRA4 framework integration. Implemented materialized views for pre-aggregated risk summaries and Redis caching for real-time exposure queries.',
    tech: ['Python', 'Django', 'SQLAlchemy', 'PostgreSQL', 'Oracle', 'Redis', 'AWS'],
    impact: 'Reporting time reduced 60% · 100% MRA4 compliance · Zero audit findings in 3 consecutive reviews',
  },
  {
    num: '03',
    title: 'Microservices Security Hardening',
    company: 'Bank of America · Multi-Service',
    domain: 'API Security · Compliance',
    challenge: 'Legacy services used inconsistent authentication schemes and exposed credentials in environment variables. A security audit identified 12 critical API vulnerabilities across 7 services.',
    solution: 'Standardised OAuth 2.0 + JWT across all services. Migrated secrets to AWS Secrets Manager. Added API Gateway WAF, rate limiting, and input validation middleware across the fleet.',
    tech: ['OAuth 2.0', 'JWT', 'AWS Secrets Manager', 'API Gateway', 'Python', 'FastAPI', 'Django'],
    impact: 'All 12 critical vulnerabilities resolved · Passed PEN test with zero findings · Security review time reduced 70%',
  },
  {
    num: '04',
    title: 'Reusable Python Backend Framework',
    company: 'Cognizant Technology Solutions',
    domain: 'Enterprise Software',
    challenge: 'Every project was built from scratch with inconsistent security patterns. Onboarding new engineers was slow — no standard structure or reusable components across the team.',
    solution: 'Designed a reusable Python backend framework with FastAPI scaffolding, SQLAlchemy ORM integration, JWT auth middleware, Pytest test suite, and CI/CD templates for Jenkins.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'Pytest', 'Jenkins', 'Docker'],
    impact: 'Project setup time reduced 50% · Consistent security patterns · Adopted across 6 client engagements',
  },
  {
    num: '05',
    title: 'ML Prediction API Service',
    company: 'Lakeba IT Solutions',
    domain: 'AI / Machine Learning',
    challenge: 'Trained ML models sat in notebooks with no production deployment path. Synchronous inference caused high latency under concurrent request load from business applications.',
    solution: 'Built a FastAPI-based async serving layer with Redis prediction caching, versioned model endpoints, and feature pipeline integration via Python backend workers.',
    tech: ['Python', 'FastAPI', 'Redis', 'asyncio', 'Docker', 'JWT', 'Machine Learning'],
    impact: 'Inference latency reduced 3× · Deployment time from days to hours · Zero downtime model version switching',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="container">
        <div className="section-label">17 · Case Studies</div>
        <div className="section-divider" />
        <h2 className="section-title">Engineering Case Studies</h2>
        <p className="section-subtitle">Real-world technical challenges solved with measurable business outcomes</p>

        <div className="case-studies-grid">
          {CASES.map((c, i) => (
            <div key={i} className="card case-card">
              <div className="case-header">
                <div className="case-number">{c.num}</div>
                <div className="case-meta">
                  <strong>{c.title}</strong>
                  <span>{c.company} · {c.domain}</span>
                </div>
              </div>
              <div className="case-body">
                <div className="case-section">
                  <strong>Challenge</strong>
                  <p>{c.challenge}</p>
                </div>
                <div className="case-section">
                  <strong>Solution</strong>
                  <p>{c.solution}</p>
                </div>
              </div>
              <div className="flex-wrap mt-16">
                {c.tech.map(t => <span key={t} className="badge accent">{t}</span>)}
              </div>
              <div className="project-impact mt-16">📈 {c.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
