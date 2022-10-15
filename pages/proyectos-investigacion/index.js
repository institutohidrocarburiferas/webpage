import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'
import { extenalLinks } from '@constants/extenalLinks'
import { ExternalLink } from '@components/ExternalLink'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import { Slider } from '@components/Slider'
import { Posts } from '@components/Posts'
import { Footer } from '@components/Footer'

export default function Publicaciones ({ allPostsData }) {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Proyectos de investigación | IIH</title>
        <meta name="description" content="Proyectos de investigación IIH" />
      </Head>
      <TitlePage
        title={'Proyectos de investigación'}
        image={'/prueba.png'}
      />
      <main>
        <section className='flex flex-col gap-5 p-5'>
          <Slider data={allPostsData} />
        </section>
        <section className='container flex flex-col p-10 mx-auto justify-evenly lg:flex-row dark:text-gray-100'>
          <Posts items={allPostsData} title={'Proyectos recientes'} />
          <section className='flex flex-row flex-wrap justify-center gap-10 lg:flex-col-lime-500'>
            {extenalLinks.map(({ title, image, url }) => (
              <ExternalLink
                key={title}
                title={title}
                image={image}
                url={url}
              />
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', 'proyectos-investigacion')
  const allPostsData = getPostsData(dataDirectory)
  return {
    props: {
      allPostsData
    }
  }
}
