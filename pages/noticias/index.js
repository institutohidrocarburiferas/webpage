import { NoticeCard } from '@components/NoticeCard'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Noticias () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Noticias | IHH</title>
        <meta name="description" content="Noticias IHH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Noticias'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <section className='relative flex items-center bg-gray-600 h-80 '>
          <button className='absolute w-16 h-16 p-2 text-5xl bg-white rounded-full left-5 ' type='text'> {'<'} </button>
          <div
          style ={{
            backgroundImage: 'url("/prueba.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className='w-3/4 h-full mx-auto md:1/2'
          >
          </div>
          <button className='absolute w-16 h-16 p-2 text-5xl bg-white rounded-full right-10' type='text'> {'>'} </button>

        </section>
        <section className='relative'>
          <div className='flex flex-col items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-10 md:flex-row'>

            <NoticeCard
              title={'Poster SAMO'}
              image={'/noticias/poster-samo.png'}
              url={'/noticias/poster-samo'}
            />
            <NoticeCard
              title={'Perspectivas del Sector Energético del Ecuador'}
              image={'/noticias/perspectivas-sector-energetico.jpeg'}
              url={'/noticias/perspectivas-sector-energetico'}
            />
            <NoticeCard
              title={'Perspectivas del Sector Energético del Ecuador'}
              image={'/noticias/perspectivas-sector-energetico.jpeg'}
              url={'/noticias/perspectivas-sector-energetico'}

            />
          </div>
        </section>

      </main>
      {/* <Footer
        bgColor={'gray-400'}
        image={'/prueba.png'}
      /> */}

    </div>
  )
}
