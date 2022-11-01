import { Content } from '@components/Content'
import { Separator } from '@components/Separator'
import { Text } from '@components/Text'
import { useEffect, useRef } from 'react'

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
    icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.915 489.915" xmlSpace="preserve">
      <g>
        <g>
          <path d="M226.2,440.233c-14.6,5.2-30.2,8.3-46.9,8.3c-76.1,0-138.7-62.6-138.7-139.7c0-59.4,88.6-189.7,137.6-256.5    c24,31.3,66.7,90.7,99,149.1c6.3,10.4,18.8,13.6,28.1,8.3c10.4-6.3,13.6-18.8,8.3-28.1c-47.8-85.4-115.6-170.9-117.6-174    c-8.3-9.4-25-9.4-32.3,0C147,28.433,0,216.133,0,308.933c0,99,80.3,180.4,179.3,180.4c20.9,0,41.7-4.2,60.5-10.4    c11.5-4.2,16.7-15.6,12.5-26.1C248.1,441.333,236.6,436.133,226.2,440.233z" />
          <path d="M471.2,319.333l-11.2-0.5c-2-15.5-7.3-30.1-15.1-43l8.6-7.5c9.4-8.3,9.4-20.9,2.1-29.2c-8.3-9.4-20.9-9.4-29.2-2.1l-9.1,8    c-11.3-8.6-24.2-14.9-38.3-18.5l0.5-11.4c1-11.5-7.3-20.9-18.8-21.9s-20.9,7.3-21.9,18.8l-0.6,12c-15.1,1.8-29.3,6.9-41.8,14.4    l-7.7-8.7c-8.3-8.3-20.9-9.4-29.2-2.1c-8.3,8.3-9.4,20.9-2.1,29.2l8.2,9.3c-8.7,11.5-15.1,24.8-18.7,39.2l-11.4-0.5    c-11.5-1-20.9,7.3-21.9,18.8s7.3,20.9,18.8,21.9l12.1,0.5c1.8,15.1,6.6,29.3,14.1,42l-8.5,7.5c-9.4,8.3-9.4,20.9-2.1,29.2    c8.3,9.4,20.9,9.4,29.2,2.1l8.9-7.8c1.2,0.9,2.4,1.8,3.6,2.7c10.5,7.7,22.9,13.5,35.9,16.8l-0.5,11.3c-1,11.5,7.3,20.9,18.8,21.9    h1c10.4,0,19.8-8.3,20.9-18.8l0.5-12.5c14.7-2.1,28.6-7.1,40.9-14.5l7.5,8.6c8.3,8.3,20.9,9.4,29.2,2.1c8.3-8.3,9.4-20.9,2.1-29.2    l-7.9-9c8.7-11.3,15.3-24.5,19.1-38.7l10.7,0.5h1c11.5,0,19.8-8.3,20.9-18.8C491,329.733,482.7,320.433,471.2,319.333z     M351.3,402.333c-38.7,0-70-31.3-70-70s31.3-70,70-70s70,31.3,70,70S390,402.333,351.3,402.333z" />
        </g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>,
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
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.013 512.013" xmlSpace="preserve">
    <g>
      <g>
        <g>
          <path d="M215.851,125.489c26.786,26.803,65.408,28.16,72.883,28.16l35.55-0.017v162.125c0,4.719,3.797,8.533,8.516,8.533     c4.719,0,8.533-3.814,8.533-8.533V102.731c0.077-1.826,1.468-45.039-28.134-74.641C287.164,2.029,250.931,0.006,240.452,0.006     l-44.151,0.017c-4.719,0-8.533,3.823-8.533,8.533l0.009,42.274C187.699,52.657,186.249,95.87,215.851,125.489z M204.834,51.189     V17.09l35.618-0.017c6.281,0,38.733,1.109,60.681,23.083c24.226,24.226,23.185,61.534,23.168,62.234v22.033l-87.834-87.825     c-3.337-3.337-8.738-3.337-12.066,0c-3.336,3.337-3.336,8.73,0,12.066l87.91,87.902l-23.578,0.017     c-6.289,0-38.784-1.118-60.817-23.168C203.708,89.197,204.817,51.898,204.834,51.189z"/>
          <path d="M358.417,213.306c-0.008,1.161,0.213,2.304,0.666,3.388c0.06,0.137,0.179,0.23,0.239,0.358     c0.41,0.853,0.879,1.673,1.579,2.372c0.649,0.649,1.417,1.067,2.193,1.459c0.196,0.102,0.341,0.273,0.546,0.367     c1.05,0.435,2.167,0.674,3.294,0.674c0.026,0,0.043-0.009,0.068-0.009l42.223-0.009l1.801,0.026     c7.475,0,46.097-1.348,72.858-28.117c29.628-29.611,28.169-72.832,28.1-74.3V76.849c0-4.71-3.814-8.533-8.533-8.533     l-42.308,0.009l-1.801-0.034c-7.475,0-46.08,1.357-72.858,28.126c-29.611,29.611-28.134,72.832-28.066,74.3V213.306z      M398.549,108.482c22.016-22.007,54.502-23.125,60.791-23.125l35.576,0.026l0.008,34.466c0.009,0.375,1.126,37.675-23.108,61.901     c-21.999,22.008-54.502,23.117-60.792,23.117l-23.484-0.009l87.842-87.842c3.337-3.337,3.337-8.73,0-12.066     s-8.738-3.337-12.066,0l-87.834,87.834l-0.009-22.434C375.458,169.982,374.187,132.853,398.549,108.482z"/>
          <path d="M486.699,342.509c-8.806-2.364-18.005-1.152-25.37,3.123l-98.21,47.804c-15.266,7.637-30.677,7.637-64.452,7.637     c-33.015,0-83.422-8.337-83.934-8.414c-4.651-0.768-9.045,2.364-9.813,7.006c-0.777,4.651,2.364,9.045,7.014,9.822     c2.116,0.358,52.292,8.653,86.733,8.653c35.43,0,53.214,0,71.996-9.395l98.671-48.051c3.942-2.278,8.55-2.884,12.945-1.707     c4.403,1.186,8.09,4.011,10.359,7.953c4.71,8.149,1.903,18.611-6.477,23.458l-115.379,71.808     c-0.239,0.162-24.858,15.667-80.648,15.667c-48.375,0-123.11-41.182-124.186-41.771c-0.777-0.384-19.285-9.429-55.014-9.429     c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c31.036,0,47.027,7.467,47.061,7.467c0,0,0,0,0-0.009     c3.226,1.792,79.334,43.742,132.139,43.742c61.611,0,88.934-17.749,89.839-18.355l114.961-71.552     c16.29-9.412,21.897-30.328,12.493-46.626C502.869,350.513,495.505,344.864,486.699,342.509z"/>
          <path d="M42.667,456.54c0-7.057-5.743-12.8-12.8-12.8c-7.057,0-12.8,5.743-12.8,12.8c0,7.057,5.743,12.8,12.8,12.8     C36.924,469.34,42.667,463.597,42.667,456.54z"/>
          <path d="M59.733,273.073h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2c4.71,0,8.533,3.831,8.533,8.533     v187.733c0,4.702-3.823,8.533-8.533,8.533h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2     c14.114,0,25.6-11.486,25.6-25.6V298.673C85.333,284.559,73.847,273.073,59.733,273.073z"/>
          <path d="M110.933,324.273H179.2c9.958,0,26.88,12.698,41.813,23.893c18.722,14.046,36.412,27.307,52.053,27.307h51.2     c12.962,0,19.396,5.879,19.567,6.033c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5     c3.336-3.337,3.336-8.73,0-12.066c-1.126-1.126-11.605-11.034-31.633-11.034h-51.2c-9.958,0-26.88-12.698-41.813-23.893     c-18.722-14.046-36.412-27.307-52.053-27.307h-68.267c-4.719,0-8.533,3.823-8.533,8.533S106.214,324.273,110.933,324.273z"/>
        </g>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
  },
  {
    label: 'Energía',
    items: [
      'Energía, ambiente y cambio climático',
      'Relaciones economía, ambiente y sociedad',
      'Transición energética',
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
    <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
    <line x1="9.7" y1="17" x2="14.3" y2="17" />
  </svg>
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
    <div className='w-screen'>
      <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
        {sections}
      </article>
    </div>
  )
}

function LineasInvestigacion () {
  const ref = useRef(null)

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        ref.current.classList.add('animate-fade')

        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange,
      {
        rootMargin: '15px'
      })

    observer.observe(ref.current)

    return () => observer.disconnect()
  })

  const sections = lineasInvestigacion.content.map(({ label, items, icon }) => (
    <article
      className="w-96 mx-auto outline p-8 bg-amber-400"
      key={label}
    >
      <picture className='m-auto p-2 w-20 h-20 block'>
        {icon}
      </picture>

      <h2 className='mb-4 text-2xl font-bold text-center'>{label}</h2>
      {items.map(item => (
        <ul
          className='pl-5 leading-loose tracking-wide'
          key={item}
        >
          <li className="lg:text-lg mt-2 list-disc">{item}</li>
        </ul>
      ))}
    </article>
  ))

  return (
    <div className='w-screen outlinemb-10'>
      <div ref={ref} className='flex flex-col md:flex-row opacity-0 flex-wrap items-center sm:items-stretch gap-5 justify-center container mx-auto'>
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
      <Separator />
    </main>
  </Content>
}
