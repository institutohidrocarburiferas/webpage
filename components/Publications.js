import { PublicationCard } from '@components/PublicationCard'

export function Publications ({ items }) {
  return <section className='flex flex-col w-full max-w-2xl py-10 '>
  <h2 className='px-4 mx-5 mb-4 text-3xl font-bold border-b-2'>
    Últimas publicaciones
  </h2>
  <div className='flex flex-col gap-2'>
    {
      items.map(({ title, image, url }) => (
        <PublicationCard
          key={title}
          title={title}
          image={image}
          url={url}
          />
      ))
    }

  </div>
</section>
}
