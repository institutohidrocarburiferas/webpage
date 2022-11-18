import type {GetStaticProps, NextPage} from 'next'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import {Content} from '@components/Content'
import {FormContact} from '@components/FormContact'
import {PageMap} from '@components/PageMap'
import {Subtitle} from '@components/Subtitle'
import {Text} from '@components/Text'

const Page: NextPage = () => {
  const {t} = useTranslation(['ContactPage'])

  const pageData = {
    title: t('pageTitle'),
    description: t('pageDescription'),
    image: '/prueba.png',
    content: {
      title: t('contactTitle'),
      intro: t('contactIntro'),
    },
    contacts: [
      {
        name: 'Ing. Rony Parra, PhD',
        role: t('directorRole'),
        email: 'rmparra@uce.edu.ec',
      },
      {
        name: 'Ing. Génesis Yánez',
        role: t('researchTechniqueRole'),
        email: 'gbyanez@uce.edu.ec',
      },
      {
        name: t('institute'),
        role: null,
        email: 'iih@uce.edu.ec',
      }
    ]
  }

  const contacts = pageData.contacts.map(({name, role, email}) => (
    <div key={name} className="w-full md:w-auto">
      <p className='flex items-end mx-2 font-bold border-b text-md md:text-xl'>{name}</p>
      <p className='mx-2 mt-1 text-xs md:text-sm'>{role}</p>
      <a
        className='mx-2 mt-1 text-xs italic text-blue-500 transition-colors md:text-sm hover:text-blue-700 active:text-blue-900'
        href={`mailto:${email}?subject=Envío%20desde%20la%20página%20web`}
      >{email}</a>
    </div>
  ))

  return (
    <Content
      description={pageData.description}
      image={pageData.image}
      title={pageData.title}
    >
      <main
        className='container flex flex-col gap-10 p-3 mx-auto md:p-10 lg:flex-row'>
        <section className='w-full h-auto'>
          <Subtitle>{pageData.content.title}</Subtitle>
          <Text>{pageData.content.intro}</Text>
          <FormContact />
        </section>
        <section className='flex flex-col items-center'>
          <div className='flex flex-wrap items-center my-3 md:justify-center gap-x-16 gap-y-5'>
            {contacts}
          </div>
          <PageMap />
        </section>
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
