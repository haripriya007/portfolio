import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Competencies from './components/Competencies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import ApiDesign from './components/ApiDesign'
import DatabaseDesign from './components/DatabaseDesign'
import ProductionSupport from './components/ProductionSupport'
import CiCd from './components/CiCd'
import CloudDeployment from './components/CloudDeployment'
import AiMl from './components/AiMl'
import CodeQuality from './components/CodeQuality'
import Awards from './components/Awards'
import Certifications from './components/Certifications'
import GithubProjects from './components/GithubProjects'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Competencies />
        <Experience />
        <Projects />
        <Architecture />
        <ApiDesign />
        <DatabaseDesign />
        <ProductionSupport />
        <CiCd />
        <CloudDeployment />
        <AiMl />
        <CodeQuality />
        <Awards />
        <Certifications />
        <GithubProjects />
        <CaseStudies />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© 2026 Haripriya M · Principal Software Engineer · Python Full-Stack Developer · Technical Lead</p>
        </div>
      </footer>
    </>
  )
}
