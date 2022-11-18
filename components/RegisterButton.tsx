import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'

export const RegisterButton: React.FC = () => {
  const {pathname} = useRouter()
  const {t} = useTranslation(['common'])

  return <a
    className='flex text-black justify-center items-center w-auto px-6 py-2 text-sm sm:text-lg md:text-2xl font-semibold rounded hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white'
    href="https://forms.gle/c55zGtRRenVvKpGKA"
    rel="noreferrer"
    target="_blank"
  >
    {pathname === '/evento'
      ? 'Regístrate'
      : t('RegisterText')
    }
  </a>
}
