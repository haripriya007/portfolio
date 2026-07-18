const REPOS = [
  {
    icon: '🔌',
    name: 'fastapi-microservice-starter',
    desc: 'Production-ready FastAPI microservice template: JWT/OAuth2 auth, SQLAlchemy ORM, Alembic migrations, Pytest integration tests, Docker, and GitHub Actions CI/CD pipeline.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT', 'Pytest'],
  },
  {
    icon: '🐍',
    name: 'django-rest-api-boilerplate',
    desc: 'Django REST framework boilerplate with OAuth2, custom user model, PostgreSQL, Redis caching, Docker Compose setup, and full test coverage using Pytest.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Redis', 'OAuth2', 'Docker'],
  },
  {
    icon: '🏦',
    name: 'risk-aggregation-api',
    desc: 'Counterparty credit risk REST API service with async PostgreSQL queries via SQLAlchemy, Redis caching for exposure lookups, and Basel-aligned aggregation logic.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Redis', 'asyncio', 'Banking'],
  },
  {
    icon: '🤖',
    name: 'ml-serving-api',
    desc: 'FastAPI ML model serving platform with versioned model registry, async batch inference, Redis prediction caching, and JWT-secured endpoints.',
    tags: ['Python', 'FastAPI', 'ML', 'Redis', 'Docker', 'REST API'],
  },
  {
    icon: '🐳',
    name: 'python-k8s-deployment',
    desc: 'Kubernetes deployment manifests and Helm charts for Python microservices — HPA, liveness/readiness probes, ConfigMaps, Secrets management, and GitOps workflow.',
    tags: ['Kubernetes', 'Helm', 'AWS EKS', 'Docker', 'Python', 'GitOps'],
  },
  {
    icon: '🔄',
    name: 'python-backend-pipelines',
    desc: 'Configurable Python backend pipeline framework with pluggable processors, Pydantic data validation, Prometheus metrics, and structured logging using structlog.',
    tags: ['Python', 'Pydantic', 'Prometheus', 'asyncio', 'Docker', 'Monitoring'],
  },
]

export default function GithubProjects() {
  return (
    <section id="github-projects">
      <div className="container">
        <div className="section-label">16 · GitHub Projects</div>
        <div className="section-divider" />
        <h2 className="section-title">Open Source Projects</h2>
        <p className="section-subtitle">Portfolio projects demonstrating production-grade Python engineering</p>
        <div style={{ marginBottom: 32 }}>
          <a href="https://github.com/haripriya007" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            View GitHub — github.com/haripriya007
          </a>
        </div>

        <div className="github-grid">
          {REPOS.map((r, i) => (
            <div key={i} className="card github-card">
              <div className="github-card-header">
                <span className="github-card-icon">{r.icon}</span>
                <span className="github-card-name">{r.name}</span>
              </div>
              <p className="github-card-desc">{r.desc}</p>
              <div className="github-card-footer">
                {r.tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
