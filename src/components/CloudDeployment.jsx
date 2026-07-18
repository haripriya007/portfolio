const AWS_SERVICES = [
  { icon: '🖥️', name: 'EC2', desc: 'Application servers and worker nodes' },
  { icon: '🗄️', name: 'RDS (PostgreSQL/MySQL)', desc: 'Managed relational database with Multi-AZ failover' },
  { icon: '🪣', name: 'S3', desc: 'Object storage for ETL staging, data lake, and artifacts' },
  { icon: '⚡', name: 'Lambda', desc: 'Serverless event processors and ETL micro-tasks' },
  { icon: '🌐', name: 'API Gateway', desc: 'JWT validation, rate limiting, and routing layer' },
  { icon: '📦', name: 'ECR', desc: 'Private Docker image registry for container deployments' },
  { icon: '☸️', name: 'EKS', desc: 'Managed Kubernetes for microservices orchestration' },
  { icon: '📊', name: 'CloudWatch', desc: 'Metrics, logs, alarms, and operational dashboards' },
  { icon: '🔐', name: 'Secrets Manager', desc: 'Secure storage and rotation of database credentials and API keys' },
  { icon: '🌍', name: 'CloudFront', desc: 'Global CDN for portfolio and static asset delivery' },
]

export default function CloudDeployment() {
  return (
    <section id="cloud">
      <div className="container">
        <div className="section-label">11 · Cloud Deployment</div>
        <div className="section-divider" />
        <h2 className="section-title">Cloud Architecture</h2>
        <p className="section-subtitle">AWS-native cloud deployments with high availability, auto-scaling, and security-first design</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          {AWS_SERVICES.map((s, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</span>
              <div>
                <h4 style={{ color: 'var(--orange)', marginBottom: 4, fontSize: '0.9rem' }}>{s.name}</h4>
                <p style={{ fontSize: '0.82rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 16 }}>Multi-Region High Availability Architecture</h3>
          <div className="arch-diagram">{`
  ┌─────────────────────────────────────────────────────────────┐
  │                    ROUTE 53 (DNS)                           │
  │              Health-checked routing policies                │
  └───────────────────┬─────────────────────────────────────────┘
                      │
  ┌───────────────────▼─────────────────────────────────────────┐
  │                 CloudFront CDN                              │
  └───────────────────┬─────────────────────────────────────────┘
                      │
  ┌───────────────────▼─────────────────────────────────────────┐
  │                AWS API Gateway                              │
  │         JWT Auth · Rate Limiting · WAF                      │
  └──────────┬──────────────────────────┬──────────────────────┘
             │                          │
  ┌──────────▼─────────┐    ┌──────────▼─────────┐
  │   EKS Cluster      │    │   EKS Cluster      │
  │   Region: us-east  │    │   Region: eu-west  │
  │   (Primary)        │    │   (Replica)        │
  └──────────┬─────────┘    └────────────────────┘
             │
  ┌──────────▼──────────────────────────────────────┐
  │            RDS Multi-AZ PostgreSQL              │
  │      Primary → Synchronous Standby Replica      │
  └─────────────────────────────────────────────────┘`}
          </div>
        </div>
      </div>
    </section>
  )
}
