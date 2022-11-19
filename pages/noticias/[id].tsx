import type {PostData} from '@utils/posts'
import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'

import path from 'node:path'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useRouter} from 'next/router'

import {Content} from '@components/Content'
import Date from '@components/Date'
import {Return} from '@components/Return'
import {getAllPostIds, getPostData} from '@utils/posts'
import styles from '@styles/article.module.css'

const pageData = {
  mainURL: '/noticias',
  // contentTitle: 'Noticias recientes',

}

interface Props{
  noticeData: PostData
}

const Page: NextPage<Props> = ({noticeData}) => {
  const {locale} = useRouter()
  const returnText = locale === 'es' ? 'Otras Noticias' : 'Another News'

  return (
    <Content
      description={noticeData.title}
      image={noticeData.image}
      title={noticeData.title}
    >
      <main className='w-screen p-5'>
        <article className="max-w-md mx-auto mb-10 sm:max-w-lg md:max-w-2xl">
          <div className="text-gray-500">
            <Date dateString={noticeData.date} />
          </div>
          <div dangerouslySetInnerHTML={{__html: noticeData.contentHtml}} className={styles.content} />
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
      notFound: true,
    }
  }

  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL, locale!)
  const noticeData = await getPostData(id, dataDirectory)
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      noticeData, ...i18nConf
    }
  }
}

export default Page
