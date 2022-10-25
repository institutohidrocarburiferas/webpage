import Image from 'next/image'

export default function MemberInfo ({ name, image, title, description }) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto gap-5 px-10">
      <header className='flex flex-col items-center w-full gap-5'>
        <h2 className="font-bold">{name}</h2>
        <Image
          width={200}
          height={200}
          className="object-cover object-top rounded-full"
          src={image}
          alt={name}
        />
        <p className='w-full pb-2 leading-normal tracking-wide text-center lg:w-4/5'>
          {title}
        </p>
      </header>
      <section className='py-5 border-t-2 lg:w-4/5 flex flex-col gap-5'>
        {description.map((el, i) => (

          <p key={i} className='leading-loose tracking-wide text-justify  lg:text-lg  '>
            {el}
          </p>
        ))}
      </section>
    </section>
  )
}
