function Participant ({ title, image, url }) {
  console.log(url)
  return <a href={url} target="_blank" className='grid bg-white hover:scale-105 rounded place-content-center' rel="noreferrer">
    <picture>
      <img
        className='max-w-xs rounded h-20 md:h-28 aspect-auto'
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
      className="flex flex-wrap flex-col items-center justify-center gap-5 p-5 container md:pl-12"
    >
      <h2
        className='w-full text-4xl font-bold text-center'
      >{title}</h2>
      <section className='flex flex-wrap items-center justify-center gap-10'>
        {participants}
      </section>
    </section>

  )
}
