const ENDPOINTS = [
  { method: 'GET',    path: '/api/v1/telemetry/trips',         desc: 'Paginated retrieval of driver trips with filtering by date, driver, and risk score' },
  { method: 'POST',   path: '/api/v1/telemetry/events',        desc: 'Ingest batch GPS/IoT sensor events; validates schema, enqueues to Kafka pipeline' },
  { method: 'GET',    path: '/api/v1/risk/counterparty/{id}',  desc: 'Fetch real-time counterparty exposure across all instruments (CCR/CDRT)' },
  { method: 'POST',   path: '/api/v1/etl/pipeline/trigger',    desc: 'Trigger ETL pipeline run with config payload; returns async job ID for polling' },
  { method: 'GET',    path: '/api/v1/etl/pipeline/{job_id}',   desc: 'Poll ETL job status, progress, data quality metrics, and row counts' },
  { method: 'PUT',    path: '/api/v1/users/{id}/permissions',  desc: 'Update user RBAC permissions; requires admin scope in JWT claims' },
  { method: 'POST',   path: '/api/v1/auth/token',              desc: 'Issue OAuth2 JWT access token via client credentials or authorization code flow' },
  { method: 'DELETE', path: '/api/v1/cache/invalidate',        desc: 'Force Redis cache invalidation for specified entity keys' },
  { method: 'GET',    path: '/api/v1/health',                  desc: 'Service health check: DB connectivity, Kafka lag, Redis ping, and uptime metrics' },
  { method: 'POST',   path: '/api/v1/ml/predict',              desc: 'Call ML inference endpoint; accepts feature vectors, returns predictions with confidence scores' },
]

const CODE_SAMPLE = `# FastAPI endpoint with JWT auth, async DB, and Kafka publish
from fastapi import APIRouter, Depends, HTTPException, status
from app.auth import get_current_user, require_scope
from app.db import AsyncSession, get_db
from app.kafka import KafkaProducer
from app.models import TripCreate, TripResponse
from app.services import TelemetryService

router = APIRouter(prefix="/api/v1/telemetry", tags=["telemetry"])

@router.post("/events", response_model=TripResponse, status_code=202)
async def ingest_events(
    payload: TripCreate,
    db: AsyncSession = Depends(get_db),
    user=Depends(require_scope("telemetry:write")),
    producer: KafkaProducer = Depends(),
):
    """Ingest batch GPS/IoT events with validation and async pipeline trigger."""
    validated = await TelemetryService.validate_schema(payload)
    if not validated.is_valid:
        raise HTTPException(status_code=422, detail=validated.errors)

    job = await TelemetryService.create_job(db, payload, user.id)
    await producer.publish("telemetry.events", job.to_event())
    return TripResponse.from_orm(job)`

export default function ApiDesign() {
  return (
    <section id="api">
      <div className="container">
        <div className="section-label">07 · API Design Showcase</div>
        <div className="section-divider" />
        <h2 className="section-title">RESTful API Design</h2>
        <p className="section-subtitle">Production API patterns used across telematics, banking, and data engineering platforms</p>

        <h3 style={{ marginBottom: 16, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}>API Endpoint Catalogue</h3>
        <div className="api-grid" style={{ marginBottom: 40 }}>
          {ENDPOINTS.map((e, i) => (
            <div key={i} className="api-endpoint">
              <span className={`api-method ${e.method}`}>{e.method}</span>
              <span className="api-path">{e.path}</span>
              <span className="api-desc">{e.desc}</span>
            </div>
          ))}
        </div>

        <h3 style={{ marginBottom: 16, color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}>Sample — Async FastAPI Endpoint with OAuth2 + Kafka</h3>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ background: '#161b22', padding: '10px 16px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ marginLeft: 8, fontSize: '0.78rem', color: 'var(--text-muted)' }}>telemetry_routes.py</span>
          </div>
          <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', lineHeight: 1.7, padding: 24, color: '#c9d1d9', overflowX: 'auto', margin: 0, background: '#0d1117' }}>
            {CODE_SAMPLE}
          </pre>
        </div>
      </div>
    </section>
  )
}
