import { Countdown } from '@components/Countdown'
import { HeroSection } from '@components/HeroSection'
import { Participants } from '@components/Participants'
import { Separator } from '@components/Separator'
import { Slider } from '@components/Slider'
import { Footer } from '@components/Footer'
import { colaboradores } from '@constants/colaboradores-externos'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import Head from 'next/head'
import Link from 'next/link'
import { RegisterButton } from '@components/RegisterButton'

const eventDay = new Date(2022, 10, 23, 8)

const pageData = {
  title: 'Instituto de Investigaciones Hidrocarburíferas',
  image: '/prueba.png',
  description: 'El Instituto de Investigaciones Hidrocarburíferas - IIH es un centro que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas.',
  sliderURL: '/noticias'
}

const heroContent = {
  title: 'Nosotros',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  height: '77vh',
  text: 'El Instituto de Investigaciones Hidrocarburíferas - IIH es un centro que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas; tales como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo. Finalmente contribuye al debate de sostenibilidad más allá de la ilusión de una disponibilidad energética ilimitada y una solución tecnológica.'
}

export default function Home ({ allPostsData }) {
  return <>
    <Head>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
    </Head>
    <main>
      <HeroSection
        title={heroContent.title}
        image={heroContent.image}
        height={heroContent.height}
        text={heroContent.text}
      />

      <Separator />
      <HeroSection
        title={'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR'}
        text={'miércoles, 23 de noviembre de 2022'}
        image='https://images.unsplash.com/photo-1491914045721-6f2dd87cf09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        height='auto'
        justifyContent="center"
      >
        <section className='text-gray-400'>
          <span>Presencial - Cupos limitados</span>
        </section>
        {/* Registro y cuenta regresiva */}
        <section className='flex flex-col w-full gap-8 mt-10'>
          <div className='flex justify-center w-full h-20 gap-10 md:h-auto items-center lg:justify-start'>
            <picture>
              <img
                className='h-16 rounded md:h-24 aspect-auto'
                src="/eventos/foro-internacional-prospectiva-energetica/ministerio-energia-minas.jpg"
                alt="Ministerio de Energía y Minas"
                loading="lazy"
              />
            </picture>
            <picture>
              <img
                className='h-20 max-w-xs rounded md:h-28 aspect-auto'
                src="/UCE-logo.png"
                alt="Universidad Central del Ecuador Logo"
                loading="lazy"
              />
            </picture>
          </div>

          <div className='flex flex-col items-center w-full gap-5 lg:flex-row'>
            <div className='flex items-stretch w-full md:items-center lg:items-stretch justify-evenly md:justify-center lg:justify-start md:gap-14'>
              <RegisterButton />
              <Link href="/evento">
                <a className='flex justify-center w-auto px-2 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105'
                >
                  Información del evento
                </a>
              </Link>
            </div>
            <Countdown eventDate={eventDay} />
          </div>
        </section>
      </HeroSection>

      <div className='container mx-auto'>
        {/* Recent notices section */}
        <section className='flex flex-col gap-5 p-5 py-5 my-12 md:px-12'>
          <h2 className='p-2 mx-auto text-3xl font-semibold border-b-2 md:text-4xl lg:text-5xl sm:px-20 md:px-32 lg:px-40'>
            Noticias recientes
          </h2>
          <Slider
            data={allPostsData}
            urlPath={pageData.sliderURL}
          />
        </section>
        <Participants title="Colaboración con otros centros de investigación" data={colaboradores} />
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
