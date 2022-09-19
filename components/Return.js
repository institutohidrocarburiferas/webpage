import Link from 'next/link'

export function Return ({ text, url }) {
  return <Link
    href={url}
  >
    <a className='block w-full text-blue-500 border-t-2 hover:text-blue-700'>{text}</a>
  </Link>
}
