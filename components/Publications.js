import Date from '@components/Date'

function Card ({ title, image, url, date, download }) {
  return (
    <a href={url} target="_blank" className='flex items-center justify-around w-full h-auto gap-5 py-5 mx-auto border-b-2 cursor-pointer md:p-5 md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-white group' rel="noreferrer">
      <picture className='w-28 self-center' >
        <img src={image} alt={title} loading="lazy" />
      </picture>
      <div className='w-3/4'>
        <h3 className='text-lg font-semibold md:text-xl text-justify'>
          {title}
        </h3>
        <div className='flex items-center justify-between'>
          <Date dateString={date} />
          <a
            className='flex items-center gap-3 p-4 font-semibold transition-colors rounded bg-amber-100 hover:bg-amber-300 active:scale-105'
            href={download}
            download={title}
            rel="noopener noreferrer"
          >
            <span>Descargar</span>
            <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <polyline points="7 11 12 16 17 11" />
              <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
          </a>
        </div>
      </div>
    </a>
  )
}

export function Publications ({ items, title }) {
  const posts = items.map(({ title, image, url, date, download }) => (
    <Card
      key={title}
      title={title}
      image={image}
      date={date}
      url={url}
      download={download}
    />
  ))

  return <section className='flex flex-col w-full max-w-4xl'>
    {/* <h2 className='text-3xl font-bold border-b-2'>
      {title}
    </h2> */}
    <div className='flex flex-col'>
      {posts}
    </div>
  </section>
}
