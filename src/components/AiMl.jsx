const AI_ITEMS = [
  { icon: '🤖', title: 'ML Model Integration', desc: 'Built Python backend systems at Lakeba IT Solutions serving ML model predictions via production REST APIs — versioned endpoints, async inference, and JWT-secured access.' },
  { icon: '🔄', title: 'Feature Pipelines', desc: 'Designed Python-based feature engineering pipelines transforming raw business data into ML-ready vectors with automated schema validation and quality checks.' },
  { icon: '📊', title: 'Predictive Analytics APIs', desc: 'Developed async prediction endpoints with Redis-cached feature lookups, batch inference support, and confidence-score thresholding for downstream business applications.' },
  { icon: '🔌', title: 'AI Tools in Daily Workflow', desc: 'Experienced user of modern AI coding tools to accelerate development workflows — code generation, code review assistance, and documentation drafting.' },
  { icon: '📈', title: 'Analytics Backend Systems', desc: 'Built backend services powering real-time analytics dashboards — from raw event ingestion through aggregation, scoring, and delivery to React dashboards.' },
  { icon: '🧪', title: 'ML Pipeline Testing', desc: 'Applied TDD practices to ML-integrated services — unit testing prediction logic, mocking model inference, and integration testing end-to-end pipelines with Pytest.' },
]

export default function AiMl() {
  return (
    <section id="ai-ml">
      <div className="container">
        <div className="section-label">12 · AI & Machine Learning</div>
        <div className="section-divider" />
        <h2 className="section-title">AI & ML Integration</h2>
        <p className="section-subtitle">Integrating machine learning models and AI tooling into production-grade Python backend systems</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {AI_ITEMS.map((item, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div className="highlight-icon">{item.icon}</div>
              <div>
                <h4 style={{ marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
