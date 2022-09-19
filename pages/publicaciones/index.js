import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Publicaciones () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Publicaciones | IIH</title>
        <meta name="description" content="Publicaciones IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Publicaciones'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <section className='flex flex-col md:flex-row'>
          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Últimas publicaciones</h2>
          <div>

          </div>
        </section>
        <section>

        </section>

      </main>

    </div>
  )
}
