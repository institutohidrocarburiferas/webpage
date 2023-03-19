import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'

import {exception} from '@components/Navbar'

export const RegisterButton: React.FC = () => {
  const {pathname} = useRouter()
  const {t} = useTranslation(['common'])

  return <Link className='flex items-center justify-center text-center py-1 w-auto px-2 text-xs font-semibold text-black rounded md:px-6 md:py-2 sm:text-lg md:text-xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white' href={`${exception}/#expositions`}>
    {/* // href="https://forms.gle/c55zGtRRenVvKpGKA"
    // rel="noreferrer"
    // target="_blank" */}
    {pathname === '/evento'
      ? 'Descarga las ponencias del foro'
      : t('RegisterText')
    }
  </Link >
}

// return <p
// className='flex items-center justify-center w-auto px-2 text-sm font-semibold text-black rounded md:px-6 md:py-2 sm:text-lg md:text-2xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white'
// // href="https://forms.gle/c55zGtRRenVvKpGKA"
// // rel="noreferrer"
// // target="_blank"
// >
// {pathname === '/evento'
//   ? 'Registro finalizado'
//   : t('RegisterText')
// }
// </p>
