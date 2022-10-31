export function HeroSection ({
  title,
  text,
  image,
  height = '100vh',
  justifyContent = 'center',
  children,
}) {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${image})`,
        display: 'grid',
        height,
        justifyContent,
        alignContent: 'center',
        maxHeight: 1000,
      }}
      className="p-5 sm:px-16 md:py-12 md:pl-24">
      <div className="container flex flex-col gap-5">
        <h2>
          <p className='inline-block text-4xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-amber-400 via-orange-500 to-orange-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fade'>{title}</p>
        </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 0.75rem + 1vw, 1.5rem)'
        }} className='leading-normal tracking-wider text-gray-100 animate-fade lg:text-justify'>{text}</p>
      </div>
      <div className='w-full animate-fade'>
        {children}
      </div>
    </div>
  )
}
