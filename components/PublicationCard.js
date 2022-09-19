import Link from 'next/link'

export function PublicationCard ({ title, image, url }) {
  return <Link href={url} >
  <a className='grid w-11/12 h-20 px-5 mx-auto bg-gray-100 rounded-lg cursor-pointer md:hover:bg-gray-300 md:hover:scale-105 place-content-center'>
      <span className='font-bold'>{title}</span>
      </a>
  </Link>
}
