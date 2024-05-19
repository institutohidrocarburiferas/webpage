import {useRouter} from 'next/router'
import cn from 'classnames'

export const TopArea: React.FC = () => {
  const router = useRouter()
  const {pathname, asPath, locales, locale, push} = router

  if (pathname.substring(1, 8) === 'eventos' || locales === undefined || locale === undefined) {
    return <div aria-disabled className="w-full h-24" id="top-area"/>
  }

  const languajes = locales.map((local) => (
    <button
      key={local}
      className={cn('px-2 py-1 rounded', {'border bg-gray-50 dark:bg-gray-700': local === locale, 'hover:bg-gray-100 dark:hover:bg-gray-700': local !== locale})}
      onClick={() => push(
        pathname,
        asPath,
        {locale: local}
      )}
    >
      {local.toUpperCase()}
    </button>
  ))

  return <div className='w-full h-auto'>
    {/* Container */}
    <div className='container flex flex-row-reverse items-center h-full'>
      <section className='flex items-center gap-2 p-2 text-sm'>
        <p>{locale === 'es' ? 'Idioma:' : 'Language:'}</p>
        {languajes}
      </section>
    </div>
  </div>
}
