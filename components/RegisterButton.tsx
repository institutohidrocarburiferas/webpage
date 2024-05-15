import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode,
  className?: string
}

export const RegisterButton: React.FC<Props> = ({href, children, className}) => {
  return (
  <Link
    className={`${className} flex items-center justify-center w-auto px-4 py-2 font-semibold text-center text-black rounded md:px-6 md:py-2 sm:text-lg md:text-xl hover:scale-105 bg-gradient-to-tr hover:from-amber-400 scroll-smooth hover:to-white from-amber-500 to-white`}
    href={href}>
      {children}
  </Link >
  )
}
