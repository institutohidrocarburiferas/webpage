import type {PostsData} from '@utils/posts'

import path from 'node:path'

import {GetStaticProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Content} from '@components/Content'
import {NoticesList} from '@components/NoticesList'
import {getPostsData} from '@utils/posts'

const pageData = {
  image: '/prueba.png',
  mainURL: '/noticias',
}

interface Props {
  allNotices: PostsData[]
}

export const Page: NextPage<Props> = ({allNotices}) => {
  const {t} = useTranslation(['NewsPage'])

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
              items={allNotices}
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
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, locale!)
  const allNotices = getPostsData(dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      allNotices, ...i18nConf,
    }
  }
}

export default Page
