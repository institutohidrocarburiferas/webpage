import type {GetStaticProps, NextPage} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Content} from '@components/Content'
import {MemberCard} from '@components/MemberCard'
import {openMemberModal} from '@utils/openMemberModal'
import Title from '@components/Title'

export interface Equipo {
  name: string
  image: string,
  role: string,
  title: string | JSX.Element | null,
  description: string[]
}

interface PropsPage {
  equipo: Equipo[]
  investigadores: Equipo[]
}

interface PropsSection {
  data: Equipo[]
  title: string
}

const Section: React.FC<PropsSection> = ({data, title}) => {
  const content = data.map(({name, image, role, title, description}) => (
    <MemberCard
      key={name}
      image={image}
      name={name}
      openModal={() => openMemberModal(name, image, title, description)}
      role={role}
    />
  ))

  return <section className='flex flex-col items-center gap-5 pb-16'>
    <Title>{title}</Title>
    <div className='flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-10 md:flex-row'>
      {content}
    </div>
  </section>
}

const Page: NextPage<PropsPage> = ({equipo, investigadores}) => {
  const pageContent = {
    title: 'Integrantes',
    description: 'Integrantes IIH',
    image: '/prueba.png',
    sections: [
      {
        label: 'Equipo de Trabajo',
        content: equipo,
      },
      {
        label: 'Investigadores asociados',
        content: investigadores,
      },
    ]
  }

  const sections = pageContent.sections.map(({label, content}) => (
    <Section key={label} data={content} title={label} />
  ))

  return (
    <Content
      description={pageContent.description}
      image={pageContent.image}
      title={pageContent.title}
    >
      <main>
        <div className='container w-full mx-auto'>
          {sections}
        </div>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const response = await fetch(`https:www.iih-uce.org/api/members/${locale}`)
  const {equipo, investigadores} = await response.json()

  console.log({investigadores})

  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      equipo,
      investigadores,
      ...i18nConf,
    }
  }
}

export default Page
