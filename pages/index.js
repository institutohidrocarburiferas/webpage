import { BreakSection } from '@components/BreakSection'
import { NoticeCard } from '@components/NoticeCard'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Home () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Instituto de Investigaciones Hidrocarburíferas</title>
        <meta name="description" content="Instituto de Investigaciones Hidrocarburíferas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Título'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <p className='leading-loose tracking-wide md:text-lg'>IIH es un organismo de investigación que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.
          </p>
        </article>

        <section className='relative'>
          <BreakSection position={'-top-20'} />
          <div className='flex flex-col items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-40 bg-gray-400 md:flex-row'>

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
