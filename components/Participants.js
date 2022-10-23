function Participant ({ title, image, url }) {
  return <a href={url} target="_blank" className='grid bg-white hover:scale-105 p-4 place-content-center' rel="noreferrer">
    <picture>
      <img
        className='h-36 max-w-xs aspect-auto'
        src={image}
        alt={title}
        loading="lazy"
      />
    </picture>
  </a>
}

export function Participants ({ title, data }) {
  const participants = data.map(({ label, image }) => (
    <Participant key={label} title={label} image={image} />
  ))
  return (
    <section
    className="flex flex-col lg:container justify-center p-5 md:pl-12 gap-5 items-center"
    >
    <h2
      className='text-4xl w-full text-center font-bold'
    >{title}</h2>
    <section className='flex flex-wrap justify-center gap-5'>
      {participants}
    </section>
    </section>

  )
}
