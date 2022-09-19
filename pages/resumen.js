import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Resumen () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Resumen | IIH</title>
        <meta name="description" content="Resumen IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Resumen'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Misión</h2>
          <Text>El Instituto de Investigaciones Hidrocarburíferas de la Universidad Central del Ecuador, es un centro multidisciplinario para la generación de conocimiento, investigación y transferencia de tecnología contribuyendo al desarrollo sostenible de los sectores de geociencias, hidrocarburos y energía a nivel nacional e Internacional.
          </Text>

          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Visión</h2>
          <Text>Al 2024, ser la Institución de referencia nacional en la generación de conocimiento e investigación en los sectores de geociencias, hidrocarburos y energía, contribuyendo al debate de las políticas públicas y en la prestación de servicios.
          </Text>
        </article>

      </main>

    </div>
  )
}
