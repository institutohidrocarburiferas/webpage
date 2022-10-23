import Image from 'next/image'
import Date from '@components/Date'

function Card ({ title, image, url, date, download }) {
  return (
    <a href={url} target="_blank" className='flex items-center w-full h-auto justify-around gap-5 py-5 md:p-5 mx-auto border-b-2 cursor-pointer md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-white group' rel="noreferrer">
      <div
        className='grid w-24 h-24 place-content-center group:hover:scale-105 rounded'>
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
        />
      </div>
      <div className='w-3/4'>
        <h3 className='text-lg md:text-2xl font-semibold'>
          {title}
        </h3>
        <div className='flex justify-between items-center'>
          <Date dateString={date} />
          <a
            className='flex gap-3 items-center bg-amber-100 rounded p-4 font-semibold hover:bg-amber-300 transition-colors active:scale-105'
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

  return <section className='flex flex-col w-full max-w-4xl pb-10 '>
    {/* <h2 className='text-3xl font-bold border-b-2'>
      {title}
    </h2> */}
    <div className='flex flex-col'>
      {posts}
    </div>
  </section>
}
