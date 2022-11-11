import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'

export default function Date ({ dateString }) {
  const date = parseISO(dateString)
  return <time className="text-sm md:text-lg" dateTime={dateString}>{format(date, 'LLLL d, yyyy', { locale: es })}</time>
}
