import Image from 'next/image'

export function Participants ({ title, image, url }) {
  if (url) {
    return <a href={url} target="_blank" className='grid w-40 h-40 bg-white hover:scale-105 p-3 place-content-center' rel="noreferrer">
    <Image
      width={160}
      height={160}

      className='object-contain aspect-auto'
      src={image}
      alt={title}
    />
  </a>
  }

  return <div className='grid w-40 h-40 bg-white hover:scale-105 p-3 place-content-center' rel="noreferrer">
    <Image
      width={160}
      height={160}
      className='object-contain aspect-auto'
      src={image}
      alt={title}
    />
  </div>
}
