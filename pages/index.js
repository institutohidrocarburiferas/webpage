import { HeroSection } from '@components/HeroSection'
import { Slider } from '@components/Slider'
import { Footer } from '@components/Footer'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import Head from 'next/head'
// import { TitlePage } from '@components/TitlePage'

const content = {
  title: 'Nosotros',
  text: 'IIH es un organismo de investigación que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.'
}
const titlePage = 'Instituto de Investigaciones Hidrocarburíferas'

export default function Home ({ allPostsData }) {
  return <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={titlePage} />
      </Head>
      {/* <TitlePage image={'/prueba.png'} /> */}
      <HeroSection
        title={content.title}
        text={content.text}
      />
      <main className='container mx-auto dark:text-gray-100'>
        <section className='flex flex-col gap-5 p-5 my-12'>
          <h2 className='px-2 py-1 mx-auto text-3xl border-b-2 sm:px-20 md:px-40'>
            Noticias recientes
          </h2>
          <Slider
            data={allPostsData}
            urlPath={'/noticias'}
          />
        </section>
      </main>
      <Footer />
    </>
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', 'notices')
  const allPostsData = getPostsData(dataDirectory)
  return {
    props: {
      allPostsData
    }
  }
}
