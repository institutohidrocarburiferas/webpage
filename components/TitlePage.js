export function TitlePage ({ title, image }) {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
