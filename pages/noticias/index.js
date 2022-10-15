import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'
import { getPostsData } from '@utils/posts'
import path from 'node:path'
import { Slider } from '@components/Slider'
import { Posts } from '@components/Posts'
import { Footer } from '@components/Footer'

export default function Noticias ({ allPostsData }) {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Noticias | IHH</title>
        <meta name="description" content="Noticias IHH" />
      </Head>

      <TitlePage title={'Noticias'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <section className='flex flex-col gap-5 p-5'>
          <Slider
            data={allPostsData}
            urlPath={'/noticias'}
          />
        </section>
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-10 md:flex-row'>
            <Posts
              items={allPostsData}
              title={'Noticias recientes'}
              urlPath={'/noticias'}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const dataDirectory = path.join(process.cwd(), 'articles', 'notices')
  const allPostsData = getPostsData(dataDirectory)
  return {
    props: {
      allPostsData
    }
  }
}
