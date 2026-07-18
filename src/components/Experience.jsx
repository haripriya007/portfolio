const EXPERIENCE = [
  {
    icon: '📡',
    role: 'Principal Software Engineer / Technical Lead',
    company: 'Cambridge Mobile Telematics',
    period: 'Oct 2025 – Present',
    location: 'Remote / Global',
    domain: 'Connected Mobility · Telematics · IoT',
    bullets: [
      'Lead the design and development of scalable Python FastAPI microservices for enterprise telematics platforms processing high-volume GPS and IoT sensor datasets.',
      'Architect backend services and RESTful APIs with OAuth 2.0, JWT authentication, API Gateway integrations, request validation, API versioning, and role-based authorisation.',
      'Build and maintain Python asyncio-based asynchronous pipelines leveraging non-blocking I/O for concurrent high-volume data streams, improving throughput by ~40%.',
      'Design relational and NoSQL data access layers using PostgreSQL, MongoDB, and Redis with SQLAlchemy ORM — schema design, query optimisation, transactions, and migrations.',
      'Containerise applications using Docker and manage Kubernetes-based production deployments with CI/CD automation via Jenkins and GitHub Actions.',
      'Perform unit testing, integration testing, production monitoring, structured logging, debugging, and root cause analysis.',
      'Mentor junior engineers, lead code reviews, architecture discussions, and technical documentation in an Agile delivery environment.',
    ],
    tech: ['Python', 'FastAPI', 'asyncio', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'AWS', 'Docker', 'Kubernetes', 'JWT/OAuth2', 'Jenkins', 'GitHub Actions', 'Pytest'],
  },
  {
    icon: '🏦',
    role: 'Senior Software Engineer / Technical Lead',
    company: 'Bank of America',
    period: 'Jun 2022 – Oct 2025',
    location: 'Chennai, India',
    domain: 'Banking · Counterparty Credit Risk · Basel Regulatory Reporting',
    bullets: [
      'Developed enterprise Python backend services using Flask, Django, and REST APIs for the Counterparty Default Risk Technology (CDRT) platform — supporting CCR across FX, F&O, OTC Clearing, Prime Brokerage, and Repo.',
      'Built and maintained the MRA4 Framework for Counterparty Credit Risk (CCR) and Basel III/IV regulatory reporting workflows.',
      'Designed and implemented scalable backend workflows for transforming and aggregating large financial datasets supporting regulatory compliance and risk analytics.',
      'Architected secure microservices with OAuth 2.0, JWT, API Gateway, encryption, and secure communication protocols meeting enterprise financial security standards.',
      'Optimised SQL query performance, schema design, indexing strategies, and transaction handling for PostgreSQL, MySQL, and Oracle using SQLAlchemy and Django ORM.',
      'Integrated backend services with React dashboards delivering real-time financial analytics and risk reporting to business stakeholders.',
      'Led production support, performance tuning, incident management, monitoring, logging, and root cause analysis for mission-critical financial systems.',
      'Conducted architecture reviews, code reviews, technical design sessions, and mentoring for distributed microservices platforms.',
    ],
    tech: ['Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL', 'MySQL', 'Oracle', 'Redis', 'SQLAlchemy', 'AWS', 'Docker', 'Kubernetes', 'OAuth2/JWT', 'CI/CD', 'React'],
  },
  {
    icon: '🏢',
    role: 'Software Developer / Technical Lead',
    company: 'Cognizant Technology Solutions',
    period: 'Apr 2021 – Jun 2022',
    location: 'Chennai, India',
    domain: 'Enterprise Software · Backend Engineering',
    bullets: [
      'Developed Python backend services using Flask, FastAPI, and Django; designed RESTful APIs and microservices for enterprise applications.',
      'Implemented JWT, OAuth 2.0, and API security patterns for secure microservice communication.',
      'Optimised SQL schema design, indexing, and ORM queries using Django ORM and SQLAlchemy for PostgreSQL and MySQL; managed database migrations across environments.',
      'Supported CI/CD pipelines with Jenkins and GitHub Actions; performed unit and integration testing with Pytest.',
    ],
    tech: ['Python', 'Flask', 'FastAPI', 'Django', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'JWT', 'Docker', 'Jenkins', 'GitHub Actions', 'Pytest'],
  },
  {
    icon: '💡',
    role: 'Software Developer',
    company: 'Ezio Solutions Pvt Ltd',
    period: 'Sep 2020 – Apr 2021',
    location: 'Coimbatore, India',
    domain: 'Enterprise SaaS · Cloud Applications',
    bullets: [
      'Developed backend APIs using Python Flask and FastAPI for enterprise business applications.',
      'Built Docker-containerised services with CI/CD automation and AWS integrations (EC2, S3, Lambda, RDS).',
      'Improved backend performance through database optimisation, query tuning, and Redis caching.',
    ],
    tech: ['Python', 'Flask', 'FastAPI', 'Docker', 'AWS', 'Redis', 'PostgreSQL', 'MySQL', 'CI/CD'],
  },
  {
    icon: '🤖',
    role: 'Software Developer / AI & ML Engineer',
    company: 'Lakeba IT Solutions',
    period: 'Aug 2019 – May 2020',
    location: 'Coimbatore, India',
    domain: 'AI · Machine Learning · Predictive Analytics',
    bullets: [
      'Built Python backend systems supporting predictive analytics and machine learning applications.',
      'Developed REST APIs exposing ML model inference services with JWT authentication.',
      'Designed backend pipelines for ML data processing, feature engineering, and transformation workflows.',
      'Containerised backend services using Docker and supported cloud deployments and production monitoring.',
    ],
    tech: ['Python', 'Flask', 'FastAPI', 'Machine Learning', 'Docker', 'JWT', 'REST APIs', 'PostgreSQL'],
  },
  {
    icon: '🚀',
    role: 'Software Developer',
    company: 'Prodesk Technology LLP',
    period: 'May 2018 – Jul 2019',
    location: 'Coimbatore, India',
    domain: 'Web Development · Enterprise Applications',
    bullets: [
      'Developed Django and Flask backend applications with RESTful API design and ORM-based data access layers.',
      'Implemented relational database schemas, SQL query optimisation, and database migrations for PostgreSQL and MySQL.',
      'Maintained CI/CD pipelines and participated in Agile development and code reviews.',
    ],
    tech: ['Python', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'REST APIs', 'Git', 'CI/CD'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">04 · Professional Experience</div>
        <div className="section-divider" />
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">8+ years building production-grade Python systems across financial services, telematics, and enterprise software</p>

        <div className="experience-timeline">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-item">
              <div className="exp-dot">{e.icon}</div>
              <div className="exp-content card">
                <div className="exp-header">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                </div>
                <div className="exp-meta">
                  <span>📅 {e.period}</span>
                  <span>📍 {e.location}</span>
                </div>
                <div className="exp-domain">🏷️ {e.domain}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="exp-tech">
                  {e.tech.map(t => <span key={t} className="badge accent">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
