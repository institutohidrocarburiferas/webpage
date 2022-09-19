import { PublicationCard } from '@components/PublicationCard'
import { TitlePage } from '@components/TitlePage'
import { Publications } from '@components/Publications'
import Head from 'next/head'
import { publications } from '@constants/publications'
import { extenalLinks } from '@constants/extenalLinks'
import { ExternalLink } from '@components/ExternalLink'

export default function Publicaciones () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Publicaciones | IIH</title>
        <meta name="description" content="Publicaciones IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Publicaciones'} image={'/prueba.png'} />

      <main className='container flex flex-col p-10 mx-auto justify-evenly lg:flex-row dark:text-gray-100'>
        <Publications items={publications}/>
        <section className='flex flex-row flex-wrap justify-center gap-10 lg:flex-col-lime-500'>
          {
            extenalLinks.map(({ title, image, url }) => (
              <ExternalLink
                key={title}
                title={title}
                image={image}
                url={url}
              />
            ))
            }
        </section>

      </main>

    </div>
  )
}
