import { HeroSection } from '@components/HeroSection'
import { Slider } from '@components/Slider'
import { Footer } from '@components/Footer'
import { colaboradores } from '@constants/colaboradores-externos'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import Head from 'next/head'
import Link from 'next/link'
import { Participants } from '@components/Participants'
import { Separator } from '@components/Separator'
import Image from 'next/image'
import { Countdown } from '@components/Countdown'

const eventDay = '2022-11-23T09:00:00.000Z'

const pageData = {
  title: 'Instituto de Investigaciones Hidrocarburíferas',
  image: '/prueba.png',
  description: 'Instituto de Investigaciones Hidrocarburíferas',
  sliderURL: '/noticias'
}

const heroContent = {
  title: 'Nosotros',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  height: '75vh',
  text: 'Instituto de Investigaciones Hidrocarburíferas es un organismo de investigación que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.'
}

export default function Home ({ allPostsData }) {
  return <>
    <Head>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
    </Head>
    <main>
      {/* <div className='animate-leftEntry'> */}
      <HeroSection
        title={heroContent.title}
        image={heroContent.image}
        height={heroContent.height}
        text={heroContent.text}
      />
      {/* </div> */}

      <Separator />
      <HeroSection
        title={'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR'}
        text={'miércoles 23 de noviembre del 2022'}
        image='https://images.unsplash.com/photo-1491914045721-6f2dd87cf09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        height='auto'
        justifyContent="center"
      >
        <section className='text-gray-400'>
          <span>Presencial - Cupos limitados</span>
        </section>
        {/* Registro y cuenta regresiva */}
        <section className='flex flex-col w-full gap-8 mt-10'>
          <div className='flex gap-10'>
            <Image
              width={206}
              height={112}
              src="/evento/ministerio-energia-minas.jpg"
              alt="Ministerio de Energía y Minas"
            />
            <Image
              width={112}
              height={112}
              src="/UCE-logo.png"
              alt="Universidad Central del Ecuador Logo"
            />

          </div>

          <div className='flex flex-col items-center w-full gap-5 md:flex-row'>
            <div className='flex items-center w-full justify-evenly md:justify-start md:gap-14'>

              <a className='flex justify-center w-auto px-6 py-2 text-2xl font-semibold rounded hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white' href="https://forms.gle/c55zGtRRenVvKpGKA" target="_blank" rel="noreferrer"
              >
                Regístrate
              </a>
              <Link href="/evento">
              <a className='flex justify-center w-auto px-6 py-2 text-xl font-semibold text-white bg-transparent border border-white rounded md:text-2xl hover:scale-105'
              >
                Información del evento
              </a>
              </Link>

            </div>

            <Countdown eventDate={eventDay} />
          </div>
        </section>

      </HeroSection>

      <div className='container mx-auto dark:text-gray-100'>
        {/* Recent notices section */}
        <section className='flex flex-col gap-5 p-5 my-12'>
          <h2 className='px-2 py-1 mx-auto text-4xl font-bold border-b-2 sm:px-20 md:px-40'>
            Noticias recientes
          </h2>
          <Slider
            data={allPostsData}
            urlPath={pageData.sliderURL}
          />
        </section>
        <Participants title="Colaboradores externos" data={colaboradores} />

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
