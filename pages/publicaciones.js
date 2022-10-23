import { Publications } from '@components/Publications'
import { publications } from '@constants/publications'
import { externalLinks } from '@constants/externalLinks'
import { Participants } from '@components/Participants'
import { Content } from '@components/Content'

const pageData = {
  title: 'Publicaciones',
  description: 'Publicaciones',
  image: '/prueba.png',
  postsTitle: 'Últimas publicaciones',
}

export default function Publicaciones () {
  const sortedPublications = publications.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main>
        <section className='container flex flex-col p-10 mx-auto justify-evenly lg:flex-row dark:text-gray-100'>
          <Publications
            title={pageData.postsTitle}
            items={sortedPublications}
            />
        </section>
        <Participants data={externalLinks} />

      </main>

    </Content>

  )
}
