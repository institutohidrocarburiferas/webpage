import Image from 'next/image'

export function MemberCard ({ name, image, role, openModal }) {
  return (
    <section
      onClick={openModal}
      className="w-64 h-76 bg-gray-200 rounded-md cursor-pointer border md:hover:scale-105 flex flex-col">

      <Image
        className='object-cover object-top rounded-t-md'
        src={image}
        width={350}
        height={350}
        alt={name}
      />
      <section className='grid w-full h-20 font-semibold text-center text-white bg-black/70 rounded-b-md place-content-center'>
        <span className='text-lg'>{name}</span>
        <span className='text-md text-gray-200'>{role}</span>
      </section>
    </section>
  )
}
