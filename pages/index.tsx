import type {GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import Head from 'next/head'
import Link from 'next/link'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Countdown} from '@components/Countdown'
import {RegisterButton} from '@components/RegisterButton'
import {HeroSection} from '@components/HeroSection'
import {Separator} from '@components/Layout/Separator'
import {Slider} from '@components/Slider'
import {Footer} from '@components/Layout/Footer'
import {getPostsData, PostsData} from '@utils/posts'

const eventDay = new Date(2024, 6, 26, 8)
const eventURL = '/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica'
const eventLinkForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeA3I-XTxDS0pjfgVLVrOXFni2D7LYteNxGFOftdm_eNxa-7A/viewform'
const eventLinkRegister = 'https://docs.google.com/forms/d/e/1FAIpQLSdcVReGJZ7uxn8FbtWV7yB8wcKZ55fXs1cnXg5Zl6QbJBm2vA/closedform'

const pageData = {
  title: 'Instituto de Investigaciones Hidrocarburíferas',
  image: '/background-footer.jpg',
  description: 'El Instituto de Investigaciones Hidrocarburíferas - IIH es un centro que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas.',
  sliderURL: '/noticias'
}

interface Props {
  allPostsData: PostsData[]
}

const Home: NextPage<Props> = ({allPostsData}) => {
  const {t} = useTranslation(['Home'])
  const heroContent = {
    title: t('HeroTitle'),
    // image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    image: '/background-main.jpg',
    height: '79vh',
    text: t('HeroText')
  }

  return <>
    <Head>
      <title>{pageData.title}</title>
      <meta content={pageData.description} name="description" />
    </Head>
    <main>
      <HeroSection
        height={heroContent.height}
        image={heroContent.image}
        text={heroContent.text}
        title={heroContent.title}
      />

      {/* FORO INTERNACIONAL SECTION */}
      <Separator id={null} />
      <HeroSection
        height='auto'
        image='/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica.jpg'
        justifyContent="center"
        text={t('EventDate')}
        title={t('EventTitle')}
      >
        <section className='text-gray-400'>
          <span>{t('EventCaption')}</span>
        </section>
        {/* Registro y cuenta regresiva */}
        <section className='flex flex-col w-full gap-3 mt-5'>
          <div className='flex flex-wrap items-center justify-center w-full gap-10 lg:justify-start'>
          <picture>
              <img
                alt="Logo del Instituto de Investigaciones Hidrocarburíferas"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                loading="lazy"
                src="/UCE-logo.png"
              />
            </picture>
            <picture>
              <img
                alt="Logo del Ministerio de Energía y Minas"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                loading="lazy"
                src="/logoiih.png"
              />
            </picture>
            <picture>
              <img
                alt="Logo Olade"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto bg-white'
                loading="lazy"
                src="/logos/olade.png"
              />
            </picture>
            <picture>
              <img
                alt="Logo de Student Energy"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                loading="lazy"
                src="/logos/student-energy-uce.jpg"
              />
            </picture>

          </div>

          <div className='flex flex-col items-center w-full gap-10 mt-8 xl:gap-44 lg:flex-row'>
            <div className='grid grid-cols-1 gap-4 w-fit xl:w-full'>
              <Link
                className='flex items-stretch justify-center px-2 py-2 font-semibold text-center text-white transition-transform bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105 active:scale-95'
                href={eventURL}
              >
                  {t('EventInfoText')}
              </Link>

              <div>
                <RegisterButton className='opacity-50 pointer-events-none' href={eventLinkForm}>
                  Envíanos tu Póster hasta el 20 de Junio
                </RegisterButton>
                <span className="text-xs text-white lg:text-sm">
                  Enlace habilitado del 20 de mayo al 20 de junio del 2024
                </span>
              </div>
              <div>
                <RegisterButton className='opacity-50 pointer-events-none' href={eventLinkRegister}>
                  Asiste al evento
                </RegisterButton>
                <span className="text-xs text-white lg:text-sm">Inscripciones a partir del 1 de Junio</span>
              </div>
            </div>
            <Countdown eventDate={eventDay} />
          </div>
        </section>
      </HeroSection>

      {/* CONSUMOS PASTAZA SECTION */}
      <Separator id={null} />
      <HeroSection
        height='70vh'
        image='/images/Home/seccion_pastaza.jpg'
        justifyContent="left"
        text={t('ConsumosPastazaSubtitle')}
        title={t('ConsumosPastazaTitle')}
      >
        <section className='grid lg:grid-cols-2'>
          <div className='grid items-stretch w-full grid-cols-2 gap-5 mt-10 md:items-center lg:items-stretch justify-evenly md:justify-center lg:justify-start md:gap-14'>
            <Link
              className='flex items-center justify-center w-auto max-w-sm px-2 py-1 text-xs font-semibold text-center text-black rounded md:px-6 md:py-2 sm:text-lg md:text-xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white'
              href="/proyectos-investigacion/consumos-pastaza"
            >
              {t('PastazaLinkPrimary')}
            </Link>
            <Link
              className='flex items-center justify-center w-auto px-2 py-2 text-xs font-semibold text-center text-white bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105'
              href="/proyectos-investigacion/"
            >
              {t('PastazaLinkSecondary')}
            </Link>

          </div>
        </section>
      </HeroSection>

      <div className='container mx-auto'>
        {/* Recent notices section */}
        <section className='flex flex-col gap-5 p-5 py-5 my-4 md:my-12 md:px-12'>
          <h2 className='p-2 mx-auto text-3xl font-semibold border-b-2 md:text-4xl lg:text-5xl sm:px-20 md:px-32 lg:px-40'>
            {t('RecentNewsTitle')}
          </h2>
          <Slider
            data={allPostsData}
            slice={4}
            urlPath={pageData.sliderURL}
          />
        </section>
      </div>
    </main>
    <Footer image={pageData.image} />
  </>
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.sliderURL, locale!)
  const allPostsData = getPostsData(dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      allPostsData, ...i18nConf
    }
  }
}

export default Home
