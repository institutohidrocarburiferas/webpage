import type {GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import Head from 'next/head'
import Link from 'next/link'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {exception} from '@components/Navbar'
import {Countdown} from '@components/Countdown'
import {RegisterButton} from '@components/RegisterButton'
import {HeroSection} from '@components/HeroSection'
import {Participants} from '@components/Participants'
import {Separator} from '@components/Layout/Separator'
import {Slider} from '@components/Slider'
import {Footer} from '@components/Layout/Footer'
import {colaboradores} from '@constants/colaboradores-externos'
import {getPostsData, PostsData} from '@utils/posts'

const eventDay = new Date(2022, 10, 23, 8)

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
          <div className='mt-10 grid grid-cols-2 items-stretch w-full md:items-center lg:items-stretch justify-evenly md:justify-center lg:justify-start gap-5 md:gap-14'>
            <Link href="/proyectos-investigacion/consumos-pastaza">
              <a className='flex max-w-sm items-center justify-center text-center py-1 w-auto px-2 text-xs font-semibold text-black rounded md:px-6 md:py-2 sm:text-lg md:text-xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white'
              >
                {t('PastazaLinkPrimary')}
              </a>
            </Link>
            <Link href="/proyectos-investigacion/">
              <a className='flex justify-center text-center items-center w-auto px-2 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105'
              >
                {t('PastazaLinkSecondary')}
              </a>
            </Link>

          </div>
        </section>
      </HeroSection>

      {/* FORO INTERNACIONAL SECTION */}

      <Separator id={null} />
      <HeroSection
        height='auto'
        image='https://images.unsplash.com/photo-1491914045721-6f2dd87cf09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        justifyContent="center"
        text={t('EventDate')}
        title={t('EventTitle')}
      >
        <section className='text-gray-400'>
          <span>{t('EventCaption')}</span>
        </section>
        {/* Registro y cuenta regresiva */}
        <section className='flex flex-col w-full gap-3 mt-5'>
          <div className='flex items-center justify-center w-full gap-10 lg:justify-start'>
            <picture>
              <img
                alt="Logo del Ministerio de Energía y Minas"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                loading="lazy"
                src="/eventos/foro-internacional-prospectiva-energetica/ministerio-energia-minas.jpg"
              />
            </picture>
            <picture>
              <img
                alt="Logo de la Universidad Central del Ecuador"
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                loading="lazy"
                src="/UCE-logo.png"
              />
            </picture>
          </div>

          <div className='flex flex-col items-center w-full gap-5 lg:flex-row'>
            <div className='grid grid-cols-2 items-stretch w-full md:items-center lg:items-stretch justify-evenly md:justify-center lg:justify-start gap-5 md:gap-14'>
              <Link href={exception}>
                <a className='flex justify-center text-center items-center w-auto px-2 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105'
                >
                  {t('EventInfoText')}
                </a>
              </Link>
              {/* Nombre de componente deprecado */}
              <RegisterButton />
            </div>
            <Countdown eventDate={eventDay} />
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
        <Participants data={colaboradores} title={t('ColaborationTitle')} />
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
