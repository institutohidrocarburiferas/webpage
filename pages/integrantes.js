import MemberCard from '@components/MemberCard'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Integrantes () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Integrantes | IIH</title>
        <meta name="description" content="Integrantes IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Integrantes'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <section className='relative'>

          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 mt-10 md:flex-row'>

           <MemberCard image={'/integrantes/image.png'}/>
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />
           <MemberCard />

          </div>
        </section>

      </main>
      {/* <Footer
        bgColor={'gray-400'}
        image={'/prueba.png'}
      /> */}

    </div>
  )
}
