import Image from 'next/image'

export function MemberCard ({ name, image, role, openModal }) {
  return (
    <section
      onClick={openModal}
      className="flex flex-col bg-gray-200 border rounded-md cursor-pointer w-2/5 md:w-56 lg:w-64 md:hover:scale-105">
      <Image
        className='object-cover object-top rounded-t-md'
        src={image}
        width={350}
        height={350}
        alt={name}
      />
      <section className='grid px-2 lg:px-0 w-full h-16 md:h-20 font-semibold gap-1 text-center bg-black/70 rounded-b-md place-content-center'>
        <span className='text-xs md:text-[1.1rem] text-white'>{name}</span>
        <span className='text-[0.6rem] md:text-sm text-gray-200'>{role}</span>
      </section>
    </section>
  )
}
