import Head from 'next/head'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Slider} from '@components/Slider'
import {Text} from '@components/UI/Text'
import {Title} from '@components/UI/Title'
import {Separator} from '@components/Layout/Separator'
import {Footer} from '@components/Layout/Footer'
import {HeroSection} from '@components/HeroSection'
import {Participants} from '@components/Participants'
import {Sidebar} from '@components/Sidebar'
import {
  programItems,
  organizers,
  sideItems,
  // speakers,
  sponsors,
  // expositions,
} from '@constants/eventos/seminario-innovacion-retos-cuarta-revolucion-industrial'
import {getEventPhotos} from '@utils/getEventPhotos'

const pageData = {
  title: 'Seminario Internacional de Innovación y Retos Tecnológicos del Sector Energético en la Cuarta Revolución Industrial',
  description: 'Seminario Internacional de Innovación y Retos Tecnológicos del Sector Energético en la Cuarta Revolución Industrial',
  image: '/prueba.png',
  eventDay: new Date(2019, 11, 2, 8),
}
const heroContent = {
  title: 'I Seminario Internacional de Innovación y Retos Tecnológicos del Sector Energético en la 4ta Revolución Industrial',
  height: '50vh',
  image:
    '"https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"',
  text: '2 y 3 de diciembre del 2019',
}

function ProgramItem ({time, label, expositor, institution}) {
  return (
    <div className="flex flex-col gap-2 pb-5 border-b-2">
      <time className="text-xl font-semibold md:text-2xl text-amber-400">{time}</time>
      <h3 className="text-xl font-semibold text-justify text-white md:text-2xl">{label}</h3>
      <p className="font-semibold text-md md:text-xl">{expositor}</p>
      <p className="text-sm md:text-md">{institution}</p>
    </div>
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
          {/* <section className="flex flex-col gap-5 mt-5">
            <div className="flex justify-center w-full">
              <RegisterButton />
            </div>
            <Countdown eventDate={pageData.eventDay} />
            </section> */}
        </HeroSection>

        <div className="grid w-full grid-cols-1 justify-items-center">
          {/* ¿Por qué prospectiva ? */}
          <Separator id="por-que-perspectiva" />
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row-reverse lg:container md:pl-24">
            <section className="flex flex-col lg:w-1/2">
              <Title>Descripción</Title>
              <Text>
              El Instituto de Investigaciones Hidrocarburíferas IIH y la Facultad de Ingeniería en Geología,
              Minas, Petróleos y Ambiental FIGEMPA realizaron el primer “Seminario Internacional de Innovación
              y Retos Tecnológicos del Sector Energético en la Cuarta Revolución Industrial” en donde se debatieron
              los principales temas que atañen a la dinámica e innovación tecnológica en la gestión de los recursos naturales.
              El objetivo fue identificar las oportunidades de innovación y retos tecnológicos que trae consigo la 4ta
              revolución industrial en el sector energético, a fin de construir una agenda de trabajo entre actores
              del sector público, empresas privadas y la academia, abordando de manera oportuna los desafíos del Ecuador
              en un contexto regional y global.
              </Text>
              <Text>
              El evento se realizó el 2 y 3 de diciembre de 2019 en donde se congregaron más de 300 expertos nacionales y
              extranjeros, quienes expusieron y debatieron sobre el panorama del sector energético frente a la innovación.
              Por ejemplo: Carlos Maynor de la Universidad Nacional Autónoma de México, puntualizó sobre el auge de la
              transición hacia la cuarta revolución industrial, donde es importante la propuesta de nuevas técnicas
              dirigidas al talento humano de las instituciones. Además, explicó sobre los elementos clave de la
              Industria 4.0 que son: tecnología, personas, organizaciones y entornos, mientras que Bernardo Traversari,
              Gerente de SERTECPET, es el mercado el que impulsa la transformación digital de acuerdo a las necesidades
              y exigencias de consumidores, por ello, es importante, generar una cultura tecnológica en la sociedad.
              </Text>
              <p />
              <a className='flex items-center gap-3 p-3 font-semibold transition-colors rounded md:p-4 bg-amber-100 hover:bg-amber-300 active:scale-105' href='https://uceedu-my.sharepoint.com/:v:/g/personal/gbyanez_uce_edu_ec/EYrhBfrjuBBIiKX14TYdtUkBkVEuiJ9NiKQgV2He_s3hWw?e=v3tl1n' target='_blank'>Video del evento</a>
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
              <Text>Los ejes temáticos tratados son los siguientes:</Text>
              <ul className="font-semibold list-disc pl-7">
                <li>
                  <Text>Cuarta Revolución Industrial</Text>
                </li>
                <li>
                  <Text>Visión del Sector Energético</Text>
                </li>
                <li>
                  <Text>Planificación, Políticas y Oportunidades de Financiamiento</Text>
                </li>
                <li>
                  <Text>Investigación, Desarrollo e Innovación I+D+I </Text>
                </li>
                <li>
                  <Text>Retos y Desafíos del sector Energético en la Revolución 4.0</Text>
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
          <Participants data={sponsors} title="Auspiciado por" />

          {/* Objetivos */}
          <Separator id="que-busca-el-evento" />
          <section className="flex flex-col items-center gap-5 lg:flex-row lg:container">
            <section className="flex flex-col px-5 md:pl-24 lg:w-1/2">
              <Title>Objetivos</Title>
              <Text>
               Objetivo General
              </Text>
              <Text>
                Identificar las oportunidades de innovación y retos tecnológicos que trae consigo la
                4ta. revolución industrial en el sector energético, a fin de construir una agenda de trabajo
                entre actores del sector público, empresas privadas y la academia, abordando de manera oportuna
                los desafíos del Ecuador en un contexto regional y global.
              </Text>
              <Text>
               Objetivos Específicos
              </Text>
              <ul className="flex flex-col gap-3 list-disc pl-7">
                <li>
                  <Text>
                    Ilustrar sobre los principios tecnológicos, económicos y políticos que trae consigo la
                    4ta. revolución industrial.
                  </Text>
                </li>
                <li>
                  <Text>
                    Discutir sobre la gestión de los sistemas de energía en un contexto global, regional y nacional.
                  </Text>
                </li>
                <li>
                  <Text>
                    Conocer sobre los avances, requerimientos y oportunidades en investigación, desarrollo e innovación
                    I+D+I del sector energético del Ecuador.
                  </Text>
                </li>
                <li>
                  <Text>
                  Proponer una acción conjunta entre actores públicos, privado y academia para abordar los retos
                  del sector energético en la 4ta. revolución industrial.
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
          {/* <Separator id="ponentes" />
          <section className="flex flex-col items-center gap-5 p-5 lg:container md:pl-24">
            <Title>Ponentes</Title>
            <div className="flex flex-wrap justify-center gap-10 md:flex-row ">
              {/* <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-x-20"> */}
          {/*    {speakers.map(({name, image, role, institute}) => (
                <SpeakerCard
                  key={name}
                  image={image}
                  institute={institute}
                  name={name}
                  role={role}
                />
              ))}
            </div>
          </section> */}

          {/* Exposiciones */}
          {/*
          <Separator id="expositions" />
          <div className="mx-2">
            <Title>Ponencias presentadas en el foro</Title>
          </div>
              <Expositions items={expositions} /> */}

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
  const dir = 'eventos/seminario-internacional-cuarta-revolucion-industrial/fotos'
  const i18nConf = await serverSideTranslations(locale)
  const photos = await getEventPhotos({dir})

  return {
    props: {
      photos,
      ...i18nConf,
    },
  }
}
