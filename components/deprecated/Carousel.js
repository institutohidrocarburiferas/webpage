import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Carousel ({ items }) {
  const [current, setCurrent] = useState(0)

  const { title, image, url } = items[current]

  useEffect(() => {
    const interval = window.setInterval(handleNext, 10000)

    return () => clearInterval(interval)
  })

  function handlePrev () {
    if (current === 0) setCurrent(2)
    else setCurrent(current - 1)
  }

  function handleNext () {
    if (current === 2) setCurrent(0)
    else setCurrent(current + 1)
  }

  return <div style={{ width: '80%' }} className="container relative w-full mx-auto">
    {/* Carousel wrapper */}
    <div className="relative h-56 rounded-lg md:h-96">
        <Item key={title} title={title} image={image} url={url} />
    </div>
    {/* Slider indicators */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
      <button
        type="button"
        className={`${current === 0 ? 'bg-white' : 'bg-white/50'} w-3 h-3 rounded-full dark:bg-gray-800`}
        aria-label="Slide 1"
        onClick = {() => setCurrent(0)}
      />
      <button
        type="button"
        className={`${current === 1 ? 'bg-white' : 'bg-white/50'} w-3 h-3 rounded-full dark:bg-gray-800`}
        aria-label="Slide 2"
        onClick = {() => setCurrent(1)}
      />
      <button
        type="button"
        className={`${current === 2 ? 'bg-white' : 'bg-white/50'} w-3 h-3 rounded-full dark:bg-gray-800`}
        aria-label="Slide 3"
        onClick = {() => setCurrent(2)}
      />
    </div>
    {/* Slider controls */}
    <button
      type="button"
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick = {handlePrev}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick = {handleNext}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
}

function Item ({ title, image, url }) {
  return <Link href={url} >
    <a
    className="z-20 h-full transition-all duration-700 ease-in-out transform translate-x-0 w-fullrounded-lg"
  >
    <img
      src={image}
      className="block object-cover object-top w-full h-full rounded-lg"
      alt={title}
    />

    <span className='absolute bottom-0 w-full h-20 py-5 text-xl font-bold text-center text-white rounded-b-xl bg-black/60'>
      {title}
    </span>
  </a>
  </Link>
}
