import { Content } from '@components/Content'

const pageData = {
  title: 'Evento',
  description: 'Evento',
  image: '/prueba.png',
}

export default function Evento () {
  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main>
        <h1 className='h-72'>Página en construcción....</h1>
      </main>
    </Content>
  )
}
