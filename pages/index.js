import Head from 'next/head'
import { notices } from '@constants/notices'
import { HeroTitle } from '@components/HeroTitle'
import { Slider } from '@components/Slider'

export default function Home () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Instituto de Investigaciones Hidrocarburíferas</title>
        <meta name="description" content="Instituto de Investigaciones Hidrocarburíferas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroTitle />
      <main className='container mx-auto dark:text-gray-100'>
      <section className='flex flex-col gap-5 p-5 my-12'>
          <h2 className='px-2 py-1 mx-auto text-3xl border-b-2 sm:px-20 md:px-40'>Noticias más importantes</h2>
          <Slider data={notices}/>
      </section>
      </main>
    </div>
  )
}
