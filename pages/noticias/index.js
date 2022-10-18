import { Content } from '@components/Content'
import { Posts } from '@components/Posts'
import { Slider } from '@components/Slider'
import path from 'node:path'
import { getPostsData } from '@utils/posts'

const pageData = {
  title: 'Noticias',
  description: 'Noticias IHH',
  image: '/prueba.png',
  mainURL: '/noticias',
  contentTitle: 'Noticias recientes',
}

export default function Noticias ({ allNotices }) {
  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main className='w-screen dark:text-gray-100'>
        {/* Slider Section */}
        <section className='flex flex-col gap-5 p-5'>
          <Slider
            data={allNotices}
            urlPath={pageData.mainURL}
          />
        </section>
        {/* Notices Section */}
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-10 md:flex-row'>
            <Posts
              items={allNotices}
              title={pageData.contentTitle}
              urlPath={pageData.mainURL}
            />
          </div>
        </section>
      </main>
    </Content>
  )
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL)
  const allNotices = getPostsData(dataDirectory)
  return {
    props: {
      allNotices
    }
  }
}
