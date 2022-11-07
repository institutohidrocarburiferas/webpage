export function TitlePage ({ title, image }) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
  }

  return <header className='relative h-auto overflow-hidden'>
    {/* Background image */}
    <section
      style={bgStyle}
      className="absolute top-0 w-full h-full -z-20">
    </section>
    {/* Title */}
    <h1
    style={{
      textShadow: '2px 2px 2px black'
    }}
      className="grid h-full px-4 pt-10 pb-20 text-xl font-bold tracking-wider text-center text-white sm:text-3xl bg-black/40 place-content-center xl:px-40 lg:text-4xl lg:px-20"
    >
      {title}
    </h1>
    {/* Svg bottom image */}
    <svg className="absolute bottom-0 fill-white dark:fill-gray-900" xmlns="http://www.w3.org/2000/svg" width="100%" height="70px" viewBox="0 0 1280 140" preserveAspectRatio="none"><g><path d="M0 47.44L170 0l626.48 94.89L1110 87.11l170-39.67V140H0V47.44z" fillOpacity=".5" /><path d="M0 90.72l140-28.28 315.52 24.14L796.48 65.8 1140 104.89l140-14.17V140H0V90.72z" /></g></svg>
  </header>
}
