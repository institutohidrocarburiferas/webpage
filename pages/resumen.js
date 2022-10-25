import { Content } from '@components/Content'
import { Text } from '@components/Text'

const pageData = {
  title: 'El Instituto',
  description: 'El Instituto IHH',
  image: '/prueba.png',
}

const generalidades = {
  title: 'Generalidades',
  content: [{
    label: 'Misión',
    text: 'El Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador, es un centro multidisciplinario para la generación de conocimiento, investigación y transferencia de tecnología contribuyendo al desarrollo sostenible de los sectores de geociencias, hidrocarburos y energía a nivel nacional e Internacional.',
  },
  {
    label: 'Visión',
    text: 'Al 2024, ser la Institución de referencia nacional en la generación de conocimiento e investigación en los sectores de geociencias, hidrocarburos y energía, contribuyendo al debate de las políticas públicas y en la prestación de servicios.'
  }]
}
const lineasInvestigacion = {
  title: 'Líneas de investigación',
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
      'Energía, ambiente y cambio climático',
      'Relaciones economía, ambiente y sociedad',
      'Transición energética',
    ]
  },
  ]
}

function Resumen () {
  const sections = generalidades.content.map(({ label, text }) => (
    <section key={label}>
      <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>
        {label}
      </h2>
      <Text>{text}</Text>
    </section>
  ))

  return (
    <div className='w-screen dark:text-gray-100'>
      <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
        {sections}
      </article>
    </div>
  )
}

function LineasInvestigacion () {
  const sections = lineasInvestigacion.content.map(({ label, items }) => (
    <article
      className="w-3/4 md:w-1/2 p-10"
      key={label}
    >
      <h2 className='mb-4 text-3xl font-bold border-b-2'>{label}</h2>
      {items.map(item => (
        <ul
          className='pl-5 leading-loose tracking-wide list-disc md:text-lg style'
          key={item}
        >
          <li className="my-2.5 lg:text-xl">{item}</li>
        </ul>
      ))}
    </article>
  ))

  return (
    <div className='w-screen dark:text-gray-100 mb-10'>
      <div className='flex flex-col md:flex-row flex-wrap items-center sm:items-start justify-center container mx-auto'>
        {sections}
      </div>
    </div>
  )
}

export default function ElInstituto () {
  return <Content
    title={pageData.title}
    description={pageData.description}
    image={pageData.image}
  >
    <main>
      <h3 className='text-4xl text-center py-5 font-bold'>{generalidades.title}</h3>
      <Resumen />
      <h3 className='text-4xl text-center py-5 font-bold'>{lineasInvestigacion.title}</h3>
      <LineasInvestigacion />
    </main>
  </Content>
}
