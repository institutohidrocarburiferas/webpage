import { NoticeCard } from '@components/NoticeCard'
import { Carousel } from '@components/Carousel'
import { TitlePage } from '@components/TitlePage'
import { notices } from '@constants/notices'
import Head from 'next/head'

export default function Noticias () {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Noticias | IHH</title>
        <meta name="description" content="Noticias IHH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Noticias'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>

        <Carousel items={notices} />
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-10 md:flex-row'>

            {
              notices.map(({ title, image, url }) => (
                <NoticeCard
                  key={title}
                  title={title}
                  image={image}
                  url={url}
                />
              ))
            }
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
