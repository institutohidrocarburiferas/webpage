import { FormContact } from '@components/FormContact'
import { TitlePage } from '@components/TitlePage'
import Head from 'next/head'

export default function Contacto () {
  return (
    <div className="overflow-hidden ">
      <Head>
        <title>Contacto | IIH</title>
        <meta name="description" content="Contacto IIH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitlePage title={'Contacto'} image={'/prueba.png'} />

      <main
        className='container flex flex-col gap-10 p-10 mx-auto lg:flex-row dark:text-gray-100'>
        <section className='w-full h-auto'>
          <h2 className='mb-4 text-3xl font-bold border-b-2 '>Contáctanos</h2>
          <p className='text-justify'>Sus mensajes son muy importantes para nosotros. Envíe su mensaje y nos pondremos en contacto con usted.</p>

          <FormContact />
        </section>
        <section className='flex items-center w-full'>
          <iframe className='w-full my-5 border-none h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.523216604791!2d-78.50632653609885!3d-0.1979361398090739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bce634c7bd1%3A0x5524fd4fb24b9237!2sInstituto%20de%20Investigaciones%20Hidrocarbur%C3%ADferas!5e0!3m2!1ses!2sec!4v1663768367878!5m2!1ses!2sec" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </main>
    </div>
  )
}
