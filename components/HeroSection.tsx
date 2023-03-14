import type {ReactNode} from 'react'

import {useIntersection} from '@utils/hooks/useIntersection'

interface Props {
  title: string
  text: string
  image: string
  height?: string
  justifyContent?: 'center' | 'right' | 'left'
  children?: ReactNode
}

export const HeroSection: React.FC<Props> = ({
  title,
  text,
  image,
  height = '100vh',
  justifyContent = 'center',
  children,
}) => {
  const containerRef = useIntersection()
  const childrenRef = useIntersection()

  return (
    <div
      className="p-5 sm:px-16 md:py-12 md:pl-24"
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
      }}>
      <div ref={containerRef.ref}>
        {containerRef.isNear
          ? <div className="container flex flex-col gap-5 animate-fade">
            <h2>
              <p className='inline-block text-3xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-amber-400 via-orange-400 to-amber-400 lg:max-w-4xl
              sm:text-4xl md:text-5xl lg:text-6xl'>{title}</p>
            </h2>
            <p className='leading-normal tracking-wider text-gray-100 lg:text-justify'
              style={{
                fontSize: 'clamp(0.9rem, 0.75rem + 1vw, 1.5rem)'
              }}>{text}</p>
          </div>
          : null}
      </div>
      <div ref={childrenRef.ref}>
        {childrenRef.isNear
          ? <div className='w-full animate-fade'>
            {children}
          </div>
          : null}
      </div>

    </div>
  )
}
