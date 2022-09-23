import Image from 'next/image'

export default function MemberInfo ({ name, image, title, description }) {
  return <div className="flex flex-col items-center justify-center w-full h-auto gap-5 px-10">
    <div className='flex flex-col items-center gap-5'>
    <h2 className="font-bold">{name}</h2>

    <Image
      width={200}
      height={200}
      className="object-cover object-top rounded-full"
      src={image}
      alt={name}
    />
    <p className='pb-2 leading-normal tracking-wide border-b-2 '>{title}</p>

    </div>

    <p className='py-5 leading-loose tracking-wide text-justify lg:text-lg lg:w-4/5'>{description}</p>

  </div>
}
