export function ExternalLink ({ title, image, url }) {
  return <a href={url} className='grid w-64 h-64 p-5 bg-white border-2 rounded-lg hover:scale-105 place-content-center'>
    <img
      className='object-cover aspect-auto'
      src={image}
      alt={title}
    />
  </a>
}
