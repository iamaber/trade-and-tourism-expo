import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useInView } from '@/hooks/useInView'

interface ProgressBarProps {
  width: number
  color?: string
  className?: string
  delay?: number
}

export default function ProgressBar({ width, color = 'var(--gold)', className = '', delay = 0 }: ProgressBarProps) {
  const reducedMotion = useReducedMotion()
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [animated, setAnimated] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    if (reducedMotion) {
      setAnimated(true)
      return
    }

    const timer = setTimeout(() => setAnimated(true), delay)
    return () => clearTimeout(timer)
  }, [isInView, reducedMotion, delay])

  return (
    <div ref={ref} className={className} style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
      <div
        style={{
          height: '100%',
          width: animated ? `${width}%` : '0%',
          background: color,
          transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  )
}
