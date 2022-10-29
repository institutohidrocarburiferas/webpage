import { Countdown } from '@components/Countdown'
import { Footer } from '@components/Footer'
import { HeroSection } from '@components/HeroSection'
import { Participants } from '@components/Participants'
import { RegisterButton } from '@components/RegisterButton'
import { Separator } from '@components/Separator'
import { Sidebar } from '@components/Sidebar'
import { items } from '@constants/eventItems'
import Head from 'next/head'

const pageData = {
  title: 'Evento',
  description: 'Evento',
  image: '/prueba.png',
  eventDay: new Date(2022, 10, 23, 8, 30),
}

const heroContent = {
  title: 'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR',
  height: '87vh',
  image: '"https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"',
  text: 'miércoles 23 de noviembre del 2022'
}

const patrocinations = [
  {
    title: 'Logo de Conacyt',
    image: '/evento/conacyt.svg',
  },
  {
    title: 'Logo de la Agencia Internacional de Energía',
    image: '/externalLinks/international-energy-agency-logo.png',
  },
  {
    title: 'Logo de Olade',
    image: '/externalLinks/oladeorg-logo.jpg',
  },
  {
    title: 'Logo de la Fundación Bariloche',
    image: '/evento/fundacion-bariloche.jpg',
  },
  {
    title: 'Logo del Instituto de Metrología de Alemania (PTB)',
    image: '/evento/instituto-metrologia-alemania.jpg',
  },
  {
    title: 'Logo de la Escuela Politécnica Nacional',
    image: '/evento/epn.png',
  },
  {
    title: 'Logo de la Facultad de Ingeniería Química - UCE',
    image: '/evento/ing-quimica-uce.jpeg',
  },
  {
    title: 'Logo de la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental',
    image: '/evento/figempa.png',
  },
  {
    title: 'Logo de SERTECPET',
    image: '/evento/sertecpet.png',
  },
  {
    title: 'Logo de Halliburton',
    image: '/evento/halliburton.jpg',
  },
]

const organizadores = [
  {
    title: 'Logo de la Universidad Central',
    image: '/UCE-logo.png',
  },
  {
    title: 'Logo del Ministerio de Energía y Minas',
    image: '/evento/ministerio-energia-minas.jpg',
  },

]

const programItems = [
  { time: '09H00 - 09H15', label: 'Inauguración y Palabras de Bienvenida', expositor: 'Nombre no definido', institution: 'Rector (Vicerrector de Investigación) / Ministro de Energía y Minas/Invitado', },
  { time: '09H15 - 10H00', label: 'Seguridad y sostenibilidad de los sistemas futuros de energía (fósil y electricidad)', expositor: 'Nombre no definido', institution: 'Agencia Internacional de Energía (IEA)', },
  { time: '10H00 - 10H45', label: 'Visualización y retos de la transacción energética en ALC a mediano y largo plazo (uso de herramientas de prospectiva de OLADE)', expositor: 'Nombre no definido', institution: 'OLADE_Alfonso Blanco', },
  { time: '10H45 - 11H15', label: 'Coffee Break', expositor: null, institution: null, },
  { time: '11H15 - 12H00', label: 'Futuro de los mercados de precios de los energéticos', expositor: 'Nombre no definido', institution: 'MCKINSEY (Oficina Quito/Ecuador)', },
  { time: '12H00 - 12H45', label: 'Visión a largo plazo del sistema energético (oferta y demanda de combustibles y electricidad) con la transformación del mercado hacia equipos energéticamente eficientes. Casos de estudio.', expositor: 'Nombre no definido', institution: 'Fundación Bariloche – Instituto de Metrología de Alemania (PTB)', },
  { time: '12H45 - 14H00', label: 'Almuerzo', expositor: null, institution: null, },
  { time: '14H00 - 14H45', label: 'Modelo Prospectivo Energético de México', expositor: 'Nombre no definido', institution: 'Conacyt - México /UNAM-Instituto de Metrología de Alemania (PTB)', },
  { time: '14H45 - 15H30', label: 'Prospectiva energética del Ecuador al 2035 MuSIASEM', expositor: 'Nombre no definido', institution: 'Instituto de Investigaciones Hidrocarburíferas - UCE', },
  { time: '15H30 - 16H15', label: 'Estudio prospectivo en el transporte para el caso del Ecuador', expositor: 'Nombre no definido', institution: 'Escuela Politécnica Nacional', },
  { time: '16H15 - 17H00', label: 'Tasas de retorno de energía en el sistema ecuatoriano', expositor: 'Nombre no definido', institution: 'Ingeniería Química - UCE', },
  { time: '17H00 - 18H00', label: 'Resumen y Cierre', expositor: 'Nombre no definido', institution: 'UCE FIGEMPA/Autoridad invitada', },
]

