import type {GetStaticProps} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Image from 'next/image'

import {Content} from '@components/Content'
import {Subtitle} from '@components/Subtitle'
import {Text} from '@components/Text'
import Title from '@components/Title'
import {useIntersection} from '@utils/hooks/useIntersection'

function Resumen () {
  const {t} = useTranslation(['Resumen'])
  const generalidades = {
    title: t('ResumenTitle'),
    content: [{
      label: t('ResumenMission'),
      text: t('ResumenMissionText'),
    },
    {
      label: t('ResumenVision'),
      text: t('ResumenVisionText')
    }]
  }

  const sections = generalidades.content.map(({label, text}) => (
    <section key={label}>
      <Subtitle>{label}</Subtitle>
      <Text>{text}</Text>
    </section>
  ))

  return (
    <div className='w-full p-5 mb-10'>
      <Title>{generalidades.title}</Title>
      <div className="flex flex-col max-w-5xl gap-10 mx-auto" >
        {sections}
      </div>
    </div>
  )
}

function LineasInvestigacion () {
  const {isNear, ref} = useIntersection()
  const {t} = useTranslation(['Resumen'])

  const lineasInvestigacion = {
    title: t('LineasInvestigacionTitle'),
    content: [{
      label: t('hidrocarburos'),
      icon: '/images/resumenPage/hidrocarburos.svg',
      items: [
        t('hidrocarburosItem1'),
        t('hidrocarburosItem2'),
        t('hidrocarburosItem3'),
        t('hidrocarburosItem4'),
      ]
    },
    {
      label: t('sostenibilidad'),
      items: [
        t('sostenibilidadItem1'),
        t('sostenibilidadItem2'),
        t('sostenibilidadItem3'),
        t('sostenibilidadItem4'),
      ],
      icon: '/images/resumenPage/sostenibilidad.svg',
    },
    {
      label: t('energia'),
      items: [
        t('energiaItem1'),
        t('energiaItem2'),
        t('energiaItem3'),
        t('energiaItem4'),
      ],
      icon: '/images/resumenPage/energia.svg',
    },
    ]
  }

  const sections = lineasInvestigacion.content.map(({label, items, icon}) => (
    <article
      key={label}
      className="w-full p-8 mx-auto sm:w-96 outline bg-amber-400"
    >
      <picture className='block w-20 h-20 p-2 m-auto'>
          <Image alt={label} height={100} src={icon} width={100} />
      </picture>
      <h3 className='mb-4 text-2xl font-bold text-center'>{label}</h3>
      {items.map(item => (
        <ul
          key={item}
          className='pl-5 leading-loose tracking-wide'
        >
          <li className="mt-2 list-disc lg:text-lg">{item}</li>
        </ul>
      ))}
    </article>
  ))

  return (
    <div className='w-full mb-10'>
      <Title>{lineasInvestigacion.title}</Title>
      <div ref={ref}>
        {isNear && <div className='flex flex-col flex-wrap items-center justify-center w-full gap-5 p-3 mx-auto max-w-7xl md:flex-row sm:items-stretch animate-fade'>
          {sections}
        </div>}
      </div>
    </div>
  )
}

export default function ElInstituto () {
  const {t} = useTranslation(['Resumen'])

  return <Content
    description={t('pageDescription')}
    image="/prueba.png"
    title={t('pageTitle')}
  >
    <main>
      {/* Generalidades */}
      <Resumen />
      {/* Líneas de investigación */}
      <LineasInvestigacion />
    </main>
  </Content>
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      ...i18nConf
    }
  }
}
