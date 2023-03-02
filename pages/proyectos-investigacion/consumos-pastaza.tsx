import type {GetStaticProps, NextPage} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Content} from '@components/Content'
import {ConsumosPastaza} from '@apps/Consumos-Pastaza'

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
      <ConsumosPastaza />
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