function ProgramItem ({ time, label, expositor, institution }) {
  return <div className='flex flex-col gap-1 pb-5 border-b-2'>
    <time className='text-2xl text-amber-400'>{time}</time>
    <h3 className='text-3xl font-bold text-white'>{label}</h3>
    <p className='text-xl font-bold'>{expositor}</p>
    <p className='text-md'>{institution}</p>
  </div>
}

export default function Evento () {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <Sidebar items={items} />
      <main>
        <HeroSection
          text={heroContent.text}
          title={heroContent.title}
          image={heroContent.image}
          height={heroContent.height}
          justifyContent="center"
        >
          <section className='text-gray-400'>
            <span>Presencial - Cupos limitados</span>
          </section>
          {/* Registro y cuenta regresiva */}
          <section className='flex flex-col gap-5 mt-5'>
            <div className='flex justify-center w-full'>
              <RegisterButton />
            </div>
            <Countdown eventDate={pageData.eventDay} />
          </section>

        </HeroSection>

        <div
          className='grid w-full grid-cols-1 justify-items-center'>
          {/* ¿Por qué prospectiva ? */}
          <Separator id="por-que-perspectiva" />
          <section
            className="flex flex-col items-center gap-5 p-5 lg:flex-row-reverse lg:container md:pl-24"
          >
            <section className='flex flex-col text-xl text-justify gap-7 lg:w-1/2'>
              <h2
                className='w-full text-4xl font-bold text-center lg:text-start'
              >¿Por qué prospectiva?</h2>
              <p className=''>
                Los cambios en la dinámica de consumo de las sociedades y en la capacidad de identificar la disponibilidad de recursos para la provisión de energía, además de la comprensión profunda de aspectos como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo,  son principios necesarios de entenderlos para que los países construyan políticas que garanticen la sostenibilidad y seguridad de la energía en un horizonte de mediano y largo plazo.

              </p>
              <p className=''>
                Es por esto que, desde el Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador estamos fomentando la realización de un Foro Internacional de Prospectiva Energética en el Ecuador con el propósito de topar los puntos críticos de los sistemas energéticos y de vincular a instituciones de gobierno, empresas, academia y sociedad civil para la discusión de la necesidad en la construcción de escenarios energéticos nacionales deseables en base a metodologías innovadoras, experiencias internacionales y contemplando la realidad y autodeterminación en el desarrollo del Ecuador.
              </p>

            </section>

            <section className='w-1/2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recharging" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
                <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
                <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
                <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
                <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
                <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
                <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
                <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
                <path d="M12 8l-2 4h4l-2 4" />
                <path d="M12 21a9 9 0 0 0 0 -18" />
              </svg>
            </section>
          </section>

          {/* Ejes temáticos */}
          <Separator id="ejes-tematicos" />
          <section
            className="flex flex-col items-center gap-5 p-5 lg:flex-row md:pl-12 lg:pl-24 lg:container"
          >
            <section className='flex flex-col p-5 text-xl gap-7 lg:w-1/2'>
              <h2
                className='text-4xl font-bold'
              >Ejes temáticos</h2>
              <p>Los ejes temáticos que se tratarán en el seminario son los siguientes:</p>
              <ul className='flex flex-col gap-3 font-semibold list-disc pl-7'>
                <li>Seguridad y sostenibilidad de los sistemas futuros de energía</li>
                <li>Visualización y retos de la transacción energética en ALC</li>
                <li>Futuro de los mercados de commodities energéticos</li>
                <li>Eficiencia energética y los escenarios prospectivos</li>
                <li>Visión a largo plazo del Ecuador</li>
                <li>Experiencias internacionales sobre la construcción de escenarios energéticos</li>
                <li>Estudios prospectivos desde los centros de Investigación</li>
              </ul>

            </section>

            <section className='w-1/2 '>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulb" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#facc15" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <line x1="9.7" y1="17" x2="14.3" y2="17" />
              </svg>
            </section>
          </section>

          {/* Agenda */}
          <Separator id="agenda" />
          <section
            style={{
              backgroundColor: '#11284b',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage:
                'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/bgEvent.svg)',
            }}
            className='flex flex-col items-center w-full text-gray-300'>
            <h2
              className='px-20 py-5 text-4xl font-bold border-b-2 text-start'
            >Agenda</h2>
            <div
              className='container grid items-stretch grid-cols-1 gap-10 p-5 md:pl-24 lg:grid-cols-2'>
              {programItems.map(({ time, label, expositor, institution }) => (
                <ProgramItem key={label} time={time} label={label} expositor={expositor} institution={institution} />
              ))}
            </div>

          </section>

          {/* Organizadores */}
          <Separator id="organizadores" />
          <Participants title="Organizadores" data={organizadores} />

          {/* Patrocinadores */}
          <Separator id="patrocinadores" />
          <Participants title="Instituciones Participantes y Patrocinadores" data={patrocinations} />

          {/* ¿Qué busca el evento? */}
          <Separator id="que-busca-el-evento" />
          <section
            className="flex flex-col items-center gap-5 lg:flex-row lg:container"
          >
            <section className='flex flex-col p-5 text-xl text-justify md:pl-24 gap-7 lg:w-1/2'>
              <h2
                className='text-4xl font-bold text-center'
              >¿Qué busca el evento?</h2>
              <p className=''>
                Generar un espacio de discusión entre instituciones de gobierno, empresas, academia y sociedad civil, sobre la necesidad de realizar estudios prospectivos que vinculen el aprovechamiento de los recursos energéticos y con ello fortalecer la planificación energética del Ecuador con fines de seguridad y soberanía

              </p>
              <ul className='flex flex-col gap-3 list-disc pl-7'>
                <li>Entender sobre los problemas y retos que atañe a los sistemas energéticos a nivel global, regional y local, con fines de seguridad y soberanía</li>
                <li>Conocer sobre varias herramientas y modelos que permiten desarrollar escenarios de prospectiva energética para el fortalecimiento de las políticas públicas</li>
                <li>Identificar los beneficios de incorporar la transformación del mercado hacia equipos energéticamente eficientes a través de escenarios prospectivos.</li>
                <li>Conocer sobre experiencias internacionales, investigaciones y trabajos que pueden servir para el fortalecimiento de la planificación energética al mediano y largo plazo del sistema energético del Ecuador</li>
              </ul>

            </section>

            <section className='w-1/2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-search" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#065f46" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10" />
                <path d="M9 4v13" />
                <path d="M15 7v5" />
                <circle cx="16.5" cy="17.5" r="2.5" />
                <path d="M18.5 19.5l2.5 2.5" />
              </svg>
            </section>
          </section>

          {/* Ponentes */}
          <Separator id="ponentes" />
          <section
            className="flex flex-col items-center gap-5 p-5 lg:container md:pl-24"
          >
            <h2
              className='text-4xl font-bold'
            >Ponentes</h2>
            <section className='flex flex-wrap justify-center gap-5'>

              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
              <div className='w-40 h-40 bg-black '></div>
            </section>
          </section>

          {/* Registro */}
          <Separator id="registro" />
          <HeroSection
            title={`REGÍSTRATE EN EL ${heroContent.title}`}
            text={heroContent.text}
            image={heroContent.image}
            height="auto"
            justifyContent="center"
          >
            <section className='text-gray-400'>
              <span>Presencial - Cupos limitados</span>
            </section>
            {/* Registro y cuenta regresiva */}
            <section className='flex flex-col gap-8 mt-14'>
              <div className='flex justify-center w-full'>
                <RegisterButton />
              </div>
            </section>

          </HeroSection>

          {/* Mapa */}
          <Separator id="ubicacion" />
          <section
            className="flex flex-col items-center gap-5 p-5 lg:container md:pl-24"
          >
            <h2
              className='text-4xl font-bold text-start'
            >Ubicación del evento</h2>
            <iframe className='w-full my-5 bg-gray-200 border-none h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.1969549441504!2d-78.50565731357777!3d-0.1988105932917797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a46e4cd72f7%3A0x1a520161ab60d7c5!2sComprehensive%20Information%20Center!5e0!3m2!1sen!2sec!4v1666476170800!5m2!1sen!2sec" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </div>

      </main>
      <Footer image={pageData.image} />

    </>
  )
}
