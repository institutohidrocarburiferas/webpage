import { HeroSection } from '@components/HeroSection'
import { Slider } from '@components/Slider'
import { Footer } from '@components/Footer'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import Head from 'next/head'
import Link from 'next/link'
// import { TitlePage } from '@components/TitlePage'

const pageData = {
  title: 'Instituto de Investigaciones Hidrocarburíferas',
  image: '/prueba.png',
  description: 'Instituto de Investigaciones Hidrocarburíferas',
  sliderURL: '/noticias'
}

const heroContent = {
  title: 'Nosotros',
  image: '/prueba.png',
  text: 'IIH es un organismo de investigación que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.'
}

export default function Home ({ allPostsData }) {
  return <>
    <Head>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
    </Head>
    {/* <TitlePage image={'/prueba.png'} /> */}
    <main>
      <HeroSection
        title={heroContent.title}
        text={heroContent.text}
      />
      <HeroSection title={'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR'} text={'miércoles 23 de noviembre del 2022'}>
      <Link href="/evento">
          <a className='bg-white p-5 rounded  hover:scale-105 block w-44 font-bold'>
              Revisar el evento
          </a>
        </Link>
      </HeroSection>

      <div className='container mx-auto dark:text-gray-100'>
        {/* Recent notices section */}
        <section className='flex flex-col gap-5 p-5 my-12'>
          <h2 className='px-2 py-1 mx-auto text-3xl border-b-2 sm:px-20 md:px-40'>
            Noticias recientes
          </h2>
          <Slider
            data={allPostsData}
            urlPath={pageData.sliderURL}
          />
        </section>
      </div>
    </main>
    <Footer image={pageData.image} />
  </>
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.sliderURL)
  const allPostsData = getPostsData(dataDirectory)
  return {
    props: {
      allPostsData
    }
  }
}
