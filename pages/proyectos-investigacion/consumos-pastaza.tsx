import type {GetStaticProps, NextPage} from 'next'

import cn from 'classnames'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import {useState} from 'react'

import {Consumos} from '@components/apps/consumos2/Consumos'
import {Content} from '@components/Content'
import {Tabla} from '@components/apps/consumos2/Table'

const pageData = {
  image: '/prueba.png',
  // mainURL: '/noticias',z
}

enum Options {
  consumos,
  tabla
}

export const Page: NextPage = () => {
  const {t} = useTranslation(['Consumos-Pastaza-Page'])
  const [option, setOption] = useState<Options>(Options.consumos)

  return (
    <Content
      description={t('pageDescription')}
      image={pageData.image}
      svgColor='fill-white'
      title={t('pageTitle')}
    >
      <main className='w-full p-3 bg-white'>
        <section className='max-w-2xl relative mx-auto'>
          <div className='border-b px-5'>
            <button
              className={cn('px-5 py-2',
                {'border border-b-0 bg-gray-100/50 font-semibold rounded-t-lg': option === Options.consumos}
              )}
              onClick={() => setOption(Options.consumos)}
            >Consumos</button>
            <button
              className={cn('px-5 py-2',
                {'border border-b-0 bg-gray-100/50 font-semibold rounded-t-lg': option === Options.tabla}
              )}
              onClick={() => setOption(Options.tabla)}
            >Tabla</button>
          </div>

          {/* Components */}
          {(option === Options.consumos) && <Consumos />}
          {(option === Options.tabla) && <Tabla />}

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
