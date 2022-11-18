import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {GetStaticProps} from 'next'

import {Content} from '@components/Content'
import {Participants} from '@components/Participants'
import {Publications} from '@components/Publications'
import {publications, otherPublications} from '@constants/publications'
import {revistas} from '@constants/externalLinks'
import {sortedByDate} from '@utils/sortedByDate'

const pageData = {
  title: 'Publicaciones',
  description: 'Publicaciones',
  image: '/prueba.png',
  postsTitle: 'Últimas publicaciones',
}

export const Page: React.FC = () => {
  const sortedPublications = sortedByDate(publications)
  const sortedOtherPublications = sortedByDate(otherPublications)

  const allPublications = [
    ...sortedPublications,
    ...sortedOtherPublications
  ]

  return (
    <Content
      description={pageData.description}
      image={pageData.image}
      title={pageData.title}
    >
      <main>
        <section className='container flex flex-col p-2 md:p-10 mx-auto justify-evenly lg:flex-row'>
          <div className='h-screen overflow-y-scroll'>
            <Publications items={allPublications} />
          </div>
        </section>
        <section className='w-full flex justify-center'>
          <Participants data={revistas} title={null}/>
        </section>
      </main>
    </Content>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const i18nConf = await serverSideTranslations(locale!)

  return {
    props: {
      ...i18nConf
    }
  }
}

export default Page
