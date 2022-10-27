import { Content } from '@components/Content'
import { FormContact } from '@components/FormContact'
import { PageMap } from '@components/PageMap'

const pageData = {
  title: 'Contacto',
  description: 'Contacto IIH',
  image: '/prueba.png',
  content: {
    title: 'Contáctenos',
    intro: 'Sus mensajes son muy importantes para nosotros. Envíe su mensaje y nos pondremos en contacto con usted.',
  },
  contacts: [
    {
      name: 'Ing. Ronny Parra, PhD',
      role: 'Director del instituto',
      email: 'rmparra@uce.edu.ec',
    },
    {
      name: 'Ing. Génesis Yánez',
      role: 'Técnica de investigación',
      email: 'gbyanez@uce.edu.ec',
    },
    {
      name: 'Instituto de Investigaciones Hidrocarburíferas',
      role: null,
      email: 'iih@uce.edu.ec',
    }
  ]
}

export default function Contacto () {
  const contacts = pageData.contacts.map(({ name, role, email }) => (
    <div key={name}>
      <p className='flex items-end h-10 mx-2 text-xl font-bold border-b'>{name}</p>
      <p className='mx-2 mt-1'>{role}</p>
      <a
        className='mx-2 mt-1 italic text-blue-500 transition-colors hover:text-blue-700 active:text-blue-900'
        href={`mailto:${email}?subject=Envío%20desde%20la%20página%20web`}
      >{email}</a>
    </div>
  ))

  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main
        className='container flex flex-col gap-10 p-10 mx-auto lg:flex-row dark:text-gray-100'>
        <section className='w-full h-auto'>
          <h2 className='mb-4 text-3xl font-bold border-b-2'>{pageData.content.title}</h2>
          <p className='text-justify'>{pageData.content.intro}</p>

          <FormContact />
        </section>
        <section className='flex flex-col items-center w-full'>
        <div className='flex flex-wrap items-center justify-center w-full my-3 text-sm gap-x-16'>
            {contacts}
          </div>
          <PageMap />
        </section>
      </main>
    </Content>

  )
}
