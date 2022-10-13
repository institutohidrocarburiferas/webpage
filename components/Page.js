import Image from 'next/image'

export function Page () {
  return <>

  </>
}

export function TitlePage ({ title, image, position = 'top center' }) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: position,
    backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
  }

  return <header className='relative overflow-hidden -z-10 md:pt-0'>
    <h1
      style={bgStyle}
      className="grid w-screen h-48 text-2xl font-bold tracking-wider text-white sm:text-3xl md:text-4xl place-content-center dark:text-gray-100"
    >
      {title}
    </h1>
    <svg className="absolute bottom-0 fill-white dark:fill-gray-900" xmlns="http://www.w3.org/2000/svg" width="100%" height="100px" viewBox="0 0 1280 140" preserveAspectRatio="none"><g><path d="M0 47.44L170 0l626.48 94.89L1110 87.11l170-39.67V140H0V47.44z" fillOpacity=".5"/><path d="M0 90.72l140-28.28 315.52 24.14L796.48 65.8 1140 104.89l140-14.17V140H0V90.72z"/></g></svg>
  </header>
}

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
      className="flex flex-col items-center h-auto gap-5 px-20 pt-32 pb-20 font-bold text-white md:justify-around md:flex-row"

    >
      <section className='text-3xl md:text-xl lg:text-3xl md:w-1/4'>
        <span>Instituto de Investigaciones Hidrocarburíferas</span>
      </section>
      <section className='flex flex-col gap-3 md:w-2/4 '>
        <span>Universidad Central del Ecuador</span>
        <span>Ingreso por las Calles Jerónimo Leyton y Gilberto Gatto Sobral </span>
        <span>Facultad de Ingeniería en Geología, Petróleos, Minas y Ambiental - FIGEMPA </span>
        <span>Segundo piso, Área Posgrado </span>
        <span>Quito - Ecuador </span>
      </section>

      <section className='flex flex-col items-center justify-center gap-5 md:w-1/4 place-content-center'>
        <Image
          width={150}
          height={150}
          src="/UCE-logo.png"
          alt="Universidad Central del Ecuador Logo"
        />
        <Image
          width={341}
          height={100}
          className="bg-white rounded-lg"
          src="/logoiih.png"
          alt="Instituto de Investigaciones Logo"
        />
      </section>
    </section>

  </footer>
}
