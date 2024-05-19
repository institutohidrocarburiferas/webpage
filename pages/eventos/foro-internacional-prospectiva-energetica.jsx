/*
  Importante: cambiar el nombre a la variable exception en @components/Navbar.js
  para que se apliquen estilos a estos. (Si es posible arreglarlos)
*/
import Head from 'next/head'
import Image from 'next/image'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Slider} from '@components/Slider'
import {Text} from '@components/UI/Text'
import {Title} from '@components/UI/Title'
import {Separator} from '@components/Layout/Separator'
import {Footer} from '@components/Layout/Footer'
import {Countdown} from '@components/Countdown'
import {HeroSection} from '@components/HeroSection'
import {Participants} from '@components/Participants'
import {Sidebar} from '@components/Sidebar'
import {
  programItems,
  organizers,
  sideItems,
  speakers,
  sponsors,
  expositions,
} from '@constants/eventos/foro-internacional-prospectiva-energetica'
import {getEventPhotos} from '@utils/getEventPhotos'

const pageData = {
  title: 'Foro Internacional de Prospectiva Energética en el Ecuador',
  description: 'Foro Internacional de Prospectiva Energética en el Ecuador',
  image: '/prueba.png',
  eventDay: new Date(2022, 10, 23, 8),
}
const heroContent = {
  title: 'FORO INTERNACIONAL DE PROSPECTIVA ENERGÉTICA EN EL ECUADOR',
  height: '87vh',
  image:
    '"https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"',
  text: 'miércoles, 23 de noviembre del 2022',
}

function ProgramItem ({time, label, expositor, institution}) {
  return (
    <div className="flex flex-col gap-2 pb-5 border-b-2">
      <time className="text-xl font-semibold md:text-2xl text-amber-400">{time}</time>
      <h3 className="text-xl font-semibold text-justify text-white md:text-2xl">{label}</h3>
      <p className="font-semibold md:text-xl">{expositor}</p>
      <p className="text-sm">{institution}</p>
    </div>
  )
}

function SpeakerCard ({name, image, role, institute, objectFit = 'cover'}) {
  return (
    <section className="flex flex-col w-48 gap-5 rounded-md md:w-60 md:hover:scale-105">
      <Image
        alt={name}
        className="object-top object-cover rounded-md aspect-[3/4]"
        height={300}
        src={image}
        styles={{
          objectFit,
        }}
        width={300}
      />
      <section className="grid w-full gap-1 font-semibold text-center justify-content-start rounded-b-md">
        <span className="text-sm font-bold">{name}</span>
        <span className="text-xs md:text-sm">{role}</span>
        <span className="text-[0.7rem] md:text-xs">{institute}</span>
      </section>
    </section>
  )
}

