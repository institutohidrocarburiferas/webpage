import { ExternalLink } from '@components/ExternalLink'
import { Content } from '@components/Content'
import { Posts } from '@components/Posts'
import { Slider } from '@components/Slider'
import path from 'node:path'
import { getPostsData } from '@utils/posts'
import { extenalLinks } from '@constants/extenalLinks'

const pageData = {
  title: 'Proyectos de investigación',
  description: 'Proyectos de investigación',
  image: '/prueba.png',
  mainURL: '/proyectos-investigacion',
  postsTitle: 'Proyectos recientes',
}

export default function Proyectos ({ allPostsData }) {
  const links = extenalLinks.map(({ title, image, url }) => (
    <ExternalLink
      key={title}
      title={title}
      image={image}
      url={url}
    />
  ))

  return (
    <Content
      title={pageData.title}
      image={pageData.image}
      description={pageData.description}
    >
      <main>
        <section className='flex flex-col gap-5 p-5'>
          <Slider
            data={allPostsData}
            urlPath={pageData.mainURL}
          />
        </section>
        <section className='container flex flex-col p-10 mx-auto justify-evenly lg:flex-row dark:text-gray-100'>
          <Posts
            items={allPostsData}
            title={pageData.postsTitle}
            urlPath={pageData.mainURL}
          />
          <section className='flex flex-row flex-wrap justify-center gap-10 lg:flex-col-lime-500'>
            {links}
          </section>
        </section>
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
