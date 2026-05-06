import { motion } from 'motion/react'

interface SpringButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  download?: string
}

export default function SpringButton({
  children,
  href,
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
    ghost: {
      background: 'transparent',
      color: 'inherit',
      borderBottom: '1px solid rgba(255,255,255,0.15)',
      padding: '14px 0',
    },
  }

  const content = (
    <motion.span
      style={{ ...baseStyles, ...variantStyles[variant] }}
      className={className}
      whileHover={{ y: -2, boxShadow: variant === 'primary' ? '0 4px 20px rgba(200,151,62,0.4)' : undefined }}
      whileTap={{ y: 0, boxShadow: 'none' }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} download={download} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0 }}>
      {content}
    </button>
  )
}
