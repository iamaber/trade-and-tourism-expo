import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Event' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/exhibitors', label: 'Exhibitors' },
  { to: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) {
        lastFocusedElement.current = document.activeElement as HTMLElement
      }
      return !prev
    })
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-open')
    } else {
      document.body.classList.remove('nav-open')
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus()
        lastFocusedElement.current = null
      }
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return false
    return location.pathname === to
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <img
            src="assets/img/logo-dark.png"
            alt="ITT Expo 2026"
            className="nav__logo-img"
            width="auto"
            height="42"
          />
        </Link>

        <div className={`nav__links ${menuOpen ? 'open' : ''}`} id="site-menu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav__link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/exhibitors#book" className="nav__cta">
            Book a Stall
          </Link>
        </div>

        <button
          className={`nav__mobile-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  )
}
