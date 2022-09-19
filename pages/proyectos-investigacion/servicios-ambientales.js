import { Return } from '@components/Return'
import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function PerspectivasSectorEnergetico () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Servicios Ambientales | Proyectos IIH</title>
        <meta name="description" content="Proyecto sobre Servicios Ambientales  IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Servicios Ambientales'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <Text>
          El proyecto propone analizar la capacidad de captura de CO<sub>2</sub> del Bosque Protector Oglán Alto-Arajuno como una alternativa de conservación a la presión ecosistémica de la extracción petrolera del campo Oglán-Bloque 10, bajo una metodológica que conecta la demanda de flujo de un proceso o sistema producto de la tecnosfera (extracción petrolera) y la viabilidad del ecosistema para abastecerlo en base a la capacidad de sumidero (Captura de Carbono).
          </Text>
          <Text>
          Está basada en principios teóricos de sostenibilidad y en el entendimiento de las limitaciones biofísicas del entorno, además de los insumos desarrollados bajo en <rem>Multi-Scale Integrated Analysis of Societal and Ecosystem Metabolism MuSIASEM</rem>. La realización del proyecto de investigación permitirá conocer el potencial de sumidero para captura de CO<sub>2</sub> del bosque protector Oglán Alto, además permitirá conocer la demanda y presión biofísica de la extracción petrolera en eventuales escenarios de incremento de la frontera petrolera del Campo Oglán.
          </Text>
          <Text>
            <Return text="Regresar" url="/proyectos-investigacion" />
          </Text>
        </article>
      </main>
    </div>
  )
}
