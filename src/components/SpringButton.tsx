import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface SpringButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'outlineDark' | 'ghost'
  className?: string
  download?: boolean | string
}

export default function SpringButton({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  className = '',
  download,
}: SpringButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '1rem 2rem',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--navy)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--white)',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    outlineDark: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '1px solid var(--navy)',
    },
    ghost: {
      background: 'transparent',
      color: 'inherit',
      borderBottom: '1px solid rgba(255,255,255,0.15)',
      padding: '14px 0',
    },
  }

  const motionProps = {
    whileHover: { y: -2, boxShadow: variant === 'primary' ? '0 4px 20px rgba(240,126,33,0.4)' : undefined },
    whileTap: { y: 0, boxShadow: 'none' },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  }

  const isHashLink = typeof href === 'string' && href.startsWith('#')
  const handleHashClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHashLink || !href) return

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()
    const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 0
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12
    window.scrollTo({ top, behavior: 'smooth' })
    window.history.replaceState(null, '', href)
  }

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <motion.span
          style={{ ...baseStyles, ...variantStyles[variant] }}
          className={className}
          {...motionProps}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} download={download} onClick={handleHashClick} style={{ textDecoration: 'none' }}>
        <motion.span
          style={{ ...baseStyles, ...variantStyles[variant] }}
          className={className}
          {...motionProps}
        >
          {children}
        </motion.span>
      </a>
    )
  }

  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0 }}>
      <motion.span
        style={{ ...baseStyles, ...variantStyles[variant] }}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.span>
    </button>
  )
}
