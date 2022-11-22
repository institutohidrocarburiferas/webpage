import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'

export const RegisterButton: React.FC = () => {
  const {pathname} = useRouter()
  const {t} = useTranslation(['common'])

  return <p
    className='flex items-center justify-center w-auto p-2 text-sm font-semibold text-black rounded sm:px-6 sm:py-2 sm:text-lg md:text-xl bg-gradient-to-tr from-amber-500 to-white'
    // href="https://forms.gle/c55zGtRRenVvKpGKA"
    // rel="noreferrer"
    // target="_blank"
  >
    {pathname === '/evento'
      ? 'Registro finalizado'
      : t('RegisterText')
    }
  </p>
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
