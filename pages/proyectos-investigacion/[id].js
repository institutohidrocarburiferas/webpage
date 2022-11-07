import { Content } from '@components/Content'
// import Date from '@components/Date'
import { Return } from '@components/Return'
import { getAllPostIds, getPostData } from '@utils/posts'
import path from 'node:path'
import styles from '@styles/article.module.css'

const pageData = {
  mainURL: '/proyectos-investigacion',
  returnText: 'Otros Proyectos de investigación',
}

export default function Post ({ postData }) {
  return (
    <Content
      title={postData.title}
      image={postData.image}
      description={postData.title}
    >
      <main className='w-screen p-5'>
        <article className="max-w-md mx-auto mb-10 sm:max-w-lg md:max-w-2xl">
          {/* <div className="text-gray-500">
            <Date dateString={postData.date} />
          </div> */}
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id, dataDirectory)
  return {
    props: {
      postData
    }
  }
}
