import { Return } from '@components/Return'
import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function SistemaMonitoreoBioindicadoresANZU () {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Sistema de Monitoreo de Bioindicadores ANZU | Proyectos IIH</title>
        <meta name="description" content="Sistema de Monitoreo de Bioindicadores ANZU IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Sistema de Monitoreo del Bioindicadores ANZU'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <Text>
            El “Sistema de Monitoreo de Bioindicadores ANZU” es un sistema de monitoreo basado en la ciencia los datos que utiliza las técnicas de teledetección, información de drones y parámetros químicos -biológicos que permite identificar cambios en los ecosistemas y utilizar bioindicadores específicos para monitorear el impacto ecosistémico en la realidad de la Amazonía ecuatoriana.
          </Text>
          <Text>
            Este sistema es el primer sistema programado en código abierto para la Amazonia del Ecuador, de tal forma que facilitará el acceso a datos relevante para las instituciones gubernamentales y organizaciones de la sociedad civil, propiciando información para la planificación territorial, fortalecimiento del control minero e involucramiento de las comunicades al cuidado de sus ecosistemas. Finalmente ayudará a la toma de decisiones informadas para contribuir a cumplimiento de los objetivos de desarrollo sostenible a nivel local y regional
          </Text>
          <Text>
            El sistema de monitoreo de bioindicadores ANZU se ciñe a los Objetivos de Desarrollo Sostenible 2030: <strong>6 Agua limpia y saneamiento, 13 Acción por el clima y 15 Vida de ecosistemas terrestres</strong>; ya que, busca poder contar con información oportuna que genere alertas tempranas mediante detección de cambios de cobertura vegetal y calidad del agua de los ríos para prevenir el deterioro de los ecosistemas, reducir la contaminación, fortalecer la participación de comunidades locales y aumentar la capacidad de regularización de actividades antrópicas en ecosistemas sensibles por parte de los gobiernos sectoriales. Adicionalmente, el sistema está alineado al <strong>Plan de Creación de Oportunidades 2021-2025</strong>, a su eje Social porque pretende contribuir a la generación de nuevas oportunidades y bienestar para las comunidades indígenas; a su eje Transición Ecológica por su propósito de proteger y conservar los ecosistemas de la Amazonía.
          </Text>
          <Text>
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/GytVjEd_V3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Text>
          <Text>
            <Return text="Regresar" url="/proyectos-investigacion" />
          </Text>
        </article>
      </main>
    </div>
  )
}
