import type {GetStaticProps, NextPage} from 'next'
import type {Equipo} from '@constants/members'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'

import {Title} from '@components/UI/Title'
import {equipo, investigadores, team, researchers} from '@constants/members'
import {Content} from '@components/Content'
import {MemberCard} from '@components/MemberCard'
import {openMemberModal} from '@utils/openMemberModal'

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

const Page: NextPage = () => {
  const {locale} = useRouter()
  const {t} = useTranslation(['IntegrantesPage'])
  const local = locale === 'es'
  const pageContent = {
    title: t('titlePage'),
    description: t('descriptionPage'),
    image: '/prueba.png',
    sections: [
      {
        label: t('teamTitle'),
        content: local ? equipo : team,
      },
      {
        label: t('associateResearchersTitle'),
        content: local ? investigadores : researchers,
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
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      ...i18nConf,
    }
  }
}

export default Page
