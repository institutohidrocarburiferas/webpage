import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
// import Date from '@components/Date'

function Card ({title, image, url, date}) {
  const {asPath} = useRouter()

  return <Link asPath={asPath} href={url} >
    <a className='flex flex-col items-center w-full h-auto gap-5 py-5 mx-auto border-b-2 cursor-pointer sm:flex-row md:justify-around md:p-5 md:hover:bg-gradient-to-tl md:hover:to-blue-100 md:hover:from-transparent md:hover:text-black'>
      <picture
        className='grid w-24 h-24 p-3 text-white rounded dark:bg-gray-100 place-content-center'>
        <Image
          alt={title}
          height={200}
          src={image}
          width={200}
        />
      </picture>
      <div className='w-full text-justify md:w-3/4'>
        <h3 className='text-lg font-semibold sm:text-xl md:text-2xl'>
          {title}
        </h3>
        {/* <Date dateString={date} /> */}
      </div>
    </a>
  </Link>
}

export function Posts ({items, title, urlPath}) {
  const posts = items.map(({id, date, title, image, icon}) => (
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
