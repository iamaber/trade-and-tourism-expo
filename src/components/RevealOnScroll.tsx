import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useInView } from '@/hooks/useInView'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const reducedMotion = useReducedMotion()
  const [ref, isInView] = useInView<HTMLDivElement>()

  const baseClass =
    direction === 'up'
      ? 'reveal'
      : direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : 'reveal-scale'

  const delayClass = delay > 0 ? `delay-${Math.min(delay, 8)}` : ''

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass} ${className} ${isInView ? 'revealed' : ''}`}
      style={delay > 8 ? { transitionDelay: `${delay * 0.1}s` } : undefined}
    >
      {children}
    </div>
  )
}
