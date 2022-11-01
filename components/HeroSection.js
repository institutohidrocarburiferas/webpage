import { useEffect, useRef } from 'react'

export function HeroSection ({
  title,
  text,
  image,
  height = '100vh',
  justifyContent = 'center',
  children,
}) {
  const containerRef = useRef(null)
  const childrenRef = useRef(null)

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        containerRef.current.classList.add('animate-fade')
        childrenRef.current.classList.add('animate-fade')

        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange,
      {
        rootMargin: '0px'
      })

    observer.observe(containerRef.current)
    observer.observe(childrenRef.current)

    return () => observer.disconnect()
  })

  return (
    <div

      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${image})`,
        display: 'grid',
        height,
        justifyContent,
        alignContent: 'center',
        maxHeight: 1000,
      }}
      className="p-5 sm:px-16 md:py-12 md:pl-24">
      <div ref={containerRef} className="container opacity-0 flex flex-col gap-5">
        <h2>
          <p className='inline-block text-4xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-amber-400 via-orange-500 to-orange-500 sm:text-4xl md:text-5xl lg:text-6xl'>{title}</p>
        </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 0.75rem + 1vw, 1.5rem)'
        }} className='leading-normal tracking-wider text-gray-100 lg:text-justify'>{text}</p>
      </div>
      <div ref={childrenRef} className='w-full opacity-0'>
        {children}
      </div>
    </div>
  )
}
