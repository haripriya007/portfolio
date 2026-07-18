const SUPPORT_ITEMS = [
  { icon: '📊', title: 'Observability Stack', desc: 'Structured JSON logging via Python logging + structlog. Metrics with Prometheus. Traces with OpenTelemetry + Jaeger. Dashboards in Grafana.' },
  { icon: '🚨', title: 'Incident Response', desc: 'On-call runbooks, PagerDuty alerting, 15-min P1 SLA. Severity classification (P1–P4). War room coordination with stakeholder comms.' },
  { icon: '🔍', title: 'Root Cause Analysis', desc: '5-Why methodology. Log correlation across services. Distributed trace analysis. RCA reports shared with engineering and business within 24h of P1 resolution.' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Query profiling with EXPLAIN ANALYZE. Async worker tuning. Redis cache hit rate optimization. Memory profiling with py-spy and memory-profiler.' },
  { icon: '📋', title: 'Runbook Documentation', desc: 'Confluence-hosted runbooks for all production services: deployment procedures, rollback steps, alert response, and on-call escalation paths.' },
  { icon: '🔄', title: 'Post-Incident Review', desc: 'Blameless post-mortems for every P1/P2 incident. Action items tracked in Jira. Systematic follow-up preventing repeat incidents.' },
]

export default function ProductionSupport() {
  return (
    <section id="production">
      <div className="container">
        <div className="section-label">09 · Production Support</div>
        <div className="section-divider" />
        <h2 className="section-title">Reliability & Operations</h2>
        <p className="section-subtitle">Production engineering practices for high-availability enterprise platforms</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {SUPPORT_ITEMS.map((s, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div className="highlight-icon" style={{ flexShrink: 0 }}>{s.icon}</div>
              <div>
                <h4 style={{ marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: '0.875rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-24">
          <h3 style={{ marginBottom: 16 }}>Production Metrics at Bank of America · CDRT Platform</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {[
              { value: '99.95%', label: 'Uptime SLA' },
              { value: '< 200ms', label: 'P95 API Latency' },
              { value: '< 15min', label: 'P1 Response Time' },
              { value: '0', label: 'Regulatory Audit Failures' },
              { value: '60%', label: 'Reporting Time Reduction' },
              { value: '97%', label: 'Data Quality Pass Rate' },
            ].map((m, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--bg-primary)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>{m.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
