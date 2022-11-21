import {parseISO, format} from 'date-fns'
import {es, enUS} from 'date-fns/locale'
import {useRouter} from 'next/router'

interface Props {
  dateString: string
}

const Date: React.FC<Props> = ({dateString}) => {
  const {locale} = useRouter()
  const date = parseISO(dateString)

  const local = locale === 'es' ? es : enUS

  return <time className="text-sm md:text-lg" dateTime={dateString}>{format(date, 'LLLL d, yyyy', {locale: local})}</time>
}

export default Date
