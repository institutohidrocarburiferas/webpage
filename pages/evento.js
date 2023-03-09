import Head from 'next/head'
import Image from 'next/image'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Slider} from '@components/Slider'
import {Text} from '@components/UI/Text'
import {Title} from '@components/UI/Title'
import {Separator} from '@components/Layout/Separator'
import {Footer} from '@components/Layout/Footer'
import {Countdown} from '@components/Countdown'
import {HeroSection} from '@components/HeroSection'
import {RegisterButton} from '@components/RegisterButton'


const pageData = {
  title: 'Eventos',
  description: 'Eventos del IIH',
  image: '/prueba.png',
  //eventDay: new Date(2022, 10, 23, 8),
}

<Head>
<title>{pageData.title}</title>
<meta content={pageData.description} name="description" />
</Head>
<main>

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
        <Link href="/evento">
          <a className='flex justify-center text-center items-center w-auto px-2 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105'
          >
            {t('EventInfoText')}
          </a>
        </Link>
        <RegisterButton />

      </div>
      <Countdown eventDate={eventDay} />
    </div>
  </section>
</HeroSection>
<Separator id={null} />

