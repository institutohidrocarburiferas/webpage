import { NoticeCard } from '@components/NoticeCard'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'
import { notices } from '@constants/notices'
import { Text } from '@components/Text'

export default function Home () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Instituto de Investigaciones Hidrocarburíferas</title>
        <meta name="description" content="Instituto de Investigaciones Hidrocarburíferas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={''} image={'/prueba.png'} />
      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
            <Text >
              IIH es un organismo de investigación que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.
            </Text>
        </article>
        <section className='relative flex flex-col gap-10'>
          <h2 className='px-2 py-1 mx-auto text-3xl border-b-2 sm:px-20 md:px-40'>Noticias más importantes</h2>
          <div className='flex flex-col items-center justify-center gap-10 pb-20 pl-4 pr-8 md:flex-row'>

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
    </div>
  )
}
