import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

type Tab = 'login' | 'register'

const tabVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

const fieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: 'easeOut' as const },
  }),
}

export default function AuthPage() {
  const [tab, setTab] = useState<Tab>('register')
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    loginEmail: '',
    loginPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validateRegister = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Full name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    if (!formData.password) e.password = 'Password is required'
    else if (formData.password.length < 8) e.password = 'Minimum 8 characters'
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match'
    return e
  }

  const validateLogin = () => {
    const e: Record<string, string> = {}
    if (!formData.loginEmail.trim()) e.loginEmail = 'Email is required'
    if (!formData.loginPassword) e.loginPassword = 'Password is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = tab === 'register' ? validateRegister() : validateLogin()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="auth-page">
        <div className="auth-page__card">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="auth-page__success"
          >
            <div className="auth-page__success-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#F07E21" strokeWidth="2" />
                <path d="M16 24L22 30L32 18" stroke="#F07E21" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>{tab === 'register' ? 'Registration Complete' : 'Welcome Back'}</h2>
            <p>
              {tab === 'register'
                ? 'Your stall registration has been submitted. Our team will contact you within 24 hours with next steps and booth allocation details.'
                : 'You have been logged in successfully.'}
            </p>
            <Link to="/" className="auth-page__back">Return to Homepage</Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-page">
      <div className="auth-page__left">
        <div className="auth-page__left-content">
          <Link to="/" className="auth-page__logo">
            <img
              src="assets/img/logo-dark.png"
              alt="ITT Expo 2026"
              className="auth-page__logo-img"
            />
          </Link>
          <h1 className="auth-page__left-title">
            {tab === 'register' ? 'Book Your' : 'Welcome'}<br />
            <em>{tab === 'register' ? 'Stall' : 'Back'}</em>
          </h1>
          <p className="auth-page__left-desc">
            {tab === 'register'
              ? 'Register to secure your exhibition space at ITT Expo 2026. August 21-22, Aloki Tejgaon, Dhaka.'
              : 'Access your exhibitor dashboard and manage your stall registration.'}
          </p>
          <div className="auth-page__left-stats">
            <div><span className="auth-page__stat-num">30+</span><span className="auth-page__stat-label">Pavilions</span></div>
            <div><span className="auth-page__stat-num">15K+</span><span className="auth-page__stat-label">Visitors</span></div>
            <div><span className="auth-page__stat-num">40+</span><span className="auth-page__stat-label">Countries</span></div>
          </div>
        </div>
      </div>
      <div className="auth-page__right">
        <div className="auth-page__card">
          <div className="auth-page__tabs">
            <button
              className={`auth-page__tab ${tab === 'login' ? 'active' : ''}`}
              onClick={() => { setTab('login'); setErrors({}) }}
            >
              Login
            </button>
            <button
              className={`auth-page__tab ${tab === 'register' ? 'active' : ''}`}
              onClick={() => { setTab('register'); setErrors({}) }}
            >
              Register
            </button>
            <div
              className="auth-page__tab-indicator"
              style={{ transform: tab === 'login' ? 'translateX(0)' : 'translateX(100%)' }}
            />
          </div>

          <AnimatePresence mode="wait">
            {tab === 'login' ? (
              <motion.form
                key="login"
                className="auth-page__form"
                onSubmit={handleSubmit}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className="auth-page__field" custom={0} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="login-email">Email Address</label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.loginEmail}
                    onChange={(e) => update('loginEmail', e.target.value)}
                    className={errors.loginEmail ? 'error' : ''}
                  />
                  {errors.loginEmail && <span className="auth-page__error">{errors.loginEmail}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.loginPassword}
                    onChange={(e) => update('loginPassword', e.target.value)}
                    className={errors.loginPassword ? 'error' : ''}
                  />
                  {errors.loginPassword && <span className="auth-page__error">{errors.loginPassword}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                  <button type="submit" className="auth-page__submit">Log In</button>
                </motion.div>
                <motion.p className="auth-page__switch" custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                  Don't have an account?{' '}
                  <button type="button" className="auth-page__switch-link" onClick={() => { setTab('register'); setErrors({}) }}>
                    Register
                  </button>
                </motion.p>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                className="auth-page__form"
                onSubmit={handleSubmit}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className="auth-page__field" custom={0} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-name">Full Name</label>
                  <input
                    id="reg-name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="auth-page__error">{errors.name}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-org">Organization / Company</label>
                  <input
                    id="reg-org"
                    type="text"
                    placeholder="Your company name"
                    value={formData.organization}
                    onChange={(e) => update('organization', e.target.value)}
                  />
                </motion.div>
                <motion.div className="auth-page__field" custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-email">Email Address</label>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="auth-page__error">{errors.email}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-phone">Phone Number</label>
                  <input
                    id="reg-phone"
                    type="tel"
                    placeholder="+88 0XXX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="auth-page__error">{errors.phone}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={4} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-password">Password</label>
                  <input
                    id="reg-password"
                    type="password"
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={(e) => update('password', e.target.value)}
                    className={errors.password ? 'error' : ''}
                  />
                  {errors.password && <span className="auth-page__error">{errors.password}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={5} variants={fieldVariants} initial="hidden" animate="visible">
                  <label htmlFor="reg-confirm">Confirm Password</label>
                  <input
                    id="reg-confirm"
                    type="password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => update('confirmPassword', e.target.value)}
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && <span className="auth-page__error">{errors.confirmPassword}</span>}
                </motion.div>
                <motion.div className="auth-page__field" custom={6} variants={fieldVariants} initial="hidden" animate="visible">
                  <button type="submit" className="auth-page__submit">Register for Stall</button>
                </motion.div>
                <motion.p className="auth-page__switch" custom={7} variants={fieldVariants} initial="hidden" animate="visible">
                  Already have an account?{' '}
                  <button type="button" className="auth-page__switch-link" onClick={() => { setTab('login'); setErrors({}) }}>
                    Log In
                  </button>
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}