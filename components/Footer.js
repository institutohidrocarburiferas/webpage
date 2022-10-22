import Image from 'next/image'

export function Footer ({
  svgColor = 'fill-white dark:fill-gray-900',
  image,
}
) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
  }

  return <footer className="relative">
    {/* SVG top image */}
    <svg className="absolute bg-transparent" xmlns="http://www.w3.org/2000/svg" width="100%" height="80px" viewBox="0 0 1280 140" preserveAspectRatio="none">
      <g className={svgColor}><path d="M978.81 122.25L0 0h1280l-262.1 116.26a73.29 73.29 0 0 1-39.09 5.99z" fillOpacity=".5" /><path d="M983.19 95.23L0 0h1280l-266 91.52a72.58 72.58 0 0 1-30.81 3.71z" /></g>
    </svg>

    {/* Background image */}
    <div
      style={bgStyle}
      className='absolute w-full h-full -z-10'
    ></div>

    {/* Footer container */}
    <div
      className="flex justify-center w-full h-auto px-5 pt-12 pb-5 font-semibold text-white md:pt-12 bg-black/60"
    >
      <div className='flex flex-col container justify-between gap-8 md:flex-row'>
        <section className='flex flex-col text-sm'>
          <span>Universidad Central del Ecuador</span>
          <span>Ingreso por las Calles Jerónimo Leyton y Gilberto Gatto Sobral </span>
          <span>Facultad de Ingeniería en Geología, Petróleos, Minas y Ambiental - FIGEMPA </span>
          <span>Segundo piso, Área Posgrado </span>
          <span>Quito - Ecuador </span>
        </section>

        {/* Middle section
      <section className='text-3xl md:text-xl lg:text-3xl'>
      </section> */}

        {/* Right section */}
        <section className='flex flex-col items-center justify-center gap-5 place-content-center'>
          <Image
            width={100}
            height={100}
            src="/UCE-logo.png"
            alt="Universidad Central del Ecuador Logo"
          />
        </section>
      </div>
      {/* Left section */}

    </div>
  </footer>
}
