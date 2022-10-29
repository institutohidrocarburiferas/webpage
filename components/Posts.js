import Image from 'next/image'
import Link from 'next/link'
// import Date from '@components/Date'

function Card ({ title, image, url, date }) {
  return <Link href={url} >
    <a className='flex items-center w-full h-auto justify-around gap-5 py-5 md:p-5 mx-auto border-b-2 cursor-pointer md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-white group'>
      <div
        className='grid w-24 h-24 place-content-center group:hover:scale-105 rounded'>
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
        />
      </div>
      <div className='w-3/4'>
        <h3 className='text-lg md:text-2xl font-semibold'>
          {title}
        </h3>
        {/* <Date dateString={date} /> */}
      </div>
    </a>
  </Link>
}

export function Posts ({ items, title, urlPath }) {
  const posts = items.map(({ id, date, title, image, icon }) => (
    <Card
      key={title}
      title={title}
      image={icon}
      // date={date}
      url={`${urlPath}/${id}`}
    />
  ))

  return <section className='flex flex-col w-full max-w-4xl pb-10 '>
    {/* <h2 className='text-3xl font-bold border-b-2'>
      {title}
    </h2> */}
    <div className='flex flex-col'>
      {posts}
    </div>
  </section>
}
