import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

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
