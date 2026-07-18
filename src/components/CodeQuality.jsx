const PRINCIPLES = [
  {
    title: 'SOLID Principles',
    items: [
      'Single Responsibility — each service/class owns exactly one concern',
      'Open/Closed — extend via composition, not modification',
      'Liskov Substitution — consistent contracts across implementations',
      'Interface Segregation — focused, minimal abstractions',
      'Dependency Inversion — depend on abstractions, inject concretions',
    ],
  },
  {
    title: 'Design Patterns Applied',
    items: [
      'Repository Pattern — data access abstraction over SQLAlchemy',
      'Factory Pattern — pluggable ETL extractor/transformer creation',
      'Strategy Pattern — configurable data transformation pipelines',
      'Observer Pattern — event-driven pipeline state notifications',
      'Circuit Breaker — resilient microservice communication',
    ],
  },
  {
    title: 'Code Review Standards',
    items: [
      'Mandatory PR reviews — 2 approvals required for production merge',
      'Automated lint + type checking (mypy) in CI before review',
      'Security-focused review checklist (injection, auth, secrets)',
      'Performance review for DB query changes — EXPLAIN ANALYZE attached',
      'Architecture decisions documented in ADRs (Architecture Decision Records)',
    ],
  },
  {
    title: 'Testing Strategy',
    items: [
      '≥80% line coverage enforced by CI quality gate',
      'Unit tests with Pytest + mocking via pytest-mock and unittest.mock',
      'Integration tests with Testcontainers (real PostgreSQL/Redis in CI)',
      'Contract testing for microservice API boundaries',
      'Load testing with Locust before major releases',
    ],
  },
]

export default function CodeQuality() {
  return (
    <section id="code-quality">
      <div className="container">
        <div className="section-label">13 · Code Quality</div>
        <div className="section-divider" />
        <h2 className="section-title">Engineering Excellence</h2>
        <p className="section-subtitle">Clean code, design patterns, SOLID principles, and rigorous testing as a professional standard</p>

        <div className="grid-2">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="card">
              <h3 style={{ color: 'var(--accent)', marginBottom: 16 }}>{p.title}</h3>
              <ul style={{ listStyle: 'none' }}>
                {p.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: '0.875rem', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
