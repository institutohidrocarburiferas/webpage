import { Return } from '@components/Return'
import { Text } from '@components/Text'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'
import Image from 'next/image'

export default function ContratosPetroleros () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Contratos petroleros | Proyectos IIH</title>
        <meta name="description" content="Proyecto acerca Contratos Petroleros IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Contratos petroleros'} image={'/prueba.png'} />

      <main className='w-screen dark:text-gray-100'>
        <article className="max-w-sm mx-auto my-10 sm:max-w-lg md:max-w-2xl" >
          <Text>
          El IIH está desarrollando un estudio retrospectivo sobre la dinámica de renta petrolera obtenida por el Estado ecuatoriano en los contratos petroleros (upstream) bajo la modalidad de prestación de servicios, implementados a partir de la reforma a la ley de Hidrocarburos,2010.
          </Text>
          <Text>
          El objetivo del IIH con este proyecto es transparentar la metodología para mirar cifras sobre el aporte (renta) de la extracción petrolera al Estado bajo el modelo de prestación de servicios en los diferentes campos petroleros del Ecuador que se lo realiza por empresas privadas. Entre los resultados preliminares se muestran que La renta obtenida por el Estado entre 2010-2021 fue de aproximadamente US$ 15,2 mil millones correspondiente al 80% del total de la renta en la extracción petrolera en 14 bloques/campos bajo la modalidad de prestación de servicios.
          </Text>
          <Text>
            <Image
              width={752}
              height={456}
              src="/proyectos-investigacion/contratos-petroleros.png"
              alt="Modelo económico por campo/contrato (prestación de servicios)"
            />
          </Text>
          <Text>
            <Return text="Regresar" url="/proyectos-investigacion" />
          </Text>
        </article>
      </main>
    </div>
  )
}
