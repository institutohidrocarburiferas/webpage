interface Props {
  children: React.ReactNode
}

export const Title: React.FC<Props> = ({children}) => {
  return <h2 className='py-2 text-2xl font-bold text-center lg:py-5 sm:text-3xl lg:text-4xl'>{children}</h2>
}
