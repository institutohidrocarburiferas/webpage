import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function LineasInvestigacion () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Resumen | IIH</title>
        <meta name="description" content="Resumen IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Líneas de investigación'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Hidrocarburos</h2>
          <ul className='pl-5 leading-loose tracking-wide list-disc md:text-lg style'>
            <li className="my-2.5">Desarrollo biotecnológico aplicado a la industria </li>
            <li className="my-2.5">Simulación y modelamiento matemático </li>
            <li className="my-2.5">Uso de tecnologías de la información y comunicación </li>
            <li className="my-2.5">Producción de petróleo pesado </li>
          </ul>

          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Sostenibilidad</h2>
          <ul className='pl-5 leading-loose tracking-wide list-disc md:text-lg'>
            <li className="my-2.5">Gestión sostenible de recursos naturales </li>
            <li className="my-2.5">Economía y sociedad </li>
            <li className="my-2.5">Complejidad-energía-sostenibilidad  </li>
          </ul>

          <h2 className='mt-10 mb-4 text-3xl font-bold border-b-2'>Energía</h2>
          <ul className='pl-5 leading-loose tracking-wide list-disc md:text-lg'>
            <li className="my-2.5">Energía, ambiente y cambio climático </li>
            <li className="my-2.5">Relaciones economía, ambiente y sociedad </li>
            <li className="my-2.5">Transición energética </li>
          </ul>

        </article>

      </main>

    </div>
  )
}
