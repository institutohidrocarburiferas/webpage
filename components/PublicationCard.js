import Image from 'next/image'
import Link from 'next/link'

export function PublicationCard ({ title, image, url }) {
  return <Link href={url} >
  <a className='flex items-center w-11/12 h-32 gap-5 px-5 mx-auto bg-gray-100 rounded-lg cursor-pointer md:hover:bg-gray-300 md:hover:scale-105'>
      <div
      className='grid w-20 h-20 place-content-center'>
        <Image
          className='object-cover object-left-top bg-gray-500 rounded-lg'
          width={80}
          height={80}
          src={image}
          alt={title}
        />
      </div>
      <span className='w-3/4 font-semibold'>
        {title}
      </span>
  </a>
  </Link>
}
