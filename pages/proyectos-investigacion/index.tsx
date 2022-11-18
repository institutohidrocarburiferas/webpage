import type {PostsData} from '@utils/posts'
import type {GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Content} from '@components/Content'
import {Posts} from '@components/Posts'
import {getPostsData} from '@utils/posts'

const pageData = {
  title: 'Proyectos de investigación',
  description: 'Proyectos de investigación',
  image: '/prueba.png',
  mainURL: '/proyectos-investigacion',
  postsTitle: 'Proyectos recientes',
}

interface Props {
  allPostsData: PostsData[]
}

export const Page: NextPage<Props> = ({allPostsData}) => {
  return (
    <Content
      description={pageData.description}
      image={pageData.image}
      title={pageData.title}
    >
      <main>
        <section className='container flex flex-col px-10 mx-auto justify-evenly lg:flex-row'>
          <Posts
            items={allPostsData}
            title={pageData.postsTitle}
            urlPath={pageData.mainURL}
          />
        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, locale!)
  const allPostsData = getPostsData(dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      allPostsData, ...i18nConf,
    }
  }
}

export default Page
