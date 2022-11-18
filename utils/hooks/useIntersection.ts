import {useEffect, useRef, useState} from 'react'

export const useIntersection = (
  rootMargin: string = '0px',
) => {
  const [isNear, setIsNear] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(function () {
    const onChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setIsNear(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange,
      {
        rootMargin,
      })

    observer.observe(ref.current!)

    return () => observer.disconnect()
  }, [rootMargin])

  return {isNear, ref}
}
