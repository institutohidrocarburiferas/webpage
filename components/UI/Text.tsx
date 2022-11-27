import cn from 'classnames'

interface Props {
  children: React.ReactNode
  margin?: boolean
}

export const Text: React.FC<Props> = ({children, margin = true}) => {
  return <p className={cn('text-sm leading-loose tracking-wide text-justify sm: text-md md:text-lg', {'mt-3 md:mt-6': margin})}>
    {children}
  </p>
}
