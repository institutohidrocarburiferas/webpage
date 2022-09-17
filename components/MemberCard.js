import Image from 'next/image'

export function MemberCard ({ name, image, openModal }) {
  return <section
    onClick={openModal}

    className="relative w-64 h-64 bg-gray-200 rounded-md cursor-pointer md:hover:scale-105">

    <Image
      className='object-cover rounded-md'
      src={image}
      width={320}
      height={320}
      alt={name}
    />

    <h3 style={{
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}

      className='absolute bottom-0 grid w-full h-16 text-lg font-bold text-white rounded-b-md place-content-center'>{name}</h3>

  </section>
}
