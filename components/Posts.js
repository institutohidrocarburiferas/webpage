import Image from 'next/image'
import Link from 'next/link'
import Date from '@components/Date'

function Card ({ title, image, url, date }) {
  return <Link href={url} >
    <a className='flex items-center w-11/12 h-32 gap-5 px-5 mx-auto bg-gray-100 rounded-lg cursor-pointer md:hover:bg-gray-300 md:hover:scale-105'>
      <div
        className='grid w-20 h-20 place-content-center'>
        <Image
          className='object-cover object-center-top bg-gray-500 rounded-lg'
          width={180}
          height={180}
          src={image}
          alt={title}
        />
      </div>
      <div className='w-3/4 '>
        <div className='font-semibold'>
          {title}
        </div>
        <Date dateString={date} />
      </div>
    </a>
  </Link>
}

export function Posts ({ items, title }) {
  const posts = items.map(({ id, date, title, image }) => (
    <Card
      key={title}
      title={title}
      image={image}
      date={date}
      url={`/noticias/${id}`}
    />
  ))

  return <section className='flex flex-col w-full max-w-2xl pb-10 '>
    <h2 className='px-4 mx-5 mb-4 text-3xl font-bold border-b-2'>
      {title}
    </h2>
    <div className='flex flex-col gap-2'>
      {posts}
    </div>
  </section>
}
