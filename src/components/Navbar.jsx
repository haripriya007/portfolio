import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#hero',      label: 'Home' },
  { href: '#summary',   label: 'Summary' },
  { href: '#skills',    label: 'Skills' },
  { href: '#experience',label: 'Experience' },
  { href: '#projects',  label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map(l => document.querySelector(l.href))
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 80) {
          setActive(NAV_LINKS[i].href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          Hari<span>priya</span>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
