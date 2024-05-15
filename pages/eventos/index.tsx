import type {PostsData} from '@utils/posts'

import {GetStaticProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {events} from '@constants/eventos'
import {Content} from '@components/Content'
import {NoticesList} from '@components/NoticesList'
import {sortedByDate} from '@utils/sortedByDate'

const pageData = {
  image: '/background-footer.jpg',
  mainURL: '/eventos',
}

interface Props {
  events: PostsData[]
}

export const Page: NextPage<Props> = ({events}) => {
  const {t} = useTranslation(['EventsPage'])

  return (
    <Content
      description={t('pageDescription')}
      image={pageData.image}
      title={t('pageTitle')}
    >
      <main className='w-full p-3'>
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row'>
            <NoticesList
              items={events}
              title={null}
              urlPath={pageData.mainURL}
            />
          </div>
        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const eventsSorted = sortedByDate([...events])
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      events: eventsSorted,
      ...i18nConf,
    }
  }
}

export default Page
