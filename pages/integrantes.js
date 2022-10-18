import { Content } from '@components/Content'
import { MemberCard } from '@components/MemberCard'
import { openMemberModal } from '@utils/openMemberModal'
import { members } from '@constants/members'

const pageContent = {
  title: 'Integrantes',
  description: 'Integrantes IIH',
  image: '/prueba.png',
}

export default function Integrantes () {
  const memberSection = members.map(({ name, image, title, description }) => (
    <MemberCard
      key={name}
      name={name}
      image={image}
      openModal={() => openMemberModal(name, image, title, description)}
    />
  ))

  return (
    <Content
      title={pageContent.title}
      description={pageContent.description}
      image={pageContent.image}
    >
      <main className='container mx-auto dark:text-gray-100'>
        <section className='relative'>
          <div className='flex flex-col flex-wrap items-center justify-center gap-10 pt-10 pb-40 pl-4 pr-8 md:flex-row '>
            {memberSection}
          </div>
        </section>
      </main>
    </Content>
  )
}
