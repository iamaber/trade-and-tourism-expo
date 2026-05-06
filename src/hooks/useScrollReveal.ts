import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useScrollReveal(selector: string = '.reveal') {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [reducedMotion, selector])
}
