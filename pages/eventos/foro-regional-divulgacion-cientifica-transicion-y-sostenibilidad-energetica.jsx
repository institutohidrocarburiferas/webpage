import Head from 'next/head'
import Image from 'next/image'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

// import {Slider} from '@components/Slider'
import {Text} from '@components/UI/Text'
import {Title} from '@components/UI/Title'
import {Separator} from '@components/Layout/Separator'
import {Footer} from '@components/Layout/Footer'
import {Countdown} from '@components/Countdown'
import {HeroSection} from '@components/HeroSection'
import {Participants} from '@components/Participants'
import {RegisterButton} from '@components/RegisterButton'
import {Sidebar} from '@components/Sidebar'
import {
  programItems,
  organizers,
  sideItems,
  speakers,
  // expositions,
  revistas,
  indexaciones,
} from '@constants/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica'
// import {getEventPhotos} from '@utils/getEventPhotos'

const pageData = {
  title: 'Foro Regional De Divulgación Científica: Transición Y Sostenibilidad Energética',
  description: 'Foro Regional De Divulgación Científica: Transición Y Sostenibilidad Energética',
  image: '/prueba.png',
  eventDay: new Date(2024, 6, 26, 8),
  eventPosterLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeA3I-XTxDS0pjfgVLVrOXFni2D7LYteNxGFOftdm_eNxa-7A/viewform',
  eventLinkRegister: 'https://docs.google.com/forms/d/e/1FAIpQLSdcVReGJZ7uxn8FbtWV7yB8wcKZ55fXs1cnXg5Zl6QbJBm2vA/closedform'
}
const heroContent = {
  title: 'FORO REGIONAL DE DIVULGACIÓN CIENTÍFICA: TRANSICIÓN Y SOSTENIBILIDAD ENERGÉTICA',
  height: '87vh',
  image:
    '/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica.jpg',
  text: 'Viernes, 26 de julio del 2024',
}

function ProgramItem ({time, label, expositor, institution}) {
  return (
    <div className="flex flex-col gap-2 pb-5 border-b-2">
      <time className="text-xl font-semibold md:text-2xl text-amber-400">{time}</time>
      <h3 className="text-xl font-semibold text-justify text-white md:text-2xl">{label}</h3>
      <p className="text-sm md:text-base">{expositor}</p>
      <p className="text-sm md:text-base">{institution}</p>
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
      <section className="grid w-full gap-3 font-semibold text-center justify-content-start rounded-b-md">
        <span className="text-sm font-bold md:text-base">{name}</span>
        <span className="text-xs md:text-sm">{role}</span>
        <span className="text-[0.7rem] font-thin text-pretty md:text-xs">{institute}</span>
      </section>
    </section>
  )
}

// function ExpositionCard ({title, image, expositor, role, download}) {
//   return (
//     <div className="flex flex-col items-center justify-around w-full h-auto py-5 mx-auto border-b-2 md:flex-row md:gap-5 md:p-5 md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-transparent dark:md:hover:text-black">
//       <picture className="self-center w-36 md:w-32">
//         <img alt={title} loading="lazy" src={image} />
//       </picture>
//       <div className="flex flex-col justify-between w-full p-2 md:w-3/4">
//         <h3 className="pb-5 text-lg font-semibold text-justify md:text-2xl">{title}</h3>
//         <div className="flex items-center justify-between gap-2 md:gap-10">
//           <div className="flex flex-col">
//             <span className="text-sm font-bold md:text-base">{expositor}</span>
//             <span className="text-xs md:text-sm">{role}</span>
//           </div>
//           <div>
//             <a
//               className="flex items-center gap-3 p-3 font-semibold transition-colors rounded md:p-4 bg-amber-100 hover:bg-amber-300 active:scale-105"
//               download={title}
//               href={download}
//               rel="noopener noreferrer">
//               <span className="hidden sm:block dark:text-black">Descargar</span>
//               <svg
//                 fill="none"
//                 height={20}
//                 stroke="#2c3e50"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path d="M0 0h24v24H0z" fill="none" stroke="none" />
//                 <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
//                 <polyline points="7 11 12 16 17 11" />
//                 <line x1="12" x2="12" y1="4" y2="16" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Expositions ({items}) {
//   const posts = items.map(({title, image, url, download, expositor, role}) => (
//     <ExpositionCard
//       key={title}
//       download={download}
//       expositor={expositor}
//       image={image}
//       role={role}
//       title={title}
//       url={url}
//     />
//   ))

