import { Countdown } from '@components/Countdown'
import { HeroSection } from '@components/HeroSection'
import { Participants } from '@components/Participants'
import { Separator } from '@components/Separator'
import { Slider } from '@components/Slider'
import { RegisterButton } from '@components/RegisterButton'
import { Footer } from '@components/Footer'
import { colaboradores } from '@constants/colaboradores-externos'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const eventDay = new Date(2022, 10, 23, 8)

const pageData = {
  title: 'Instituto de Investigaciones Hidrocarburíferas',
  image: '/prueba.png',
  description: 'El Instituto de Investigaciones Hidrocarburíferas - IIH es un centro que desarrolla investigaciones hidrocarburíferas y de energía bajo la comprensión profunda de aspectos cruciales en la relación de los sistemas socioeconómicos y los ecosistemas.',
  sliderURL: '/noticias'
}

export default function Home ({ allPostsData }) {
  const { t } = useTranslation(['Home'])
  const heroContent = {
    title: t('HeroTitle'),
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    height: '77vh',
    text: t('HeroText')
  }

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
        title={t('EventTitle')}
        text={t('EventDate')}
        image='https://images.unsplash.com/photo-1491914045721-6f2dd87cf09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        height='auto'
        justifyContent="center"
      >
        <section className='text-gray-400'>
          <span>{t('EventCaption')}</span>
        </section>
        {/* Registro y cuenta regresiva */}
        <section className='flex flex-col w-full gap-3 mt-5'>
          <div className='flex items-center justify-center w-full gap-10 lg:justify-start'>
            <picture>
              <img
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                src="/eventos/foro-internacional-prospectiva-energetica/ministerio-energia-minas.jpg"
                alt="Logo del Ministerio de Energía y Minas"
                loading="lazy"
              />
            </picture>
            <picture>
              <img
                className='h-16 rounded sm:h-24 lg:h-32 aspect-auto'
                src="/UCE-logo.png"
                alt="Logo de la Universidad Central del Ecuador"
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
                  {t('EventInfoText')}
                </a>
              </Link>
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
            urlPath={pageData.sliderURL}
          />
        </section>
        <Participants title={t('ColaborationTitle')} data={colaboradores} />
      </div>
    </main>
    <Footer image={pageData.image} />
  </>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.sliderURL)
  const allPostsData = getPostsData(dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)
  return {
    props: {
      allPostsData, ...i18nConf
    }
  }
}
