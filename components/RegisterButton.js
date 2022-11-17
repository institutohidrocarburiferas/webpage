import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

// export function RegisterButton () {
//   return <a
//   className='flex text-black justify-center items-center w-auto px-6 py-2 text-sm sm:text-lg md:text-2xl font-semibold rounded hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white'
//   href="https://forms.gle/c55zGtRRenVvKpGKA" target="_blank"
//   rel="noreferrer"
// >
//   Regístrate
// </a>
// }

export function RegisterButton () {
  const { pathname } = useRouter()
  const { t } = useTranslation(['common'])
  return <p
  className='flex text-black justify-center items-center w-1/2 px-2 py-2 text-xs sm:text-lg md:text-2xl font-semibold rounded  bg-gradient-to-tr scroll-smooth  from-amber-500 to-white'
  rel="noreferrer"
>
  {pathname === '/evento'
    ? 'Regístrate a partir del 18 de noviembre'
    : t('RegisterText')
  }

</p>
}
