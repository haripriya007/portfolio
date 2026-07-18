const TABLES = [
  {
    name: 'trips',
    fields: [
      { name: 'trip_id (UUID)', type: 'PK', cls: 'pk' },
      { name: 'driver_id (UUID)', type: 'FK → drivers', cls: 'fk' },
      { name: 'vehicle_id (UUID)', type: 'FK → vehicles', cls: 'fk' },
      { name: 'started_at', type: 'TIMESTAMPTZ', cls: '' },
      { name: 'ended_at', type: 'TIMESTAMPTZ', cls: '' },
      { name: 'risk_score', type: 'NUMERIC(5,2)', cls: 'idx' },
      { name: 'distance_km', type: 'NUMERIC(10,3)', cls: '' },
      { name: 'status', type: 'ENUM', cls: 'idx' },
      { name: 'created_at', type: 'TIMESTAMPTZ', cls: '' },
    ],
  },
  {
    name: 'counterparty_exposures',
    fields: [
      { name: 'exposure_id (UUID)', type: 'PK', cls: 'pk' },
      { name: 'counterparty_id', type: 'FK → counterparties', cls: 'fk' },
      { name: 'instrument_type', type: 'VARCHAR(50)', cls: 'idx' },
      { name: 'asset_class', type: 'VARCHAR(30)', cls: 'idx' },
      { name: 'notional_usd', type: 'NUMERIC(20,4)', cls: '' },
      { name: 'mark_to_market', type: 'NUMERIC(20,4)', cls: '' },
      { name: 'risk_weight', type: 'NUMERIC(8,6)', cls: '' },
      { name: 'reporting_date', type: 'DATE', cls: 'idx' },
    ],
  },
  {
    name: 'etl_pipeline_jobs',
    fields: [
      { name: 'job_id (UUID)', type: 'PK', cls: 'pk' },
      { name: 'pipeline_name', type: 'VARCHAR(100)', cls: 'idx' },
      { name: 'status', type: 'ENUM', cls: 'idx' },
      { name: 'rows_extracted', type: 'BIGINT', cls: '' },
      { name: 'rows_loaded', type: 'BIGINT', cls: '' },
      { name: 'quality_pass_rate', type: 'NUMERIC(5,2)', cls: '' },
      { name: 'started_at', type: 'TIMESTAMPTZ', cls: '' },
      { name: 'completed_at', type: 'TIMESTAMPTZ', cls: '' },
      { name: 'error_log', type: 'JSONB', cls: '' },
    ],
  },
]

const OPT_STRATEGIES = [
  { icon: '📑', title: 'Composite Indexes', desc: 'Multi-column indexes on frequently joined and filtered columns (e.g. counterparty_id + reporting_date for fast exposure range queries).' },
  { icon: '🔀', title: 'Table Partitioning', desc: 'Range partitioning by reporting_date on large financial tables — eliminates full table scans for date-range analytics.' },
  { icon: '⚡', title: 'Connection Pooling', desc: 'PgBouncer with pool_mode=transaction for high-concurrency FastAPI services, preventing connection exhaustion under load.' },
  { icon: '🗃️', title: 'JSONB Indexing', desc: 'GIN indexes on JSONB columns for flexible metadata queries without schema migrations.' },
  { icon: '📋', title: 'Materialized Views', desc: 'Pre-aggregated risk summaries refreshed on schedule — dramatically reducing dashboard query time.' },
  { icon: '🔄', title: 'Alembic Migrations', desc: 'Version-controlled schema migrations with rollback support using SQLAlchemy + Alembic across all environments.' },
]

export default function DatabaseDesign() {
  return (
    <section id="database">
      <div className="container">
        <div className="section-label">08 · Database Design</div>
        <div className="section-divider" />
        <h2 className="section-title">Database Architecture</h2>
        <p className="section-subtitle">Schema design, optimization strategies, and ORM patterns for enterprise relational and NoSQL systems</p>

        <h3 style={{ marginBottom: 20, fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Core Table Schemas</h3>
        <div className="db-grid" style={{ marginBottom: 48 }}>
          {TABLES.map((t, i) => (
            <div key={i} className="card db-table">
              <div className="db-table-name">{t.name}</div>
              <div className="db-fields">
                {t.fields.map((f, j) => (
                  <div key={j} className={`db-field ${f.cls}`}>
                    <span className="db-field-name">{f.name}</span>
                    <span className="db-field-type">{f.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginBottom: 20, fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Optimization Strategies</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {OPT_STRATEGIES.map((s, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</span>
              <div>
                <h4 style={{ marginBottom: 6 }}>{s.title}</h4>
                <p style={{ fontSize: '0.85rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
