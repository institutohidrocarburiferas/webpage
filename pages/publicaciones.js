import { Content } from '@components/Content'
import { Participants } from '@components/Participants'
import { Publications } from '@components/Publications'
import { publications, otherPublications } from '@constants/publications'
import { revistas } from '@constants/externalLinks'
import { sortedByDate } from '@utils/sortedByDate'

const pageData = {
  title: 'Publicaciones',
  description: 'Publicaciones',
  image: '/prueba.png',
  postsTitle: 'Últimas publicaciones',
}

export default function Publicaciones () {
  const sortedPublications = sortedByDate(publications)
  const sortedOtherPublications = sortedByDate(otherPublications)

  const allPublications = [
    ...sortedPublications,
    ...sortedOtherPublications
  ]
  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main>
        <section className='container flex flex-col p-10 mx-auto justify-evenly lg:flex-row'>
          <div className='h-screen overflow-y-scroll'>
            <Publications items={allPublications} />
          </div>
        </section>
        <section className='w-full flex justify-center'>
          <Participants data={revistas} />
        </section>
      </main>
    </Content>

  )
}
