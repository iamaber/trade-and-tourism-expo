import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useInView } from '@/hooks/useInView'

interface CountUpProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export default function CountUp({ target, suffix = '', duration = 2000, className = '' }: CountUpProps) {
  const reducedMotion = useReducedMotion()
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.3 })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    if (reducedMotion) {
      setCount(target)
      return
    }

    let startTime: number | null = null
    let rafId: number

    const update = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      const current = Math.floor(eased * target)
      setCount(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(update)
      }
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, target, duration, reducedMotion])

  const display = target >= 1000 ? count.toLocaleString() : count

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}
