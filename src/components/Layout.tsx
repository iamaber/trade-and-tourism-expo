import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)

    return () => window.clearTimeout(timer)
  }, [location.hash, location.pathname])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <motion.main
        id="main"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        key={location.pathname}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  )
}
