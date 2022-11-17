import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { navItems } from '@constants/navItems'
import cn from 'classnames'

export function Navbar () {
  const [collapse, setCollapse] = useState('hidden')

  const { pathname, locale } = useRouter()

  const handleCollapse = () => {
    collapse === 'hidden'
      ? setCollapse('block')
      : setCollapse('hidden')
  }

  return <nav className={cn('w-full h-24 bg-white shadow dark:bg-gray-900 shadow-gray-400 top-0 z-10',
    { fixed: pathname === '/evento' },
    { sticky: pathname !== '/evento' }
  )}>
    <div
      className="container bg-white dark:bg-gray-900 px-2.5 flex flex-wrap items-center  justify-between w-full mx-auto  z-10 lg:flex-nowrap">
      {/* Logo */}
      <Link href="/" >
        <a
          className='w-4/5 sm:w-auto'
          onClick={() => setCollapse('hidden')}
        >
          <Image
            width={325}
            height={90}
            src="/logoiih.png"
            alt="Logo del Instituto de Investigaciones"
          />
        </a>
      </Link>
      {/* Button */}
      <button
        type="button"
        data-collapse-toggle="navbar-default"
        aria-controls="navbar-default"
        aria-expanded="false"
        className="p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleCollapse}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Nav items  */}
      <div
        className={cn(collapse, 'w-full lg:block md:w-auto')}>
        <ul className="flex flex-col p-4 px-4 my-4 border border-gray-100 rounded-lg lg:my-0 xl:gap-5 md:px-0 bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          {
            navItems.map(({ name, nameEn, url, subItems }) => {
              const styleCurrentPage = 'pointer-events-none text-amber-600 dark:text-amber-600'

              return (<li
                className="group"
                key={name}>

                {
                  (subItems === undefined)
                    ? <Link href={url} >
                      <a
                        className={cn(
                          'rounded transition-colors delay-75 md:border-b-2 md:rounded-none border-transparent hover:md:border-amber-600 block py-2 pl-3 pr-4 font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700  md:py-2 md:px-0 dark:hover:bg-gray-700 dark:hover:text-amber-600 dark:hover:md:border-amber-600 md:dark:hover:bg-transparent',
                          { [styleCurrentPage]: pathname === url },
                          { 'md:border-amber-600': pathname === url }

                        )}
                        onClick={() => setCollapse('hidden')}
                      >
                        {locale === 'es' ? name : nameEn}
                      </a>
                    </Link>
                    : <div
                      className={cn('block py-2 pl-3 pr-4 border rounded  md:hover:bg-transparent md:rounded-none md:border-0 md:hover:text-amber-600 md:px-0 md:py-2  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-600',
                        { 'md:border-amber-600 md:border-b-2': subItems.some(({ url }) => url === pathname) }
                      )}
                    >
                      <span className={cn('font-semibold md:cursor-pointer',
                        { 'text-amber-600 dark:text-amber-600': subItems.some(({ url }) => url === pathname) }
                      )}
                      >
                        {locale === 'es' ? name : nameEn}
                      </span>
                      <ul
                        className={cn(' block rounded-md md:pointer-events-none md:border md:block md:transition-opacity md:delay-300 group-hover:md:delay-75 md:opacity-0 md:absolute group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transition-opacity dark:hover:bg-gray-700 dark:bg-gray-700 dark:border-gray-600',
                          { [styleCurrentPage]: subItems.some(({ url }) => url === pathname) })}
                      >
                        {
                          subItems.map(({ name, nameEn, url }) => (

                            <li
                              key={name}
                              className="w-full py-1 text-sm font-semibold text-gray-700 lg:w-44 md:bg-white dark:md:bg-gray-700"
                            >
                              <Link href={url}>
                                <a
                                  className={cn('block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white',
                                    { [styleCurrentPage]: pathname === url })}
                                  onClick={() => setCollapse('hidden')}
                                >
                                  {locale === 'es' ? name : nameEn}
                                </a>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                }
              </li>)
            })
          }
        </ul>
      </div>
    </div>
  </nav>
}
