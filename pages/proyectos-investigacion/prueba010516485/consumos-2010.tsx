import type {GetStaticProps, NextPage} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Consumos2010} from '@apps/Consumos-2010'
import {Content} from '@components/Content'

const pageData = {
  image: '/prueba.png',
}

export const Page: NextPage = () => {
  const {t} = useTranslation(['Consumos-2010-Page'])

  return (
    <Content
      description={t('pageDescription')}
      image={pageData.image}
      svgColor='fill-white'
      title={t('pageTitle')}
    >
      <Consumos2010 />
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
