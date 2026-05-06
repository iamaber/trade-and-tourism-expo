import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import ExhibitorPage from '@/pages/ExhibitorPage'
import SponsorPage from '@/pages/SponsorPage'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/exhibitors" element={<ExhibitorPage />} />
          <Route path="/sponsors" element={<SponsorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
