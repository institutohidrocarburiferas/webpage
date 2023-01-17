import type {GetStaticProps, NextPage} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Consumos} from '@components/apps/consumos2/Consumos'
import {Content} from '@components/Content'

const pageData = {
  image: '/prueba.png',
  // mainURL: '/noticias',z
}

export const Page: NextPage = () => {
  const {t} = useTranslation(['Consumos-Pastaza-Page'])

  return (
    <Content
      description={t('pageDescription')}
      image={pageData.image}
      svgColor='fill-white'
      title={t('pageTitle')}
    >
      <main className='w-full p-3 bg-white'>
        <section className='container relative mx-auto'>
          <Consumos />
        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      ...i18nConf,
    }
  }
}

export default Page
