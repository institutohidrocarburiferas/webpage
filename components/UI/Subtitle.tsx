interface Props {
  children: React.ReactNode
}

export const Subtitle: React.FC<Props> = ({children}) => {
  return <h3 className='py-2 text-lg font-bold border-b-2 sm:text-xl lg:text-2xl'>{children}</h3>
}
