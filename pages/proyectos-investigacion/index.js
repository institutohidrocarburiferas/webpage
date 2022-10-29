// import { Participants } from '@components/Participants'
import { Content } from '@components/Content'
import { Posts } from '@components/Posts'
// import { Slider } from '@components/Slider'
import path from 'node:path'
import { getPostsData } from '@utils/posts'
// import { externalLinks } from '@constants/externalLinks'

const pageData = {
  title: 'Proyectos de investigación',
  description: 'Proyectos de investigación',
  image: '/prueba.png',
  mainURL: '/proyectos-investigacion',
  postsTitle: 'Proyectos recientes',
}

export default function Proyectos ({ allPostsData }) {
  return (
    <Content
      title={pageData.title}
      image={pageData.image}
      description={pageData.description}
    >
      <main>
        {/* <section className='flex flex-col gap-5 p-5'>
          <Slider
            data={allPostsData}
            urlPath={pageData.mainURL}
          />
        </section> */}
        <section className='container flex flex-col px-10 mx-auto justify-evenly lg:flex-row'>
          <Posts
            items={allPostsData}
            title={pageData.postsTitle}
            urlPath={pageData.mainURL}
          />
        </section>
          {/* <Participants data={externalLinks} /> */}
      </main>
    </Content>
  )
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', pageData.mainURL)
  const allPostsData = getPostsData(dataDirectory)
  return {
    props: {
      allPostsData,
    }
  }
}
