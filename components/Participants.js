import {Title} from './UI/Title'

function Participant ({title, image, url}) {
  return <a className='grid rounded dark:bg-white hover:scale-105 place-content-center' href={url} rel="noreferrer" target="_blank">
    <picture>
      <img
        alt={'Logo de ' + title}
        className='h-20 rounded md:h-28 aspect-auto'
        loading="lazy"
        src={image}
        title={title}
      />
    </picture>
  </a>
}

export function Participants ({title, data}) {
  const participants = data.map(({title, image, url}) => (
    <Participant key={url} image={image} title={title} url={url} />
  ))

  return (
    <section
      className="container flex flex-col flex-wrap items-center justify-center gap-3 p-5 md:pl-12"
    >
      <Title>{title}</Title>
      <section className='flex flex-wrap items-center justify-center gap-5 md:gap-10'>
        {participants}
      </section>
    </section>

  )
}
