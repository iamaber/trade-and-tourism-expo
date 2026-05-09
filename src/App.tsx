import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import ExhibitorPage from '@/pages/ExhibitorPage'
import SponsorPage from '@/pages/SponsorPage'
import AuthPage from '@/pages/AuthPage'

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
        <Route path="/register" element={<AuthPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
