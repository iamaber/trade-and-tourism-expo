import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useParallax(speed: number = 0.5) {
  const reducedMotion = useReducedMotion()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (reducedMotion) return

    const onScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, reducedMotion])

  return reducedMotion ? 0 : offset
}
