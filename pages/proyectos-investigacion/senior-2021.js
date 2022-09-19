import { Return } from '@components/Return'
import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Senior2021 () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Senior 2021 | Proyectos IIH</title>
        <meta name="description" content="Proyecto de Senior 2021 IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Senior 2021'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <Text>
            El IIH está desarrollando el proyecto “Estudio de la política tarifaria de electricidad para la categoría residencial del Ecuador a partir de las tipologías de hogares y la inclusión de variables geográficas, económicas y técnicas”. Este proyecto fue ganador del concurso senior 2021 con un financiamiento US$ 24550 dólares <strong>(código: DI-CONV-2021-05)</strong>.
          </Text>
          <Text>
            El Objetivo es entender la dinámica de los patrones de consumo de electricidad de los 4,5 millones de hogares del Ecuador a partir de tipologías de hogares, basados en la aplicación de metodologías de complejidad-sistemas jerárquicos con la definición de variables demográficas, biofísicas, geográficas y socioeconómicas, para finalmente discutir la política tarifaria en los diferentes niveles y escalas del sistema residencial del Ecuador.
          </Text>
          <Text>
            <Return text="Regresar" url="/proyectos-investigacion" />
          </Text>
        </article>
      </main>
    </div>
  )
}
