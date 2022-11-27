import {useRouter} from 'next/router'

import Date from '@components/UI/Date'

function Card ({title, image, url, date, download}) {
  const {locale} = useRouter()

  return (
    <a className='flex items-center justify-around w-full h-auto py-5 mx-auto border-b-2 cursor-pointer md:gap-5 md:p-5 md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-transparent dark:hover:text-black group' href={url} rel="noreferrer" target="_blank">
      <picture className='self-center w-16 md:w-28' >
        <img alt={title} loading="lazy" src={image} />
      </picture>
      <div className='w-3/4 p-2'>
        <h3 className='pb-5 font-semibold text-justify text-md md:text-2xl'>
          {title}
        </h3>
        <div className='flex justify-between'>
          <Date dateString={date} />
          <a
            className='flex items-center gap-3 p-3 font-semibold transition-colors rounded md:p-4 bg-amber-100 hover:bg-amber-300 active:scale-105'
            download={title}
            href={download}
            rel="noopener noreferrer"
          >
            <span className="hidden sm:block dark:text-black">{locale === 'es' ? 'Descargar' : 'Download'}</span>
            <svg fill="none" height={20} stroke="#2c3e50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <polyline points="7 11 12 16 17 11" />
              <line x1="12" x2="12" y1="4" y2="16" />
            </svg>
          </a>
        </div>
      </div>
    </a>
  )
}

export function Publications ({items}) {
  const posts = items.map(({title, image, url, date, download}) => (
    <Card
      key={title}
      date={date}
      download={download}
      image={image}
      title={title}
      url={url}
    />
  ))

  return <section className='flex flex-col w-full max-w-5xl'>
    {/* <h2 className='text-3xl font-bold border-b-2'>
      {title}
    </h2> */}
    <div className='flex flex-col'>
      {posts}
    </div>
  </section>
}
