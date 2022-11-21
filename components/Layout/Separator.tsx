interface Props {
  id?: string
}

export const Separator: React.FC<Props> = ({id}) => {
  return <div className='w-full h-6 md:h-24' id={id} />
}