function ExpositionCard ({title, image, expositor, role, download}) {
  return (
    <div className="flex flex-col items-center justify-around w-full h-auto py-5 mx-auto border-b-2 md:flex-row md:gap-5 md:p-5 md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-transparent dark:md:hover:text-black">
      <picture className="self-center w-36 md:w-32">
        <img alt={title} loading="lazy" src={image} />
      </picture>
      <div className="flex flex-col justify-between w-full p-2 md:w-3/4">
        <h3 className="pb-5 text-lg font-semibold text-justify md:text-2xl">{title}</h3>
        <div className="flex items-center justify-between gap-2 md:gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-bold">{expositor}</span>
            <span className="text-xs md:text-sm">{role}</span>
          </div>
          <div>
            <a
              className="flex items-center gap-3 p-3 font-semibold transition-colors rounded md:p-4 bg-amber-100 hover:bg-amber-300 active:scale-105"
              download={title}
              href={download}
              rel="noopener noreferrer">
              <span className="hidden sm:block dark:text-black">Descargar</span>
              <svg
                fill="none"
                height={20}
                stroke="#2c3e50"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" x2="12" y1="4" y2="16" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Expositions ({items}) {
  const posts = items.map(({title, image, url, download, expositor, role}) => (
    <ExpositionCard
      key={title}
      download={download}
      expositor={expositor}
      image={image}
      role={role}
      title={title}
      url={url}
    />
  ))

  return (
    <section className="flex flex-col w-full max-w-5xl p-5 md:pl-16">
      {/* <h2 className='text-3xl font-bold border-b-2'>
      {title}
    </h2> */}
      <div className="flex flex-col">{posts}</div>
    </section>
  )
}

export default function Evento ({photos}) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta content={pageData.description} name="description" />
      </Head>
      <Sidebar gradient="from-amber-400 to-orange-200" items={sideItems} />
      <main>
        <HeroSection
          height={heroContent.height}
          image={heroContent.image}
          justifyContent="center"
          text={heroContent.text}
          title={heroContent.title}>
          <section className="text-gray-400">
            <span>Presencial - Cupos limitados</span>
          </section>
          {/* Registro y cuenta regresiva */}
          <section className="flex flex-col gap-5 mt-5">
            <div className="flex justify-center w-full">
              <a className="flex items-center justify-center w-auto px-4 py-2 font-semibold text-center text-black rounded transition-transform md:px-6 md:py-2 sm:text-lg md:text-xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white active:scale-95" href="#expositions">
                Descarga las ponencias del evento
              </a>
            </div>
            <Countdown eventDate={pageData.eventDay} />
          </section>
        </HeroSection>

        <div className="grid w-full grid-cols-1 justify-items-center">
          {/* ¿Por qué prospectiva ? */}
          <Separator id="por-que-perspectiva" />
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row-reverse lg:container md:pl-24">
            <section className="flex flex-col lg:w-1/2">
              <Title>¿Por qué prospectiva?</Title>
              <Text>
                Los cambios en la dinámica de consumo de las sociedades y en la capacidad de
                identificar la disponibilidad de recursos para la provisión de energía, además de la
                comprensión profunda de aspectos como: peak oil, limitaciones biofísicas, transición
                y descarbonización de las economías y sistemas de gobernanza, incluidas las formas
                de abordar nuestros patrones de producción y consumo, son principios necesarios de
                entenderlos para que los países construyan políticas que garanticen la
                sostenibilidad y seguridad de la energía en un horizonte de mediano y largo plazo.
              </Text>
              <Text>
                Es por esto que, desde el Instituto de Investigaciones Hidrocarburíferas de la
                Universidad Central del Ecuador estamos fomentando la realización de un Foro
                Internacional de Prospectiva Energética en el Ecuador con el propósito de topar los
                puntos críticos de los sistemas energéticos y de vincular a instituciones de
                gobierno, empresas, academia y sociedad civil para la discusión de la necesidad en
                la construcción de escenarios energéticos nacionales deseables en base a
                metodologías innovadoras, experiencias internacionales y contemplando la realidad y
                autodeterminación en el desarrollo del Ecuador.
              </Text>
            </section>
            <section className="w-2/3 md:w-1/2">
              <svg
                className="icon icon-tabler icon-tabler-recharging"
                fill="none"
                stroke="blue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
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
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row md:pl-12 lg:pl-24 lg:container">
            <section className="flex flex-col lg:w-1/2">
              <Title>Ejes temáticos</Title>
              <Text>Los ejes temáticos que se tratarán en el seminario son los siguientes:</Text>
              <ul className="font-semibold list-disc pl-7">
                <li>
                  <Text>Seguridad y sostenibilidad de los sistemas futuros de energía</Text>
                </li>
                <li>
                  <Text>Visualización y retos de la transición energética en ALC</Text>
                </li>
                <li>
                  <Text>Futuro de los mercados de commodities energéticos</Text>
                </li>
                <li>
                  <Text>Eficiencia energética y construcción de escenarios prospectivos</Text>
                </li>
                <li>
                  <Text>Visión a largo plazo del sistema energético del Ecuador</Text>
                </li>
                <li>
                  <Text>
                    Experiencias internacionales sobre la construcción de escenarios energéticos
                  </Text>
                </li>
                <li>
                  <Text>Estudios prospectivos desde los centros de investigación</Text>
                </li>
              </ul>
            </section>

            <section className="w-2/3 md:w-1/2">
              <svg
                className="icon icon-tabler icon-tabler-bulb"
                fill="none"
                stroke="#facc15"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <line x1="9.7" x2="14.3" y1="17" y2="17" />
              </svg>
            </section>
          </section>

          {/* Agenda */}
          <Separator id="agenda" />
          <section
            className="flex flex-col items-center w-full text-gray-300"
            style={{
              backgroundColor: '#11284b',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage:
                'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/bgEvent.svg)',
            }}>
            <Title>Agenda</Title>
            <div className="container grid items-stretch grid-cols-1 p-5 gap-y-10 gap-x-20 md:pl-24 lg:grid-cols-2">
              {programItems.map(({time, label, expositor, institution}) => (
                <ProgramItem
                  key={time}
                  expositor={expositor}
                  institution={institution}
                  label={label}
                  time={time}
                />
              ))}
            </div>
          </section>

          {/* Organizadores */}
          <Separator id="organizadores" />
          <Participants data={organizers} title="Organizadores" />

          {/* Patrocinadores */}
          <Separator id="patrocinadores" />
          <Participants data={sponsors} title="Instituciones Participantes y Patrocinadores" />

          {/* ¿Qué busca el evento? */}
          <Separator id="que-busca-el-evento" />
          <section className="flex flex-col items-center gap-5 lg:flex-row lg:container">
            <section className="flex flex-col px-5 md:pl-24 lg:w-1/2">
              <Title>¿Qué busca el evento?</Title>
              <Text>
                Generar un espacio de discusión entre instituciones de gobierno, empresas, academia
                y sociedad civil, sobre la necesidad de realizar estudios prospectivos que vinculen
                el aprovechamiento de los recursos energéticos y con ello fortalecer la
                planificación energética del Ecuador con fines de seguridad y soberanía.
              </Text>
              <ul className="flex flex-col gap-3 list-disc pl-7">
                <li>
                  <Text>
                    Entender sobre los problemas y retos que atañe a los sistemas energéticos a
                    nivel global, regional y local, con fines de seguridad y soberanía
                  </Text>
                </li>
                <li>
                  <Text>
                    Conocer sobre varias herramientas y modelos que permiten desarrollar escenarios
                    de prospectiva energética para el fortalecimiento de las políticas públicas
                  </Text>
                </li>
                <li>
                  <Text>
                    Identificar los beneficios de incorporar la transformación del mercado hacia
                    equipos energéticamente eficientes a través de escenarios prospectivos
                  </Text>
                </li>
                <li>
                  <Text>
                    Conocer sobre experiencias internacionales, investigaciones y trabajos que
                    pueden servir para el fortalecimiento de la planificación energética al mediano
                    y largo plazo del sistema energético del Ecuador
                  </Text>
                </li>
              </ul>
            </section>

            <section className="w-2/3 md:w-1/2">
              <svg
                className="icon icon-tabler icon-tabler-map-search"
                fill="none"
                stroke="#065f46"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
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
          <section className="flex flex-col items-center gap-5 p-5 lg:container md:pl-24">
            <Title>Ponentes</Title>
            <div className="flex flex-wrap justify-center gap-10 md:flex-row ">
              {/* <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-x-20"> */}
              {speakers.map(({name, image, role, institute}) => (
                <SpeakerCard
                  key={name}
                  image={image}
                  institute={institute}
                  name={name}
                  role={role}
                />
              ))}
            </div>
          </section>

          {/* Exposiciones */}
          <Separator id="expositions" />
          <div className="mx-2">
            <Title>Ponencias presentadas en el foro</Title>
          </div>
          <Expositions items={expositions} />

          {/* Registro */}
          {/* <Separator id="registro" />
          <HeroSection
            height="auto"
            image={heroContent.image}
            justifyContent="center"
            text={heroContent.text}
            title={`REGÍSTRATE EN EL ${heroContent.title}`}
          >
            <section className='text-gray-400'>
              <span>Presencial - Cupos limitados</span>
            </section>
            <section className='flex flex-col gap-8 mt-14'>
              <div className='flex justify-center w-full'>
                <RegisterButton />
              </div>
            </section>

          </HeroSection> */}

          <Separator id="photos" />

          <div className="container mx-auto">
            {/* Recent notices section */}
            <Title>Fotos del evento</Title>

            <section className="max-w-5xl p-2 mx-auto md:pl-16">
              <Slider data={photos} slice={photos.length} />
            </section>
          </div>

          {/* <div className='container flex flex-wrap justify-center gap-20 mx-auto md:ml-16'>
            {photos.map(({image}) => (
              <picture key={image}>

                <img alt={image.slice(0, -4)} className='h-72' src={image}/>
              </picture>
            ))}
          </div> */}

          {/* Mapa */}
          <Separator id="ubicacion" />
          <section className="container flex flex-col items-center px-5 md:pl-24">
            <Title>Ubicación del evento</Title>
            <iframe
              allowFullScreen=""
              className="w-full my-5 bg-gray-200 border-none h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.6758499995218!2d-78.50606974455522!3d-0.19899527957450538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a46fc9a03a9%3A0xc052e4af4b47fe88!2sBiblioteca%20Central%20UCE!5e0!3m2!1sen!2sec!4v1667323605044!5m2!1sen!2sec"
            />
          </section>
        </div>
      </main>
      <Footer image={pageData.image} />
    </>
  )
}

export const getStaticProps = async ({locale}) => {
  const dir = '/eventos/foro-internacional-prospectiva-energetica/fotos'
  const i18nConf = await serverSideTranslations(locale)
  const photos = await getEventPhotos({dir})

  return {
    props: {
      photos,
      ...i18nConf,
    },
  }
}
