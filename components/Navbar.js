import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { navItems } from '@constants/navItems'
import { useRouter } from 'next/router'

export function Navbar () {
  const [collapse, setCollapse] = useState('hidden')

  const { pathname } = useRouter()

  const handleCollapse = () => {
    collapse === 'hidden'
      ? setCollapse('block')
      : setCollapse('hidden')
  }

  /*
      1. Logo
      2. Hamburguer svg
      3. Navbar Items
        3.1 Navbar subitems
  */

  return <nav className="px-2.5 sm:py-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link href="/" >
        <a className="flex items-center">
          <Image
            width={279}
            height={80}
            src="/logoiih.jpg"
            className="h-16 mr-2 sm:h-20"
            alt="Instituto de Investigaciones Logo"
          />
        </a>
      </Link>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
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

      <div className={`${collapse} w-full lg:block md:w-auto`}>
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          {
            navItems.map(({ name, url, subItems }) => {
              const styleCurrentPage = 'pointer-events-none text-amber-600'

              return (<li
                className="text-gray-700 group"
                key={name}>

                {
                  (subItems === undefined)
                    ? <Link href={url} >
                      <a
                        className={`${pathname === url && styleCurrentPage} block py-2 pl-3 pr-4 font-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                        onClick={handleCollapse}
                      >
                        {name}
                      </a>
                    </Link>
                    : <div
                      className="block py-2 pl-3 pr-4 text-gray-700 border rounded md:border-none md:hover:bg-transparent md:border-0 md:hover:text-amber-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <span className={`${subItems.some(({ url }) => url === pathname) && styleCurrentPage} font-bold cursor-pointer`}>
                        {name}
                      </span>
                      <ul
                        className="block rounded-md md:border md:block md:transition-opacity md:delay-300 md:opacity-0 md:absolute group-hover:opacity-100 group-hover:transition-opacity"
                      >
                        {
                          subItems.map(({ name, url }) => (

                            <li
                              key={name}
                              className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            >
                              <Link href={url}>
                                <a
                                  className={`${pathname === url && styleCurrentPage} block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                                  onClick={handleCollapse}
                                >
                                  {name}
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
