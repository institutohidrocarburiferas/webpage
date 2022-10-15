export function TitlePage ({ title, image }) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
  }

  return <header className='relative overflow-hidden -z-10 md:pt-0 h-48'>
    {/* Background image */}
    <section
      style={bgStyle}
      className="w-full h-full absolute -z-20">
    </section>
    {/* Title */}
    <h1
      className="bg-black/40 h-full grid place-content-center text-center px-8 lg:px-40 pb-20 text-2xl font-bold tracking-wider text-white sm:text-3xl dark:text-gray-100"
    >
      {title}
    </h1>
    {/* Svg bottom image */}
    <svg className="absolute bottom-0 fill-white dark:fill-gray-900" xmlns="http://www.w3.org/2000/svg" width="100%" height="80px" viewBox="0 0 1280 140" preserveAspectRatio="none"><g><path d="M0 47.44L170 0l626.48 94.89L1110 87.11l170-39.67V140H0V47.44z" fillOpacity=".5" /><path d="M0 90.72l140-28.28 315.52 24.14L796.48 65.8 1140 104.89l140-14.17V140H0V90.72z" /></g></svg>
  </header>
}
