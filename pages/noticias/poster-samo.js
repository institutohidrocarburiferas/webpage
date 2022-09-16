import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function PosterSamo () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Poster Samo | Noticias IIH</title>
        <meta name="description" content="Resumen IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Poster SAMO'} image={'/noticias/poster-samo.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >

          <p className='mb-4 leading-loose tracking-wide md:text-lg'>El El IIH participó con la presentación de un <strong>POSTER</strong> en el <strong><em>10th International Conference on Sensitivity Analysis of Model Output</em></strong> desarrollado desde 14th - 16th de marzo de 2022 en Tallahassee/Florida (Florida State University).
          </p>

          <p className='mb-4 leading-loose tracking-wide md:text-lg'>
          La conferencia de SAMO está dedicada a los avances en la investigación de los métodos de análisis de sensibilidad y sus aplicaciones interdisciplinarias. SAMO se llevan a cabo cada tres años. El objetivo es reunir a los usuarios del análisis de sensibilidad en todas las disciplinas de la ciencia. Los métodos de análisis de sensibilidad son herramientas poderosas en física, investigación de operaciones, química, biología, ingeniería, ciencias ambientales, seguridad nuclear e industrial, economía y finanzas.
          </p>

          <p className='mb-4 leading-loose tracking-wide md:text-lg'>

          El documento fue <strong>PUBLICADO</strong> en el libro de actas del congreso internacional.
          </p>

          <p className='mb-4 leading-loose tracking-wide md:text-lg'>
          Disponible en:
          <a className="mb-4 text-blue-700 hover:text-blue-800 active:text-blue-900" href="https://samo2022.math.fsu.edu/">https://samo2022.math.fsu.edu/</a>

          </p>

        </article>

      </main>

    </div>
  )
}
