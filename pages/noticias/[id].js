import { Content } from '@components/Content'
import Date from '@components/Date'
import { Return } from '@components/Return'
import path from 'node:path'
import { getAllPostIds, getPostData } from '@utils/posts'
import styles from '@styles/article.module.css'

const pageData = {
  mainURL: '/noticias',
  contentTitle: 'Noticias recientes',
  returnText: 'Otras Noticias',
}

export default function Post ({ noticeData }) {
  return (
    <Content
      title={noticeData.title}
      description={noticeData.title}
      image={noticeData.image}
    >
      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-md mx-auto mb-10 sm:max-w-lg md:max-w-2xl">
          <div className="text-gray-500">
            <Date dateString={noticeData.date} />
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: noticeData.contentHtml }} />
          <Return text={pageData.returnText} url={pageData.mainURL} />
        </article>
      </main>
    </Content>
  )
}

export async function getStaticPaths () {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL)
  const paths = getAllPostIds(dataDirectory)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL)
  const noticeData = await getPostData(params.id, dataDirectory)
  return {
    props: {
      noticeData
    }
  }
}
