import { Countdown } from '@components/Countdown'
import { Footer } from '@components/Footer'
import { HeroSection } from '@components/HeroSection'
import { Participants } from '@components/Participants'
import { RegisterButton } from '@components/RegisterButton'
import { Separator } from '@components/Separator'
import { Sidebar } from '@components/Sidebar'
import { Text } from '@components/Text'
import Title from '@components/Title'
import {
  programItems, organizers, sideItems,
  speakers, sponsors,
} from '@constants/eventos/foro-internacional-prospectiva-energetica'
import Head from 'next/head'
import Image from 'next/image'

const pageData = {
  title: 'Foro Internacional de Prospectiva Energética en el Ecuador',
  description: 'Foro Internacional de Prospectiva Energética en el Ecuador',
  image: '/prueba.png',
  eventDay: new Date(2022, 10, 23, 8),
}
const heroContent = {
  title: 'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR',
  height: '87vh',
  image: '"https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"',
  text: 'miércoles, 23 de noviembre del 2022'
}

function ProgramItem ({ time, label, expositor, institution }) {
  return <div className='flex flex-col gap-2 pb-5 border-b-2'>
    <time className='text-xl font-semibold md:text-2xl text-amber-400'>{time}</time>
    <h3 className='text-xl font-semibold text-justify text-white md:text-2xl'>{label}</h3>
    <p className='font-semibold text-md md:text-xl'>{expositor}</p>
    <p className='text-sm md:text-md'>{institution}</p>
  </div>
}

function SpeakerCard ({ name, image, role, institute, objectFit = 'cover' }) {
  return (
    <section
      className="flex flex-col w-48 gap-5 rounded-md md:w-60 md:hover:scale-105">
      <Image
        styles={{
          objectFit,
        }}
        className='object-top rounded-md'
        src={image}
        width={300}
        height={300}
        alt={name}
      />
      <section className='grid w-full gap-1 font-semibold text-center justify-content-start rounded-b-md'>
        <span className='text-sm font-bold md:text-md'>{name}</span>
        <span className='text-xs md:text-sm'>{role}</span>
        <span className='text-[0.7rem] md:text-xs'>{institute}</span>
      </section>
    </section>
  )
}

export default function Evento () {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <Sidebar items={sideItems} />
      <main>
        <div id="content"></div>
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
            <section className='flex flex-col lg:w-1/2'>
              <Title>
                ¿Por qué prospectiva?
              </Title>
              <Text>
                Los cambios en la dinámica de consumo de las sociedades y en la capacidad de identificar la disponibilidad de recursos para la provisión de energía, además de la comprensión profunda de aspectos como: peak oil, limitaciones biofísicas, transición y descarbonización de las economías y sistemas de gobernanza, incluidas las formas de abordar nuestros patrones de producción y consumo,  son principios necesarios de entenderlos para que los países construyan políticas que garanticen la sostenibilidad y seguridad de la energía en un horizonte de mediano y largo plazo.
              </Text>
              <Text>
                Es por esto que, desde el Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador estamos fomentando la realización de un Foro Internacional de Prospectiva Energética en el Ecuador con el propósito de topar los puntos críticos de los sistemas energéticos y de vincular a instituciones de gobierno, empresas, academia y sociedad civil para la discusión de la necesidad en la construcción de escenarios energéticos nacionales deseables en base a metodologías innovadoras, experiencias internacionales y contemplando la realidad y autodeterminación en el desarrollo del Ecuador.
              </Text>
            </section>
            <section className='w-2/3 md:w-1/2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recharging" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
            <section className='flex flex-col lg:w-1/2'>
              <Title>
              Ejes temáticos
              </Title>
              <Text>Los ejes temáticos que se tratarán en el seminario son los siguientes:</Text>
              <ul className='font-semibold list-disc pl-7'>
                <li><Text>Seguridad y sostenibilidad de los sistemas futuros de energía</Text></li>
                <li><Text>Visualización y retos de la transición energética en ALC</Text></li>
                <li><Text>Futuro de los mercados de commodities energéticos</Text></li>
                <li><Text>Eficiencia energética y construcción de escenarios prospectivos</Text></li>
                <li><Text>Visión a largo plazo del sistema energético del Ecuador</Text></li>
                <li><Text>Experiencias internacionales sobre la construcción de escenarios energéticos</Text></li>
                <li><Text>Estudios prospectivos desde los centros de investigación</Text></li>
              </ul>
            </section>

            <section className='w-2/3 md:w-1/2'>
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
            <Title>Agenda</Title>
            <div
              className='container grid items-stretch grid-cols-1 p-5 gap-y-10 gap-x-20 md:pl-24 lg:grid-cols-2'>
              {programItems.map(({ time, label, expositor, institution }) => (
                <ProgramItem key={time} time={time} label={label} expositor={expositor} institution={institution} />
              ))}
            </div>

          </section>

          {/* Organizadores */}
          <Separator id="organizadores" />
          <Participants title="Organizadores" data={organizers} />

          {/* Patrocinadores */}
          <Separator id="patrocinadores" />
          <Participants title="Instituciones Participantes y Patrocinadores" data={sponsors} />

          {/* ¿Qué busca el evento? */}
          <Separator id="que-busca-el-evento" />
          <section
            className="flex flex-col items-center gap-5 lg:flex-row lg:container"
          >
            <section className='flex flex-col px-5 md:pl-24 lg:w-1/2'>
              <Title>¿Qué busca el evento?</Title>
              <Text>
                Generar un espacio de discusión entre instituciones de gobierno, empresas, academia y sociedad civil, sobre la necesidad de realizar estudios prospectivos que vinculen el aprovechamiento de los recursos energéticos y con ello fortalecer la planificación energética del Ecuador con fines de seguridad y soberanía.
              </Text>
              <ul className='flex flex-col gap-3 list-disc pl-7'>
                <li><Text>Entender sobre los problemas y retos que atañe a los sistemas energéticos a nivel global, regional y local, con fines de seguridad y soberanía</Text></li>
                <li><Text>Conocer sobre varias herramientas y modelos que permiten desarrollar escenarios de prospectiva energética para el fortalecimiento de las políticas públicas</Text></li>
                <li><Text>Identificar los beneficios de incorporar la transformación del mercado hacia equipos energéticamente eficientes a través de escenarios prospectivos</Text></li>
                <li><Text>Conocer sobre experiencias internacionales, investigaciones y trabajos que pueden servir para el fortalecimiento de la planificación energética al mediano y largo plazo del sistema energético del Ecuador</Text></li>
              </ul>
            </section>

            <section className='w-2/3 md:w-1/2'>
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
            <Title>Ponentes</Title>
            {/* <div className='flex flex-wrap justify-center gap-10 md:flex-row '> */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-x-20">
              {speakers.map(({ name, image, role, institute }) => (
                <SpeakerCard
                  key={name}
                  name={name}
                  role={role}
                  image={image}
                  institute={institute}
                />
              ))}
            </div>
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
            className="flex flex-col items-center px-5 lg:container md:pl-24"
          >
            <Title>Ubicación del evento</Title>
            <iframe className='w-full my-5 bg-gray-200 border-none h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.6758499995218!2d-78.50606974455522!3d-0.19899527957450538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a46fc9a03a9%3A0xc052e4af4b47fe88!2sBiblioteca%20Central%20UCE!5e0!3m2!1sen!2sec!4v1667323605044!5m2!1sen!2sec" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </div>
      </main>
      <Footer image={pageData.image} />
    </>
  )
}
