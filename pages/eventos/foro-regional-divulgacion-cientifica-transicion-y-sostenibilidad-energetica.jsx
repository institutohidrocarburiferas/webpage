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
  auspiciantes,
  programItems,
  organizers,
  sideItems,
  speakers,
  sponsors,
  // expositions,
  oportunidadesPublicacion,
} from '@constants/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica'
// import {getEventPhotos} from '@utils/getEventPhotos'

const pageData = {
  title: 'Foro Regional De Divulgación Científica: Transición Y Sostenibilidad Energética',
  description: 'Foro Regional De Divulgación Científica: Transición Y Sostenibilidad Energética',
  image: '/prueba.png',
  eventDay: new Date(2024, 6, 26, 8),
  eventPosterLink: '',
}
const heroContent = {
  title: 'FORO REGIONAL DE DIVULGACIÓN CIENTÍFICA: TRANSICIÓN Y SOSTENIBILIDAD ENERGÉTICA',
  height: '87vh',
  image:
    '/eventos/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica/foro-regional-divulgacion-cientifica-transicion-y-sostenibilidad-energetica.jpg',
  text: 'viernes, 26 de julio del 2024',
}

function ProgramItem ({time, label, expositor, institution}) {
  return (
    <div className="flex flex-col gap-2 pb-5 border-b-2">
      <time className="text-xl font-semibold md:text-2xl text-amber-400">{time}</time>
      <h3 className="text-xl font-semibold text-justify text-white md:text-2xl">{label}</h3>
      <p className="text-md md:text-md">{expositor}</p>
      <p className="text-md md:text-md">{institution}</p>
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
        <span className="text-sm font-bold md:text-md">{name}</span>
        <span className="text-xs md:text-sm">{role}</span>
        <span className="text-[0.7rem] md:text-xs">{institute}</span>
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
//             <span className="text-sm font-bold md:text-md">{expositor}</span>
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
            <div className="flex flex-col items-center justify-center gap-2 mx-auto w-fit">
              <RegisterButton className="opacity-50 pointer-events-none w-fit" href={pageData.eventPosterLink}>
                Envíanos tu Póster
              </RegisterButton>
              <span className="text-xs text-white lg:text-sm">
                Enlace habilitado del 20 de mayo al 20 de junio del 2024
              </span>
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
                El Foro Regional de Divulgación Científica: Transición y Sostenibilidad
                Energética** busca generar un espacio de divulgación científica sobre los avances en
                estudios de investigación y de aplicación que permitan la materialización de la
                transición y sostenibilidad energética.
              </Text>
              <Text>
                El evento es organizado por el Instituto de
                Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador
                encoparticipación con la Organización Latinoamericana de Energía-OLADE y Student
                Energy at Universidad Central del Ecuador, se llevará acabo el 26 de julio de 2024
                en el Teatro Universitario de la Universidad Central del Ecuador.
              </Text>
            </section>
            <section className="w-2/3 md:w-1/2">
              <svg
                style={{enableBackground: 'new 0 0 378.857 425.197'}}
                viewBox="0 0 378.857 425.197"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h378.857v425.197H0z" style={{fill: '#fff'}} />
                <path
                  d="M248.674 397.597c0 4.614-26.525 8.355-59.246 8.355-32.72 0-59.245-3.741-59.245-8.355 0-4.615 26.525-8.355 59.245-8.355 32.72-.001 59.246 3.74 59.246 8.355z"
                  style={{fill: '#b2b2b2'}}
                />
                <path
                  d="M240.705 291.515c0 2.871-21.684 5.198-48.43 5.198-26.748 0-48.432-2.327-48.432-5.198 0-2.869 21.684-5.197 48.432-5.197 26.746 0 48.43 2.328 48.43 5.197z"
                  style={{fill: '#7c7c7b'}}
                />
                <path
                  d="m248.092 355.157.051.052-.051-.052zM143.861 291.451h-.017.017zM248.066 355.133l.016.014a.62.62 0 0 0-.016-.014zM160.23 319.496c6.732 1.061 15.291 2.24 25.908 3.42-.244-.442-.494-.882-.734-1.326a35.457 35.457 0 0 0-.584-1.045l-.186-.484c-.936-2.426-1.652-4.932-2.346-7.436-.521-1.887-.912-3.806-1.309-5.721-.027-.148-.049-.297-.076-.445a409.012 409.012 0 0 1-24.748-3.516c.697 5.644 2.161 11.178 4.075 16.553zM249.203 357.432c-.189-1.234-.834-1.992-1.059-2.223.219.228.834.954 1.039 2.129.008.032.012.064.02.094zM215.717 350.918a20.288 20.288 0 0 0-.256-.105 175.96 175.96 0 0 1-4.4-2.066c-2.395-1.164-4.668-2.61-6.871-4.126.293.172-2.166-1.651-2.725-2.133-1.709-1.478-3.305-3.089-4.877-4.71-1.18-1.216-2.283-2.505-3.385-3.791l-.361-.444c-.424-.586-.852-1.166-1.262-1.761-.342-.485-.668-.984-.996-1.48-9.346-.885-18.775-2.002-27.445-3.413 2.605 6.145 5.365 11.806 8.912 17.176 12.554 2.641 27.512 5.221 43.666 6.853zM155.725 294.924c-.01.64-.014 1.279 0 1.918a725.39 725.39 0 0 0 24.336 2.937c-.098-1.081-.209-2.163-.301-3.24-9.471-.273-17.789-.845-24.035-1.615zM178.932 352.902c5.502 5.911 12.813 10.167 20.467 12.963l44.078.082 1.668-.899c2.277-2.043 3.383-3.801 3.838-5.248l-.002.001c-.001-.001-35.219-.655-70.049-6.899z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="m248.143 355.208.002.001c-.002.001-.002.001-.002-.001zM240.705 291.63h-.027zM248.082 355.147c.002.003.008.006.01.01-.004-.005-.008-.006-.01-.01z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M247.248 313.647c1.943-1.799 2.689-3.643 2.799-5.335-1.078.095-29.678 2.543-69.143-1.854.027.148.049.297.076.445.397 1.915.787 3.834 1.309 5.721.693 2.504 1.41 5.01 2.346 7.436.066.175.129.336.186.484.143.242.332.581.584 1.045.24.444.49.884.734 1.326 15.162 1.687 34.521 3.372 58.752 4.704l.018.008c-9.491-6.52 2.339-13.98 2.339-13.98z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M247.248 313.647c1.943-1.799 2.689-3.643 2.799-5.335-1.078.095-29.678 2.543-69.143-1.854.027.148.049.297.076.445.397 1.915.787 3.834 1.309 5.721.693 2.504 1.41 5.01 2.346 7.436.066.175.129.336.186.484.143.242.332.581.584 1.045.24.444.49.884.734 1.326 15.162 1.687 34.521 3.372 58.752 4.704l.018.008c-9.491-6.52 2.339-13.98 2.339-13.98z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M190.584 330.301c.328.496.654.995.996 1.48.41.595.838 1.175 1.262 1.761l.361.444c1.102 1.286 2.205 2.575 3.385 3.791 1.572 1.621 3.168 3.231 4.877 4.71.559.482 3.018 2.305 2.725 2.133 2.203 1.516 4.477 2.962 6.871 4.126 1.459.709 2.924 1.398 4.4 2.066.082.032.17.068.256.105 9.24.934 18.871 1.558 28.668 1.705 0 0 .098.084.275.229-7.861-6.615 3.434-11.699 3.434-11.699 2.098-2.506 2.057-5.309 1.414-7.593v.014s-29.002-.439-58.924-3.272z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M190.584 330.301c.328.496.654.995.996 1.48.41.595.838 1.175 1.262 1.761l.361.444c1.102 1.286 2.205 2.575 3.385 3.791 1.572 1.621 3.168 3.231 4.877 4.71.559.482 3.018 2.305 2.725 2.133 2.203 1.516 4.477 2.962 6.871 4.126 1.459.709 2.924 1.398 4.4 2.066.082.032.17.068.256.105 9.24.934 18.871 1.558 28.668 1.705 0 0 .098.084.275.229-7.861-6.615 3.434-11.699 3.434-11.699 2.098-2.506 2.057-5.309 1.414-7.593v.014s-29.002-.439-58.924-3.272z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M247.268 301.47s2.199 2.739 2.717 5.38c-.444-3.093-2.717-5.38-2.717-5.38z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M247.268 301.47s2.199 2.739 2.717 5.38c-.444-3.093-2.717-5.38-2.717-5.38z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M192.275 296.713c-4.33 0-8.523-.062-12.516-.175.092 1.077.203 2.16.301 3.24 21.297 2.197 47.752 3.895 67.207 1.692-6.236-3.132-7.387-6.704-6.563-9.839h-.027c-.573 2.818-22.017 5.082-48.402 5.082z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M192.275 296.713c-4.33 0-8.523-.062-12.516-.175.092 1.077.203 2.16.301 3.24 21.297 2.197 47.752 3.895 67.207 1.692-6.236-3.132-7.387-6.704-6.563-9.839h-.027c-.573 2.818-22.017 5.082-48.402 5.082z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M247.215 328.977c-.256-.13-.486-.26-.725-.391a9.66 9.66 0 0 1 1.115.937c-.234-.348-.39-.546-.39-.546z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M247.215 328.977c-.256-.13-.486-.26-.725-.391a9.66 9.66 0 0 1 1.115.937c-.234-.348-.39-.546-.39-.546z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M248.145 355.21h-.002l-.051-.053c-.002-.004-.008-.007-.01-.01l-.016-.014s.793.95 1.117 2.205a4.148 4.148 0 0 0-1.038-2.128z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M248.145 355.21h-.002l-.051-.053c-.002-.004-.008-.007-.01-.01l-.016-.014s.793.95 1.117 2.205a4.148 4.148 0 0 0-1.038-2.128z"
                  style={{opacity: '.5', fill: '#fff'}}
                />
                <path
                  d="M141.729 317.711a7.008 7.008 0 0 0-.121-.175c.042.057.08.117.121.175z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M141.729 317.711a7.008 7.008 0 0 0-.121-.175c.042.057.08.117.121.175z"
                  style={{fill: '#ccc'}}
                />
                <path
                  d="M163.139 326.888c-7.395-1.206-14.236-2.623-19.988-4.293 0 0 .078-.315.059-.866.029 2.291-1.457 4.772-6.019 7.044 0 0-1.963 2.448-2.545 5.579.045.015 14.848 4.964 37.406 9.712-3.548-5.37-6.308-11.03-8.913-17.176z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M163.139 326.888c-7.395-1.206-14.236-2.623-19.988-4.293 0 0 .078-.315.059-.866.029 2.291-1.457 4.772-6.019 7.044 0 0-1.963 2.448-2.545 5.579.045.015 14.848 4.964 37.406 9.712-3.548-5.37-6.308-11.03-8.913-17.176z"
                  style={{fill: '#ccc'}}
                />
                <path
                  d="M160.23 319.496c-1.914-5.375-3.379-10.908-4.074-16.553a384.666 384.666 0 0 1-16.309-3.192l.023-.028a21.52 21.52 0 0 1-2.629 1.539s-6.326 6.304-.023 12.179c0 0 1.273.813 2.648 2.129-.018-.016-.031-.032-.049-.049.001-.001 6.062 1.715 20.413 3.975z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M160.23 319.496c-1.914-5.375-3.379-10.908-4.074-16.553a384.666 384.666 0 0 1-16.309-3.192l.023-.028a21.52 21.52 0 0 1-2.629 1.539s-6.326 6.304-.023 12.179c0 0 1.273.813 2.648 2.129-.018-.016-.031-.032-.049-.049.001-.001 6.062 1.715 20.413 3.975z"
                  style={{fill: '#ccc'}}
                />
                <path d="M140.365 316.065z" style={{fill: '#a3a3a3'}} />
                <path d="M140.365 316.065z" style={{fill: '#ccc'}} />
                <path
                  d="M199.398 365.865c-7.654-2.796-14.965-7.052-20.467-12.963-14.928-2.676-29.785-6.376-41.764-11.495 0 0-.885-.566-1.685-1.592.223.38.476.757.787 1.128 0 0 13.963 6.34-.027 13.978 0 0-4.119 3.598 2.883 9.928l34.939 19.003-33.27-18.095 58.604.108z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M199.398 365.865c-7.654-2.796-14.965-7.052-20.467-12.963-14.928-2.676-29.785-6.376-41.764-11.495 0 0-.885-.566-1.685-1.592.223.38.476.757.787 1.128 0 0 13.963 6.34-.027 13.978 0 0-4.119 3.598 2.883 9.928l34.939 19.003-33.27-18.095 58.604.108z"
                  style={{fill: '#ccc'}}
                />
                <path
                  d="M143.844 291.451a.187.187 0 0 1 .008.034.19.19 0 0 1 .01-.034h-.018z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M143.844 291.451a.187.187 0 0 1 .008.034.19.19 0 0 1 .01-.034h-.018z"
                  style={{fill: '#ccc'}}
                />
                <path
                  d="M155.725 294.924c-6.85-.845-11.201-1.929-11.805-3.122.219 1.057.213 2.159-.149 3.272.012.002 4.563.75 11.953 1.768a53.32 53.32 0 0 1 .001-1.918z"
                  style={{fill: '#a3a3a3'}}
                />
                <path
                  d="M155.725 294.924c-6.85-.845-11.201-1.929-11.805-3.122.219 1.057.213 2.159-.149 3.272.012.002 4.563.75 11.953 1.768a53.32 53.32 0 0 1 .001-1.918z"
                  style={{fill: '#ccc'}}
                />
                <path
                  d="M156.156 302.942a409.808 409.808 0 0 0 24.748 3.516c39.465 4.398 68.064 1.95 69.143 1.854l.033-.002a5.082 5.082 0 0 0-.096-1.46c-.518-2.642-2.717-5.38-2.717-5.38-19.455 2.203-45.91.505-67.207-1.692-9.5-.98-17.973-2.059-24.336-2.937-7.391-1.018-11.941-1.766-11.953-1.768h-.002l-3.898 4.649-.023.028a384.317 384.317 0 0 0 16.308 3.192zM186.139 322.915c-10.617-1.18-19.176-2.359-25.908-3.42-14.351-2.26-20.412-3.976-20.412-3.976.018.017.031.033.049.049.178.167.338.331.498.496.418.432.775.853 1.084 1.262.051.07.109.142.158.209.043.06.082.117.121.175 1.178 1.714 1.451 3.156 1.48 4.018.02.551-.059.866-.059.866 5.752 1.67 12.594 3.087 19.988 4.293 8.67 1.411 18.1 2.528 27.445 3.413 29.922 2.833 58.924 3.272 58.924 3.272v-.014c0-1.696-.896-3.051-1.902-4.036a9.763 9.763 0 0 0-1.115-.937 10.235 10.235 0 0 0-1.582-.959l-.018-.008c-24.23-1.33-43.589-3.016-58.751-4.703z"
                  style={{fill: '#fff'}}
                />
                <path
                  d="m140.795 365.756 33.269 18.095 7.327.014 24.013.044 4.733.01 33.34-17.972-44.079-.082z"
                  style={{fill: '#b3b3b3'}}
                />
                <path
                  d="M215.717 350.918c-16.154-1.632-31.111-4.212-43.666-6.854-22.559-4.748-37.361-9.697-37.406-9.712h-.002c-.938 2.372-.109 4.244.84 5.463a7.649 7.649 0 0 0 1.685 1.592c11.979 5.119 26.836 8.819 41.764 11.495 34.83 6.244 70.049 6.898 70.049 6.898l.002-.001c.404-.804.395-1.633.221-2.367-.008-.03-.012-.063-.02-.094-.324-1.255-1.117-2.205-1.117-2.205a25.583 25.583 0 0 1-3.406-2.282c-.178-.145-.275-.229-.275-.229-9.798-.147-19.429-.771-28.669-1.704z"
                  style={{fill: '#fff'}}
                />
                <path
                  d="m181.391 383.865-7.326-.014c-2.822 1.686 1.453 5.188 1.453 5.188l9.68 9.374c6.865 5.313 13.754.028 13.754.028l11.18-11.25c1.918-1.802.006-3.271.006-3.271l-4.732-.011-24.015-.044z"
                  style={{fill: '#121212'}}
                />
                <path
                  d="M236.381 84.881h-89.168a7.558 7.558 0 0 0-7.559 7.558l14.359 69.423a7.555 7.555 0 0 0 7.555 7.556h61.211a7.558 7.558 0 0 0 7.559-7.556l13.598-69.423a7.558 7.558 0 0 0-7.555-7.558zm-44.586 58.893c-9.182 0-16.625-7.443-16.625-16.624 0-9.184 7.443-16.624 16.625-16.624s16.627 7.441 16.627 16.624c0 9.181-7.445 16.624-16.627 16.624z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M203.74 127.15c0 6.595-5.35 11.944-11.945 11.944-6.598 0-11.943-5.349-11.943-11.944 0-6.599 5.346-11.945 11.943-11.945 6.596.001 11.945 5.347 11.945 11.945zM225.803 174.052a3.023 3.023 0 0 1-3.023 3.021h-62.344a3.022 3.022 0 0 1-3.023-3.021 3.024 3.024 0 0 1 3.023-3.024h62.344a3.025 3.025 0 0 1 3.023 3.024zM222.211 181.986a3.023 3.023 0 0 1-3.021 3.023h-55.166a3.023 3.023 0 0 1 0-6.046h55.166a3.023 3.023 0 0 1 3.021 3.023zM203.74 195.27h-23.888l-5.436-7.745h34.383z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M196.613 292.78V192.626H186.6v100.74c3.347.213 6.966.698 10.013-.586zM175.928 82.867V31.229a6.813 6.813 0 1 0-13.624 0v51.638h13.624zM221.289 82.867V31.229c0-3.761-3.051-6.813-6.813-6.813s-6.813 3.052-6.813 6.813v51.638h13.626z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M273.357 260.065c-28.561 28.56-76.719 26.712-76.719 26.712s-1.85-48.158 26.711-76.721c28.563-28.561 76.723-26.711 76.723-26.711s1.848 48.158-26.715 76.72z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M273.357 260.065c-28.561 28.56-76.719 26.712-76.719 26.712s-1.85-48.158 26.711-76.721c28.563-28.561 76.723-26.711 76.723-26.711s1.848 48.158-26.715 76.72z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M287.248 193.379c-17.627 8.387-31.262 20.85-42.185 37-6.166 9.112-12.166 26.225-4.477 36.275 7.769 10.157 25.592-5.092 31.207-10.704 22.545-22.545 24.199-58.537 24.248-67.5-.004.638-4.631 2.95-8.793 4.929z"
                  style={{fill: '#fff'}}
                />
                <path
                  d="M222.166 284.286c-8.127-9.724-12.037-23.916-7.248-36.212 7.479-19.194 22.031-32.734 38.666-44.29 13.815-9.597 29.781-17.3 46.492-20.231l-.004-.207s-48.16-1.85-76.723 26.711c-28.561 28.563-26.711 76.721-26.711 76.721s11.061.416 25.715-2.282c-.062-.072-.124-.139-.187-.21z"
                  style={{fill: '#dadada'}}
                />
                <path
                  d="M106.623 229.253c29.766 29.764 79.951 27.838 79.951 27.838s1.928-50.188-27.836-79.952c-29.766-29.765-79.953-27.836-79.953-27.836s-1.926 50.185 27.838 79.95z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M106.623 229.253c29.766 29.764 79.951 27.838 79.951 27.838s1.928-50.188-27.836-79.952c-29.766-29.765-79.953-27.836-79.953-27.836s-1.926 50.185 27.838 79.95z"
                  style={{fill: '#87af1d'}}
                />
                <path
                  d="M92.148 159.757c18.371 8.742 32.578 21.73 43.963 38.56 6.426 9.497 12.678 27.329 4.666 37.804-8.098 10.584-26.672-5.306-32.521-11.156-23.496-23.494-25.219-61.002-25.271-70.344.005.666 4.828 3.075 9.163 5.136z"
                  style={{fill: '#fff'}}
                />
                <path
                  d="M159.971 254.493c8.471-10.133 12.545-24.923 7.555-37.736-7.793-20.003-22.959-34.112-40.295-46.156-14.395-10-31.035-18.029-48.451-21.083l.006-.216s50.187-1.929 79.953 27.836c29.764 29.764 27.836 79.952 27.836 79.952s-11.527.433-26.797-2.379c.064-.074.13-.142.193-.218z"
                  style={{fill: '#dadada'}}
                />
              </svg>
            </section>
          </section>

          {/* Ejes temáticos */}
          <Separator id="ejes-tematicos" />
          <section className="flex flex-col items-center gap-5 p-5 lg:flex-row md:pl-12 lg:pl-24 lg:container">
            <section className="flex flex-col lg:w-1/2">
              <Title>Ejes temáticos</Title>
              <Text>Los temas que se tratarán en el foro son los siguientes:</Text>
              <ul className="font-semibold list-disc pl-7">
                <li>
                  <Text>Petróleo y otras fuentes primarias de energía</Text>
                  <span className="font-normal text-xs lg:text-sm">
                   Enlace habilitado del 20 de mayo al 20 de junio del 2024 
                  </span>
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

          {/* Oportunidades de publicación */}
          <Separator id="oportunidades" />
          <section className="container flex flex-col items-center gap-5 p-4">
            <Title>Oportunidades de publicación</Title>
            <div className='max-w-3xl mx-auto'>
              <Text>Los autores de los pósters y/o artículos aceptados realizarán una
              ponencia en el foro y recibirán una invitación para publicar su
              investigación en un número especial del evento en las revistas
              indexadas bajo revisión de pares académicos, ENERLAC y FIGEMPA:
              Investigación y Desarrollo.</Text>
            </div>
            <Participants data={oportunidadesPublicacion} />
          </section>

          {/* Organizadores */}
          <Separator id="organizadores" />
          <Participants data={organizers} title="Organizadores" />

          {/* Participantes */}
          <Separator id="participantes" />
          <Participants data={sponsors} title="Participantes" />

          {/* Auspiciantes */}
          <Separator id="auspiciantes" />
          <Participants data={auspiciantes} title="Auspiciantes" />

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

          {/* Perfil de Auspiciantes */}
          <Separator id="perfil-auspiciantes" />
          <section className="flex flex-col items-center gap-5 lg:flex-row lg:container">
            <section className="flex flex-col px-5 md:pl-24 lg:w-1/2">
              <Title>Perfil de Auspiciantes</Title>
              <Text>
                  El evento esta dirigido a varios actores de la gobernanza como:
                  instituciones gubernamentales, sector empresarial, academia y
                  otros grupos de la sociedad civil para su discusión de temas
                  relevantes en los diferentes niveles del ciclo de las políticas
                  energéticas.
              </Text>
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
