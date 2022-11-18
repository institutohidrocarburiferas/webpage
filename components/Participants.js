import Title from './Title'

function Participant ({title, image, url}) {
  return <a className='grid bg-white rounded hover:scale-105 place-content-center' href={url} rel="noreferrer" target="_blank">
    <picture>
      <img
        alt={title}
        className='h-20 rounded md:h-28 aspect-auto'
        loading="lazy"
        src={image}
      />
    </picture>
  </a>
}

export function Participants ({title, data}) {
  const participants = data.map(({label, image, url}) => (
    <Participant key={label} image={image} title={label} url={url} />
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
