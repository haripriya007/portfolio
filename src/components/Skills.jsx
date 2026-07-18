const SKILLS = [
  {
    cat: 'Primary Language',
    icon: '🐍',
    tags: ['Python', 'Core Python', 'OOP', 'Design Patterns', 'asyncio', 'Async Programming'],
  },
  {
    cat: 'Backend Frameworks',
    icon: '⚙️',
    tags: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'Microservices', 'API Design', 'Middleware', 'Authentication & Authorisation'],
  },
  {
    cat: 'Databases',
    icon: '🗄️',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Redis', 'SQL', 'NoSQL', 'Database Migrations', 'Query Optimisation', 'Indexing'],
  },
  {
    cat: 'ORM & Data Access',
    icon: '🔗',
    tags: ['SQLAlchemy', 'Django ORM', 'CRUD Operations', 'Transactions', 'Schema Design'],
  },
  {
    cat: 'Security',
    icon: '🔐',
    tags: ['OAuth 2.0', 'JWT', 'API Gateway', 'RBAC', 'Encryption', 'Secure Communication', 'API Security'],
  },
  {
    cat: 'Cloud & Infrastructure',
    icon: '☁️',
    tags: ['AWS (EC2, S3, Lambda, RDS)', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Linux'],
  },
  {
    cat: 'CI/CD & DevOps',
    icon: '🔄',
    tags: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Bitbucket Pipelines', 'CI/CD', 'Release Management'],
  },
  {
    cat: 'AI & Machine Learning',
    icon: '🤖',
    tags: ['Machine Learning Integration', 'Predictive Analytics', 'AI Tools', 'ML Pipelines', 'Feature Engineering'],
  },
  {
    cat: 'Testing',
    icon: '🧪',
    tags: ['Pytest', 'Unittest', 'Unit Testing', 'Integration Testing', 'TDD', 'Test-Driven Development'],
  },
  {
    cat: 'Frontend',
    icon: '🎨',
    tags: ['React (Basic)', 'REST API Integration', 'Dashboard Integration'],
  },
  {
    cat: 'Collaboration & Tools',
    icon: '🤝',
    tags: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Confluence', 'Agile/Scrum', 'Code Reviews', 'Technical Documentation'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">02 · Technical Skills</div>
        <div className="section-divider" />
        <h2 className="section-title">Technology Stack</h2>
        <p className="section-subtitle">8+ years of production experience across Python backend, databases, cloud, and full-stack engineering</p>

        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.cat} className="card">
              <div className="skill-category-title">
                <span>{s.icon}</span> {s.cat}
              </div>
              <div className="skill-tags">
                {s.tags.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
