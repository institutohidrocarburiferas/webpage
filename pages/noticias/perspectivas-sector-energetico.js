import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function PerspectivasSectorEnergetico () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Perspectivas del Sector Energético del Ecuador  | Noticias IIH</title>
        <meta name="description" content="Resumen IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Perspectivas del Sector Energético del Ecuador '} image={'/noticias/perspectivas-sector-energetico.jpeg'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <Text>
            El IIH desarrolló un estudio retrospectivo sobre la dinámica de renta petrolera obtenida por el Estado ecuatoriano en los contratos petroleros (upstream) bajo la modalidad de prestación de servicios, implementados a partir de la reforma a la ley de Hidrocarburos,2010.
          </Text>
          <Text>
            Parte de los resultados de esta investigación fueron presentados en el foro sobre “Perspectivas del Sector Energético del Ecuador”, desarrollado el 11 de agosto de 2022 en donde estuvieron representantes de las instituciones públicas, privadas, gremios y académicos referente al sector hidrocarburífero del Ecuador.
          </Text>
        </article>
      </main>
    </div>
  )
}
