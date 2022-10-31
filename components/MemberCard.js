import Image from 'next/image'

export function MemberCard ({ name, image, role, openModal }) {
  return (
    <section
      onClick={openModal}
      className="flex flex-col bg-gray-200 border rounded-md cursor-pointer w-60 h-76 md:hover:scale-105">

      <Image
        className='object-cover object-top rounded-t-md'
        src={image}
        width={350}
        height={350}
        alt={name}
      />
      <section className='grid w-full h-16 font-semibold text-center text-white bg-black/70 rounded-b-md place-content-center'>
        <span className='text-md'>{name}</span>
        <span className='text-sm text-gray-200'>{role}</span>
      </section>
    </section>
  )
}