//   return (
//     <section className="flex flex-col w-full max-w-5xl p-5 md:pl-16">
//       {/* <h2 className='text-3xl font-bold border-b-2'>
//       {title}
//     </h2> */}
//       <div className="flex flex-col">{posts}</div>
//     </section>
//   )
// }

export default function Evento ({photos}) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta content={pageData.description} name="description" />
      </Head>
      <Sidebar gradient='from-[#EAEBEF] to-[#FAFAFF]' items={sideItems}/>
      <main>
        <HeroSection
          height={heroContent.height}
          image={heroContent.image}
          justifyContent="center"
          text={heroContent.text}
          title={heroContent.title}>
          <section className="text-gray-400">
            <span>Evento Presencial</span>
          </section>
          {/* Registro y cuenta regresiva */}
          <section className="flex flex-col gap-10 mt-5">
            <div className="flex flex-col items-center justify-center gap-6 mx-auto w-fit">
              <RegisterButton className="" href={pageData.eventPosterLink}>
                Envíanos tu Póster hasta el 20 de Junio
              </RegisterButton>
              <a
                className='w-full px-2 py-2 font-semibold text-center text-white transition-transform bg-transparent border border-white rounded md:px-6 sm:text-xl hover:bg-black/50 md:text-2xl lg:text-xl hover:scale-105 active:scale-95'
                href="https://docs.google.com/presentation/d/1hoLy32EZvDsxL7ldU6PgsPjpPCLnxmJ5/edit#slide=id.p1"
                rel='noopener noreferrer'
                target="_blank"
              >
                Revisa el formato del póster aquí
              </a>
              <div className='w-full'>
                <RegisterButton className='opacity-50 pointer-events-none' href={pageData.eventLinkRegister}>
                  Asiste al evento
                </RegisterButton>
                <span className="text-xs text-white lg:text-sm">
                  Enlace habilitado a partir del 1 de junio
                </span>
              </div>
            </div>
            <Countdown eventDate={pageData.eventDay} />
          </section>
        </HeroSection>

        <div className="grid w-full grid-cols-1 justify-items-center">
          {/* Información */}
          <Separator id="info" />
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row-reverse lg:container md:pl-24">
            <section className="flex flex-col lg:w-1/2">
              <Title>Información</Title>
              <Text>
                El Foro Regional de Divulgación Científica: Transición y Sostenibilidad Energética
                busca generar un espacio de divulgación a través de la presentación de póster
                científicos sobre los avances en estudios de investigación y de aplicación que
                permitan la materialización de la transición y la sostenibilidad energética.
              </Text>
              <Text>
                El evento esta organizado por el Instituto de Investigaciones Hidrocarburíferas de
                la Universidad Central del Ecuador en coordinarción con la Organización Latinoamericana
                de Energía - OLADE y Student Energy,  se desarrollará el 26 de julio de 2024 en el
                Teatro Universitario de la Cuidadela Universitaria.
              </Text>
            </section>
            <section className="w-2/3 mx-auto md:w-1/3">
              <svg
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m440.425 68.993-4.521 4.884C387.68 26.236 323.802 0 256 0 193.842 0 133.905 22.553 87.231 63.503 31.795 112.145 0 182.307 0 256c0 9.864 7.997 17.86 17.86 17.86s17.86-7.997 17.86-17.86c0-63.411 27.361-123.786 75.069-165.645C150.945 55.123 202.515 35.721 256 35.721c58.419 0 113.453 22.633 154.967 63.727.223.22.461.413.692.619l-5.301 5.727c-6.694 7.232-1.116 18.93 8.717 18.278l32.894-2.177a10.899 10.899 0 0 0 10.173-10.506l1.173-34.627c.343-10.087-12.032-15.178-18.89-7.769z"
                  style={{fill: '#489b6d'}}
                />
                <path
                  d="M17.86 273.86C7.997 273.86 0 265.864 0 256c0-73.693 31.795-143.855 87.231-192.497C133.905 22.553 193.842 0 256 0v35.721c-53.485 0-105.055 19.402-145.21 54.634C63.082 132.214 35.721 192.589 35.721 256c0 9.864-7.997 17.86-17.861 17.86z"
                  style={{fill: '#a2ce86'}}
                />
                <path
                  d="M256 512c-62.153 0-122.087-22.549-168.759-63.495-7.416-6.505-8.153-17.789-1.648-25.205 6.506-7.416 17.789-8.153 25.205-1.648 40.154 35.227 91.721 54.627 145.202 54.627 62.833 0 122.841-26.945 164.638-73.929 35.88-40.333 55.641-92.306 55.641-146.35 0-9.864 7.997-17.86 17.86-17.86S512 246.136 512 256c0 62.807-22.969 123.212-64.674 170.094C398.758 480.688 329.022 512 256 512z"
                  style={{fill: '#489b6d'}}
                />
                <path
                  d="M110.798 421.652a17.99 17.99 0 0 0-2.049-1.529l4.52-4.883c6.694-7.232 1.116-18.93-8.718-18.278l-32.894 2.177a10.899 10.899 0 0 0-10.173 10.506l-1.173 34.627c-.342 10.09 12.033 15.181 18.89 7.773l5.646-6.1a17.96 17.96 0 0 0 2.394 2.56C133.913 489.451 193.847 512 256 512v-35.721c-53.481 0-105.048-19.4-145.202-54.627z"
                  style={{fill: '#a2ce86'}}
                />
                <circle cx={256} cy={256} r="161.351" style={{fill: '#91c0f1'}} />
                <path
                  d="M256 417.349c-89.111 0-161.349-72.238-161.349-161.349S166.889 94.651 256 94.651v322.698z"
                  style={{fill: '#d7edf3'}}
                />
                <path
                  d="m184.672 312.127 2.372-2.624c8.094-8.958 7.938-22.633-.357-31.405l-1.267-1.341a23.134 23.134 0 0 1-5.626-21.541 23.135 23.135 0 0 0-10.944-25.724l-61.404-36.559C99.21 212.307 94.651 233.621 94.651 256c0 63.517 36.708 118.452 90.061 144.775l-5.677-69.236a23.134 23.134 0 0 1 5.637-19.412z"
                  style={{fill: '#a2ce86'}}
                />
                <path
                  d="m369.959 141.781-10.661 11.651a25.737 25.737 0 0 1-17.987 8.342l-48.217 1.872a25.732 25.732 0 0 0-20.875 12.158l-12.359 19.944a25.733 25.733 0 0 0 1.306 29.02l7.676 10.208a44.36 44.36 0 0 1 8.904 26.887l-.163 31.643c-.086 16.666 14.905 29.364 31.33 26.537l35.149-6.049a44.358 44.358 0 0 0 25.132-13.693c11.802-12.838 29.386-17.106 45.029-12.571a162.037 162.037 0 0 0 3.127-31.731c-.001-44.62-18.116-85.01-47.391-114.218zM265.099 378.549a25.814 25.814 0 0 0-15.011 27.772l1.799 10.977c1.367.035 2.737.052 4.113.052 26.081 0 50.712-6.196 72.513-17.184l-2.748-4.095c-13.287-19.795-38.871-27.185-60.666-17.522z"
                  style={{fill: '#007ab7'}}
                />
                <path
                  d="m186.349 158.508 32.729-18.42a21.535 21.535 0 0 0 10.32-13.508l7.757-30.827c-36.776 4.279-69.778 20.918-94.739 45.662l20.342 15.468a21.53 21.53 0 0 0 23.591 1.625z"
                  style={{fill: '#a2ce86'}}
                />
              </svg>
            </section>
          </section>

          {/* Ejes temáticos */}
          <Separator id="ejes-tematicos" />
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row md:pl-12 lg:pl-24 lg:container">
            <section className="flex flex-col lg:w-1/2">
              <Title>Ejes temáticos</Title>
              <ul className="font-semibold list-disc pl-7">
                <li>
                  <Text>Petróleo y otras fuentes primarias de energía</Text>
                  {/* <div className="font-normal my-4">
                    Descripción del eje temático
                  </div> */}
                </li>
                <li>
                  <Text>Sistemas renovables</Text>
                </li>
                <li>
                  <Text>Economía de la energía</Text>
                </li>
                <li>
                  <Text>Descarbonización</Text>
                </li>
                <li>
                  <Text>Justicia energética y género</Text>
                </li>
                <li>
                  <Text>
                  Uso y eficiencia energética
                  </Text>
                </li>
                <li>
                  <Text>Innovaciones tecnológicas y aplicadas</Text>
                </li>
              </ul>
            </section>

            <section className="w-2/3 mx-auto md:w-1/3">
              <svg
                viewBox="0 0 480 480"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M408 368h56v16h-56zM240 368h120v16H240z"
                  style={{fill: '#7ac943'}}
                />
                <path d="M368 192h96v16h-96z" style={{fill: '#ffc600'}} />
                <path
                  d="M296 280h168v16H296zM240 104h224v16H240z"
                  style={{fill: '#1d9aae'}}
                />
                <path
                  d="M41.6 376c8.8 28.8 34.4 49.6 62.4 49.6s53.6-20.8 62.4-49.6h24c-8.8 40.8-46.4 72-86.4 72s-77.6-31.2-86.4-72h24zM104 294.4c-30.4 0-54.4 16-62.4 41.6h-24c8.8-37.6 44-64 86.4-64s77.6 26.4 86.4 64h-24c-8-25.6-32-41.6-62.4-41.6z"
                  style={{fill: '#e94545'}}
                />
                <path
                  d="M38.4 120c0 30.4 20.8 56 49.6 63.2v24c-40.8-8-72-44.8-72-87.2s31.2-79.2 72-86.4v24c-28.8 7.2-49.6 32-49.6 62.4zM170.4 118.4c0-27.2-16.8-51.2-42.4-60.8v-24c37.6 10.4 64.8 44.8 64.8 84.8s-28 76.8-64.8 87.2v-24c24.8-9.6 42.4-35.2 42.4-63.2z"
                  style={{fill: '#ff7d00'}}
                />
                <path
                  d="M464 384v-16h-56v16h56zm16-24v32c0 4-4 8-8 8h-72c-4 0-8-4-8-8v-32c0-4 4-8 8-8h72c4 0 8 4 8 8zM464 208v-16h-96v16h96zm-112 8v-32c0-4 4-8 8-8h112c4 0 8 4 8 8v32c0 4-4 8-8 8H360c-4 0-8-4-8-8zM288 264h184c4 0 8 4 8 8v32c0 4-4 8-8 8H288c-4 0-8-4-8-8v-32c0-4 4-8 8-8zm8 32h168v-16H296v16zM232 88h240c4 0 8 3.2 8 8v32c0 4-4 8-8 8H232c-4 0-8-4-8-8V96c0-4.8 4-8 8-8zm8 32h224v-16H240v16zM232 352h136c4 0 8 4 8 8v32c0 4-4 8-8 8H232c-4 0-8-4-8-8v-32c0-4 4-8 8-8zm8 32h120v-16H240v16zM170.4 118.4c0 28-17.6 53.6-42.4 63.2v24c36.8-10.4 64.8-47.2 64.8-87.2S165.6 44 128 33.6v24c25.6 9.6 42.4 33.6 42.4 60.8zM112 64V24c0-2.4.8-4.8 3.2-6.4 1.6-.8 4-1.6 6.4-1.6 51.2 8 88 51.2 88 102.4 0 52-37.6 97.6-88 104.8H120c-1.6 0-4-.8-4.8-1.6-2.4-.8-3.2-3.2-3.2-5.6v-40c0-4 2.4-7.2 5.6-8 21.6-5.6 36.8-26.4 36.8-49.6 0-22.4-14.4-40.8-36.8-47.2-3.2 0-5.6-4-5.6-7.2zM104 425.6c-28 0-53.6-20.8-62.4-49.6h-24c9.6 40.8 46.4 72 86.4 72s77.6-31.2 86.4-72h-24c-8.8 28.8-34.4 49.6-62.4 49.6zm-48-59.2c4 20.8 22.4 43.2 48 43.2s44-22.4 48-43.2c.8-4 4-6.4 8-6.4h40c2.4 0 4.8.8 6.4 2.4 1.6 1.6 2.4 4 1.6 6.4-6.4 53.6-52 95.2-104 95.2S6.4 422.4 0 368.8c0-2.4 0-4.8 1.6-6.4s4-2.4 6.4-2.4h40c4 0 7.2 2.4 8 6.4zM41.6 336c8-25.6 32-41.6 62.4-41.6s54.4 16 62.4 41.6h24c-8.8-37.6-44-64-86.4-64s-77.6 26.4-86.4 64h24zm62.4-25.6c-25.6 0-44 13.6-48 35.2-.8 4-4 6.4-8 6.4H8c-2.4 0-4.8-.8-6.4-2.4-.8-1.6-1.6-4-1.6-6.4C5.6 292.8 49.6 256 104 256s98.4 36.8 104 87.2c0 2.4 0 4.8-1.6 6.4-1.6 1.6-4 2.4-6.4 2.4h-40c-4 0-7.2-2.4-8-6.4-4-21.6-22.4-35.2-48-35.2zM95.2 224C41.6 220 0 173.6 0 120 0 65.6 41.6 20 95.2 16c2.4 0 4.8.8 6.4 2.4 1.6.8 2.4 3.2 2.4 5.6v40c0 4-3.2 7.2-7.2 8-24.8 3.2-42.4 23.2-42.4 48s17.6 44.8 42.4 48.8c4 .8 7.2 4 7.2 8v40c0 2.4-.8 4-2.4 5.6-1.6.8-3.2 1.6-6.4 1.6.8 0 0 0 0 0zM88 32.8c-40.8 8-72 44-72 87.2s31.2 80 72 87.2v-24C59.2 176 38.4 150.4 38.4 120S59.2 64.8 88 57.6V32.8z"
                  style={{fill: '#42210b'}}
                />
              </svg>
            </section>
          </section>

          {/* Oportunidades de publicación */}
          <Separator id="oportunidades" />
          <section className="container flex flex-col items-center gap-2 p-3">
            <Title>Oportunidades de publicación</Title>
            <div className='max-w-3xl mx-auto'>
              <Text>Los autores de los pósters aceptados realizarán una presentación
                en el evento presencial del 26 de julio y recibirán una invitación
                para publicar su investigación en un número especial en las revistas
                indexadas bajo revisión de pares académicos, enerLAC y FIGEMPA.</Text>
            </div>
          </section>
          <section className="container flex flex-col items-center gap-0 p-3">
            <div className='max-w-3xl mx-auto font-semibold italic'>
              <Text> **Adicionalmente, los trabajos presentados se publicarán como
                artículos cortos en el libro de actas a entregarse el día del evento.
              </Text>
            </div>
            <Participants data={revistas} title="Revistas" />
            <Participants data={indexaciones} title="Indexaciones" />
          </section>

          {/* Organizadores */}
          <Separator id="organizadores" />
          <Participants data={organizers} title="Organizadores" />

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
            <Title>Fechas Importantes</Title>
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

          {/* Participantes */}
          <Separator id="perfil-participantes" />
          <section className="flex flex-col items-center gap-5 lg:flex-row lg:container">
            <section className="flex flex-col px-5 md:pl-24 lg:w-1/2">
              <Title>Participantes</Title>
              <Text>
                El evento está dirigido a jovenes investigadores y
                actores responsables de la gobernanza energética. Será un
                espacio de interacción con representantes de las instituciones
                gubernamentales, sector empresarial, academia y otros grupos
                de la sociedad civil para compartir los avances científicos y
                de aplicación en el marco de la sostenibilidad.
              </Text>
            </section>

            <section className="w-2/3 mx-auto md:w-1/3">
              <svg
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={256} cy={256} r={256} style={{fill: '#324a5e'}} />
                <path
                  d="M275.939 511.233c101.693-7.833 186.742-75.085 220.482-167.091L339.573 186.939l-44.197 43.501-80.748-80.748-35.5 35.164-28.138 29.084 57.31 58.14-118.915 52.597 186.554 186.556z"
                  style={{fill: '#2b3b4e'}}
                />
                <circle cx="182.82" cy="181.7" r="45.304" style={{fill: '#ffd300'}} />
                <path
                  d="M182.813 136.406c-.219 0-.434.014-.653.017v90.565c.219.003.434.017.653.017 25.017 0 45.299-20.282 45.299-45.299s-20.281-45.3-45.299-45.3z"
                  style={{fill: '#f4a200'}}
                />
                <path
                  d="M89.385 324.679c0-51.6 41.829-93.429 93.429-93.429s93.429 41.829 93.429 93.429H89.385z"
                  style={{fill: '#fc6f58'}}
                />
                <path
                  d="M182.813 231.25c-.219 0-.434.016-.653.017v93.412h94.082c0-51.6-41.829-93.429-93.429-93.429z"
                  style={{fill: '#f1543f'}}
                />
                <circle cx="304.787" cy="215.971" r="45.304" style={{fill: '#ffd15d'}} />
                <path
                  d="M304.793 170.667c-.079 0-.157.005-.236.005v90.586c.079 0 .157.005.236.005 25.017 0 45.299-20.282 45.299-45.299 0-25.016-20.28-45.297-45.299-45.297z"
                  style={{fill: '#f9b54c'}}
                />
                <path
                  d="M211.365 358.94c0-51.6 41.829-93.429 93.429-93.429s93.429 41.831 93.429 93.429H211.365z"
                  style={{fill: '#31bafd'}}
                />
                <path
                  d="M304.793 265.511c-.079 0-.157.005-.236.005v93.424h93.665c0-51.599-41.829-93.429-93.429-93.429z"
                  style={{fill: '#2b9ed8'}}
                />
              </svg>
            </section>
          </section>

          {/* Ponentes */}
          <Separator id="ponentes" />
          <section className="flex flex-col items-center gap-5 p-5 lg:container md:pl-24">
            <Title>Comité Científico</Title>
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
          {/* <Separator id="expositions" />
          <div className="mx-2">
            <Title>Posters presentados</Title>
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

          {/* <Separator id="photos" />

          <div className="container mx-auto">
            <Title>Fotos del evento</Title>

            <section className="max-w-5xl p-2 mx-auto md:pl-16">
              <Slider data={photos} slice={photos.length} />
            </section>
          </div> */}

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7938196702685!2d-78.50461142545758!3d-0.20079379979722797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a40965d8b39%3A0x577d643e33c6aff4!2sTeatro%20Universitario%20-%20UCE!5e0!3m2!1ses-419!2sec!4v1716057068971!5m2!1ses-419!2sec"
            />
          </section>
        </div>
      </main>
      <Footer image={pageData.image} />
    </>
  )
}

export const getStaticProps = async ({locale}) => {
  // const dir = '/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energeticafotos'
  const i18nConf = await serverSideTranslations(locale)
  const photos = []
  // const photos = await getEventPhotos({dir})

  return {
    props: {
      photos,
      ...i18nConf,
    },
  }
}
