function Participant ({ title, image, url }) {
  console.log(url)
  return <a href={url} target="_blank" className='grid p-4 bg-white hover:scale-105 place-content-center' rel="noreferrer">
    <picture>
      <img
        className='max-w-xs h-28 aspect-auto'
        src={image}
        alt={title}
        loading="lazy"
      />
    </picture>
  </a>
}

export function Participants ({ title, data }) {
  const participants = data.map(({ label, image, url }) => (
    <Participant key={label} title={label} image={image} url={url} />
  ))
  return (
    <section
    className="flex flex-col items-center justify-center gap-5 p-5 lg:container md:pl-12"
    >
    <h2
      className='w-full text-4xl font-bold text-center'
    >{title}</h2>
    <section className='flex flex-wrap items-center justify-center gap-5'>
      {participants}
    </section>
    </section>

  )
}
