import type {PostData} from '@utils/posts'
import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useRouter} from 'next/router'

import {Content} from '@components/Content'
import {Return} from '@components/Return'
import {getAllPostIds, getPostData} from '@utils/posts'
import styles from '@styles/article.module.css'

const pageData = {
  mainURL: '/proyectos-investigacion',
}

interface Props {
  postData: PostData
}

export const Page: NextPage<Props> = ({postData}) => {
  const {locale} = useRouter()
  const returnText = locale === 'es'
    ? 'Otros Proyectos de investigación'
    : 'Another Research Projects'

  return (
    <Content
      description={postData.title}
      image={postData.image}
      title={postData.title}
    >
      <main className='w-screen p-5'>
        <article className="max-w-md mx-auto mb-10 sm:max-w-lg md:max-w-2xl">
          {/* <div className="text-gray-500">
            <Date dateString={postData.date} />
          </div> */}
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} className={styles.content} />
          <Return text={returnText} url={pageData.mainURL} />
        </article>
      </main>
    </Content>
  )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, 'es')
  const paths = getAllPostIds(dataDirectory)

  return {
    paths: paths.flatMap(el => locales!.map(loc => ({...el, locale: loc}))),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params, locale}) => {
  const id = params?.id

  if (typeof id !== 'string') {
    return {
      notFound: true
    }
  }

  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, locale!)
  const postData = await getPostData(id, dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      postData, ...i18nConf,
    }
  }
}

export default Page
