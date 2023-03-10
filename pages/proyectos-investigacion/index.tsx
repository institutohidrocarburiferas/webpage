import type {PostsData} from '@utils/posts'
import type {GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Content} from '@components/Content'
import {Posts} from '@components/Posts'
import {getPostsData} from '@utils/posts'
import {appsOfProjects} from '@constants/appsOfProjects'

const pageData = {
  image: '/prueba.png',
  mainURL: '/proyectos-investigacion',
}

interface Props {
  articlesOfProjects: PostsData[]
}

export const Page: NextPage<Props> = ({articlesOfProjects}) => {
  const {t} = useTranslation(['ProjectsPage'])

  const allProjects = [...appsOfProjects, ...articlesOfProjects,]

  return (
    <Content
      description={t('pageDescription')}
      image={pageData.image}
      title={t('pageTitle')}
    >
      <main>
        <section className='container flex flex-col px-10 mx-auto justify-evenly lg:flex-row'>
          <Posts
            items={allProjects}
            title={null}
            urlPath={pageData.mainURL}
          />

        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, locale!)
  const articlesOfProjects = getPostsData(dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      articlesOfProjects, ...i18nConf,
    }
  }
}

export default Page
