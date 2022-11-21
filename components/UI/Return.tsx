import Link from 'next/link'

interface Props {
  text: string
  url: string
}

export const Return: React.FC<Props> = ({text, url}) => {
  return <Link
    href={url}
  >
    <a className='block w-full text-blue-500 border-t-2 hover:text-blue-700'>{text}</a>
  </Link>
}
