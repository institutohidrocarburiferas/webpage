import { Content } from '@components/Content'
import { Text } from '@components/Text'

const pageContent = {
  title: 'Resumen',
  description: 'Resumen IIH',
  image: '/prueba.png',
  content: [{
    label: 'Misión',
    text: 'El Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador, es un centro multidisciplinario para la generación de conocimiento, investigación y transferencia de tecnología contribuyendo al desarrollo sostenible de los sectores de geociencias, hidrocarburos y energía a nivel nacional e Internacional.',
  },
  {
    label: 'Visión',
    text: 'Al 2024, ser la Institución de referencia nacional en la generación de conocimiento e investigación en los sectores de geociencias, hidrocarburos y energía, contribuyendo al debate de las políticas públicas y en la prestación de servicios.'
  }]
}

export default function Resumen () {
  const sections = pageContent.content.map(({ label, text }) => (
    <section key={label}>
      <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>
        {label}
      </h2>
      <Text>{text}</Text>
    </section>
  ))

  return (
    <Content
      title={pageContent.title}
      description={pageContent.description}
      image={pageContent.image}
    >
      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          {sections}
        </article>
      </main>
    </Content>
  )
}
