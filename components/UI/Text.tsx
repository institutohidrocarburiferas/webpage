interface Props {
  children: React.ReactNode
}

export const Text: React.FC<Props> = ({children}) => {
  return <p className='mt-3 text-sm leading-loose tracking-wide text-justify md:mt-6 sm: text-md md:text-lg'>
    {children}
  </p>
}
