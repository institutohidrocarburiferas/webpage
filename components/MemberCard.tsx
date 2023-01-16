import Image from 'next/image'

interface Props {
  name: string
  image: string
  role: string
  openModal: () => void
}

export const MemberCard: React.FC<Props> = ({name, image, role, openModal}) => {
  return (
    <section
      className="flex flex-col bg-gray-200 border rounded-md cursor-pointer w-2/5 md:w-56 lg:w-64 md:hover:scale-105"
      onClick={openModal}>
      <Image
        alt={name}
        className='object-cover object-top rounded-t-md'
        height={350}
        src={image}
        width={350}
      />
      <section className='grid px-2 lg:px-0 w-full h-16 md:h-20 font-semibold gap-1 text-center bg-black/70 rounded-b-md place-content-center'>
        <span className='text-xs sm:text-sm md:text-base text-white'>{name}</span>
        <span className='text-[0.6rem] sm:text-xs md:text-sm text-gray-200'>{role}</span>
      </section>
    </section>
  )
}
