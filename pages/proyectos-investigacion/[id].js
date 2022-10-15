import { getAllPostIds, getPostData } from '@utils/posts'
import Head from 'next/head'
import Date from '@components/Date'
import styles from '@styles/article.module.css'
import { Return } from '@components/Return'
import { TitlePage } from '@components/TitlePage'
import path from 'node:path'
import { Footer } from '@components/Footer'

const dataDirectory = path.join(process.cwd(), 'articles', 'proyectos-investigacion')

export default function Post ({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
      </Head>
      <TitlePage
        title={postData.title}
        image={postData.image}
      />

      <main className='w-screen dark:text-gray-100'>
      <article className="max-w-md mx-auto mb-10 sm:max-w-lg md:max-w-2xl">
        <div className="text-gray-500">
          <Date dateString={postData.date} />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Return text="Otros Proyectos de investigación" url="/proyectos-investigacion" />
      </article>
    </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths () {
  const paths = getAllPostIds(dataDirectory)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id, dataDirectory)
  return {
    props: {
      postData
    }
  }
}
