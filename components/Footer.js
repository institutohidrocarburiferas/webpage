import Image from 'next/image'

export function Footer ({ bgColor, image = '/prueba.png' }) {
  bgColor = bgColor ? `fill-${bgColor}` : 'fill-white dark:fill-gray-900'

  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
  }
  return <footer className="relative bg-black/80">

    <svg className="absolute bg-transparent" xmlns="http://www.w3.org/2000/svg" width="100%" height="80px" viewBox="0 0 1280 140" preserveAspectRatio="none">
      <g className={`${bgColor}`}><path d="M978.81 122.25L0 0h1280l-262.1 116.26a73.29 73.29 0 0 1-39.09 5.99z" fillOpacity=".5" /><path d="M983.19 95.23L0 0h1280l-266 91.52a72.58 72.58 0 0 1-30.81 3.71z" /></g></svg>
    <section
      style={bgStyle}
      className="flex flex-col h-auto gap-5 px-20 pt-32 pb-20 font-bold text-white md:justify-around md:flex-row"

    >
      <section className='text-3xl md:text-xl lg:text-3xl md:w-1/3'>
        <span>Instituto de Investigaciones Hidrocarburíferas</span>
      </section>
      <section className='flex flex-col gap-3 md:w-1/3'>
        <span>Universidad Central del Ecuador</span>
        <span>Ingreso por las Calles Jerónimo Leyton y Gilberto Gatto Sobral </span>
        <span>Quito - Ecuador </span>
      </section>

      <section className='flex flex-row items-center justify-center gap-5 md:w-1/3 place-content-center'>
        <Image
          width={341}
          height={100}
          className="bg-white rounded-lg"
          src="/logoiih.png"
          alt="Instituto de Investigaciones Logo"
        />
        <Image
          width={150}
          height={150}
          src="/UCE-logo.png"
          alt="Universidad Central del Ecuador Logo"
        />
      </section>
    </section>

  </footer>
}
