import Link from 'next/link'

export function NoticeCard ({ title, image, url }) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return <Link href={url} >
    <a
    style={bgStyle}
    className='relative md:hover:scale-105 rounded-xl w-80 h-96'
    >
      <div
        style = {{
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
        className='absolute bottom-0 grid items-center w-full p-5 text-xl font-bold text-white h-28 rounded-b-xl'
      >{title}</div>

    </a>
  </Link>
}
