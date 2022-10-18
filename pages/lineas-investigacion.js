import { Content } from '@components/Content'

const pageContent = {
  title: 'Líneas de investigación',
  description: 'Líneas de investigación IIH',
  image: '/prueba.png',
  content: [{
    label: 'Hidrocarburos',
    items: [
      'Desarrollo biotecnológico aplicado a la industria',
      'Simulación y modelamiento matemático ',
      'Uso de tecnologías de la información y comunicación',
      'Producción de petróleo pesado',
    ]
  },
  {
    label: 'Sostenibilidad',
    items: [
      'Gestión sostenible de recursos naturales',
      'Economía y sociedad',
      'Complejidad-energía-sostenibilidad',
    ]
  },
  {
    label: 'Energía',
    items: [
      'Relaciones economía, ambiente y sociedad',
      'Relaciones economía, ambiente y sociedad',
      'Transición energética',
    ]
  },
  ]
}

export default function LineasInvestigacion () {
  const sections = pageContent.content.map(({ label, items }) => (
    <article
      className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl"
      key={label}
    >
      <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>{label}</h2>
      {items.map(item => (
        <ul
          className='pl-5 leading-loose tracking-wide list-disc md:text-lg style'
          key={item}
        >
          <li className="my-2.5">{item}</li>
        </ul>
      ))}
    </article>
  ))

  return (
    <Content
      title={pageContent.title}
      description={pageContent.description}
      image={pageContent.image}
    >
      <main className='w-screen dark:text-gray-100'>
        {sections}
      </main>
    </Content>
  )
}
