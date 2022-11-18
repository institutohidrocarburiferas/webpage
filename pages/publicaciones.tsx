import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'

import {Content} from '@components/Content'
import {Participants} from '@components/Participants'
import {Publications} from '@components/Publications'
import {publications, otherPublications} from '@constants/publications'
import {revistas} from '@constants/externalLinks'
import {sortedByDate} from '@utils/sortedByDate'

export const Page: React.FC = () => {
  const {t} = useTranslation(['PublicationsPage'])
  const sortedPublications = sortedByDate(publications)
  const sortedOtherPublications = sortedByDate(otherPublications)

  const allPublications = [
    ...sortedPublications,
    ...sortedOtherPublications
  ]

  return (
    <Content
      description={t('pageDescription')}
      image='/prueba.png'
      title={t('pageTitle')}
    >
      <main>
        <section className='container flex flex-col p-2 mx-auto md:p-10 justify-evenly lg:flex-row'>
          <div className='h-screen overflow-y-scroll'>
            <Publications items={allPublications} />
          </div>
        </section>
        <section className='flex justify-center w-full'>
          <Participants data={revistas} title={null}/>
        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      ...i18nConf
    }
  }
}

export default Page
