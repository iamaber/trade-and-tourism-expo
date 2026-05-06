import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useStaggerReveal(selector: string = '.stagger-item', staggerDelay: number = 100) {
  const reducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      containerRef.current?.querySelectorAll(selector).forEach((el) => {
        (el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'none'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = containerRef.current?.querySelectorAll(selector)
            items?.forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * staggerDelay)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [reducedMotion, selector, staggerDelay])

  return containerRef
}
