const STEPS = [
  { icon: '💻', label: 'Code Push', sub: 'GitHub / GitLab', color: 'var(--accent)' },
  { icon: '→', arrow: true },
  { icon: '🔍', label: 'Lint & SAST', sub: 'Flake8 / Bandit', color: 'var(--accent)' },
  { icon: '→', arrow: true },
  { icon: '🧪', label: 'Unit Tests', sub: 'Pytest / Coverage', color: 'var(--green)' },
  { icon: '→', arrow: true },
  { icon: '🔗', label: 'Integration', sub: 'Testcontainers', color: 'var(--green)' },
  { icon: '→', arrow: true },
  { icon: '🐳', label: 'Docker Build', sub: 'Multi-stage', color: 'var(--accent)' },
  { icon: '→', arrow: true },
  { icon: '📦', label: 'Push to ECR', sub: 'AWS Container Reg.', color: 'var(--accent)' },
  { icon: '→', arrow: true },
  { icon: '🚀', label: 'Deploy EKS', sub: 'Rolling update', color: 'var(--orange)' },
  { icon: '→', arrow: true },
  { icon: '✅', label: 'Health Check', sub: 'Smoke tests', color: 'var(--green)' },
]

const PRACTICES = [
  { title: 'Branch Strategy', desc: 'Trunk-based development with short-lived feature branches. PR review mandatory. Squash merge to main.' },
  { title: 'Quality Gates', desc: '80% code coverage enforced. No merge on lint failure or security scan warning. Dependency vulnerability checks.' },
  { title: 'Blue/Green Deploy', desc: 'Zero-downtime deployments via Kubernetes rolling updates with readiness/liveness probes and automated rollback.' },
  { title: 'Secrets Management', desc: 'AWS Secrets Manager and Kubernetes Secrets. Never in environment variables or code. Rotated on schedule.' },
  { title: 'Pipeline as Code', desc: 'GitHub Actions YAML and Jenkinsfile in repository. Environment-specific configs via Helm values files.' },
  { title: 'Release Management', desc: 'Semantic versioning. Changelog auto-generated from conventional commits. Tag-triggered production deploys.' },
]

export default function CiCd() {
  return (
    <section id="cicd">
      <div className="container">
        <div className="section-label">10 · CI/CD Pipeline</div>
        <div className="section-divider" />
        <h2 className="section-title">Delivery Pipeline</h2>
        <p className="section-subtitle">Automated, secure delivery from code commit to production with quality gates at every stage</p>

        <div className="card" style={{ marginBottom: 32 }}>
          <h3 style={{ marginBottom: 20, fontSize: '1rem', color: 'var(--text-secondary)' }}>Pipeline Stages</h3>
          <div className="pipeline-steps">
            {STEPS.map((s, i) =>
              s.arrow ? (
                <div key={i} className="pipeline-arrow">→</div>
              ) : (
                <div key={i} className="pipeline-step">
                  <div className="pipeline-step-box" style={{ borderColor: s.color + '44' }}>
                    <div className="pipeline-step-icon">{s.icon}</div>
                    <div className="pipeline-step-label">{s.label}</div>
                    <div className="pipeline-step-sub">{s.sub}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {PRACTICES.map((p, i) => (
            <div key={i} className="card">
              <h4 style={{ color: 'var(--accent)', marginBottom: 8 }}>{p.title}</h4>
              <p style={{ fontSize: '0.875rem' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
