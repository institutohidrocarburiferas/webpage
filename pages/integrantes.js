import { MemberCard } from '@components/MemberCard'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'
import { members } from '@constants/members'
import { openMemberModal } from '@utils/openMemberModal'

export default function Integrantes () {
  return (
    <div>
      <Head>
        <title>Integrantes | IIH</title>
        <meta name="description" content="Integrantes IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitlePage title={'Integrantes'} image={'/prueba.png'} />
      <main className='container mx-auto dark:text-gray-100'>
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 md:flex-row '>
          {
            members.map(({ name, image, title, description }) => (

              <MemberCard
                key={name}
                name={name}
                image={image}
                openModal={() => openMemberModal(name, image, title, description)}

              />

            ))
          }
          </div>
        </section>
      </main>
    </div>
  )
}
