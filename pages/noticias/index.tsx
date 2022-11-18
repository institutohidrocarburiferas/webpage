import type {PostsData} from '@utils/posts'

import path from 'node:path'

import {GetStaticProps, NextPage} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Content} from '@components/Content'
import {NoticesList} from '@components/NoticesList'
import {getPostsData} from '@utils/posts'

const pageData = {
  title: 'Noticias',
  description: 'Noticias IHH',
  image: '/prueba.png',
  mainURL: '/noticias',
  contentTitle: 'Noticias recientes',
}

interface Props {
  allNotices: PostsData[]
}

export const Page: NextPage<Props> = ({allNotices}) => {
  return (
    <Content
      description={pageData.description}
      image={pageData.image}
      title={pageData.title}
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
