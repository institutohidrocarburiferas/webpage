import Image from 'next/image'

export function MemberCard ({ name, image, openModal }) {
  return (
    <section
      onClick={openModal}
      className="relative w-64 h-64 bg-gray-200 rounded-md cursor-pointer md:hover:scale-105">

      <Image
        className='object-cover object-top rounded-md'
        src={image}
        width={350}
        height={350}
        alt={name}
      />

      <h3 className='absolute bottom-0 grid w-full h-16 text-lg font-bold text-white bg-black/50 rounded-b-md place-content-center'>
        {name}
      </h3>
    </section>
  )
}
